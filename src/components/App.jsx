import SearchBar from "./SearchBar/SearchBar";
import { useState, useEffect } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    // setInputValue(evt.target.value);
    console.log(evt);
  };

  return (
    <>
      <SearchBar input={inputValue} onSubmit={handleChange} />
    </>
  );
}
