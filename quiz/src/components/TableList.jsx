import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableHead = styled(TableHead)(() => ({
  backgroundColor: "darkseagreen",
  fontSize: "2rem",
  color: "white",
  textTransform: "uppercase",
}));

const StyledTableContainer = styled(TableContainer)(() => ({
  marginTop: "2rem",
}));

const TableList = ({ rows, columns, onClick, onViewDemo, onDelete }) => {
  const noDataLabel = "No Data";

  const onViewData = (row) => {
    onClick(row);
  };
  const onClickViewDemo = (row) => {
    onViewDemo(row);
  };
  const onClickDelete = (row) => {
    onDelete(row);
  };

  return (
    <StyledTableContainer>
      <Table aria-label="simple table">
        <StyledTableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key} align="left">
                {column.value}
              </TableCell>
            ))}{" "}
            <TableCell />
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">
                {row.description ? row.description : noDataLabel}
              </TableCell>
              <TableCell align="left">
                {row.created ? row.created : noDataLabel}
              </TableCell>
              <TableCell align="left">
                {row.url ? row.url : noDataLabel}
              </TableCell>
              <TableCell align="left">
                {row.score ? row.score : noDataLabel}
              </TableCell>
              <TableCell>
                <IconButton color="seagreen" onClick={() => onViewData(row)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="seagreen" onClick={() => onClickDelete(row)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  color="seagreen"
                  onClick={() => onClickViewDemo(row)}
                >
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default TableList;
