import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

function Beverages({ beverage }) {
  return (
    <Link href="/detail/[id]" as={`/detail/${beverage.id}`}>
      <div className={`text-center mb-2 ${styles.hover}`}>
        <h3>{beverage.title}</h3>
        <div>{beverage.price} kr</div>
        <Image src={beverage.image} width="300px" height="300px" />
      </div>
    </Link>
  );
}

export default Beverages;
