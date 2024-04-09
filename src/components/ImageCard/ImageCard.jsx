import css from "./ImageCard.module.css";
export default function ImageCard({ alt_description, urls: { small } }) {
  console.log(alt_description);
  return (
    <div>
      <img className={css.image} src={small} alt={alt_description} />
    </div>
  );
}
