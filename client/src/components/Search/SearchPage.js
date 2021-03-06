import React, {useState, useContext} from 'react';
import Header from './Header';
import Form from './Form';
import ShowResults from './ShowResults';
export const UserContext = React.createContext();

// Parent component with three child components
// Used useContext() to pass data to through the component tree. Alternative to manually passing props for every level
function SearchPage() {
    //destructuring
    const [bookList, setBookList] = useState([]);
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
                        { bookList.length > 1 ? <ShowResults /> : '' }
                    </div>
                </div>
            </div>
            </UserContext.Provider>
        </div>
    )
}

export default SearchPage
