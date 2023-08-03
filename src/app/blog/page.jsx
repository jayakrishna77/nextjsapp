import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css"

async function getData() {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } })
   // The return value is *not* serialized
   // You can return Date, Map, Set, etc.

   if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
   }

   return res.json()
}

const Blog = async () => {

   const data = await getData();
   return (
      <div className={styles?.mainContainer}>
         {
            data.map((item) => {
               return (
                  <Link href={`/blog/${item?.id}`}
                     className={styles?.container}
                     key={item?.id}
                     >
                     <div className={styles?.imageContainer}>
                        <Image
                           src={"/9.jpeg"}
                           width={400}
                           height={250}
                           className={styles?.image}
                        />
                     </div>
                     <div className={styles?.content}>
                        <h1 className={styles?.title}>{item?.title}</h1>
                        <p className={styles?.desc}>{item?.body}</p>
                     </div>
                  </Link>
               )
            })
         }
      </div>
   )
}

export default Blog;