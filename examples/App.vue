<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <section>
      <cd-button>默认按钮</cd-button>
      <cd-button type="primary">主要按钮</cd-button>
      <cd-button type="success">成功按钮</cd-button>
      <cd-button type="info">信息按钮</cd-button>
      <cd-button type="warning">警告按钮</cd-button>
    </section>
    <br />
    <section>
      <cd-button plain>朴素按钮</cd-button>
      <cd-button type="primary" plain>主要按钮</cd-button>
      <cd-button type="success" plain>成功按钮</cd-button>
      <cd-button type="info" plain>信息按钮</cd-button>
      <cd-button type="warning" plain>警告按钮</cd-button>
    </section>
    <br />
    <section>
      <cd-button round>圆角按钮</cd-button>
      <cd-button type="primary" round>主要按钮</cd-button>
      <cd-button type="success" round>成功按钮</cd-button>
      <cd-button type="info" round>信息按钮</cd-button>
      <cd-button type="warning" round>警告按钮</cd-button>
    </section>
    <br />
    <section>
      <cd-button type="primary" circle></cd-button>
      <cd-button type="success" circle></cd-button>
      <cd-button type="info" circle></cd-button>
      <cd-button type="warning" circle></cd-button>
    </section>
    <br />
    <section>
      <cd-button plain disabled>朴素按钮</cd-button>
      <cd-button type="primary" plain disabled>主要按钮</cd-button>
      <cd-button type="success" plain disabled>成功按钮</cd-button>
      <cd-button type="info" plain disabled>信息按钮</cd-button>
      <cd-button type="warning" plain disabled>警告按钮</cd-button>
    </section>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
