
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";
import { Li, Nav, Ul } from "./styles";
import Text from "../components/Text";
import { loadDataIp } from "../api/axios/loadData";
import { GET_IP } from "../api";


const RouterMain = () => {

  const [ip, setIp] = useState();

  useEffect(() => {
    loadDataIp(GET_IP).then(data=>{
      setIp(data.ip)
    });
  }, []);

  return (
    <BrowserRouter>
      <Grid
        container
        spacing={2}
        direction="row"
      >
        <Grid item xs={12} sm={5} md={3}>
            <Nav>
                <img src={logo} alt="logo app" />
                <Ul>
                    {routes.map((route) => (
                    <Li key={route.path}>
                        <NavLink
                        to={route.to}
                        className={({ isActive }) => (isActive ? "nav-active" : "")}
                        >
                        {route.name}
                        </NavLink>
                    </Li>
                    ))}
                </Ul>
                <Text color={"#fff"} sx={{position: "absolute", bottom:5, width:'100%' }}>IP: {ip}</Text>
            </Nav>
        </Grid>
        <Grid item xs={12} sm={7} md={9} paddingRight={"1.5rem"}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};


export default RouterMain;
