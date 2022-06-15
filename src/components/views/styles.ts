import { Button } from "@mui/material";
import { styled } from "@mui/system";


export const Btn = styled(Button)({
    margin: "1rem",
    display: "block",
  });
export const Row = styled('div')(({theme})=>({
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: "1rem",
  }));

