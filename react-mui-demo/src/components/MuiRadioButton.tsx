import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import { useEffect, useState } from 'react'



export const MuiRadioButton = () => {

    const [value, setValue] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        console.log(value)
    }, [value])

    return (

        <Box>
            <FormControl error required>
                <FormLabel id='job-exp-group-label'>
                    Year of experience
                </FormLabel>
                <RadioGroup
                    name='job-exp-group'
                    value={value}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel control={<Radio size='small' color='secondary' />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio size='medium' color='error' />} label='3-5' value='3-5' />
                    <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
                </RadioGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>
        </Box>

    )
}
