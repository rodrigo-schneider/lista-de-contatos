import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Tarefa from "../../models/Tarefa";

type AtividadeState = {
  itens: Tarefa[];
};

const initialState: AtividadeState = {
  itens: [
    {
      id: 1,
      nomeContato: "Teste 1",
      emailContato: "teste1@hotmail.com",
      phoneContato: "(99)99999-9999",
    },
    {
      id: 2,
      nomeContato: "Teste 2",
      emailContato: "teste2@hotmail.com",
      phoneContato: "(99)99999-9999",
    },
    {
      id: 3,
      nomeContato: "Teste 3",
      emailContato: "teste3@hotmail.com",
      phoneContato: "(99)99999-9999",
    },
    {
      id: 4,
      nomeContato: "Teste 4",
      emailContato: "teste4@hotmail.com",
      phoneContato: "(99)99999-9999",
    },
  ],
};

const atividadesSlice = createSlice({
  name: "atividades",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (atividade) => atividade.id !== action.payload
      );
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (p) => p.id === action.payload.id
      );

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const cadastroJaExiste = state.itens.some(
        (atividade) =>
          atividade.nomeContato.toLowerCase() ===
          action.payload.nomeContato.toLowerCase()
      );
      if (cadastroJaExiste) {
        alert("Já existe um contato com este nome");
      } else {
        const novoId =
          state.itens.length > 0
            ? state.itens[state.itens.length - 1].id + 1
            : 1;
        state.itens.push({ ...action.payload, id: novoId });
      }
    },
  },
});

export const { remover, editar, cadastrar } = atividadesSlice.actions;
export default atividadesSlice.reducer;
