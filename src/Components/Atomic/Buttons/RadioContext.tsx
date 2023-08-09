import { createContext } from "react";

type RadioContextProp = {
  disabled?: boolean;
  value?: boolean;
  onChange?: (value: string) => void;
};

const RadioContext = createContext<RadioContextProp>({});

export default RadioContext;
