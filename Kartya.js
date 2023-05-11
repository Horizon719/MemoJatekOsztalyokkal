class Kartya{
    
    #adat
    #divElem
    #imgElem

    constructor(adat, szuloElem){
        this.#adat = adat;
        szuloElem.append(`<div class="divElem">
                            <img src="${adat}" alt="szörnyes kép">
                         </div>`);
        this.#divElem = $(".divElem:last-child");
        this.#imgElem = $(".divElem:last-child img");
        this.setKep("kepek/hatter.jpg");
        this.#divElem.on("click", () => {
            this.setKep(this.#adat);
            this.kattint();
        })
    }

    setKep(adat){
        this.#imgElem.attr("src", adat); 
    }

    getAdat(){
        return this.#adat;
    }

    kattint(){
        const FORD = new CustomEvent("kattint", {detail: this});
        window.dispatchEvent(FORD);
    }
} export default Kartya;
