import { useEffect, useState, useContext, cloneElement } from "react";
import { api } from "../api/api";
import { useRouter } from "next/router";
import NavbarBusiness from "../../components/NavbarBusiness";
import Link from "next/link";

export default function Business() {
  const [isLoading, setIsloading] = useState(true);
  const [business, setBusiness] = useState({});
  const [contaDesativada, setContadesativada] = useState(false);

  const router = useRouter();
  const { id } = router.query;


  useEffect(() => {
    async function fetchBusiness() {
      try {
        const response = await api.get(`/business/profile/${id}`);
        setBusiness(response.data);
        setIsloading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBusiness();
  }, [id]);



  const [form, setForm] = useState({
    businessImg: "",
  });

  // função que capta o evento de digitar no campo do form ou inserir um arquivo
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.files[0] });
  }

  // função que faz o upload no cloudinary e retorna uma url
  async function handleUpload(file) {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", file);

      const response = await api.post("/upload/image", uploadData);



      return response.data.url;
    } catch (error) {
      console.error(error);
    }
  }

  // Função para enviar o formulário
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const businessImg = await handleUpload(form.businessImg);

      const response = await api.patch(`/business/update/${id}`, {
        businessImg: businessImg,
      });

    } catch (error) {
      if (error.response) {
        console.error(error.response);
      }
    }
  }

  return (
    <>
      TODAS AS INFORMAÇÕES DA EMPRESA COM SEU RESPECTIVO ID
      <NavbarBusiness />
      {contaDesativada && (
        <>
          <p>Essa conta está desativa.</p>
          <button
            type="button"
            className=" flexbox inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            <Link href={`/business/active/${id}`}>ATIVAR CONTA</Link>
          </button>
        </>
      )}
      {!isLoading && (
        <div
          key={business._id}
          className="bg-white shadow overflow-hidden sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Razão Social
            </h3>
            <h3 className="mt-1 max-w-2xl text-sm text-gray-500">
              {business.corporateName}
            </h3>
          </div>
          <button
            type="button"
            className=" flexbox inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            <Link href={`/business/update/${id}/`}> EDITAR EMPRESA</Link>
          </button>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Nome Fantasia
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {business.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">CNPJ</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {business.cnpj}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {business.email}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Telefone</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {business.phone}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Proprietário
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {business.owner.name} {business.owner.lastName}
                </dd>
              </div>

              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Logo da Empresa
                  <img src={business.businessImg} alt="Logo" />
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul
                    role="list"
                    className="border border-gray-200 rounded-md divide-y divide-gray-200"
                  >
                    <li className="pl-3 pr-4 py-3 flex justify-between items-center text-sm">
                      <form onSubmit={handleSubmit}>
                        <input
                          type="file"
                          name="businessImg"
                          onChange={handleChange}
                        />
                        <button
                          className="font-medium text-emerald-600 hover:text-emerald-500 bg-green-400 px-6 py-2.5 text-white rounded"
                          type="submit"
                        >
                          Upload Logo
                        </button>
                      </form>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </>
  );
}
