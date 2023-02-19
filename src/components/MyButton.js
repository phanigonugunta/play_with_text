import React from 'react';
import PropTypes from 'prop-types';

export default function MyButton(param1) {
    return (
      <div className="container">
        <button className="btn btn-primary">Convert to UpperCase</button>
      </div>
      
    );
}

MyButton.propTypes = {name : PropTypes.string, age : PropTypes.number};
MyButton.defaultProps = {name : "doctor strange", age : 100};