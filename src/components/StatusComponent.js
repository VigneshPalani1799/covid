import React, {Component} from 'react';

import axios from 'axios';
import { CardText } from 'reactstrap';

import Fade from 'react-reveal/Fade';


const RenderStatus = ({error,errorMessage,confirmed,active,recovered,deaths,lastUpdated}) => {
    if(error===true)
        return(<h3 className="text-danger">{errorMessage}</h3>);
    else
        return(
            <Fade bottom>
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-6 col-sm-3 m-auto">
                                <h5 className="text-dark text-center">Total Cases</h5>
                                <p className="text-dark text-center">{confirmed}</p>
                            </div>
                            <div className="col col-sm-3 m-auto">
                                <h5 className="text-danger text-center">Active</h5>
                                <p className="text-danger text-center">{active}</p>
                            </div>
                            <div className="col-6 col-sm-3 m-auto">
                                <h5 className="text-success text-center">Recovered</h5>
                                <p className="text-success text-center">{recovered}</p>
                            </div>
                            <div className="col col-sm-3 m-auto">
                                <h5 className="text-info text-center">Deaths</h5>
                                <p className="text-info text-center">{deaths}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-right">
                                <CardText className="">
                                    <small className="text-muted text-center">Last Updated On:-{lastUpdated}</small>
                                </CardText>
                            </div>
                        </div>
                    </div>
            </Fade>
        );
}


class Status extends Component{

    constructor(props){
        super(props);
        this.state={
            error:false,
            errorMessage:'',
            confirmed:0,
            active:0,
            recovered:0,
            deaths:0,
            lastUpdated:'',
        };
    }

    

    componentDidMount(){
        axios.get('https://api.covid19india.org/data.json')
        .then((result) => {
            this.setState({
                confirmed:result.data.statewise[0].confirmed,
                active:result.data.statewise[0].active,
                recovered:result.data.statewise[0].recovered,
                deaths:result.data.statewise[0].deaths,
                lastUpdated:result.data.statewise[0].lastupdatedtime
            })
        })
        .catch((error) => {
            this.setState({
                error:true,
                errorMessage:"Try Checking your internet"
            });
        });
    }

    render(){
        return(
            <div className="container" id="Status">
                <RenderStatus
                    error={this.state.error}
                    errorMessage={this.state.errorMessage}
                    confirmed={this.state.confirmed}
                    active={this.state.active}
                    recovered={this.state.recovered}
                    deaths={this.state.deaths}
                    lastUpdated={this.state.lastUpdated}
                />
            </div>
        );
    }
}

export default Status;