import Kartya from "./Kartya.js"

class JatekTer{
    #keplista = [];
    #kivalasztottKepekLista = [];

    constructor(KEPLISTA){
       // this.#keplista = this.#kever(KEPLISTA);
        const TAROLO = $("#tarolo");
        for (let i = 0; i < KEPLISTA.length; i++) {
            const KARTYA = new Kartya(KEPLISTA[i], TAROLO);
        }

        $(window).on("kattint",(event)=>{
            const KARTYA = event.detail;
            this.#kivalasztottKepekLista.push(KARTYA);
            if(this.#kivalasztottKepekLista.length === 2){
                if (this.#kivalasztottKepekLista[0].getAdat() === this.#kivalasztottKepekLista[1].getAdat()) {
                    setTimeout(() => {
                        $(this.#keplista[this.#kivalasztottKepekLista[0]]).css("display", "none");
                        $(this.#keplista[this.#kivalasztottKepekLista[1]]).css("display", "none");
                        this.#kivalasztottKepekLista = [];
                    }, 1000);
                } else {
                    setTimeout(() => {
                        this.#kivalasztottKepekLista.forEach(kep => {
                            kep.setKep("kepek/hatter.jpg")
                        });
                        this.#kivalasztottKepekLista = [];
                    }, 1000);
                }
            }
        })
        
    }

    #kever(KEPLISTA){
        for (let i = 0; i < 100; i++) {
            let indEgy = Math.floor(Math.random() * KEPLISTA.length);
            let indKetto = Math.floor(Math.random() * KEPLISTA.length);
            let z = "";
            z = KEPLISTA[indEgy];
            KEPLISTA[indEgy] = KEPLISTA[indKetto];
            KEPLISTA[indKetto] = z;
        }
    }

} export default JatekTer;
