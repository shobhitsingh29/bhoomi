import cn from 'classnames'
import dynamic from 'next/dynamic'
import s from './Layout.module.css'
import React, { FC } from 'react'
import { Navbar, Footer } from '@components/common'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { Button, LoadingDots } from '@components/ui'

const Loading = () => (
    <div className='w-80 h-80 flex items-center text-center justify-center p-3'>
        <LoadingDots />
    </div>
)

const dynamicProps = {
    loading: () => <Loading />,
}

const FeatureBar = dynamic(
    () => import('@components/common/FeatureBar'),
    dynamicProps,
)

const Layout: FC<any> = ({
                             children,
                             pageProps: { commerceFeatures, ...pageProps },
                         }) => {
    const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
    return (
        <div className={cn(s.root)}>
            <Navbar />
            <main className='fit'>{children}</main>
            <Footer pages={pageProps.pages} />
            <FeatureBar
                title='This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy.'
                hide={acceptedCookies}
                action={
                    <Button className='mx-5' onClick={() => onAcceptCookies()}>
                        Accept cookies
                    </Button>
                }
            />
        </div>
    )
}

export default Layout
