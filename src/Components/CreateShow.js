import React, { useState } from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { ConstructionOutlined } from '@mui/icons-material';
function CreateShow() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            moviename: "",
            datetime: "",
            movietime: 0,
            seats: 0

        }, onSubmit: async (values) => {
            const showName = {
                moviename: values.moviename,
                datetime: values.datetime,
                endtime: values.datetime,
                movietime: values.movietime,
                seats: values.seats
            }




            let datedata = new Date(showName.datetime.$d)
            let date = new Date()
            let currentDate = new Date()

            /////////////////for Current date////////////////////////
            currentDate.setHours(date.getHours())
            currentDate.setMinutes(date.getMinutes())
            currentDate.setSeconds(0)
            currentDate.setDate(date.getDate())
            currentDate.setMonth(date.getMonth())
            currentDate.setYear(date.getFullYear())


            ////geting date/////////////////////////////

            let gettingDate = new Date()

            gettingDate.setHours(datedata.getHours())
            gettingDate.setMinutes(datedata.getMinutes())
            gettingDate.setSeconds(0)
            gettingDate.setDate(datedata.getDate())
            gettingDate.setMonth(datedata.getMonth())
            gettingDate.setYear(datedata.getFullYear())

            ////end movie gettting data//////////
            let movieEndDateandTime = new Date();
            movieEndDateandTime.setHours(datedata.getHours() + parseInt(showName.movietime))
            movieEndDateandTime.setMinutes(datedata.getMinutes())
            movieEndDateandTime.setSeconds(0)
            movieEndDateandTime.setDate(datedata.getDate())
            movieEndDateandTime.setMonth(datedata.getMonth())
            movieEndDateandTime.setYear(datedata.getFullYear())
            console.log(movieEndDateandTime)


            console.log(currentDate)
            console.log(gettingDate)
            if (currentDate >= gettingDate) {
                console.log("please select future date and time")
            } else {
                console.log("fail")
            }
            // let arr=[]
            // for(let i=65;i<75;i++){

            //     let s = String.fromCharCode(i)
            // for(let j=1;j<=10;j++){
            //     arr.push({
            //         seat_no: s+j,
            //         booked:false,
            //         occupied:false
            //     })
            // }    
            // }


            let finalShowData = {
                moviename: showName.moviename,
                currentDate: currentDate,
                gettingDate: gettingDate,
                movieEndDateandTime: movieEndDateandTime,
                seats: showName.seats
            }


            let data = await fetch("http://localhost:4000/createshows/:id", {
                method: 'PUT',
                body: JSON.stringify(finalShowData),
                headers: { "Content-type": "application/json" }
            })

            const result = await data.json()
            console.log(result)

            if (result.message == "show created Successfully") {
                alert("Show Created Successfully wait till 3 seconds")
                setTimeout(() => {
                    navigate(`/shows/${result.theatername}`)
                }, 3000);
            } else {
                alert("Already a show was created in that timing please try another time")
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
            <div style={{ textAlign: "center" }}>
                <h1 style={{ textAlign: "center", marginTop: "15px" }}>Create Theater</h1>
            </div>
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "flex-end" }}>
                <form style={{ padding: "40px", borderRadius: "7px", boxShadow: "2px 2px 20px black" }} onSubmit={formik.handleSubmit}>
                    <TextField style={{ margin: "15px", width: "300px" }} id="standard-basic"
                        name="moviename" label="Enter a Movie Name" onChange={formik.handleChange}
                        value={formik.values.moviename} variant="standard" />
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

let date = new Date();

date.setDate(24)
date.setMonth(12)
date.setYear(2020)
date.setHours(23)
date.setMinutes(40)
date.setSeconds(0)

let date2 = new Date()

date2.setHours(date2.getHours() + 3)
console.log(date2)
if (date2 > date) {
    console.log("works")
} else {
    console.log("not works")
} console.log(date, date2)




export default CreateShow