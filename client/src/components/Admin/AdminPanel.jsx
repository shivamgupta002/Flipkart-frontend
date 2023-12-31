import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material";

import DataTable from "react-data-table-component";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Delete = styled(DeleteIcon)`
  color: #ef4040;
`;

const Edit = styled(EditIcon)`
  color: #fff78a;
  margin: 0 7px;
`;

// #####################################################
const AdminPanel = () => {
  const history = useNavigate();
  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(products);

  //------------------- For Table ----------------
  const customStyles = {
    headCells: {
      style: {
        borderRight: "1px solid black",
      },
    },
    cells: {
      style: {
        width: "200px !important",
      },
    },
  };
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "URL",
      selector: (row) => row.url,
      sortable: true,
    },
    {
      name: "Detail Url",
      selector: (row) => row.detailUrl,
      sortable: true,
    },
    {
      name: "shortTitle",
      selector: (row) => row.title.shortTitle,
      sortable: true,
    },
    {
      name: "Long Title",
      selector: (row) => row.title.longTitle,
      sortable: true,
    },
    {
      name: "MRP",
      selector: (row) => row.price.mrp,
      sortable: true,
    },
    {
      name: "Cost",
      selector: (row) => row.price.cost,
      sortable: true,
    },
    {
      name: "Discount",
      selector: (row) => row.price.discount,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Extra discount",
      selector: (row) => row.discount,
      sortable: true,
    },
    {
      name: "Tagline",
      selector: (row) => row.tagline,
      sortable: true,
    },
    {
      name: "Edit",
      cell: (row) => (
        <>
          <Link to={`/edit/${row._id}`} target="_blank">
            <Edit
            // LinkComponent={Link}
            // to={`/edit/${row._id}`}
            />
          </Link>
          <Delete
            onClick={() => {
              deleteHandler(row._id);
            }}
          />
        </>
      ),
    },
  ];

  //------------------- For Delete ----------------
  const deleteHandler = async (_id) => {
    console.log(_id);
    // await axios
    //   .delete(`http://localhost:5000/products/${_id}`)
    //   .then((res) => res.data)
    //   .then(() => history("/"));
  };

  return (
    <div>
      <DataTable
        title="Product Details"
        columns={columns}
        data={products}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        striped
        responsive
        noDataText="No data found"
        paginationRowsPerPageOptions={[10, 25, 50, 75, 100]}
        paginationRowsPerPage={10}
        customStyles={customStyles}
      />
    </div>
  );
};

export default AdminPanel;