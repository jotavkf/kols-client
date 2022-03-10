import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import NavbarBusiness from '../../../components/NavbarBusiness';
import { api } from "../../api/api.js";
import Link from "next/link";
import { Formik, Form, Field } from 'formik';



function CreateProduct() {
    const arrayDeEstados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",]

    const router = useRouter()
    const { id } = router.query //id do business


    return (
        <>
            <NavbarBusiness />

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Crie um produto</h3>
                            <p className="mt-1 text-sm text-gray-600">Preencha com as informações do produto.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <Formik
                            initialValues={{
                                name: '',
                                desc: '',
                                partNumber: '',
                                quantity: '',
                                category: '',
                                purchasePrice: '',
                                salePrice: '',
                                supplier: '',
                                resupplyPoint: ''
                            }}
                            onSubmit={async function (values, { resetForm }) {
                                try {

                                    await api.post(`/products/${id}/create-product`, values)
                                } catch (e) { console.error(e) }
                                resetForm()
                            }}>

                            <Form>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                    Nome do Produto
                                                </label>
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    required={true}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
                                                    Drescição
                                                </label>
                                                <Field
                                                    type="text"
                                                    name="desc"
                                                    id="desc"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="partNumber" className="block text-sm font-medium text-gray-700">
                                                    Part-Number
                                                </label>
                                                <Field
                                                    type="text"
                                                    name="partNumber"
                                                    id="partNumber"
                                                    placeholder="SKU"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                                    Categoria
                                                </label>
                                                <Field
                                                    type="text"
                                                    name="category"
                                                    id="category"
                                                    placeholder="Matéria Prima / Embalagem"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="Preço de Compra" className="block text-sm font-medium text-gray-700">
                                                    Preço de Compra R$
                                                </label>
                                                <Field
                                                    type="number"
                                                    name="purchasePrice"
                                                    id="purchasePrice"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">
                                                    Preço de Venda  R$
                                                </label>
                                                <Field
                                                    type="number"
                                                    name="salePrice"
                                                    id="salePrice"
                                                    autoComplete="address-level2"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                                                    Quantidade (und)
                                                </label>
                                                <Field
                                                    type="number"
                                                    name="quantity"
                                                    id="quantity"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                                                <label htmlFor="resupplyPoint" className="block text-sm font-medium text-gray-700">
                                                    Ponto de Pedido (und)
                                                </label>
                                                <Field
                                                    type="text"
                                                    name="resupplyPoint"
                                                    id="resupplyPoint"
                                                    autoComplete="address-level2"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            <div className="col-span-3 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="supplier" className="block text-sm font-medium text-gray-700">
                                                    Fornecedor
                                                </label>
                                                <Field
                                                    type="text"
                                                    name="supplier"
                                                    id="supplier"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

        </>
    );
}

export default CreateProduct;