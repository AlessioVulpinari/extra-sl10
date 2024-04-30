import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav.jsx"
import MyFooter from "./components/MyFooter.jsx"
import Welcome from "./components/Welcome.jsx"
// import AllTheBooks from "./components/AllTheBooks.jsx"
import BookList from "./components/BookList.jsx"
import fantasy from "../src/data/books/fantasy.json"
import CommentArea from "./components/CommentArea.jsx"
import { Col, Row } from "react-bootstrap"
import { Component } from "react"

class App extends Component {
  state = { selectedAsin: "" }

  setNewAsin = (asin) => {
    this.setState({ selectedAsin: asin })
  }
  render() {
    return (
      <div className='App'>
        <MyNav />
        <main className='container'>
          <Welcome />
          <Row md={8}>
            <Col>
              <BookList category={fantasy} setNewAsin={this.setNewAsin} selectedAsin={this.state.selectedAsin} />
            </Col>
            <Col md={4}>
              <CommentArea elementId={this.state.selectedAsin} />
            </Col>
          </Row>
        </main>

        <MyFooter />
      </div>
    )
  }
}

export default App
