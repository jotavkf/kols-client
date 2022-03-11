import { useState, useEffect } from "react";
import Chart from "../../../components/Chart";
import NavbarBusiness from "../../../components/NavbarBusiness";

function Report() {
  // const business = localStorage.getItem("loggedInBusiness");
  // console.log(business);
  // const [filterBusiness, setFilterBusiness] = useState({});
  // const [id, setId] = useState();

  // useEffect(() => {
  //   setId(localStorage.getItem("loggedInBusiness"));
  //   const parsedBusiness = JSON.parse(id || '""');
  //   setFilterBusiness({ business: parsedBusiness });
  // }, [id]);

  // console.log(filterBusiness);

  return (
    <>
      <NavbarBusiness />

      <div style={{ display: "flex" }}>
        <Chart
          height={"410px"}
          width={"559px"}
          chartId={"622a7e59-3d53-43cb-8393-14f3e5eb28bb"}
          filter={""}
        />
        <Chart
          height={"410px"}
          width={"938px"}
          chartId={"6228fe16-5281-4d8a-8e50-020fbb582356"}
          filter={""}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Chart
          height={"410px"}
          width={"559px"}
          chartId={"62290680-9d1d-4e8f-883f-3b41b3239265"}
          filter={""}
        />
        <Chart
          height={"410px"}
          width={"559px"}
          chartId={"68674fb0-d71f-4025-b050-9d548bc14929"}
          filter={""}
        />
        <Chart
          height={"410px"}
          width={"369px"}
          chartId={"622a3694-7bb4-490a-82e5-9ea31197af58"}
          filter={""}
        />
      </div>
      <div>
<<<<<<< HEAD
        <Chart
          height={"410px"}
          width={"938px"}
          chartId={"622a73bf-efdd-4f9b-8eb2-37dce878d992"}
          filter={""}
        />
        <Chart
          height={"410px"}
          width={"938px"}
          chartId={"e95ccddf-4581-40b8-b13e-f4373bebe685"}
          filter={""}
        />
=======
        {!isLoading && (
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
                {products.map(cE => {
                  return (
                    <tr key={cE._id}>
                      <td>{cE.name}</td>
                      <td>{cE.quantity}</td>
                      <td>{cE.resupplyPoint}</td>
                    </tr>
                  );
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
                {products.map(cE => {
                  return (
                    <tr key={cE._id}>
                      <td>{cE.name}</td>
                      <td>{cE.purchasePrice}</td>
                      <td>{cE.salePrice}</td>
                      <td>
                        {(
                          ((cE.salePrice - cE.purchasePrice) * 100) /
                          cE.salePrice
                        ).toFixed(2)}
                        %
                      </td>
                      <td>R$ {cE.salePrice - cE.purchasePrice}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}

        {!isLoading2 && (
          <>
            <h1 className="text-lg">
              MOVIMENTAÇÃO DO ESTOQUE POR PRODUTOS - VENDAS
            </h1>
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

                  .map(cE => {
                    return (
                      <tr key={cE._id}>
                        <td>{cE.date.slice(0, 10)}</td>
                        <td>{cE.nameProduct.name}</td>
                        <td>R$ {cE.salePrice}</td>
                        <td>{cE.quantityOutput}</td>
                        <td>R$ {cE.quantityOutput * cE.salePrice}</td>
                        <td>{cE.userName.name}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>

            <h1 className="text-lg">
              MOVIMENTAÇÃO DO ESTOQUE POR PRODUTOS - COMPRAS
            </h1>
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

                  .map(cE => {
                    return (
                      <tr key={cE._id}>
                        <td>{cE.date.slice(0, 10)}</td>
                        <td>{cE.nameProduct.name}</td>
                        <td>R$ {cE.purchasePrice}</td>
                        <td>{cE.quantityInput}</td>
                        <td>R$ {cE.quantityInput * cE.purchasePrice}</td>
                        <td>{cE.userName.name}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div>
              <div className="graph">
                {isLoading3 ? (
                  "Carregando..."
                ) : (
                  <canvas className="graph" id="instanceChart" />
                )}
              </div>
            </div>
          </>
        )}
>>>>>>> e053778672da0526ce49b23155bb59f366c0abc1
      </div>
    </>
  );
}

export default Report;
