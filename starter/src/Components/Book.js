import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";

const Book = ({book,setUpDate}) => {
    const [shelf,setShelf]=useState(book.shelf)
    // console.log(book)
    useEffect(() => {
        const checkShelf =  () => {
            if(!shelf){
                setShelf("none")
            }
            // console.log(shelf)
        };
    
        checkShelf();
      }, [shelf]);
    const updateShelf=async (event)=>{
        // console.log(event.target.value)
        await BooksAPI.update(book,event.target.value);
        setUpDate()
    }    
    return (
    <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage:
            `url(${book.imageLinks.thumbnail})`,
        }}
      ></div>
      <div className="book-shelf-changer">
        <select onChange={(event)=>{
          updateShelf(event)
        }}
        value={shelf}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors}</div>
  </div>
   );
}
 
export default Book;