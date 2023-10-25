import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { CustomContext } from '../../../utils/context';

const CatalogRange = ({ title, array2 }) => {
  const {category, changeCategory } = React.useContext(CustomContext);

  // const handleChange = (event) => {
  //   setCategory(event.target.value);
  // };

  return (
    <FormControl>
      <FormLabel
        sx={{
          fontSize: 22,
          textAlign: 'center',
          color: '#000000',
          fontWeight: 400,
          marginTop: 2,
          marginBottom: 2,
          fontFamily: 'Comfortaa',
          lineHeight: 'normal',
        }}
        id="demo-radio-buttons-group-label"
      >
        {title}
      </FormLabel>

      <RadioGroup

        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={category}
        onChange={changeCategory}
      >
        {array2.map((item, id) => (
          <FormControlLabel
            key={id}
            value={item}
            control={<Radio />}
            label={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CatalogRange;
