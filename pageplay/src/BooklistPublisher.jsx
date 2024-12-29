import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
export const Booklist = () => {
  const navigate = useNavigate();
   
     
          const handleTransaction = () => {
            navigate("/transactions");
          };
         
          const handleRequestedbooklist = () => {
            navigate("/requested-books");
          };
         
         
          const handlePublisherprofile = () => {
            navigate("/profile");
          };
  return (
    <Box
      sx={{
        backgroundColor: "#f6ffde",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f6ffde",
          overflow: "hidden",
          width: 1500,
          height: 1294,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 200,
            height: 40,
            top: 202,
            left: 1123,
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search Your Books"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              width: 218,
              height: 49,
              borderRadius: 25,
              border: "2px solid #00000012",
              backgroundColor: "white",
            }}
          />
        </Box>

        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: 148,
            left: 634,
            color: "secondary.main",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Booklist
        </Typography>

        <Box
          sx={{
            position: "absolute",
            width: 1473,
            height: 944,
            top: 304,
            left: 8,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper
                sx={{
                  backgroundColor: "#e9d7a7",
                  border: "1px solid black",
                  padding: 2,
                }}
              >
                {[
                  "Type",
                  "PublicationDate",
                  "Author",
                  "Cateogory",
                  "Price",
                  "Rating",
                ].map((label) => (
                  <Box
                    key={label}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#1f1e1a" }}
                    >
                      {label}
                    </Typography>
                    <ArrowDropDownIcon />
                  </Box>
                ))}
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Grid container spacing={2}>
                {[
                  "https://c.animaapp.com/EU1IZw5V/img/rectangle-2.svg",
                  "https://c.animaapp.com/EU1IZw5V/img/rectangle-3@2x.png",
                  "https://c.animaapp.com/EU1IZw5V/img/rectangle-4@2x.png",
                  "https://c.animaapp.com/EU1IZw5V/img/rectangle-5@2x.png",
                  "https://c.animaapp.com/EU1IZw5V/img/rectangle-7@2x.png",
                  "https://c.animaapp.com/EU1IZw5V/img/rectangle-3-11@2x.png",
                  "https://c.animaapp.com/EU1IZw5V/img/rectangle-4-11@2x.png",
                  "https://c.animaapp.com/EU1IZw5V/img/rectangle-36-1@2x.png",
                  "https://c.animaapp.com/EU1IZw5V/img/rectangle-18-1@2x.png",
                ].map((src, index) => (
                  <Grid item xs={4} key={index}>
                    <img
                      src={src}
                      alt={`Book ${index + 1}`}
                      style={{ width: "60%", height: "auto" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            position: "absolute",
            width: 1507,
            height: 94,
            top: -3,
            left: 21,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="https://c.animaapp.com/EU1IZw5V/img/book-1@2x.png"
              alt="Book"
              style={{ width: 76, height: 90 }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#265073",
                textDecoration: "underline",
              }}
            >
              PagePlay
            </Typography>
            <Typography
            
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#121212f7",
                textDecoration: "underline",
              }}
            >
              Booklist
            </Typography>
            <Typography
            onClick={handleRequestedbooklist}
              variant="h6"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              RequestedBooks
            </Typography>
            <Typography
            onClick={handleTransaction}
              variant="h6"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              Transaction
            </Typography>
            <Avatar
            onClick={handlePublisherprofile}
              src="https://c.animaapp.com/EU1IZw5V/img/user-modified-3@2x.png"
              sx={{ width: 58, height: 58, backgroundColor: "#58b6d5" }}
            />
            <ArrowDropDownIcon />
          </Box>
        </Box>

        <img
          src="https://c.animaapp.com/EU1IZw5V/img/10523944-1.png"
          alt="Element"
          style={{
            position: "absolute",
            width: 142,
            height: 197,
            top: 104,
            left: 7,
          }}
        />
        
      </Box>
      
      <Box sx={{ position: "absolute", top: 880, left: 100 }}>
          <Card sx={{ width: 330, height: 363 }}>
            <CardMedia
              component="img"
              image="https://c.animaapp.com/8VgLvZlh/img/group-22@2x.png"
              alt="Group"
              sx={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Box>
    </Box>
  );
};
