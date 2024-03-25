import axios from "axios";

export default class CoresApi {
  async buscarTodasAsCores() {
    const { data } = await axios.get("/cores/");
    return data;
  }
  async adicionarCores(cor) {
    const { data } = await axios.post("/cores/", cor);
    return data;
  }
  async atualizarCores(cor) {
    const { data } = await axios.put(`/cores/${cor.id}/`, cor);
    return data;
  }
  async excluirCores(id) {
    const { data } = await axios.delete(`/cores/${id}/`);
    return data;
  }
}
