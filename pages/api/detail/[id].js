import { beverages } from "../../../data";

export default function detailHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json({
        id,
        title: `${beverages[id - 1].title}`,
        price: `${beverages[id - 1].price}`,
        image: `${beverages[id - 1].image}`,
      });
  }
}
