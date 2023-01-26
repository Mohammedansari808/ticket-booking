import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Logout from './Logout';


function ShowTheaters() {
    const navigate = useNavigate()
    const role_id = localStorage.getItem('role_id')

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
            <Logout />
            <div style={{ textAlign: "center" }}><h2>Theaters</h2></div>
            {
                data.map((res) => {
                    return (
                        <div style={{ display: "flex", padding: "30px", margin: "15px", borderRadius: "7px", boxShadow: "2px 2px 20px lightgrey", flexDirection: "column", alignItems: "center" }} >
                            <h4 style={{}}>{res.theatername}</h4>
                            {role_id == 1 ? (<Button onClick={() => navigate(`/createshows/${res.theatername}`)} variant="contained">Create show</Button>
                            ) : null}
                            <Button onClick={() => navigate(`/shows/${res.theatername}`)} variant="contained">shows</Button>
                        </div>

                    )
                })
            }
        </div>

    )
}

export default ShowTheaters