import Image from "next/head";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {
  Box,
  Container,
  IconButton,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CardCustom from "../components/CardCustom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from '@mui/icons-material/Telegram';
export default function Home() {
  return (
    <DefaultLayout>
      <Container maxWidth="sm">
        <CardCustom>
          <Box
            sx={{
              width: 130,
              height: 130,
              borderRadius: 100,
              overflow: "hidden",
              boxShadow: 1,
              marginBottom: "1.5rem",
              position: "relative",
              top: 0,
            }}
          >
            <img
              src="/assets/images/profile.jpeg"
              alt="Picture of the author"
              width="100%"
              height="100%"
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <span style={{ fontSize: 26, fontWeight: 400 }}>
              PRATCHAYA NACHAREE
            </span>
            <br />
            <small
              style={{
                fontWeight: 100,
                fontSize: 12,
                color: "rgb(125 181 130)",
              }}
            >
              - WEB DEVELOPER -
            </small>
          </Box>

          <Box sx={{ justifyContent: "center", alignItems: "center",}}>
            <IconButton >
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <AlternateEmailIcon />
            </IconButton>
            <IconButton>
              <TelegramIcon />
            </IconButton>
          </Box>

          <IconButton
            aria-label="dropdown"
            sx={{
              backgroundColor: "white",
              borderWidth: 3,
              borderStyle: "solid",
              borderColor: "rgb(245, 245, 245);",
              position: "relative",
              bottom: -50,
            }}
          >
            <ArrowDownwardIcon />
          </IconButton>
        </CardCustom>

        <CardCustom>
          <Grid container>
            <Grid item xs={8}>
              <List
                sx={{
                  width: "100%",
                }}
                component="nav"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Personal Information
                  </ListSubheader>
                }
              >
                <ListItem className="list-item-custom">
                  <ListItemText sx={{ paddingLeft: "1rem" }}>
                    <span className="list-personal">
                      Fullname : Pratchaya Nacharee
                    </span>
                  </ListItemText>
                </ListItem>
                <ListItem className="list-item-custom">
                  <ListItemText sx={{ paddingLeft: "1rem" }}>
                    <span className="list-personal">Nickname : Q</span>
                  </ListItemText>
                </ListItem>
                <ListItem className="list-item-custom">
                  <ListItemText sx={{ paddingLeft: "1rem" }}>
                    <span className="list-personal">Nickname : Q</span>
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              tes
            </Grid>
          </Grid>
          <IconButton
            aria-label="dropdown"
            sx={{
              backgroundColor: "white",
              borderWidth: 3,
              borderStyle: "solid",
              borderColor: "rgb(245, 245, 245);",
              position: "relative",
              bottom: -50,
            }}
          >
            <ArrowDownwardIcon />
          </IconButton>
        </CardCustom>
      </Container>
    </DefaultLayout>
  );
}
