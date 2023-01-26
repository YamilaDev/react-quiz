
import { Button } from "@mui/material"; 
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)(() => ({
    margin: "1rem",  
    borderRadius: '20px',
    backgroundColor: 'seagreen',
    color: 'white' , 
    "&:hover": {
        backgroundColor: 'seagreen',
        transform: "scale(1.02) perspective(0px)",
        boxShadow:   "2px 2px 2px 2px #c0c099", 
      }
  })); 

  
export const StyledButtonLarge = styled("div")(({}) => ({
    backgroundColor: "green",
    borderRadius: "20px",
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "2rem",
    color: "white",
    textTransform: "uppercase",
    "&:hover": {
      transform: "scale(1.02) perspective(0px)",
      boxShadow: "2px 2px 2px 2px #green",
      cursor: "pointer",
    },
  }));