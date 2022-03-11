import { api } from "../api/api";
import Navbar from "../../components/Navbar";
import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from "react";





function EditUser() {
    const arrayDeEstados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",]
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState();



    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await api.get(`/users/profile`);
                setUser(response.data)
                setIsLoading(false)
            } catch (error) {
                console.error(error);
            }
        }
        fetchUser();
    }, [user]);

    console.log(user)

    return (
        <>
            <Navbar 
                nav={{ name: 'Dashboard', href: '/business', current: true }}
            />
            {!isLoading &&
                <>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>

                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Informações do Usuário</h3>
                                    <p className="mt-1 text-sm text-gray-600">Preencha com as informações do usuário.</p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <Formik
                                    initialValues={{
                                        name: `${user.name}`,
                                        lastName: `${user.lastName}`,
                                        email: `${user.email}`,
                                        cpf: `${user.cpf}`,
                                        rg: `${user.rg}`,
                                        rgUF: `${user.rgUF}`,
                                        phone: `${user.phone}`,
                                        address: {
                                            street: `${user.address.street}`,
                                            number: `${user.address.number}`,
                                            district: `${user.address.district}`,
                                            city: `${user.address.city}`,
                                            zipcode: `${user.address.zipcode}`,
                                            state: `${user.address.state}`,
                                        }


                                    }}
                                    onSubmit={async function (values) {
                                        try {
                                            await api.patch("/users/profile/update", values)
                                        } catch (e) { console.error(e) }
                                    }}>

                                    <Form>
                                        <div className="shadow overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="corporateName" className="block text-sm font-medium text-gray-700">
                                                            Nome
                                                        </label>
                                                        <Field
                                                            id="name"
                                                            name="name"
                                                            placeholder="Nome"
                                                            type="text"

                                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                                        />
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                            Sobrenome
                                                        </label>
                                                        <Field
                                                            id="lastName"
                                                            name="lastName"
                                                            placeholder="Sobrenome"
                                                            type="text"

                                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-2">
                                                        <label htmlFor="ie" className="block text-sm font-medium text-gray-700">
                                                            CPF
                                                        </label>
                                                        <Field
                                                            id="cpf"
                                                            name="cpf"
                                                            placeholder="CPF"

                                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-2">
                                                        <label htmlFor="im" className="block text-sm font-medium text-gray-700">
                                                            RG
                                                        </label>
                                                        <Field
                                                            id="rg"
                                                            name="rg"
                                                            placeholder="RG"

                                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-1">
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            RG-UF
                                                        </label>
                                                        <Field as="select"
                                                            id="rgUF"
                                                            name="rgUF"

                                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                                        >
                                                            {arrayDeEstados.map((cE) => { return <option key={cE} value={`${cE}`}>{cE}</option> })}
                                                        </Field>
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                        <label htmlFor="Telefone" className="block text-sm font-medium text-gray-700">
                                                            Telefone
                                                        </label>
                                                        <Field
                                                            id="phone"
                                                            name="phone"
                                                            placeholder="Telefone"
                                                            type="number"

                                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
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
                                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
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
                                                    <div className="col-span-1">
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





                                                </div>
                                            </div>
                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
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

                </>
            }


        </>
    );
}

export default EditUser;