import React, { useEffect } from "react";
import { Grid, Typography, useTheme, Button } from "@mui/material";
import Link from "next/link";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles } from "@mui/styles";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": {
      backgroundColor: "#FFEAD5",
      color: "#000000",
      transition: "all 0.4s ease-in-out",
    },
  },
  mainButton: {
    "&:hover": {
      backgroundColor: "#559E97",
      color: "#FFFFFF",
      transition: "all 0.4s ease-in-out",
    },
  },
}));

const WhoWeAreSection = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const {
    background,
    title,
    subTitle,
    btnColor,
    arrowColor,
    subTitleColor,
    titleColor,
    aboutSection,
  } = props;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SectionContainer background={background}>
      <Section>
        <Grid
          container
          sx={{
            pt: { xs: 5, md: 15 },
            pb: { xs: 4, md: 10 },
            flexDirection: { xs: "column", md: "row" },
          }}>
          <Grid item md={2} sx={{ mb: { xs: 2 } }}>
            <Typography
              variant="title"
              color={titleColor}
              sx={{
                fontSize: "2.4rem",
              }}>
              {title}
            </Typography>
          </Grid>
          <Grid item md={7} xs={12} sx={{ mb: { xs: 4 } }}>
            <Typography
              color={subTitleColor}
              sx={{ fontSize: { md: "1.4rem", xs: "1rem" } }}
              data-aos="zoom-in"
              data-aos-duration="3000">
              {subTitle}
            </Typography>
          </Grid>
          <Grid xs={1}></Grid>
          <Grid
            item
            md={2}
            xs={12}
            sx={{
              display: { xs: "flex", md: "block" },
              justifyContent: "flex-end",
            }}>
            <Link href="/about-us" passHref>
              <Button
                size="large"
                variant="contained"
                sx={{
                  background: btnColor,
                  px: { xs: 3, md: 5 },
                  py: { xs: 2.6, md: 4.4 },
                }}
                className={
                  aboutSection === true ? classes.button : classes.mainButton
                }
                data-aos="fade-left"
                data-aos-duration="2000">
                <ArrowForwardIosIcon
                  color={arrowColor}
                  sx={{
                    width: { xs: 30, md: 60 },
                    height: { xs: 30, md: 60 },
                  }}
                />
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Section>
    </SectionContainer>
  );
};

export default WhoWeAreSection;
