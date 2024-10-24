const fs = require('fs');
const officeParser = require('officeparser');

const config = {
    newlineDelimiter: " ",  // Separate new lines with a space instead of the default \n.
    ignoreNotes: true       // Ignore notes while parsing presentation files like pptx or odp.
};

// Ruta del archivo a cargar
const filePath = "D:/TECSUP/CICLO V/Proyecto Integrador/archivos de prueba/clasepptx.pptx";

// Leer el archivo
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error("Error al leer el archivo:", err);
        return;
    }

    // Parsear el archivo con officeparser
    officeParser.parseOfficeAsync(data, config)
        .then(parsedData => {
            const newText = parsedData + " look, I can parse a powerpoint file";
            console.log(newText);
        })
        .catch(parseErr => console.error("Error al parsear el archivo:", parseErr));
});