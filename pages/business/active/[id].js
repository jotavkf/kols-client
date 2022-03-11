import { useEffect, useState, useContext, cloneElement } from "react";
import { api } from "../../api/api.js";
import { useRouter } from 'next/router'
import NavbarBusiness from "../../../components/NavbarBusiness";
import Link from "next/link";



function ActiveUser() {

    const [isLoading, setIsloading] = useState(true)
    const [business, setBusiness] = useState({});

    const router = useRouter()
    const { id } = router.query



    useEffect(() => {
        async function ActiveBusiness() {
            try {
                const response = await api.patch(`/business/${id}/active-business`);
                setBusiness({ ...response.data });
                setIsloading(false)
                setTimeout(() => {
                    router.push("/business")
                }, 3000);
            } catch (error) {
                console.error(error);
            }
        }
        ActiveBusiness();
    }, [id])



    return (
        <><NavbarBusiness />
            {!isLoading &&
                <div className="text-3xl font-bold text-gray-900">Sua conta foi ativada com sucesso! Você será redirecionado para a Dashboard!</div>}
        </>);
}

export default ActiveUser;