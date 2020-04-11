import React, {useContext} from 'react'

function SavedList(props) {
    // console.log("Inside the saved List page");
    // console.log("Props: ", props.savedBooks)
    const savedBooksInfo = props.savedBooks;
    const imageStyle={
        display: "flex",
        justifyContent: "center",
        padding: "20px"
    }
    const rowStyle={
        marginBottom: "60px"
    }
    return (
        <div >
            <p><strong>Your Pinned Books:</strong></p>
            <hr/>
            {savedBooksInfo.map((book)=>(
                <div className="container mb-3">
                    <div className="row" style={rowStyle}>
                        <div className="col-lg-4" style={imageStyle}>
                            <img src={book.imageLinks} className="img-fluid " style={{width: "70%"}}/>
                        </div>
                        <div className="col-lg-8 d-flex justify-content-center flex-column">
                            <h2><em>{book.title}</em></h2>
                            <h4><em>Written by {book.authors}</em></h4>
                            <p>{book.description}
                            </p>
                            <div class="container d-flex ">
                                <a href={book.infoLinks}><button type="button" class="btn btn-outline-info mr-2">View</button></a>
                                <button type="button" onClick={()=> props.deleteBook(book._id)} class="btn btn-outline-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SavedList
