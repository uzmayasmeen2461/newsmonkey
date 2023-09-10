import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, url, newsUrl, author, date, source } = this.props;
    return (
      <div className="card mb-3 d-flex align-items-center">
        <div className="column g-0 p-2 flex-fill">
          <div className="col-md-4 " style={{ width: 380, height: 220 }}>
            <span
              className="text-center position-absolute top-0  badge rounded-pill bg-danger"
              style={{ left: "70%", zIndex: "1", height: 25 }}
            >
              {source}
            </span>
            <img
              style={{
                objectFit: "contain",
              }}
              src={url}
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  <b>By </b> - {author ? author : "unknown"}
                </small>
                <br />
                <small className="text-body-secondary">
                  <b>On</b> - {date ? new Date(date).toGMTString() : "unknown"}
                </small>
              </p>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
