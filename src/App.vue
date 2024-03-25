<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link to="/cores">Cores</router-link> |
    <router-link to="/categorias">Categorias</router-link> |
    <router-link to="/marcas">Marca</router-link> |
    <router-link to="/acessorios">Acessorio</router-link> 
  </header>
  <main>
    <RouterView />
  </main>
</template>


<style scoped>
header {
  color: black;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header a {
  color: black;
  text-decoration: none;
  margin-right: 10px;
}

header a:hover {
  color: blueviolet;
  transition: .3s ;
  text-decoration: underline;
}

nav {
  display: flex;
}

nav a {
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 4px;
  margin-right: 10px;
}

nav a:hover {
  background-color: #555;
}

main {
  padding: 20px;
}

</style>