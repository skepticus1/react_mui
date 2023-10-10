import { Box, MenuItem, TextField } from "@mui/material"
import { useState } from "react"


export const MuiSelect = () => {
    const [country, setCountry] = useState('')
    const [countries, setCountries] = useState<string[]>([])

    // console.log({country})
    console.log({ countries })

    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }
    const handleCountriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }

    return (
        <Box width='250px'>
            <h4>Single Selection</h4>
            <TextField
                label='select country'
                select
                value={country}
                onChange={handleCountryChange}
                fullWidth
            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Austraila</MenuItem>
            </TextField>
            <h4>Multi Selection</h4>
            <TextField
                label='select country'
                select
                value={countries}
                onChange={handleCountriesChange}
                fullWidth
                SelectProps={{
                    multiple: true
                }}
                size='small'
                color='secondary'
                helperText='Please select your country'
                error
                required

            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Austraila</MenuItem>
            </TextField>
        </Box>
    )
}
