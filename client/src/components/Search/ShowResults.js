import React, {useState} from 'react';

function ShowResults(props) {
    const resultArray = props.bookList;

    const imageStyle={
        display: "flex",
        justifyContent: "center",
        padding: "20px"
    }
    const rowStyle={
        marginBottom: "60px"
    }
     
    async function getBookId(bookVal){
        console.log("inside getBookId Function :", bookVal);
        
        let BookData = {
            title: bookVal.title,
            imageLinks:bookVal.imageLinks.thumbnail,
            description: bookVal.description,
            authors: bookVal.authors,
            infoLinks:bookVal.infoLink

        }

        const postBookData = await fetch('/api/savedBooks',
        {  
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(BookData)
        }).then( result=>result.json())
        console.log(postBookData.message)
    }

    return (
        <div >
            <p><strong>Your Result:</strong></p>
            <hr/>
            <div className="container mb-3">
                {resultArray.map(book => 
                    <div className="row" style={rowStyle}>
                        <div className="col-lg-3" style={imageStyle}>
                        {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? <img src={book.volumeInfo.imageLinks.thumbnail} className="img-fluid " style={{width: "70%"}}/> : '[no image]' }
                        </div>
                        <div className="col-lg-9 d-flex justify-content-center flex-column">
                            <h2><em>{book.volumeInfo.title}</em></h2>
                            <h4><em>Written by {book.volumeInfo.authors}</em></h4>
                            <p>{book.volumeInfo.description}</p>
                            <div class="container d-flex mx-auto ">
                                <a href={book.volumeInfo.infoLink} ><button type="button" class="btn btn-outline-success mr-2">View</button></a>
                                <button type="button" onClick={() => getBookId(book.volumeInfo)} class="btn btn-outline-primary mr-2">Save</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShowResults
