import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h2>NewsMonley top headlines</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <NewsItem  title='myTitle' description='mydesc' />
                        </div>
                        <div className="col-md-4">
                            <NewsItem  title='myTitle' description='mydesc' />
                        </div>
                        <div className="col-md-4">
                            <NewsItem  title='myTitle' description='mydesc' />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default News
