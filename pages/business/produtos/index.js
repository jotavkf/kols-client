import NavbarBusiness from "../../../components/NavbarBusiness";
import { useEffect, useState, useContext } from "react";
import { api } from "../../api/api.js";

function Produtos() {

    const [isLoading, setIsloading] = useState(true)
    const [business, setBusiness] = useState({});



    useEffect(() => {
        async function fetchProducts() {
            try {
                const id = localStorage.getItem('loggedInBusiness')
                console.log("id do local storage", id)

                const response = await api.get(`/business/profile/${id}`);
                setBusiness({ ...response.data });
                setIsloading(false)
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [])




    return (
        <> LISTA DE TODOS OS PRODUTOS DESSA EMPRESA.
            <NavbarBusiness />
            {!isLoading &&
                business.products.map((cE) => {
                    return (
                        <>
                            nome: {cE.name}


                        </>
                    )
                })

            }
        </>);
}

export default Produtos;