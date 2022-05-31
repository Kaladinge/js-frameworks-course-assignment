import React from "react";
import MyHead from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";

function admin() {
  return (
    <div className={styles.container}>
      <MyHead title="admin" />
      <Layout title="Admin"></Layout>
    </div>
  );
}

export default admin;
