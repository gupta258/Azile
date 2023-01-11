import { Grid, Typography, useTheme, Box } from "@mui/material";
import Image from "next/image";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import CategoryCard from "../components/categoryCard";

const CreatedBy = ({
  array,
  categorySrc,
  categoryImageTitle,
  categoryTitle,
  categorySubTitle,
}) => {
  const theme = useTheme();

  return (
    <>
      <CategoryCard
        image
        src={categorySrc}
        imageTitle={categoryImageTitle}
        title={categoryTitle}
        subTitle={categorySubTitle}
        titleColor={theme.color.darkBackground}
        subTitleColor={theme.color.grey}
        gridStyle={{ display: "flex", flexDirection: { md: "row-reverse" } }}
        sectionExtraStyles={{ pt: { md: 16, xs: 8 } }}
      />
      <SectionContainer sx={{ pb: { md: 12, xs: 8 } }}>
        <Section>
          <Box sx={{ flexGrow: 1, mt: {md: 10, xs: 4} }}>
            <Typography
              color={theme.color.darkBackground}
              sx={{
                fontSize: { xs: "1rem", md: "1.4rem" },
                fontWeight: theme.fontWeightMedium,
                mb: 3,
              }}>
              Created By -
            </Typography>
            <Grid container spacing={{ xs: 6, md: 3 }} columns={12}>
              {array.map(({ src, title, subTitle }, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <Box>
                    <Image src={src} width={279} height={377} />
                    <Typography
                      color={theme.color.grey}
                      sx={{
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        fontWeight: theme.fontWeightMedium,
                        textAlign: 'center'
                        // mt: 2,
                      }}>
                      {title}
                    </Typography>
                    <Typography
                      color={theme.color.grey}
                      sx={{
                        fontSize: { xs: "1rem", md: "0.9rem" },
                        textAlign: 'center'
                        // mt: 2,
                      }}>
                      {subTitle}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Section>
      </SectionContainer>
    </>
  );
};

export default CreatedBy;
