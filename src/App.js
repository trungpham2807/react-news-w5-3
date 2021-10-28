import './App.css';
import React, { useState, useEffect } from "react";
import Mainpage from "./components/Mainpage"
import NavbarNews from "./components/NavbarNews"
import Sidebar from "./components/Sidebar"
import SearchBox from './components/SearchBox';
import PaginationNews from './components/PaginationNews';


const API_KEY = "eb5f1c7930794fc58e0503cf599f921c";
const App = () => {
  const[data, setData] = useState([]);
  const[category, setCategory] = useState('entertainment')
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);


  useEffect(() => { 
    //fetch Data
    const fetchData = async() => {
      let baseUrl = "https://newsapi.org/v2";
      let apiKey = `&apiKey=${API_KEY}`;
      let queryPath = `/everything?q=${query}`;
      let categoryPath = `/top-headlines?country=us&category=${category}`;
      let pagePath = `/top-headlines?country=us&page=${currentPage}`;
      
      let url = baseUrl + categoryPath + apiKey;
      try {
        const data = await fetch(url);
        const result = await data.json();
        setData(result);
      }catch(err){
        setData();
      }
    }
    
    fetchData();
  }, [category, query, currentPage])


  return (
    <div className="App">
      <SearchBox setQuery = {setQuery} />
      <div className = "container">
        <div className = "row">
          <div className = "col-3">
            <Sidebar setCategory = {setCategory} />
            <PaginationNews setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
          </div>
          <div className = "col-9">
            <Mainpage data = {data} category = {category}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;