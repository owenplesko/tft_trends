import { Dispatch, useState } from "react";

type DropDownProps = {
  label: string | undefined;
  options: string[];
  selection: string;
  setSelection: Dispatch<string>;
};

const Selection = ({
  label,
  options,
  selection,
  setSelection,
}: DropDownProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`relative flex cursor-pointer select-none flex-col items-center text-neutral-300`}
      onClick={() => setVisible(!visible)}
    >
      <span
        className={`border border-neutral-950 bg-neutral-800 px-4 py-1 ${visible ? "rounded-t-md" : "rounded-md"}`}
      >{`${label} ${selection}`}</span>
      {visible && (
        <ul className="absolute top-full flex w-full flex-col divide-y divide-neutral-700 rounded-b-md border border-t-0 border-neutral-950 bg-neutral-800 py-1">
          {options.map((option) => (
            <li
              className="text-center hover:bg-violet-600 hover:text-neutral-900"
              key={option}
              onClick={() => {
                setVisible(false);
                setSelection(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Selection;
