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

  return (
    <Box width={"100%"}>
      <Stack ml={{ lg: '200px' }}>
        <Typography
          variant="h6"
          mt={{ xs: "-30px", sm: "100px" }}
          ml={6}
          sx={{
            fontWeight: "600",
            color: "#FF2625"
          }}
        >
          Fitness Club
        </Typography>
        <Typography
          variant="h4"
          mt={{ xs: '10px', sm: '24px' }}
          ml={6}
          sx={{
            fontWeight: "600"
          }}
        >
          Sweat, Smile <br />
          And Repeat
        </Typography>
        <Typography mt={{ xs: '10px', sm: '24px' }} ml={6}>
          Click here to explore
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={() => window.scrollTo({ top: 1060, behavior: "smooth" })}
          sx={{
            marginTop: { xs: '5px', sm: '16px' },
            marginLeft: "45px",
            textTransform: "none",
            width: '200px'
          }}
        >
          <Typography variant="h6">Explore Exercises</Typography>
        </Button>
      </Stack>
      {window.innerWidth > 760 && (
        <Box sx={{ position: 'absolute', right: { xs: '10px', md: '250px' }, top: "70px", }}>
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
      )}
    </Box>
  );
};

export default HeroBanner;
