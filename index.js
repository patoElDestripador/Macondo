class Viaje {
    constructor(decicion) {
        this.decicion = decicion;
        this.presupuesto = 2500000;
        this.arrayPPT = ["piedra", "papel", "tijera"];
        this.contraseñaWifi = "";
        this.mostrarEnPantalla = document.getElementById('dineroAct');
    }
    //salio desde el viernes
    caso1(opcion) {
        let repetir = true;
        while (repetir) {
            switch (opcion) {
                case 1:
                    this.generarGasto(15000);
                    break;
                case 2:
                    this.generarGasto(23000);
                    break;
                case 3:
                  // - no compra nada pero le tocara comprar algo en Medellín
                  //generar evento en medellin
                    break;
            }
                if(this.mensajes(6) == 2)  
                    repetir = false;
        }

    }
    caso2(altoOriginal  = 60, largoOriginal = 40, anchoOriginal = 20) {
        let alto =  55 / altoOriginal; 
        let largo =  40 /largoOriginal; 
        let ancho =  20 /anchoOriginal; 
        let min = Math.min(alto,largo,ancho);
        let nuevoAlto  =  Math.round(altoOriginal * min);
        let nuevoLargo =   Math.round(largoOriginal * min);
        let nuevoAncho =   Math.round(anchoOriginal * min); 
        return console.log(`Al alto le quita ${nuevoAlto}, al largo ${nuevoLargo} y al ancho ${nuevoAncho}`);
    }
    caso3(tiempo = 1) {
      //setear default timepo 1 hora en caso de envento agregar un evento mas
    let wifiPass = "01110010_01101001_01110111_01101001";
    wifiPass = wifiPass.split("_");
    let arrayTemp2 = [];
    let ascci = ["97","a","98","b","99","c","100","d","101","e","102","f","103","g","104","h","105","i","106","j","107","k","108","l","109","m","110","n","111","o","112","p","113","q","114","r","115","s","116","t","117","u","118","v","119","w","120","x","121","y","122","z",];
    for (let index = 0; index < wifiPass.length; index++) {
        arrayTemp2.push(ascci[ascci.findIndex((e) => e == parseInt(wifiPass[index], 2).toString()) + 1]);
    }
      this.generarGasto(tiempo * 50000);
    this.contraseñaWifi = arrayTemp2.join('');
        String.fromCharCode
    return this.mensajes(3)

    }
    caso4(mensaje = "Taxi me puede llevar al hotel mariposas amarillas") {
        console.log("pai digale al taxista de la siguiente forma: ",mensaje
        .toLowerCase()
        .replaceAll("a", "i")
        .replaceAll("e", "i")
        .replaceAll("o", "i")
        .replaceAll("u", "i"));
    }
    caso5(seleccion) {
        seleccion = this.arrayPPT[seleccion] + this.arrayPPT[this.numeroRandom(this.arrayPPT.length)];
        switch (seleccion) {
            case "piedratijera": // gana piedra
                console.log(" gana piedra");
                break;
            case "papelpiedra": // gane papel
                console.log("gane papel ");
                break;
            case "tijerapapel": // gane tijera
                console.log("gana tijera");
                break;
            case "tijerapiedra": // gana piedra
                console.log("gana piedra");
                //gana taxista restar
                this.generarGasto(300000);
                break;
            case "piedrapapel": // gana papel
                console.log("gana papel");
                //gana taxista restar
                this.generarGasto(300000);
                break;
            case "papeltijera": // gana tijera
                console.log("gana tijera ");
                //gana taxista restar
                this.generarGasto(300000);
                break;
            /*     
            case "tijeratijera":    // empate
                    console.log("empate1")
                    break;
            case "piedrapiedra":    // empate 
                    console.log("empate2")
                    break;
            case "papelpapel":      // empate 
                    console.log("empate3")
                    break; 
            */
            default:
                console.log("Empate pai ñokis no pasa nada ");
                break;
    }
    }
    caso6(){
        let vivo = true
        let dia = 1
        while(vivo && dia < 5){
            switch (vestimenta) {
                case 1: //amarillo                
                    console.log(`se fue a la piscina, el agua huele raro, pero no le pone importancia`);
                    let res = prompt(`
                    ¿Entrar en piscina?
                    1 - Si.
                    2 - No.
                    `)
                    if(res == 1){
                        console.log("empieza a sentirse ahogado, demasiado cloro, muere")
                        vivo = false
                    }
                    dia++
                    break;
                case 2: //verde
                    res = prompt(`
                    ¿Quieres continuar toda la caminata?
                    1 - Si.
                    2 - No.
                    `);
                    if(res == 2){
                        console.log("se devolverá solo, y de noche se pierde, muere por perdida jeje")
                        vivo = false
                    }
                    dia++
                    break;
                case 3: // roja
                res = prompt(`
                ¿Que quieres hacer?
                1 - voleibol.
                2 - nadar en el mar.
                3 - tomar cocteles
                `)
                if(res == 3){
                    console.log("de pronto siente un fuerte dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver de emergencia. (terminan las vacaciones)")
                    vivo = false
                }
                dia++
                    break;
                case 4: // azul
                `- actividades dentro del hotel
                - bingo, se lo gana y aumenta su dinero
                - bailar, y la pasa muy bien
                - casino y apuesta, y solo se queda con pasaje de regreso (terminan las
                vacaciones)`
                res = prompt(`
                ¿Que quieres hacer?
                1 - Bingo.
                2 - Bailar.
                3 - Casino.
                `);
                if(res == 1){
                    console.log("Ganaste 300.000")
                    this.presupuesto += 300000 
                }else if( res == 3){
                    this.presupuesto = 650000
                }
                dia++
                    break;
                default:
                    break;
            }
        }
    }
    generarGasto(gasto) {
        this.presupuesto -= gasto;
        this.mostrarEnPantalla.innerText = `Dinero Actual : ${this.presupuesto}`;
    }
    numeroRandom(num) {
      let random = Math.floor(Math.random() * num);
    return random;
    }
    mensajes(pos){
        let mensaje = ""
        switch (pos) {
            case 1:
                mensaje = ` 
                Que hambre pai vamo a comer selecciona una opcion : 
                1 - Compra una almojábana con gaseosa son 15.000.
                2 - Un subway con gaseosa 23.000.
                3 - No compra nada.`
                break;
            case 2:
                mensaje = `Pai a esa maleta hay que quitarle`;
            case 3:
                mensaje = `Pai la contraseña wifi es : ${this.contraseñaWifi}`;
                return console.log(mensaje);
            case 4:
                mensaje = ``;
                break;
            case 5:
                mensaje = `
                ¿Que color de ropa te pondras hoy?
                1 - Amari
                2 - 
                `;
                break;
            case 6:
                mensaje =`Desea comprar algo mas
                1 - Si
                2 - No
                `;
                break;
        }
        return parseInt(prompt(mensaje))
    }
    //Ej 3 Explicar 
    //ej 2 Explicar 
}
let funciona = new Viaje(1);

funciona.caso1(funciona.mensajes(1))
funciona.caso2()
funciona.caso3()
funciona.caso4()
funciona.caso5()
