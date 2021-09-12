import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 20        
      }

    static propTypes = {
        country: 'in',
        pageSize: 20        
      }
    
    constructor() {
        super();
        console.log("Hello I am a Constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=0f81c36e37bc4681b3e9fd40dc998e53&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading: false })
    }

    handlePrevClick = async () => {
        document.documentElement.scrollTop = 0;
        console.log("previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=0f81c36e37bc4681b3e9fd40dc998e53&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }


    handleNextClick = async () => {

        document.documentElement.scrollTop = 0;
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            console.log("getting big");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=0f81c36e37bc4681b3e9fd40dc998e53&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }

        console.log("Next");
    }

    render() {
        return (

            <div className="container">
                <h1 className="text-center my-4 bg-dark text-white">NewsMonkey top headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!(this.state.loading) && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between mb-3">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
