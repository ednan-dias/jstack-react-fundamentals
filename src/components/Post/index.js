import React from "react";

import PropTypes from "prop-types";
import { PostHeader } from "./PostHeader";

import { Subtitle, Rate, Container } from "./styles";

export function Post({ onRemove, post }) {
  const { id, title, subtitle, likes, removed } = post;

  return (
    <Container removed={removed}>
      <PostHeader
        onRemove={onRemove}
        post={{
          id,
          title,
        }}
      />

      <Subtitle>{subtitle}</Subtitle>
      <Rate>Média: {likes / 2}</Rate>
    </Container>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};
