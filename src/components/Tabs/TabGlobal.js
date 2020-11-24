import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from '../DataDisplay/Chart'
import { Paper } from '@material-ui/core'
import {DateConvertor} from '../../Utility/Utility'
import CardDisplay from '../DataDisplay/Card'
import './TabGlobal.css'

const TabGlobal = () => {
    const [globalData, setGlobalData] = useState({})
    const [countyList, setCountryList] = useState([])
    const [selectedCounty , setSelectedCountry] = useState('IND')
    const [selecetdCountryData,setSelectedCountryData] = useState(null)

    useEffect( () => {
        const getGlobalData = async () => {
            const globaldata = await fetchGlobalData();
            setGlobalData(globaldata)
        }
        getGlobalData();
    }, [])

    useEffect( () => {
        const getCountryData = async () => {
            const countrydata = await fetchCountryList();
            setCountryList(countrydata)
        }
        getCountryData();
    }, [])
    
    const fetchGlobalData = async () => {
        const source = axios.CancelToken.source();
        try {
        
            const data = await axios.get('https://covid19.mathdro.id/api')
            const { confirmed, recovered, deaths ,lastUpdate} = data.data
            return {
                confirm: confirmed.value,
                recovered: recovered.value,
                death: deaths.value,
                lastUpdate : lastUpdate
            }
            
        } catch (error) {
            if (axios.isCancel(error)) {
              } else {
                throw error;
              }
        }
        return () => {
            source.cancel();
          };
    }
    const fetchCountryList = async () => {
        const source = axios.CancelToken.source();
        try {
            const data = await axios.get('https://covid19.mathdro.id/api/countries')
            return  data.data.countries
            
        } catch (error) {
            if (axios.isCancel(error)) {
              } else {
                throw error;
              }
        }
        return () => {
            source.cancel();
          };
    }

    const onContryChangeHandler =  async (e)=>{
            setSelectedCountry(e.target.value);
    }

    useEffect(()=>{
        const getSelectedCountryData =  async () =>{
            setSelectedCountryData(await fetchDataForSelectedCountry())
        }
        getSelectedCountryData()
    },[selectedCounty])

    const fetchDataForSelectedCountry = async ()=>{
        try {
            const data =  await axios.get('https://covid19.mathdro.id/api/countries/' + selectedCounty)
            const { confirmed, recovered, deaths ,lastUpdate} = data.data
            return {
                confirm: confirmed.value,
                recovered: recovered.value,
                death: deaths.value,
                lastUpdate : lastUpdate
            }
        } catch (error) {
            console.log(error)
        }
    }
   
    return(
        <div className="global-container">
             {globalData.lastUpdate !== undefined?
                <div className="last-update">Last updated - {DateConvertor(globalData.lastUpdate)}</div> :
                null}
            <CardDisplay data={globalData}></CardDisplay>
            <Paper className="chart-container" elevation={2}>
            {countyList !==undefined?
            <div className="country-select">
                <label htmlFor="country">Select Country </label>
               <select className="select" name="country" value={selectedCounty} onChange={onContryChangeHandler}>
               {countyList.map((country,index) => {
                   return <option key={index} value={country.iso3}>{country.name}</option>;
               })}
           </select>
           </div>:
           null}
           {selecetdCountryData ? 
           <Chart className="chart-container" data={selecetdCountryData} ></Chart>:
           null}
            </Paper>
        </div>
    )
}
export default TabGlobal

