import { Box, Divider, Grid, Paper, Stack } from "@mui/material";

export const MuiLayout = () => {
    return (
        <Paper
            sx={{
                padding: '32px',
                backgroundColor: 'orange',
            }}
            elevation={8}
        >
            <Stack
                sx={{
                    border: '1px solid'
                }}
                direction='row' // row and row-reverse and column reverse
                divider={<Divider orientation='vertical' flexItem />}
                spacing={2} // 2 x 8px = 16px
            >
                <Box
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        height: '100px',
                        width: '100px',
                        padding: '16px',
                        '&:hover': {
                            backgroundColor: 'primary.light',
                        }
                    }}>
                    I'm a box
                </Box>
                <Box
                    display='flex'
                    height='100px'
                    width='100px'
                    bgcolor='success.light'
                    p={2}
                > I too am a Box
                </Box >
            </Stack>
            <Grid container my={4} spacing={2}>
                {/* can also do rowSpacing and columnSpacing to set those different vs just using spacing */}
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' padding='10px'>Item 1</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' padding='10px'>Item 2</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' padding='10px'>Item 3</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' padding='10px'>Item 4</Box>
                </Grid>
            </Grid>
            <Grid container my={4} rowSpacing={2} columnSpacing={4}>
                <Grid item xs>
                    <Box bgcolor='primary.light' padding='10px'>Item 1</Box>
                </Grid>
                <Grid item xs='auto'>
                    <Box bgcolor='primary.light' padding='10px'>Item 2</Box>
                </Grid>
                <Grid item xs={8}>
                    <Box bgcolor='primary.light' padding='10px'>Item 3</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor='primary.light' padding='10px'>Item 4</Box>
                </Grid>
            </Grid>
        </Paper>
    )
}