import { useTheme } from "@mui/system";
import Head from "next/head";
import CustomHeroSection from "../../components/customHeroSection";
import BriefInsight from "../../components/briefInsight";
import LatestInsights from "../../components/latestInsights";
import WhoWeAreSection from "../../components/whoWeAreSection";
import Footer from "../../components/footer";

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
          backgroundImage="url(/assets/insights.png)"
          leftGridSize={12}
          containerExtraStyle={{ minHeight: "80vh !important" }}
          sectionExtraStyles={{
            marginTop: { md: "6rem !important", xs: "4rem !important" },
          }}
          title="BLOCKCHAIN"
          subTitle="Lorem ipsum  amet, consectetur dolor sit amet, consectetur"
          date
          readingTime="2 Min Read , 20 Mar 2022"
        />
        <BriefInsight />
        <LatestInsights
          backgroundColor="#171C25"
          array={relatedCapabilities}
          mainTitle="RELATED CAPABILITIES"
          mainTitleColor={theme.color.white}
          titleColor={theme.color.white}
          subTitleColor={theme.color.white}
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
        />
        <Footer />
      </main>
    </>
  );
};

export default InsightsSingle;
