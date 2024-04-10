import React from 'react'
import { MainLayout } from '../Layouts/MainLayout'
import{Grid}from '@mui/material'
import { useDispatch, useSelector } from "react-redux";


export const Profile = () => {
    const {name} = useSelector((state)=>state.auth);
  
    return (
    <MainLayout>
        
        <Grid>
            <h1>Bienvenido {name}</h1>
        </Grid>
    </MainLayout>
  )
}
