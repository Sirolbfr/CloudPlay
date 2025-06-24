import axios from "axios";
import { useEffect, useState } from "react";

export default function GameCard({ id = 730 }) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  console.log(API_KEY);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://store.steampowered.com/api/appdetails?appids=${id}`, {
        header: { "Access-Control-Allow-Origin": "*" },
        "Access-Control-Allow-Credentials": false,
      })
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <h3>Game ID: {id}</h3>
      {data && data[id].success && <p>{data[id].data.name}</p>}
    </div>
  );
}
