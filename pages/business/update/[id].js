import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useRouter } from 'next/router'

export default function BusinessUpdate() {

    const router = useRouter()
    const { id } = router.query

    console.log(id)

    /* 
    !!!!!Função pra ser colocada dentro do submmit do form!
    async function updateBusiness() {
        try {
            const response = await api.patch(`/business/update/${id}`, values);
        } catch (error) {
            console.error(error);
        }
    } */



    return (
        <>FORMS PARA EDITAR OS CAMPOS DA EMPRESA / api já está funcionando

        </>
    )
}
