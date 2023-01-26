import React, { useEffect, useState } from "react";
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

const StyledTableHead = styled(TableHead)(() => ({
  backgroundColor: "oldlace",
  fontSize: "2rem",
  color: "white",
  textTransform: "uppercase",
}));

const StyledTableContainer = styled(TableContainer)(() => ({
  marginTop: "2rem",
}));

const TableList = ({ rows, columns, onClick , onViewDemo }) => {
  const noDataLabel = "No Data";
  const onViewData = (row) => {
    onClick(row);
  };
  const onClickViewDemo = (row) => { 
    onViewDemo(row);
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
                {row.modified ? row.modified : noDataLabel}
              </TableCell>
              <TableCell align="left">
                {row.score ? row.score : noDataLabel}
              </TableCell>
              <TableCell>
                <IconButton color="secondary" onClick={() => onViewData(row)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => onClickViewDemo(row)}>
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
