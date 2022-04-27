import React from "react";
import FileUploader from "../uploadfiles/UploadFiles";

import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Box from "@mui/material/Box";

import Typography from "@material-ui/core/Typography";

import LayoutHome from "../layout/LayoutHome";

const useStyles = makeStyles((theme) => ({
  typography1: {
    color: "grey",
  },
  typography2: {
    color: "grey",
    marginTop: 30,
  },
  dropezone: {
    color: "grey",
    marginTop: 20,
    marginLeft: 15,
    width: 1200,
  },
  iconarrow: {
    fontSize: "inherit",
    marginBottom: -6.25,
  },
  title: {
    margin: theme.spacing(-14, 37),
  },

  contenu: {
    margin: theme.spacing(3.5, 12),
  },
}));
export default function DashboardHome() {
  const classes = useStyles();

  return (
    <div className={classes.contenu}>
      <Box>
        <LayoutHome />
        <Typography
          variant="subtitle1"
          component="h2"
          className={classes.typography1}
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
          className={classes.typography2}
        >
          Dashboard <ArrowRightIcon className={classes.iconarrow} />
          Reports
        </Typography>
      </Box>
    </div>
  );
}
