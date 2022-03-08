import { useEffect, useState, useContext, cloneElement } from "react";
import { api } from "../api/api";
import { useRouter } from 'next/router'
import NavbarBusiness from "../../components/NavbarBusiness";
import Link from "next/link";


export default function Business() {
  const [isLoading, setIsloading] = useState(true)
  const [business, setBusiness] = useState({});
  const [contaDesativada, setContadesativada] = useState('')

  const router = useRouter()
  const { id } = router.query

  console.log(id)
  useEffect(() => {
    async function fetchBusiness() {
      try {
        const response = await api.get(`/business/profile/${id}`);
        setBusiness({ ...response.data });
        setIsloading(false)
      } catch (error) {
        console.error(error);
        setContadesativada(true)
      }
    }
    fetchBusiness();
  }, [id])

  console.log(business)

  return (
    <>TODAS AS INFORMAÇÕES DA EMPRESA COM SEU RESPECTIVO ID
      <NavbarBusiness />
      {contaDesativada &&
        <>
          <p>Essa conta está desativa.</p>
          <button type="button" className=" flexbox inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"><Link href={`/business/active/${id}`}>ATIVAR CONTA</Link></button>
        </>
      }

      {!isLoading &&

        <div key={business._id} className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Razão Social</h3>
            <h3 className="mt-1 max-w-2xl text-sm text-gray-500">{business.corporateName}</h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Nome Fantasia</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{business.name}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">CNPJ</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{business.cnpj}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{business.email}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Telefone</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{business.phone}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Proprietário</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{business.owner.name} {business.owner.lastName}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">EMPRESA ESTÁ ATIVA?</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{business.businessIsActive}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Attachments (talvez colocar um campo pra colocar a logo aqui.)</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        {/* <!-- Heroicon name: solid/paper-clip --> */}
                        <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                        </svg>
                        <input type="file" />
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Upload Logo </a>
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
          <button type="button" className=" flexbox inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><Link href={`/business/update/${id}/`}> EDITAR EMPRESA</Link></button>
        </div>


      }
    </>
  )
}