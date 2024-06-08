import { configureStore } from "@reduxjs/toolkit";
import FiltroReducer from "./reducers/filtro";
import atividadesReducer from ".//reducers/atividade";

const store = configureStore({
  reducer: {
    atividade: atividadesReducer,
    filtro: FiltroReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
export default store;
