import axios from "axios";
import { useState } from "react";
import Card from "./Card";
import "./styles.css";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [data, setData] = useState([]);

  const getData = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    await axios
      .get(
        `https://api.openbrewerydb.org/breweries?by_dist=${latitude},${longitude}&per_page=3`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>Browery Search</h1>
      <button onClick={getData}>Click me !</button>
      <div className="cardContainer">
        {data.map((brewery, index) => (
          <Card
            className="card"
            breweryName={brewery.name}
            breweryStreet={brewery.street}
            breweryCity={brewery.city}
            breweryMail={brewery.website_url}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
