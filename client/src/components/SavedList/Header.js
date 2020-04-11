import React from 'react'

function Header() {
    const headerStyle = {
        backgroundStyle: {
            height: "50vh",
            backgroundImage: 'url("https://www.booktrust.org.uk/globalassets/images/illustrations/fiona-lumbers-3-4/jpegs/fiona-lumbers-classics-16x9.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        textStyle:{
            fontWeight:"bold",
            fontFamily: "Sen, sans-serif",
            marginTop: "20vh",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            textAlign: "center",
            width: "60%"
        }
    }
    return (
        <div class="jumbotron jumbotron-fluid" style={headerStyle.backgroundStyle}>
            <div class="container" style={headerStyle.textStyle}>
                <h1 class="display-4">Your Saved List</h1>
                <p class="lead">The books listed here are the ones you saved.</p>
            </div>
        </div>
    )
}

export default Header
