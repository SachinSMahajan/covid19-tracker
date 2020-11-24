import React from 'react'
import PropTypes from 'prop-types'
import{GetTime,GetDate} from '../../Utility/Utility'
import './NewsItem.css'
import noImage from './noimage.png'

const NewsItem = (props) => {
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
              {item.image ==='None'? <img src={noImage} alt=''></img> :
               <img src={item.image} alt=''></img>}
            </div>
            <div className="news-post-info">
              <h1 className="news-post-title">{item.title}</h1>
              <div className="news-post-date">
                {item.author !== undefined? <span>by {item.author}</span>: null} 
                <span> </span> 
              <span>|{GetDate(item.published)} at {GetTime(item.published)}</span>
              </div>
              {/* <p className="news-post-description"> {item.description}</p> */}
              <p className="news-post-content"> {item.description}</p>
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

NewsItem.propTypes = {
  data : PropTypes.arrayOf(PropTypes.shape({
    image : PropTypes.string,
    title : PropTypes.string,
    published : PropTypes.string,
    author : PropTypes.string,
    description : PropTypes.string,
    url : PropTypes.string,
  }))
}