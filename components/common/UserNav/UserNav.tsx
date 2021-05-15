import React, { FC, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { Heart, Bag } from '@components/icons'
import { useUI } from '@components/ui/context'
import s from './UserNav.module.css'
import { Avatar } from '@components/common'
import { useSession ,signOut } from 'next-auth/client'
import NewWindow from 'react-new-window'
import { Button } from '@components/ui'

const UserNav: FC<any> = ({ className }) => {
    const { toggleSidebar, closeSidebarIfPresent, setDisplay, display } = useUI()
    const [session, loading] = useSession()
    const [popup, setPopUp] = useState(false)

    return (
        <nav className={cn(s.root, className)}>
            <div className={s.mainContainer}>
                <ul className={s.list}>
                    <li className={s.item} onClick={toggleSidebar}>
                        <Bag />
                    </li>
                    <li className={s.item}>
                        <Link href='/wishlist'>
                            <a onClick={closeSidebarIfPresent} aria-label='Wishlist'>
                                <Heart />
                            </a>
                        </Link>
                    </li>
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
                    <div>
                        {loading ? (
                            <p>loading session...</p>
                        ) : session ? (
                            <Button variant='slim'  onClick={() => signOut()}>Sign Out <span className={'text-red'}>{session?.user?.name ?? session?.user?.email}</span></Button>
                        ) : (
                            <Button variant='slim' onClick={() => setPopUp(true)}>Sign In</Button>
                        )}
                        {popup && !session ? (
                            <NewWindow url="/signIn" center='parent' onUnload={() => setPopUp(false)} />
                        ) : null}
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default UserNav
