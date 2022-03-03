import '../styles/globals.css'
import { AuthContextComponent } from '../contexts/authContext';

function MyApp({ Component, pageProps }) {

  return (
  <AuthContextComponent>
    <Component {...pageProps} />
  </AuthContextComponent>
  )
}

export default MyApp
