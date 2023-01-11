import * as React from "react";
import { Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const MediaCard = (props) => {
  const theme = useTheme();
  const { src, title, subTitle } = props;
  return (
    <Card
      sx={{ maxWidth: "100%", maxHeight: { md: "100%", xs: "200px" } }}
      style={{ backgroundColor: theme.color.green }}>
      <CardContent
        sx={{
          textAlign: "center",
          px: "1rem",
          py: "2.2rem",
        }}>
        <Image src={src} alt="why" width={100} height={100} />
        <Typography
          color={theme.color.white}
          sx={{
            mt: "1.2rem",
            mb: "0.8rem",
            fontSize: { md: "1.4rem", xs: "1.2rem" },
          }}>
          {title}
        </Typography>
        <Typography
          color={theme.color.white}
          sx={{ fontSize: { md: "1.2rem", xs: "0.8rem" } }}>
          {subTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
