import { useContext } from "react";
import { AuthContext } from '../../contexts/authContext'

import DashboardComponent from "../../components/dashboard";


export default function Dashboard() {

  const { loggedInUser } = useContext(AuthContext);
  console.log(loggedInUser)
  return (<>

    {loggedInUser.token ? <DashboardComponent /> : <>Erro</>}

  </>)
}
