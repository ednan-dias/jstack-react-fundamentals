import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";
import Title from "../Title";

import { useTheme } from "../../hooks/theme";

export function Header({ title, children }) {
  const { onToggleTheme } = useTheme();

  return (
    <>
      <Title>{title}</Title>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      {children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
