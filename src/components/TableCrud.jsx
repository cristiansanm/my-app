import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { yellow } from '@mui/material/colors';
 
//TODO: finish edit task
const EditTaskField = (task) => {
  return (
    <>
      <TextField
        id="textFieldTask"
        value={task.description}
      />
    </>
  )
}

const TableCrud = ({ data, deleteTask, editTask }) => {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Tarea</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                {row.description}
              </TableCell>
              <TableCell align="right">
                <IconButton 
                  color="error"
                  onClick={()=> deleteTask(row.id)}>
                    <DeleteIcon/>
                </IconButton>
                <IconButton 
                  sx={{color: yellow[600]}}
                  onClick={()=>editTask(row)}>
                    <EditIcon/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    );
};

export default TableCrud;
