import Image from "next/image";
import React from "react"
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles?.container}>
            <div>@2023 nextjs. All rights reserved.</div>
            <div className={styles?.social}>
              <Image className={styles?.icon } src="/R.png" width={15} height={15} alt="Next image" />
              <Image className={styles?.icon } src="/insta.webp" width={15} height={15} alt="Next image" />
              <Image className={styles?.icon } src="/titter.png" width={15} height={15} alt="Next image" />
              <Image className={styles?.icon } src="/R.png" width={15} height={15} alt="Next image" />
            </div>
        </div>
    )
}

export default Footer;
