import React from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col,
} from "reactstrap";
import "./style.scss";

function PaginationComponent(props) {
  return (
    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="pagination">
      <Pagination
        aria-label="Page navigation example"
        className="pagination-list"
      >
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    </Col>
  );
}

export default PaginationComponent;
