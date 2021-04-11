function saludar(persona) {
    let mensaje = "Hola";
    function nombre() {
        return mensaje + " " + persona;
    }
    return nombre ();
}

console.log (saludar("maria"))