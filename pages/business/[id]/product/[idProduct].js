import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import NavbarBusiness from '../../../../components/NavbarBusiness.js';
import { api } from "../../../api/api.js";
import { Formik, Form, Field } from 'formik';



function Product() {

    const [isLoading, setIsloading] = useState(true)
    const [product, setProduct] = useState()
    const [openForm, setOpenForm] = useState(false)
    const [taxes, setTaxes] = useState('')
    const [profit, setProfit] = useState('')
    const [result, setResult] = useState()

    const router = useRouter()
    const { idProduct } = router.query


    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await api.get(`/products/product/${idProduct}`);
                setProduct({ ...response.data });
                setIsloading(false)
            } catch (error) {
                console.error(error);
            }
        }
        fetchProduct();
    }, [idProduct, openForm])

    function handleChangeTaxes(event) {
        setTaxes(event.target.value)
    }

    function handleChangeProfit(event) {
        setProfit(event.target.value)
    }


    function profitMath() {



        return (product.purchasePrice * (taxes / 100 + profit / 100)) + product.purchasePrice
    }



    return (
        <>
            <NavbarBusiness />
            {!isLoading &&

                <div key={product._id} className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">{product.name}</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Descrição</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.desc}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Quantidade</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.quantity}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Ponto de Pedido</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.resupplyPoint}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Fornecedor</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.supplier}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Data de Criação (aaaa-mm-dd)</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.createDate.slice(0, 10)}</dd>
                            </div>

                            {/* calculadora de imposto */}
                            <div className="bg-cyan-900 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6 flex px-10 ">
                                <dt className="text-sm font-medium text-white sm:col-span-1">Calculadora de Imposto</dt>
                            </div>

                            <form className='flex py-5 pb-3 items-center justify-center'>
                                <div className="mt-1 text-sm  sm:mt-0 sm:col-span-1 px-3">Preço de Compra : </div>
                                <div className="mt-1 text-sm  sm:mt-0 sm:col-span-1 px-3">R${product.purchasePrice},00</div>
                                <div className="mt-1 text-sm  sm:mt-0 sm:col-span-1 px-4">Impostos (%)</div>
                                <input
                                    type="number"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange={handleChangeTaxes}
                                />
                                <div className="mt-1 text-sm  sm:mt-0 sm:col-span-1 px-4">Lucro (%)</div>
                                <input
                                    type="number"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange={handleChangeProfit}
                                />

                            </form>
                            <div className='flex flex-box items-center flex-col py-8'>
                                <p>Preço de compra + {taxes}% de imposto / R${(taxes * product.purchasePrice) / 100} reais + {profit}% de lucro / R${(profit * product.purchasePrice) / 100} reais  </p>
                                <h1 className='text-lg'>Valor de venda Mínimo: R${taxes && profit && profitMath()}</h1>
                            </div>

                        </dl>
                    </div>
                    <button type="button" onClick={() => { openForm ? setOpenForm(false) : setOpenForm(true) }} className=" flexbox inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">EDITAR PRODUTO</button>
                    {openForm &&
                        <>
                            <div className="py-4 mt-10 sm:mt-0">
                                <div className="md:grid md:grid-cols-3 md:gap-6">
                                    <div className="md:col-span-1">
                                        <div className="px-4 sm:px-0">
                                            <h3 className="text-lg font-medium leading-6 text-gray-900">Edite esse produto</h3>
                                            <p className="mt-1 text-sm text-gray-600">Preencha com as informações do produto para editar.</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 md:mt-0 md:col-span-2">
                                        <Formik
                                            initialValues={{
                                                name: `${product.name}`,
                                                desc: `${product.desc}`,
                                                partNumber: `${product.partNumber}`,
                                                quantity: `${product.quantity}`,
                                                category: `${product.category}`,
                                                purchasePrice: `${product.purchasePrice}`,
                                                salePrice: `${product.salePrice}`,
                                                supplier: `${product.supplier}`,
                                                resupplyPoint: `${product.resupplyPoint}`
                                            }}
                                            onSubmit={async function (values, { resetForm }) {
                                                try {

                                                    await api.patch(`/products/product/update/${idProduct}`, values)
                                                    setOpenForm(false)
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

                                                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
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

                        </>
                    }
                </div>
            }
        </>
    );
}

export default Product;