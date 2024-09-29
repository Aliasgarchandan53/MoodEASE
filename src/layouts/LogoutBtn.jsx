import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from "../features/authentication/authSlice"
import authService from "../appwrite/auth"
import Button from './Button'
import {useNavigate} from 'react-router-dom'
export default function LogoutBtn() {

    const dispatch = useDispatch();
    const navigate=useNavigate();
    const logoutHandler=()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout());
            navigate('/');
        })
        .catch((error)=>console.log("Logout error : ",error));
    }
  return (
    <Button title="Logout" onClick={logoutHandler} />
  )
}
