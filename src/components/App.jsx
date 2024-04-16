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
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function fetchImagesGallery() {
      try {
        if (!inputValue) {
          return;
        }
        setLoading(true);
        const data = await fetchImages(inputValue, page);
        const newImages = data.results;
        setImages((prevImages) => [...prevImages, ...newImages]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImagesGallery();
  }, [inputValue, page]);

  return (
    <>
      <SearchBar onSubmit={handleChange} />
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length === 10 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}
