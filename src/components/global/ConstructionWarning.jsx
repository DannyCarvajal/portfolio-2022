// STYLES
import "./constructionWarning.scss";

const ConstructionWarning = () => {
  return (
    <div className="constructionWarning">
      <div className="constructionWarning__container">
        <div className="constructionWarning__content">
          <span className="constructionWarning__indicator">🚧</span>
          <div className="constructionWarning__text">
            Portfolio <strong>v1.0 (2021)</strong> • v2.0 in development
          </div>
          <span className="constructionWarning__indicator">🚧</span>
        </div>
      </div>
    </div>
  );
};

export default ConstructionWarning;
