import React,{useState, useEffect} from 'react'
import Header from './Header';
import SavedList from './SavedList';

export const UserSavedBook = React.createContext();

function SavedPage() {
    const [savedBooks, setSavedBooks] = useState([]);

    async function getSavedBookList(){
        const getBooks = await fetch("/api/savedBooks").then(res => res.json());
        console.log("Inside the SavedPage Component")
        console.log(getBooks);
        setSavedBooks(getBooks);
    }

    useEffect(function(){
        getSavedBookList();
    },[])
    
    async function deleteBook(id){
        console.log("inside the deleteBook function");
        console.log(id);

        const deleteBook = await fetch(`/api/deleteBook/${id}`, 
        {
            method: 'DELETE'
        }).then(result => result.json());
        console.log(deleteBook);

        getSavedBookList();
    }

    return (
        <div>
            <UserSavedBook.Provider value={{savedBooks, setSavedBooks}} >
                <Header />
                <div className="result container mb-5">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <h3 class="col-11"><i class="fas fa-cloud-download-alt"></i>  Pinned Books </h3>
                            </div>
                            <hr/>
                            <SavedList savedBooks={savedBooks} deleteBook={deleteBook} />
                        </div>
                    </div>
                </div>
            </UserSavedBook.Provider>
        </div>
    )
}

export default SavedPage
