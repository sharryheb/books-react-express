import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row } from "../components/Grid";
import { DbBookRow } from "../components/BookRow";

class Saved extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    synopsis: "",
    image: "",
    link: ""
  };

  componentDidMount()
  {
      this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then((res) =>
      {
        this.setState({
            books: res.data,
            title: "",
            authors: "",
            synopsis: "",
            image: "",
            link: "" })
      }
    )
    .catch((err) =>
    {
        console.log(err)
    });
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(() => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
        <div className="container">
            <Row>
                <Col size="md-12 sm-12">
                    <div className="row bg-warning text-white">
                        <div className="col-md-12">
                            <h4 className="my-auto">Saved Books:</h4>
                        </div>
                    </div>
                    {
                        this.state.books.length ? (this.state.books.map((book) =>
                        {
                            return(<DbBookRow
                                curBook={book}
                                key={book._id}
                                deleteClick={() => {this.deleteBook(book._id)}} />);
                        })
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </Col>
            </Row>
        </div>
    );
  }
}

export default Saved;
