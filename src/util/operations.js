export default new class Calc {

    add(n1, n2) {
        return n1 + n2
    }
    
    sub(n1, n2) {
        return n1 - n2
    }

    mult(n1, n2) {
        return n1 - n2
    }

    calcule(n1, n2, level) {
        console.log("===>", level);
        switch(level) {
            case 1:
                return this.add(n1, n2);
            case 2:
                return this.sub(n1, n2);
            case 3:
                return this.mult(n1, n2);
            default:
                console.log("Operation not found!");
        }
    }
}