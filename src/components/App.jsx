import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (newInputValue) => {
    setInputValue(newInputValue);
  };

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const val = inputValue;
        const key = "cpMrNbJR9hAZfCOvirw9MRq6_gAnEEUzO53Wjet5MRo";
        const url = `https://api.unsplash.com/search/photos/?client_id=${key}&page=1&query=${val}`;
        const response = await axios.get(url);
        setImages(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [inputValue]);

  return (
    <>
      <SearchBar onSubmit={handleChange} />
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
