import React from "react";
import Image from "../Image";
import { Col, Row } from "../Grid";

function Synopsis(props) {

let imageLink = "";
if (props.book.imageLinks)
{
    imageLink = props.book.imageLinks.smallThumbnail;
 }
 else if (props.book.link)
 {
    imageLink = props.book.image;
 }

return (<Row>
        <Col size="md-2"><Image image={imageLink} className="d-inline-flex" /></Col>
        <Col size="md-10">{props.book.description ? props.book.description : props.book.synopsis}</Col>
        </Row>);

}

export default Synopsis;
