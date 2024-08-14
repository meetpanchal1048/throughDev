import { getBlogData } from "@/lib/getData";
import styles from '../../page.module.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Footer } from "@/otherComponents/page";

export async function generateMetadata({ params }) {
    const blogID = params.blogId;
    const allBlog = await getBlogData();
    const filteredBlog = allBlog.find(item => item.id == blogID);

    if (!filteredBlog) {
        return { title: "Blog not found" };
    }

    return {
        title: `${filteredBlog.title} | throughDev`,
        description: `Read about ${filteredBlog.title}`
    };
}

export default async function page({ params }) {
    const blogID = params.blogId;
    const allBlog = await getBlogData();
    const filteredBlog = allBlog.filter(item => item.id == blogID)[0];
    if (!filteredBlog) {
        return <p>Blog not found</p>;
    }

    return (
        <>
            <div className={styles.blogscss1}>
                <div className={styles.blogscss4}>
                    <div className={styles.blogTitle}>
                        <a href={`/${filteredBlog.stack}`}><IoMdArrowRoundBack /></a>
                        <h1>{filteredBlog.title}</h1>
                        <p>{filteredBlog.stack} • {filteredBlog.tag}</p>
                    </div>
                    <pre className={styles.blogDesc} dangerouslySetInnerHTML={{ __html: filteredBlog.desc }} />
                    {/* <pre className={styles.blogDesc}>
                        {filteredBlog.desc}
                    </pre> */}
                    {filteredBlog.link == null || filteredBlog.link == '' ? '': <a href={filteredBlog.link} className={styles.link}>{filteredBlog.stack == "reactjs" ? 'StackBlitz Link' : 'Codepen Link'}</a>}
                </div>
            </div>
            <Footer />
        </>
    )
}