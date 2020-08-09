import React,{useEffect,useState} from 'react'
import { Tab, Paper ,Tabs} from '@material-ui/core'
import axios from 'axios'

function MainTabs() {

    const [value,setValue]=useState(0)
    const [countryData,setCountryData]=useState([])
   const handleChange=(event,newValue)=>{
       setValue(newValue);

    }
    useEffect(()=>{
         axios.get('https://covid19.mathdro.id/api/countries/IND')
    },[])
    return (
        <Paper square>
            <Tabs
                value={value}
                indicatorColor='primary'
                onChange={handleChange}
                aria-label='tabs' centered
            >
                <Tab label='Global'></Tab>
                <Tab label='India'></Tab>
                <Tab label='News'></Tab>
            </Tabs>
        </Paper>
    )
}

export default MainTabs