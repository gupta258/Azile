import { useTheme } from "@mui/system";
import Head from "next/head";
import { Box } from "@mui/material";
import CustomHeroSection from "../../components/customHeroSection";
import Portfolio from "../../components/Portfolio";
import HowWeDoIt from "../../components/howWeDoIt";
import WhyUs from "../../components/whyUs";
import OurClients from "../../components/ourClients";
import Quote from "../../components/quote";
import WhoWeAreSection from "../../components/whoWeAreSection";
import Footer from "../../components/footer";

const AboutUs = () => {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>about</title>
        <meta name="description" content="Azile" />
        {/* //TODO: Add favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <CustomHeroSection
          backgroundImage="url(/assets/aboutHeroSection.png)"
          leftGridSize={6}
          rightGrid
          title="WHO WE ARE"
          subTitle="Making IT Possible, one at a Time"
          button
          description="This platform is build with only objective of colluding both
          prime movers (Idea Generators) & fund raisers. We celebrate
          growth, learning, skills, chances and executions together in a
          technical manner at azile. 

          Every idea generator’s dream of reverberating his brand in the
          market, and we do that here. We help not only the prime movers
          but also the existing startups to garden fresh each and every
          steps of their business.
          
          You help us knowing your start-up in the first step and watch us
          refitting your entire business plan and flow. How we are going
          to do this?"
        />
        <Portfolio
          background={theme.color.white}
          title="WHAT WE DO"
          titleColor={theme.color.darkBackground}
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              viverra magna aliquam, turpis"
          subTitleColor={theme.color.grey}
        />
        <HowWeDoIt />
        <WhyUs />
        <Box
          sx={{ background: theme.color.darkBackground, height: "10vh" }}></Box>
        <OurClients />
        <Quote
          quote
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue molestie faucibus sed morbi libero nunc, dictum nibh gravida. Vitae neque in imperdiet pharetra habitanti."
        />
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
          aboutSection={true}
        />
        <Footer />
      </main>
    </>
  );
};

export default AboutUs;
