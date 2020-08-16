import React, { useEffect, useState } from 'react'
import CardDisplay from '../DataDisplay/Card'
import axios from 'axios'
import NewsItem from '../DataDisplay/NewsItem'

function TabNews (props){
    const [News, setNews] = useState([])

    useEffect(()=>{
        const getNews = async ()=>{
            setNews(await FetchNews())
        }
        getNews();
    },[])

    const FetchNews =async ()=>{
        const response = await axios('https://covid-19india-api.herokuapp.com/headlines')
        const {headlines,headlines_summary,image_link} = response.data
        return {
            headlines : headlines,
            summary :headlines_summary,
            image : image_link
        } 
    }

    return (
        <NewsItem data={News}></NewsItem>
    )
}
export default TabNews