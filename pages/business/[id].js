import { useEffect, useState, useContext } from "react";
import { api } from "../api/api";
import { useRouter } from 'next/router'

export default function Business() {
  const [isLoading, setIsloading] = useState(true)
  const [business, setBusiness] = useState({});

  const router = useRouter()
  const { id } = router.query

  console.log(id)
  useEffect(() => {
    async function fetchBusiness() {
      try {
        const response = await api.get(`/business/profile/${id}`);
        setBusiness({ ...response.data });
        setIsloading(false)
      } catch (error) {
        console.error(error);
      }
    }
    fetchBusiness();
  }, [id])

  return (
    <>TODAS AS INFORMAÇÕES DA EMPRESA COM SEU RESPECTIVO ID</>
  )
}