import { useTheme } from "@mui/system";
import Head from "next/head";
import CustomHeroSection from "../../components/customHeroSection";
import InsightsLinks from "../../components/insightsLinks";
import Quote from "../../components/quote";
import LatestInsights from "../../components/latestInsights";
import WhoWeAreSection from "../../components/whoWeAreSection";
import Footer from "../../components/footer";

const Insights = () => {
  const theme = useTheme();

  const array = [
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
          leftGridSize={6}
          rightGrid
          containerExtraStyle={{ minHeight: "80vh !important" }}
          sectionExtraStyles={{
            marginTop: { md: "6rem !important", xs: "4rem !important" },
          }}
          title="Insights & Thoughts"
          subTitle="OUR PURPOSE MATTERS ABOVE ALL"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed lobortis a eleifend blandit non. Proin vitae amet justo interdum metus. Eleifend sit dis amet, nulla. Sodales imperdiet platea facilisis orci nibh. Pharetra, mauris"
        />
        <InsightsLinks
          backgroundColor={theme.color.white}
          py={{ md: 10, xs: 8 }}
          topLinks
          heading="Lorem ipsum dolor sit amet"
          headingColor={theme.color.darkBackground}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit egestas purus volutpat varius tellus egestas. Nibh eget tellus non ultrices sit a nec amet. Luctus diam vitae aenean consectetur rutrum ultricies varius. Sit lacinia amet amet, orci quam amet.

          Ut auctor sed id turpis turpis velit facilisis morbi. Ultricies tellus cursus at urna turpis ligula. Lacus euismod aliquet erat libero, consequat felis quis risus magna. Nam magna nibh egestas tempor tristique. Eu blandit ut quam id. Cras placerat eget ut pharetra nibh est ante. Eu amet, adipiscing at ante pretium integer. Proin morbi velit eleifend nibh enim a. "
          descriptionColor={theme.color.grey}
          titleColor={theme.color.darkBackground}
          subTitleColor={theme.color.grey}
        />
        <Quote text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue molestie faucibus sed morbi libero nunc, dictum nibh gravida. Vitae neque in imperdiet pharetra habitanti." />
        <LatestInsights
          backgroundColor={theme.color.white}
          array={array}
          mainTitle="Explore Our Latest Insights"
          mainTitleColor={theme.color.darkBackground}
          titleColor={theme.color.darkBackground}
          subTitleColor={theme.color.grey}
          button
        />
        <InsightsLinks
          backgroundColor={theme.color.darkBackground}
          py={{ md: 10, xs: 8 }}
          mainGridStyle={{ display: "flex", flexDirection: "row-reverse" }}
          heading="Lorem ipsum dolor sit amet"
          headingColor={theme.color.white}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit egestas purus volutpat varius tellus egestas. Nibh eget tellus non ultrices sit a nec amet. Luctus diam vitae aenean consectetur rutrum ultricies varius. Sit lacinia amet amet, orci quam amet.

          Ut auctor sed id turpis turpis velit facilisis morbi. Ultricies tellus cursus at urna turpis ligula. Lacus euismod aliquet erat libero, consequat felis quis risus magna. Nam magna nibh egestas tempor tristique. Eu blandit ut quam id. Cras placerat eget ut pharetra nibh est ante. Eu amet, adipiscing at ante pretium integer. Proin morbi velit eleifend nibh enim a. "
          descriptionColor={theme.color.white}
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

export default Insights;
