import axios from "axios";
import { useEffect, useState } from "react";

export default function GameCard({ slug = 'rocket-league' }) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState();
  
  async function getData() {
    try {
      const test = await axios.get(`https://api.rawg.io/api/games?search=${slug}?apikey=${API_KEY}`, {
        params : {search: slug, key: API_KEY}
      })
      setData(test.data.results[0])
      // console.log(data);
    }
    catch (err) {console.error(err);}
  }

  

  useEffect(() => {getData();}, [slug]);

  useEffect(() => {console.log(data);}, [data]);
    
    

  return (
    <div>
      {data && 
        <>
          <p>{slug} : {data.name}</p>
          <img src={data.background_image} alt={data.name} className="h-64"/>
        </>
      }
    </div>
  );
}
