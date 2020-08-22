import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsItem from '../DataDisplay/NewsItem'
import './TabNews.css'
function TabNews (props){
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
    //     const newslist =[
    //         {"urlToImage":'./test.png',
    //     "description" : "How to use chart.js to create charts in React",
    // "content":"The state variable contains all the data and styling properties of the bar graph. The labels keyword assigns names to each bar, and the dataset sub-set contains information such as bar color, border width, ​and height of the bar"}
    //     ]
         return response.data.news
        //return  newslist;
    }

    return (
     <>
        <NewsItem data={News}></NewsItem>
       </>
    )
}
export default TabNews