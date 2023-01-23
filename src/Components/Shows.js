import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import Seats from './Seats';
function Shows() {
    const navigate = useNavigate()

    const data = [
        {
            theatername: "rohini"

            , shows: [
                {
                    moviename: "jik", showtime: "10:30 -  12:30", seats: [{
                        seat_no: 1,
                        booked: false,
                    }]
                }, {
                    moviename: "kkk", showtime: "10:30 -  12:30", seats: [{
                        seat_no: 2,
                        booked: false,
                    }]
                }
            ]
        },


    ]
    return (
        <div>
            <h1>
                Shows
            </h1>
            {
                data.map((res) => {
                    return (
                        <>
                            <h2>{res.shows[0].moviename}</h2>
                            <Button onClick={() => navigate(`/tickets/hello`)} variant="contained">seats</Button>
                            <Seats seats={res.shows} />
                        </>

                    )
                })
            }
        </div>
    )
}

export default Shows