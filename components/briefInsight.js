import {
  Grid,
  Typography,
  useTheme,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Section from "./UI/section";
import SectionContainer from "./UI/sectionContainer";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

const BriefInsight = () => {
  const theme = useTheme();
  const array = [
    {
      src: "/assets/thinkTwo.png",
      title: "Lorem Ipsum",
      subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      src: "/assets/thinkTwo.png",
      title: "Lorem Ipsum",
      subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const list = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu mauris orci, mauris vel turpis a mauris lorem eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu mauris orci, mauris vel turpis a mauris lorem eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu mauris orci, mauris vel turpis a mauris lorem eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu mauris orci, mauris vel turpis a mauris lorem eget.",
  ];

  return (
    <SectionContainer sx={{ py: { md: 10, xs: 8 } }}>
      <Section>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Typography
              color={theme.color.darkBackground}
              sx={{
                fontSize: { xs: "2.1rem", md: "2.8rem" },
                textTransform: "uppercase",
              }}>
              In Brief
            </Typography>
            <List>
              {list.map((label, listIndex) => (
                <ListItem disablePadding key={listIndex}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Brightness1Icon
                        color={theme.color.grey}
                        fontSize="small"
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{
                        fontSize: "0.9rem !important",
                        color: theme.color.grey,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box
              sx={{
                my: 4,
                backgroundColor: "#F7F7F8",
                p: 2,
                display: "flex",
                alignItems: "center",
              }}>
              <Typography
                color="#2D2D31"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.4rem" },
                  mr: 3,
                }}>
                Share
              </Typography>
              <FacebookIcon
                fontSize="small"
                color={theme.color.grey}
                sx={{ mr: 3 }}
              />
              <TwitterIcon
                fontSize="small"
                color={theme.color.grey}
                sx={{ mr: 3 }}
              />
              <LinkedInIcon
                fontSize="small"
                color={theme.color.grey}
                sx={{ mr: 3 }}
              />
              <MailIcon
                fontSize="small"
                color={theme.color.grey}
                sx={{ mr: 3 }}
              />
            </Box>
            <Box
              sx={{ borderLeftWidth: 1, borderLeftColor: theme.color.green }}>
              <Typography
                color={theme.color.darkBackground}
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.4rem" },
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                tempor amet elementum sociis et. Fringilla ut pharetra dapibus
                facilisi sit pellentesque. Eu lacus, feugiat amet lectus risus
                urna suspendisse tempus.
              </Typography>
              <Box sx={{ my: 4 }}>
                <Image
                  src="/assets/insights-single.png"
                  alt="think"
                  width={709}
                  height={500}
                />
              </Box>
              <Typography
                color={theme.color.darkBackground}
                sx={{
                  fontSize: { xs: "2.3rem", md: "3rem" },
                }}>
                Lorem ipsum dolor sit amet,
              </Typography>
              <Typography
                color={theme.color.grey}
                sx={{
                  fontSize: "0.9rem",
                  my: 5,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                egestas purus volutpat varius tellus egestas. Nibh eget tellus
                non ultrices sit a nec amet. Luctus diam vitae aenean
                consectetur rutrum ultricies varius. Sit lacinia amet amet, orci
                quam amet. Ut auctor sed id turpis turpis velit facilisis morbi.
                Ultricies tellus cursus at urna turpis ligula. Lacus euismod
                aliquet erat libero, consequat felis quis risus magna. Nam magna
                nibh egestas tempor tristique. Eu blandit ut quam id. Cras
                placerat eget ut pharetra nibh est ante. Eu amet, adipiscing at
                ante pretium integer. Proin morbi velit eleifend nibh enim a.
                Egestas pellentesque proin viverra pharetra, gravida. Nec vel at
                congue id. Vestibulum ultrices diam eget iaculis pulvinar non
                suspendisse magnis dolor. Nunc pellentesque etiam faucibus nisl
                malesuada. Imperdiet integer rhoncus, quis vulputate. Et
                dignissim mauris tristique lacus, dis eget mauris eu, molestie.
                Cras vel at ullamcorper ullamcorper ornare pellentesque
                suspendisse. In facilisis integer vel nisl. Vitae ultricies
                accumsan feugiat id ultricies lectus lacus diam nunc. Ultricies
                dictumst aliquam sed tristique. Habitant et elementum viverra
                urna bibendum neque, ac vitae vestibulum. Consectetur mauris
                augue sem sed dictumst consectetur quisque.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={1} />
          <Grid item xs={12} md={4}>
            <Typography
              color={theme.color.darkBackground}
              sx={{
                fontSize: "1.4rem",
                textTransform: "uppercase",
                mb: 4,
                fontWeight: theme.fontWeightMedium,
              }}>
              MORE ON THIS TOPIC
            </Typography>
            {array.map(({ src, title, subTitle }, index) => (
              <Card
                sx={{
                  display: "flex",
                  boxShadow: "none !important",
                }}
                key={index}>
                <CardMedia
                  component="img"
                  sx={{ width: 126, height: 126 }}
                  image={src}
                  // alt="Live from space album cover"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto", p: 0, pl: 3 }}>
                    <Typography
                      color={theme.color.darkBackground}
                      sx={{
                        fontSize: { xs: "1rem", md: "1.1rem !important" },
                        mb: 2,
                      }}>
                      {title}
                    </Typography>
                    <Typography
                      color={theme.color.grey}
                      sx={{
                        fontSize: { xs: "1rem", md: "0.9rem !important" },
                        mb: 1,
                      }}>
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
                  </CardContent>
                </Box>
              </Card>
            ))}
          </Grid>
        </Grid>
        <Box
          sx={{
            backgroundColor: "#E8FFFD",
            px: {md: 3, xs: 2},
            py: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mt: 2,
          }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: {md: 5, xs: 2} }}>
              <Avatar
                src="/static/images/avatar/1.jpg"
                sx={{ width: { md: 120, xs: 87 }, height: { md: 120, xs: 87 } }}
              />
            </Box>
            <Box>
              <Typography
                color={theme.color.darkBackground}
                sx={{
                  fontSize: {
                    xs: "1.1rem",
                    md: "1.8rem !important",
                  },
                  fontWeight: theme.fontWeightMedium,
                  mb: 1,
                }}>
                By Adon Smith, 20
              </Typography>
              <Typography
                color={theme.color.grey}
                sx={{
                  fontSize: "0.9rem !important",
                  fontWeight: theme.fontWeightMedium,
                  mb: 1,
                }}>
                March, 2022
              </Typography>
              <Typography
                color={theme.color.grey}
                sx={{
                  fontSize: "0.9rem !important",
                }}>
                6 Min Read
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              alignItems: "center",
            }}>
            <Typography
              color={theme.color.grey}
              sx={{
                fontSize: "0.9rem !important",
                mr: {md: 1},
              }}>
              Follow me :
            </Typography>
            <Box>
              <FacebookIcon
                fontSize="small"
                color={theme.color.grey}
                sx={{ mr: 0.6 }}
              />
              <TwitterIcon
                fontSize="small"
                color={theme.color.grey}
                sx={{ mr: 0.6 }}
              />
              <LinkedInIcon
                fontSize="small"
                color={theme.color.grey}
                sx={{ mr: 0.6 }}
              />
            </Box>
          </Box>
        </Box>
      </Section>
    </SectionContainer>
  );
};

export default BriefInsight;
