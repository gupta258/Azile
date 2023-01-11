import { useFormik } from "formik";
import * as yup from "yup";
import { Grid, Typography, useTheme, Button } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import CustomInput from "./UI/input";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string("Enter your number")
    .min(10, "Enter a valid number")
    .required("number is required"),
  company: yup
    .string("Enter your company name")
    .required("Company Name is required"),
  remark: yup.string("Enter the remark").required("remark is required"),
});

const LetWorkTogether = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      remark: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <SectionContainer background={theme.color.white}>
      <Section sx={{ pt: "4rem", pb: "4rem" }}>
        <Typography
          variant="title"
          color={theme.color.darkBackground}
          sx={{
            fontSize: "2.4rem",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            mb: "2rem",
            textAlign: "center",
          }}>
          LET’S WORK TOGETHER
        </Typography>
        <Typography
          color={theme.color.grey}
          sx={{
            fontSize: "1.1rem",
            mb: "3rem",
            px: { md: 30 },
            textAlign: "center",
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra augue
          diam egestas nam.amet.
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <CustomInput
                id="name"
                name="name"
                label="Your Name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                id="phone"
                name="phone"
                label="Phone Number"
                type="number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                id="company"
                label="Company or Organization"
                type="text"
                value={formik.values.company}
                onChange={formik.handleChange}
                error={formik.touched.company && Boolean(formik.errors.company)}
                helperText={formik.touched.company && formik.errors.company}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <CustomInput
                id="remark"
                label="Remark"
                type="text"
                value={formik.values.remark}
                onChange={formik.handleChange}
                error={formik.touched.remark && Boolean(formik.errors.remark)}
                helperText={formik.touched.remark && formik.errors.remark}
              />
            </Grid>
            <Grid item xs={12} md={12} sx={{ textAlign: "center" }}>
              <Link href="/about" passHref>
                <Button
                  size="large"
                  // fullWidth
                  variant="contained"
                  type="submit"
                  sx={{
                    background: "#FFEAD5",
                    px: 6,
                    py: 1.5,
                    color: theme.color.black,
                    mt: 5,
                  }}>
                  Send Now
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Section>
    </SectionContainer>
  );
};

export default LetWorkTogether;
