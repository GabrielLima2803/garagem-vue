<script setup>
import { ref, reactive, onMounted } from "vue";
import AcessorioApi from "@/api/acessorios.js";
const acessorioApi = new AcessorioApi();

const defaultAcessorio = { id: null, descricao: ""};
const acessorios = ref([]);
const acessorio = reactive({ ...defaultAcessorio });

onMounted(async () => {
  acessorios.value = await acessorioApi.buscarTodasAsAcessorio();
  console.log(acessorios.value);
});

function limpar() {
  Object.assign(acessorio, { ...defaultAcessorio });
}

async function salvar() {
  if (acessorio.id) {
    await acessorioApi.atualizarAcessorio(acessorio);
  } else {
    await acessorioApi.adicionarAcessorio(acessorio);
  }
  acessorios.value = await acessorioApi.buscarTodasAsAcessorio();
  limpar();
}

function editar(acessorio_para_editar) {
  Object.assign(acessorio, acessorio_para_editar);
}

async function excluir(id) {
  await acessorioApi.excluirAcessorio(id);
  acessorios.value = await acessorioApi.buscarTodasAsAcessorio();
  limpar();
}
</script>

<template>
  <h1>Acessorio</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="acessorio.descricao" placeholder="Descricao" />
    <button @click="salvar" class="gap">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
      <li v-for="acessorio in acessorios" :key="acessorio.id">
        <span @click="editar(acessorio)">
        ({{ acessorio.id }}) - {{ acessorio.descricao }}
      </span>
      <button @click="excluir(acessorio.id)">X</button>
    </li>
  </ul>
</template>

<style scoped>
.gap{
    margin-right: 10px;
    margin-left: 10px
}

.form {
  margin-bottom: 20px;
  display: flex;
}

.form input[type="text"] {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
}

.form input[type="text"]:focus {
  border-color: #007bff;
}

.form button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form button:hover {
  background-color: #0056b3;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #f9f9f9;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;
}

li:hover {
  background-color: #fff;
  transform: translateY(-5px);
}

li span {
  cursor: pointer;
  margin-right: 10px;
}

li span:hover {
  text-decoration: underline;
}

li button {
  padding: 3px 6px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

li button:hover {
  background-color: #c82333;
}

</style>
