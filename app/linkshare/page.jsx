import {getData} from "@/lib/getData";
import styles from '../page.module.css'

export const metadata = {
    title: "LinkShare",
    description: 'Create quick shareable links'
}

export default async function page(){
    const shareLink = await getData();
    return(
        <>
        <div className={styles.shrlnks_7}>
            <h1>LinkShare</h1>
        </div>
        </>
    )
}