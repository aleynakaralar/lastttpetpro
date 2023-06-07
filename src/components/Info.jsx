import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper
} from "@mui/material";
import { useFetch, DeleteUser } from "../utils/function";
import DeleteIcon from "@mui/icons-material/Delete"




const Info = () => {
    const {isLoading, contactList} = useFetch()

  return (
    <div>
      <h2 className="contact-header">Adverts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">About your animal</TableCell>
              {/* <TableCell align="left">Delete</TableCell>
              <TableCell align="left">Edit</TableCell> */}
            </TableRow>
          </TableHead>        
         
          <TableBody>  
          {
            //! bilgiler yolda 
            isLoading ? (
              <TableRow>
                      <TableCell textAlign="center">Loading</TableCell>
              </TableRow>  
            ):
            //! veri olmadığı 
            contactList?.length ===0 ? (
              <TableRow>
                      <TableCell textAlign="center">NO RESULT</TableCell>
              </TableRow> 
            ) :
            //! veriler geliyor
            (contactList?.map( (item)=> (
              <TableRow>
                <TableCell textAlign="center">{item.username.toUpperCase()}</TableCell>
                <TableCell textAlign="center">{item.phoneNumber}</TableCell>
                <TableCell textAlign="center">{item.type}</TableCell> 
                <TableCell textAlign="center">{item.information}</TableCell> 
                 <TableCell textAlign="center" onClick = {()=> DeleteUser(item.id)} >
                  <DeleteIcon/>
                </TableCell> 
                {/* <TableCell textAlign="center" onClick={()=>editUser(
                item.id, item.username,item.phoneNumber,item.gender
              )}
              >
                  <EditIcon/>
                </TableCell>  */}
               </TableRow>  
                
                
              )

            ))
          }


             

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};


export default Info;

