import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { FavContext } from "../../context/AuthContext";

function Favorites() {
  const [favorite, setFavorite] = useContext(FavContext);

  if (favorite.length > 0) {
    const maps = favorite.map((item) => (
      <ListGroup.Item
        key={item.id}
        className="border text-center m-3 bg-secondary text-white"
      >
        <h3>{item.title}</h3>
        <div>{item.price} kr</div>
      </ListGroup.Item>
    ));
    return <div>{maps}</div>;
  }

  return <div>No favorites added</div>;
}

export default Favorites;
