<template>
    <form>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Calcule o valor da operação matemática.</h5>
                
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">2 + 2 =</span>
                    </div>
                    <input type="text" v-model="result" class="form-control rounded-right" required>
                    <div class="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
                <p />
                <button type="submit" v-on:click.prevent="calcule" class="btn btn-primary">Ok</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'Operation',
    data() {
        return {
            result: ""
        }
    },
    methods: {
        calcule() {
            console.log("Calculando...");
            console.log("Resultado informado: ", this.result);
        }
    }
}
</script>

<style scoped>
    div.card {
        display: none;
    }
</style>