import React from "react";
import { ListGroup } from "react-bootstrap";
import Favorites from "../components/favorites/Favorites";
import MyHead from "../components/layout/Head";
import Layout from "../components/layout/Layout";

function favorite() {
  return (
    <div>
      <MyHead title="fav" />
      <Layout title="Favorites">
        <ListGroup as="ol" numbered>
          <Favorites />
        </ListGroup>
      </Layout>
    </div>
  );
}

export default favorite;
