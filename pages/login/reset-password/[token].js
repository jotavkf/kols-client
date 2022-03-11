import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import axios from "axios";
import { Router } from 'next/router';

export default function ResetPassword() {

    const router = useRouter()

    const [validToken, setValidToken] = useState(false)
    const [isLoading, setIsloading] = useState(true)
    const [token, setToken] = useState()
    

    useEffect(() => {
        async function validateToken() {
            
            try {
                setToken (router.query);
                if (token === undefined){return}
                if (Object.keys(token).length === 0){return}
                const response = await axios.get(`https://kols-server.herokuapp.com/resetPassword/valid-token/${token.token}`);
                setValidToken(true);
                setIsloading(false);
                ;
            } catch (error) {
                alert(`${error}`)
            }
        }
        validateToken();
        
    }, [router.query, token])

    

    return (<>
    {isLoading && 
        <div className='h-screen bg-gray-50 w-screen'>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>}

    {!isLoading && validToken &&
     <div className='h-screen bg-gray-50 w-screen'>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="/economy.png"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Esqueceu a senha?</h2>
                        <h3 className='text-center text-1xl font-bold text-gray-600'> Digite seu e-mail</h3>
                    </div>
                    <Formik
                        initialValues={{ newPassword: '', newPassword2: ''}}
                        onSubmit={async function (values) {
                            try {
                                
                                if (values.newPassword === values.newPassword2) {
                                    await axios.put(`https://kols-server.herokuapp.com/resetPassword/new-password/${token.token}`, {newPassword: values.newPassword})
                                    router.push('/login')}
                                else {alert ('As senhas não coincidem')};
                            } catch (e) { alert('Algo deu errado') }
                        }}>
                        <Form className="mt-8 space-y-6" >
                            <div className="rounded-md shadow-sm -space-y-px">
                                <Field
                                    id="newPassword"
                                    name="newPassword"
                                    placeholder="Senha"
                                    type="password"
                                    required={true}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                />
                                <Field
                                    id="newPassword2"
                                    name="newPassword2"
                                    placeholder="Repetir senha"
                                    type="password"
                                    required={true}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                                    <span
                                        className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    </span>
                                    Redefinir senha
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>}

    </>)
}