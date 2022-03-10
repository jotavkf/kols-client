import { useContext } from "react";
import { AuthContext } from '../../contexts/authContext'
import DashboardComponent from "../../components/dashboard";
import { useEffect } from "react";
import { useRouter } from "next/router";



export default function Dashboard() {
  
  const router = useRouter();
  const { loggedInUser } = useContext(AuthContext)
  
  useEffect(() => {
    if (loggedInUser.token === undefined){return}
    if (!loggedInUser.token){
      router.push('/login')
    }
  }, [loggedInUser])





  return (<>

    <DashboardComponent />

  </>)
}
