import React from "react";
import { storiesOf } from "@storybook/react";
import STYLE_TYPES from "constants/styleTypes";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";

storiesOf("Modal", module).add("Simple modal", () => (
  <Modal
    trigger={<Button styleType={STYLE_TYPES.primary}>Don't click me</Button>}
    title="Did you ever hear the tragedy of Darth Plagueis the Wise?"
  >
    <p>
      I thought not. It's not a story the Jedi would tell you. It's a Sith
      legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so
      wise he could use the Force to influence the midichlorians to create
      life... He had such a knowledge of the dark side that he could even keep
      the ones he cared about from dying.
    </p>
    <p>
      The dark side of the Force is a pathway to many abilities some consider to
      be unnatural. He became so powerful... the only thing he was afraid of was
      losing his power, which eventually, of course, he did. Unfortunately, he
      taught his apprentice everything he knew, then his apprentice killed him
      in his sleep.
    </p>
    <p>
      <em>It's ironic he could save others from death, but not himself.</em>
    </p>
  </Modal>
));
