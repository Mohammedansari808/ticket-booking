import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom'
import Seats from './Seats';
import "../styles/shows.css";
import Logout from './Logout';
import { fullLink } from './link';
function Shows() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [shows, setShows] = useState([])
    const role_id = localStorage.getItem("role_id")

    const foo = () => {
        fetch(`${fullLink}/shows/${id}`
            , {
                method: "GET",
                headers: { "x-auth-token": localStorage.getItem('token') }
            }
        )
            .then(data => data.json())
            .then(res => setShows(res.shows))

    }
    const delshows = (id, mid) => {
        alert("please wait for 5 seconds");
        const data = fetch(`${fullLink}/delshows/${id}-${mid}`, {
            method: "PUT"
        })
            .then((data => data.json()))
            .then(res => alert(res.message))
    }
    useEffect(() => foo(), [])
    return (
        <div>
            <Logout />
            <h1 style={{ textAlign: "center" }} >
                Shows
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap" }} >
                {
                    shows.map((res, index) => {
                        return (
                            <div className="movie-box" key={index} style={{ width: "300px", display: "flex", padding: "30px", margin: "15px", borderRadius: "7px", boxShadow: "2px 2px 20px lightgrey", flexDirection: "column", alignItems: "center" }}>
                                <img className='movie-image' src={res.movieimage} alt={res.moviename} />
                                <h2 >{res.moviename}</h2>
                                <Button onClick={() => navigate(`/bookseat/${id}-${index}`)} variant="contained">seats</Button>
                                {role_id == 1 ? (<Button style={{ margin: "20px" }} color="error" onClick={() => delshows(id, res._id)} variant="contained">Delete Show</Button>
                                ) : null}


                            </div>

                        )
                    })
                }</div>
        </div>
    )
}

export default Shows