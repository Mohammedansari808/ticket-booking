import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom'
import Seats from './Seats';

function Shows() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [shows, setShows] = useState([])

    const foo = () => {
        fetch(`http://localhost:4000/shows/${id}`
            , { method: "GET" }
        )
            .then(data => data.json())
            .then(res => setShows(res.shows))

    }

    useEffect(() => foo(), [])
    return (
        <div>
            <h1>
                Shows
            </h1>
            {
                shows.map((res, index) => {
                    return (
                        <>
                            <h2>{res.moviename}</h2>
                            <Button onClick={() => navigate(`/bookseat/${id}-${index}`)} variant="contained">seats</Button>

                        </>

                    )
                })
            }
        </div>
    )
}

export default Shows