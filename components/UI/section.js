import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

const Section = styled(Container)(({ theme }) => ({
  maxWidth: "1500px",
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1500px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "85vw",
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: "100vw",
    margin: "8rem auto",
  },
}));

export default Section;
