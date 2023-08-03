import Image from "next/image";
import React from "react";
import styles from "./page.module.css"
import {notFound} from "next/navigation";

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        return notFound()
    }

    return res.json()
}

const BlogPost = async ({ params }) => {
    const dataId = await getData(params.id);
    return (
        <div className={styles?.container}>
            <div className={styles?.top}>
                <div className={styles?.info}>
                    <h1 className={styles?.title}>
                        {dataId?.title}
                    </h1>
                    <p className={styles?.desc}>
                        {dataId?.body}
                    </p>
                    <div className={styles?.author}>
                        <Image
                            src={"/8.jpeg"}
                            alt=""
                            width={40}
                            height={40}
                            className={styles?.avatar}
                        />
                        <span className={styles?.username}>Jhon Doe</span>
                    </div>
                </div>
                <div className={styles?.imageContainer}>
                    <Image
                        src={"/7.jpeg"}
                        alt=""
                        fill={true}
                        className={styles?.image}
                    />
                </div>
            </div>
            <div className={styles?.content}>
                <p className={styles?.text}></p>
            </div>
        </div>
    )
}

export default BlogPost;