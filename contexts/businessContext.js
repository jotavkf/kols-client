/* import { createContext, useState, useEffect } from "react";

const BusinessContext = createContext({ business: "" });

function BusinessContextComponent(props) {

    const [loggedInBusiness, setloggedInBusiness] = useState({ business: "" })

    useEffect(() => {
        const storedBusiness = localStorage.getItem("loggedInBusiness");

        const parsedStoredBusiness = JSON.parse(storedBusiness || '""');

        if (parsedStoredBusiness.business) {
            loggedInBusiness(parsedStoredBusiness);
        }
    }, []);

    return (
        <BusinessContext.Provider value={{ loggedInBusiness, setloggedInBusiness }}>
            {props.children}
        </BusinessContext.Provider>
    );
}

export { BusinessContext, BusinessContextComponent }; */