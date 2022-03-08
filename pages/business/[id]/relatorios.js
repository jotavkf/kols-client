import { useRouter } from "next/router";
import { api } from "../../api/api";
import NavbarBusiness from "../../../components/NavbarBusiness";
import { useEffect, useState } from "react";

function Report() {
  const [isLoading, setIsloading] = useState(true);
  const [products, setProducts] = useState();

  const router = useRouter();
  const { id } = router.query;
  console.log(id)

  useEffect(() => {
    async function data() {
      try {
        const response = await api.get(`/products/${id}`);
        setProducts(response.data);
        setIsloading(false);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    data();
  }, [id]);

  console.log(products);

  return (
    <>
      <NavbarBusiness />
      <div>

        {!isLoading &&
          products.map((cE) => {
            return (
              <>
                Nome: {cE.quantity}
              </>
            )
          })
        }


      </div>
    </>
  );
}

export default Report;
