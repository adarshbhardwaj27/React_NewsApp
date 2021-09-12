import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl,newsUrl } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={!imageUrl?"https://images.indianexpress.com/2021/09/Biziura_lobata_-_Sandford.jpg":imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl}   rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Go Somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
