import React, { useEffect, useState } from 'react'
import CardDisplay from '../DataDisplay/Card'
import axios from 'axios'
import Datatable from '../DataDisplay/DataTable'

function TabIndia(props) {

    const [IndiaCaseCount, setIndiaData] = useState({})
    const [stateData, setStateData] = useState([])

    useEffect(() => {
        const getCountForIndia = async () => {
            setIndiaData(await FetchDataForIndia())
        }
        getCountForIndia();
    }, {})

    useEffect(() => {
        const getStateData = async () => {
            setStateData(await FetchDataForStates())
        }
        getStateData();
    }, [])

    const FetchDataForIndia = async () => {
        const data = await axios.get('http://covid19.mathdro.id/api/countries/IND')
        const { confirmed, recovered, deaths } = data.data

        return {
            confirm: confirmed.value,
            recovered: recovered.value,
            death: deaths.value
        }

    }

    const FetchDataForStates = async () => {
        const response = await axios.get('http://covid19.mathdro.id/api/countries/IND/confirmed')

        return response.data;
    }

    return (
        <div className="global-container">
            <CardDisplay data={IndiaCaseCount}></CardDisplay>
            <Datatable data={stateData}></Datatable>
        </div>
    )
}
export default TabIndia