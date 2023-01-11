import React, { useEffect } from "react";
import { Grid, Typography, useTheme, Button } from "@mui/material";
import Image from "next/image";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { makeStyles } from "@mui/styles";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  swiper: {
    backgroundColor: "#FFEAD5",
  },
}));

const Portfolio = ({
  background,
  title,
  titleColor,
  subTitle,
  subTitleColor,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SectionContainer background={background}>
      <Section>
        <Grid container sx={{ py: { md: 12, xs: 6 } }}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ mb: { xs: 4 } }}
            data-aos="fade-right"
            data-aos-duration="2000">
            <Typography
              variant="title"
              color={titleColor}
              sx={{ fontSize: { md: "2.4rem", xs: "2rem" } }}>
              {title}
            </Typography>
            <Typography
              color={subTitleColor}
              sx={{
                mt: { md: "2rem", xs: "1.4rem" },
                fontSize: { md: "1.2rem", xs: "1rem" },
              }}>
              {subTitle}
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              style={{
                "--swiper-navigation-color": "#555555",
                "--swiper-pagination-color": "#FFEAD5",
              }}>
              <SwiperSlide>
                <Image
                  src="/assets/PortfolioThree.png"
                  alt="portfolioOne"
                  width={364}
                  height={535}
                />
                <Typography
                  color={theme.color.grey}
                  sx={{ mt: 1, fontSize: "1.2rem" }}>
                  Design
                </Typography>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/PortfolioTwo.png"
                  alt="portfolioTwo"
                  width={364}
                  height={535}
                />
                <Typography
                  color={theme.color.grey}
                  sx={{ mt: 1, fontSize: "1.2rem" }}>
                  Development
                </Typography>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/PortfolioThree.png"
                  alt="portfolioThree"
                  width={364}
                  height={535}
                />
                <Typography
                  color={theme.color.grey}
                  sx={{ mt: 1, fontSize: "1.2rem" }}>
                  Growth
                </Typography>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/PortfolioTwo.png"
                  alt="portfolioTwo"
                  width={364}
                  height={535}
                />
                <Typography
                  color={theme.color.grey}
                  sx={{ mt: 1, fontSize: "1.2rem" }}>
                  Development
                </Typography>
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>
      </Section>
    </SectionContainer>
  );
};

export default Portfolio;
