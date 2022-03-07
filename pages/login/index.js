import { Formik, Form, Field, ErrorMessage } from 'formik';

import { api } from '../api/api.js';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { AuthContext } from '../../contexts/authContext'
import { useState, useContext } from 'react';
import axios from "axios";


export default function Login() {


    const { setLoggedInUser } = useContext(AuthContext);

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
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Entre em sua conta</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            <Link href="/login/forgot-password">
                                <button className="font-medium text-indigo-600 hover:text-indigo-500">Esqueceu a senha?</button>
                            </Link>
                        </p>
                    </div>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={async function (values) {
                            try {
                                console.log(values)
                                const response = await api.post("/users/login", values);
                                setLoggedInUser(response.data);
                                localStorage.setItem("loggedInUser", JSON.stringify(response.data));
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
                                <Field
                                    id="password"
                                    name="password"
                                    placeholder="Senha"
                                    type="password"
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
                                    <Link href={"/business"}>Login</Link>
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>

    )
}