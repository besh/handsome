import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import STYLE_TYPES from "constants/styleTypes";
import styles from "./Button.module.scss";

const Button = forwardRef((props, ref) => {
  const { styleType, className, ...other } = props;
  const rootStyle = cx(styles.root, styles[styleType], className);

  return <button className={rootStyle} {...other} />;
});

Button.propTypes = {
  styleType: PropTypes.oneOf([
    STYLE_TYPES.primary,
    STYLE_TYPES.secondary,
    STYLE_TYPES.tertiary
  ])
};

Button.defaultProps = {
  styleType: STYLE_TYPES.primary
};

export default Button;
