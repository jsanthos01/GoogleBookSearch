import React from 'react'

function ShowResults(props) {
    const resultArray = props.bookList;
    const imageStyle={
        display: "flex",
        justifyContent: "center",
        padding: "20px"
    }

    return (
        <div >
            <p><strong>Your Result:</strong></p>
            <hr/>
            <div className="container mb-3">
                {resultArray.map(book => 
                    <div className="row">
                        <div className="col-lg-3" style={imageStyle}>
                        {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? <img src={book.volumeInfo.imageLinks.thumbnail} className="img-fluid w-100"/> : '[no image]' }
                        </div>
                        <div className="col-lg-9 d-flex justify-content-center flex-column">
                            <h2><em>{book.volumeInfo.title}</em></h2>
                            <h4><em>Written by {book.volumeInfo.authors}</em></h4>
                            <p>{book.volumeInfo.description}</p>
                            <div class="container d-flex mx-auto ">
                                <a href={book.volumeInfo.infoLink} ><button type="button" class="btn btn-outline-success mr-2">View</button></a>
                                <a href="/saved" ><button onClick={} type="button" class="btn btn-outline-primary">Saved</button></a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default ShowResults
