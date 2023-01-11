import React, { useEffect } from "react";
import { Grid, Typography, useTheme, Button } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import AOS from "aos";
import "aos/dist/aos.css";

const OurClients = () => {
  const theme = useTheme();
  const array = ["/assets/logoOne.png", "/assets/logoTwo.png"];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SectionContainer background={theme.color.white}>
      <Section sx={{ pt: "4rem", pb: "4rem" }}>
        <Typography
          variant="title"
          color={theme.color.darkBackground}
          sx={{
            fontSize: "2rem",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            mb: "2rem",
          }}
          data-aos="fade-down"
          data-aos-duration="2000">
          OUR CLIENTS
        </Typography>
        <Box sx={{ flexGrow: 1, mt: 6 }}>
          <Grid
            container
            spacing={{ xs: 3, md: 3 }}
            columns={{ xs: 12, md: 10 }}>
            {array.map((imgItem, index) => (
              <Grid
                item
                xs={6}
                md={2}
                key={index}
                data-aos="zoom-out"
                data-aos-duration="2000">
                <Box
                  sx={{
                    backgroundColor: "#F7F7F8",
                    pt: "1.2rem",
                    px: "2rem",
                    pb: "0.4rem",
                  }}>
                  <Image src={imgItem} height="48px" width="154px" alt="" />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Section>
    </SectionContainer>
  );
};

export default OurClients;
