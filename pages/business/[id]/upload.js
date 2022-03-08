import { useRouter } from 'next/router'


function Upload() {

    const router = useRouter()
    const { id } = router.query
    console.log(id)
    return (
        <>
            upload imagem
        </>);
}

export default Upload;