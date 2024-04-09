import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ inputValue, onSubmit }) {
  function chekValue(evt) {
    {
      evt.preventDefault();
      const notify = () => toast("Please enter the text to search for images!");
      {
        inputValue === "" && notify();
      }
    }
  }
  return (
    <header>
      <form onSubmit={chekValue}>
        <Toaster />
        <input
          onChange={onSubmit}
          id="nameCard"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
