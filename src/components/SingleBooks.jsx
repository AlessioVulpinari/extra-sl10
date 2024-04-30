import { Component } from "react"
import { Badge, Card, Col } from "react-bootstrap"

class SingleBooks extends Component {
  // state = { selected: false }

  render() {
    return (
      <Col key={this.props.bookIns.asin}>
        <Card
          className={this.props.bookIns.asin === this.props.selectedAsin ? "border border-danger" : "border border-secondary"}
        >
          <Card.Img
            variant='top'
            src={this.props.bookIns.img}
            onClick={() => {
              this.props.setNewAsin(this.props.bookIns.asin)
            }}
          />
          <Card.Body className='d-flex flex-column justify-content-between bg-secondary'>
            <Card.Title>{this.props.bookIns.title}</Card.Title>
            <Card.Text className='d-flex justify-content-between align-items-center'>
              <span>{this.props.bookIns.category.charAt(0).toUpperCase() + this.props.bookIns.category.slice(1)}</span>
              <Badge bg='success'>{this.props.bookIns.price}</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBooks
