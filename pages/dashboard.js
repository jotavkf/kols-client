import { useEffect, useState, useContext } from "react";
import { api } from "./api/api";
import { useRouter } from 'next/router'
import { AuthContext } from '../contexts/authContext'
import { route } from "next/dist/server/router";
import DashboardComponent from "../components/dashboard";


export default function Dashboard() {

  const { loggedInUser } = useContext(AuthContext);

  return (<>

    {loggedInUser.token ? <DashboardComponent /> : <>Erro</>}
  </>)
}
