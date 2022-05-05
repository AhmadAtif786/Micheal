import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Service from "./Service";

const useStyles = makeStyles({
  head: { marginTop: "25px" },
  mainhead: {
    textAlign: "center",
    color: "#9b938b",
    textTransform: "uppercase",
  },
});
function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.head}>
      <Typography
        variant="h3"
        component="h1"
        sx={{ fontWeight: "500" }}
        className={classes.mainhead}
      >
        Simple pricing for everyone
      </Typography>
      <div>
        <Service />
      </div>
    </div>
  );
}

export default Banner;
