import React, { useState, useContext } from 'react'
import {UserContext} from './SearchPage'

function Form() {

    const [ inputSearch, setInputSearch ] = useState("");
    const {bookList, setBookList} = useContext(UserContext);
    function handleInputChange(e){
        let newInput = e.target.value;
        console.log(newInput);
        setInputSearch(newInput);
    }

    //gets the book list
    async function loadBookList(e){
        e.preventDefault();
        
        const newBookList = await fetch( `https://www.googleapis.com/books/v1/volumes?q=${inputSearch}`).then( result=>result.json())
        console.log("inside the search folder form file")
        console.log(newBookList.items)
        setBookList(newBookList.items);
    }

    return (
        <form>
            <div className="form-group">
                <label><strong>Book</strong></label>
                <input onChange={handleInputChange} value={inputSearch} type="text" className="form-control" />
            </div>
            <div className="pull-right">
                <button onClick={loadBookList} type="submit" className="btn btn-outline-primary float-right">
                Search
                </button>
            </div>
      </form>
    )
}

export default Form
