import React, { useEffect } from "react";
import { Grid, Typography, useTheme, Button } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import AppBar from "./UI/appbar";
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

const CustomHeroSection = ({
  backgroundImage,
  title,
  subTitle,
  button,
  description,
  containerExtraStyle,
  sectionExtraStyles,
  leftGridSize,
  rightGrid,
  date,
  readingTime,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={[
        {
          backgroundImage: backgroundImage,
          minHeight: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        },
        containerExtraStyle,
      ]}>
      <AppBar background="transparent" />
      <SectionContainer background="transparent" sx={{ mt: { md: 8, xs: 0 } }}>
        <Section sx={sectionExtraStyles}>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={leftGridSize}
              data-aos="fade-right"
              data-aos-duration="2000">
              <Typography
                color={theme.color.yellow}
                sx={{
                  fontSize: { md: "1rem", xs: "0.8rem" },
                  textDecorationWidth: 2,
                  textDecorationColor: theme.color.yellow,
                  textDecorationLine: "underline",
                  textUnderlineOffset: "14px",
                  mb: 2,
                }}>
                {title}
              </Typography>
              <Typography
                variant="title"
                color={theme.color.white}
                sx={{
                  textTransform: "uppercase",
                  fontSize: { md: "3.6rem", xs: "2rem" },
                }}>
                {subTitle}
              </Typography>
              {date && (
                <Typography
                  color={theme.color.white}
                  sx={{
                    fontSize: "1rem !important",
                  }}>
                  {readingTime}
                </Typography>
              )}
              {button && (
                <Box sx={{ mt: { md: 10, xs: 2 }, display: { md: "block", xs: "none" }, }}>
                  <Link href="/about" passHref>
                    <Button
                      size="large"
                      variant="contained"
                      sx={{
                        background: "#FFEAD5",
                        px: 6,
                        py: 1.5,
                        color: theme.color.black,
                        // mt: 35
                      }}
                      className={classes.button}>
                      Discover more
                    </Button>
                  </Link>
                </Box>
              )}
            </Grid>
            {rightGrid && (
              <Grid
                item
                xs={12}
                md={6}
                data-aos="fade-left"
                data-aos-duration="2000">
                <Typography
                  color={theme.color.white}
                  sx={{ fontSize: { md: "1.4rem", xs: "0.8rem" } }}>
                  {description}
                </Typography>
                {button && (
                  <Box
                    sx={{
                      mt: { md: 10, xs: 5 },
                      mb: 5,
                      display: { md: "none", xs: "block" },
                    }}>
                    <Link href="/about" passHref>
                      <Button
                        size="large"
                        variant="contained"
                        sx={{
                          background: "#FFEAD5",
                          px: 4,
                          py: 1.1,
                          color: theme.color.black,
                          // mt: 35
                        }}
                        className={classes.button}>
                        Discover more
                      </Button>
                    </Link>
                  </Box>
                )}
              </Grid>
            )}
          </Grid>
        </Section>
      </SectionContainer>
    </Box>
  );
};

export default CustomHeroSection;
