import "./FavoriteButton.css";
import { ReactComponent as Star } from "../../assets/star.svg";

export default function FavoriteButton() {
  return (
    <button className="favorite-button" aria-label="favorite">
      <Star />
    </button>
  );
}
