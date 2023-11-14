import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import debounce from "@mui/material/utils/debounce";
import { useSelector, useDispatch } from 'react-redux';

import {setSlider} from '../../../redux/slices/catalogSlice'


const  CatalogSlider = () =>{

  const dispatch = useDispatch();

	const slider = useSelector((state) => state.catalogSlice.slider);

    const handleChange = (event) => {
        dispatch(setSlider(event.target.value));
    };

    return (
        <Box sx={{ width: '70%' }}>
            <Slider

                defaultValue={slider}
                onChange={debounce(handleChange, 1000)}
                valueLabelDisplay="auto"
                step={100}
                min={0}
                max={4000}
            />
        </Box>
    );
}

export default CatalogSlider
