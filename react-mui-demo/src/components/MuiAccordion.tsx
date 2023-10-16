import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"

export const MuiAccordion = () => {
    return (
        <Accordion>
            <AccordionSummary id='panel1-header' expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptas? Velit fuga error obcaecati commodi, ut at, qui vel tempora adipisci consequuntur a dolor quia autem, illo aliquam unde delectus.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}
