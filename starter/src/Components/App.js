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
  const upDateShelf=(book,value)=>{
    let result=books.filter(b=>b.id!==book.id)
    // if(result.length===result.length)
    // {
    //   let newBook=Object.assign({}, book);
    //   newBook.shelf=value
    //   result=[...result,newBook]
    // }
    let newBook=Object.assign({}, book);
    newBook.shelf=value
    // console.log(value)
    // console.log(newBook)
    result=[...result,newBook]
    setBooks(result)
    // console.log(books)
  }
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
          <Main books={books} render={reRender} upDateShelf={upDateShelf}/>
        }
      />
      <Route
        path="/search"
        element={
          <SearchBook
          render={reRender}
          upDateShelf={upDateShelf}
          books={books}
          />
        }
      />
    </Routes>
  );
}

export default App;
