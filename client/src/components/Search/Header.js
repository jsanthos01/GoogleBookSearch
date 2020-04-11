import React from 'react'

function Header() {
    const headerStyle = {
        backgroundStyle: {
            height: "70vh",
            backgroundImage: 'url("https://12ax7web.s3.amazonaws.com/accounts/1/products/imported/reading-is-magical-teeturtle-teeturtle-1000x1000.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        textStyle:{
            fontWeight:"bold",
            fontFamily: "Sen, sans-serif",
            marginTop: "30vh",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            textAlign: "center",
            width: "60%"
        }
        
    }
    return (
        <div class="jumbotron jumbotron-fluid" style={headerStyle.backgroundStyle} >
            <div class="container-fluid" style={headerStyle.textStyle}>
                <h1 class="display-4">BookFuzz</h1>
                <p class="lead">Search the book of your choice and save the item for future reference.</p>
            </div>
        </div>
    )
}

export default Header
