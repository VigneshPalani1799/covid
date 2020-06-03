import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Card } from 'reactstrap';
import axios from 'axios';


function RenderNews({newsData}){
    if(newsData!==null){
        return(
            newsData.map((news) => {
                return(
                    <div className="container mt-2 mb-1" >
                        <Fade left>
                            <a href={news.url} target="_blank" style={{textDecoration:"none"}}>
                                <Card>
                                    <div className="row">
                                        <div className="col-6 col-sm-4">
                                            <img src={news.urlToImage} 
                                                className="img-fluid img-thumbnail rounded" 
                                                alt="Error fetching image"
                                                href={news.url}
                                            />
                                            
                                        </div>
                                        <div className="col-6 col-sm-8">
                                            <h5>{news.title}</h5>
                                            <p className="d-none d-sm-block">{news.content}</p>
                                            <small className="text-muted">{new Date(news.publishedAt).toString()}</small>
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
        return(<div></div>);

}


class News extends Component{

    constructor(props){
        super(props);

        this.state={
            newsData:[],
            url:'http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f9a846f8e8df4dc1904d9d736262a62c'
        };
    }

    componentDidMount(){
        axios.get(this.state.url)
        .then((result) => {
            console.log(result);
            this.setState({newsData:result.data.articles});
        })
        .catch(error => console.log(error));
    }

    render(){
        return(
            <div className="container">
                <h3 className="text-dark m-3">News Headlines</h3>
                <RenderNews newsData={this.state.newsData}/>
            </div>
        );
    }
}

export default News;