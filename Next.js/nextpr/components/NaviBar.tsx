import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/NaviBar.module.css"

const NaviBar = () => {
    const router = useRouter();
    console.log(router)

    return (
        <nav className={styles.nav} >
            <Link href="/">
                <a style={{color: router.pathname ==="/" ? "red" : "blue"}} >Home</a>
            </Link>
            <Link href="/about">
                <a style={{color: router.pathname ==="/about" ? "red" : "blue"}}>About</a>
            </Link>
        </nav>
    )
}

export default NaviBar
