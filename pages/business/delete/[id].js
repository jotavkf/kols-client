import { useEffect, useState } from "react";
import { api } from "../../api/api.js";
import { useRouter } from 'next/router'
import NavbarBusiness from "../../../components/NavbarBusiness";
import Link from "next/link";





function DesableBusiness() {
    const [isLoading, setIsloading] = useState(true)
    const [business, setBusiness] = useState({});


    const router = useRouter()
    const { id } = router.query



    useEffect(() => {
        async function deleteBusiness() {
            try {
                const response = await api.delete(`/business/${id}/disable-business`);
                setBusiness({ ...response.data });
                setIsloading(false)

            } catch (error) {
                console.error(error);
            }
        }
        deleteBusiness();
    }, [id])


    return (<>DESATIVAR CONTA
        <NavbarBusiness />

        Sua conta foi desativada!


    </>);
}

export default DesableBusiness;