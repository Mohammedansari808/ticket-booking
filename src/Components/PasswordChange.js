import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function PasswordChange() {
    const navigate = useNavigate()
    const { username } = useParams()
    const formik = useFormik({

        initialValues: {
            newpassword: "",

        }, onSubmit: async (values) => {
            const newPass = {
                newpassword: values.newpassword,

            }
            const token = localStorage.getItem("token")
            let data = await fetch(`http://localhost:4000/password-change/${username}`, {
                method: 'PUT',
                body: JSON.stringify(newPass),
                headers: {
                    "re-auth-token": token,
                    "Content-type": "application/json"
                }
            })
            let result = await data.json()
            console.log(result)
            if (result.message == "success") {
                localStorage.removeItem("token")
                alert("password successfully changed")
                navigate("/login")
            }

        }
    })
    return (
        <div >
            <h2>New Password</h2>
            <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "flex-end" }}>
                <form style={{ padding: "40px", width: "400px", borderRadius: "7px", boxShadow: "2px 2px 20px black" }} onSubmit={formik.handleSubmit}>
                    <TextField style={{ margin: "15px", width: "300px" }} id="standard-basic"
                        name="newpassword" label="Enter new password" onChange={formik.handleChange}
                        value={formik.values.newpassword} variant="standard" />
                    <br />
                    <Button style={{ marginTop: "8px" }} type="submit" color="primary" variant="contained">submit</Button>
                </form>
            </div>

        </div>
    )
}

export default PasswordChange