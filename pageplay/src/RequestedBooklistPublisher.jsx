import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";import { useNavigate } from "react-router-dom";


export const RequestedBooklist = () => {
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
          width: "1535px",
          height: "1294px",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", top: 250, right: 263 }}>
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
              backgroundColor: "white",
              borderRadius: "25px",
              border: "2px solid #00000012",
              width: "300px",
            }}
          />
        </Box>

        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: 157,
            left: 689,
            fontWeight: "bold",
            textDecoration: "underline",
            color: "secondary.main",
          }}
        >
          RequestedBooklist
        </Typography>

        <Box sx={{ position: "absolute", top: 294, left: 414 }}>
          <Card sx={{ width: 199, height: 249 }}>
            <CardMedia
              component="img"
              image="https://c.animaapp.com/8VgLvZlh/img/right-side-book.png"
              alt="Right side book"
              sx={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Box>

        <Box sx={{ position: "absolute", top: 900, left: 422 }}>
          <Card sx={{ width: 178, height: 267 }}>
            <CardMedia
              component="img"
              image="https://c.animaapp.com/8VgLvZlh/img/rectangle-38@2x.png"
              alt="Rectangle"
              sx={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Box>
          <Box sx={{ position: "absolute", top: 585, left: 422 }}>
          <Card sx={{ width: 178, height: 267 }}>
            <CardMedia
              component="img"
              image="https://c.animaapp.com/EU1IZw5V/img/rectangle-3-11@2x.png"
              alt="Rectangle"
              sx={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Box>

        <Box sx={{ position: "absolute", top: 880, left: 0 }}>
          <Card sx={{ width: 330, height: 363 }}>
            <CardMedia
              component="img"
              image="https://c.animaapp.com/8VgLvZlh/img/group-22@2x.png"
              alt="Group"
              sx={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Box>

        <Box
       
          sx={{
            position: "absolute",
            top: 10,
            left: 13,
            width: "1507px",
            height: "94px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            src="https://c.animaapp.com/8VgLvZlh/img/book-1@2x.png"
            alt="Book"
            sx={{ width: 76, height: 90 }}
          />
          <Typography
            variant="h5"
            sx={{ marginLeft: 2, color: "#265073", fontWeight: "bold" }}
          >
            PagePlay
          </Typography>
          <Typography
            variant="h5"
            sx={{ marginLeft: 2, color: "#265073", fontWeight: "bold" }}
          >
            Publisher
          </Typography>
          <Typography
          onClick={handleHome}
            variant="h5"
            sx={{ marginLeft: 2, color: "black", fontWeight: "bold" }}
          >
            Home
          </Typography>
          <Typography
          onClick={handleBooklist}
            variant="h5"
            sx={{ marginLeft: 2, color: "black", fontWeight: "bold" }}
          >
            Booklist
          </Typography>
          <Typography
          onClick={handleRequestedbooklist}
            variant="h5"
            sx={{
              marginLeft: 2,
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            RequestedBooks
          </Typography>
          <Typography
          onClick={handleTransaction}
            variant="h5"
            sx={{ marginLeft: 2, color: "black", fontWeight: "bold" }}
           
          >
            Transaction
          </Typography>
          <Avatar
          onClick={handlePublisherprofile}
            src="https://c.animaapp.com/8VgLvZlh/img/user-modified-3@2x.png"
            alt="User"
            sx={{
              width: 58,
              height: 58,
              backgroundColor: "#58b6d5",
              marginLeft: 2,
            }}
          />
          <ArrowDropDownIcon sx={{ marginLeft: 1 }} />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 576,
            left: 405,
            width: "1102px",
            height: "1px",
            backgroundColor: "black",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 854,
            left: 399,
            width: "1108px",
            height: "1px",
            backgroundColor: "black",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 326,
            left: 65,
            width: 250,
            height: 445,
            backgroundColor: "#e9d7a7",
            border: "1px solid black",
          }}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Type" />
              <ArrowDropDownIcon />
            </ListItem>
            <ListItem button>
              <ListItemText primary="PublicationDate" />
              <ArrowDropDownIcon />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Author" />
              <ArrowDropDownIcon />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Category" />
              <ArrowDropDownIcon />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Price" />
              <ArrowDropDownIcon />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Rating" />
              <ArrowDropDownIcon />
            </ListItem>
          </List>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 294,
            left: 641,
            width: 837,
            height: 244,
            overflow: "hidden",
          }}
        >
          <Typography variant="body1" sx={{ color: "black" }}>
            Author: Jonathan Starweaver
            <br />
            Genre: Science Fiction
            <br />
            Publication Date: February 15, 2023
            <br />
            Language: English
            <br />
            ISBN: 978-1-234-56789-0
            <br />
            In a world where all human knowledge is stored in a sentient,
            infinite digital library, archivist Alina uncovers a forbidden
            section that can alter reality. Facing AI overlords and a resistance
            group, she must navigate moral dilemmas and the power of knowledge.
          </Typography>
        </Box>

        <Box sx={{ position: "absolute", top: 607, left: 636, width: 754 }}>
          <Typography variant="body1" sx={{ color: "black" }}>
            Author: Jonathan Starweaver
            <br />
            Genre: Science Fiction
            <br />
            Publication Date: February 15, 2023
            <br />
            Language: English
            <br />
            ISBN: 978-1-234-56789-0
            <br />A sci-fi tribute to the power of books, blending futuristic
            themes with timeless reflections on how literature shapes and
            connects humanity—a perfect read for bibliophiles and sci-fi fans.
          </Typography>
        </Box>

        <Box sx={{ position: "absolute", top: 880, left: 631, width: 754 }}>
          <Typography variant="body1" sx={{ color: "black" }}>
            Author: Jonathan Starweaver
            <br />
            Genre: Contemporary Fiction
            <br />
            Publication Date: October 10, 2022
            <br />
            Language: English
            <br />
            ISBN: 978-1-987-65432-1
            <br />A heartwarming tale of Claire, an avid reader, who learns to
            balance her love for books with real-life relationships, discovering
            that the best stories are often the ones we live.
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 145,
            left: 65,
            width: 203,
            height: 140,
          }}
        >
          <CardMedia
            component="img"
            image="https://c.animaapp.com/8VgLvZlh/img/group@2x.png"
            alt="Group"
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
