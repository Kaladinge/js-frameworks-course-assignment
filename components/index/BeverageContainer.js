import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import useSWR from "swr";
import { FavContext } from "../../context/AuthContext";
import Beverages from "./Beverages";
import FavoriteButton from "../layout/FavoriteButton";

const fetcher = (url) => fetch(url).then((res) => res.json());

function BeverageContainer() {
  const { data, error } = useSWR("/api/beverages", fetcher);
  const [favorite, setFavorite] = useContext(FavContext);

  if (error) return <div>Something went wrong</div>;
  if (!data) return <div>Loading...</div>;

  const beverages = data.map(function (item, index) {
    const favorited = favorite.filter(
      (favitem) => item.id === parseInt(favitem.id)
    );

    return (
      <Col key={item.id} xs={12} lg={6} xl={4} className="text-center">
        <Beverages key={index} beverage={item} />
        <FavoriteButton
          value={item.id}
          clickHandle={makeFavourite}
          title={item.title}
          price={item.price}
        >
          {favorited.length > 0 ? "Remove from favorites" : "Add to favorites"}
        </FavoriteButton>
      </Col>
    );
  });

  function makeFavourite(event) {
    const alreadyThere = favorite.filter(
      (item) => event.target.value === item.id
    );

    if (alreadyThere.length === 0) {
      setFavorite([
        ...favorite,
        {
          id: event.target.value,
          title: event.target.dataset.title,
          price: event.target.dataset.price,
        },
      ]);
    }

    if (alreadyThere.length > 0) {
      const filtered = favorite.filter(
        (item) => event.target.value !== item.id
      );
      setFavorite(filtered);
    }
  }

  return <Row>{beverages}</Row>;
}

export default BeverageContainer;
