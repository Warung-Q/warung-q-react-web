import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import SalesChart from "./SalesChart";
import PieProductChart from "./PieProductChart";
import transactionsAction from "../store/actionCreators/transactionsAction";
import productsAction from "../store/actionCreators/productsAction";

import { useDispatch, useSelector } from "react-redux";

export default function DahsboardComponent() {
  const { loading } = useSelector(state => state.loadingMessageReducer);
  const { transactions, datasetsYearly } = useSelector(
    state => state.transactionsReducer
  );
  const { products } = useSelector(state => state.productsReducer);

  const dispatch = useDispatch();
  const access_token =
    useSelector(state => state.ownerReducer.access_token) ||
    JSON.parse(localStorage.getItem("warung_q_token_data")).access_token;

  useEffect(() => {
    dispatch(productsAction(access_token));
    dispatch(transactionsAction(access_token));
  }, [access_token, dispatch]);
  // transactions.forEach(item => {
  //   console.log(new Date(item.createdAt).getMonth(), new Date().getMonth());
  // });
  if (loading) return <h1>Loading...</h1>;
  // if (!loading)
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={12} md={7} lg={7}>
        <SalesChart warungDatasets={transactions} datasets={datasetsYearly} />
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5}>
        <PieProductChart warungDatasets={transactions} products={products} />
      </Grid>
    </Grid>
  );
}
