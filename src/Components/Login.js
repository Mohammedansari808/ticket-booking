import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Login() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: "ansari",
            password: "ansari123"
        }, onSubmit: async (values) => {
            const loginInfo = {
                username: values.username,
                password: values.password
            }
            let data = await fetch("http://localhost:4000/login", {
                method: 'POST',
                body: JSON.stringify(loginInfo),
                headers: { "Content-type": "application/json" }
            })
            let result = await data.json()
            console.log(result)
            if (result.message == "successful login") {
                localStorage.setItem("token", result.token)
                localStorage.setItem('role_id', result.role_id)
                localStorage.setItem("username", loginInfo.username)
                navigate("/")
            } else {
                navigate("/login")
            }
        }
    })
    return (
        <div >
            <h2>Login</h2>
            <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "flex-end" }}>
                <form style={{ padding: "40px", width: "400px", borderRadius: "7px", boxShadow: "2px 2px 20px black" }} onSubmit={formik.handleSubmit}>
                    <TextField style={{ margin: "15px", width: "300px" }} id="standard-basic"
                        name="username" label="Username" onChange={formik.handleChange}
                        value={formik.values.username} variant="standard" />
                    <TextField style={{ margin: "15px", width: "300px" }} id="standard-basic"
                        name="password" label="Password" onChange={formik.handleChange}
                        value={formik.values.password} variant="standard" /><br />
                    <Button style={{ marginTop: "8px" }} type="submit" color="success" variant="contained">login</Button>
                </form>
            </div>

        </div>
    )
}

export default Login