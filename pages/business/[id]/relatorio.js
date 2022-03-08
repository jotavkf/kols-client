import { useRouter } from "next/router";
import { api } from "../../api/api";
import NavbarBusiness from "../../../components/NavbarBusiness";
import { useEffect, useState } from "react";

function Report() {
  const [isLoading, setIsloading] = useState(true);
  const [business, setBusiness] = useState({});

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function data() {
      try {
        const response = await api.get(`/business/profile/${id}`);
        setBusiness([response.data.products]);
        setIsloading(false);
      } catch (error) {
        console.error(error);
      }
    }
    data();
  }, [id]);

  console.log(business);

  return (
    <>
      <NavbarBusiness />
      <div>
        {!isLoading &&
          business.map(cE => {
            {
              console.log(cE.name);
            }
          })}
      </div>
    </>
  );
}

export default Report;
