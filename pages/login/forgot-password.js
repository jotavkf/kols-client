import { Formik, Form, Field } from 'formik';
import axios from "axios";

export default function ForgotPassWord() {
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
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Esqueceu a senha?</h2>
                        <h3 className='text-center text-1xl font-bold text-gray-600'> Digite seu e-mail</h3>
                    </div>
                    <Formik
                        initialValues={{ email: ''}}
                        onSubmit={async function (values) {
                            try {
                                console.log(values)
                                await axios.post("https://kols-server.herokuapp.com/resetPassword/forgot-password", values); // tem que passar o URL certo aqui
                            } catch (e) { console.log(e) }
                        }}>
                        <Form className="mt-8 space-y-6" >
                            <div className="rounded-md shadow-sm -space-y-px">
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
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span
                                        className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    </span>
                                    Enviar redefinição de senha
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>

    )
}