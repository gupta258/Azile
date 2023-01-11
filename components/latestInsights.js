import React, { useEffect } from "react";
import { Grid, Typography, useTheme, Button, Box } from "@mui/material";
import Link from "next/link";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import ThinkCard from "./UI/thinkCard";
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

const LatestInsights = ({
  backgroundColor,
  mainTitle,
  mainTitleColor,
  array,
  button,
  titleColor,
  subTitleColor,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SectionContainer
      sx={{ py: { md: 10, xs: 8 }, backgroundColor: backgroundColor }}>
      <Section>
        <Typography
          variant="title"
          color={mainTitleColor}
          sx={{
            fontSize: "2.4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { md: 8, xs: 6 },
            textTransform: "uppercase",
            textAlign: "center",
          }}
          data-aos="fade-down"
          data-aos-duration="2000">
          {mainTitle}
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 3, md: 3 }}
            columns={12}
            data-aos="zoom-in"
            data-aos-duration="2000">
            {array.map(({ src, imageTitle, title, subTitle }, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{}}>
                  <ThinkCard
                    src={src}
                    imageTitle={imageTitle}
                    title={title}
                    subTitle={subTitle}
                    titleColor={titleColor}
                    subTitleColor={subTitleColor}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
          {button && (
            <Grid
              item
              xs={12}
              md={12}
              sx={{ textAlign: "center" }}
              data-aos="fade-up"
              data-aos-duration="2000">
              <Link href="/insights" passHref>
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    background: "#FFEAD5",
                    color: theme.color.black,
                    px: 8,
                    mt: 8,
                  }}
                  className={classes.button}>
                  View More
                </Button>
              </Link>
            </Grid>
          )}
        </Box>
      </Section>
    </SectionContainer>
  );
};

export default LatestInsights;
