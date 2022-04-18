import React from "react";
import FileUploader from "../uploadfiles/UploadFiles";
import SideBar from "../layout/SideBar";
import "../../styles/Home.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Box from "@mui/material/Box";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  typography: {
    color: "grey",
    margin: theme.spacing(9.25, 32),
  },
  dropezone: {
    color: "grey",
    margin: theme.spacing(-7, 32),
    width: 1080,
  },
  iconarrow: {
    fontSize: "inherit",
    marginBottom: -6.25,
  },
  title: {
    margin: theme.spacing(-17, 32),
  },
  logo: {
    width: 200,
    maxHeight: 130,
    margin: theme.spacing(-1, 2.5),
  },
}));
export default function DashboardHome() {
  const classes = useStyles();

  return (
    <div>
      <SideBar />
      <Box>
        <Typography
          variant="subtitle1"
          component="h2"
          className={classes.typography}
        >
          Dashboard <ArrowRightIcon className={classes.iconarrow} />
          File Uploader
        </Typography>
      </Box>
      <div className={classes.dropezone}>
        <FileUploader />
      </div>
      <Box>
        <Typography
          variant="subtitle1"
          component="h2"
          className={classes.typography}
        >
          Dashboard <ArrowRightIcon className={classes.iconarrow} />
          Reports
        </Typography>
      </Box>
    </div>
  );
}
