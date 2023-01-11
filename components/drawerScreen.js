import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  links: {
    position: "relative",
    color: "#999999",
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "2px",
      bottom: "-2px",
      // left: "50%",
      // transform: "translate(0%,50%)",
      backgroundColor: "#FFEAD5",
      visibility: "hidden",
      transition: "all 0.4s ease-in-out",
    },
    "&:hover:before": {
      visibility: "visible",
      width: "100%",
    },
    "&:hover": {
      color: "#FFEAD5",
      transition: "all 0.4s ease-in-out",
    },
    cursor: "pointer",
  },
  loginLabel: {
    color: "#FFEAD5",
    fontWeight: 600,
    fontSize: "1.2rem",
    cursor: "pointer",
    "&:hover": {
      color: "#559E97",
    },
    marginLeft: "6px",
  },
  loginGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
}));

const SwipeableTemporaryDrawer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const menuBarList = [
    {
      label: "Who we are",
      route: "/about-us",
    },
    {
      label: "Services",
      route: "/services",
    },
    {
      label: "Insights",
      route: "/insights",
    },
    {
      label: "Case Studies",
      route: "/case-study",
    },
    {
      label: "Contact",
      route: "/contact-us",
    },
  ];

  const menuBarItems = ({ label, route }) => (
    <Link href={route}>
      <Typography
        className={classes.links}
        sx={{
          fontSize: { xs: "2.6rem", md: "4.4rem" },
          fontWeight: theme.fontWeightMedium,
          mb: { md: 2, xs: 2 },
        }}>
        {label}
      </Typography>
    </Link>
  );

  const list = () => (
    <Box
      className={classes.mainBox}
      sx={{
        background: theme.color.darkBackground,
        width: "100vw",
        height: "100vh",
        px: { md: 10, xs: 3 },
        py: { md: 5, xs: 2 },
      }}>
      <Grid container>
        <Grid item md={6} xs={6}>
          <Box display="flex" alignItems="flex-end">
            <Image
              height={60 * 0.677}
              width={60}
              src="/assets/brand-logo-white.png"
              alt="brand-logo"
            />
          </Box>
        </Grid>
        <Grid item md={6} sx={{ display: "none" }}>
          <TextField
            fullWidth
            sx={{
              color: theme.color.white,
              borderBottom: "1px solid #999999 !important",
            }}
            id="standard-basic"
            size="small"
            type="email"
            label="Search for blog or content"
            variant="standard"
            InputLabelProps={{
              style: { color: "#999999", fontSize: "1.2rem" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      color: (theme) => theme.color.white,
                      fontSize: 24,
                    }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputProps={{ style: { color: "white" } }}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}>
          <IconButton
            sx={{
              color: (theme) => theme.color.white,
              fontSize: 24,
              padding: 0,
            }}
            onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "flex-end",
          pt: 6,
        }}>
        <Grid item md={6} className={classes.loginGrid}>
          <Typography
            color="#fff"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              display: "flex",
            }}>
            Helping you realize your transformation?
            <Link href="/about" passHref>
              <Typography className={classes.loginLabel}>Log in</Typography>
            </Link>
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}>
          {menuBarList.map(menuBarItems)}
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div>
      <IconButton
        sx={{ color: (theme) => theme.color.white, fontSize: 35 }}
        onClick={toggleDrawer(true)}>
        <MenuRoundedIcon />
      </IconButton>
      <SwipeableDrawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default SwipeableTemporaryDrawer;
