import * as React from "react";
import {
  Typography,
  useTheme,
  Button,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Card from "@mui/material/Card";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

const CategoryCard = (props) => {
  const theme = useTheme();
  const {
    src,
    imageTitle,
    category,
    categoryColor,
    title,
    titleColor,
    subTitle,
    subTitleColor,
    sectionExtraStyles,
    gridStyle,
    image,
    categoryText,
    button,
    share,
    line,
  } = props;
  return (
    <SectionContainer sx={sectionExtraStyles}>
      <Section>
        <Grid container sx={gridStyle}>
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            {image && (
              <Box>
                <Image src={src} alt="think" width={579} height={450} />
                <Typography
                  color={theme.color.white}
                  variant="body2"
                  sx={{
                    py: 2,
                    px: 2,
                    backgroundColor: theme.color.grey,
                    position: "absolute",
                    bottom: 8,
                    left: 0,
                    width: { md: "98.5%", xs: "100%" },
                    fontSize: { xs: "1rem" },
                  }}>
                  {imageTitle}
                </Typography>
              </Box>
            )}
            {/* {video && } */}
          </Grid>
          <Grid item xs={12} md={1} />
          <Grid item xs={12} md={5}>
            {categoryText && (
              <Typography
                color={categoryColor}
                sx={{
                  mb: "0.8rem",
                  fontSize: "1.2rem !important",
                  mt: { xs: 4 },
                }}>
                {category}
              </Typography>
            )}
            <Typography
              color={titleColor}
              sx={{
                mb: "2rem",
                fontSize: { md: "2.4rem !important", xs: "1.4rem" },
                fontWeight: theme.fontWeightMedium,
                mt: { xs: 3 },
              }}>
              {title}
            </Typography>
            <Typography
              color={subTitleColor}
              sx={{
                fontSize: { md: "1.2rem !important", xs: "1rem" },
                mb: "1.4rem",
              }}>
              {subTitle}
            </Typography>
            {button && (
              <Link href="/about" passHref>
                <Button
                  variant="text"
                  sx={{
                    color: theme.color.yellow,
                    fontSize: "1rem",
                    p: 0,
                    textTransform: "initial",
                  }}>
                  Read more..
                </Button>
              </Link>
            )}
          </Grid>
        </Grid>
        {line && <Divider sx={{ color: "#B0B0B0", mt: { md: 10, xs: 0 } }} />}
        {share && (
          <Grid container>
            <Grid item xs={12} md={7}></Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  mt: 4,
                  mb: { md: 4 },
                  backgroundColor: "#F7F7F8",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                }}>
                <Typography
                  color={theme.color.darkBackground}
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.4rem" },
                    mr: 3,
                  }}>
                  Share
                </Typography>
                <FacebookIcon
                  fontSize="small"
                  color={theme.color.grey}
                  sx={{ mr: 3 }}
                />
                <TwitterIcon
                  fontSize="small"
                  color={theme.color.grey}
                  sx={{ mr: 3 }}
                />
                <LinkedInIcon
                  fontSize="small"
                  color={theme.color.grey}
                  sx={{ mr: 3 }}
                />
                <MailIcon
                  fontSize="small"
                  color={theme.color.grey}
                  sx={{ mr: 3 }}
                />
              </Box>
            </Grid>
          </Grid>
        )}
      </Section>
    </SectionContainer>
  );
};

export default CategoryCard;
