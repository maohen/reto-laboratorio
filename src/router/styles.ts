import { styled } from "@mui/system";

export const Nav = styled('nav')(({theme})=>({
    backgroundColor: '#363a45',
    height: "100vh",
    marginRight: "10px",
    position: "fixed",
    textAlign: "center",
    width: "22%",
    [theme.breakpoints.down("md")]: {
      width: "260px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      marginRight: "0px",
      position: "relative",
      width: "100%",
    },
  }));
  
export const Ul = styled('ul')({
    alignItems: "center",
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 0,
    paddingBottom: 20,
  });

export const Li = styled('li')({
    listStyle: "none",
    marginBottom: '10px',
    "& a":{
        color: "white",
        fontSize: "1.2rem",
        position: "relative",
        textDecoration: "none",
    },
    "& .nav-active":{
        color: "#fff",
        transition: "all .4s ease-out",
    },
    "& a::after":{
        content: '""',
        backgroundColor: "#fff",
        display: "block",
        height: "3px",
        marginTop: "3px",
        position: "absolute",
        transition: "all .4s ease-out",
        width: "0"
    },
    "& a:hover::after":{
      content: '""',
      backgroundColor: "#fff",
      display: "block",
      height: "2px",
      marginTop: "3px",
      position: "absolute",
      transition: "all .4s ease-out",
      width: "90%"
    },
    "& .nav-active::after":{
      content: '""',
      backgroundColor: "#fff",
      display: "block",
      height: "2px",
      marginTop: "3px",
      position: "absolute",
      transition: "all .4s ease-out",
      width: "90%"
    },
  });
