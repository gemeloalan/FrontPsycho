import React from 'react'
import {Grid} from '@mui/material'
import { MainLayout } from '../Layouts/MainLayout'
import CardPlanes from './Patiens/CardPlanes'

export const Home = () => {
  return (
    <MainLayout>
        
        <Grid item xs={12} xl={12}>
            <CardPlanes />
          </Grid>
    </MainLayout>  )
}
