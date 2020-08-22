import React from 'react'
import{GetTime,GetDate} from '../../Utility/Utility'
import './NewsItem.css'
function NewsItem(props) {
  const rendernews = function RenderNews() {
    if (props.data === undefined) {
      return <div>Loading</div>
    }
    else {
      return (
        props.data.map((item, index) => (

          <div key={index} className="news-post">
            <div className="news-post-img">
              {/* <div className="img"
                style={{
                  backgroundImage: `url(${item.urlToImage})`, backgroundRepeat: 'no-repeat'
                }}> */}
              <img src={item.urlToImage} alt=''></img>
            </div>
            <div className="news-post-info">
              <h1 className="news-post-title">{item.title}</h1>
              <div className="news-post-date">
                {item.author !== undefined? <span>by {item.author}</span>: null} 
                <span> </span> 
              <span>|{GetDate(item.publishedAt)} at {GetTime(item.publishedAt)}</span>
              </div>
              {/* <p className="news-post-description"> {item.description}</p> */}
              <p className="news-post-content"> {item.content}</p>
              <a className="read-more" href={item.url} target="blank">Read More</a>
            </div>
          </div>
        )
        )
      )
    }
  }

  return (
    <div className="news-container">
      {rendernews()}
    </div>
  )
}

export default NewsItem