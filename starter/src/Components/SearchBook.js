import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI"
import Book from "./Book";
const SearchBook = ({render}) => {
    const [result,setResult]=useState([])
    // console.log(render)
    const search=async(value)=> {
        // console.log(value)
        if(value===""){
            setResult([])
            return
        }
        const res = await BooksAPI.search(value);
        // console.log(res)

        if(res.error){
            setResult([])
            return
        }
        const filterd=res.filter(book=>book.imageLinks!==undefined)
        // console.log()
        setResult(filterd)
        // console.log(result)
    }
    return ( <div className="search-books">
    <div className="search-books-bar">
        <Link to="/" className="close-search">
         close search
        </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={(event)=>search(event.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {
            result.map(
                book=>(
                    <li key={book.id}>
                        <Book book={book} setUpDate={render}/>
                    </li>
                )
            )
        }
      </ol>
    </div>
  </div>);
}
 
export default SearchBook;