import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
export const AddBook = () => {
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
        backgroundColor: "#f5ffde",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor:"#f5ffde",
          width: "1535px",
          height: "1294px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "457px",
            height: "49px",
            top: 36,
            left: "1011px",
          }}
        >
          <Autocomplete
            freeSolo
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search Your Books"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
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
                  top:150,
                }}

              />
            )}
          />
        </Box>

        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: 148,
            left: 572,
            fontWeight: "bold",
            color: "secondary.main",
            textDecoration: "underline",
          }}
        >
          Add Book
        </Typography>

        <Box
          sx={{
            position: "absolute",
            width: "461px",
            height: "254px",
            top: 315,
            left: 445,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "181px",
              height: "254px",
              top: 0,
              left: 0,
            }}
          >
            
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "432px",
              top: 12,
              left: 29,
              height: "1px",
              backgroundColor: "black",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "432px",
              top: 197,
              left: 3.5,
              height: "1px",
              backgroundColor: "black",
            }}
          />
        </Box>

        <Box
          sx={{ position: "absolute", width: "126px", top: 1043, left: 326 }}
        />

        <Box
          sx={{
            position: "absolute",
            width: "1507px",
            height: "94px",
            top: 2.5,
            left: 13,
          }}
        >
          <Avatar
            src="https://c.animaapp.com/QcflaPij/img/book-1@2x.png"
            sx={{
              position: "left",
              width: "76px",
              height: "90px",
              top: 1,
              left: -100,
            }}
          />
          <Typography
            variant="h4"
            sx={{
              position: "absolute",
              top: 30,
              left: 20,
              fontWeight: "bold",
              color: "#265073",
            }}
          >
            PagePlay
          </Typography>
          <Typography
          onClick={handleBooklist}
            variant="h5"
            sx={{
              position: "absolute",
              top: 11,
              left: 829,
              fontWeight: "bold",
              color: "#121212f7",
            }}
          >
            Booklist
          </Typography>
          <Typography
          onClick={handleHome}
            variant="h5"
            sx={{
              position: "absolute",
              top: 11,
              left: 695,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Home
          </Typography>
          <Typography
          onClick={handleRequestedbooklist}
            variant="h5"
            sx={{
              position: "absolute",
              top: 10,
              left: 974,
              fontWeight: "bold",
              color: "black",
              
            }}
          >
            RequestedBooks
          </Typography>
          
          <Typography
          onClick={handleTransaction}
            variant="h5"
            sx={{
              position: "absolute",
              top: 11,
              left: 1215,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Transaction
          </Typography>
      
          
          <Avatar
          onClick={handlePublisherprofile}
            src="https://c.animaapp.com/QcflaPij/img/user-modified-3@2x.png"
            sx={{
              
              position: "absolute",
              width: "58px",
              height: "58px",
              top: 11,
              left: 1424,
              backgroundColor: "#58b6d5",
            }}
          />
          <ArrowDropDownIcon
            sx={{ position: "absolute", top: 11, left: 1487 }}
          />
          <Typography
            variant="h4"
            sx={{
              position: "absolute",
              top: 30,
              left: 237,
              fontWeight: "bold",
              color: "#265073",
            }}
          >
            Publisher
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            width: "432px",
            height: "10px",
            top: 696,
            left: 474,
          }}
        >
          
          <Box
            sx={{
              position: "absolute",
              width: "432px",
              top: 9,
              left: 0,
              height: "1px",
              backgroundColor: "black",
            }}
          />
        </Box>

        <Box
          component="img"
          src="https://c.animaapp.com/QcflaPij/img/image-6.png"
          alt="Image"
          sx={{
            position: "absolute",
            width: "504px",
            height: "767px",
            top: 291,
            left: 962,
          }}
        />

        <Button
          variant="contained"
          sx={{
            position: "absolute",
            width: "221px",
            height: "105px",
            top: 1116,
            left: 1094,
            borderRadius: "50px",
            border: "1px solid #c6e118",
            backgroundColor: "#ecda36",
            color: "black",
            fontSize: "32px",
            fontWeight: "normal",
          }}
        >
          Add Book
        </Button>

        <Avatar
          src="https://c.animaapp.com/QcflaPij/img/user-6@2x.png"
          sx={{
            position: "absolute",
            width: "72px",
            height: "72px",
            top: 315,
            left: 51,
          }}
        />
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: 323,
            left: 150,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Author Name :
        </Typography>
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: 477,
            left: 150,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Book Name :
        </Typography>
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: 673,
            left: 150,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Publication Date :
        </Typography>
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: 865,
            left: 163,
            fontWeight: "bold",
            color: "black",
          }}
        >
          ISBN :
        </Typography>
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: 1061,
            left: 173,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Genre :
        </Typography>

        <Avatar
          src="https://c.animaapp.com/QcflaPij/img/my-books-1@2x.png"
          sx={{
            position: "absolute",
            width: "93px",
            height: "89px",
            top: 471,
            left: 30,
          }}
        />
        <Avatar
          src="https://c.animaapp.com/QcflaPij/img/image-7@2x.png"
          sx={{
            position: "absolute",
            width: "107px",
            height: "101px",
            top: 647,
            left: 13,
          }}
        />
        <Avatar
          src="https://c.animaapp.com/QcflaPij/img/image-8@2x.png"
          sx={{
            position: "absolute",
            width: "149px",
            height: "148px",
            top: 832,
            left: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "584px",
            top: 906,
            left: 322,
            height: "1px",
            backgroundColor: "black",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "503px",
            top: 1088,
            left: 403,
            height: "1px",
            backgroundColor: "black",
          }}
        />
        <Avatar
          src="https://c.animaapp.com/QcflaPij/img/image-9@2x.png"
          sx={{
            position: "absolute",
            width: "113px",
            height: "113px",
            top: 1044,
            left: 5,
          }}
        />
      </Box>
    </Box>
  );
};
