'use client'

import styles from "../app/page.module.css"
import { PiStackOverflowLogoBold } from "react-icons/pi";
import { FaCodepen } from "react-icons/fa";



export function Navbar(){
    return (
        <>
            <div className={styles.navMain}>
                <a href="/" className={styles.navLogo}>
                    throughDev
                </a>
                {/* <div className={styles.navStackLinks}>
                    <a href="/css">CSS</a>
                    <a href="/reactjs">React JS</a>
                    <a href="/angularjs">Angular JS</a>
                    <a href="/nextjs">Next Js</a>
                </div> */}
                <div className={styles.navSocialLinks}>
                    <a href="https://stackoverflow.com/users/23142049/meet" target="_blank">
                        <PiStackOverflowLogoBold />
                    </a>
                    <a href="https://codepen.io/Meet-the-reactor" target="_blank">
                        <FaCodepen />
                    </a>
                </div>
            </div>
        </>
    )
}

export function Footer(){
    return(
        <>
            <div className={styles.footerMain}>
                <p>&copy; All right reserved by throughDev</p>
            </div>
        </>
    )
}