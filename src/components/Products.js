import React, { useEffect } from "react";
import MaterialTable from "material-table";
import productsAction from "../store/actionCreators/productsAction";
import { useSelector, useDispatch } from "react-redux";

export default function Products() {
  const { loading } = useSelector(state => state.loadingMessageReducer);
  const { products } = useSelector(state => state.productsReducer);
  const dispatch = useDispatch();
  const access_token = JSON.parse(localStorage.getItem("warung_q_token_data"))
    .access_token;
  console.log(access_token);
  useEffect(() => {
    dispatch(productsAction(access_token));
  }, [dispatch, access_token]);
  const columns = [
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
      type: "numeri"
    },
    {
      title: "Stock",
      field: "stock",
      type: "numeric"
    },
    {
      title: "Expired Date",
      field: "expired_data"
    }
  ];
  if (loading) return <h1>Loading...</h1>;
  return <MaterialTable title="Products" columns={columns} data={products} />;
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
