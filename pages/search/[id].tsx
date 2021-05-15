import { useRouter } from 'next/router'

const SearchId: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <p>Post: {id}</p>
        </>
    )
}
export default SearchId
