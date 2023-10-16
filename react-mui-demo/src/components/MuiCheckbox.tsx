import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material"
import { useState } from 'react'

export const MuiCheckbox = () => {

    const [acceptTnC, setAcceptTnC] = useState(false)
    const [skills, setSkills] = useState<string[]>([])

    //console.log({ acceptTnC })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }

    console.log({ skills })

    // if the value is present, remove it, if not add it.
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        // console.log(index)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter(skill => skill !== event.target.value))
        }
    }

    return (

        <Box>
            <Box>
                <FormControlLabel
                    label='I accept terms and conditions'
                    control={<Checkbox checked={acceptTnC}
                        onChange={handleChange} />}
                />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={acceptTnC}
                    onChange={handleChange}
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            label='HTML'
                            control={<Checkbox
                                checked={skills.includes('html')}
                                onChange={handleSkillChange}
                                value='html'
                            />}
                        />
                        <FormControlLabel
                            label='CSS'
                            control={<Checkbox
                                checked={skills.includes('css')}
                                onChange={handleSkillChange}
                                value='css'
                            />}
                        />
                        <FormControlLabel
                            label='JS'
                            control={<Checkbox
                                checked={skills.includes('js')}
                                onChange={handleSkillChange}
                                value='js'
                            />}
                        />

                    </FormGroup>
                </FormControl>
            </Box>
        </Box>

    )

}
