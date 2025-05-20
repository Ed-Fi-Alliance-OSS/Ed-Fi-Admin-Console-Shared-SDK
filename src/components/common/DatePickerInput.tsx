import { Input } from "@chakra-ui/react";
import { forwardRef } from "react";
import { ForwardedRef } from "react";


const DatePickerInput = forwardRef((props: any, ref: ForwardedRef<HTMLInputElement>) => (
    <Input
        className="example-custom-input"
        onClick={props.onClick}
        onChange={props.onChange}
        ref={ref}
        value={props.value}
        size="xs"
        w="full"
    />
));

export default DatePickerInput;
