/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/> {/*Ej: si estoy en /contacto va a mostrar <Contact/> */}
            <Footer/>
        </div>
    )
}

export default Layout