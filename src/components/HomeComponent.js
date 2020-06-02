import React, { Component } from 'react'
import { Card, CardImg, CardTitle, CardText, CardImgOverlay, Tooltip} from 'reactstrap'
import Fade from 'react-reveal/Fade';

import { COVID } from '../shared/covid';
import corona from '../assets/corona.jpg'
import social from '../assets/social_distancing.jpg';
import cough from '../assets/cough.jpg';
import hand from '../assets/hand_sanitizer.jpg';
import sick from '../assets/sick.jpg';
import home from '../assets/stay_home.jpg'
import Status from './StatusComponent';
import { Link } from 'react-router-dom';


function RenderCard({covidTitle,covidDesc,image}){
    return(
        <Card inverse color="info" outline="primary">
            <CardImg src={image} style={{filter:"blur(2px)",height:"400px"}}
            />
            <CardImgOverlay>
            <CardTitle style={{fontSize:"26px",color:"#fff"}}>{covidTitle}</CardTitle>
            <CardText className="d-none d-sm-block" style={{color:"#fff"}}>{covidDesc}</CardText>
            </CardImgOverlay>
        </Card>
        
    );
}


class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            covid:COVID,
            tooltip:false,
        }
        this.toggleToolTip = this.toggleToolTip.bind(this);
    }

    toggleToolTip(){
        this.setState({tooltip:!this.state.tooltip})
    }
    

    render() {
        return (
            
            <div className="container">
                <Fade bottom cascade>
                    <h3 className="row-header">Covid-19</h3>
                    <hr className="my-2"/>
                    <div className="row row-content">
                        <div className="col-sm-4">
                            <Card inverse>
                                <CardImg src={corona} alt="Covid-19"/>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <p className="home-decoration">Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2).</p>
                            <p className="d-none d-sm-block">It was first identified in December 2019 in Wuhan, China, and has since spread globally, 
                            resulting in an ongoing pandemic. As of 28 May 2020, more than 5.69 million cases have been reported across 
                            188 countries and territories, resulting in more than 355,000 deaths. More than 2.34 million people have recovered.</p>
                        </div>
                    </div>
                </Fade>
                <Fade bottom cascade>
                <div>
                    <h3 className="text-center row-header bg-danger text-white" style={{textAlign:"center"}}>Public Service Announcement</h3>
                    <hr className="my-2"/>
                </div>
                <div className="row">
                    <div className="col-sm-4" style={{marginTop:"20px"}}>
                        <Fade bottom cascade>
                        <RenderCard 
                            covidTitle={this.state.covid[0].title}
                            covidDesc={this.state.covid[0].desc}
                            image={home}
                        />
                        </Fade>
                    </div>
                    <div className="col-sm-4" style={{marginTop:"20px"}}>
                        <Fade bottom cascade>
                        <RenderCard 
                            covidTitle={this.state.covid[1].title}
                            covidDesc={this.state.covid[1].desc}
                            image={social}
                        />
                        </Fade>
                    </div>
                    <div className="col-sm-4" style={{marginTop:"20px"}}>
                        <Fade bottom cascade>
                        <RenderCard 
                            covidTitle={this.state.covid[2].title}
                            covidDesc={this.state.covid[2].desc}
                            image={hand}
                        />
                        </Fade>
                    </div>
                    <div className="col-sm-4" style={{marginTop:"20px"}}>
                        <Fade bottom cascade>
                        <RenderCard 
                            covidTitle={this.state.covid[3].title}
                            covidDesc={this.state.covid[2].desc}
                            image={cough}
                        />
                        </Fade>
                    </div>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4" style={{marginTop:"20px"}}>
                        <Fade bottom cascade>
                        <RenderCard 
                            covidTitle={this.state.covid[4].title}
                            covidDesc={this.state.covid[2].desc}
                            image={sick}
                        />
                        </Fade>
                    </div>
                </div>
                </Fade>
                <Fade bottom cascade>
                <h3 className="row-header">Cause</h3>       
                <hr className="my-2"/>
                <div className="row row-content">
                <p className="home-decoration">COVID-19 spreads mainly when people are in close contact (two metres or six feet) via 
                small droplets produced during coughing, sneezing, or talking.</p>
                <p className="d-none d-sm-block">Contaminated droplets exhaled by infected people are then inhaled into the lungs, or settle on other people's faces to cause new infection. The droplets are 
                relatively heavy, usually fall to surfaces, and do not travel far through the air. People can transmit the virus 
                with-out showing symptoms,but it is unclear how often this happens. One estimate of the number of those 
                infected who are asymptomatic is 40%.</p>
                </div>
                </Fade>
                <Link to="/tracker" style={{textDecoration:"none"}}>
                    <div>
                        <Fade bottom cascade>
                            <h3 className="row-header text-info" id="Status">Current Status</h3>
                            <hr className="my-2"/>
                            <Status/>
                        </Fade>
                    </div>
                </Link>
                <Tooltip 
                    target="Status" 
                    placement="top" 
                    isOpen={this.state.tooltip}
                    toggle={this.toggleToolTip}
                >
                    Click here for more
                </Tooltip>
            </div>
        )
    }
}

export default Home;