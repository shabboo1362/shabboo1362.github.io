import React from "react";
import { DataGrid } from "@mui/x-data-grid";
const url='https://fronttask.techeyeco.com';
const columns = [
  {
    field: "thumbnail",
    headerName: "IMG",
    width: 200,
    height:100,
    sortable: false,
    renderCell: (params:any) => (
      <img
        src={url+params.value}
        height="100"
        width="100"
        style={{ marginLeft: "10px" }}
        alt=""
      />
    ),
  },
  {
    field: "name",
    headerName: "Product Name",
    sortable: false,
    flex: 1,
    minWidth: 100,
  },
  { field: "price", headerName: "Price", width: 130 },
  { field: "discount", headerName: "Discount", width: 130 },
];


const DataTable = ({ products}:{products:any}) => {
  return (
    <div style={{ height:600 , width: "100%" }}>
      <DataGrid 
        rows={products}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // disableColumnMenu
        disableSelectionOnClick
      />
    </div>
  );
};

export default DataTable;