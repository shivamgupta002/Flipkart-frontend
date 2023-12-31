// import React from 'react'

// const AdminPanel = () => {
//   return (
//     <div>AdminPanel</div>
//   )
// }

// export default AdminPanel

import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import DataTable from "react-data-table-component";


import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
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
            <AiOutlineEdit
              className="mr-4 text-xl text-yellow-400 hover:text-yellow-700 transition-all duration-500 ease-in-out hover:scale-110"
              LinkComponent={Link}
              to={`/edit/${row._id}`}
            />
          </Link>
          <AiFillDelete
            className="text-xl text-red-500 hover:text-red-600 transition-all duration-500 ease-in-out hover:scale-110"
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
        title="Employee Details"
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
      />
    </div>
  );
};

export default AdminPanel;
