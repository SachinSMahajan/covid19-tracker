import React, { useEffect, useState } from 'react'
import CardDisplay from '../DataDisplay/Card'
import axios from 'axios'
import './TabGlobal.css'

function TabGlobal (props){

    const [globalData, setGlobalData] = useState({})
    
    useEffect( () => {
        
        const getGlobalData = async () => {
            const globaldata = await fetchGlobalData();
            setGlobalData(globaldata)
        }
        getGlobalData();
    }, [])
    const fetchGlobalData = async () => {
        const source = axios.CancelToken.source();
        try {
        
        const { data: { data } } = await axios.get('/global',{cancelToken:source.token})
        const { confirmed_cases, active_cases, recovered_cases, death_cases, active_rate, recovered_rate
            , death_rate, new_cases, new_deaths, serious_cases } = data

        return {
            confirm: confirmed_cases,
            active: active_cases,
            rateActive: active_rate,
            recovered: recovered_cases,
            rateRecover: recovered_rate,
            death: death_cases,
            rateDeath: death_rate,
            newDeath: new_deaths,
            new: new_cases,
            serious: serious_cases
        }
            
        } catch (error) {
            if (axios.isCancel(error)) {
                //cancelled
              } else {
                throw error;
              }
        }
        return () => {
            source.cancel();
          };
        
    }

    return(
        <div className="global-container">
            <CardDisplay data={globalData}></CardDisplay>
        </div>
    )
}
export default TabGlobal