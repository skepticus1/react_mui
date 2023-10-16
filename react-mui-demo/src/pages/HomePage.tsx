import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Grid, Paper, Tab, } from '@mui/material'
import { useState } from 'react'



export const HomePage = () => {

    const [value, setValue] = useState('1')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}>
                        <Tab label="Tab 1" value='1' />
                        <Tab label="Tab 2" value='2' />
                        <Tab label="Tab 3" value='3' />
                    </TabList>
                </Box>
                <TabPanel value='1'>Panel 1</TabPanel>
                <TabPanel value='2'>Panel 2</TabPanel>
                <TabPanel value='3'>Panel 3</TabPanel>

            </TabContext>
        </Box>
    )
}

export default HomePage