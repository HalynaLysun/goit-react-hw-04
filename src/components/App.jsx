import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import fetchImages from "../images-api";
import { useState, useEffect } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleChange = (newInputValue) => {
    setInputValue(newInputValue);
  };

  useEffect(() => {
    async function fetchImagesGallery() {
      try {
        setLoading(true);
        const data = await fetchImages(inputValue, page);
        const newImages = data.results;
        setImages(newImages);
        // setImages((prevImages) => [...prevImages, ...newImages]);
        // setPage((prevPage) => prevPage + 1);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImagesGallery();
  }, [inputValue]);

  return (
    <>
      <SearchBar onSubmit={handleChange} />
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length !== 0 && <LoadMoreBtn />}
    </>
  );
}
