import { useEffect, useState, useContext } from "react";
import { api } from "./api/api";
import { useRouter } from 'next/router'
import {AuthContext} from '../contexts/authContext'


export default function Dashboard() {
  const [test, setTest] = useState({ _id: "", name: "", email: "", goals: [] });

  useEffect(() => {
    async function fechUser() {
      try {
        const response = await api.get("/users/profile");
        console.log(response.data);
        setTest({ ...response.data });
      } catch (error) {
        console.error(error);
      }
    }
    fechUser();
  }, []);

  const { loggedInUser } = useContext(AuthContext);
  const router = useRouter()


  return (<>
    {loggedInUser.token ? <h1>{`Meu nome: ${test.name}. Meu email: ${test.email}. Meu id: ${test._id}`}</h1> : <h1>Erro</h1>}
    </>)
}