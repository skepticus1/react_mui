import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"



export const MuiCard = () => {
    return (

        <Box width='300px'>
            <Card>
                <CardMedia
                    component='img'
                    height='140'
                    image='https://source.unsplash.com/random'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        React
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga totam nihil modi, ex, nam maiores deleniti nulla maxime unde voluptatibus ducimus tenetur aut ullam eligendi pariatur sit et cumque quas.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>
                        Share
                    </Button>
                    <Button>
                        Learn more
                    </Button>
                </CardActions>
            </Card>
        </Box>

    )

}
