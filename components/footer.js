import { Grid, Typography, useTheme, Divider, Box } from "@mui/material";
import Image from "next/image";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";

const Footer = () => {
  const theme = useTheme();
  return (
    <SectionContainer background={theme.color.darkBackground}>
      <Section sx={{ pt: { md: 6, xs: 5 } }}>
        <Grid
          container
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}>
          <Grid item xs={12} md={3}>
            <Image
              height={80 * 0.677}
              width={80}
              src="/assets/brand-logo-white.png"
              alt="brand-logo"
              style={{ marginBottom: 20 }}
            />
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: 300,
              }}>
              Never miss any update for our editors pick, Batch Opening Never
              miss any update for our
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: theme.fontWeightSemiBold,
                mb: 2,
              }}>
              Who we are
            </Typography>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: theme.fontWeightSemiBold,
                mb: 2,
              }}>
              Our Programs
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 2,
              }}>
              nexX
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
              }}>
              School of CTO
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: theme.fontWeightSemiBold,
                mb: 2,
              }}>
              Insights & Thoughts
            </Typography>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: theme.fontWeightSemiBold,
                mb: 2,
              }}>
              Case Studies & Stories
            </Typography>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: theme.fontWeightSemiBold,
                mb: 2,
              }}>
              Hire Developers
            </Typography>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: theme.fontWeightSemiBold,
              }}>
              Careers
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: theme.fontWeightSemiBold,
                mb: 2,
              }}>
              Contact Us
            </Typography>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: theme.fontWeightSemiBold,
                mb: 2,
              }}>
              Location
            </Typography>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: theme.fontWeightSemiBold,
              }}>
              Follow Us
            </Typography>
          </Grid>
        </Grid>
        <Divider
          sx={{
            borderColor: theme.color.white,
            my: 4,
          }}
        />
        <Grid
          container
          sx={{
            flexDirection: { xs: "column", md: "row" },
            mt: { md: 6, xs: 4 },
          }}>
          <Grid item xs={12} md={3}>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                fontWeight: theme.fontWeightSemiBold,
                mb: { md: 3, xs: 2 },
                mt: { md: 1.7 },
              }}>
              What we offer
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 2,
              }}>
              Application Services
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 2,
              }}>
              Web Development
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 2,
              }}>
              eCommerce Development
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
              }}>
              Software Product Development
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: theme.fontWeightSemiBold,
                mb: { md: 3, xs: 2 },
                mt: { xs: 2 },
              }}>
              What we offer
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 2,
              }}>
              CTO as a Servive
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 2,
              }}>
              IT Staff Augmentation
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 2,
              }}>
              Software Development Teams
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
              }}>
              Cross Platform App Development
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: theme.fontWeightSemiBold,
                mb: { md: 3, xs: 2 },
                mt: { xs: 2 },
              }}>
              What we offer
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 2,
              }}>
              Business Strategy
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 2,
              }}>
              AI/ML Development
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 2,
              }}>
              DevOps Consulting & Engineering
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
              }}>
              Technology Consulting
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: theme.fontWeightSemiBold,
                mb: { md: 3, xs: 2 },
                mt: { xs: 2 },
              }}>
              Other Services
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 2,
              }}>
              IoT Devices & Software
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 2,
              }}>
              MVP Development
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 2,
              }}>
              Offshore development
            </Typography>
            <Typography
              color="#717173"
              sx={{
                fontSize: { xs: "1rem", md: "1rem" },
                fontWeight: theme.fontWeightMedium,
              }}>
              Technology Innovation
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: { md: "space-evenly", xs: "space-between" },
          px: { md: 40, xs: 2 },
        }}>
        <Typography
          color="#717173"
          sx={{
            fontSize: { xs: "0.8rem", md: "1rem" },
            fontWeight: theme.fontWeightSemiBold,
            mb: 2,
          }}>
          Copyright
        </Typography>
        <Typography
          color="#717173"
          sx={{
            fontSize: { xs: "0.8rem", md: "1rem" },
            fontWeight: theme.fontWeightSemiBold,
            mb: 2,
          }}>
          All Rights Reserved
        </Typography>
        <Typography
          color="#717173"
          sx={{
            fontSize: { xs: "0.8rem", md: "1rem" },
            fontWeight: theme.fontWeightSemiBold,
            mb: 2,
          }}>
          Legal Policy
        </Typography>
      </Box>
    </SectionContainer>
  );
};

export default Footer;
