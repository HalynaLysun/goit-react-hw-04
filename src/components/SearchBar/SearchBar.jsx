import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <form>
        <input
          id="nameCard"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" onSubmit={onSubmit}>
          Search
        </button>
      </form>
    </header>
  );
}
