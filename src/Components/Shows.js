import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom'
import Seats from './Seats';
import Logout from './Logout';
function Shows() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [shows, setShows] = useState([])

    const foo = () => {
        fetch(`http://localhost:4000/shows/${id}`
            , {
                method: "GET",
                headers: { "x-auth-token": localStorage.getItem('token') }
            }
        )
            .then(data => data.json())
            .then(res => setShows(res.shows))

    }

    useEffect(() => foo(), [])
    return (
        <div>
            <Logout />
            <h1 style={{ textAlign: "center" }} >
                Shows
            </h1>
            {
                shows.map((res, index) => {
                    return (
                        <div style={{ display: "flex", padding: "30px", margin: "15px", borderRadius: "7px", boxShadow: "2px 2px 20px lightgrey", flexDirection: "column", alignItems: "center" }}>
                            <h2 >{res.moviename}</h2>
                            <Button onClick={() => navigate(`/bookseat/${id}-${index}`)} variant="contained">seats</Button>

                        </div>

                    )
                })
            }
        </div>
    )
}

export default Shows