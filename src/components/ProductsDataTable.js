import react from "react";
import DataTable from "react-data-table-component";

const ProductsDataTable = ({ productsData }) => {
  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Stars",
      selector: (row) => row.rating,
      sortable: true,
    },
  ];
  return <DataTable columns={columns} data={productsData} />;
};

export default ProductsDataTable;
