import React from 'react'
import Header from './Header';
import SavedList from './SavedList';

function SavedPage() {
    return (
        <div>
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
        </div>
    )
}

export default SavedPage
