import Button from "@Components/Atomic/Buttons/Button";
import Checkbox from "@Components/Atomic/Buttons/Checkbox";
import RadioButton from "@Components/Atomic/Buttons/RadioButton";
import RadioGroup from "@Components/Atomic/Buttons/RadioGroup";
import TextIconButton from "@Components/Atomic/Buttons/TextIconButton";
import DatePicker from "@Components/Atomic/Inputs/DatePicker";
import InputSelect from "@Components/Atomic/Inputs/InputSelect";
import InputText from "@Components/Atomic/Inputs/InputText";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="mx-auto mt-6 flex h-screen w-[90%] flex-col place-items-center">
        <p>현재 선택된 value: {value}</p>
        <DatePicker onSelect={() => {}} />
      </div>
    </>
  );
}

export default App;
