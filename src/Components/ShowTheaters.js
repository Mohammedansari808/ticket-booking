import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';



function ShowTheaters() {
    const navigate = useNavigate()
    const data = [
        {
            theatername: "rohini"

            , shows: [
                {
                    moviename: "jik", showtime: "10:30 -  12:30"
                }
            ]
        },


    ]
    return (
        <div>
            <div>ShowTheaters</div>
            {
                data.map((res) => {
                    return (
                        <>
                            <div>{res.theatername}</div>
                            <Button onClick={() => navigate(`/createshows/${res.theatername}`)} variant="contained">Create show</Button>
                            <Button onClick={() => navigate(`/shows/${res.theatername}`)} variant="contained">shows</Button>
                        </>

                    )
                })
            }
        </div>

    )
}

export default ShowTheaters