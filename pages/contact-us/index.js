import { useTheme } from "@mui/system";
import Head from "next/head";
import CustomHeroSection from "../../components/customHeroSection";
import Footer from "../../components/footer";
import LetWorkTogether from "../../components/letWorkTogether";
import Banner from "../../components/banner";

const ContactUs = () => {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>contact</title>
        <meta name="description" content="Azile" />
        {/* //TODO: Add favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <CustomHeroSection
          backgroundImage="url(/assets/contactUs.png)"
          leftGridSize={6}
          rightGrid
          containerExtraStyle={{ minHeight: "80vh !important" }}
          sectionExtraStyles={{
            marginTop: { md: "6rem !important", xs: "4rem !important" },
          }}
          title="REACH US"
          subTitle="CONTACT US"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed lobortis a eleifend blandit non. Proin vitae amet justo interdum metus. Eleifend sit dis amet, nulla. Sodales imperdiet platea facilisis orci nibh. Pharetra, mauris"
        />
        <LetWorkTogether />
        <Banner
          background={theme.color.green}
          gridContainerExtraStyle={{ pt: { xs: 6, md: 10 }, pb: { md: 3 } }}
          textColor={theme.color.darkBackground}
          buttonBackgroundColor={theme.color.darkBackground}
          buttonTextColor={theme.color.white}
          leftTitle="FAQs"
          leftSubTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra augue diam egestas nam.amet."
          rightTitle="FAQs"
          rightSubTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra augue diam egestas nam.amet."
          buttonText="Learn More"
        />
        <Footer />
      </main>
    </>
  );
};

export default ContactUs;
