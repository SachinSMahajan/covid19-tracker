import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import './Card.css'

function CardDisplay(props) {
    return (
        <div className="card-container">
            <Grid container >
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Card className="cofirmed">
                            <CardContent>
                                <Typography color="primary category" gutterBottom>
                                    Confirmed
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {props.data.confirm}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Card className="recovered">
                            <CardContent>
                                <Typography color="textSecondary category" gutterBottom>
                                    Recovered
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {props.data.recovered}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Card className="death">
                            <CardContent>
                                <Typography color="textSecondary category" gutterBottom>
                                    Deaths
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {props.data.death}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CardDisplay