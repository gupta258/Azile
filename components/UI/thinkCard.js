import * as React from "react";
import { Typography, useTheme, Button, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ThinkCard = (props) => {
  const theme = useTheme();
  const { src, imageTitle, title, titleColor, subTitle, subTitleColor, mb } =
    props;
  return (
    <Box sx={{ mb: mb }}>
      <Card sx={{ pb: 0, mb: 2 }}>
        <CardContent sx={{ p: 0, pb: 0, position: "relative" }}>
          <Image src={src} alt="think" width={583} height={377} />
          <Typography
            color={theme.color.white}
            variant="body2"
            sx={{
              py: 2,
              px: 2,
              backgroundColor: "#191712",
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              fontSize: { xs: "1rem" },
            }}>
            {imageTitle}
          </Typography>
        </CardContent>
      </Card>
      <Typography
        color={titleColor}
        sx={{
          mb: "0.8rem",
          fontSize: "1.2rem",
        }}>
        {title}
      </Typography>
      <Typography
        color={subTitleColor}
        sx={{ fontSize: "0.9rem !important", mb: "0.4rem" }}>
        {subTitle}
      </Typography>
      <Link href="/about" passHref>
        <Button
          variant="text"
          sx={{
            color: theme.color.darkBackground,
            fontSize: "1rem",
            p: 0,
            textTransform: "initial",
          }}>
          Read more..
        </Button>
      </Link>
    </Box>
  );
};

export default ThinkCard;
