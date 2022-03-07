import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import NavbarBusiness from '../../../components/NavbarBusiness';
import { api } from "../../api/api.js";
import Link from "next/link";



function Products() {

    const [isLoading, setIsloading] = useState(true)
    const [products, setProducts] = useState()

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

            <button type="button" className=" flexbox inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"><Link href={`/business/${id}/create-product`}>CRIAR PRODUTO</Link></button>


            {!isLoading &&

                <>
                    <table className="table-fixed">
                        <thead>
                            <tr>
                                <th>Part Number</th>
                                <th>Nome</th>
                                <th>Quantidade</th>
                                <th>Preço de Compra</th>
                                <th>Preço de Venda</th>
                                <th>Categoria</th>
                                <th>Fornecedor</th>
                                <th>Ponto de Pedido</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((cE) => {
                                return (
                                    <tr key={cE._id}>
                                        <td>{cE.partNumber}</td>
                                        <td>{cE.name}</td>
                                        <td>{cE.quantity}</td>
                                        <td>{cE.purchasePrice}</td>
                                        <td>{cE.salePrice}</td>
                                        <td>{cE.category}</td>
                                        <td>{cE.supplier}</td>
                                        <td>{cE.resupplyPoint}</td>
                                        <td><Link href={`/business/${id}/${cE._id}`}>DETALHES</Link></td>
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