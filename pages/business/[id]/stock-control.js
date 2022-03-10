import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavbarBusiness from "../../../components/NavbarBusiness";
import { api } from "../../api/api.js";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Products() {
  const [isLoading, setIsloading] = useState(true);
  const [products, setProducts] = useState();
  const [rerender, setRerender] = useState(false);
  const [input, setInput] = useState();
  const [search, setSearch] = useState('')


  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get(`/products/${id}`); //buscar todos os produtos
        setProducts([...response.data]);
        setIsloading(false);
        setRerender(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, [id, rerender]);

  return (
    <>
      {" "}
      <NavbarBusiness />
      {!isLoading && (
        <div className="flex flex-col">
          <input type='search' placeholder='Busque por um produto' onChange={(event) => { setSearch((event.target.value).toLocaleLowerCase()) }} />

          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Nome
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Quantidade
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Tipo
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Movimentar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products
                      .filter(cE => (cE.name).toLocaleLowerCase().includes(search))

                      .map(cE => {
                        return (
                          <tr key={cE._id} className="bg-gray-100 border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {cE.partNumber}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {cE.name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {cE.quantity}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() => {
                                  setInput(true);
                                }}
                                className="flex inline-block px-3 py-1.5 bg-green-600 text-white font-small text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                              >
                                Entrada
                              </button>
                              <br />
                              <button
                                onClick={() => {
                                  setInput(false);
                                }}
                                className="flex inline-block px-3 py-1.5 bg-red-600 text-white font-small text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                              >
                                Saída
                              </button>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex">
                              {input && (
                                <Formik
                                  initialValues={{
                                    _id: `${cE._id}`,
                                    quantity: ``,
                                    purchasePrice: ``,
                                  }}
                                  onSubmit={async function (
                                    values,
                                    { resetForm }
                                  ) {
                                    try {

                                      await api.patch(
                                        "products/input-product",
                                        values
                                      );
                                      setRerender(true);
                                    } catch (e) {
                                      console.error(e);
                                    }
                                    resetForm();
                                  }}
                                >
                                  <Form className=" flex ">
                                    Entrada:
                                    <Field
                                      id="quantity"
                                      name="quantity"
                                      type="number"
                                      placeholder="Quantidade"
                                      className=""
                                    ></Field>
                                    <Field
                                      id="purchasePrice"
                                      name="purchasePrice"
                                      type="number"
                                      placeholder="Purchase Price"
                                      className=""
                                    ></Field>
                                    <div className="">
                                      <button
                                        type="submit"
                                        className=" rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9"
                                      >
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="fas"
                                          data-icon="download"
                                          className="w-3 mx-auto"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                          ></path>
                                        </svg>
                                      </button>
                                    </div>
                                  </Form>
                                </Formik>
                              )}

                              {!input && (
                                <Formik
                                  initialValues={{
                                    _id: `${cE._id}`,
                                    quantity: ``,
                                    salePrice: ``,
                                  }}
                                  onSubmit={async function (
                                    values,
                                    { resetForm }
                                  ) {
                                    try {

                                      await api.patch(
                                        "products/output-product",
                                        values
                                      );
                                      setRerender(true);
                                    } catch (e) {
                                      console.error(e);
                                    }
                                    resetForm();
                                  }}
                                >
                                  <Form className="flex">
                                    Saída:
                                    <Field
                                      id="quantity"
                                      name="quantity"
                                      type="number"
                                      placeholder="Quantidade"
                                      className=""
                                    ></Field>
                                    <Field
                                      id="salePrice"
                                      name="salePrice"
                                      type="number"
                                      placeholder="Sale Price"
                                      className=""
                                    ></Field>
                                    <div className="">
                                      <button
                                        type="submit"
                                        className=" rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9"
                                      >
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="fas"
                                          data-icon="download"
                                          className="w-3 mx-auto"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                          ></path>
                                        </svg>
                                      </button>
                                    </div>
                                  </Form>
                                </Formik>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
