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
      </div>
    </>
  );
}

export default Report;
