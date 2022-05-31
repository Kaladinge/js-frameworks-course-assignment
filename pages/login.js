import React from "react";
import MyHead from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Loginform from "../components/login/Loginform";
import styles from "../styles/Home.module.css";

function login() {
  return (
    <div className={styles.container}>
      <MyHead title="login" />
      <Layout title="Login Page">
        <Loginform />
      </Layout>
    </div>
  );
}

export default login;
