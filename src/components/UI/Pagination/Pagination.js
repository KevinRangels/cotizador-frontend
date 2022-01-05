import React from 'react';

export const Pagination = () => {
  return (
    <ul className="pagination pagination-primary">
      <li className="page-item active">
        <a className="page-link" href="javascript:;">
          1
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#link">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#link">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#link">
          4
        </a>
      </li>
    </ul>
  );
};
