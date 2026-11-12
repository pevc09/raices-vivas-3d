/* Raíces Vivas · Preguntas del recorrido guiado
 * Un grupo de preguntas por cada paso del recorrido (en orden: Observa, Toca, Escucha, Comparte, Reinterpreta).
 * Lo usan index.html (para mostrarlas) y admin.html (para agrupar los resultados).
 * Tipos: 'opcion' (botones), 'escala' (1 a 5) y 'texto' (respuesta corta).
 * Si cambias el texto de una pregunta ya respondida, cambia también su id (p1b, p2b…) para no mezclar resultados.
 */
window.RV_PREGUNTAS = [
  [ // Paso 1 · Observa
    { id: 'p1', tipo: 'opcion', texto: '¿Qué región te llamó más la atención a primera vista?', opciones: ['Costa', 'Sierra', 'Selva', 'Ninguna en especial'] },
  ],
  [ // Paso 2 · Toca
    { id: 'p2', tipo: 'escala', texto: '¿Cuántas ganas te dan de tocar y explorar estos materiales?', min: 'Ninguna', max: 'Muchas' },
  ],
  [ // Paso 3 · Escucha
    { id: 'p3', tipo: 'escala', texto: '¿Cuánto te conectó el audio con el territorio peruano?', min: 'Nada', max: 'Mucho' },
  ],
  [ // Paso 4 · Comparte
    { id: 'p4', tipo: 'opcion', texto: '¿Compartirías una historia o foto de tu origen en el mapa colectivo?', opciones: ['Sí', 'Tal vez', 'No'] },
  ],
  [ // Paso 5 · Reinterpreta
    { id: 'p5', tipo: 'texto', texto: '¿Qué elemento de tu origen podría inspirar tu próxima creación?', placeholder: 'Ej.: los colores de los tejidos de mi abuela' },
    { id: 'p6', tipo: 'escala', texto: '¿Qué tan fácil fue recorrer el espacio?', min: 'Muy difícil', max: 'Muy fácil' },
  ],
];
window.RV_PASOS = ['Observa', 'Toca', 'Escucha', 'Comparte', 'Reinterpreta'];
