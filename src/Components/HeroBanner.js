import React, { useEffect, useState } from "react";
import { Box, Button, Stack, ThemeProvider, Typography, createTheme } from "@mui/material";
import BannerImage from "../assets/images/banner.png";
import BannerImage2 from "../assets/images/Bg.png"

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      ssm: 600,
      sm: 764,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  
});

const HeroBanner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const handleClick = () => {
    if (window.innerWidth < 600) {
      window.scrollTo({ top: 710, behavior: "smooth" });
    } else if (window.innerWidth >= 600 && window.innerWidth < 764) {
      window.scrollTo({ top: 950, behavior: 'smooth' })
    }
    else {
      window.scrollTo({ top: 1120, behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        width={"100%"}
        mt={"60px"}
        mb={{ ssm: '-60px', sm: '0' }}
        sx={{
          display: { xs: "flex" },
          justifyContent: { xs: "center", ssm: "flex-start" },
        }}
      >
        <Stack ml={{ ssm: '10px', sm: '15px', md: "80px", lg: "200px" }} mt={{md: "-10px"}} sx={{ zIndex: "90" }}>
          <Typography
            variant="h6"
            mt={{ xs: "-30px", ssm: '20px', sm: "100px" }}
            sx={{
              fontWeight: "600",
              color: "#FF2625",
            }}
          >
            Fitness Club
          </Typography>
          <Typography
            variant="h4"
            mt={{ xs: "10px", sm: "24px" }}
            sx={{
              fontWeight: "600",
              color: {md: "white"}
            }}
          >
            Sweat, Smile <br />
            And Repeat
          </Typography>
          <Typography mt={{ xs: "10px", sm: "24px" }} sx={{color: {md: "white"}}}>
            Click here to explore
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleClick()}
            sx={{
              marginTop: { xs: "5px", sm: "16px" },
              textTransform: "none",
              width: "200px",
            }}
          >
            <Typography variant="h6">Explore Exercises</Typography>
          </Button>
        </Stack>
        {
          window.innerWidth > 900 ?
            (
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  top: "70px",
                  m: "-16px"
                }}
              >
                <img
                  src={BannerImage2}
                  alt="BannerImage"
                  style={{
                    width: "100%",
                    height: "600px",
                    marginTop: "35px",
                  }}
                />
              </Box>
            )
            :
            window.innerWidth > 764 ?
              (
                <Box
                  sx={{
                    position: "absolute",
                    right: { xs: "10px", md: "50px" },
                    top: "70px",
                  }}
                >
                  <img
                    src={BannerImage}
                    alt="BannerImage"
                    style={{
                      width: "500px",
                      height: "600px",
                      marginTop: "20px",
                    }}
                  />
                </Box>
              ) :
              window.innerWidth >= 600 &&
              <Box
                sx={{
                  position: "absolute",
                  right: { xs: "10px", md: "50px" },
                  top: "70px",
                }}
              >
                <img
                  src={BannerImage}
                  alt="BannerImage"
                  style={{
                    width: "340px",
                    height: "430px",
                    marginTop: "20px",
                  }}
                />
              </Box>
        }
      </Box>
    </ThemeProvider>
  );
};

export default HeroBanner;
