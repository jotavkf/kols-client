import { useRouter } from "next/router";
import { api } from "../../api/api";
import NavbarBusiness from "../../../components/NavbarBusiness";
import { useEffect, useState } from "react";


function Report() {
  const [isLoading, setIsloading] = useState(true);
  const [isLoading2, setIsloading2] = useState(true);
  const [products, setProducts] = useState();
  const [logs, setLogs] = useState();

  const router = useRouter();
  const { id } = router.query;
  console.log(id)

  useEffect(() => {
    async function Products() {
      try {
        const response = await api.get(`/products/${id}`);
        setProducts(response.data);
        setIsloading(false);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    Products()

    async function data() {
      try {
        const response = await api.get(`/business/${id}/log`);
        setLogs(response.data);
        setIsloading2(false)
      } catch (error) {
        console.error(error);
      }
    }
    data()
  }, [id]);


  console.log(logs);

  return (
    <>
      <NavbarBusiness />
      <div>
        {!isLoading &&
          <>
            <h1>Produtos em Ponto de Pedido</h1>
            <table className="table-fixed px-2 py-2">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Quantidade</th>
                  <th>Ponto de Pedido</th>
                </tr>
              </thead>
              <tbody>
                {products
                  .filter(cE => cE.quantity <= cE.resupplyPoint)
                  .map((cE) => {
                    return (
                      <tr key={cE._id}>
                        <td>{cE.name}</td>
                        <td>{cE.quantity}</td>
                        <td>{cE.resupplyPoint}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>

            <h1 className="text-lg">Margem de lucro dos Produtos</h1>
            <table className="table-fixed px-2 py-2">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Preço de Compra</th>
                  <th>Preço de Venda</th>
                  <th>Margem de Lucro (%)</th>
                  <th>Margem de Lucro (R$)</th>
                </tr>
              </thead>
              <tbody>
                {products
                  .map((cE) => {
                    return (
                      <tr key={cE._id}>
                        <td>{cE.name}</td>
                        <td>{cE.purchasePrice}</td>
                        <td>{cE.salePrice}</td>
                        <td>{((cE.salePrice - cE.purchasePrice) * 100 / cE.salePrice).toFixed(2)}%</td>
                        <td>R$ {cE.salePrice - cE.purchasePrice}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>



          </>
        }
        {!isLoading2 &&
          <>
            <h1 className="text-lg">MOVIMENTAÇÃO DO ESTOQUE POR PRODUTOS - VENDAS</h1>
            <table className="table-fixed px-2 py-2">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Nome do Produto</th>
                  <th>Preço de Venda</th>
                  <th>Quantidade</th>
                  <th>Valor total</th>
                  <th>Usuário</th>
                </tr>
              </thead>
              <tbody>
                {logs
                  .filter(cE => cE.quantityOutput)
                  .map((cE) => {
                    return (
                      <tr key={cE._id}>
                        <td>{cE.date.slice(0, 10)}</td>
                        <td>{cE.nameProduct.name}</td>
                        <td>R$ {cE.salePrice}</td>
                        <td>{cE.quantityOutput}</td>
                        <td>R$ {cE.quantityOutput * cE.salePrice}</td>
                        <td>{cE.userName.name}</td>
                      </tr>
                    )
                  }
                  )}
              </tbody>
            </table>

            <h1 className="text-lg">MOVIMENTAÇÃO DO ESTOQUE POR PRODUTOS - COMPRAS</h1>
            <table className="table-fixed px-2 py-2">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Nome do Produto</th>
                  <th>Preço de Compra</th>
                  <th>Quantidade</th>
                  <th>Valor total</th>
                  <th>Usuário</th>
                </tr>
              </thead>
              <tbody>
                {logs
                  .filter(cE => cE.quantityInput)
                  .map((cE) => {
                    return (
                      <tr key={cE._id}>
                        <td>{
                          cE.date.slice(0, 10)

                        }</td>
                        <td>{cE.nameProduct.name}</td>
                        <td>R$ {cE.purchasePrice}</td>
                        <td>{cE.quantityInput}</td>
                        <td>R$ {cE.quantityInput * cE.purchasePrice}</td>
                        <td>{cE.userName.name}</td>
                      </tr>
                    )
                  }
                  )}
              </tbody>
            </table>
          </>}
      </div>
    </>
  );
}

export default Report;
