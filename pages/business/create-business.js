import { api } from "../api/api";
import { useEffect, useState, useContext, cloneElement } from "react";
import NavbarDash from "../../components/NavbarDash";






function CreateBusiness() {

    // função para colocar no submmit do formulário
    async function createBusiness() {
        try {
            const response = await api.post(`/business/create-business`, form);
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <>
            FORMULÁRIO PARA CRIAR UMA EMPRESA
            <NavbarDash />
        </>
    )
}

export default CreateBusiness