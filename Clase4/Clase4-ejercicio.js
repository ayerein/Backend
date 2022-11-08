let fs = require('fs');

try {
    let fyh_actual = `${new Date().toLocaleDateString()}`;
    /* let archivo = fs.writeFileSync('./fyh.txt', fyh_actual); */  /* CREA EL ARCHIVO */
    let archivo = fs.readFileSync('./fyh.txt', fyh_actual); /* MUESTRA EL CONTENIDO DEL ARCHIVO EN LA COONSOLA */
} catch (error) {
    console.log(error)
}

/* npm init -y   ---- crea el package.json */