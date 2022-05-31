import React from "react";
import ContactForm from "../components/contact/Contactform";
import MyHead from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";

function contact() {
  return (
    <div className={styles.container}>
      <MyHead title="contact" />
      <Layout title="Contact Page">
        <ContactForm />
      </Layout>
    </div>
  );
}

export default contact;
