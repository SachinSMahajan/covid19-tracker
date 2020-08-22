import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import './Card.css'

function CardDisplay(props) {
    if (!props.data.confirm) {
        return (<Typography variant="button" display="block" align='center'>
                    Loading...
                </Typography>);
    }
    return (
        <div className="card-container">
            <Grid container >
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Card className="cofirmed">
                            <CardContent>
                                <Typography color="primary" className="category" gutterBottom>
                                    Confirmed
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {/* {props.data.confirm} */}
                                    <CountUp start={0} end={props.data.confirm} duration={2.5} separator="," />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Card className="recovered">
                            <CardContent>
                                <Typography color="textSecondary" className="category" gutterBottom>
                                    Recovered
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {/* {props.data.recovered} */}
                                    <CountUp start={0} end={props.data.recovered} duration={2.5} separator="," />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Card className="death">
                            <CardContent>
                                <Typography color="textSecondary" className="category" gutterBottom>
                                    Deaths
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {/* {props.data.death} */}
                                    <CountUp start={0} end={props.data.death} duration={2.5} separator="," />
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