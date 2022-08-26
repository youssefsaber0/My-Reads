import "../App.css";
import { useState,useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import SearchBook from "./SearchBook";
function App() {
  const [upDate, setUpDate] = useState(true);
  const [books,setBooks]=useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      setUpDate(false)
      // console.log(upDate)
    };

    getBooks();
  }, [upDate]);
  const reRender=()=>{
    setUpDate(!upDate)
    // console.log(upDate)
  }
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Main books={books} render={reRender}/>
        }
      />
      <Route
        path="/search"
        element={
          <SearchBook
          render={reRender}
          />
        }
      />
    </Routes>
  );
}

export default App;
