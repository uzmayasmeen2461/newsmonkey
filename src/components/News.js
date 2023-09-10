import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    this.props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;

    this.setState({ loading: true });
    this.props.setprogress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setprogress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: 2,
    });
    this.props.setprogress(100);
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async componentDidMount() {
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}--NewsMonkey`;
    this.updateNews();
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;

    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ marginTop: 80 }}>
          Top Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((element) => (
            <div key={element.url} className="col-md-4 my-4">
              <NewsItem
                title={element.title ? element.title.slice(0, 45) + ".." : ""}
                description={
                  element.description
                    ? element.description.slice(0, 88) + ".."
                    : ""
                }
                url={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhiViuGy1EVyWk-evUWfL9MoeAkfc8LpP4Nq_6uy1&s"
                }
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          scrollableTarget="scrollableDiv"
        ></InfiniteScroll>
      </div>
    );
  }
}
