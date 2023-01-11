import React, { useEffect } from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import ThinkCard from "./UI/thinkCard";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeThink = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SectionContainer sx={{ py: { md: 10, xs: 6 } }}>
      <Section>
        <Typography
          variant="title"
          color={theme.color.darkBackground}
          sx={{
            fontSize: { xs: "3rem", md: "2.4rem" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { md: 6, xs: 4 },
          }}
          data-aos="fade-down"
          data-aos-duration="2000">
          What We Think
        </Typography>
        <Grid container spacing={2} data-aos="zoom-in"
            data-aos-duration="2000">
          <Grid item md={6} xs={12}>
            <ThinkCard
              src="/assets/thinkOne.png"
              imageTitle="Lorem Ipsum"
              title="Supply chain transformation on the cloud"
              subTitle="Discover how embracing the cloud can lead to interconnected, intelligent
                        and innovative supply chains."
              titleColor={theme.color.darkBackground}
              subTitleColor={theme.color.grey}
              mb={{ xs: 4, md: 0 }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <ThinkCard
              src="/assets/thinkTwo.png"
              imageTitle="Lorem Ipsum"
              title="Supply chain transformation on the cloud"
              subTitle="Discover how embracing the cloud can lead to interconnected, intelligent
                        and innovative supply chains."
              titleColor={theme.color.darkBackground}
              subTitleColor={theme.color.grey}
            />
          </Grid>
        </Grid>
      </Section>
    </SectionContainer>
  );
};

export default WhatWeThink;
