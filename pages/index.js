import MyHead from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";
import BeverageContainer from "../components/index/BeverageContainer";

export default function Home() {
  return (
    <div className={styles.container}>
      <MyHead title="home" />
      <Layout title="Beverages">
        <BeverageContainer />
      </Layout>
    </div>
  );
}
