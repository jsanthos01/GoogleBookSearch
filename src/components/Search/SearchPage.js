import React from 'react';
import Header from './Header';
import Form from './Form';
import ShowResults from './ShowResults';

function SearchPage() {
    return (
        <div>
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
                    <div class="card-body">
                        <div class="row">
                            <h3 class="col-11"><i class="fas fa-search-plus"></i>  Search Results </h3>
                        </div>
                        <hr/>
                        <ShowResults />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
