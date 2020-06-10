import React, { useState, useContext } from 'react'
import {UserContext} from './SearchPage'

function Form() {
    //updates the current state of inputSearch as soon as the user starts typing
    const [ inputSearch, setInputSearch ] = useState("");
    const { bookList, setBookList } = useContext(UserContext);

    // when user types, the value of inputSearch is immediately being updated
    function handleInputChange(e){
        let newInput = e.target.value;
        setInputSearch(newInput);
    }

    //loads the booklist with the give search input
    async function loadBookList(e){
        e.preventDefault();
        const newBookList = await fetch( `https://www.googleapis.com/books/v1/volumes?q=${inputSearch}`).then( result=>result.json())
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
