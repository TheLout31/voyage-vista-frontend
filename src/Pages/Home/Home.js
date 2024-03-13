import { Fragment, useEffect, useState } from "react";
import { Navbar, HotelCard,Categories } from "../../Components";
import "./Home.css";
import axios from "axios";

export const Home = () => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://rich-teal-dog-kit.cyclic.app/api/hotels");
        setHotel(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Categories/>
      <main className="main gap-larger">
        {hotel &&
          hotel.map((item) => <HotelCard key={item._id} hotels={item} />)}
      </main>
    </Fragment>
  );
};
