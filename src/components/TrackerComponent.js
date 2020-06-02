import React, { Component } from 'react';
import axios from 'axios'
import { Card } from 'reactstrap';

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
                            <div className="col-3 col-sm-3">
                                <p className="d-none d-sm-block" style={{fontSize:"22px"}}>{cases.state}</p>
                                <p className="d-block d-sm-none" style={{fontSize:"16px"}}>{cases.statecode}</p>
                            </div>
                            <div className="col-3 col-sm-3">
                                <p className="text-center d-none d-sm-block" style={{fontSize:"20px"}}>{cases.active}</p>
                                <p className="d-block d-sm-none text-center" style={{fontSize:"14px"}}>{cases.active}</p>
                            </div>
                            <div className="col-3 col-sm-3">
                                <p className="text-center d-none d-sm-block" style={{fontSize:"20px"}}>{cases.recovered}</p>
                                <p className="d-block d-sm-none text-center" style={{fontSize:"14px"}}>{cases.recovered}</p>
                            </div>
                            <div className="col-3 col-sm-3">
                                <p className="text-center d-none d-sm-block" style={{fontSize:"20px"}}>{cases.deaths}</p>
                                <p className="d-block d-sm-none text-center" style={{fontSize:"14px"}}>{cases.deaths}</p>
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
            <div></div>
        );
}

class Tracker extends Component{

    constructor(props){
        super(props);

        this.state={
            data:[],
            error:false,
        };
    }

    componentDidMount(){
        axios.get('https://api.covid19india.org/data.json')
        .then(result=>{
            console.log(result);
            this.setState({data:result.data.statewise});
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
                        <div className="col-3 col-sm-3"></div>
                        <div className="col-3 col-sm-3">
                            <p className="text-danger text-center d-none d-sm-block" style={{fontSize:"20px"}}>Active</p>
                            <p className="text-danger text-center d-block d-sm-none" style={{fontSize:"16px"}}>Active</p>
                        </div>
                        <div className="col-3 col-sm-3">
                            <p className="text-success text-center d-none d-sm-block" style={{fontSize:"20px"}}>Recovered</p>
                            <p className="text-success text-center d-block d-sm-none" style={{fontSize:"16px"}}>Recovered</p>
                        </div>
                        <div className="col-3 col-sm-3">
                        <p className="text-info text-center d-none d-sm-block" style={{fontSize:"20px"}}>Deaths</p>
                            <p className="text-info text-center d-block d-sm-none" style={{fontSize:"16px"}}>Death</p>
                        </div>
                    </div>
                    <div className="row mb-5">
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