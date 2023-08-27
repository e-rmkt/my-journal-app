import "./Entry.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
export default function Entry() {
  return (
    <article className="entry">
      <time className="entry__date">Time</time>
      <div className="entry__content">
        <div className="entry__motto-container">
          <h2 className="entry__motto">
            <q>Love React!!</q>
          </h2>
          <FavoriteButton />
        </div>
        <p className="entry__notes">
          I cant believe i just löearned about React! It's the best and I dont
          ever want to stop using it!
        </p>
      </div>
    </article>
  );
}
