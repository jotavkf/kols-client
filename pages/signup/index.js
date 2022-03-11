import { LockClosedIcon } from '@heroicons/react/solid'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { api } from '../api/api.js'
import Link from "next/link";
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';



export default function SignUp() {
  const arrayDeEstados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",]
  const router = useRouter()




  return (
    <div className='h-full bg-gray-50 w-full'>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div><Toaster /></div>
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/economy.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Crie sua conta</h2>
          </div>
          {/* Usando o Formik. initialValues é os campos, tu estrutura por nomedocampo : "preenchimento (vazio)".
          Depois vem o onSubmit, que é o que o botão roda.
          Form e Field são componentes do Formik, que aí facilitam a manipulação */}
          <Formik
            validateOnChange={true}
            validateOnBlur={true}
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
                router.push('/login')
              } catch (error) {
                console.log(error.response.data)
                alert(`${error.response.data}`) }
            }}
          >
           <Form className="mt-8 space-y-6" >
              <div className="rounded-md shadow-sm space-y-px">
                <div>
                <label htmlFor="name" className="form-label inline-block mb-2 text-emerald-700">Nome</label>
                  <Field
                    id="name"
                    name="name"
                    placeholder="João"
                    type="text"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                <label htmlFor="lastName" className="form-label inline-block mb-2 text-emerald-700 mt-3">Sobrenome</label>
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder="da Silva"
                    type="text"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                <label htmlFor="birthdate" className="form-label inline-block mb-2 text-emerald-700 mt-3">Data de Nascimento</label>
                  <Field
                    id="birthdate"
                    name="birthdate"
                    type="date"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                <label htmlFor="cpf" className="form-label inline-block mb-2 text-emerald-700 mt-3">CPF (com pontos e traço)</label>
                  <Field
                    id="cpf"
                    name="cpf"
                    placeholder="Ex: 000.000.000-00"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                <label htmlFor="RG" className="form-label inline-block mb-2 text-emerald-700 mt-3">RG (com pontos e traço)</label>
                  <Field
                    id="rg"
                    name="rg"
                    placeholder="Ex: 00.000.000-0"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                <label htmlFor="rgUF" className="form-label inline-block mb-2 text-emerald-700 mt-3">UF (RG)</label>
                  <Field as="select"
                    id="rgUF"
                    name="rgUF"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  >
                    <option value="" disabled>Estado</option>
                    {arrayDeEstados.map((cE) => { return <option key={cE} value={`${cE}`}>{cE}</option> })}
                  </Field>
                </div>
                <div>
                <label htmlFor="phone" className="form-label inline-block mb-2 text-emerald-700 mt-3">Telefone</label>
                  <Field
                    id="phone"
                    name="phone"
                    placeholder="Telefone"
                    type="number"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                <label htmlFor="phone" className="form-label inline-block mb-2 text-emerald-700 mt-3">Endereço</label>
                  <Field
                    id="address.street"
                    name="address.street"
                    placeholder="Rua (Ex: Rua das Flores)"
                    type="text"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="address.number"
                    name="address.number"
                    placeholder="Número (Ex: 94)"
                    type="number"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="address.district"
                    name="address.district"
                    placeholder="Distrito/Bairro (Ex: Centro)"
                    type="text"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="address.city"
                    name="address.city"
                    placeholder="Cidade (Ex: São Paulo)"
                    type="text"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="address.zipcode"
                    name="address.zipcode"
                    placeholder="CEP com traço (Ex: 00000-000)"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <div>
                    <Field as="select"
                      id="address.state"
                      name="address.state"
                      required={true}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                    >
                    <option value="" disabled>Estado</option>
                      {arrayDeEstados.map((cE) => { return <option key={cE} value={`${cE}`}>{cE}</option> })}
                    </Field>
                  </div>
                </div>
                <div>
                <label htmlFor="phone" className="form-label inline-block mb-2 text-emerald-700 mt-3">Conta</label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    required={true}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Field
                    id="password"
                    name="password"
                    placeholder="Senha"
                    type="password"
                    required={true}
                    className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                  Cadastrar
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}