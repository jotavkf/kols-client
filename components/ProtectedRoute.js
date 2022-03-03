import { useContext } from "react";
import { useRouter } from 'next/router'
import { AuthContext } from "../../contexts/authContext";

export function ProtectedRoute({ component: Component }) {
  const { loggedInUser } = useContext(AuthContext);
  const router = useRouter()

  if (loggedInUser.token) {
    return <Component />;
  } else {
    router.push(`/login`);
  }
}