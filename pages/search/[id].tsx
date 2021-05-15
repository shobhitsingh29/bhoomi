import { useRouter } from 'next/router'
import { Container, Text } from '@components/ui'
import { Heart } from '@components/icons'
import { Layout } from '@components/common'

export default function SearchId() {
    const router = useRouter()
    const { id } = router.query
    return (
        <Container>
            <div className='mt-3 mb-20'>
                <Text variant='pageHeading'>Sample Id : {id}</Text>
                <div className='group flex flex-col'>
                    <div className='flex-1 px-12 py-24 flex flex-col justify-center items-center '>
              <span
                  className='border border-dashed border-secondary flex items-center justify-center w-16 h-16 bg-primary p-12 rounded-lg text-primary'>
                <Heart className='absolute' />
              </span>
                        <h2 className='pt-6 text-2xl font-bold tracking-wide text-center'>
                            Your Search is coming soon
                        </h2>
                    </div>
                </div>
            </div>
        </Container>
    )
}

SearchId.Layout = Layout;
