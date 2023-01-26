import React from 'react'
import "../styles/seats.css"

function BookSeats() {

    return (
        <div className="booking box" style={{ display: "flex", padding: "10px", marginTop: "50px", justifyContent: "center" }}>
            <div className="booking-section">
                <form onSubmit={handleSubmit} >
                    <ol className='rows' style={{

                    }}>
                        <li>
                            <ol className='rows'>
                                <li className="each-seat" >
                                    <input type="checkbox" onChange={handleChange} value="A1" id={"seat-A1"} className="seat-select" />
                                    <label for="seat-A1" className="seat">A1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-A2"} className="seat-select" />
                                    <label for="seat-A2" className="seat">A2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-A3"} className="seat-select" />
                                    <label for="seat-A3" className="seat">A3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-A4"} className="seat-select" />
                                    <label for="seat-A4" className="seat">A4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-A5"} className="seat-select" />
                                    <label for="seat-A5" className="seat">A5</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-A6"} className="seat-select" />
                                    <label for="seat-A6" className="seat">A6</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-A7"} className="seat-select" />
                                    <label for="seat-A7" className="seat">A7</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-A8"} className="seat-select" />
                                    <label for="seat-A8" className="seat">A8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-A9"} className="seat-select" />
                                    <label for="seat-A9" className="seat">A9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-A10"} className="seat-select" />
                                    <label for="seat-A10" className="seat">A10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-B1"} className="seat-select" />
                                    <label for="seat-B1" className="seat">B1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-B2"} className="seat-select" />
                                    <label for="seat-B2" className="seat">B2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-B3"} className="seat-select" />
                                    <label for="seat-B3" className="seat">B3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-B4"} className="seat-select" />
                                    <label for="seat-B4" className="seat">B4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-B5"} className="seat-select" />
                                    <label for="seat-B5" className="seat">B5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-B6"} className="seat-select" />
                                    <label for="seat-B6" className="seat">B6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-B7"} className="seat-select" />
                                    <label for="seat-B7" className="seat">B7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-B8"} className="seat-select" />
                                    <label for="seat-B8" className="seat">B8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-B9"} className="seat-select" />
                                    <label for="seat-B9" className="seat">B9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-B10"} className="seat-select" />
                                    <label for="seat-B10" className="seat">B10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-C1"} className="seat-select" />
                                    <label for="seat-C1" className="seat">C1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-C2"} className="seat-select" />
                                    <label for="seat-C2" className="seat">C2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-C3"} className="seat-select" />
                                    <label for="seat-C3" className="seat">C3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-C4"} className="seat-select" />
                                    <label for="seat-C4" className="seat">C4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-C5"} className="seat-select" />
                                    <label for="seat-C5" className="seat">C5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-C6"} className="seat-select" />
                                    <label for="seat-C6" className="seat">C6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-C7"} className="seat-select" />
                                    <label for="seat-C7" className="seat">C7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-C8"} className="seat-select" />
                                    <label for="seat-C8" className="seat">C8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-C9"} className="seat-select" />
                                    <label for="seat-C9" className="seat">C9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-C10"} className="seat-select" />
                                    <label for="seat-C10" className="seat">C10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-D1"} className="seat-select" />
                                    <label for="seat-D1" className="seat">D1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-D2"} className="seat-select" />
                                    <label for="seat-D2" className="seat">D2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-D3"} className="seat-select" />
                                    <label for="seat-D3" className="seat">D3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-D4"} className="seat-select" />
                                    <label for="seat-D4" className="seat">D4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-D5"} className="seat-select" />
                                    <label for="seat-D5" className="seat">D5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-D6"} className="seat-select" />
                                    <label for="seat-D6" className="seat">D6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-D7"} className="seat-select" />
                                    <label for="seat-D7" className="seat">D7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-D8"} className="seat-select" />
                                    <label for="seat-D8" className="seat">D8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-D9"} className="seat-select" />
                                    <label for="seat-D9" className="seat">D9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-D10"} className="seat-select" />
                                    <label for="seat-D10" className="seat">D10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-E1"} className="seat-select" />
                                    <label for="seat-E1" className="seat">E1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-E2"} className="seat-select" />
                                    <label for="seat-E2" className="seat">E2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-E3"} className="seat-select" />
                                    <label for="seat-E3" className="seat">E3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-E4"} className="seat-select" />
                                    <label for="seat-E4" className="seat">E4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-E5"} className="seat-select" />
                                    <label for="seat-E5" className="seat">E5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-E6"} className="seat-select" />
                                    <label for="seat-E6" className="seat">E6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-E7"} className="seat-select" />
                                    <label for="seat-E7" className="seat">E7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-E8"} className="seat-select" />
                                    <label for="seat-E8" className="seat">E8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-E9"} className="seat-select" />
                                    <label for="seat-E9" className="seat">E9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-E10"} className="seat-select" />
                                    <label for="seat-E10" className="seat">E10</label>
                                </li>
                            </ol>
                            <ol className='rows'>
                                <li className="each-seat" >
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-F1"} className="seat-select" />
                                    <label for="seat-F1" className="seat">F1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-F2"} className="seat-select" />
                                    <label for="seat-F2" className="seat">F2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-F3"} className="seat-select" />
                                    <label for="seat-F3" className="seat">F3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-F4"} className="seat-select" />
                                    <label for="seat-F4" className="seat">F4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-F5"} className="seat-select" />
                                    <label for="seat-F5" className="seat">F5</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-F6"} className="seat-select" />
                                    <label for="seat-F6" className="seat">F6</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-F7"} className="seat-select" />
                                    <label for="seat-F7" className="seat">F7</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-F8"} className="seat-select" />
                                    <label for="seat-F8" className="seat">F8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-F9"} className="seat-select" />
                                    <label for="seat-F9" className="seat">F9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-F10"} className="seat-select" />
                                    <label for="seat-F10" className="seat">F10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-G1"} className="seat-select" />
                                    <label for="seat-G1" className="seat">G1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-G2"} className="seat-select" />
                                    <label for="seat-G2" className="seat">G2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-G3"} className="seat-select" />
                                    <label for="seat-G3" className="seat">G3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-G4"} className="seat-select" />
                                    <label for="seat-G4" className="seat">G4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-G5"} className="seat-select" />
                                    <label for="seat-G5" className="seat">G5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-G6"} className="seat-select" />
                                    <label for="seat-G6" className="seat">G6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-G7"} className="seat-select" />
                                    <label for="seat-G7" className="seat">G7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-G8"} className="seat-select" />
                                    <label for="seat-G8" className="seat">G8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-G9"} className="seat-select" />
                                    <label for="seat-G9" className="seat">G9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-G10"} className="seat-select" />
                                    <label for="seat-G10" className="seat">G10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-H1"} className="seat-select" />
                                    <label for="seat-H1" className="seat">H1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-H2"} className="seat-select" />
                                    <label for="seat-H2" className="seat">H2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-H3"} className="seat-select" />
                                    <label for="seat-H3" className="seat">H3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-H4"} className="seat-select" />
                                    <label for="seat-H4" className="seat">H4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-H5"} className="seat-select" />
                                    <label for="seat-H5" className="seat">H5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-H6"} className="seat-select" />
                                    <label for="seat-H6" className="seat">H6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-H7"} className="seat-select" />
                                    <label for="seat-H7" className="seat">H7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-H8"} className="seat-select" />
                                    <label for="seat-H8" className="seat">H8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-H9"} className="seat-select" />
                                    <label for="seat-H9" className="seat">H9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-H10"} className="seat-select" />
                                    <label for="seat-H10" className="seat">H10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-I1"} className="seat-select" />
                                    <label for="seat-I1" className="seat">I1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-I2"} className="seat-select" />
                                    <label for="seat-I2" className="seat">I2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-I3"} className="seat-select" />
                                    <label for="seat-I3" className="seat">I3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-I4"} className="seat-select" />
                                    <label for="seat-I4" className="seat">I4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-I5"} className="seat-select" />
                                    <label for="seat-I5" className="seat">I5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-I6"} className="seat-select" />
                                    <label for="seat-I6" className="seat">I6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-I7"} className="seat-select" />
                                    <label for="seat-I7" className="seat">I7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-I8"} className="seat-select" />
                                    <label for="seat-I8" className="seat">I8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-I9"} className="seat-select" />
                                    <label for="seat-I9" className="seat">I9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-I10"} className="seat-select" />
                                    <label for="seat-I10" className="seat">I10</label>
                                </li>
                            </ol>
                            <ol className='rows'>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-J1"} className="seat-select" />
                                    <label for="seat-J1" className="seat">J1</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-J2"} className="seat-select" />
                                    <label for="seat-J2" className="seat">J2</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-J3"} className="seat-select" />
                                    <label for="seat-J3" className="seat">J3</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-J4"} className="seat-select" />
                                    <label for="seat-J4" className="seat">J4</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-J5"} className="seat-select" />
                                    <label for="seat-J5" className="seat">J5</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-J6"} className="seat-select" />
                                    <label for="seat-J6" className="seat">J6</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-J7"} className="seat-select" />
                                    <label for="seat-J7" className="seat">J7</label>
                                </li>
                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-J8"} className="seat-select" />
                                    <label for="seat-J8" className="seat">J8</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-J9"} className="seat-select" />
                                    <label for="seat-J9" className="seat">J9</label>
                                </li>

                                <li className="each-seat">
                                    <input type="checkbox" onChange={handleChange} value="" id={"seat-J10"} className="seat-select" />
                                    <label for="seat-J10" className="seat">J10</label>
                                </li>
                            </ol>

                        </li>
                    </ol>

                </form>
            </div>
        </div>
    )
}

export default BookSeats