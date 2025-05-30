import { Checkbox } from '@chakra-ui/react';

interface CustomCheckboxProps {
  id: string;
  value: string;
  isChecked: boolean;
  onCheck: (e: { target: { id: string; value: string; checked: boolean } }) => void;
  label?: string;
}

const CustomCheckbox = ({ id, value, isChecked, onCheck, label }: CustomCheckboxProps) => {
  return (
    <Checkbox.Root
      id={id}
      checked={isChecked}
      onCheckedChange={(checked: boolean) => onCheck({
        target: { id, value, checked }
      })}
      value={value}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      {label && <Checkbox.Label>{label}</Checkbox.Label>}
    </Checkbox.Root>
  );
};

export default CustomCheckbox;
