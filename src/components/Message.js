import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ msg }) => {
  return (
            
<>
<div class="alert alert-success alert-dismissible">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
     {msg}
  </div>
</>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;
