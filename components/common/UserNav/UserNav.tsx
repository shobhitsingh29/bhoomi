import React, { FC, useState } from 'react'
import cn from 'classnames'
import { useUI } from '@components/ui/context'
import s from './UserNav.module.css'
import { Avatar } from '@components/common'
import { useSession, signOut } from 'next-auth/client'
import NewWindow from 'react-new-window'
import { Button, LoadingDots } from '@components/ui'

const UserNav: FC<any> = ({ className }) => {
    const { setDisplay, display } = useUI()
    const [session, loading] = useSession()
    const [popup, setPopUp] = useState(false)

    return (
        <nav className={cn(s.root, className)}>
            <div className={s.mainContainer}>
                <ul
                    className={cn(
                        s.list,
                    )}
                >
                    {session && <li className={cn(s.item)}>
                        <button
                            className={s.avatarButton}
                            aria-label='Menu'
                            onClick={() => setDisplay(!display)}
                        >
                            <Avatar src={session?.user?.image ?? ''} />
                        </button>
                    </li>
                    }
                    <li>
                        {loading ? (
                            <LoadingDots />
                        ) : session ? (
                            <><Button variant='slim' className='truncate max-w-xs' onClick={() => signOut()}>
                                <pre>Sign Out </pre>
                            </Button>
                            </>

                        ) : (
                            <Button variant='slim' onClick={() => setPopUp(true)}>Sign In</Button>
                        )}
                        {popup && !session ? (
                            <NewWindow url='/signIn' center='parent' onUnload={() => setPopUp(false)} />
                        ) : null}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default UserNav
