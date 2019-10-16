import React from "react";
import { Col, Row } from "../Grid";
import { Link } from "react-router-dom";
import Synopsis from "../Synopsis";
import { SaveBtn, ViewBtn, DeleteBtn } from "../Button";

export function SearchBookRow(props) {
    let book = props.curBook;
    let volumeInfo = book.volumeInfo;
  return (
        <div className="row border border-warning py-2">
            <Col size="md-12">
                <Row>
                    <Col size="md-12">
                        <Link to={volumeInfo.previewLink}>
                            <strong>{volumeInfo.title} by {volumeInfo.authors}</strong>
                        </Link>
                        <ViewBtn onClick={() => {window.open(volumeInfo.previewLink, "_blank")}} />
                        <SaveBtn onClick={props.saveClick} />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Synopsis book={volumeInfo}></Synopsis>
                    </Col>
                </Row>
            </Col>
        </div>
  );
}

export function DbBookRow(props) {
    let book = props.curBook;
  return (
        <div className="row border border-warning py-2">
            <Col size="md-12">
                <Row>
                    <div className="col-md-8">
                        <Link to={book.link}>
                            <strong>{book.title} by {book.authors}</strong>
                        </Link>
                    </div>
                    <div className="col">
                        <ViewBtn onClick={() => {window.open(book.link, "_blank")}} />
                        <DeleteBtn onClick={props.deleteClick} />
                    </div>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Synopsis book={book}></Synopsis>
                    </Col>
                </Row>
            </Col>
        </div>
  );
}
