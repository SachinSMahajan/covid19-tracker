import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsItem from '../DataDisplay/NewsItem'
import './TabNews.css'

const TabNews = () => {
    const [News, setNews] = useState([])
    const APIKey = 'xX69Wv-vHOe0dOaIx2Xfzudj_zWE15ls1fiMJW-1h6MjAW8T';
    useEffect(()=>{
        const getNews = async ()=>{
            setNews(await FetchNews())
        }
        getNews();
    },[])

    const FetchNews =async ()=>{
        //const response = await axios('https://newsapi.org/v2/top-headlines?q=covid&country=in&apiKey=' + APIKey)
        const response = await axios('https://api.currentsapi.services/v1/search?keywords=corona&keyword=covid19&language=en&country=IN&apiKey=' + APIKey)
         return response.data.news
    }

    return (
     <>
        <NewsItem data={News}></NewsItem>
       </>
    )
}
export default TabNews