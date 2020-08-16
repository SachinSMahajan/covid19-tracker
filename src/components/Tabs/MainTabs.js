import React, { useEffect, useState } from 'react'
import { Tab, Paper, Tabs } from '@material-ui/core'
import axios from 'axios'
import CardDisplay from '../DataDisplay/Card'
import TabGlobal from './TabGlobal'
import './MainTabs.css'
import TabIndia from './TabIndia'
import TabNews  from './TabNews'
function MainTabs() {

    const [value, setValue] = useState(0)
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    // useEffect( () => {
    //     const getGlobalData = async () => {
    //         const globaldata = await fetchGlobalData();
    //         setGlobalData(globaldata)
    //     }
    //     getGlobalData();
    // }, [])
    // const fetchGlobalData = async () => {
    //     const { data: { data } } = await axios.get('/global')
    //     const { confirmed_cases, active_cases, recovered_cases, death_cases, active_rate, recovered_rate
    //         , death_rate, new_cases, new_deaths, serious_cases } = data

    //     return {
    //         confirm: confirmed_cases,
    //         active: active_cases,
    //         rateActive: active_rate,
    //         recovered: recovered_cases,
    //         rateRecover: recovered_rate,
    //         death: death_cases,
    //         rateDeath: death_rate,
    //         newDeath: new_deaths,
    //         new: new_cases,
    //         serious: serious_cases
    //     }
    // }
 
  
    return (
        <div className="tabs">
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
            {(() => {
                if (value === 0)
                    return (<TabGlobal value={value} index={0}></TabGlobal>)
                else if ( value  === 1)
                    return (<TabIndia value={value} index={0}></TabIndia>)
                else if ( value === 2)
                    return (<TabNews ></TabNews>)
            })()}
        </div>
    )
}

export default MainTabs