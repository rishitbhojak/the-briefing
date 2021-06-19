import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsContent from "./components/NewsContent/NewsContent";
import Footer from "./components/Footer/Footer";
import apikey from "./data/config";
function App() {
  const [category, setCategory] = useState("General");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(10);
  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(newsArray);
  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadmore]);

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
        loadmore={loadmore}
        setLoadmore={setLoadmore}
      />
      <Footer />
    </div>
  );
}

export default App;
