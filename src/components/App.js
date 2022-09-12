import React, { useState, useEffect } from "react";

function App() {
  const [dogImages, setDogImages] = useState(null);
  useEffect(() => { 
    fetch("https://dog.ceo/api/breeds/image/random")
      .then ((response) => response.json())
      .then((data) => {
        setDogImages(data.message);
      });
  }, []);
    // if the data is null, show a loading indicator
   if (!dogImages) return <p>"Loading..."</p>;
    return <img src={dogImages} alt="A Random Dog" />;    
}
export default App;
 