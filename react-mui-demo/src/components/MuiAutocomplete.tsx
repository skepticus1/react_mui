import { Autocomplete, Stack, TextField } from "@mui/material"
import { useEffect, useState } from "react"

type Skill = {
    id: number,
    label: string,
}

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']

const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}))

export const MuiAutocomplete = () => {

    const [value, setValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skill | null>(null)

    useEffect(() => {
        console.log(value)
        console.log(skill)
    }, [value, skill])

    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete
                options={skills}
                renderInput={(params) => <TextField {...params} label='Skills' />}
                value={value}
                onChange={(event: any, newValue: string | null) => setValue(newValue)}
                freeSolo
            // freeSolo allows for any typed in input to be saved.
            />
            <Autocomplete
                options={skillsOptions}
                renderInput={(params) => <TextField {...params} label='Skills' />}
                value={skill}
                onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
            />
        </Stack>
    )
}
