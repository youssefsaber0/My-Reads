import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";

const Book = ({book,upDateShelf}) => {
    const [shelf,setShelf]=useState(book.shelf)
    // console.log(book)
    useEffect(() => {
        const checkShelf =  () => {
          
            if(book.shelf===undefined){
                setShelf("none")
                // console.log(book.shelf +" "+book.title)
                return
            }
             setShelf(book.shelf)
        };
    
        checkShelf();
      },[shelf,book]);
    const updateShelf=async (event)=>{
        // console.log(event.target.value)
        upDateShelf(book,event.target.value)
        book.shelf=event.target.value
        // console.log(book.shelf)
        setShelf(event.target.value)
        await BooksAPI.update(book,event.target.value);
        // setUpDate()

        // console.log(event.target.value)
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
          <option value="move" disabled>
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