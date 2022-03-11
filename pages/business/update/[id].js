import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useRouter } from 'next/router'
import NavbarBusiness from "../../../components/NavbarBusiness";
import Link from "next/link";
import { Formik, Form, Field } from 'formik';



export default function BusinessUpdate() {
  const [isLoad, setIsLoad] = useState(true);
  const [business, setBusiness] = useState({});

  const router = useRouter()
  const { id } = router.query

  const arrayDeEstados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",]


  useEffect(() => {
    async function fetchBusiness() {
      try {
        const response = await api.get(`/business/profile/${id}`);
        setBusiness(response.data)
        setIsLoad(false)
      } catch (error) {
        console.error(error);
      }
    }
    fetchBusiness();
  }, [id]);





  /* FUNÇÃO PARA COLOCAR NO BOTÃO DE EXCLUIR 
  
    async function deleteBusiness() {
      try {
          const response = await api.patch(`/business/update/${id}`, values);
      } catch (error) {
          console.error(error);
      }
  } */


  return (
    <div>
      <NavbarBusiness />

      {!isLoad &&
        <div>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Informações da Empresa</h3>
                  <p className="mt-1 text-sm text-gray-600">Preencha com as informações da sua empresa.</p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <Formik
                  initialValues={{
                    corporateName: `${business.corporateName}`,
                    name: `${business.name}`,
                    cnpj: `${business.cnpj}`,
                    ie: `${business.ie}`,
                    im: `${business.im}`,
                    email: `${business.email}`,
                    phone: `${business.phone}`,
                    address: {
                      street: `${business.address.street}`,
                      number: `${business.address.number}`,
                      district: `${business.address.district}`,
                      city: `${business.address.city}`,
                      zipcode: `${business.address.zipcode}`,
                      state: `${business.address.state}`
                    }
                  }}
                  onSubmit={async function (values) {
                    try {

                      await api.patch(`/business/update/${id}`, values);
                      router.push(`/business/${id}`)
                    } catch (e) { console.error(e) }
                  }}>
                  <Form>
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-6">
                            <label htmlFor="corporateName" className="block text-sm font-medium text-gray-700">
                              Razão Social
                            </label>
                            <Field
                              type="text"
                              name="corporateName"
                              id="corporateName"
                              required={true}
                              className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-6">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                              Nome Fantasia
                            </label>
                            <Field
                              type="text"
                              name="name"
                              id="name"
                              className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">
                              CNPJ
                            </label>
                            <Field
                              type="text"
                              name="cnpj"
                              id="cnpj"
                              placeholder="xx.xxx.xxx/xxxx-xx"
                              className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="ie" className="block text-sm font-medium text-gray-700">
                              Inscrição Estadual
                            </label>
                            <Field
                              type="text"
                              name="ie"
                              id="ie"
                              placeholder="xxx.xxx.xxx.xxx"
                              className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="im" className="block text-sm font-medium text-gray-700">
                              Inscrição Municipal
                            </label>
                            <Field
                              type="text"
                              name="im"
                              id="im"
                              placeholder="xxxxxxx/xxx-x"
                              className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                              Email address
                            </label>
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              autoComplete="email"
                              className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              placeholder="empresa@empresa.com"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="Telefone" className="block text-sm font-medium text-gray-700">
                              Telefone
                            </label>
                            <Field
                              type="number"
                              name="phone"
                              id="phone"
                              autoComplete="address-level2"
                              className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              placeholder="(xx) xxxxx-xxxx"
                            />
                          </div>
                          <div className="col-span-3 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                              CEP
                            </label>
                            <Field
                              type="number"
                              name="address.zipcode"
                              id="address.zipcode"
                              autoComplete="zipcode"
                              className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              placeholder="00000-000"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-1">
                            <label htmlFor="address.state" className="block text-sm font-medium text-gray-700">
                              Estado
                            </label>
                            <Field
                              as="select"
                              id="address.state"
                              name="address.state"
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                            >
                              {arrayDeEstados.map((cE) => { return <option key={cE} value={`${cE}`}>{cE}</option> })}
                            </Field>
                          </div>

                          <div className="col-span-3 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                              Cidade
                            </label>
                            <Field
                              type="text"
                              name="address.city"
                              id="address.city"
                              autoComplete="address-level2"
                              className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-2">
                            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                              Numero
                            </label>
                            <Field
                              type="number"
                              name="address.number"
                              id="address.number"
                              autoComplete="Rua"
                              className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-3">
                            <label htmlFor="Rua" className="block text-sm font-medium text-gray-700">
                              Rua
                            </label>
                            <Field
                              type="text"
                              name="address.street"
                              id="address.street"
                              autoComplete="Rua"
                              className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                              Bairro
                            </label>
                            <Field
                              type="text"
                              name="address.district"
                              id="address.district"
                              autoComplete="address-level1"
                              className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="button"
                          className=" flexbox inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                          onClick={async function () {
                            try {
                              await api.delete(`/business/${id}/disable-business`);
                            } catch (error) {
                              console.error(error);
                            }
                          }}
                        >
                          <Link href={`/business/delete/${id}`}> DELETER EMPRESA </Link></button>
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
                          Salvar
                        </button>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
        </div>
      }






    </div>
  )
}
