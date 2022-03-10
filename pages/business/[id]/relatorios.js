import { useRouter } from "next/router";
import { api } from "../../api/api";
import NavbarBusiness from "../../../components/NavbarBusiness";
import { useEffect, useState } from "react";
import Chart from "chart.js/auto";

function Report() {
  //states dos produtos
  const [isLoading, setIsloading] = useState(true);
  const [products, setProducts] = useState();

  //state dos logs
  const [isLoading2, setIsloading2] = useState(true);
  const [logs, setLogs] = useState();

  //state do gráfico
  const [isLoading3, setIsloading3] = useState(true);
  const [chart, setChart] = useState(null);
  const [chartData, setChartData] = useState({});

  const router = useRouter();
  const { id } = router.query;

  //CONSUMINDO API DO BANCO DE DADOS
  useEffect(() => {
    async function Products() {
      try {
        const response = await api.get(`/products/${id}`);
        setProducts(response.data);
        setIsloading(false);
      } catch (error) {
        console.error(error);
      }
    }
    Products();

    async function data() {
      try {
        const response = await api.get(`/business/${id}/log`);
        setLogs(response.data);
        setIsloading2(false);
        setIsloading3(false);
      } catch (error) {
        console.error(error);
      }
    }
    data();
  }, [id]);

  //GRÁFICO
  useEffect(() => {
    if (!isLoading3) {
      // se loading for false (api já terminou de enviar as informações), renderizar o chart
      function renderChart() {
        const ctx = document.getElementById("instanceChart").getContext("2d");

        if (chart) {
          chart.destroy();
        }

        //DATA E QUANTIDADE DE PRODUTOS - SAÍDA
        const dates = logs
          .filter(cE => cE.quantityOutput)
          .map(cE => cE.date.slice(0, 10));
        const values = logs
          .filter(cE => cE.quantityOutput)
          .map(cE => cE.quantityOutput);
        const instanceChart = new Chart(ctx, {
          //config
          type: "line",
          data: {
            labels: dates,
            datasets: [
              {
                label: "Saídas de Produtos",
                data: values,
                borderColor: "rgb(21, 114, 161)",
                tension: 0.2,
              },
              /* {
                label: "Preço Bitcoin no BRASIL (valores em reais R$)",
                data: Object.values(dataBRL),
                borderColor: 'rgb(101, 93, 138)',
                tension: 0.2
            },
            {
                label: "Preço Bitcoin na CHINA (valores em Yuan ¥)",
                data: Object.values(dataCNY),
                borderColor: 'rgb(243, 197, 197)',
                tension: 0.2
            } */
            ],
          },
        });
        setChart(instanceChart);
      }
      renderChart();
    }
  }, [isLoading3, chartData]);

  return (
    <>
      <NavbarBusiness />
      <div>
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
<<<<<<< HEAD
            <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-kolsdb-cimpm/embed/charts?id=62289d58-5f2f-4297-8114-4374b1c85f8d&maxDataAge=300&theme=light&autoRefresh=true"></iframe>
=======

>>>>>>> 5dd7fefb64578fd6eec185d4e1949bfdc11078dd
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
      </div>
    </>
  );
}

export default Report;
