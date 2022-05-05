import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  first: {
    width: "25%",
  },
  headcontent: {
    height: "15rem",
    borderTop: "0.5px solid #d1cac4",
    borderBottom: "0.5px solid #d1cac4",
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
  },
  // head: {
  //   borderTop: "0.5px solid #d1cac4",
  //   borderBottom: "0.5px solid #d1cac4",
  // },
  subhead: {
    borderBottom: "0.5px solid #d1cac4",
    padding: "0.4rem 0",
  },
  small: {
    fontSize: "0.7rem !important",
    color: "#5a5651 ",
    marginLeft: "0.8rem !important",
  },
  bottom: {
    height: "5.6rem",
    borderBottom: "0.5px solid #d1cac4",
  },
  space: {
    height: "5rem",
  },
  head: {
    textTransform: "capitalize",
  },
});
function FirstBox() {
  const classes = useStyles();
  return (
    <div className={classes.first}>
      <div className={classes.headcontent}>
        <Typography variant="h6" component="h6" className={classes.head}>
          Select The Enterprise Solution plan that meets your company's needs
        </Typography>
      </div>
      <div>
        <Typography className={classes.subhead} variant="subtitle1">
          DST File
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          EMB File
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          RUN Sheet
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          Satisfaction Guaranted
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          Free File Storage
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          Enterprise Feature Updates
        </Typography>
        <Typography className={classes.subhead} variant="subtitle1">
          API Integration*
        </Typography>
        <Typography
          className={`${classes.subhead} ${classes.space}`}
          variant="subtitle1"
        >
          No Long Tern Contract <br />
          Cancel Anytime
        </Typography>
        <Typography className={` ${classes.subhead}`} variant="subtitle1">
          After Service <span style={{ color: "#09c6fb" }}>Support</span>
        </Typography>
      </div>
      <div className={classes.bottom}></div>
    </div>
  );
}

export default FirstBox;
