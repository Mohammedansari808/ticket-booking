import { blue, orange } from '@mui/material/colors'
import React, { useState, useEffect } from 'react'
import "../styles/seats.css"
import Button from '@mui/material/Button';
import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import { useParams } from 'react-router-dom';

function Seats() {

    let [selected, setSelected] = useState(false)
    const [shows, setShows] = useState([])
    const { id } = useParams()
    console.log(id)
    let input = id.split("-")
    let num = +input[1]
    let theatername = input[0]
    let arr2 = []
    let arr = []



    const foo = () => {
        fetch(`http://localhost:4000/bookseat/${id}`
            , { method: "GET" }
        )
            .then(data => data.json())
            .then(res => res ? setShows(res.shows) : null)

    }

    useEffect(() => foo(), [])




    return (
        <div className="small-box">
            <div className="booking box" style={{ display: "flex", padding: "10px", marginTop: "50px", justifyContent: "center" }}>
                <div className="booking-section">
                    <form>
                        <li>

                            <ol className='rows'>
                                {

                                    shows[num] ?
                                        shows[num].allseats.map((res, index) => {

                                            return (

                                                <> <li className="each-seat" >
                                                    <input disabled={res.booked} type="checkbox" id={`seat-${res.seat_no}`} value={res.booked ? { booked: res.booked, }} className="seat-select" />
                                                    <label
                                                        for={`seat-${res.seat_no}`} className={res.booked ? "booked-seat" : "seat"}>{res.seat_no}</label>
                                                </li>
                                                    {index + 1 % 10 == 0 ? <br /> : null}</>
                                            )


                                        })
                                        : null




                                }
                            </ol>
                        </li>
                    </form>
                    {/* <form>
                        <li>
                            <ol className='rows'>
                                <li className="each-seat" >
                                    <input type="checkbox" id={"seat-A1"} className="seat-select" />
                                    <label for="seat-A1" className="seat">A1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-A2"} className="seat-select" />
                                    <label for="seat-A2" className="seat">A2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-A3"} className="seat-select" />
                                    <label for="seat-A3" className="seat">A3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-A4"} className="seat-select" />
                                    <label for="seat-A4" className="seat">A4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-A5"} className="seat-select" />
                                    <label for="seat-A5" className="seat">A5</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-A6"} className="seat-select" />
                                    <label for="seat-A6" className="seat">A6</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-A7"} className="seat-select" />
                                    <label for="seat-A7" className="seat">A7</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-A8"} className="seat-select" />
                                    <label for="seat-A8" className="seat">A8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-A9"} className="seat-select" />
                                    <label for="seat-A9" className="seat">A9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-A10"} className="seat-select" />
                                    <label for="seat-A10" className="seat">A10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-B1"} className="seat-select" />
                                    <label for="seat-B1" className="seat">B1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-B2"} className="seat-select" />
                                    <label for="seat-B2" className="seat">B2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-B3"} className="seat-select" />
                                    <label for="seat-B3" className="seat">B3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-B4"} className="seat-select" />
                                    <label for="seat-B4" className="seat">B4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-B5"} className="seat-select" />
                                    <label for="seat-B5" className="seat">B5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-B6"} className="seat-select" />
                                    <label for="seat-B6" className="seat">B6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-B7"} className="seat-select" />
                                    <label for="seat-B7" className="seat">B7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-B8"} className="seat-select" />
                                    <label for="seat-B8" className="seat">B8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-B9"} className="seat-select" />
                                    <label for="seat-B9" className="seat">B9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-B10"} className="seat-select" />
                                    <label for="seat-B10" className="seat">B10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-C1"} className="seat-select" />
                                    <label for="seat-C1" className="seat">C1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-C2"} className="seat-select" />
                                    <label for="seat-C2" className="seat">C2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-C3"} className="seat-select" />
                                    <label for="seat-C3" className="seat">C3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-C4"} className="seat-select" />
                                    <label for="seat-C4" className="seat">C4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-C5"} className="seat-select" />
                                    <label for="seat-C5" className="seat">C5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-C6"} className="seat-select" />
                                    <label for="seat-C6" className="seat">C6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-C7"} className="seat-select" />
                                    <label for="seat-C7" className="seat">C7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-C8"} className="seat-select" />
                                    <label for="seat-C8" className="seat">C8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-C9"} className="seat-select" />
                                    <label for="seat-C9" className="seat">C9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-C10"} className="seat-select" />
                                    <label for="seat-C10" className="seat">C10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-D1"} className="seat-select" />
                                    <label for="seat-D1" className="seat">D1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-D2"} className="seat-select" />
                                    <label for="seat-D2" className="seat">D2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-D3"} className="seat-select" />
                                    <label for="seat-D3" className="seat">D3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-D4"} className="seat-select" />
                                    <label for="seat-D4" className="seat">D4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-D5"} className="seat-select" />
                                    <label for="seat-D5" className="seat">D5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-D6"} className="seat-select" />
                                    <label for="seat-D6" className="seat">D6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-D7"} className="seat-select" />
                                    <label for="seat-D7" className="seat">D7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-D8"} className="seat-select" />
                                    <label for="seat-D8" className="seat">D8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-D9"} className="seat-select" />
                                    <label for="seat-D9" className="seat">D9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-D10"} className="seat-select" />
                                    <label for="seat-D10" className="seat">D10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-E1"} className="seat-select" />
                                    <label for="seat-E1" className="seat">E1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-E2"} className="seat-select" />
                                    <label for="seat-E2" className="seat">E2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-E3"} className="seat-select" />
                                    <label for="seat-E3" className="seat">E3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-E4"} className="seat-select" />
                                    <label for="seat-E4" className="seat">E4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-E5"} className="seat-select" />
                                    <label for="seat-E5" className="seat">E5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-E6"} className="seat-select" />
                                    <label for="seat-E6" className="seat">E6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-E7"} className="seat-select" />
                                    <label for="seat-E7" className="seat">E7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-E8"} className="seat-select" />
                                    <label for="seat-E8" className="seat">E8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-E9"} className="seat-select" />
                                    <label for="seat-E9" className="seat">E9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-E10"} className="seat-select" />
                                    <label for="seat-E10" className="seat">E10</label>
                                </li>
                            </ol>
                            <ol className='rows'>
                                <li className="each-seat" >
                                    <input type="checkbox" id={"seat-F1"} className="seat-select" />
                                    <label for="seat-F1" className="seat">F1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-F2"} className="seat-select" />
                                    <label for="seat-F2" className="seat">F2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-F3"} className="seat-select" />
                                    <label for="seat-F3" className="seat">F3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-F4"} className="seat-select" />
                                    <label for="seat-F4" className="seat">F4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-F5"} className="seat-select" />
                                    <label for="seat-F5" className="seat">F5</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-F6"} className="seat-select" />
                                    <label for="seat-F6" className="seat">F6</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-F7"} className="seat-select" />
                                    <label for="seat-F7" className="seat">F7</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-F8"} className="seat-select" />
                                    <label for="seat-F8" className="seat">F8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-F9"} className="seat-select" />
                                    <label for="seat-F9" className="seat">F9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-F10"} className="seat-select" />
                                    <label for="seat-F10" className="seat">F10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-G1"} className="seat-select" />
                                    <label for="seat-G1" className="seat">G1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-G2"} className="seat-select" />
                                    <label for="seat-G2" className="seat">G2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-G3"} className="seat-select" />
                                    <label for="seat-G3" className="seat">G3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-G4"} className="seat-select" />
                                    <label for="seat-G4" className="seat">G4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-G5"} className="seat-select" />
                                    <label for="seat-G5" className="seat">G5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-G6"} className="seat-select" />
                                    <label for="seat-G6" className="seat">G6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-G7"} className="seat-select" />
                                    <label for="seat-G7" className="seat">G7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-G8"} className="seat-select" />
                                    <label for="seat-G8" className="seat">G8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-G9"} className="seat-select" />
                                    <label for="seat-G9" className="seat">G9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-G10"} className="seat-select" />
                                    <label for="seat-G10" className="seat">G10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-H1"} className="seat-select" />
                                    <label for="seat-H1" className="seat">H1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-H2"} className="seat-select" />
                                    <label for="seat-H2" className="seat">H2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-H3"} className="seat-select" />
                                    <label for="seat-H3" className="seat">H3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-H4"} className="seat-select" />
                                    <label for="seat-H4" className="seat">H4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-H5"} className="seat-select" />
                                    <label for="seat-H5" className="seat">H5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-H6"} className="seat-select" />
                                    <label for="seat-H6" className="seat">H6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-H7"} className="seat-select" />
                                    <label for="seat-H7" className="seat">H7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-H8"} className="seat-select" />
                                    <label for="seat-H8" className="seat">H8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-H9"} className="seat-select" />
                                    <label for="seat-H9" className="seat">H9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-H10"} className="seat-select" />
                                    <label for="seat-H10" className="seat">H10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-I1"} className="seat-select" />
                                    <label for="seat-I1" className="seat">I1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-I2"} className="seat-select" />
                                    <label for="seat-I2" className="seat">I2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-I3"} className="seat-select" />
                                    <label for="seat-I3" className="seat">I3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-I4"} className="seat-select" />
                                    <label for="seat-I4" className="seat">I4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-I5"} className="seat-select" />
                                    <label for="seat-I5" className="seat">I5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-I6"} className="seat-select" />
                                    <label for="seat-I6" className="seat">I6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-I7"} className="seat-select" />
                                    <label for="seat-I7" className="seat">I7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-I8"} className="seat-select" />
                                    <label for="seat-I8" className="seat">I8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-I9"} className="seat-select" />
                                    <label for="seat-I9" className="seat">I9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-I10"} className="seat-select" />
                                    <label for="seat-I10" className="seat">I10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-J1"} className="seat-select" />
                                    <label for="seat-J1" className="seat">J1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-J2"} className="seat-select" />
                                    <label for="seat-J2" className="seat">J2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-J3"} className="seat-select" />
                                    <label for="seat-J3" className="seat">J3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-J4"} className="seat-select" />
                                    <label for="seat-J4" className="seat">J4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-J5"} className="seat-select" />
                                    <label for="seat-J5" className="seat">J5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-J6"} className="seat-select" />
                                    <label for="seat-J6" className="seat">J6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-J7"} className="seat-select" />
                                    <label for="seat-J7" className="seat">J7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-J8"} className="seat-select" />
                                    <label for="seat-J8" className="seat">J8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-J9"} className="seat-select" />
                                    <label for="seat-J9" className="seat">J9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" id={"seat-J10"} className="seat-select" />
                                    <label for="seat-J10" className="seat">J10</label>
                                </li>
                            </ol>

                        </li>
                    </form> */}
                </div>


            </div>

            <div style={{ display: "flex", alignItems: "center", alignContent: "center", flexDirection: "column" }}>
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
            </div>

        </div>
    )

}

export default Seats