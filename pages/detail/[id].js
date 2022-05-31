import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import MyHead from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";

const fetcher = (url) => fetch(url).then((res) => res.json());

function id() {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id ? `/api/detail/${router.query.id}` : null,
    fetcher
  );

  if (error) return <div>Something went wrong</div>;
  if (!data) return <div>Loading</div>;

  return (
    <div>
      <MyHead title="home" />
      <Layout title="Beverage">
        <div className="text-center">
          <h2>{data.title}</h2>
          <Image src={data.image} width="400px" height="400px" />
          <h3>{data.price} kr</h3>
        </div>
      </Layout>
    </div>
  );
}

export default id;
