import { client } from "../libs/client"
import Link from "next/link";
import styles from '../styles/Home.module.scss'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <>
    <div className={styles.section}>
      <div className={styles.container}>
        <h1>blog</h1>
        <ul>
        {blog.map((blog) => (
          <li className={styles.blog_a} key={blog.id}>
            <div className={styles.blog_b}>
              <Link href={`blogs/${blog.id}`} >
                <div className={styles.blog_c}>
                  <Image
                    loader={myLoader}
                    src="../public/favicon.ico"
                    alt="Picture of the author"
                    width={140}
                    height={140}
                  />
                  <div className={styles.blog_d}>
                    <div className={styles.blog_title}>{blog.title}</div>
                    <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }} className={styles.body}></div>
                    <div className={styles.blog_name}>
                      <p className={styles.publishedAt}>{blog.publishedAt}</p>
                      <div>zeroichi</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </li>
        ))}

        </ul>
      </div>
    </div>    
    </>
    
  );
}

