import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import NavbarBusiness from '../../../components/NavbarBusiness';
import { api } from "../../api/api.js";



function Product() {

    const [isLoading, setIsloading] = useState(true)
    const [product, setProduct] = useState()
    const [openForm, setOpenForm] = useState(false)

    const router = useRouter()
    const { idProduct } = router.query
    console.log(idProduct)

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
    }, [idProduct])


    console.log(product)
    return (
        <> DETALHE DE CADA PRODUTO / JÁ ADICIONAR AQUI O FORMULÁRIO PARA EDIÇÃO
            <NavbarBusiness />
            {!isLoading &&

                <div key={product._id} className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">{product.name}</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Nome</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.name}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Descrição</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.desc}</dd>
                            </div>

                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                {/* <!-- Heroicon name: solid/paper-clip --> */}
                                                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-2 flex-1 w-0 truncate"> resume_back_end_developer.pdf </span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                                            </div>
                                        </li>
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                {/* <!-- Heroicon name: solid/paper-clip --> */}
                                                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-2 flex-1 w-0 truncate"> coverletter_back_end_developer.pdf </span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <button type="button" onClick={() => { openForm ? setOpenForm(false) : setOpenForm(true) }} className=" flexbox inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">EDITAR PRODUTO</button>
                    {openForm &&
                        <>
                            <div className="mt-10 sm:mt-0">
                                <div className="md:grid md:grid-cols-3 md:gap-6">
                                    <div className="md:col-span-1">
                                        <div className="px-4 sm:px-0">
                                            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                                            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 md:mt-0 md:col-span-2">
                                        <form action="#" method="POST">
                                            <div className="shadow overflow-hidden sm:rounded-md">
                                                <div className="px-4 py-5 bg-white sm:p-6">
                                                    <div className="grid grid-cols-6 gap-6">
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                                First name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="first-name"
                                                                id="first-name"
                                                                autoComplete="given-name"
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                                Last name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="last-name"
                                                                id="last-name"
                                                                autoComplete="family-name"
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-4">
                                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                                Email address
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="email-address"
                                                                id="email-address"
                                                                autoComplete="email"
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                                Country
                                                            </label>
                                                            <select
                                                                id="country"
                                                                name="country"
                                                                autoComplete="country-name"
                                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            >
                                                                <option>United States</option>
                                                                <option>Canada</option>
                                                                <option>Mexico</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-span-6">
                                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                                Street address
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="street-address"
                                                                id="street-address"
                                                                autoComplete="street-address"
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                                City
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="city"
                                                                id="city"
                                                                autoComplete="address-level2"
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                                State / Province
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="region"
                                                                id="region"
                                                                autoComplete="address-level1"
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                                ZIP / Postal code
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="postal-code"
                                                                id="postal-code"
                                                                autoComplete="postal-code"
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
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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