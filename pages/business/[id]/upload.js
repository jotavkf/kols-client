import { useRouter } from "next/router";
import { useState } from "react/cjs/react.production.min";
import { api } from "../../api/api";

function Upload() {
  const router = useRouter();
  const { id } = router.query;

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    businessImg: "",
  });

  // função que capta o evento de digitar no campo do form ou inserir um arquivo
  function handleChange(event) {
    if (event.target.files) {
      setForm({ ...form, [event.target.name]: event.target.files[0] });
      return;
    }

    setForm({ ...form, [event.target.name]: event.target.value });
  }

  // função que faz o upload no cloudinary e retorna uma url
  async function handleUpload(file) {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", file);

      const response = await api.post("/upload/image", uploadData);

      console.log(response.data.url);

      return response.data.url;
    } catch (error) {
      console.error(error);
    }
  }

  // Função para enviar o formulário
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const businessImg = await handleUpload(form.businessImg);

      await api.post(`/business/create-business`, { businessImg });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(error.response);
        setError(error.response.data._message);
      } else {
        setError("Algo deu errado");
      }
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            label="Foto"
            id="signUpProfilePicture"
            name="businessImg"
            onChange={handleChange}
            required={true}
            readOnly={loading}
          />
          <button type="submit" disabled={loading}>
            Enviar Upload
          </button>
        </form>
      </div>
    </>
  );
}

export default Upload;
