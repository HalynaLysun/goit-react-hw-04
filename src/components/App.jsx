import SearchBar from "./SearchBar/SearchBar";
import { useState, useEffect } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const handleChange = (evt) => {
    setInputValue(evt.target.value.trim());
  };

  return (
    <>
      <SearchBar inputValue={inputValue} onSubmit={handleChange} />
    </>
  );
}
