import { getBlogData } from "@/lib/getData";
import styles from '../page.module.css'
import { Navbar } from "@/otherComponents/page";
import { Footer } from "@/otherComponents/page";

export const metadata = {
    title: "throughDev",
    description: 'Create quick shareable links'
}

export const revalidate = 1800;

export default async function page({params}) {
    const stackName = params.stack;
    const allBlog = await getBlogData();
    const filteredBlogs = allBlog.filter(item => item.stack == stackName);
    
    let postNum = filteredBlogs.length;
    return (
        <>
            <Navbar/>
            <div className={styles.blogscss1}>
                <div className={styles.blogscss2}>
                    <div className={styles.blogsMainTitle}>
                        <h2>{stackName} topics</h2>
                        <p>Total {postNum} topic</p>
                    </div>
                    {filteredBlogs.map((item) => (
                        <div className={styles.blogscss3} key={item.id}>
                            <div className={styles.blogstag}>{(item.tag)?item.tag:stackName}</div>
                            <pre className={styles.blogsTitle}>
                                <a href={`${stackName}/${item.id}`}>{item.title}</a>
                            </pre>
                            <div className={styles.blogsDesc}>{item.desc}</div>
                        </div>
                    ))}
                    {postNum === 0 && <p className={styles.emptyDiv}>No blogs available</p>}
                </div>
            </div>
            <Footer/>
        </>
    )
}