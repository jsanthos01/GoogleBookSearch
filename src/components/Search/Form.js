import React from 'react'

function Form() {
    return (
        <form>
            <div className="form-group">
                <label>
                <strong>Book</strong>
                </label>
                <input className="form-control" />
            </div>
            <div className="pull-right">
                <button type="submit" className="btn btn-lg btn-danger float-right">
                Search
                </button>
            </div>
      </form>
    )
}

export default Form
