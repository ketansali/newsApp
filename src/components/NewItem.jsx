import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class NewItem extends Component {

    render() {
        let { title, description, imageUrl, newUrl, author, publishedAt,source } = this.props
        return (
            <Card style={{ width: '18rem' }} className="my-3">
                <Card.Img variant="top" src={imageUrl} style={{ width: "286px", height: "250px" }} />
                <Card.Body>

                    <Card.Title>{title}...</Card.Title> <span style={{left:"85%"}} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                        {source}
                    </span>
                    <Card.Text>
                        {description}...
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">by {author ? author : "unknown"} on {new Date(publishedAt).toGMTString()}</small>
                    </Card.Text>
                    <Card.Link href={newUrl} className="btn btn-primary" target="_black">Read More</Card.Link>

                </Card.Body>
            </Card>
        )
    }
}
