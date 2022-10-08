import { NumericFormat } from "react-number-format";

export const MyNumber = (props: { price: number; css?: string }) => {
  return (
    <NumericFormat
      value={props.price}
      decimalScale={2}
      thousandSeparator={"."}
      decimalSeparator={","}
      fixedDecimalScale={true}
      prefix={"R$ "}
      className={`w-fit ${props.css && props.css}`}
      displayType={"text"}
    />
  );
};
