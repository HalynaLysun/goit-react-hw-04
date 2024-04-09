import SearchBar from "./SearchBar/SearchBar";
import { useState, useEffect } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value.trim());
  };

  return (
    <>
      <SearchBar onSubmit={handleChange} />
    </>
  );
}
