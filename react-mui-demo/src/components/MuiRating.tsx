import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Rating, Stack } from '@mui/material'
import { useEffect, useState } from 'react'

export const MuiRating = () => {
    // setting a value in (null), will make it unchangeable, best suited for displaying a rating to a user.
    const [value, setValue] = useState<number | null>(null)

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }

    useEffect(() => {
        console.log(value)
    }, [value])

    return (

        <Stack spacing={2}>
            <Rating
                value={value}
                onChange={handleChange}
                precision={0.5}
                size='large'
                icon={<FavoriteIcon fontSize='inherit' color='error' />}
                emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
                // highlightSelectedOnly will only set the select rating, not the ones before it. used to select a :) or a :(
                highlightSelectedOnly
            />
        </Stack>


    )

}   
