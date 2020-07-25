import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import './Card.css'
import Countup from 'react-countup';
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...'
    }
    return (
        <div className="container__card">

            <Grid container spacing={3} justify="center">
                    <Grid item component={Card} xs={12} lg={3} md={3} className="infected">
                    <div className="card">

                        <CardContent className="card_text">
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5">
                                <Countup start={0} end={confirmed.value} duration={2} separator="," />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of active cases of COVID-19</Typography>
                        </CardContent>
                        </div>

                    </Grid>

                <Grid item component={Card} xs={12} lg={3} md={3}  className="recovered">
                <div className="card">


                        <CardContent className="card_text">
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">
                                <Countup start={0} end={recovered.value} duration={2} separator="," />

                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of Recoveries from COVID-19</Typography>
                        </CardContent>
                        </div>

                    </Grid>

                <Grid item component={Card} xs={12} lg={3} md={3}  className="deaths">
                <div className="card">

                        <CardContent className="card_text">
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">
                                <Countup start={0} end={deaths.value} duration={2} separator="," />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                        </CardContent>
                        </div>

                    </Grid>
            </Grid>
        </div>
    )
}

export default Cards
