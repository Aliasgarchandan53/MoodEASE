import React from 'react'
import component from "./components/index.js"
import { Outlet } from 'react-router-dom'


export default function Pagelayout() {
  return (
    <>
    <component.Navbar />
    <Outlet />
    <component.Footer />
    </>
  )
}
