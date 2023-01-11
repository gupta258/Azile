import { useTheme } from "@mui/system";
import Head from "next/head";
import CustomHeroSection from "../../components/customHeroSection";
import LatestInsights from "../../components/latestInsights";
import WhoWeAreSection from "../../components/whoWeAreSection";
import Footer from "../../components/footer";
import CategoryCard from "../../components/categoryCard";
import Quote from "../../components/quote";

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
          title="CASE STUDIES"
          subTitle="Lorem ipsum dolor sit amet, comb"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed lobortis a eleifend blandit non. Proin vitae amet justo interdum metus. Eleifend sit dis amet, nulla. Sodales imperdiet platea facilisis orci nibh. Pharetra, mauris"
        />
        <CategoryCard
          image
          categoryText
          button
          src="/assets/thinkOne.png"
          imageTitle="Lorem Ipsum"
          category="Category"
          categoryColor="#559E97"
          title="Checkout our agenda, latest thoughts, reports and  insights."
          subTitle="Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains."
          titleColor={theme.color.darkBackground}
          subTitleColor={theme.color.grey}
          sectionExtraStyles={{ py: { md: 16, xs: 8 } }}
        />
        <CategoryCard
          image
          categoryText
          button
          gridStyle={{ display: "flex", flexDirection: "row-reverse" }}
          src="/assets/thinkOne.png"
          imageTitle="Lorem Ipsum"
          category="Category"
          categoryColor="#559E97"
          title="Checkout our agenda, latest thoughts, reports and  insights."
          subTitle="Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains."
          titleColor={theme.color.white}
          subTitleColor={theme.color.white}
          sectionExtraStyles={{ py: 8, background: "#171C25" }}
        />
        <CategoryCard
          image
          categoryText
          button
          src="/assets/thinkOne.png"
          imageTitle="Lorem Ipsum"
          category="Category"
          categoryColor="#559E97"
          title="Checkout our agenda, latest thoughts, reports and  insights."
          subTitle="Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains."
          titleColor={theme.color.darkBackground}
          subTitleColor={theme.color.grey}
          sectionExtraStyles={{ py: { md: 16, xs: 8 } }}
        />
        <CategoryCard
          image
          categoryText
          button
          gridStyle={{ display: "flex", flexDirection: "row-reverse" }}
          src="/assets/thinkOne.png"
          imageTitle="Lorem Ipsum"
          category="Category"
          categoryColor="#559E97"
          title="Checkout our agenda, latest thoughts, reports and  insights."
          subTitle="Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains."
          titleColor={theme.color.white}
          subTitleColor={theme.color.white}
          sectionExtraStyles={{ py: 8, background: "#171C25" }}
        />
        <LatestInsights
          backgroundColor={theme.color.white}
          array={array}
          mainTitle="see more stories"
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

export default Insights;
