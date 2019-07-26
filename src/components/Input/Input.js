import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = forwardRef((props, ref) => {
  const { placeholder, type, value, onChange, labelText, ...other } = props;
  const [currentValue, setCurrentValue] = useState(`${placeholder}${value}`);

  const handleOnChange = e => {
    setCurrentValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <input
      className={styles.root}
      onChange={handleOnChange}
      value={currentValue}
      {...other}
    />
  );
});

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  onChange: () => {},
  placeholder: "",
  value: ""
};

export default Input;
