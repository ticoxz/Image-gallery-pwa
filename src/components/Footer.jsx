import React from 'react'

function Footer() {
    return (
        <nav className="navbar navbar-dark bg-primary text-center">
            <div className="container-fluid" style={{
                textAlign: "center",
                justifyContent: 'center',
                height: "2rem"
            }}>
                <p className="navbar-brand"> Tico Miranda - &copy; {new Date().getFullYear()}</p>
             </div>
        </nav>  
    )
}

export default Footer
