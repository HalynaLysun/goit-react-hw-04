import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);

  const handleChange = (evt) => {
    setInputValue(evt.target.value.trim());
  };

  useEffect(() => {
    async function fetchImages() {
      const val = inputValue;
      const key = "cpMrNbJR9hAZfCOvirw9MRq6_gAnEEUzO53Wjet5MRo";
      const url = `https://api.unsplash.com/search/photos/?client_id=${key}&page=1&query=${val}`;
      const response = await axios.get(url);
      setImages(response.data.results);
    }
    fetchImages();
  }, [inputValue]);

  return (
    <>
      <SearchBar inputValue={inputValue} onSubmit={handleChange} />
      {images.length > 0 && <ImageGallery images={images} />}
    </>
  );
}
