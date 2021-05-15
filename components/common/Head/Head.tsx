import { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'

const Head: FC = () => {
    return (
        <>
            <DefaultSeo {...config} />
            <NextHead>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
                {/*<script src='https://apis.google.com/js/platform.js' />*/}
                {/*<meta name="google-signin-client_id" content="94873425938-1ot94c7vm2adr02klj5cefijjvjemen2.apps.googleusercontent.com"/>*/}
            </NextHead>
        </>
    )
}

export default Head;