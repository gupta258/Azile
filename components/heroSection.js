import React, { useEffect } from "react";
import { Grid, Typography, useTheme, Button } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import { makeStyles } from "@mui/styles";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": {
      backgroundColor: "#559E97",
      color: "#ffffff",
      transition: "all 0.4s ease-in-out",
    },
  },
}));

const HeroSection = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SectionContainer background={theme.color.darkBackground}>
      <Section sx={{ height: { md: "90vh", xs: "100%" } }}>
        <Grid
          container
          sx={{
            py: { md: 5, xs: 2 },
            flexDirection: { xs: "column-reverse", md: "row" },
          }}>
          <Grid
            item
            xs={12}
            md={5}
            data-aos="fade-right"
            data-aos-duration="2000">
            <Typography
              variant="title"
              color="primary.contrastText"
              sx={{ fontSize: { md: "4rem", xs: "2rem" } }}>
              CHANGE IS POSSIBLE TOGETHER,
            </Typography>
            <Typography
              color="primary.contrastText"
              sx={{ mt: 2, fontSize: { xs: "1rem", md: "1.4rem" } }}>
              Helping you realize your transformation through the power of
              people, technology and innovation.
            </Typography>
            <Link href="/about-us" passHref>
              <Button
                size="large"
                variant="contained"
                sx={{
                  background: "#FFEAD5",
                  color: theme.color.black,
                  px: 8,
                  mt: 5,
                  mb: { xs: 5 },
                }}
                className={classes.button}>
                Explore
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                border: `3.5px solid ${theme.color.green}`,
                borderRadius: "10px",
                position: "relative",
                height: { md: 500, xs: 200 },
                width: { md: 500 * 1.7782, xs: 200 * 1.7782 },
                right: { md: "-100px", xs: "-25px" },
                mb: { xs: 4 },
                right: { md: "-100px", xs: "-25px" },
              }}>
              <Box
                position="absolute"
                left={-28}
                top="10%"
                border={`2px solid ${theme.color.green}`}
                borderRadius="10px"
                sx={{
                  height: "80%",
                  width: "100%",
                }}
                data-aos="zoom-in"
                data-aos-duration="3000"
              />
              <Image
                src="/assets/landing-hero.png"
                alt="dashboard"
                layout="fill"
                style={{
                  borderRadius: "10px",
                }}
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </Box>
          </Grid>
        </Grid>
      </Section>
    </SectionContainer>
  );
};

export default HeroSection;
