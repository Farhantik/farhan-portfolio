import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer" style={{ borderTop: "none" }}>
        <span>
          {profile.logo} &copy; {new Date().getFullYear()}
        </span>

      </div>
    </footer>
  );
}
