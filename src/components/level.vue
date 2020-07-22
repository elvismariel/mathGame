<template>
    <div class="hello">
        <div v-for="(level, index) in levels" class="custom-control custom-radio custom-control-inline" v-bind:key="index">
            <input type="radio" v-on:click="showOperation" id="index" name="levelItem" value="index" class="custom-control-input">
            <label class="custom-control-label" for="customRadioInline1">{{level.name}}</label>
        </div>
        <p v-if="levelItem > 0">
            <Operation />
        </p>
    </div>
</template>

<script>
import Operation from './operation';

export default {
    name: 'Level',
    components: {
        Operation
    },
    data() {
        return {
            levels: [
                {name: "Fácil"},{name: "Médio"},{name: "Difícil"}
            ]
        }
    },
    methods: {
        showOperation() {
            console.log(this.levelItem)
            //this.levelItem = level;
        }
    }
}
</script>

<style scoped>
    div.hello {
        margin-bottom: 25px;
    }
</style>