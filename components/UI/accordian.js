import React, { useState } from "react";
import {
  Typography,
  useTheme,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

const Accordian = (props) => {
  const theme = useTheme();
  const {
    title,
    subTitle,
    linkOne,
    linkTwo,
    linkThree,
    linkFour,
    linkFive,
    linkSix,
    linkSeven,
    linkEight,
  } = props;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{
        background: "transparent",
        borderBottom: 1,
        borderBottomColor: theme.color.yellow,
        mt: "2.2rem",
      }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: theme.color.yellow }} />}
        aria-controls="panel1bh-content"
        id="panel1bh-header">
        <Box sx={{ flexDirection: "column" }}>
          <Typography
            color={theme.color.yellow}
            fontWeight={theme.typography.fontWeightSemiBold}
            sx={{
              flexShrink: 0,
              fontSize: { md: "2.4rem", xs: "1.6rem" },
            }}>
            {title}
          </Typography>
          <Typography
            sx={{
              color: theme.color.yellow,
              fontSize: { md: "1rem", xs: "0.8rem" },
            }}>
            {subTitle}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: { md: "flex", xs: "block" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: { md: "1.4rem" },
          }}>
          <Link href="/services" passHref>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { md: "1.4rem", xs: "1.1rem" },
                mb: { xs: "0.6rem" },
                cursor: "pointer",
              }}>
              {linkOne}
            </Typography>
          </Link>
          <Link href="/services" passHref>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { md: "1.4rem", xs: "1.1rem" },
                mb: { xs: "0.6rem" },
                cursor: "pointer",
              }}>
              {linkTwo}
            </Typography>
          </Link>
          <Link href="/services" passHref>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { md: "1.4rem", xs: "1.1rem" },
                mb: { xs: "0.6rem" },
                cursor: "pointer",
              }}>
              {linkThree}
            </Typography>
          </Link>
          <Link href="/services" passHref>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { md: "1.4rem", xs: "1.1rem" },
                mb: { xs: "0.6rem" },
                cursor: "pointer",
              }}>
              {linkFour}
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: { md: "flex", xs: "block" },
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Link href="/services" passHref>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { md: "1.4rem", xs: "1.1rem" },
                mb: { xs: "0.6rem" },
                cursor: "pointer",
              }}>
              {linkFive}
            </Typography>
          </Link>
          <Link href="/services" passHref>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { md: "1.4rem", xs: "1.1rem" },
                mb: { xs: "0.6rem" },
                cursor: "pointer",
              }}>
              {linkSix}
            </Typography>
          </Link>
          <Link href="/services" passHref>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { md: "1.4rem", xs: "1.1rem" },
                mb: { xs: "0.6rem" },
                cursor: "pointer",
              }}>
              {linkSeven}
            </Typography>
          </Link>
          <Link href="/services" passHref>
            <Typography
              color={theme.color.white}
              sx={{
                fontSize: { md: "1.4rem", xs: "1.1rem" },
                mb: { xs: "0.6rem" },
                cursor: "pointer",
              }}>
              {linkEight}
            </Typography>
          </Link>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordian;
