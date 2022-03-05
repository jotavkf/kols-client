import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { api } from "../pages/api/api";

export default function Dashboard() {
  const [isLoading, setIsloading] = useState(true)
  const [user, setuser] = useState({});

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const response = await api.get("/users/profile");
        setuser({ ...response.data });
        setIsloading(false)
        console.log(`oi`)
      } catch (error) {
        console.error(error);
      }
    }
    fetchBusiness();
  }, [])


  console.log(isLoading)
  return (<>

    {isLoading &&
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
        Processing...
      </button>
    }
    {!isLoading &&
      user.business.map((cE) => {
        return (<div key={user.business._id}>Id da empresa: {cE._id} Minha empresa: {cE.corporateName}<Link href={`/business/${cE._id}`}> Entrar na empresa</Link></div>)
      })}
  </>)

}