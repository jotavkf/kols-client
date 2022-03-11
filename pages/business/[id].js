import { useEffect, useState, useContext, cloneElement } from "react";
import { api } from "../api/api";
import { useRouter } from "next/router";
import NavbarBusiness from "../../components/NavbarBusiness";
import Link from "next/link";

export default function Business() {
  const [isLoading, setIsloading] = useState(true);
  const [business, setBusiness] = useState({});


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
      <NavbarBusiness />

      {!isLoading && (
        <>
          <div>
            <div
              key={business._id}
              className="bg-white shadow overflow-hidden sm:rounded-lg flex justify-between"
            >
              <div className="px-4 py-4 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Razão Social
                </h3>
                <h3 className="mt-1 max-w-2xl text-sm text-gray-500 flex">
                  {business.corporateName}
                </h3>
              </div>
              <button
                type="button"
                className=" inline-block px-6 py- bg-slate-200 text-emerald-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg hover:text-slate-200 transition duration-150 ease-in-out m-4"
              >
                <Link href={`/business/update/${id}/`}>EDITAR EMPRESA</Link>
              </button>
            </div>
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

                <div className=" bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Logo da Empresa
                    <img src={business.businessImg} alt="Logo" />
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center">
                    <ul
                      role="list"
                      className="flex border  rounded-md divide-y divide-gray-200 items-center"
                    >
                      <li className="flex">
                        <form onSubmit={handleSubmit} className="flex items-center block text-sm font-medium text-gray-900 dark:text-gray-300 mr-10">
                          <input
                            type="file"
                            name="businessImg"
                            onChange={handleChange}
                            className="flexbox block text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200"
                          />
                          <button
                            className="font-medium text-slate-200 hover:text-white items-center bg-emerald-600 px-6 py-1 text-white rounded"
                            type="submit"
                          >
                            Upload
                          </button>
                        </form>
                      </li>
                    </ul>
                  </dd>

                </div>

              </dl>
            </div>
          </div>
        </>
      )
      }
    </>
  );
}
