import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const REACT_APP_PIXABAY_API_KEY = "40590852-8fd7cc81472d8a734c501cab5";
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <div className="container mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)} />
        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No images found
          </h1>
        )}
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading....</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => {
              return <ImageCard key={image.id} image={image} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
