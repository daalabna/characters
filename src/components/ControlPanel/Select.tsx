import React from 'react';
import Select from '@material-ui/core/Select';

interface IGenderProps {
    items: string[]
    value: string
    handleChange: Function
}

export default function (props: IGenderProps) {
  const { items, value, handleChange } = props;
  return (
    <Select
      value={value}
      native
      onChange={(e) => handleChange(e.target.value)}
    >
      <option value=""> </option>
      {items.map((item) => <option key={item} value={item}>{item}</option>)}
    </Select>
  );
}
