import { useEffect, useState, useContext } from "react";
import { api } from "../api/api";

export default function Business (){
    const [isLoading, setIsloading] = useState(true)
    const [business, setBusiness] = useState({});

    useEffect(() => {
        async function fetchBusiness() {
          try {
            const response = await api.get("/business/profile");
            setBusiness({ ...response.data });
            setIsloading(false)
          } catch (error) {
            console.error(error);
          }
        }
        fetchBusiness();
      }, [])

    return(
<>Oi</>
    )
}