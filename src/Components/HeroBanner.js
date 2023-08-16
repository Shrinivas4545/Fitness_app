import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import BannerImage from "../assets/images/banner.png";

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
    } else {
      window.scrollTo({ top: 1120, behavior: "smooth" });
    }
  };

  return (
    <Box
      width={"100%"}
      mt={"60px"}
      sx={{
        display: { xs: "flex" },
        justifyContent: { xs: "center", sm: "flex-start" },
      }}
    >
      <Stack ml={{ lg: "200px" }}>
        <Typography
          variant="h6"
          mt={{ xs: "-30px", sm: "100px" }}
          ml={{ sm: "32px" }}
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
          ml={{ sm: "32px" }}
          sx={{
            fontWeight: "600",
          }}
        >
          Sweat, Smile <br />
          And Repeat
        </Typography>
        <Typography mt={{ xs: "10px", sm: "24px" }} ml={{ sm: "32px" }}>
          Click here to explore
        </Typography>
        <Button
          variant="contained"
          color="error"
          // onClick={() => window.scrollTo({ top: 1060, behavior: "smooth" })}
          onClick={() => handleClick()}
          sx={{
            marginTop: { xs: "5px", sm: "16px" },
            marginLeft: { sm: "30px" },
            textTransform: "none",
            width: "200px",
          }}
        >
          <Typography variant="h6">Explore Exercises</Typography>
        </Button>
      </Stack>
      {window.innerWidth > 764 ?
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
                marginTop: "10px",
              }}
            />
          </Box>
        ) :
        window.innerWidth >= 600 &&
        <Box
          sx={{
            position: "absolute",
            right: { xs: "10px", md: "50px" },
            top: "140px",
          }}
        >
          <img
            src={BannerImage}
            alt="BannerImage"
            style={{
              width: "330px",
              height: "430px",
              marginTop: "10px",
            }}
          />
        </Box>
      }
    </Box>
  );
};

export default HeroBanner;
