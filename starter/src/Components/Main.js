import Shelf from "./Shelf";
import { Link } from "react-router-dom";

const Main = ({books,render,upDateShelf}) => {
    // console.log(render)
    return (   
 <div className="app">


        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
                <Shelf shelfName={"Currently Reading"} books={books} render={render} upDateShelf={upDateShelf}/>
                <Shelf shelfName={"Want to Read"} books={books} render={render} upDateShelf={upDateShelf}/>
                <Shelf shelfName={"Read"} books={books} render={render} upDateShelf={upDateShelf}/>
            </div>
          </div>
          <div className="open-search">
            {/* <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a> */}
            <Link to="/search" >
            close search
            </Link>
          </div>
        </div>
      
    </div>

     );
}
 
export default Main;