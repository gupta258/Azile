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
      borderBottom: "1px solid #DFB082",
      transition: "all 0.4s ease-in-out",
    },
  },
}));

const HowWeDoIt = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SectionContainer background={theme.color.darkBackground}>
      <Section sx={{ pt: "3rem", pb: "3rem" }}>
        <Typography
          variant="title"
          color={theme.color.white}
          sx={{
            fontSize: "2rem",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            mb: "2rem",
          }}
          data-aos="fade-down"
          data-aos-duration="2000">
          WHAT WE OFFER
        </Typography>
        <Grid container sx={{ py: { md: 3, xs: 1 } }} spacing={2}>
          <Grid
            item
            xs={12}
            md={8}
            data-aos="fade-right"
            data-aos-duration="2000">
            <Box
              sx={{
                position: "relative",
                height: { md: 400, xs: 200 },
                width: { md: 400 * 1.7782, xs: 200 * 1.7782 },
                left: { md: "-20px", xs: "20px" },
              }}>
              <Box
                position="absolute"
                left={{ xs: -20, md: -34 }}
                top="8%"
                sx={{
                  height: "100%",
                  width: "100%",
                  background: theme.color.green,
                }}
                data-aos="zoom-in"
                data-aos-duration="3000"
              />
              <Image
                src="/assets/howWeDoItOne.png"
                alt="dashboard"
                layout="fill"
                data-aos="fade-right"
                data-aos-duration="2000"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ mt: { xs: 3 } }}
            data-aos="fade-left"
            data-aos-duration="2000">
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { md: "2rem !important", xs: "1.5rem" },
                mb: 2,
              }}>
              Lorem ipsum dolor sit amet,
            </Typography>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: "0.9rem !important",
                mb: 1,
              }}>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Tincidunt viverra magna aliquam,
              turpis adipiscing sem rhoncus, sit. Diam turpis felis in enim, in
              tristique. Amet platea amet aliquam dolor non semper. Tortor, in
              lacus tincidunt fringilla.
            </Typography>
            <Link href="/about" passHref>
              <Button
                size="small"
                variant="text"
                sx={{
                  fontSize: "1rem",
                  color: "#DFB082",
                  p: 0,
                }}
                className={classes.button}>
                Reach us
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            py: { md: 3, xs: 1 },
            mt: { md: 8, xs: 5 },
            display: "flex",
            flexDirection: "row-reverse",
          }}>
          <Grid
            item
            xs={12}
            md={8}
            data-aos="fade-left"
            data-aos-duration="2000">
            <Box
              sx={{
                position: "relative",
                height: { md: 400, xs: 200 },
                width: { md: 400 * 1.7782, xs: 200 * 1.7782 },
                right: { md: "-40px", xs: "-10px" },
              }}>
              <Box
                position="absolute"
                right={{ xs: -20, md: -34 }}
                top="8%"
                sx={{
                  height: "100%",
                  width: "100%",
                  background: theme.color.green,
                }}
                data-aos="zoom-in"
                data-aos-duration="3000"
              />
              <Image
                src="/assets/howWeDoItTwo.png"
                alt="dashboard"
                layout="fill"
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              mt: { xs: 5 },
              position: "relative",
              left: { md: "-50px", xs: "0" },
            }}
            data-aos="fade-right"
            data-aos-duration="2000">
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { md: "2rem !important", xs: "1.5rem" },
                mb: 2,
              }}>
              Lorem ipsum dolor sit amet,
            </Typography>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: "0.9rem !important",
                mb: 1,
              }}>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Tincidunt viverra magna aliquam,
              turpis adipiscing sem rhoncus, sit. Diam turpis felis in enim, in
              tristique. Amet platea amet aliquam dolor non semper. Tortor, in
              lacus tincidunt fringilla.
            </Typography>
            <Link href="/about" passHref>
              <Button
                size="small"
                variant="text"
                sx={{
                  fontSize: "1rem",
                  color: "#DFB082",
                  p: 0,
                }}
                className={classes.button}>
                Reach us
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ py: { md: 3, xs: 1 }, mt: { md: 8, xs: 5 } }}
          spacing={2}>
          <Grid
            item
            xs={12}
            md={8}
            data-aos="fade-right"
            data-aos-duration="2000">
            <Box
              sx={{
                position: "relative",
                height: { md: 400, xs: 200 },
                width: { md: 400 * 1.7782, xs: 200 * 1.7782 },
                left: { md: "-20px", xs: "20px" },
              }}>
              <Box
                position="absolute"
                left={{ xs: -20, md: -34 }}
                top="8%"
                sx={{
                  height: "100%",
                  width: "100%",
                  background: theme.color.green,
                }}
                data-aos="zoom-in"
                data-aos-duration="3000"
              />
              <Image
                src="/assets/howWeDoItThree.png"
                alt="dashboard"
                layout="fill"
                data-aos="fade-right"
                data-aos-duration="2000"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ mt: { xs: 3 } }}
            data-aos="fade-left"
            data-aos-duration="2000">
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { md: "2rem !important", xs: "1.5rem" },
                mb: 2,
              }}>
              Lorem ipsum dolor sit amet,
            </Typography>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: "0.9rem !important",
                mb: 1,
              }}>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Tincidunt viverra magna aliquam,
              turpis adipiscing sem rhoncus, sit. Diam turpis felis in enim, in
              tristique. Amet platea amet aliquam dolor non semper. Tortor, in
              lacus tincidunt fringilla.
            </Typography>
            <Link href="/about" passHref>
              <Button
                size="small"
                variant="text"
                sx={{
                  fontSize: "1rem",
                  color: "#DFB082",
                  p: 0,
                }}
                className={classes.button}>
                Reach us
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Section>
    </SectionContainer>
  );
};

export default HowWeDoIt;
