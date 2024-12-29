import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
export const Transaction = () => {
  const navigate = useNavigate();
    const handleTransaction = () => {
      navigate("/transactions");
    };
   
    const handleRequestedbooklist = () => {
      navigate("/requested-books");
    };
    const handleBooklist = () => {
      navigate("/booklist");
    };
    const handleHome = () => {
      navigate("/home");
    };
    const handlePublisherprofile = () => {
      navigate("/profile");
    };
  return (
    <Box sx={{ width: "100%", height: "100%", bgcolor: "#f5ffde" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src="https://c.animaapp.com/b3iWlwlR/img/book-1@2x.png"
              sx={{ width: 76, height: 90 }}
            />
            <Typography
              variant="h4"
              sx={{ ml: 2, fontWeight: "bold", color: "#265073" }}
            >
              PagePlay
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography 
            onClick={handleHome}
            variant="h6" sx={{ mx: 2, fontWeight: "bold" }}>
              Home
            </Typography>
            <Typography 
             onClick={handleBooklist}
            variant="h6" sx={{ mx: 2, fontWeight: "bold" }}>
              Booklist
            </Typography>
            <Typography 
             onClick={handleRequestedbooklist}
            variant="h6" sx={{ mx: 2, fontWeight: "bold" }}>
              RequestedBooks
            </Typography>
            <Typography
              variant="h6"
              sx={{ mx: 2, fontWeight: "bold", textDecoration: "underline" }}
            >
              Transaction
            </Typography>
            <Avatar
             onClick={handlePublisherprofile}
              src="https://c.animaapp.com/b3iWlwlR/img/user-modified-3@2x.png"
              sx={{ width: 58, height: 58, bgcolor: "#58b6d5", ml: 2 }}
            />
            <ArrowDropDownIcon sx={{ ml: 1, mt: 2 }} />
          </Box>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", my: 4 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", textDecoration: "underline" }}
          >
            Transaction
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "white",
              borderRadius: 25,
              border: "2px solid #00000012",
              px: 2,
              py: 1,
            }}
          >
            <SearchIcon />
            <TextField
              variant="standard"
              placeholder="Search Your Books"
              InputProps={{ disableUnderline: true }}
              sx={{ ml: 1 }}
            />
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Book
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Author
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Genre
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Publication Date
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              ISBN
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Transaction
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <Avatar
              variant="square"
              src="https://c.animaapp.com/b3iWlwlR/img/right-side-book.png"
              sx={{ width: 200, height: 300 }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Jonathan Starweaver
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Science Fiction
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              February 15, 2023
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              988-5-467-222
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              $69
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <Avatar
              variant="square"
              src="https://c.animaapp.com/b3iWlwlR/img/rectangle-39@2x.png"
              sx={{ width: 200, height: 300 }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Jonas Steam
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Science Fiction
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              5 January, 2020
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              878-235-898
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              $72
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <Avatar
              variant="square"
              src="https://c.animaapp.com/b3iWlwlR/img/rectangle-3-12@2x.png"
              sx={{ width: 200, height: 300 }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Harry Thomas
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Contemporary Fiction
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              October 10, 2022
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              978-1-987-654
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              $62
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />
        

        <Box sx={{ display: "flex", justifyContent: "right", mt: 0 }}>
          <Avatar
            src="https://c.animaapp.com/b3iWlwlR/img/ai-image.svg"
            sx={{ width: 300, height: 300  }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "left", mt: 9 }}>
          <Avatar
            src="https://c.animaapp.com/8VgLvZlh/img/group-22@2x.png"
            sx={{ width: 300, height: 300,bottom:400 }}
          />
        </Box>
      </Container>
    </Box>
  );
};
