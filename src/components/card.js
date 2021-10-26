import React from 'react'

const card = (props) => {

    let {title, img, description} = props
    return (
        <div className="card" style={{height: "93%"}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className ="card-body align-self-end">
            <h5 className ="card-title">{title}</h5>
            <p className ="card-text">{description}</p>
            <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    )
}

export default card
