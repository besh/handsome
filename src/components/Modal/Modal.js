import React, { Fragment, cloneElement, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import cx from "classnames";
import styles from "./Modal.module.scss";

const Modal = ({ className, children, trigger, title, ...other }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rootStyle = cx(styles.root, className);

  const handleOnTriggerClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOnClose = () => {
    setIsModalOpen(false);
  };

  const handleOnContentDownload = () => {
    const filename = "modal_content.txt";
    const text = getTextFromChildren() || "TEXT NOT FOUND!";
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const findStringChildren = child => {
    if (typeof child === "string") {
      return textWithNewLine(child);
    }

    if (child.props && child.props.children) {
      return findStringChildren(child.props.children);
    }

    return "";
  };

  const textWithNewLine = text => {
    return `${text}\r\n`;
  };

  const getTextFromChildren = () => {
    const header = textWithNewLine(title);

    const body = React.Children.map(children, child => {
      return findStringChildren(child);
    }).join("");

    return `${header}${body}`;
  };

  return (
    <Fragment>
      {cloneElement(trigger, {
        onClick: handleOnTriggerClick
      })}
      {isModalOpen && (
        <div className={rootStyle} {...other}>
          <div className={styles.dimmer} />
          <div className={styles.modal}>
            <h2 className={styles.title}>{title}</h2>
            {children}
            <Button
              className={styles.download}
              styleType="primary"
              onClick={handleOnContentDownload}
            >
              ↙
            </Button>
          </div>
          <Button
            className={styles.close}
            styleType="primary"
            onClick={handleOnClose}
          >
            exit
          </Button>
        </div>
      )}
    </Fragment>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  trigger: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string
};

export default Modal;
