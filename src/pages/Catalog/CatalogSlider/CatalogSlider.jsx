import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import debounce from "@mui/material/utils/debounce";

import { CustomContext } from '../../../utils/context';


const  CatalogSlider = () =>{

	const { slider, setSlider } = React.useContext(CustomContext);

    const handleChange = (event,newValue) => {
        setSlider(newValue);
    };

    return (
        <Box sx={{ width: '70%' }}>
            <Slider

                defaultValue={slider}
                onChange={debounce(handleChange, 1000)}
                valueLabelDisplay="auto"
                step={100}
                min={0}
                max={3000}
            />
        </Box>
    );
}

export default CatalogSlider
