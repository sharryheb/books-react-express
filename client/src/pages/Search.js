import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row } from "../components/Grid";
import { FormBtn } from "../components/Form";
import { SearchBookRow } from "../components/BookRow";

class Search extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    synopsis: "",
    image: "",
    link: ""
  };

  saveBook = (book) => {
    API.saveBook({
        title: book.title,
        authors: book.authors.join(),
        synopsis: book.description,
        image: (book.imageLinks) ? book.imageLinks.smallThumbnail : "",
        link: book.previewLink
    })
      .then(
          window.open("/saved", "_top")
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch = event => {
    event.preventDefault();
    if (this.state.title) {
      API.search(this.state.title)
      .then(res => this.setState({ books: res.data.items, title: "", authors: "", synopsis: "", image: "", link: "" }))
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row pb-4 mb-5 mt-3 border border-warning">
          <Col size="md-12">
            <div className="row bg-warning text-white">
                <div className="col-md-12">
                    <h4 className="my-auto">Search for a Book:</h4>
                </div>
            </div>
            <Row>
                <div className="col-md-12 mt-2">
                    <form className="form-inline">
                        <div className="form-group col-md-10">
                            <input
                                className="form-control w-100"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)" />
                        </div>
                        <FormBtn
                            disabled={!this.state.title}
                            onClick={this.handleSearch}
                        >
                            Search
                        </FormBtn>
                    </form>
                </div>
            </Row>
          </Col>
        </div>
        <Row>
            <Col size="md-12 sm-12">
                <div className="row bg-warning text-white">
                    <div className="col-md-12">
                        <h4 className="my-auto">Results:</h4>
                    </div>
                </div>
                {
                    this.state.books.length ? (
                        this.state.books.map(book =>
                        {
                            return (<SearchBookRow
                                curBook={book}
                                key={book.id}
                                saveClick={() => {this.saveBook(book.volumeInfo)}} />);
                        })
                    ) : ( <h3>No Results to Display</h3> )
                }
            </Col>
        </Row>
      </div>
    );
  }
}

export default Search;
