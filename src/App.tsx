import Button from "@Components/Atomic/Buttons/Button";
import Checkbox from "@Components/Atomic/Buttons/Checkbox";
import RadioButton from "@Components/Atomic/Buttons/RadioButton";
import RadioGroup from "@Components/Atomic/Buttons/RadioGroup";
import TextIconButton from "@Components/Atomic/Buttons/TextIconButton";
import InputText from "@Components/Atomic/Inputs/InputText";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="mx-auto flex h-screen w-[400px] flex-col place-content-center place-items-center">
      <InputText
        state="success"
        label="Label"
        placeholder="Placeholder"
        textHelper="Text Helper"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>현재 입력된 값: {value}</p>
    </div>
  );
}

export default App;
