import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "../../hooks/theme";

export function Button({ onClick, children }) {
  const { theme } = useTheme();

  return (
    <button
      style={{
        color: theme === "dark" ? "#fff" : "#000",
        background: theme === "dark" ? "#000" : "#fff",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
