import React from "react";
import styles from "./App.module.scss";
import Input from "./components/Input/Input";

const App = () => {
  return (
    <div className={styles.root}>
      <Input />
    </div>
  );
};

export default App;
