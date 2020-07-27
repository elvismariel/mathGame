<template>
  <div id="app">
    <Operation />
  </div>
</template>

<script>

import Operation from './components/operation';

export default {
  name: 'App',
  components: {
    Operation
  }
}
</script>

<style>
    html, body {
        height: 100%;
        margin: 0px;
    }

    main {
        height: 100%;
        flex-grow: 1;
    }
</style>