<template>
    <div class="hello">
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline1" v-model="levelItem" v-on:click="showOperation(1)" value="1" class="custom-control-input">
            <label class="custom-control-label" for="customRadioInline1">Fácil</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline2" v-model="levelItem" v-on:click="showOperation(2)" value="2" class="custom-control-input">
            <label class="custom-control-label" for="customRadioInline2">Médio</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline3" v-model="levelItem" v-on:click="showOperation(3)" value="3" class="custom-control-input">
            <label class="custom-control-label" for="customRadioInline3">Difícil</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Level',
        data() {
            return {
                levelItem: ''
            }
        },
        methods: {
            showOperation(level) {
                console.log(level);

                this.$emit('generateSentence', level);
            }
        }
    }
</script>

<style scoped>
    div.hello {
        margin-bottom: 25px;
    }
</style>