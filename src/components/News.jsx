import React, { Component } from 'react'
import NewItem from './NewItem'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component"
import PropTypes from 'prop-types'
export default class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 20,
        category: "general"
    }
    PropTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }
    updateNews = async () => {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?page=${this.state.page}&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
        const data = await fetch(url)
       
        const parseData = await data.json()
       
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            
        })
        this.props.setProgress(100)
    }
    componentDidMount() {

        this.updateNews()
    }
    fetchMoreData = async () => {
        this.setState({page : this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?page=${this.state.page}&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
        
        const data = await fetch(url)
        const parseData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parseData.articles) ,
            totalResults: parseData.totalResults
        
          
        })
    }
    // handlePrevious = () => {

    //     this.setState({
    //         page: this.state.page - 1
    //     })
    //     this.updateNews()
    // }
    // handleNext = () => {

    //     this.setState({
    //         page: this.state.page + 1
    //     })
    //     this.updateNews()
    // }
    // render() {

    //     return (
    //         <div>
    //             <Container className='my-5'>
    //                 <h1>News app</h1>
    //                 {this.state.loading && <Spinner />}
    //                 <Row>
    //                     {
    //                         !this.state.loading && this.state.articles.map((element) => {
    //                             return <Col className='col-md-4' key={element.url}>
    //                                 <NewItem title={element.title?.slice(0, 30)} description={element.description?.slice(0, 80)} imageUrl={element.urlToImage} newUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
    //                             </Col>
    //                         })
    //                     }

    //                 </Row>
    //                 <Container className='d-flex justify-content-between'>
    //                     <Button disabled={this.state.page <= 1} onClick={this.handlePrevious}>&larr; Previous</Button>
    //                     <Button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} id='btnNext' onClick={this.handleNext}>Next &rarr;</Button>
    //                 </Container>
    //             </Container>

    //         </div>
    //     )
    // }
    render() {

        return (
            <div>
                
                    
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                    <Container className='my-5 mt-10'>
                    <h1 className='text-center'>News app</h1>
                        <Row>

                            {
                                !this.state.loading && this.state.articles.map((element) => {
                                    console.log(element)
                                    return <Col className='col-md-4' key={element.url}>
                                        <NewItem title={element.title?.slice(0,40)} description={element.description?.slice(0,80)} imageUrl={element.urlToImage} newUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                                    </Col>
                                })
                            }

                        </Row>
                        </Container>

                    </InfiniteScroll>
                
            </div>
        )
    }
}
