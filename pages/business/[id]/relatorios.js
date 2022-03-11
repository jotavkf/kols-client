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
      <div className="flex flex-col place-content-center flex-wrap">
        <div className="flex flex-col items-center border border-slate-200 m-2 shadow-md">
          <h2>Esses produtos estão abaixo do seu ponto de pedido.</h2>
          <Chart
            height={"410px"}
            width={"559px"}
            chartId={"622a7e59-3d53-43cb-8393-14f3e5eb28bb"}
            filter={""}
          />
        </div>
        <div className="flex flex-col items-center border border-slate-200 m-2 shadow-md">
          <h2>Essa é a margem de lucro de todos os produtos em estoque.</h2>
          <h4>A conta é feita apartir do valor de venda e compra inseridos na criação do produto.</h4>
          <Chart
            height={"410px"}
            width={"938px"}
            chartId={"6228fe16-5281-4d8a-8e50-020fbb582356"}
            filter={""}
          />
        </div>
        <div className="flex flex-col items-center border border-slate-200 m-2 shadow-md">
          <h2>Soma dos valores e das quantidades de produtos vendidos em um dia.</h2>
          <Chart
            height={"410px"}
            width={"559px"}
            chartId={"62290680-9d1d-4e8f-883f-3b41b3239265"}
            filter={""}
          />
        </div>
        <div className="flex flex-col items-center border border-slate-200 m-2 shadow-md">
          <h2>Soma dos valores e das quantidades de produtos comprados em um dia.</h2>

          <Chart
            height={"410px"}
            width={"559px"}
            chartId={"68674fb0-d71f-4025-b050-9d548bc14929"}
            filter={""}
          />
        </div>
        <div className="flex flex-col items-center border border-slate-200 m-2 shadow-md">
          <h2>Soma do valor em estoque.</h2>

          <Chart
            height={"410px"}
            width={"369px"}
            chartId={"622a3694-7bb4-490a-82e5-9ea31197af58"}
            filter={""}
          />
        </div>
        <div className="flex flex-col items-center border border-slate-200 m-2 shadow-md">
          <Chart
            height={"410px"}
            width={"938px"}
            chartId={"622a73bf-efdd-4f9b-8eb2-37dce878d992"}
            filter={""}
          />
        </div>
        <div className="flex flex-col items-center border border-slate-200 m-3 shadow-md">
          <Chart
            height={"410px"}
            width={"938px"}
            chartId={"e95ccddf-4581-40b8-b13e-f4373bebe685"}
            filter={""}
          />
        </div>
      </div>
    </>
  );
}

export default Report;
