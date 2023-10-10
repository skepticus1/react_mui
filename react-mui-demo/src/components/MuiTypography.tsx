import { Typography } from "@mui/material";

export const MuiTypography = () => {
    return (
        <>
            <Typography variant='h1'>h1</Typography>
            <Typography variant='h2'>h2</Typography>
            <Typography variant='h3'>h3</Typography>
            <Typography variant='h4' component='h1' gutterBottom>h4 html element is h1, gutterBottom, has a bottom margin</Typography>
            <Typography variant='h5'>h5</Typography>
            <Typography variant='h6'>h6</Typography>
            <Typography variant='subtitle1'>subtitle 1 (h6 element)</Typography>
            <Typography variant='subtitle2'>subtitle 2 (h6 element)</Typography>
            <Typography variant='body1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nostrum quaerat nesciunt, error mollitia accusantium voluptas praesentium exercitationem commodi ipsam expedita, aliquam nulla eum, officiis pariatur provident. Earum, animi laudantium.</Typography>
            <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nulla sint nemo alias, est fugit nisi eius facilis voluptas voluptates laboriosam enim officiis iure, animi ipsum? Ut dolorum eos repellat.</Typography>
        </>
    )
}