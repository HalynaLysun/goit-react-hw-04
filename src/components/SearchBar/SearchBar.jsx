import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <form>
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
