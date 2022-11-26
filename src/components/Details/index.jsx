import React from 'react';
import PropTypes from 'prop-types';
import ToastConfig from '../ToastConfig';

function Details({ setToasts }) {
  return (
    <details>
      <summary>Setup custom toast</summary>
      <ToastConfig setToasts={setToasts} />
    </details>
  );
}

Details.propTypes = {
  setToasts: PropTypes.func.isRequired,
};

export default Details;
