import React, { Component } from 'react';
import axios from 'axios'
import { Card, Spinner } from 'reactstrap';

import Status from './StatusComponent';
import Fade from 'react-reveal/Fade';


function RenderTable({data}){
    if(data!==null){
        return(
            data.map((cases)=>{
                return(
                    <Card className="col-sm-12">
                    <div className="container mt-1">
                        <div className="row">
                            <div className="col-4 col-sm-4">
                                <p className="d-none d-sm-block" style={{fontSize:"22px"}}>{cases.state}</p>
                                <p className="d-none d-sm-block text-muted" style={{fontSize:"16px"}}>Last updated time<br/>{cases.lastupdatedtime}</p>
                                <p className="d-block d-sm-none" style={{fontSize:"09px"}}>{cases.state}</p>
                                <p className="d-block d-sm-none text-muted" style={{fontSize:"09px"}}>Last updated time<br/>{cases.lastupdatedtime}</p>
                            </div>
                            <div className="col-2 col-sm-2">
                                <p className="text-center d-none d-sm-block" style={{fontSize:"22px"}}>{cases.confirmed}</p>
                                <p className="text-center d-block d-sm-none" style={{fontSize:"09px"}}>{cases.confirmed}</p>
                            </div>
                            <div className="col-2 col-sm-2">
                                <p className="text-center d-none d-sm-block" style={{fontSize:"22px"}}>{cases.active}</p>
                                <p className="d-block d-sm-none text-center" style={{fontSize:"09px"}}>{cases.active}</p>
                            </div>
                            <div className="col-2 col-sm-2">
                                <p className="text-center d-none d-sm-block" style={{fontSize:"22px"}}>{cases.recovered}</p>
                                <p className="d-block d-sm-none text-center" style={{fontSize:"09px"}}>{cases.recovered}</p>
                            </div>
                            <div className="col-2 col-sm-2">
                                <p className="text-center d-none d-sm-block" style={{fontSize:"22px"}}>{cases.deaths}</p>
                                <p className="d-block d-sm-none text-center" style={{fontSize:"09px"}}>{cases.deaths}</p>
                            </div>
                        </div>
                    </div>
                    </Card>
                );
            })
        );
    }
    else
        return(
            <div className="Container"></div>
        );
}

function RenderSpinner({fetched, error}){
    if(fetched===false && error===false)
        return(
            <div className="container">
                <div className="row mt-5 text-center">
                    <div className="col-4">
                        <Spinner type="grow" color="primary" />
                    </div>
                    <div className="col-4">
                    <Spinner type="grow" color="success" />
                    </div>
                    <div className="col-4">
                    <Spinner type="grow" color="danger" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-4 mb-2">
                <h3 className="text-muted text-center">Loading</h3></div></div>
                <div className="row mt-5 mb-5">
                    <div className="col-4">
                    <Spinner type="grow" color="warning" />
                    </div>
                    <div className="col-4">
                    <Spinner type="grow" color="info" />
                    </div>
                    <div className="col-4">
                    <Spinner type="grow" color="dark" />
                    </div>
                </div>
            </div>
        );
    else if(error===true)
        return( 
            <div className="container">
                <h3 className="text-danger">Oops something went wrong. Check the Internet!!!</h3>
            </div>
        )
    else
        return(<div></div>);
}

class Tracker extends Component{

    constructor(props){
        super(props);

        this.state={
            data:[],
            error:false,
            fetched:false,
        };
    }

    componentDidMount(){
        axios.get('http://api.covid19india.org/data.json')
        .then(result=>{
            console.log(result);
            this.setState({data:result.data.statewise,fetched:true});
        })
        .then(()=>{
            const filteredArray=this.state.data.filter((cases)=>(cases.statecode!=="TT" && cases.statecode!=="UN"));
            this.setState({data:filteredArray});
        }
        )
        .catch(error=>{
            this.setState({error:true})
        });
    }

    render(){
        return(
            <div className = "container">
                <Fade left>
                    <div className = "row">
                        <h3 className="text-info m-2">Current Status</h3>
                    </div>
                    <Status/>
                    <div className="row mt-3">
                        <div className="col-4 col-sm-4">
                            <p className="text-dark text-center d-none d-sm-block" style={{fontSize:"20px"}}>State</p>
                            <p className="text-dark text-center d-block d-sm-none" style={{fontSize:"12px"}}>State Code</p>
                        </div>
                        <div className="col-2 col-sm-2">
                            <p className="text-dark text-center d-none d-sm-block" style={{fontSize:"20px"}}>Confirmed</p>
                            <p className="text-dark text-center d-block d-sm-none" style={{fontSize:"12px"}}>Confirmed</p>
                        </div>
                        <div className="col-2 col-sm-2">
                            <p className="text-danger text-center d-none d-sm-block" style={{fontSize:"20px"}}>Active</p>
                            <p className="text-danger text-center d-block d-sm-none" style={{fontSize:"12px"}}>Active</p>
                        </div>
                        <div className="col-2 col-sm-2">
                            <p className="text-success  d-none d-sm-block" style={{fontSize:"20px"}}>Recovered</p>
                            <p className="text-success  d-block d-sm-none" style={{fontSize:"12px"}}>Recovered</p>
                        </div>
                        <div className="col-2 col-sm-2">
                        <p className="text-info text-center d-none d-sm-block" style={{fontSize:"20px"}}>Deaths</p>
                            <p className="text-info text-center d-block d-sm-none" style={{fontSize:"12px"}}>Death</p>
                        </div>
                    </div>
                    <div className="row mb-5">
                    <RenderSpinner 
                        error={this.state.error}
                        fetched={this.state.fetched}
                    />
                    <RenderTable 
                            data={this.state.data}
                        />
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Tracker;