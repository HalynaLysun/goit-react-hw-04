import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  // console.log(images);
  // console.log(inputValue);

  const handleChange = (evt) => {
    setInputValue(evt.target.value.trim());
  };

  useEffect(() => {
    async function fetchImages() {
      const URL =
        "https://api.unsplash.com/search/photos/?client_id=cpMrNbJR9hAZfCOvirw9MRq6_gAnEEUzO53Wjet5MRo&page=1&query=woman";
      const response = await axios.get(URL);
      console.log(response.data.user);
      setImages(response.data.results);
    }
    fetchImages();
  }, []);

  return (
    <>
      <SearchBar inputValue={inputValue} onSubmit={handleChange} />
      {images.length > 0 && <ImageGallery images={images} />}
    </>
  );
}
