<template>
    <div>
        <Level v-on:generateSentence="getRndInteger"  />
        <form>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Calcule o valor da operação matemática.</h5>
                    
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">{{sentence}} =</span>
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
    </div>
</template>

<script>
import Level from './level';

export default {
    name: 'Operation',
    components: {
        Level
    },
    data() {
        return {
            sentence: "",
            result: ""
        }
    },
    methods: {
        calcule() {
            console.log("Calculando...");
            console.log("Resultado informado: ", this.result);
        },
        getRndInteger(level) {
            console.log("====> Level: ", level);

            if(level) {
                const n1 = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;
                const n2 = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;

                this.sentence = n1 + " + " + n2;
            }
        }
    }
}
</script>