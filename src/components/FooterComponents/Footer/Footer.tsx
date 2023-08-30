import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__upper upper-footer">
          <div className="upper-footer__body"></div>
          <div className="upper-footer__button"></div>
        </div>
        <div className="footer__lower lower-footer">
          <div className="lower-footer__subscribe">
            <div className="lower-footer-subscribe__title">Subscribe to our newsletter</div>
          </div>
          <div className="lower-footer__social"></div>
        </div>
      </div>
    </footer>
  );
}
