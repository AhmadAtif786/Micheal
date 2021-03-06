import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import FirstBox from "./FirstBox";
import SecondBox from "./SecondBox";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles({
  service: {
    marginTop: "1.6rem",
  },
  tabhead: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    background: "#1f568e",
    borderRadius: "100vw",
  },
  box: {
    display: "flex",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  middle: {
    display: "none",
  },
});
function Service() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const images = ["./images/chat.png"];
  const imagesTwo = ["./images/chat.png", "./images/phone-call.png"];
  const imagesThree = [
    "./images/chat.png",
    "./images/phone-call.png",
    "./images/email.png",
  ];
  return (
    <Box className={classes.service} sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <div className={classes.tabhead}>
          <Tabs
            indicatorColor="white"
            value={value}
            onChange={handleChange}
            className={classes.tab}
            aria-label="basic tabs example"
          >
            <Tab disableRipple label="Pay As You Go" {...a11yProps(0)} />
            <Tab disableRipple label="Enterprise" {...a11yProps(1)} />
          </Tabs>
        </div>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={classes.box}>
          <FirstBox />
          <SecondBox
            title="Silver"
            upf="Up to 220"
            up="Conversions"
            user="3 User Accounts"
            amount="$1,500 / Month"
            maincolor="#7f7f7f"
            review="3000"
            width="25%"
            index="1"
            image={images}
            label="./images/55.png"
          />
          <div
            style={{
              width: "25%",
              position: "relative",
              zIndex: "3",
              transform: "scale(1.1)",
              background: "white",
            }}
          >
            <SecondBox
              className={classes.middle}
              title="Gold"
              upf="Up to 500"
              up="Conversions"
              user="5 User Accounts"
              amount="$3,000 / Month"
              maincolor="#cf9800"
              review="7090"
              width="100%"
              index="3"
              image={imagesTwo}
              label="./images/60.png"
            />
          </div>

          <SecondBox
            title="Platinum"
            upf="Up to 1,000"
            up="Conversions"
            user="10 User Accounts"
            amount="$5,000 / Month"
            maincolor="#010000"
            review="9640"
            width="25%"
            index="1"
            label="./images/67.png"
            image={imagesThree}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        no data
      </TabPanel>
    </Box>
  );
}

export default Service;
