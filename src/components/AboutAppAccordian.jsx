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
              experience and to demonstrate what Robert can do. Initially, a
              context API was installed but not implemented due to lack of
              requirement for it. We can revisit this in the future.
            </Typography>
            <Typography variant="h4" gutterBottom paragraph>
              Hopefully you will enjoy the app by downloading the repo or when
              the app becomes public. I have been using the app myself and am
              constantly tweaking the prompts for better accuracy.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1b-content"
            id="panel1b-header"
          >
            <Typography variant="h4">FAQ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h4" gutterBottom paragraph>
              What resouces do we use to build this app?
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }} paragraph>
              It is built with React, Material UI, React Query, and
              Styled-Components
            </Typography>
            <Typography variant="h4" gutterBottom paragraph>
              How to install this app on your local machine?
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }} paragraph>
              Please check the README.md file in the repo.
            </Typography>
            <Typography variant="h4" gutterBottom paragraph>
              I am not getting perfect results. What should I do?
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }} paragraph>
              The AI generation is constantly being tweaked and depending on
              what you use in the prompts, the AI may generate other ideas that
              are not as accurate. Please try to be as specific as possible.
            </Typography>
            <Typography variant="h4" gutterBottom paragraph>
              I want to use more prompts but there is no more characters
              allowed. What should I do?
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }} paragraph>
              Unfortunately with this AI service, there is a cost to using more
              resources. We are already providing the most verbose and expensive
              and AI generator so please try to use the resources we have
              provided. We are also open to comments.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2c-content"
            id="panel2c-header"
          >
            <Typography variant="h4">Future Updates</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h4" gutterBottom paragraph>
              What are future functionalities for the app?
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }} paragraph>
              We will set functionality to track how you subjectively rate the
              AI responses and also how frequesntly you generate content. We
              will also allow better categorization of the content through tags.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography variant="h4">Version Log</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h4" sx={{ mb: 2 }} paragraph>
              In the future we will document the version log here.
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
