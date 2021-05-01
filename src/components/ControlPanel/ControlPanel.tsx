import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from './Select';
import { IQueryParams } from '../../store/queryParams';

const SelectWrapper = {
  marginLeft: '10px',
};

interface IControlPanel {
    queryParams: IQueryParams,
    updateQuery: Function
}

const genders = ['male', 'female', 'genderless', 'unknown'];
const statuses = ['alive', 'dead', 'unknown'];

export default function ControlPanel(props: IControlPanel) {
  const { queryParams, updateQuery } = props;
  return (
    <div>
      <TextField
        placeholder="Seacrh"
        onChange={(e) => updateQuery('name', e.target.value)}
        value={queryParams.name}
        variant="outlined"
      />
      <FormControl style={SelectWrapper} variant="outlined">
        <InputLabel>Gender</InputLabel>
        <Select
          value={queryParams.gender}
          items={genders}
          handleChange={(value: string) => updateQuery('gender', value)}
        />
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel>Status</InputLabel>
        <Select
          value={queryParams.status}
          items={statuses}
          handleChange={(value: string) => updateQuery('status', value)}
        />
      </FormControl>
    </div>
  );
}
