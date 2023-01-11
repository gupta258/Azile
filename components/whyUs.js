import React, { useEffect } from "react";
import { Grid, Typography, useTheme, Button } from "@mui/material";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import MediaCard from "./UI/card";
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

const WhyUs = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SectionContainer>
      <Section sx={{ py: "5rem" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            data-aos="fade-right"
            data-aos-duration="2000">
            <Typography
              variant="title"
              color={theme.color.black}
              sx={{
                fontSize: {md: "2.4rem", xs: "2rem"},
              }}>
              WHY US
            </Typography>
            <Typography
              color={theme.color.grey}
              sx={{ fontSize: { md: "1.4rem", xs: "0.8rem" }, mt: {md: "1.4rem", xs: "0.5rem"} }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              viverra magna aliquam, turpis adipiscing sem rhoncus, sit. Diam
              turpis felis in enim, in tristique.
            </Typography>
            <Button
              size="large"
              variant="contained"
              sx={{
                background: "#FFEAD5",
                px: 6,
                py: 1.5,
                color: theme.color.black,
                mt: "2rem",
                display: {md: "block", xs: "none"},
              }}
              className={classes.button}>
              Schedule a call
            </Button>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={8}
            spacing={1}
            sx={{ pl: { md: 15, xs: 0 }, pt: { md: 0, xs: "1.5rem" } }}>
            <Grid
              item
              xs={6}
              sx={{ p: { md: 6, xs: 0 } }}
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="2000">
              <MediaCard
                src="/assets/strategy.png"
                title="Strategy"
                subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt viverra magna aliquam"
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ p: { md: 6, xs: 0 } }}
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000">
              <MediaCard
                src="/assets/consult.png"
                title="Consulting"
                subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt viverra magna aliquam"
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ p: { md: 6, xs: 0 } }}
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="2000">
              <MediaCard
                src="/assets/collab.png"
                title="Collaboration"
                subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt viverra magna aliquam"
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ p: { md: 6, xs: 0 } }}
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000">
              <MediaCard
                src="/assets/goal.png"
                title="Goal"
                subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt viverra magna aliquam"
              />
            </Grid>
            <Button
              size="large"
              variant="contained"
              sx={{
                background: "#FFEAD5",
                px: 6,
                py: 1.5,
                color: theme.color.black,
                mt: "2rem",
                display: {md: "none", xs: "flex"},
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "50px",
                marginRight: "50px"
              }}
              className={classes.button}>
              Schedule a call
            </Button>
          </Grid>
        </Grid>
      </Section>
    </SectionContainer>
  );
};

export default WhyUs;
