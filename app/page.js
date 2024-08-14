import styles from "./page.module.css";
import { Navbar } from "@/otherComponents/page";
import { Footer } from "@/otherComponents/page";
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata = {
  title: "throughDev",
  description: 'throughDev - Learn about latest technologies through developing.'
}

export default function Home() {
  return (
    <>
      <GoogleAnalytics gaId="G-2VYXCFG39F" />
      <div className={styles.homeMain}>
        <Navbar />
        <div className={styles.homeHero}>
          <h1>Hey, we’re throughDev
            Join us for stories, thoughts, and ideas.</h1>
        </div>
        <div className={styles.homeStacks}>
          <p>start exploring by</p>
          <div>
            <a href="/css">CSS</a>
            <a href="/reactjs">React JS</a>
            <a href="/angularjs">Angular JS</a>
            <a href="/nextjs">Next Js</a>
          </div>
        </div>
        <div className={styles.homeFooter}>
          <Footer />
        </div>
      </div>
    </>
  );
}
