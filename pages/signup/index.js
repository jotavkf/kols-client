import { LockClosedIcon } from '@heroicons/react/solid'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { api } from '../api/api.js'
import Link from "next/link";



export default function SignUp() {
  const arrayDeEstados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",]

  return (
    <div className='h-screen bg-gray-50 w-screen'>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Crie sua conta</h2>
          </div>
          {/* Usando o Formik. initialValues é os campos, tu estrutura por nomedocampo : "preenchimento (vazio)".
          Depois vem o onSubmit, que é o que o botão roda.
          Form e Field são componentes do Formik, que aí facilitam a manipulação */}
          <Formik
            initialValues={{
              name: '',
              lastName: '',
              email: '',
              birthdate: '',
              cpf: '',
              rg: '',
              rgUF: '',
              phone: '',
              address: {
                street: '',
                number: '',
                district: '',
                city: '',
                zipcode: '',
                state: '',
              },
              password: '',

            }}
            onSubmit={async function (values) {
              try {
                await api.post("/users/create-user", values);
              } catch (e) { alert('Algo deu errado') }

            }}
            validate={values => {
              const errors = {};
                if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
                  errors.email = 'Formato inválido de e-mail'
                }
                if (!/^\d{3}.\d{3}.\d{3}-\d{2}$/.test(values.cpf)){
                  errors.cpf = 'Formato inválido de CPF'
                }
                if (!/(\d{1,2}.?)(\d{3}.?)(\d{3})(-?[0-9Xx]{1})/.test(values.rg)){
                  errors.rg = 'Formato inválido de RG'
                }
                if (!/(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/.test(values.phone)){
                  errors.phone = 'Telefone inválido'
                }
                if (!/^([\d]{2}).?([\d]{3})-?([\d]{3})/.test(values.address.zipcode)){
                  errors.address.zipcode = 'CEP inválido'
                }
            }}
          >
            <Form className="mt-8 space-y-6" >
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <Field
                    id="name"
                    name="name"
                    placeholder="Nome"
                    type="text"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder="Sobrenome"
                    type="text"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="birthdate"
                    name="birthdate"
                    placeholder="Data de nascimento"
                    type="date"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="cpf"
                    name="cpf"
                    placeholder="CPF"
                    type="number"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="rg"
                    name="rg"
                    placeholder="RG"
                    type="number"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field as="Select"
                    id="rgUF"
                    name="rgUF"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  >
                    {arrayDeEstados.map((cE) => { return <option key={cE} value={`${cE}`}>{cE}</option> })}
                  </Field>
                </div>
                <div>
                  <Field
                    id="phone"
                    name="phone"
                    placeholder="Telefone"
                    type="number"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="address.street"
                    name="address.street"
                    placeholder="Rua"
                    type="text"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="address.number"
                    name="address.number"
                    placeholder="Número"
                    type="number"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="address.district"
                    name="address.district"
                    placeholder="Distrito"
                    type="text"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="address.city"
                    name="address.city"
                    placeholder="Cidade"
                    type="text"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="address.zipcode"
                    name="address.zipcode"
                    placeholder="CEP"
                    type="number"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <div>
                    <Field as="Select"
                      id="address.state"
                      name="address.state"
                      required={true}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    >
                      {arrayDeEstados.map((cE) => { return <option key={cE} value={`${cE}`}>{cE}</option> })}
                    </Field>
                  </div>
                </div>
                <div>
                  <Field
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="password"
                    name="password"
                    placeholder="Senha"
                    type="password"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span
                    className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  </span>
                  <Link href={"/business"}>Cadastrar</Link>

                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}