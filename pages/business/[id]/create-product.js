import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import NavbarBusiness from '../../../components/NavbarBusiness';
import { api } from "../../api/api.js";
import Link from "next/link";


function CreateProduct() {

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
    }, [])



    return (
        <>
            <NavbarBusiness />
        </>
    );
}

export default CreateProduct;