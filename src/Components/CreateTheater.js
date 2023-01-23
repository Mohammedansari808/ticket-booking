import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
function CreateTheater() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            theatername: ""
        }, onSubmit: async (values) => {
            const theaterName = {
                theatername: values.theatername
            }
            let data = await fetch("http://localhost:4000/createtheater", {
                method: 'POST',
                body: JSON.stringify(theaterName),
                headers: { "Content-type": "application/json" }
            })

            const result = await data.json()
            console.log(result)

            if (result.message == "Theater created Successfully") {
                alert("Theater Created Successfully wait till 3 seconds")
                setTimeout(() => {
                    navigate(`/shows/${result.theatername}`)
                }, 3000);
            } else {
                alert("theatername already created")
            }



        }
    })
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ textAlign: "center", marginTop: "15px" }}>Create Theater</h1>
            </div>
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "flex-end" }}>
                <form onSubmit={formik.handleSubmit}>
                    <TextField style={{ marginRight: "15px" }} id="standard-basic" name="theatername" label="Enter a Theater Name" onChange={formik.handleChange} value={formik.values.theatername} variant="standard" />
                    <Button style={{ marginTop: "8px" }} type="submit" color="success" variant="contained">Create Theater</Button>
                </form>
            </div>
        </>

    )
}

export default CreateTheater