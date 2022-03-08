import { useEffect } from "react";



function Logout() {

    console.log("LOG OUT")

    useEffect(() => {
        function removeToken() {
            try {
                localStorage.removeItem('loggedInUser')
                localStorage.removeItem('loggedInBusiness')
            } catch (error) {
                console.error(error);
            }
        }
        removeToken();
    }, [])

    return (<>
        Você foi deslogado!
    </>);
}

export default Logout;