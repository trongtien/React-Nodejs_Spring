import PropTypes from 'prop-types';
import React from "react";
import {
  Col, Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import "./style.scss";



PaginationComponent.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
}

PaginationComponent.defaulttProps = {
  onPageChange: null,
}

function PaginationComponent(props) {
  const { pagination, onPageChange } = props
  const { _page, _limit, _totalRows } = pagination
  const totalPages = Math.ceil(_totalRows / _limit)

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage)
    }
  }
  console.log('totalPages', totalPages)
  let active;
  let items = [];
  for (let i = 1; i <= totalPages; i++) {
    items.push(
      <PaginationItem>
        <PaginationLink key={i} active={i === active} > {i}</PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="pagination">

      <Pagination
        aria-label="Page navigation example"
        className="pagination-list"
      >
        <PaginationItem>
          <PaginationLink previous
            disabled={_page <= 1}
            onClick={() => handlePageChange(_page - 1)}
          />
        </PaginationItem>
        {items}
        <PaginationItem>
          <PaginationLink next
            disabled={_page === totalPages}
            onClick={() => handlePageChange(_page + 1)}
          />
        </PaginationItem>

      </Pagination>

    </Col >
  );
}

export default PaginationComponent;
