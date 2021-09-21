import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'

const NewsItem = (props) => {

        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"70%",zIndex:"1"}}>
                        {source}
                    </span>
                    <img className="card-img-top" src={!imageUrl ? "https://images.indianexpress.com/2021/09/Biziura_lobata_-_Sandford.jpg" : imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }

export default NewsItem
