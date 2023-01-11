import { Grid, Typography, useTheme, Button, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import ThinkCard from "./UI/thinkCard";

const InsightsLinks = ({
  heading,
  description,
  topLinks,
  backgroundColor,
  headingColor,
  descriptionColor,
  mainGridStyle,
  titleColor,
  subTitleColor,
  py
}) => {
  const theme = useTheme();
  const array = [
    { number: "01", links: "ALL INSIGHTS" },
    { number: "02", links: "CREATIVE" },
    { number: "03", links: "INSPIRATION" },
    { number: "04", links: "STRATEGY" },
    { number: "05", links: "TECHNOLOGY" },
  ];

  return (
    <SectionContainer
      sx={{ py: { md: 10, xs: 8 }, backgroundColor: backgroundColor }}>
      <Section>
        {topLinks && (
          <Box sx={{ flexGrow: 1, mb: { md: 10, xs: 6 } }}>
            <Grid
              container
              spacing={{ xs: 3, md: 3 }}
              columns={{ xs: 12, md: 10 }}>
              {array.map(({ number, links }, index) => (
                <Grid item xs={6} md={2} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}>
                    <Typography
                      color={theme.color.greyOne}
                      sx={{
                        fontSize: "0.8rem !important",
                        marginRight: 2,
                      }}>
                      {number}
                    </Typography>
                    <Typography
                      color={theme.color.darkBackground}
                      sx={{
                        fontSize: "1.2rem !important",
                      }}>
                      {links}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        <Grid container spacing={4} sx={mainGridStyle}>
          <Grid item md={6} xs={12}>
            <Typography
              variant="title"
              color={headingColor}
              sx={{
                fontSize: { xs: "2.2rem", md: "3rem" },
                textTransform: "uppercase",
              }}>
              {heading}
            </Typography>
            <Typography
              color={descriptionColor}
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                mt: 6,
              }}>
              {description}
            </Typography>
          </Grid>
          <Grid item md={1} />
          <Grid item md={5} xs={12}>
            <ThinkCard
              src="/assets/thinkTwo.png"
              imageTitle="Lorem Ipsum"
              title="Supply chain transformation on the cloud"
              titleColor={titleColor}
              subTitle="Discover how embracing the cloud can lead to interconnected, intelligent
                        and innovative supply chains."
              subTitleColor={subTitleColor}
            />
          </Grid>
        </Grid>
      </Section>
    </SectionContainer>
  );
};

export default InsightsLinks;
