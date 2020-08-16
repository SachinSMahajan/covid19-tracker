import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function NewsItem(props) {
  const { headlines, summary, image } = props.data


  function RenderNews() {
    if (headlines === undefined) {
      return <div>Loading</div>
    }
    else {
      return (
        headlines.map((row, index) => (
          <Card key={index}>
            
              <CardMedia
                component="img"
                alt=""
                height="140"
                image={image[index]}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {row}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {summary[index]}
                </Typography>
              </CardContent>
            
          </Card>
        )
        )
      )
    }

  }

  return (

    <div>
      {RenderNews()}
    </div>
  )
}

export default NewsItem