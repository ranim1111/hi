/*import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Tooltip } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";

export default function DeleteUser() {
    const handleDeleteUser = (_id) => {
        axios
          .post(`http://localhost:5000/user/deleteuser/${_id}`)
          .then((res) => {
            console.log(res.data);
            setUsersCollection([res.data]);
            console.log("cbon");
          })
          .catch(function (error) {
            console.log(error);
          });
      };
  const [usersCollection, setUsersCollection] = React.useState([]);



  return (
    <React.Fragment>
      <Tooltip title="Delete">
        <Button
          color="error"
          onClick={(e) => handleDeleteUser(data._id)}
          startIcon={<DeleteIcon />}
        />
      </Tooltip>
    </React.Fragment>
  );
}
*/
