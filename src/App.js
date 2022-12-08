import React, { useEffect, useState } from "react";
import ArticleCard from "./components/ArticleCard";
import HeadlineCard from "./components/HeadlineCard";
import Navbar from "./components/Navbar";

const App = () => {
  // state for store all articles
  const [articles, setArticles] = useState([]);
  // state for store all headlines
  const [headlines, setHeadlines] = useState([]);

  // function for fetching data from api
  async function fetchDataFromApi(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    fetchDataFromApi(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=64ab5c785f344032be684a84f038f423"
    ).then((data) => setArticles(data.articles));

    fetchDataFromApi(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=64ab5c785f344032be684a84f038f423"
    ).then((data) => setHeadlines(data.articles));
  }, []);

  // function for onsubmit article details
  function createArticle(e) {
    e.preventDefault();
    const tempObj = {
      author: e.target.author.value,
      title: e.target.title.value,
      description: e.target.description.value,
      file: e.target.file.value,
    };
    console.log(tempObj);
    alert("Your post created successfully");
    window.location.replace("/");
  }

  return (
    <div className="app">
      <Navbar createArticle={createArticle} />
      <div className="container-lg">
        <div className="main py-3 row">
          <div className="col-8">
            <h1>Articles</h1>
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
          <div className="col-4">
            <h5>Top Stories</h5>
            {headlines.map((article, index) => (
              <HeadlineCard article={article} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
