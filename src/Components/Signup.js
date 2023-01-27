import { useFormik } from 'formik'
import React from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            email: ""
        }, onSubmit: async (values) => {
            const signInfo = {
                username: values.username,
                password: values.password,
                email: values.email
            }
            let data = await fetch("http://localhost:4000/signup", {
                method: 'POST',
                body: JSON.stringify(signInfo),
                headers: { "Content-type": "application/json" }

            })
            let result = await data.json()
            console.log("hello")
            if (result.message == "sign success") {
                alert("signin successful")
                navigate("/login")
            } else {
                alert("please try another username")
            }
        }
    })
    return (
        <div >
            <h2>Signup</h2>
            <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "flex-end" }}>


                <form style={{ padding: "40px", width: "400px", borderRadius: "7px", boxShadow: "2px 2px 20px black" }} onSubmit={formik.handleSubmit}>
                    <TextField style={{ margin: "15px", width: "300px" }} id="standard-basic"
                        name="username" label="Username" onChange={formik.handleChange}
                        value={formik.values.username} variant="standard" />
                    <TextField style={{ margin: "15px", width: "300px" }} id="standard-basic"
                        name="password" label="Password" onChange={formik.handleChange}
                        value={formik.values.password} variant="standard" />
                    <TextField style={{ margin: "15px", width: "300px" }} id="standard-basic"
                        name="email" label="Email" onChange={formik.handleChange}
                        value={formik.values.email} variant="standard" />
                    <Button style={{ marginTop: "8px" }} type="submit" color="primary" variant="contained">signup</Button>

                </form>
            </div>
        </div>
    )
}

export default Signup