import { useState,useEffect } from "react";
import Book from "./Book";

const Shelf = ({shelfName,books,render}) => {
    // console.log(render)
    const [shelfBooks,setShelfBooks]=useState([])
    const removeSpaces=(shelf)=>{
        let result = shelf.replace(/\s/g, '') 
        return result
    }

    useEffect(() => {
        const getShelfBooks = async () => {
          const res = removeSpaces(shelfName).toLowerCase()
        //   console.log(res)
          const resShelfBooks=books.filter(b=>b.shelf.toLowerCase()===res)
        //   console.log(resShelfBooks)
          setShelfBooks(resShelfBooks)
          
        };
        getShelfBooks();
      }, [books,shelfName]);
    
    return (
                      <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfName}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">

        {
            shelfBooks.map(book=>(
                <li key={book.id}>
                    <Book book={book} setUpDate={render}/>
                </li>
            ))
        }
      </ol>
    </div>
  </div>
    );
}
 
export default Shelf;