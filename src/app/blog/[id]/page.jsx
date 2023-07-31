import Image from "next/image";
import React from "react";
import styles from "./page.module.css"

const BlogPost = () => {
    return (
        <div className={styles?.container}>
            <div className={styles?.top}>
                <div className={styles?.info}>
                    <h1 className={styles?.title}>

                    </h1>
                    <p className={styles?.desc}>

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