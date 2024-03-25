import axios from "axios";
import api from "../plugins/axios";
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const { data } = await axios.get("/categorias/");
    return data.results;
  }
  async adicionarCategorias(categoria) {
    const { data } = await axios.post("/categorias/", categoria);
    return data.results;
  }
  async atualizarCategorias(categoria) {
    const { data } = await axios.put(`/categorias/${categoria.id}/`, categoria);
    return data.results;
  }
  async excluirCategorias(id) {
    const { data } = await axios.delete(`/categorias/${id}/`);
    return data.results;
  }
}
