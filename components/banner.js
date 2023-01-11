import { Grid, Typography, useTheme, Button } from "@mui/material";
import Link from "next/link";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // mainContainer: {
  //   "&:hover": {
  //     backgroundColor: "#00B6CF",
  //   },
  // },
  button: {
    "&:hover": {
      backgroundColor: "#559E97",
      color: "#ffffff",
      transition: "all 0.4s ease-in-out",
    },
  },
}));

const Banner = ({
  background,
  sectionStyle,
  gridContainerExtraStyle,
  textColor,
  leftTitle,
  rightTitle,
  leftSubTitle,
  rightSubTitle,
  buttonText,
  buttonBackgroundColor,
  buttonTextColor,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <SectionContainer background={background} sx={sectionStyle}>
      <Section>
        <Grid container spacing={4} sx={gridContainerExtraStyle}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ py: { xs: 8 } }}
            className={classes.mainContainer}>
            <Typography
              variant="title"
              color={textColor}
              sx={{ fontSize: { xs: "3rem", md: "2.4rem" } }}>
              {leftTitle}
            </Typography>
            <Typography
              color={textColor}
              sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>
              {leftSubTitle}
            </Typography>
            <Link href="/about-us" passHref>
              <Button
                size="large"
                variant="contained"
                sx={{
                  background: buttonBackgroundColor,
                  color: buttonTextColor,
                  px: 6,
                  mt: 5,
                }}
                className={classes.button}>
                {buttonText}
              </Button>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ py: { xs: 8 } }}
            className={classes.mainContainer}>
            <Typography
              variant="title"
              color={textColor}
              sx={{ fontSize: { xs: "3rem", md: "2.4rem" } }}>
              {rightTitle}
            </Typography>
            <Typography
              color={textColor}
              sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>
              {rightSubTitle}
            </Typography>
            <Link href="/about-us" passHref>
              <Button
                size="large"
                variant="contained"
                sx={{
                  background: buttonBackgroundColor,
                  color: buttonTextColor,
                  px: 6,
                  mt: 5,
                }}
                className={classes.button}>
                {buttonText}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Section>
    </SectionContainer>
  );
};

export default Banner;
