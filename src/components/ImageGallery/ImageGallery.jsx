import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.map((el) => {
        return (
          <li key={el.id}>
            <ImageCard {...el} />
          </li>
        );
      })}
    </ul>
  );
}
