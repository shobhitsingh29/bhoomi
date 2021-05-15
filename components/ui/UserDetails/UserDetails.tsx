import React, { FC } from "react";
import styles from "./UserDetails.module.css";
import { useSession } from 'next-auth/client'


const UserDetails: FC<any> = () => {
  const [session, loading] = useSession();

  return (
      <main className={styles.main}>
        <div className={styles.user}>
          {loading && <div className={styles.title}>Loading...</div>}
          {session && <> <p style={{ marginBottom: '10px' }}> Welcome, {session?.user?.name ?? session?.user?.email}</p> <br />
            <img src={session?.user?.image ?? ""} alt="" className={styles.avatar} />
          </>}
          {!session &&
          <>
            <p className={styles.title}>Please Sign in</p>
            <img src="https://cdn.dribbble.com/users/759083/screenshots/6915953/2.gif" alt="" className={styles.avatar} />
          </>
          }
        </div>
      </main>
  );
};

export default UserDetails;
