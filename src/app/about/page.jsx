import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";
import styles from "./about.module.css"

const About = () => {
 return(
    <div className={styles?.container}>
<div className={styles?.imgContainer}>
<Image
src=""
fill={true}
alt=""
className={styles?.img}
/>
<div className={styles?.imgText}>
<h1 className={styles?.imgTitle}>Digital Storytellers</h1>
<h2 className={styles?.imgDesc}>Handcrafting award winning digital</h2>
</div>
</div>
<div className={styles?.textContainer}>
    <div className={styles?.item}>
        <h1 className={styles?.title}>Who Are We?</h1>
        <p className={styles?.desc}></p>
    </div>
    <div className={styles?.item}>
    <h1 className={styles?.title}>What We Do?</h1>
        <p className={styles?.desc}></p>
        <Button url={"/contact"} text={"Contact"} />
    </div>
</div>
    </div>
 )
}

export default About;