import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Form.module.scss";

const Form = forwardRef(({ className, ...other }, ref) => {
  const rootStyles = cx(styles.root, className);
  return <form ref={ref} className={rootStyles} {...other} />;
});

Form.propTypes = {
  className: PropTypes.string
};

export default Form;
