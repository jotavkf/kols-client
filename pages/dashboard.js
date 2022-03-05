import { useEffect, useState, useContext } from "react";
import { api } from "./api/api";
import { useRouter } from 'next/router'
import { AuthContext } from '../contexts/authContext'


export default function Dashboard() {
  const [test, setTest] = useState({ _id: "", name: "", email: "", goals: [] });
  const [isLoading, setIsloading] = useState(true)


  useEffect(() => {
    async function fechUser() {
      try {
        const response = await api.get("/users/profile");
        setTest({ ...response.data });
        setIsloading(false)
      } catch (error) {
        console.error(error);
      }
    }
    fechUser();
  }, []);

  const { loggedInUser } = useContext(AuthContext);
  const router = useRouter()

  console.log('CONSOLE LOG', test)
  return (<>
    {!isLoading && loggedInUser.token ?
      test.business.map((cE) => {
        return (
          <div key={test.business._id}>Id da empresa: {cE._id} Minha empresa: {cE.corporateName}</div>
        )
      }) : <h1>Erro</h1>}
  </>)
}
