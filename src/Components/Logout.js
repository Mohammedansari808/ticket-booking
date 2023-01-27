import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



function Logout() {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem("role_id")
        localStorage.removeItem("username")
        navigate("/login")
    }
    return (

        <div style={{ backgroundColor: "lightgrey", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h4 style={{ marginLeft: "10px", }} >Bookmyshow</h4>
            <Button style={{ margin: "10px", }} onClick={() => logout()} color="success" variant="contained">logout</Button>
        </div>

    )
}

export default Logout