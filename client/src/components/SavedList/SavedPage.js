import React,{useState, useEffect} from 'react'
import Header from './Header';
import SavedList from './SavedList';

// Parent component with three child components
// Used useContext() to pass data to through the component tree. Alternative to manually passing props for every level
export const UserSavedBook = React.createContext();

function SavedPage() {
    const [savedBooks, setSavedBooks] = useState([]);

    async function getSavedBookList(){
        const getBooks = await fetch("/api/savedBooks").then(res => res.json());
        setSavedBooks(getBooks);
    }

    // [] runs useEffect only once and that is when the page is loaded
    useEffect(function(){
        getSavedBookList();
    },[])
    
    async function deleteBook(id){
        const deleteBookFunc = await fetch(`/api/deleteBook/${id}`, { method: 'DELETE'}).then(result => result.json());
        getSavedBookList();
    }

    return (
        <div>
            <UserSavedBook.Provider value={{savedBooks, setSavedBooks, deleteBook}} >
                <Header />
                <div className="result container mb-5">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <h3 class="col-11"><i class="fas fa-cloud-download-alt"></i>  Pinned Books </h3>
                            </div>
                            <hr/>
                            <SavedList />
                        </div>
                    </div>
                </div>
            </UserSavedBook.Provider>
        </div>
    )
}

export default SavedPage
