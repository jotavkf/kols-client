import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useRouter } from 'next/router'
import NavbarBusiness from "../../../components/NavbarBusiness";
import Link from "next/link";


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


  /* FUNÇÃO PARA COLOCAR NO BOTÃO DE EXCLUIR 
  
    async function deleteBusiness() {
      try {
          const response = await api.patch(`/business/update/${id}`, values);
      } catch (error) {
          console.error(error);
      }
  } */






  /* EXEMPLO DOS CAMPOS QUE A API TÁ ESPERANDO. SE ATENTAR PARA OS TYPES 

  FORMULÁRIOS PRECISAM SER AUTENTICADOS EM TEMPO REAL. É UMA DAS OBRIGAÇÕES DO TRIO 
  
  corporateName: { type: String, required: true },
name: { type: String, required: true },
cnpj: {
  type: String,
  match: /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/,
  required: true,
},
ie: { type: String, match: /^\d{3}.\d{3}.\d{3}.\d{3}$/ },
im: { type: String, match: /^\d{7}\/\d{3}?-\d{1}$/ },
email: {
  type: String,
  required: true,
  unique: true,
  trim: true,
  lowercase: true,
  match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
},
phone: {
  type: Number,
  required: true,
  match: /(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/,
  required: true,
},

address: new Schema({
  street: { type: String, required: true },
  number: { type: Number, required: true },
  district: { type: String, required: true },
  city: { type: String, required: true },
  zipcode: {
    type: Number,
    required: true,
    match: /^([\d]{2}).?([\d]{3})-?([\d]{3})$/,
  },
  state: {
    type: String,
    required: true,
    enum: [
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO",
    ],
  },
}),

businessImg: { type: String, default: "logo da empresa", required: true },

owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

employee: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],

businessIsActive: { type: Boolean, default: true },
});
  
  */


  return (
    <>FORMS PARA EDITAR OS CAMPOS DA EMPRESA / api já está funcionando / NÃO ESQUERCER DE ENVIAR O FORMS NA REQUEST DA API
      <NavbarBusiness />


      <button type="button" className=" flexbox inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"><Link href={`/business/delete/${id}`}> DELETER EMPRESA </Link></button>




    </>
  )
}
