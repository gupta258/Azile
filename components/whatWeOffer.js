import React, { useState } from "react";
import { Typography, useTheme } from "@mui/material";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import Accordian from "./UI/accordian";

const WhatWeOffer = () => {
  const theme = useTheme();
  return (
    <SectionContainer background={theme.color.darkBackground}>
      <Section sx={{ pt: "3rem", pb: "3rem" }}>
        <Typography
          variant="title"
          color={theme.color.white}
          sx={{
            fontSize: "2.4rem",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            mb: "2rem",
          }}>
          WHAT WE OFFER
        </Typography>
        <Accordian
          title="SAAS DEVELOPMENT"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          linkOne="MVP Development"
          linkTwo="MVP Development"
          linkThree="MVP Development"
          linkFour="MVP Development"
          linkFive="MVP Development"
          linkSix="MVP Development"
          linkSeven="MVP Development"
          linkEight="MVP Development"
        />
        <Accordian
          title="CONSULTING"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          linkOne="MVP Development"
          linkTwo="MVP Development"
          linkThree="MVP Development"
          linkFour="MVP Development"
          linkFive="MVP Development"
          linkSix="MVP Development"
          linkSeven="MVP Development"
          linkEight="MVP Development"
        />
        <Accordian
          title="APPLICATION SERVICES"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          linkOne="MVP Development"
          linkTwo="MVP Development"
          linkThree="MVP Development"
          linkFour="MVP Development"
          linkFive="MVP Development"
          linkSix="MVP Development"
          linkSeven="MVP Development"
          linkEight="MVP Development"
        />
        <Accordian
          title="OUTSOURCING"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          linkOne="MVP Development"
          linkTwo="MVP Development"
          linkThree="MVP Development"
          linkFour="MVP Development"
          linkFive="MVP Development"
          linkSix="MVP Development"
          linkSeven="MVP Development"
          linkEight="MVP Development"
        />
        <Accordian
          title="GROWTH"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          linkOne="MVP Development"
          linkTwo="MVP Development"
          linkThree="MVP Development"
          linkFour="MVP Development"
          linkFive="MVP Development"
          linkSix="MVP Development"
          linkSeven="MVP Development"
          linkEight="MVP Development"
        />
      </Section>
    </SectionContainer>
  );
};

export default WhatWeOffer;
