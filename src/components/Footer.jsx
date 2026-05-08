import './Footer.css';

export default function Footer() {
  return (
    <footer className="tg-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} TalentGen Advisory · Lekki Phase 1, Lagos</span>
        <span>Strategy · Operations · Human Capital</span>
      </div>
    </footer>
  );
}
