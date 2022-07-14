import React from "react";

import PropTypes from "prop-types";
import { Button } from "../../Button";

export function PostHeader({ onRemove, post }) {
  const { id, title } = post;

  return (
    <>
      <strong>
        {title}
      </strong>
      <Button onClick={() => onRemove(id)}>Remover</Button>
    </>
  );
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
