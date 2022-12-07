import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

const AboutAppAccordian = () => {
  return (
    <>
      <AccordionContainer>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h4">Why Midium?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h4" gutterBottom paragraph>
              Built by Robert So, Midium is a blogging platform that both
              demonstrate his skills and provide a service to other developers
              that want to show off their work but are not social LinkedIn
              butterflies.
            </Typography>
            <Typography variant="h4" gutterBottom paragraph>
              Midium uses a number of technologies to provide a seamless user
              experience and to demonstrate what Robert can do. Consequently, we
              can build this app without a context API. Actually, though Zustand
              has been used instead of Redux, just for a different flavor, the
              use case of this is exactly the same and if you can build it with
              Zustand, you can easily replace with Redux.
            </Typography>
            <Typography variant="h4" gutterBottom paragraph>
              Midium uses a number of technologies to provide a seamless user
              experience and to demonstrate what Robert can do. Consequently, we
              can build this app without a context API. Actually, though Zustand
              has been used instead of Redux, just for a different flavor, the
              use case of this is exactly the same and if you can build it with
              Zustand, you can easily replace with Redux.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1b-content"
            id="panel1b-header"
          >
            <Typography variant="h4">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2c-content"
            id="panel2c-header"
          >
            <Typography variant="h4">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography variant="h4">Disabled Accordion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </AccordionContainer>
    </>
  );
};

export default AboutAppAccordian;

const AccordionContainer = styled.div`
  width: 100%;
  padding: 32px 8px 8px 8px;
  box-sizing: border-box;
`;
