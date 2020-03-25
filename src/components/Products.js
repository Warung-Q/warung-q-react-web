import React, { useEffect, forwardRef } from "react";
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import productsAction from "../store/actionCreators/productsAction";
import addProductAction from "../store/actionCreators/addProductAction";
import editProductAction from "../store/actionCreators/editProductAction";
import deleteProductAction from "../store/actionCreators/deleteProductAction";
import categoriesAction from "../store/actionCreators/categoriesAction";
import { ToastContainer, toast } from "react-toastify";
import ProductsSkeleton from "./ProductsSkeleton";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function Products({ color }) {
  const { loading } = useSelector(state => state.loadingMessageReducer);
  const { products } = useSelector(state => state.productsReducer);
  const { categories } = useSelector(state => state.categoriesReducer);
  const dispatch = useDispatch();
  const access_token =
    useSelector(state => state.ownerReducer.access_token) ||
    JSON.parse(localStorage.getItem("warung_q_token_data")).access_token;
  useEffect(() => {
    dispatch(productsAction(access_token));
    dispatch(categoriesAction(access_token));
  }, [dispatch, access_token]);

  const categoriesLookUp = {};
  categories.forEach(category => {
    categoriesLookUp[category.id] = category.name;
  });

  const columns = [
    {
      title: "ProductID",
      field: "id",
      hidden: true
    },
    {
      title: "BarcodeID",
      field: "barcode",
      type: "numeric"
    },
    {
      title: "Name",
      field: "name"
    },
    {
      title: "Price",
      field: "price",
      render: rowData => <p>Rp. {rowData.price.toLocaleString("id-ID")}</p>
    },
    {
      title: "Stock",
      field: "stock",
      type: "numeric"
    },
    {
      title: "Category",
      field: "CategoryId",
      lookup: categoriesLookUp || {}
    },
    {
      title: "Expired Date",
      field: "expired_date",
      type: "date"
    }
  ];

  const addNewProduct = async newData => {
    try {
      const { barcode, name, price, stock, CategoryId, expired_date } = newData;
      const newProductInsert = {
        name,
        price: +price,
        stock: +stock,
        expired_date,
        barcode,
        CategoryId: +CategoryId
      };
      const successAdding = await dispatch(
        addProductAction(newProductInsert, access_token)
      );
      await dispatch(productsAction(access_token));
      await toast.success(successAdding, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      });
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      });
    }
  };

  const editProduct = async newData => {
    try {
      const {
        id,
        barcode,
        name,
        price,
        stock,
        CategoryId,
        expired_date
      } = newData;
      const editSelectedProduct = {
        name,
        price: +price,
        stock: +stock,
        expired_date,
        barcode,
        CategoryId: +CategoryId
      };
      const successEdit = await dispatch(
        editProductAction(editSelectedProduct, id, access_token)
      );
      await dispatch(productsAction(access_token));
      await toast.success(successEdit, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      });
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      });
    }
  };

  const deleteProduct = async oldData => {
    try {
      const { id } = oldData;
      const successDelete = await dispatch(
        deleteProductAction(id, access_token)
      );
      await dispatch(productsAction(access_token));
      await toast.success(successDelete, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      });
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      });
    }
  };

  if (loading) return <ProductsSkeleton />;
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <MaterialTable
        icons={tableIcons}
        title="Products"
        columns={columns}
        data={products}
        editable={{
          onRowAdd: newData => addNewProduct(newData),
          onRowUpdate: (newData, oldData) => editProduct(newData),
          onRowDelete: oldData => deleteProduct(oldData)
        }}
        options={{
          headerStyle: {
            backgroundColor: color,
            color: "#FFF"
          }
        }}
      />
    </>
  );
}

// import React from "react";
// import MaterialTable from "material-table";

// export default function MaterialTableDemo() {
//   const [state, setState] = React.useState({
//     columns: [
//       { title: "Name", field: "name" },
//       { title: "Surname", field: "surname" },
//       { title: "Birth Year", field: "birthYear", type: "numeric" },
//       {
//         title: "Birth Place",
//         field: "birthCity",
//         lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
//       }
//     ],
//     data: [
//       { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
//       {
//         name: "Zerya Betül",
//         surname: "Baran",
//         birthYear: 2017,
//         birthCity: 34
//       }
//     ]
//   });

//   return (
//     <MaterialTable
//       title="Products"
//       columns={state.columns}
//       data={state.data}
//       editable={{
//         onRowAdd: newData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.push(newData);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           }),
//         onRowUpdate: (newData, oldData) =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               if (oldData) {
//                 setState(prevState => {
//                   const data = [...prevState.data];
//                   data[data.indexOf(oldData)] = newData;
//                   return { ...prevState, data };
//                 });
//               }
//             }, 600);
//           }),
//         onRowDelete: oldData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.splice(data.indexOf(oldData), 1);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           })
//       }}
//     />
//   );
// }
