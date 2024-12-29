import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RequestedBooklist } from "./RequestedBooklistPublisher";
export const PublisherProfile = () => {
   const navigate = useNavigate();
    const handleAddbook = () => {
      navigate("/add-book");}
     
          const handleTransaction = () => {
            navigate("/transactions");
          };
         
          const handleRequestedbooklist = () => {
            navigate("/requested-books");
          };
          const handleBooklist = () => {
            navigate("/booklist");
          };
         
          const handlePublisherprofile = () => {
            navigate("/profile");
          };
  return (
    <Box
      sx={{
        backgroundColor: "#f5ffde",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f6ffde",
          width: "1535px",
          height: "1294px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 36,
            right: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search Your Books"
            sx={{
              top:150,
              width: "356px",
              borderRadius: "25px",
              backgroundColor: "white",
              
            }}
            InputProps={{
              startAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Box>

        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: 146,
            left: 591,
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Profile
        </Typography>

        <Box
          sx={{
            position: "absolute",
            top: 315,
            left: 389,
            textAlign: "center",
          }}
        >
          <Avatar
            src="https://c.animaapp.com/EU1IZw5V/img/user-modified-3@2x.png"
            sx={{ width: 250, height: 250, left:-300 }}
          />
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "#68d455",
              borderRadius: "20px",
              fontSize: "32px",
              left:-300,
            }}
          >
            Edit Picture
          </Button>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 2.5,
            left: 13,
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Avatar src="https://c.animaapp.com/EU1IZw5V/img/book-1@2x.png" sx={{ width: 76, height: 90 }} />
          <Typography
            variant="h4"
            sx={{ marginLeft: 2, color: "#265073", fontWeight: "bold" }}
          >
            PagePlay
          </Typography>
          <Typography
            variant="h4"
            sx={{ marginLeft: 2, color: "#265073", fontWeight: "bold" }}
          >
            Publisher
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h5" sx={{ marginLeft: 2, fontWeight: "bold" }}>
            Home
          </Typography>
          
          <Typography 
          onClick={handleBooklist}
          variant="h5" sx={{ marginLeft: 2, fontWeight: "bold" }}>
            Booklist
          </Typography>
          <Typography
          onClick={handleRequestedbooklist}
            variant="h5"
            sx={{
              marginLeft: 2,
              fontWeight: "bold",
              
            }}
          >
            RequestedBooks
            
          </Typography>
         
          
          <Typography 
          onClick={handleTransaction}
          variant="h5" sx={{ marginLeft: 2, fontWeight: "bold" }}>
            Transaction
          </Typography>
          
          <Avatar
          onClick={handlePublisherprofile}
            src="https://c.animaapp.com/EU1IZw5V/img/user-modified-3@2x.png"
            sx={{ width: 58, height: 58, marginLeft: 2 }}
          />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </Box>

        <Divider
          sx={{ position: "absolute", top: 667, left: 3.5, width: "1507px" }}
        />

        <Grid
          container
          spacing={2}
          sx={{ position: "absolute", top: 723, left: 57 }}
        >
          <Grid item>
            <PersonIcon sx={{ fontSize: 72 }} />
          </Grid>
          <Grid item>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Publisher Name :
            </Typography>
          </Grid>
        </Grid>

        <Divider
          sx={{ position: "absolute", top: 763, left: 525, width: "912px" }}
        />
        <Divider
          sx={{ position: "absolute", top: 874, left: 531, width: "912px" }}
        />
        <Divider
          sx={{ position: "absolute", top: 1003, left: 531, width: "912px" }}
        />
        <Divider
          sx={{ position: "absolute", top: 1122, left: 525, width: "912px" }}
        />
        <Divider
          sx={{ position: "absolute", top: 1216, left: 525, width: "912px" }}
        />

        <Grid
          container
          spacing={2}
          sx={{ position: "absolute", top: 845, left: 57 }}
        >
          <Grid item>
            <PhoneIcon sx={{ fontSize: 72 }} />
          </Grid>
          <Grid item>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Contact Number :
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{ position: "absolute", top: 976, left: 57 }}
        >
          <Grid item>
            <EmailIcon sx={{ fontSize: 72 }} />
          </Grid>
          <Grid item>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Email Address :
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{ position: "absolute", top: 1080, left: 57 }}
        >
          <Grid item>
            <LocationOnIcon sx={{ fontSize: 72 }} />
          </Grid>
          <Grid item>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Location :
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{ position: "absolute", top: 1186, left: 57 }}
        >
          <Grid item>
            <DescriptionIcon sx={{ fontSize: 72 }} />
          </Grid>
          <Grid item>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Description:
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            position: "absolute",
            top: 261,
            left: 873,
            width: "506px",
            height: "290px",
            backgroundImage: "url(/image-5.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
            
          >
             <Box sx={{ position: "absolute", top: 50, left: 200 }}>
                       <Card sx={{ width: 350, height: 350 }}>
                         <CardMedia
                           component="img"
                           image="https://c.animaapp.com/8VgLvZlh/img/rectangle-38@2x.png"
                           alt="Rectangle"
                           sx={{ width: "100%", height: "100%" }}
                         />
                       </Card>
                     </Box>
            <Button
          onClick={handleAddbook}
              variant="contained"
              sx={{
                backgroundColor: "#ecda36",
                borderRadius: "15px",
                fontSize: "30px",
                 top:50,
                 left:100,
              }}
            >
              Add Book
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PublisherProfile;