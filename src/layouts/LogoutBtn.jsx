import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from "../features/authentication/authSlice"
import authService from "../appwrite/auth"
import Button from './Button'
export default function LogoutBtn() {

    const dispatch = useDispatch();
    const logoutHandler=()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout());
        })
        .catch((error)=>console.log("Logout error : ",error));
    }
  return (
    <Button title="Logout" onClick={logoutHandler} />
  )
}
