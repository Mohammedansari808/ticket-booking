import React, { useState } from 'react'
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import Logout from './Logout';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { ConstructionOutlined } from '@mui/icons-material';
import moment from 'moment/moment.js'
import { useContext } from 'react';
import { fullLink } from './link';

function CreateShow() {
    const { id } = useParams()
    const navigate = useNavigate()
    let [count, setCount] = useState(0)

    const formik = useFormik({
        initialValues: {
            moviename: "",
            datetime: "",
            movietime: 0,
            movieimage: "",
            seats: 0

        }, onSubmit: async (values) => {
            const showName = {
                moviename: values.moviename,
                datetime: values.datetime,
                movieimage: values.movieimage,
                endtime: values.datetime,
                movietime: values.movietime,
                seats: values.seats
            }




            let datedata = new Date(showName.datetime.$d)
            let dd = showName.datetime.$d
            let date = new Date()
            let currentDate = new Date()

            /////////////////for Current date////////////////////////
            currentDate.setHours(date.getHours())
            currentDate.setMinutes(date.getMinutes())
            currentDate.setSeconds(0)
            currentDate.setMilliseconds(0)
            currentDate.setDate(date.getDate())
            currentDate.setMonth(date.getMonth())
            currentDate.setYear(date.getFullYear())


            ////geting date/////////////////////////////

            let gettingDate = new Date()

            gettingDate.setHours(datedata.getHours())
            gettingDate.setMinutes(datedata.getMinutes())
            gettingDate.setSeconds(0)
            gettingDate.setMilliseconds(0)
            gettingDate.setDate(datedata.getDate())
            gettingDate.setMonth(datedata.getMonth())
            gettingDate.setYear(datedata.getFullYear())
            console.log(gettingDate)
            ////end movie gettting data//////////
            let movieEndDateandTime = new Date();
            movieEndDateandTime.setHours(datedata.getHours() + parseInt(showName.movietime))
            movieEndDateandTime.setMinutes(datedata.getMinutes())
            movieEndDateandTime.setSeconds(0)
            movieEndDateandTime.setMilliseconds(0)

            movieEndDateandTime.setDate(datedata.getDate())
            movieEndDateandTime.setMonth(datedata.getMonth())
            movieEndDateandTime.setYear(datedata.getFullYear())
            console.log(movieEndDateandTime)

            let finalShowData = {
                moviename: showName.moviename,
                movieimage: showName.movieimage,
                currentDates: currentDate,
                gettingDates: gettingDate,
                movieEndDateandTime: movieEndDateandTime,
                seats: showName.seats,


            }

            console.log(currentDate)
            if (currentDate >= gettingDate) {
                console.log("please select future date and time")
            } else {
                let compareData = await fetch(`${fullLink}/compareshows/${id}`)

                const compareResult = await compareData.json();


                compareResult.result.shows.map(async (ele) => {
                    if (moment(ele.movieEndDateandTime).isSameOrBefore(moment(finalShowData.movieEndDateandTime))) {
                        setCount(count + 1)
                    }
                    console.log(count)
                })

                if (count == 0) {
                    let data = await fetch(`${fullLink}/createshows/${id}`, {
                        method: 'PUT',
                        body: JSON.stringify(finalShowData),
                        headers: {
                            "x-auth-token": localStorage.getItem('token'),
                            "Content-type": "application/json",
                        }
                    })
                    const result = await data.json()
                    if (result.message == "Show created successfully") {
                        setCount(0)
                        alert("Show Created Successfully wait till 3 seconds")
                        setTimeout(() => {
                            navigate(`/shows/${compareResult.result.theatername}`)
                        }, 3000);
                    }

                } else {
                    alert("Show already booked please select another time")

                }



            }

        }
    })

    const [value, setValue] = useState("")
    const handleChange = (newValue) => {

        setValue(newValue)
    }
    formik.values.datetime = value;
    return (
        <div >
            <Logout />
            <div style={{ textAlign: "center" }}>
                <h1 style={{ textAlign: "center", marginTop: "15px" }}>Create Theater</h1>
            </div>
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "flex-end" }}>
                <form style={{ padding: "40px", borderRadius: "7px", boxShadow: "2px 2px 20px black" }} onSubmit={formik.handleSubmit}>
                    <TextField style={{ margin: "15px", width: "300px" }} id="standard-basic"
                        name="moviename" label="Enter a Movie Name" onChange={formik.handleChange}
                        value={formik.values.moviename} variant="standard" />
                    <TextField style={{ margin: "15px", width: "300px" }} id="standard-basic"
                        name="movieimage" label="upload a image link" onChange={formik.handleChange}
                        value={formik.values.movieimage} variant="standard" /><br />
                    <LocalizationProvider style={{ marginBottom: "15px" }} dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                            <DateTimePicker
                                label="Date&Time picker"
                                name="datetime"
                                value={formik.values.datetime}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>
                    <TextField style={{ margin: "15px", width: "300px" }} id="standard-basic"
                        name="movietime" label="Enter duration in hours ex:3" onChange={formik.handleChange}
                        value={formik.values.movietime} variant="standard" /><br />
                    <TextField style={{ marginRight: "15px" }} id="standard-basic"
                        name="seats" label="Enter seats ex:100" onChange={formik.handleChange}
                        value={formik.values.seats} variant="standard" />
                    <Button style={{ marginTop: "8px" }} type="submit" color="success" variant="contained">Create Show</Button>
                </form>
            </div>

        </div>

    )
}






export default CreateShow