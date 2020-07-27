<template>
    <div>
        <Level v-on:generateSentence="makeSentence"  />
        <form>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Calcule o valor da operação matemática.</h5>
                    
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">{{sentence}} =</span>
                        </div>
                        <input type="number" v-model="result" v-bind:class="status" required>
                    </div>
                    <p />
                    <button v-if="!sendStatus" type="submit" v-on:click.prevent="calcule" class="btn btn-primary">Ok</button>
                    <button v-if="sendStatus" type="submit" v-on:click.prevent="novo" class="btn btn-primary">Novo</button>
                </div>
            </div>
        </form>
        <div v-if="image" class="text-center" style="margin-top: 10px">
            <img v-bind:src="image" class="rounded" alt="...">
        </div>
    </div>
</template>

<script>
import Level from './level';
import axios from '../services/AxiosService';

export default {
    name: 'Operation',
    components: {
        Level
    },
    data() {
        return {
            sentence: "",
            result: "",
            numbers: [],
            level: 0,
            image:"",
            status: "form-control rounded-right",
            right:['happy','success','victory'],
            wrong:['sad','erro','suspect'],
            sendStatus: false
        }
    },
    methods: {
        calcule() {
            console.log("Calculando...");
            const valid = this.numbers.reduce((accum, curr) => accum + curr);
            this.sendStatus = true;

            if(this.result == valid) {
                this.rightImage();
                this.status = "form-control rounded-right is-valid";
                
            } else {
                this.wrongImage();
                this.status = "form-control rounded-right is-invalid";
            }
        },
        novo() {
            this.sentence = "";
            this.result = "";
            this.numbers = [];
            this.image = ""
            this.status = "form-control rounded-right";
            this.sendStatus = false;
            this.makeSentence(this.level);
        },
        rightImage() {            
            const idx = Math.floor(Math.random() * 3);
            const word = this.right[idx];
            axios.getImg(word)
            .then(url => { this.image = url })
            .catch(err => Promise.reject(err));
        },
        wrongImage() {
            const idx = Math.floor(Math.random() * 3);
            const word = this.wrong[idx];
            axios.getImg(word)
            .then(url => { this.image = url })
            .catch(err => Promise.reject(err));
        },
        makeSentence(level) {
            switch(level){
                case 1:
                    return this.generate("+");
                case 2:
                    return this.generate("-");
                case 3:
                    return this.generate("*");
                case 4:
                    return this.generate("÷");
            }
        },
        generate(sinal) {
            const n1 = this.getRndInteger(0, 10);
            const n2 = this.getRndInteger(0, 10);

            return (n1 + sinal + n2);
        },
        makeSentenceSub() {
            const n1 = getRndInteger(0, 10);
            const n2 = getRndInteger(0, 10);

            const sentence = (n1 > n2) ? (n1 + " - " + n2) : (n2 + " + " + n1);

            return sentence
        },
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        }
    }
}
</script>