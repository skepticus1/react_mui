import { InputAdornment, Stack, TextField } from "@mui/material"
import { useState } from "react"

export const MuiTextField = () => {
    const [value, setValue] = useState('')

  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='default' />
            <TextField label='outline' variant='outlined' />
            <TextField label='filled' variant='filled' />
            <TextField label='standard' variant='standard' />
        </Stack>
        
        <Stack direction='row' spacing={2}>
            <TextField label='small secondary' size='small' color='secondary' />
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField 
                label='required' 
                size='small' 
                color='secondary' 
                required
                helperText='this is helper text '  
            />
            <TextField 
                label='password'
                type='password' 
                size='small' 
                color='secondary' 
                required
                helperText='this is helper text '
            />
            <TextField label='disabled' disabled />
            <TextField label='read only' InputProps={{ readOnly: true}} />
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField 
                label='Amount' 
                InputProps={{
                    startAdornment: <InputAdornment position="start" >$</InputAdornment>,
                }}
            />
            <TextField
                label='Weight'
                InputProps={{
                    endAdornment: <InputAdornment position="end" >Kg</InputAdornment>,
                }}
            />
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField 
                label='Form Input' 
                required value={value} 
                onChange={e => setValue(e.target.value)}
                error={!value}
                helperText={!value ? 'Required': 'Do not share your password'}    
            />
        </Stack>
    </Stack>
    )
}
