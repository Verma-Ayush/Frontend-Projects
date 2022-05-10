import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  let categoryTitle =
    props.category.charAt(0).toUpperCase() + props.category.slice(1); //capitilizes first letter
  document.title = `NewsBook - ${categoryTitle}`;

  //inplace of componentDidMount (but we can't make useEffect async thus we gotta use another function)
  useEffect(() => {
    //setNews is not a state function.
    const setNews = async () => {
      props.setProgress(10); //a passed function ,shows a progress bar at the top , with loading% at argument

      //&page=1 is bydeafault , and we also added pageSize = 15 ,which is max articles in a page.
      let myurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=15&apiKey=${props.apiKey}`;

      let data = await fetch(myurl);
      props.setProgress(30); //
      let parsedData = await data.json();

      props.setProgress(60); //

      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false); //initially it was true

      props.setProgress(100);
    };
    setNews();
    //eslint-disable-next-line
  }, []); //at end it may also takes elements on whose change it will run(none here).

  const handlePrevClick = async () => {
    props.setProgress(10);

    let myurl = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&page=${page - 1}&pageSize=15&apiKey=${
      props.apiKey
    }`;

    setLoading(true); //before fetching data we set loading true so the we can show a spinner(showing spinner is a change in page thus we need setState())
    let data = await fetch(myurl);
    props.setProgress(30); //
    let parsedData = await data.json();
    props.setProgress(60); //

    setLoading(false); //initially it was true
    setArticles(parsedData.articles);
    setPage(page - 1);

    props.setProgress(100); //
  };

  const handleNextClick = async () => {
    props.setProgress(10); //shows a progress bar at the top , with loading% at argument

    let myurl = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&page=${page + 1}&pageSize=15&apiKey=${
      props.apiKey
    }`;

    setLoading(true);
    let data = await fetch(myurl);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);

    setLoading(false);
    setArticles(parsedData.articles);
    setPage(page + 1);

    props.setProgress(100); //
  };

  return (
    <div className="container my-3">
      <h1
        className="text-center text-decoration-underline"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        NewsBook - {categoryTitle} Top Headlines
      </h1>
      {loading && <Spinner />}
      <div className="row my-3">
        {/*Note since we are first updating the states in useEffect() , which runs after the rendering the component (going through return section first)
           thus , since our article is initially empty mapping through it doesn't makes sense , when useEffect() runs articles get data in it*/}
        {articles.length !== 0 &&
          /* looping throughout the article array and also displaying it! via return */
          articles.map((ele) => {
            return (
              //key must be unique for every div element we are returning
              <div className="col-md-4" key={ele.url}>
                <NewsItem
                  title={ele.title}
                  description={ele.description}
                  imageUrl={ele.urlToImage}
                  newsUrl={ele.url}
                  date={ele.publishedAt}
                />
              </div>
            );
          })}
      </div>
      <br />
      <br />
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handlePrevClick}
          disabled={page === 1}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleNextClick}
          disabled={
            //15 is max articles in page.
            page + 1 > Math.ceil(totalResults / 15)
          }
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;

News.defaultProps = {
  //bydefault props values.
  country: "in",
};

// News.PropTypes = {
//   //required prop datatypes
//   country: PropTypes.string,
//   category: PropTypes.string,
// };
