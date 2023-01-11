import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import Head from "next/head";
import Banner from "../components/banner";
import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
import Portfolio from "../components/Portfolio";
import ServicesProductSection from "../components/servicesProductSection";
import AppBar from "../components/UI/appbar";
import WhatWeOffer from "../components/whatWeOffer";
import WhatWeThink from "../components/whatWeThink";
import WhoWeAreSection from "../components/whoWeAreSection";
import WhyUs from "../components/whyUs";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Azile</title>
        <meta name="description" content="Azile" />
        {/* //TODO: Add favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <AppBar background={theme.color.darkBackground} />
        <HeroSection />
        <WhoWeAreSection
          title="Who We Are"
          subTitle="This platform is build with only objective of colluding both prime
              overs (Idea enerators) fund raisers. We celebrate growth,
              learning, skills, chances and executions together in a technical
              manner at azile."
          btnColor={theme.color.yellow}
          arrowColor={theme.color.black}
          subTitleColor={theme.color.grey}
          titleColor={theme.color.darkBackground}
        />
        {/* <WhatWeOffer /> */}
        <div
          style={{
            backgroundColor: "#171C25",
            paddingTop: 50,
            paddingBottom: 50,
          }}>
          <Typography
            variant="title"
            color={theme.color.white}
            sx={{
              fontSize: "2.4rem",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              mb: "2rem",
            }}
            data-aos="fade-down"
            data-aos-duration="2000">
            WHAT WE OFFER
          </Typography>
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
            background="#FFF"
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
        </div>
        <WhyUs />
        <Portfolio
          background={theme.color.darkBackground}
          title="PORTFOLIO"
          titleColor="primary.contrastText"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              viverra magna aliquam, turpis"
          subTitleColor={theme.color.yellow}
        />
        {/* <Banner
          sectionStyle={{ mt: 10 }}
          background="#2D2D31"
          gridContainerExtraStyle={{
            pt: { xs: 6, md: 10 },
            pb: { xs: 3, md: 5 },
          }}
          textColor={theme.color.white}
          buttonBackgroundColor={theme.color.yellow}
          buttonTextColor={theme.color.black}
          leftTitle="nexX"
          leftSubTitle="You help us knowing your start-up in the first step 
          and watch us refitting your entire process."
          rightTitle="School of CTO"
          rightSubTitle="A 2 months program for idea stage StartUps & Founders
          to build their  MVP in no-cost with all round assitance."
          buttonText="Explore"
        /> */}
        <WhatWeThink />
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

export default Landing;
