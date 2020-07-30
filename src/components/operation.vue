<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="TituloModalCentralizado">Título do modal</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary">Salvar mudanças</button>
                    </div>
                </div>
            </div>
        </div>
        <Level v-on:generateSentence="makeSentence" />
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
                    <button type="submit" v-on:click.prevent="calcule();" class="btn btn-primary">Ok</button>

                    <button type="submit" v-on:click.prevent="showModal();" class="btn btn-primary">Modal</button>

                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal" v-on:click="$('#modal').modal('show');">
                        Open Modal
                    </button>
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
import Calc from '../util/operations';
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
            modalOpen: false
        }
    },
    methods: {
        showModal() {
            this.$refs['modal'].show();
        },
        calcule() {
            console.log("Calculando...");
            const arr = this.sentence.split(" ");
            const n1 = Number(arr[0]);
            const n2 = Number(arr[2]);
            const valid = Calc.calcule(n1, n2, this.level);
            const answerStatus = (this.result == valid);
            
            this.modalOpen = true;
            this.showImage(answerStatus);
        },
        novo() {
            this.sentence = "";
            this.result = "";
            this.numbers = [];
            this.image = ""
            this.status = "form-control rounded-right";
            this.makeSentence(this.level);
        },
        showImage(answerStatus){
            if(answerStatus) {
                this.rightImage();
                this.status = "form-control rounded-right is-valid";
                
            } else {
                this.wrongImage();
                this.status = "form-control rounded-right is-invalid";
            }
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
            this.level = level;
            switch(level){
                case 1:
                    this.sentence = this.makeSentenceAdd(); break;
                case 2:
                    this.sentence = this.makeSentenceSub(); break;
                case 3:
                    this.sentence = this.makeSentenceMul(); break;
                default:
                    console.log("Operation not found!");
            }
        },
        makeSentenceAdd() {
            const n = this.getTwoNumbers();

            return `${n.n1} + ${n.n2}`;
        },
        makeSentenceSub() {
            const n = this.getTwoNumbers();

            return (n.n1 >= n.n2) ? `${n.n1} - ${n.n2}` : `${n.n2} - ${n.n1}`;
        },
        makeSentenceMul() {
            const n = this.getTwoNumbers();

            return `${n.n1} * ${n.n2}`;
        },
        getTwoNumbers() {
            const n1 = this.getRndInteger(0, 10);
            const n2 = this.getRndInteger(0, 10);
            
            return {n1, n2}
        },
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        }
    }
}
</script>