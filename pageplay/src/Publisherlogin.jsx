import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/profile");
  };
  return (
    <Box
      sx={{
        backgroundColor: "#d4e0b4",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#d4e0b4",
          width: "1535px",
          height: "768px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "76px",
            height: "90px",
            top: 0,
            left: "13px",
          }}
        >
          <img
            src="https://c.animaapp.com/0IgO7D9P/img/logo@2x.png"
            alt="Logo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Typography
          sx={{
            position: "absolute",
            top: "30px",
            left: "89px",
            fontFamily: "'Poppins', Helvetica",
            fontWeight: "bold",
            color: "#265073",
            fontSize: "2rem",
          }}
        >
          PagePlay
        </Typography>

        <Box
          sx={{
            position: "absolute",
            width: "912px",
            height: "516px",
            top: "108px",
            left: "312px",
            backgroundColor: "#a4c0ed",
            borderRadius: "13px",
            overflow: "hidden",
            padding: "20px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Poppins', Helvetica",
              fontWeight: "bold",
              color: "black",
              fontSize: "3rem",
              textAlign: "center",
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Poppins', Helvetica",
              fontWeight: "600",
              color: "black",
              fontSize: "2rem",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Login to continue
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "40px",
              padding: "10px 20px",
              marginTop: "50px",
            }}
          >
            <EmailIcon sx={{ marginRight: "10px" }} />
            <TextField
              variant="standard"
              placeholder="Enter E-mail"
              InputProps={{ disableUnderline: true }}
              fullWidth
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "40px",
              padding: "10px 20px",
              marginTop: "20px",
            }}
          >
            <LockIcon sx={{ marginRight: "10px" }} />
            <TextField
              variant="standard"
              placeholder="Enter Password"
              InputProps={{ disableUnderline: true }}
              fullWidth
            />
          </Box>

          <Button
            onClick={handleLogin}
            variant="contained"
            sx={{
              backgroundColor: "#a4c0ed",
              borderRadius: "46px",
              width: "174px",
              height: "49px",
              marginTop: "30px",
              alignSelf: "right"

            }}
          >
            <Typography
              sx={{
                fontFamily: "'Poppins', Helvetica",
                fontWeight: "500",
                color: "black",
                fontSize: "1.25rem",
                position: "centre",


              }}
            >
              Login
            </Typography>
          </Button>

          <Link
            href="#"
            sx={{
              display: "block",
              textAlign: "center",
              fontFamily: "'Poppins', Helvetica",
              fontWeight: "500",
              color: "#265073",
              fontSize: "15px",
              marginTop: "10px",
              textDecoration: "underline",
            }}
          >
            Forgot password
          </Link>

          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "'Poppins', Helvetica",
              fontWeight: "500",
              color: "black",
              fontSize: "1rem",
              marginTop: "20px",
            }}
          >
            New User?{" "}
            <Link href="#" sx={{ color: "#265073" }}>
              Sign Up
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            width: "412px",
            height: "356px",
            top: "394px",
            left: "1120px",
          }}
        >
          <img
            src="https://c.animaapp.com/0IgO7D9P/img/group-15@2x.png"
            alt="Group"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            width: "245px",
            height: "346px",
            top: 0,
            left: "1036px",
          }}
        >
          <img
            src="https://c.animaapp.com/0IgO7D9P/img/24122050-6904354-1.png"
            alt="Element"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            width: "373px",
            height: "265px",
            top: "485px",
            left: 0,
          }}
        >
          <img
            src="https://c.animaapp.com/0IgO7D9P/img/10028970-1@2x.png"
            alt="Element"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
