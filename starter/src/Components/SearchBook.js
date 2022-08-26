import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI"
import Book from "./Book";
const SearchBook = ({render,books,upDateShelf}) => {
    const [result,setResult]=useState([])
    let map = new Map();
    // console.log(render)
    const setMap=()=>{
      books.map(b=>map.set(b.id,b))
      // console.log(map)
    }
    useEffect(() => {
      setMap()
    });
    const setShelf=(bookks)=>{

      let unShelfedBook=[]
      // console.log(bookks)
      for (let index = 0; index < bookks.length; index++) {
        // console.log(index)
        if(map.has(bookks[index].id)){
          unShelfedBook.push(map.get(bookks[index].id))
        }
        else{
          
          unShelfedBook.push(bookks[index])
        }
      }
                // console.log(unShelfedBook)
        return unShelfedBook
      //  setResult(unShelfedBook);
    }
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
        // console.log(filterd)

        // console.log()
        setResult(filterd)
        // console.log(result)
        let ans=setShelf(filterd)
        // console.log(ans)
        setResult(ans)
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
                        <Book book={book} setUpDate={render} upDateShelf={upDateShelf}/>
                    </li>
                )
            )
        }
      </ol>
    </div>
  </div>);
}
 
export default SearchBook;