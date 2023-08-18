'use client'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  return (<div className={styles.user_container}>
    <div>
    <Link
      href="/"
    >
      <h2>
          Home <span>-&gt;</span>
      </h2>
    </Link>
    </div>
    <br />
    <hr />
    <br />
    <h1>{router.query.user}</h1>
  </div>)
}