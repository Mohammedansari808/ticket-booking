import { blue, orange } from '@mui/material/colors'
import React, { useState, useEffect } from 'react'
import "../styles/seats.css"
import Button from '@mui/material/Button';
import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import Logout from './Logout';
import BookSeats from "./BookSeats"
function Seats() {
    const role_id = localStorage.getItem("role_id")
    const [shows, setShows] = useState([])
    const [movieId, setMovieId] = useState("")
    const [bookingDatas, setBookingDatas] = useState([])
    const { id } = useParams()
    const username = localStorage.getItem("username")
    console.log(id)
    let input = id.split("-")
    let num = +input[1]
    let theatername = input[0]
    let arr2 = []
    let arr = []



    const foo = () => {
        fetch(`http://localhost:4000/bookseat/${id}`
            , {
                method: "GET",
                headers: { "x-auth-token": localStorage.getItem('token') }
            }
        )
            .then(data => data.json())
            .then(res => {
                setShows(res.shows);

                setMovieId(res.shows[num]._id)
            })

    }
    console.log(movieId)
    useEffect(() => foo(), [])


    function handleChange(e) {
        const value = e.target.value
        const checked = e.target.checked


        if (checked) {
            setBookingDatas([...bookingDatas, value])
        } else {
            const updatedItems = bookingDatas.filter(ele => (ele != bookingDatas[bookingDatas.length - 1]))
            setBookingDatas(updatedItems)

        }

        console.log(value, checked)
        console.log(bookingDatas)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const data = await fetch(`http://localhost:4000/userseatbooking/${theatername}/${username}/${movieId}`, {
            method: "PUT",
            body: JSON.stringify(bookingDatas),
            headers: { "Content-type": "application/json" }
        })
        const result = await data.json()




        console.log('hello')


    }

    return (

        <div className="small-box">
            <Logout />
            {/* {role_id == 1 ? ( */}
            <div>
                <div className="booking box" style={{ display: "flex", padding: "10px", marginTop: "50px", justifyContent: "center" }}>
                    <div className="booking-section">
                        <form onSubmit={handleSubmit}>
                            <li>

                                <ol className='rows'>
                                    {

                                        shows[num] ?
                                            shows[num].allseats.map((res, index) => {

                                                return (

                                                    <> <li className="each-seat" >
                                                        <input disabled={res.booked} type="checkbox" id={`seat-${res.seat_no}`} onChange={handleChange} value={res._id} className="seat-select" />
                                                        <label
                                                            for={`seat-${res.seat_no}`} className={res.booked ? "booked-seat" : "seat"}>{res.seat_no}</label>
                                                    </li>
                                                        {index + 1 % 10 == 0 ? <br /> : null}</>
                                                )


                                            })
                                            : null




                                    }
                                    <button type="submit">submit</button>
                                </ol>
                            </li>
                        </form>

                    </div>


                </div>

                (<div style={{ display: "flex", alignItems: "center", alignContent: "center", flexDirection: "column" }}>
                    <h2>Booked Users</h2>
                    {

                        shows[num] ?
                            shows[num].allseats.map((res) => {
                                let username = res.username;
                                let booked = res.booked
                                return (
                                    <div>
                                        <div style={{ display: "flex", justifyContent: "space-between", width: "300px" }} >
                                            {res.booked ? `${res.seat_no}. ${res.username}` : `${res.seat_no}. unOccupied`}
                                            <span><Button color="error" style={{ marginLeft: "15px" }} onClick={() => { arr2.push({ username, booked }); }} variant="contained">payment details</Button></span>
                                        </div><br></br>
                                    </div>

                                )

                            }) : null
                    }
                </div>)

            </div>
            {/* ) : <BookSeats />} */}



        </div>
    )

}

export default Seats