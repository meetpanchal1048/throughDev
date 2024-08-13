import {getData} from "@/lib/getData";
import styles from "../../page.module.css"
import { IoLogoStackoverflow } from "react-icons/io5";
import { FaCodepen } from "react-icons/fa";


export const metadata = {
    title: 'LinkShare',
    description: 'Quick links created by mihir',
}

export const revalidate = 60;


export default async function Page({ params }) {

    const shareLink = await getData();
    const searchedId = params.linkId;
    const searchedIdData = shareLink.find(item => item.id === parseInt(searchedId));

    if (!searchedIdData) {
        return <div className={styles.brokenLink}>Your link is broken.</div>;
    }

    return (
        <>
            <div className={styles.shrlnks_1}>
                <div className={styles.shrlnks_2}>
                    <div className={styles.shrlnks_3}>
                        <h2>LinkShare</h2>
                        <p>by Mihir Desai</p>
                    </div>
                    <div className={styles.shrlnks_4}>
                        <div className={styles.shrlnks_5}>
                            <a href={searchedIdData.link} target="_blank" rel="noopener noreferrer">{searchedIdData.title}</a>
                            <div className={styles.shrlnks_6}>
                                <a href="https://stackoverflow.com/users/23142049/meet" target="_blank" className={styles.mediaIcons}><IoLogoStackoverflow /></a>
                                <a href="https://codepen.io/Meet-the-reactor" target="_blank" className={styles.mediaIcons}><FaCodepen /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}