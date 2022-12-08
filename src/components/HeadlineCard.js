import React from "react";

const HeadlineCard = ({article}) => {
  return (
    <div>
      <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={article.urlToImage} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title"><strong>{article.title}</strong></h6>
              <a href={article.url}>SEE MORE</a>
              <p className="card-text">
                <small className="text-muted">{article.publishedAt}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlineCard;
