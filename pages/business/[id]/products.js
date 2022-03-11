import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import NavbarBusiness from '../../../components/NavbarBusiness';
import { api } from "../../api/api.js";
import Link from "next/link";
import { GoSearch } from "react-icons/go"
import { CgAddR } from "react-icons/cg"



function Products() {

    const [isLoading, setIsloading] = useState(true)
    const [products, setProducts] = useState()
    const [search, setSearch] = useState('')

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await api.get(`/products/${id}`); //buscar todos os produtos
                setProducts([...response.data]);
                setIsloading(false)
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [id])




    return (
        <>

            <NavbarBusiness />
            <div className='flex justify-between mt-3'>
                <div className='flex items-center w-3/5'>
                    <input type='search' className='rounded-full m-1.5 shadow-md w-4/5' placeholder='Busque por um produto...' onChange={(event) => { setSearch((event.target.value).toLocaleLowerCase()) }} />
                    <span ><GoSearch /></span>
                </div>

                <button type="button" className="flex flex-wrap m-1.5  place-content-around bg-slate-200 w-1/5 text-emerald-600 font-medium text-base leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg hover:text-slate-200 transition duration-150 ease-in-out"><Link href={`/business/${id}/create-product`}>CRIAR PRODUTO </Link> <CgAddR /></button>
            </div>
            {!isLoading &&

                <>
                    <table className="table-auto m-4  w-full border shadow-md">
                        <thead>
                            <tr className='text-s text-slate-100 text-center bg-slate-400 font-normal h-8'>
                                <th >Part Number</th>
                                <th>Nome</th>
                                <th>Quantidade</th>
                                <th>Preço de Compra</th>
                                <th>Preço de Venda</th>
                                <th>Ponto de Pedido</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products
                                .filter(cE => (cE.name).toLocaleLowerCase().includes(search))
                                .map((cE) => {
                                    return (
                                        <tr key={cE._id} className="tx-base text-center">
                                            <td className='py-5 border border-y-emerald-50  '>{cE.partNumber}</td>
                                            <td className='py-5 border border-y-emerald-50 text-bold'>{cE.name}</td>
                                            <td className='py-5 border border-y-emerald-50'>{cE.quantity} und.</td>
                                            <td className='py-5 border border-y-emerald-50'>R$ {cE.purchasePrice},00</td>
                                            <td className='py-5 border border-y-emerald-50'>R$ {cE.salePrice},00</td>
                                            <td className='py-5 border border-y-emerald-50'>{cE.resupplyPoint} und.</td>
                                            <td className='py-5 border border-y-emerald-50'><Link href={`/business/${id}/product/${cE._id}`}>DETALHES</Link></td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </>



            }
        </>);
}

export default Products;