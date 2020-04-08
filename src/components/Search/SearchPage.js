import React, {useState} from 'react';
import { renderToString } from 'react-dom/server'

import Header from './Header';
import Form from './Form';
import ShowResults from './ShowResults';
export const UserContext = React.createContext();

function SearchPage() {
    const [bookList, setBookList] = useState([]);

    let html = '';
    if (bookList.length >1) {
        html = renderToString(<ShowResults  bookList={bookList}/>)
    }
    return (
        <div>
            <UserContext.Provider value={{bookList, setBookList}}>
            <Header />
            <div className=" search container mb-5">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <h3 class="col-11"><i class="fas fa-book"></i>  Book Search</h3>
                        </div>
                        <hr/>
                        <Form />
                    </div>
                </div>
            </div>
            <div className="result container mb-5">
                <div class="card">
                    <div class="card-body" >
                        <div class="row">
                            <h3 class="col-11"><i class="fas fa-search-plus"></i>  Search Results </h3>
                        </div>
                        <hr/>
                        <div dangerouslySetInnerHTML={{__html: html}}>
                        </div>
                    </div>
                </div>
            </div>
            </UserContext.Provider>
        </div>
    )
}

export default SearchPage
