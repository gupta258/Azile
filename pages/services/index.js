import React, { useEffect } from "react";
import { Typography, useTheme, Box } from "@mui/material";
import Head from "next/head";
import Section from "../../components/UI/section";
import SectionContainer from "../../components/UI/sectionContainer";
import AppBar from "../../components/UI/appbar";
import LatestInsights from "../../components/latestInsights";
import WhoWeAreSection from "../../components/whoWeAreSection";
import Footer from "../../components/footer";
import ServicesProductSection from "../../components/servicesProductSection";
import Quote from "../../components/quote";
import AOS from "aos";
import "aos/dist/aos.css";

const InsightsSingle = () => {
  const theme = useTheme();
  const relatedCapabilities = [
    {
      src: "/assets/thinkTwo.png",
      links: "Lorem Ipsum",
      title: "Supply chain transformation on the cloud",
      subTitle:
        "Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains.",
    },
    {
      src: "/assets/thinkTwo.png",
      links: "Lorem Ipsum",
      title: "Supply chain transformation on the cloud",
      subTitle:
        "Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains.",
    },
    {
      src: "/assets/thinkTwo.png",
      links: "Lorem Ipsum",
      title: "Supply chain transformation on the cloud",
      subTitle:
        "Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains.",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>contact</title>
        <meta name="description" content="Azile" />
        {/* //TODO: Add favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Box
          sx={[
            {
              minHeight: "30vh",
              marginBottom: 10,
            },
          ]}>
          <AppBar background="transparent" />
          <SectionContainer background="transparent">
            <Section data-aos="zoom-in"
            data-aos-duration="2000">
              <Typography
                color={theme.color.green}
                sx={{
                  fontSize: { md: "1rem", xs: "0.8rem" },
                  textDecorationWidth: 2,
                  textDecorationColor: theme.color.green,
                  textDecorationLine: "underline",
                  textUnderlineOffset: "14px",
                  my: { md: 4, xs: 3 },
                }}>
                SERVICES
              </Typography>
              <Typography
                variant="title"
                color={theme.color.darkBackground}
                sx={{
                  textTransform: "uppercase",
                  fontSize: { md: "3.6rem", xs: "2rem" },
                }}>
                Lorem ipsum dolor sit amet, consect.
              </Typography>
              <Typography
                color={theme.color.grey}
                sx={{
                  fontSize: { md: "1.4rem", xs: "0.8rem" },
                  mt: { md: 4, xs: 2 },
                  fontWeight: theme.fontWeightMedium,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed
                lobortis a eleifend blandit non. Proin vitae amet justo interdum
                metus.
              </Typography>
            </Section>
          </SectionContainer>
        </Box>
        <ServicesProductSection
          background="#171C25"
          title="01 Consulting"
          titleColor={theme.color.white}
          mainTitle="Checkout our agenda, latest thoughts, reports and  insights."
          mainTitleColor={theme.color.white}
          subTitle="Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains."
          subTitleColor={theme.color.white}
          firstPoint="IT Consulting"
          secondPoint="Product Consulting"
          thirdPoint="Brand Consulting"
          fourthPoint="ESG Consulting"
          pointsColor={theme.color.white}
          cirleColor={theme.color.white}
        />
        <ServicesProductSection
          background="transparent"
          title="02 Application Services"
          titleColor="#2D2D31"
          mainTitle="Checkout our agenda, latest thoughts, reports and  insights."
          mainTitleColor={theme.color.darkBackground}
          subTitle="Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains."
          subTitleColor={theme.color.grey}
          firstPoint="IT Consulting"
          secondPoint="Product Consulting"
          thirdPoint="Brand Consulting"
          fourthPoint="ESG Consulting"
          pointsColor={theme.color.darkBackground}
          cirleColor={theme.color.darkBackground}
        />
        <ServicesProductSection
          background="#171C25"
          title="03"
          titleColor={theme.color.white}
          mainTitle="Checkout our agenda, latest thoughts, reports and  insights."
          mainTitleColor={theme.color.white}
          subTitle="Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains."
          subTitleColor={theme.color.white}
          firstPoint="IT Consulting"
          secondPoint="Product Consulting"
          thirdPoint="Brand Consulting"
          fourthPoint="ESG Consulting"
          pointsColor={theme.color.white}
          cirleColor={theme.color.white}
        />
        <ServicesProductSection
          background="transparent"
          title="04"
          titleColor="#2D2D31"
          mainTitle="Checkout our agenda, latest thoughts, reports and  insights."
          mainTitleColor={theme.color.darkBackground}
          subTitle="Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains."
          subTitleColor={theme.color.grey}
          firstPoint="IT Consulting"
          secondPoint="Product Consulting"
          thirdPoint="Brand Consulting"
          fourthPoint="ESG Consulting"
          pointsColor={theme.color.darkBackground}
          cirleColor={theme.color.darkBackground}
        />
        <ServicesProductSection
          background="#171C25"
          title="05"
          titleColor={theme.color.white}
          mainTitle="Checkout our agenda, latest thoughts, reports and  insights."
          mainTitleColor={theme.color.white}
          subTitle="Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains."
          subTitleColor={theme.color.white}
          firstPoint="IT Consulting"
          secondPoint="Product Consulting"
          thirdPoint="Brand Consulting"
          fourthPoint="ESG Consulting"
          pointsColor={theme.color.white}
          cirleColor={theme.color.white}
        />
        <LatestInsights
          backgroundColor="transparent"
          array={relatedCapabilities}
          mainTitle="EXPOLRE OUR WORK"
          mainTitleColor={theme.color.darkBackground}
          titleColor={theme.color.darkBackground}
          subTitleColor={theme.color.grey}
          button
        />
        <Quote text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue molestie faucibus sed morbi libero nunc, dictum nibh gravida. Vitae neque in imperdiet pharetra habitanti." />
        <WhoWeAreSection
          title="Reach Us"
          subTitle="This platform is build with only objective of colluding both prime
              overs (Idea enerators) fund raisers. We celebrate growth,
              learning, skills, chances and executions together in a technical
              manner at azile."
          btnColor={theme.color.darkBackground}
          arrowColor={theme.color.white}
          background={theme.color.green}
          subTitleColor={theme.color.white}
          titleColor={theme.color.white}
        />
        <Footer />
      </main>
    </>
  );
};

export default InsightsSingle;
