import React from 'react'

function SavedList() {
    return (
        <div >
            <p><strong>Your Pinned Books:</strong></p>
            <hr/>
            <div className="container mb-3">
                <div className="row">
                    <div className="col-lg-4">
                        <img src="https://dynamic.indigoimages.ca/books/0316527157.jpg?altimages=false&scaleup=true&width=614&maxheight=614&quality=85&lang=en" className="img-fluid img-thumbnail"/>
                    </div>
                    <div className="col-lg-8 d-flex justify-content-center flex-column">
                        <h2><em>Malala</em></h2>
                        <h4><em>Written by Malala Yousafe</em></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                            
                        <div class="container d-flex ">
                            <button type="button" class="btn btn-outline-info mr-2">View</button>
                            <button type="button" class="btn btn-outline-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-3">
                <div className="row">
                    <div className="col-lg-4">
                        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1478165606l/32863526.jpg" className="img-fluid img-thumbnail"/>
                    </div>
                    <div className="col-lg-8 d-flex justify-content-center flex-column" >
                        <h2><em>The Art of Moana</em></h2>
                        <h4><em>Written by Maggie Lasseter</em></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div class="container d-flex mx-auto ">
                            <button type="button" class="btn btn-outline-info mr-2">View</button>
                            <button type="button" class="btn btn-outline-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SavedList
