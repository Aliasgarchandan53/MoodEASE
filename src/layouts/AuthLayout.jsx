//a mechanism to protect routes/pages based on authority
import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function AuthLayout({children,authentication=true}) {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state)=>state.auth.status)

    useEffect(() => {

        //rewrite this status display to make it easier

        if(authentication && authStatus!==authentication )
            navigate("/home")
        else if(!authentication && authStatus!==authentication ) 
            navigate("/dashboard")
        setLoader(false)

    }, [authStatus,navigate,authentication]);
  return loader?<h1>Loading...</h1>:<>{children}</>
}
