import React from "react";

const ArticleCard = ({article}) => {
  return (
    <div>
      <div className="card mb-3">
        <img src={article.urlToImage} className="card-img-top" style={{maxHeight: "540px"}} alt="..." />
        <div className="card-body">
          <h5 className="card-title"><strong>{article.title}</strong></h5>
          <p className="card-text">
            {article.description}
          </p>
          <a href={article.url}>SEE MORE</a>
          <p className="card-text">
            <small className="text-muted">{article.publishedAt}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
