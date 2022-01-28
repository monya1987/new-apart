import { useRouter } from 'next/router'

const Comment = () => {
    const router = useRouter();
    const { building } = router.query;
    console.log(router);

    return (
        <>
            <h1>Post: {building}</h1>
        </>
    )
}

export default Comment