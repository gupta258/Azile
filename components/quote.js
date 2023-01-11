import React from "react";
import { Typography, useTheme } from "@mui/material";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";

const Quote = ({ quote, text }) => {
  const theme = useTheme();

  return (
    <SectionContainer background={theme.color.darkBackground}>
      <Section sx={{ py: "5rem" }}>
        {quote && (
          <img
            src="/assets/quote.png"
            style={{
              paddingBottom: "4rem",
              width: "80px",
              height: "140px",
              // "@media (min-width: 600px)": {
              //   paddingBottom: "6rem !important",
              //   width: "50px",
              //   height: "60px",
              // },
            }}
          />
        )}
        <Typography
          color={theme.color.white}
          sx={{
            fontSize: { md: "2.8rem !important", xs: "1.4rem" },
            // mb: { md: "4rem", xs: "2rem" },
          }}>
          {text}
        </Typography>
        {/* <Typography
          color={theme.color.white}
          sx={{
            fontSize: "1.5rem !important",
            fontWeight: theme.fontWeightMedium,
          }}>
          JOHN DOE
        </Typography>
        <Typography
          color={theme.color.white}
          sx={{ fontSize: "1.5rem !important" }}>
          Director at Fuji
        </Typography> */}
      </Section>
    </SectionContainer>
  );
};

export default Quote;
