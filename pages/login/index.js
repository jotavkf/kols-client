import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import da versão mais "preparada" do Formik
import { api } from '../api/api.js'; // Nossa API, criada para lidar com as rotas do backend e que assimila o Token criado pelo Login
import Link from 'next/link'; // Equivalente ao "Link to" do React Router - é a maneira de substituir a tag <a href> </a> no NextJS
import { useRouter } from 'next/router' // É o nosso router, utilizamos ele para redirecionamento
import { AuthContext } from '../../contexts/authContext' // Objeto de autenticação e que envelopa toda aplicação com os parâmetros registrados pelo loggedInUser
import { useState, useContext } from 'react'; 
import toast, { Toaster } from 'react-hot-toast';


export default function Login() {


    const { setLoggedInUser } = useContext(AuthContext) // Puxa o context (que é um objeto) e seleciona a função que atualiza o usuário
    const router = useRouter() // Instancia o router

    return (
        <div className='h-full bg-gray-50 w-full'> {/* Div que define a ocupação da tela através do viewport + cores */}
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                <div><Toaster/></div>
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="/economy.png"
                            alt="Logo"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Entre em sua conta</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            <Link href="/login/forgot-password">
                                <button className="font-medium text-emerald-600 hover:text-emerald-500">Esqueceu a senha?</button>
                            </Link>
                        </p>
                    </div>
                    <Formik
                        initialValues={{ email: '', password: '' }} // Aqui declaramos os campos e os valores de cada um
                        validate = {values => {
                            const errors = {};
                                if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){ // Exemplo de validação, mas como o Field já é do tipo e-mail, a validação aqui é redundante.
                                    errors.email = 'Email inválido'
                                }
                                return errors
                        }}
                        onSubmit={async function (values) { // Função que o button type='submit' vai executar no final do form
                            try {
                                const response = await api.post("/users/login", values);
                                setLoggedInUser(response.data); // Nossa função do useContext
                                localStorage.setItem("loggedInUser", JSON.stringify(response.data)); // Passa pro cache local
                                router.push('/business') // Redirecionamento
                            } catch (e) { alert(`Algo deu errado`) }
                        }}> 
                        <Form className="mt-8 space-y-6" > {/* O form é o componente de envelopamento do Formik; agrupa os campos */}
                            <div className="rounded-md shadow-sm -space-y-px">
                                <Field // Field é o componente-base do Formik; é o equivalente de algum input no HTML. o Formik cuida da manipulação dele no React através do ID/Name
                                    id="email"
                                    name="email"
                                    placeholder="E-mail"
                                    type="text"
                                    required={true}
                                    className="mb-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                />
                                <ErrorMessage name="email">{msg => 
                                    <div className="bg-red-100 rounded-lg py-5 px-6 my-5 text-base text-red-700 inline-flex items-center w-full" role="alert">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                        </svg>
                        {msg}
                        </div>
                                }
                        
                                </ErrorMessage>
                                <Field
                                    id="password"
                                    name="password"
                                    placeholder="Senha"
                                    type="password"
                                    required={true}
                                    className="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                                    <span
                                        className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    </span>
                                    Login
                                </button>
                            </div>
                        </Form>
                        
                    </Formik>
                </div>
            </div>
        </div>

    )
}