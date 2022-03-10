import Chart from "../../../components/Chart";
import NavbarBusiness from "../../../components/NavbarBusiness";

function Report() {
  return (
    <>
      <NavbarBusiness />

      <div style={{ display: "flex" }}>
        <Chart
          height={"480px"}
          width={"640px"}
          chartId={"62289d58-5f2f-4297-8114-4374b1c85f8d"}
          filter={""}
        />
        <Chart
          height={"480px"}
          width={"640px"}
          chartId={"6228fe16-5281-4d8a-8e50-020fbb582356"}
          filter={""}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Chart
          height={"480px"}
          width={"640px"}
          chartId={"62290680-9d1d-4e8f-883f-3b41b3239265"}
          filter={""}
        />
        <Chart
          height={"480px"}
          width={"640px"}
          chartId={"68674fb0-d71f-4025-b050-9d548bc14929"}
          filter={""}
        />
      </div>
    </>
  );
}

export default Report;
