import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

type Props = {
  fontColor?: string;
  size?: string;
  weight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
};

const options = {
  shouldForwardProp: (prop: any) => prop !== "fontColor",
};

const Text = styled(
  Typography,
  options
)<Props>(({ fontColor, size, weight, marginTop, marginBottom }) => ({
  input: {
    color: fontColor,
    fontSize: size,
    fontWeight: weight,
    marginTop: marginTop,
    marginBottom: marginBottom
  },
}));

export default Text;
