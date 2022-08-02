import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div style={{ margin: "auto", width: "250px" }} >
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/register">Register</Link>
            </div>
        </div>

    )
}

export default Homepage