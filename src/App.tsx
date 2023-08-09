import Button from "@Components/Atomic/Buttons/Button";
import Checkbox from "@Components/Atomic/Buttons/Checkbox";
import RadioButton from "@Components/Atomic/Buttons/RadioButton";
import RadioGroup from "@Components/Atomic/Buttons/RadioGroup";
import TextIconButton from "@Components/Atomic/Buttons/TextIconButton";
import { useState } from "react";

function App() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
      <RadioGroup label="연락처를 선택하세요" onChange={handleChange}>
        <RadioButton
          name="contact"
          id="contact-1"
          value="1ST-EMAIL"
          defaultChecked
        >
          1st contact
        </RadioButton>
        <RadioButton name="contact" id="contact-2" value="2ND-EMAIL">
          2nd contact
        </RadioButton>
      </RadioGroup>

      <p>현재 선택된 Value: {selectedValue}</p>
    </>
  );
}

export default App;
