import {
  defaultFont,
  primaryColor,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/material-kit-react.jsx";

const typographyStyle = {
  defaultFontStyle: {
    ...defaultFont,
    fontSize: "14px",
    color: "#353535"
  },
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #cecece"
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic",
    color: "#353535"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: "#777"
  },
  mutedText: {
    color: "#353535"
  },
  primaryText: {
    color: primaryColor
  },
  infoText: {
    color: "#353535", 
    fontStyle: "italic"
  },
  successText: {
    color: successColor
  },
  warningText: {
    color: warningColor
  },
  dangerText: {
    color: dangerColor
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "#353535"
  }
};

export default typographyStyle;
