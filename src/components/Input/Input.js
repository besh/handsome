import React, { forwardRef, useState, Fragment } from "react";
import PropTypes from "prop-types";
import keyed from "utils/keyedboard";
import styles from "./Input.module.scss";

const Input = forwardRef((props, ref) => {
  const {
    placeholder,
    type,
    value,
    onChange,
    onKeyDown,
    labelText,
    style,
    ...other
  } = props;
  const [currentValue, setCurrentValue] = useState(`${placeholder}${value}`);
  const [showPassword, setShowPassword] = useState(true);
  const typeIsPassword = type === "password";

  const handleOnChange = e => {
    setCurrentValue(e.target.value);
    onChange(e);
  };

  const handleOnKeyDown = e => {
    if (type === "number") {
      e.preventDefault();
      return;
    }

    if (keyed.getCode(e) === keyed.Tab) {
      e.preventDefault();
    }
    onKeyDown(e);
  };

  const handleSecureInput = e => {
    e.preventDefault();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const passwordIcon = showPassword ? "๏_๏" : "✖_✖";
  const _type = typeIsPassword ? "text" : type;

  return (
    <div className={styles.root} style={style}>
      <input
        className={styles.input}
        onChange={handleOnChange}
        value={currentValue}
        onKeyDown={handleOnKeyDown}
        onPaste={handleSecureInput}
        onCopy={handleSecureInput}
        onCut={handleSecureInput}
        type={_type}
        ref={ref}
        {...other}
      />
      {labelText && <label className={styles.label}>{labelText}</label>}
      {typeIsPassword && (
        <Fragment>
          <span
            className={styles.passwordIcon}
            onClick={togglePasswordVisibility}
          >
            {passwordIcon}
          </span>
          {!showPassword && (
            <span className={styles.hidePassword}>
              {Object.keys(currentValue)
                .map(() => {
                  return "••";
                })
                .join("")}
            </span>
          )}
        </Fragment>
      )}
    </div>
  );
});

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
};

Input.defaultProps = {
  onChange: () => {},
  onKeyDown: () => {},
  placeholder: "",
  value: "",
  type: "text"
};

export default Input;
