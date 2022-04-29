import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  TableRow,
  TableHead,
  Grid,
  Typography,
  TextField,
  Container,
  Tooltip,
  Button,
  ButtonGroup,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteUser from "./DeleteUser";
import EditIcon from "@mui/icons-material/Edit";

import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import LayoutHome from "../layout/LayoutHome";
import RegisterDialogForm from "../clientsmanagement/AddUser";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

//const rows = [createData("Cupcake", 305, 3), createData("Donut", 452, 25.0)];

export default function UsersHome() {
  const [usersCollection, setUsersCollection] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/user/userslist")
      .then((res) => {
        setUsersCollection(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  const handleDeleteUser = (_id) => {
    axios
      .post(`http://localhost:5000/user/deleteuser/${_id}`)
      .then((res) => {
        setUsersCollection(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - usersCollection.length)
      : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <React.Fragment>
      <LayoutHome />
      <Container
        width="ld"
        sx={{
          marginTop: 5,
          marginBottom: 5,
          marginLeft: 15,
        }}
      >
        <Paper sx={{ padding: "2em 2em", boxShadow: 3 }}>
          <Grid justifyContent="space-between" sx={{ m: 1 }} container>
            <Grid item sx={{ mt: 2, mb: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Users List
              </Typography>
            </Grid>
            <TextField
              //  inputRef={inputElem}
              id="outlined-basic"
              label="Search User"
              variant="outlined"
              sx={{ mt: 1, mb: 2 }}
              style={{ width: 350, marginRight: -60 }}
            />
            <div style={{ marginTop: 15, marginRight: 140 }}>
              <RegisterDialogForm />
            </div>
          </Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableHead style={{ backgroundColor: "#E5E4E2" }}>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone Number</TableCell>

                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? usersCollection.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : setUsersCollection
                ).map((data, i) => (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row">
                      {data._id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {data.firstName}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {data.lastName}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {data.email}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {data.phoneNumber}
                    </TableCell>
                    <TableCell>
                      <ButtonGroup
                        variant="outlined"
                        orientation={"horizontal"}
                        aria-label="item action group"
                        color="inherit"
                      >
                        <Tooltip title="Edit">
                          <Button
                            color="info"
                            //onClick={handleEditClick}
                            startIcon={<EditIcon />}
                          />
                        </Tooltip>
                        <Tooltip title="View More Details">
                          <Button
                            color="success"
                            //onClick={handlePreviewClick}
                            startIcon={<VisibilityIcon />}
                          />
                        </Tooltip>
                        <Tooltip title="Delete">
                          <Button
                            color="error"
                            onClick={handleDeleteUser}
                            startIcon={<DeleteIcon />}
                          />
                        </Tooltip>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={7}
                    count={usersCollection.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

/*import React from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Grid,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  TableCell,
  Table,
  ButtonGroup,
  Tooltip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@material-ui/core";
import LayoutHome from "../layout/LayoutHome";
import RegisterDialogForm from "../clientsmanagement/AddUser";
*/

/*<div>
      <>
        <LayoutHome />
        <Container
          width="ld"
          sx={{
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 15,
          }}
        >
          <Paper sx={{ padding: "2em 2em", boxShadow: 3 }}>
            <Grid justifyContent="space-between" sx={{ m: 1 }} container>
              <Grid item sx={{ mt: 2, mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  Users List
                </Typography>
              </Grid>
              <TextField
                //  inputRef={inputElem}
                id="outlined-basic"
                label="Search User"
                variant="outlined"
                sx={{ mt: 1, mb: 2 }}
                style={{ width: 350, marginRight: -60 }}
              />
              <div style={{ marginTop: 15, marginRight: 140 }}>
                <RegisterDialogForm />
              </div>
            </Grid>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 600 }} aria-label="customized table">
                <TableHead style={{ backgroundColor: "#E5E4E2" }}>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell>exp</TableCell>
                  <TableCell>exp</TableCell>
                  <TableCell>exp</TableCell>
                  <TableCell>exp</TableCell>
                  <TableCell>exp</TableCell>
                  <TableCell>exp</TableCell>

                  <TableCell>
                    <ButtonGroup
                      variant="outlined"
                      orientation={"horizontal"}
                      aria-label="item action group"
                      color="inherit"
                    >
                      <Tooltip title="Edit">
                        <Button
                          color="info"
                          //onClick={handleEditClick}
                          startIcon={<EditIcon />}
                        />
                      </Tooltip>
                      <Tooltip title="View More Details">
                        <Button
                          color="success"
                          //onClick={handlePreviewClick}
                          startIcon={<VisibilityIcon />}
                        />
                      </Tooltip>
                      <Tooltip title="Delete">
                        <Button
                          color="error"
                          //onClick={handleDeleteClick}
                          startIcon={<DeleteIcon />}
                        />
                      </Tooltip>
                    </ButtonGroup>
                  </TableCell>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
      </>
    </div>*/
