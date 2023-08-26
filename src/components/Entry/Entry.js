import FavoriteButton from "../FavoriteButton/FavoriteButton";
export default function Entry() {
  return (
    <article className="entry">
      <time className="entry__date">Time</time>
      <div className="entry__content">
        <div className="entry__motto-container">
          <h2 className="entry__motto">
            <q>Motto</q>
          </h2>
          <FavoriteButton />
        </div>
        <p className="entry__notes">Notes</p>
      </div>
    </article>
  );
}
