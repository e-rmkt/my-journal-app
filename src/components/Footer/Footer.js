import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>{`Journal App - ${year}`}</p>
    </footer>
  );
}
