import {useRouter} from 'next/router'
import Link from 'next/link'

const article = () => {
    const router = useRouter()
    const {id} = router.query


    return (
        <>
        <h1>
            This is article {id}
        </h1>
        <Link href='/article'>
            <button>
                Return to Article
            </button>
        </Link>
        </>
    )
}



export default article