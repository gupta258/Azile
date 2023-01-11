import { useTheme } from "@mui/system";
import Head from "next/head";
import CaseStudyHeroSection from "../../components/caseStudyHeroSection";
import LatestInsights from "../../components/latestInsights";
import WhoWeAreSection from "../../components/whoWeAreSection";
import Footer from "../../components/footer";
import CategoryCard from "../../components/categoryCard";
import Quote from "../../components/quote";
import CreatedBy from "../../components/createdBy";

const Insights = () => {
  const theme = useTheme();

  const created = [
    {
      src: "/assets/thinkTwo.png",
      title: "Jenny Wilson",
      subTitle: "President of Sales",
    },
    {
      src: "/assets/thinkTwo.png",
      title: "Esther Howard",
      subTitle: "Web Designer",
    },
    {
      src: "/assets/thinkTwo.png",
      title: "Robert Fox",
      subTitle: "Web Developer",
    },
    {
      src: "/assets/thinkTwo.png",
      title: "Leslie Alexander",
      subTitle: "Web Designer",
    },
  ];

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
        <CaseStudyHeroSection
          containerExtraStyle={{ minHeight: "100vh !important" }}
          sectionExtraStyles={{
            marginTop: { md: 6, xs: 2 },
          }}
          gridExtraStyles={{
            display: "flex",
            flexDirection: { xs: "row-reverse", md: "row" },
          }}
          title="ESG"
          subTitle="Lorem ipsum dolor sit amet, consectetur"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed lobortis a eleifend blandit non. Proin vitae amet justo interdum metus."
        />
        <CategoryCard
          image
          share
          line
          src="/assets/thinkOne.png"
          imageTitle="Lorem Ipsum"
          title="Checkout our agenda, latest thoughts, reports and  insights."
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit egestas purus volutpat varius tellus egestas. Nibh eget tellus non ultrices sit a nec amet. Luctus diam vitae aenean consectetur rutrum ultricies varius. Sit lacinia amet amet, orci quam amet.
          Ut auctor sed id turpis turpis velit facilisis morbi. Ultricies tellus cursus at urna turpis ligula."
          titleColor={theme.color.darkBackground}
          subTitleColor={theme.color.grey}
          sectionExtraStyles={{ py: { md: 12, xs: 8 } }}
        />
        <Quote text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue molestie faucibus sed morbi libero nunc, dictum nibh gravida. Vitae neque in imperdiet pharetra habitanti." />
        <CreatedBy
          categorySrc="/assets/thinkOne.png"
          categoryImageTitle="Lorem Ipsum"
          categoryTitle="Checkout our agenda, latest thoughts, reports and  insights."
          categorySubTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit egestas purus volutpat varius tellus egestas. Nibh eget tellus non ultrices sit a nec amet. Luctus diam vitae aenean consectetur rutrum ultricies varius. Sit lacinia amet amet, orci quam amet.
          Ut auctor sed id turpis turpis velit facilisis morbi. Ultricies tellus cursus at urna turpis ligula."
          array={created}
        />
        <LatestInsights
          backgroundColor="#171C25"
          array={relatedCapabilities}
          mainTitle="SEE MORE STORIES"
          mainTitleColor={theme.color.white}
          titleColor={theme.color.white}
          subTitleColor={theme.color.white}
          button
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
