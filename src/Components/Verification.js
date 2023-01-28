import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { fullLink } from './link';
function Verification() {
    const { username, id } = useParams()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            otp: "",
        }, onSubmit: async (values) => {
            const otp = { otp: values.otp }

            let data = await fetch(`${fullLink}/verification-link/${username}/${id}`, {
                method: 'POST',
                body: JSON.stringify(otp),
                headers: {
                    "Content-type": "application/json",

                }
            })

            const result = await data.json()
            if (result.message == "otp success") {

                alert("OTP Confirmed")
                localStorage.setItem("token", result.token)
                navigate(`/password-change/${result.username}/`)
            } else {
                alert("OTP confirmation failed")
                navigate("/login")
            }



        }
    })
    return (
        <>

            <div style={{ textAlign: "center" }}>
                <h1 style={{ textAlign: "center", marginTop: "15px" }}>Verification Link</h1>
            </div>
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "flex-end" }}>
                <form onSubmit={formik.handleSubmit}>

                    <TextField style={{ marginRight: "15px" }} id="standard-basic" name="otp"
                        label="Enter otp" onChange={formik.handleChange} value={formik.values.otp} variant="standard" />
                    <Button style={{ marginTop: "8px" }} type="submit" color="success" variant="contained">Verify</Button>
                </form>
            </div>
        </>

    )
}

export default Verification