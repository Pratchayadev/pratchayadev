import React, { useState } from "react";
import {
  IconButton,
  Button,
  ThemeProvider,
  Grid,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    light: {
      main: "#ffffff",
      contrastText: "#ffffff",
    },
  },
});

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    var fadeTarget = document.querySelector(".main--intro");
    var toggleTarget = document.querySelector(".sidebar--intro");
    if (!isOpen) {
      toggleTarget.style.transform = `translateX(0px)`;
      toggleTarget.style.display = "block";
      var fadeEffect = setInterval(() => {
        if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
        }

        if (fadeTarget.style.opacity > 0) {
          let opa = parseFloat(fadeTarget.style.opacity);
          opa -= 0.1;
          fadeTarget.style.opacity = opa;
        } else {
          clearInterval(fadeEffect);
          fadeTarget.style.display = "none";
        }
      }, 20);
      setIsOpen(true);
    } else {
      toggleTarget.style.transform = `translateX(-100vw)`;
      var fadeEffect = setInterval(() => {
        if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 0;
        }
        if (fadeTarget.style.opacity < 1) {
          let opa = parseFloat(fadeTarget.style.opacity);
          opa += 0.1;
          fadeTarget.style.opacity = opa;
        } else {
          clearInterval(fadeEffect);
          fadeTarget.style.display = "flex";
        }
      }, 20);
      setIsOpen(false);
    }
  };

  return (
    <div>
      {isOpen ? (
        <ThemeProvider theme={theme}>
          <IconButton
            className="exit-bottom"
            aria-label="delete"
            color="light"
            sx={{
              backgroundColor: "rgb(34, 34, 34)",
              position: "absolute",
              top: "3%",
              right: "3%",
              //   border: "solid 4px black",
            }}
            onClick={() => {
              toggleSidebar(isOpen);
            }}
          >
            <CloseIcon />
          </IconButton>
        </ThemeProvider>
      ) : (
        ""
      )}

      <div className="app--intro">
        <div className="main--intro">
          <h1 className="superkey--intro">PRATCHAYA</h1>
          <spam className="subkey--intro">I am Developer</spam>
          <ThemeProvider theme={theme}>
            <Button
              className="btn-control"
              variant="outlined"
              color="light"
              sx={{ fontSize: 14, fontWeight: 100, marginTop: 5 }}
              onClick={() => {
                toggleSidebar(isOpen);
              }}
            >
              SEE MORE
            </Button>
          </ThemeProvider>
        </div>
        <div className="sidebar--intro">
          <div className="profile--intro">
            <Grid container>
              <Grid item xs={12} md={3} lg={2}>
                <div className="sec-profile">
                  <div className="con-profile-img">
                    <img src="/assets/images/profile.jpeg" width="100%" />
                  </div>
                  <div className="group-profile-detail">
                    <p className="group-profile-title">Personal Details</p>
                    <div className="line-hr"></div>
                    <ul className="group-profile-list">
                      <li>Name : Pratchaya Nacharee </li>
                      <li>Age : 28 years</li>
                      <li>Date of Birth : 31 oct 1993</li>
                      <li>Nationality : Thai</li>
                      <li>Religion : Buddhism</li>
                    </ul>
                  </div>

                  <div className="group-profile-detail">
                    <p className="group-profile-title">Contact</p>
                    <div className="line-hr"></div>
                    <ul className="group-profile-list">
                      <li>
                        <AlternateEmailIcon sx={{ fontSize: "14px" }} />{" "}
                        Pratchayadev@gmail
                      </li>
                      <li>
                        <FacebookIcon sx={{ fontSize: "14px" }} />{" "}
                        fb.com/pratchayadev
                      </li>
                      <li>
                        <TelegramIcon sx={{ fontSize: "14px" }} /> @Pratchayadev
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={9} lg={10}>
                <div className="sec-cover">
                  <Grid container>
                    <Grid item xs={12} md={4} lg={4} padding={1}>
                      <div className="sec-in-cover">
                        <div className="sec-objective">
                          <span className="objective-profile-title">
                            About Me
                          </span>
                          <div className="line-hr"></div>
                          <span className="detail-other">
                            Hi My name is Pratchaya Nacharee.
                            <br />
                            I am interested in is Web/App Developer
                            <br />
                            And I'm always interested in programming and
                            learning new things.
                          </span>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} padding={1}>
                      <div className="sec-in-cover">
                        <div className="sec-objective">
                          <span className="objective-profile-title">
                            Education
                          </span>
                          <div className="line-hr"></div>
                          <span className="detail-other">
                            Information Technology <br />
                            Udonthani Rajabhat University
                          </span>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} padding={1}>
                      <div className="sec-in-cover">
                        <div className="sec-objective">
                          <span className="objective-profile-title">
                            Skills
                          </span>
                          <div className="line-hr"></div>
                          <span className="detail-other">
                            HTML, jQuery, React(Next), Vue(Nuxt)
                            <br />
                            Php(Laravel), Nodejs(Fastify)
                            <br />
                            CSS(Bootstrap, Tailwind)
                            <br />
                            SQL, MongoDB
                          </span>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} md={12} xl={12} padding={1}>
                      <div className="sec-in-cover">
                        <div className="sec-objective">
                          <span className="objective-profile-title">
                            Work Experience
                          </span>
                          <div className="line-hr"></div>
                          <p className="detail-other">
                            Junior Programmer Peed Digital Online Marketing
                            (2013-2018)
                          </p>
                          <p className="detail-other">
                            Junior Programmer Pixel Online Marketing (2018-2019)
                          </p>
                          <p className="detail-other">
                            Fullstack Developer Freelance Job (2019-2020)
                          </p>
                          <p className="detail-other">
                            Fullstack Developer I Get Media (2020-2021)
                          </p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                 
                
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="footer--intro">
          <small>
            Copyright © 2022 - 2023 PRATCHAYADEV All Rights Reserved.
          </small>
          <div className="footer-icon-box--intro">
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <AlternateEmailIcon />
            </IconButton>
            <IconButton>
              <TelegramIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
