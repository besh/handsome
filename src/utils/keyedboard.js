// TODO: pretty up and make a npm module

const codes = {
  8: "Backspace",
  9: "Tab",
  13: "Enter",
  27: "Escape",
  32: " ",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  46: "Delete",
  188: "Comma"
};

const keyboard = {
  codes,
  getCode(name) {
    if (typeof name === "object") {
      /* 
        While keyCode is deprecated, we should attempt to use it first
        since older versions of Safari doesn't support event.key yet
        https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
      */
      return name.keyCode || name.which || this[name.key];
    }

    return this[name];
  },

  // Dot notation names used when comparing to the striked keyboard key
  Backspace: 8,
  Tab: 9,
  Enter: 13,
  Escape: 27,
  " ": 32,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
  Delete: 46,
  Comma: 188
};

// Provide dot notation for space so it can be compared in the same convention
keyboard.Space = keyboard[" "];

export default keyboard;
