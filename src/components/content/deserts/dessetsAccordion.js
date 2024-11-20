import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage({ compound }) {
    const [accordionState, setAccoridonState] = React.useState(false)

    const changeBackGrColorButton = () => setAccoridonState(!accordionState)


    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    className="panel1-header"
                    onClick={changeBackGrColorButton}
                    style={{ backgroundColor: accordionState ? "#c4c0b9" : "#e2dcd0" }}
                >
                    <h2>Состав</h2>
                </AccordionSummary>
                <AccordionDetails style={{
                    fontSize: "1.3rem",
                    backgroundColor: accordionState ? "#e2dcd0" : "#c4c0b9"
                }}>
                    {compound}
                </AccordionDetails>
            </Accordion>


        </div >
    );
}