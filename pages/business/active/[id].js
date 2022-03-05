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
            } catch (error) {
                console.error(error);
            }
        }
        ActiveBusiness();
    }, [id])



    return (
        <><NavbarBusiness />
            {!isLoading && `sua conta foi ativada! ${business.name}`}



        </>);
}

export default ActiveUser;