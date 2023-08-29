import "./GetStarted.scss";

export function GetStarted() {
  return (
    <section className="get-started">
      <div className="get-started__container">
        <div className="get-started__body get-started-info">
          <div className="get-started-info__title">
            Meaningful investments in Main Street businesses
          </div>
          <div className="get-started-info__text">
            Browse vetted investment offerings in communities all over the US.
          </div>
          <button className="get-started-info__button button button_purple">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
