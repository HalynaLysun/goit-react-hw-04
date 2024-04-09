export default function SearchBox({ input, onChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={input} onChange={onChange} />
    </>
  );
}
