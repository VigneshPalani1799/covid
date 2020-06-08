import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Card, Spinner } from 'reactstrap';
import axios from 'axios';


function RenderNews({newsData}){
    if(newsData!==null){
        return(
            newsData.map((news) => {
                return(
                    <div className="container mt-2 mb-2" >
                        <Fade left>
                            <a href={news.url} target="_blank" style={{textDecoration:"none"}}>
                                <Card>
                                    <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <img src={news.urlToImage} 
                                                className="img-fluid img-thumbnail rounded" 
                                                alt="Error fetching image"
                                                href={news.url}
                                            />
                                        </div>
                                    </div>
                                        <div className="row">
                                            <div className="col-12 ml-auto">
                                                <p className="text-info">{news.title}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 ml-2">
                                                <p className="d-none d-sm-block text-dark">{news.content}</p>
                                                <small className="text-muted" style={{textAlign:"right"}}>{new Date(news.publishedAt).toString()}</small>
                                            </div>
                                        </div>
                                    
                                </Card>
                            </a>
                        </Fade>
                    </div>
                );
            })
        );
    }
    else
        return(<div></div>)
}

function RenderSpinner({fetched, error}){
    if(fetched===false && error===false)
        return(
            <div>
                
                <div className="row mt-5 mb-5 text-center">
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
                <div className="row mt-5 mb-5 text-center">
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


class News extends Component{

    constructor(props){
        super(props);

        this.state={
            newsData:[],
            url:'http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f9a846f8e8df4dc1904d9d736262a62c',
            fetched:false,
            error:false,
        };
    }

    componentDidMount(){
        axios.get(this.state.url)
        .then((result) => {
            console.log(result);
            this.setState({newsData:result.data.articles});
            this.setState({fetched:true})
        })
        .catch(error => {console.log(error)
            this.setState({error:true})
        });
    }

    render(){
        return(
            <div className="container">
                <h3 className="text-dark m-3">News Headlines</h3>
                <RenderSpinner 
                    fetched={this.state.fetched}
                    error={this.state.error}
                />
                <RenderNews 
                    newsData={this.state.newsData} 
                />
                
            </div>
        );
    }
}

export default News;