import React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { CustomContext } from '../../../utils/context';

import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../../redux/slices/catalogSlice';

const CatalogSelect = ({ title, array1 }) => {
  const sort = useSelector((state) => state.catalogSlice.sort);

  const dispatch = useDispatch();

  return (
    <Box sx={{ minWidth: 250, marginTop: 3 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label={title}
          onChange={(e) => dispatch(setSort(e.target.value))}
        >
          {array1.map((item) => (
            <MenuItem key={item} value={item}>
              {item === 'asc'
                ? 'по возрастанию цены'
                : item === 'desc'
                ? 'по убыванию цены'
                : item === 'rate'
                ? 'по популярности'
                : item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CatalogSelect;
