import React, { Component } from 'react';

import { Card } from 'reactstrap';
import axios from 'axios';


class News extends Component{

    constructor(props){
        super(props);

        this.state={
            newsData:[],
            url:'http://newsapi.org/v2/everything?q=covid19&from=2020-05-02&sortBy=publishedAt&apiKey=f9a846f8e8df4dc1904d9d736262a62c'
        };
    }

    componentDidMount(){
        axios.get(this.state.url)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }

    render(){
        return(
            <div>
                <Card></Card>
            </div>
        );
    }
}

export default News;