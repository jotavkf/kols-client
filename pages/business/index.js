import { useContext } from "react";
import { AuthContext } from '../../contexts/authContext'

import DashboardComponent from "../../components/dashboard";


export default function Dashboard() {

  const { loggedInUser } = useContext(AuthContext);


  return (<>

    {loggedInUser.token ? <DashboardComponent /> : <>Erro</>}

  </>)
}
