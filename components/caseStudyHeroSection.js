import { Grid, Typography, useTheme, Button, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import AppBar from "./UI/appbar";

const CaseStudyHeroSection = ({
  title,
  subTitle,
  description,
  containerExtraStyle,
  sectionExtraStyles,
  gridExtraStyles,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={[
        {
          backgroundColor: theme.color.darkBackground,
          minHeight: "100vh",
          position: "relative",
        },
        containerExtraStyle,
      ]}>
      <AppBar background="transparent" />
      <SectionContainer background="transparent">
        <Section sx={sectionExtraStyles}>
          <Grid container spacing={4} sx={gridExtraStyles}>
            <Grid item xs={12} md={5}>
              <Typography
                color={theme.color.yellow}
                sx={{
                  fontSize: "1rem",
                  textDecorationWidth: 2,
                  textDecorationColor: theme.color.yellow,
                  textDecorationLine: "underline",
                  textUnderlineOffset: "14px",
                  my: 4,
                }}>
                {title}
              </Typography>
              <Typography
                variant="title"
                color={theme.color.white}
                sx={{
                  textTransform: "uppercase",
                  fontSize: "3.2rem !important",
                }}>
                {subTitle}
              </Typography>
              <Typography
                color={theme.color.white}
                sx={{
                  fontSize: { md: "1.4rem !important", xs: "1rem" },
                  mt: 4,
                  fontWeight: theme.fontWeightMedium
                }}>
                {description}
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  position: "relative",
                  height: { md: 674, xs: 200 },
                  width: { md: 732 * 1.7782, xs: 200 * 1.7782 },
                  right: { md: "-20px", xs: "-25px" },
                }}>
                <Image
                  src="/assets/caseStudySingle.png"
                  alt="dashboard"
                  layout="fill"
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Section>
      </SectionContainer>
    </Box>
  );
};

export default CaseStudyHeroSection;
