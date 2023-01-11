import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import CircleIcon from "@mui/icons-material/Circle";
import { Formik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  bgcolor: "background.paper",
  p: { md: 6, xs: 4 },
};

const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": {
      backgroundColor: "#559E97",
      color: "#ffffff",
      transition: "all 0.4s ease-in-out",
    },
  },
}));

const ServicesProductSection = ({
  background,
  title,
  titleColor,
  mainTitle,
  mainTitleColor,
  subTitle,
  subTitleColor,
  firstPoint,
  secondPoint,
  thirdPoint,
  fourthPoint,
  pointsColor,
  cirleColor,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [open, setOpen] = useState(false);
  const [age, setAge] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SectionContainer background={background}>
      <Section>
        <Grid
          container
          sx={{ py: 6, flexDirection: { xs: "column-reverse", md: "row" } }}>
          <Grid
            item
            xs={12}
            md={5}
            data-aos="fade-right"
            data-aos-duration="2000">
            <Typography
              color={titleColor}
              sx={{
                fontSize: { md: "1.4rem !important", xs: "1rem" },
                fontWeight: theme.fontWeightMedium,
                mt: { xs: 7 },
              }}>
              {title}
            </Typography>
            <Typography
              color={mainTitleColor}
              sx={{
                my: { md: 4, xs: 2 },
                fontSize: { md: "2.2rem !important", xs: "1.3rem" },
                fontWeight: theme.fontWeightMedium,
              }}>
              {mainTitle}
            </Typography>
            <Typography
              color={subTitleColor}
              sx={{
                mt: 2,
                fontSize: { md: "1.1rem !important", xs: "1rem" },
              }}>
              {subTitle}
            </Typography>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "transparent",
                my: { md: 3, xs: 2 },
              }}
              aria-label="contacts">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CircleIcon sx={{ width: 10 }} htmlColor={cirleColor} />
                  </ListItemIcon>
                  <ListItemText
                    primary={firstPoint}
                    primaryTypographyProps={{
                      fontSize: "1rem !important",
                      color: pointsColor,
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CircleIcon sx={{ width: 10 }} htmlColor={cirleColor} />
                  </ListItemIcon>
                  <ListItemText
                    primary={secondPoint}
                    primaryTypographyProps={{
                      fontSize: "1rem !important",
                      color: pointsColor,
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CircleIcon sx={{ width: 10 }} htmlColor={cirleColor} />
                  </ListItemIcon>
                  <ListItemText
                    primary={thirdPoint}
                    primaryTypographyProps={{
                      fontSize: "1rem !important",
                      color: pointsColor,
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CircleIcon sx={{ width: 10 }} htmlColor={cirleColor} />
                  </ListItemIcon>
                  <ListItemText
                    primary={fourthPoint}
                    primaryTypographyProps={{
                      fontSize: "1rem !important",
                      color: pointsColor,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <Button
              size="large"
              variant="contained"
              onClick={handleOpen}
              sx={{
                background: "#FFEAD5",
                color: theme.color.black,
                px: { md: 8, xs: 6 },
                py: { xs: 1 },
              }}
              className={classes.button}>
              Talk to us
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            data-aos="fade-left"
            data-aos-duration="2000">
            <Box
              sx={{
                position: "relative",
                height: { md: 700, xs: 300 },
                width: { md: 650 * 1.7782, xs: 300 * 1.7782 },
                right: { md: "-80px", xs: "-25px" },
              }}>
              <Box
                position="absolute"
                top="8%"
                right={{ xs: 20, md: 34 }}
                sx={{
                  height: "100%",
                  width: "100%",
                  background: theme.color.green,
                }}
                data-aos="zoom-in"
                data-aos-duration="3000"
              />
              <Image
                src="/assets/caseStudySingle.png"
                alt="dashboard"
                layout="fill"
                data-aos="fade-right"
                data-aos-duration="2000"
              />
            </Box>
          </Grid>
        </Grid>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Button
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: { md: 30, xs: 0 },
                  top: { md: 60, xs: 10 },
                }}>
                <CloseIcon htmlColor={theme.color.darkBackground} />
              </Button>
              <Typography
                id="modal-modal-title"
                sx={{
                  fontSize: { md: "2.8rem !important" },
                  color: theme.color.darkBackground,
                  mb: 4,
                  textAlign: "center",
                }}>
                GET IN TOUCH
              </Typography>
              <Grid container>
                <Grid xs={12} md={6}>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      number: "",
                      company: "",
                      how: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = "Required";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email,
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }
                      if (!values.number) {
                        errors.number = "Required";
                      } else if (!/^([+]\d{2})? \d{10}$/i.test(values.number)) {
                        errors.number = "Invalid phone number";
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}>
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                    }) => (
                      <Box onSubmit={handleSubmit} component="form">
                        <TextField
                          type="text"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          id="outlined-required"
                          label="Full Name"
                          fullWidth
                          sx={{
                            ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root":
                              {
                                color: "white",
                              },
                            color: theme.color.white,
                            mb: 4,
                          }}
                          InputLabelProps={{
                            style: { color: theme.color.darkBackground },
                          }}
                          InputProps={{
                            sx: {
                              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                border: "0.80px solid #737373",
                                color: "white",
                              },
                              "&:hover": {
                                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "0.80px solid #737373",
                                  },
                              },
                              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  padding: {
                                    md: "9px !important",
                                    xs: "9px !important",
                                  },
                                },
                            },
                          }}
                          size="small"
                        />
                        <TextField
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          id="outlined-required"
                          label="Email Address"
                          fullWidth
                          sx={{
                            ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root":
                              {
                                color: "white",
                              },
                            color: theme.color.white,
                            mb: 4,
                          }}
                          InputLabelProps={{
                            style: { color: theme.color.darkBackground },
                          }}
                          InputProps={{
                            sx: {
                              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                border: "0.80px solid #737373",
                                color: "white",
                              },
                              "&:hover": {
                                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "0.80px solid #737373",
                                  },
                              },
                              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  padding: {
                                    md: "9px !important",
                                    xs: "9px !important",
                                  },
                                },
                            },
                          }}
                          size="small"
                        />
                        {errors.email && touched.email && errors.email}
                        <TextField
                          type="number"
                          name="number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.number}
                          id="outlined-required"
                          label="Mobile Number"
                          fullWidth
                          sx={{
                            ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root":
                              {
                                color: "white",
                              },
                            color: theme.color.white,
                            mb: 4,
                          }}
                          InputLabelProps={{
                            style: { color: theme.color.darkBackground },
                          }}
                          InputProps={{
                            sx: {
                              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                border: "0.80px solid #737373",
                                color: "white",
                              },
                              "&:hover": {
                                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "0.80px solid #737373",
                                  },
                              },
                              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  padding: {
                                    md: "9px !important",
                                    xs: "9px !important",
                                  },
                                },
                            },
                          }}
                          size="small"
                        />
                        {errors.number && touched.number && errors.number}
                        <TextField
                          type="text"
                          name="company"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.company}
                          id="outlined-required"
                          label="Company Name"
                          fullWidth
                          sx={{
                            ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root":
                              {
                                color: "white",
                              },
                            color: theme.color.white,
                            mb: 4,
                          }}
                          InputLabelProps={{
                            style: { color: theme.color.darkBackground },
                          }}
                          InputProps={{
                            sx: {
                              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                border: "0.80px solid #737373",
                                color: "white",
                              },
                              "&:hover": {
                                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "0.80px solid #737373",
                                  },
                              },
                              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  padding: {
                                    md: "9px !important",
                                    xs: "9px !important",
                                  },
                                },
                            },
                          }}
                          size="small"
                        />
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth sx={{ mb: 4 }}>
                            <InputLabel id="demo-simple-select-label">
                              Interested in
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Interested in"
                              onChange={handleChange}>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                        <TextField
                          id="outlined-multiline-static"
                          label="How we can help you ?"
                          multiline
                          fullWidth
                          rows={3}
                          size="small"
                        />
                        <Button
                          size="large"
                          variant="contained"
                          type="submit"
                          disabled={isSubmitting}
                          sx={{
                            background: "#FFEAD5",
                            color: theme.color.black,
                            px: 8,
                            mt: 4,
                            alignItems: "center",
                          }}>
                          Submit
                        </Button>
                      </Box>
                    )}
                  </Formik>
                </Grid>
                <Grid xs={12} md={1} />
                <Grid
                  xs={12}
                  md={5}
                  sx={{ display: { md: "block", xs: "none" } }}>
                  <Box
                    sx={{
                      backgroundColor: theme.color.green,
                      py: 3,
                      px: 2,
                      textAlign: "center",
                    }}>
                    <Typography
                      color={theme.color.white}
                      sx={{
                        mb: 2,
                        fontSize: { md: "1.9rem !important" },
                        fontWeight: theme.fontWeightMedium,
                      }}>
                      What Happens Next
                    </Typography>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "transparent",
                      }}
                      aria-label="contacts">
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <CircleIcon htmlColor={theme.color.white} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Our sales manager reaches you out within a few days after analyzing your business requirements"
                            primaryTypographyProps={{
                              fontSize: "1.2rem !important",
                              color: theme.color.white,
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <CircleIcon htmlColor={theme.color.white} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Meanwhile, we sign an NDA to ensure the highest privacy level"
                            primaryTypographyProps={{
                              fontSize: "1.2rem !important",
                              color: theme.color.white,
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <CircleIcon htmlColor={theme.color.white} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Our pre-sale manager presents project estimates and approximate timeline"
                            primaryTypographyProps={{
                              fontSize: "1.2rem !important",
                              color: theme.color.white,
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </div>
      </Section>
    </SectionContainer>
  );
};

export default ServicesProductSection;
