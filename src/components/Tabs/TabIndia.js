import React, { useEffect, useState } from 'react'
import CardDisplay from '../DataDisplay/Card'
import axios from 'axios'
import Datatable from '../DataDisplay/DataTable'
import { DateConvertor } from '../../Utility/Utility'

function TabIndia() {
    const [IndiaCaseCount, setIndiaData] = useState({})
    const [stateData, setStateData] = useState([])
    
    useEffect(() => {
        const getCountForIndia = async () => {
            setIndiaData(await FetchDataForIndia())
        }
        getCountForIndia();
    }, [])

    useEffect(() => {
        const getStateData = async () => {
            setStateData(await FetchDataForStates())
        }
        getStateData();
    }, [])

    const FetchDataForIndia = async () => {
        const data = await axios.get('https://covid19.mathdro.id/api/countries/IND')
        const { confirmed, recovered, deaths, lastUpdate } = data.data

        return {
            confirm: confirmed.value,
            recovered: recovered.value,
            death: deaths.value,
            lastUpdate: lastUpdate
        }
    }

    const FetchDataForStates = async () => {
        const response = await axios.get('https://covid19.mathdro.id/api/countries/IND/confirmed')
        return response.data;
    }

    return (
        <div className="global-container">
            {IndiaCaseCount.lastUpdate !== undefined?
                <div className="last-update">Last updated - {DateConvertor(IndiaCaseCount.lastUpdate)}</div> :
                null}
            <CardDisplay data={IndiaCaseCount}></CardDisplay>
            <Datatable data={stateData}></Datatable>
        </div>
    )
}
export default TabIndia