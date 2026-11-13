const Snippets = [
  {
    documentation:
      "Añade dibujos ASCII, bocetos o lo que quieras, simplemente\nenciérralos entre al menos cuatro acentos graves (````).\n\nEjemplos:\n\n  `````````````````````````````````\n                           .--->  F\n  A       B     C   D     /\n  *-------*-----*---*----*----->  E\n           \\            ^ \\\n            v          /   '--->  G\n             B --> C -'\n  `````````````````````````````````",
    insertText:
      "``````````````````````````````````````````````````\n                             .--->  F\n    A       B     C   D     /\n    *-------*-----*---*----*----->  E\n             \\            ^ \\\n              v          /   '--->  G\n               B --> C -'\n``````````````````````````````````````````````````",
    label: 'lia-ascii-example',
  },
  {
    documentation:
      "Añade estilo a tus dibujos ASCII. Define el tamaño máximo o céntralos.\n\nEjemplos:\n\n  <!-- style=\"display: block;\n              margin-left: auto;\n              margin-right: auto;\n              max-width: 315px;\" -->\n  ``````````````````````````````````````````````````\n  ${1:                             .--->  F\n      A       B     C   D     /\n      *-------*-----*---*----*----->  E\n                           ^ v          /   '--->  G\n                 B --> C -'}\n  ``````````````````````````````````````````````````",
    insertText:
      '<!-- style="display: block; margin-left: auto; margin-right: auto; max-width: 315px;" -->\n``````````````````````````````````````````````````\n                             .--->  F\n    A       B     C   D     /\n    *-------*-----*---*----*----->  E\n             \\            ^ \\\n              v          /   \'--->  G\n               B --> C -\'\n``````````````````````````````````````````````````',
    label: 'lia-ascii-example-css',
  },
  {
    documentation:
      "El código `en línea` se escribe `entre acentos graves`.",
    insertText: '`code`',
    label: 'lia-code-inline',
  },
  {
    documentation:
      "Para insertar un bloque de código con resaltado de sintaxis, encierra tu fragmento entre tres acentos graves (```) seguidos de un código de lenguaje. Para ver todos los códigos de lenguaje, visita el enlace de abajo; en la mayoría de los casos basta con el nombre del lenguaje o la extensión típica del archivo.\n\nEjemplos:\n\n  ```javascript\n  var s = \"Resaltado de sintaxis JavaScript\";\n  alert(s);\n  s;\n  ```\n\n  ```python\n  s = \"Resaltado de sintaxis Python\"\n  print s\n  ```\n\n  ```\n  Sin lenguaje indicado, no hay resaltado de sintaxis.\n  Pero podemos incluir una <b>etiqueta</b>.\n  ```",
    insertText:
      '```javascript\nvar s = "JavaScript syntax highlighting";\nalert(s);\n```',
    label: 'lia-code-block',
  },
  {
    documentation:
      "Para insertar un bloque de código ejecutable y editable con resaltado de sintaxis, añade una etiqueta <script> después de un bloque de código Markdown normal. La macro @input se sustituye por la entrada actual del usuario y se evalúa en un bloque try/catch. Con JavaScript también puedes incrustar intérpretes de otros lenguajes o acceder a ellos; en esos casos tendrás que cambiar el contenido de la etiqueta script. Para hacerte una idea de las posibilidades, pulsa el enlace de abajo.\nEl resultado del script o el error se muestran en una salida tipo consola bajo el bloque de código.\n\nEjemplo:\n\n  ```javascript\n  var s = \"Resaltado de sintaxis JavaScript\";\n  alert(s);\n  ```\n  <script>@input</script>",
    insertText:
      '```javascript\nvar s = "JavaScript syntax highlighting";\nalert(s);\ns;\n```\n<script>@input</script>',
    label: 'lia-code-block-js',
  },
  {
    documentation:
      "Puedes poner nombre a tus fragmentos añadiéndolo justo después del código de lenguaje. Por defecto será visible, pero añadiendo un signo más (+) delante del nombre lo haces más expresivo, mientras que un signo menos (-) lo oculta al principio. Así también puedes agrupar varios archivos en un proyecto (ejecutable).\n\nEjemplos:\n\n  ```javascript    Visible.js\n  alert(\"Archivo JavaScript visible\");\n  ```\n\n  ```javascript   +Visible.js\n  alert(\"Otro archivo JavaScript visible\");\n  ```\n\n  ```javascript   -Oculto.js\n  alert(\"Archivo JavaScript oculto al inicio\");\n  ```",
    insertText:
      '```javascript title.js\nvar s = "Named JavaScript syntax highlighting";\nalert(s);\n```',
    label: 'lia-code-block-name',
  },
  {
    documentation:
      "Para insertar un fragmento de código con nombre y ejecutable. La macro @input se sustituye por la entrada actual del usuario y se evalúa en un bloque try/catch. Con JavaScript también puedes incrustar intérpretes de otros lenguajes o acceder a ellos; en esos casos tendrás que cambiar el contenido de la etiqueta <script>. Para hacerte una idea de las posibilidades, pulsa el enlace de abajo.\nEl resultado del script o el error se muestran en una salida tipo consola bajo el bloque de código.\n\nEjemplo:\n\n  ```javascript   +Titulo.js\n  var s = \"Resaltado de sintaxis JavaScript visible\";\n  ```\n  <script>@input</script>\n\n  ```javascript   +Titulo.js\n  var s = \"Resaltado de sintaxis JavaScript oculto\";\n  ```\n  <script>@input</script>",
    insertText:
      '```javascript   Filename.js\nvar s = "Named JavaScript syntax highlighting";\nalert(s);\ns;\n```\n<script>@input</script>',
    label: 'lia-code-block-name-js',
  },
  {
    documentation:
      "Versión ejecutable extendida de un bloque de código: muestra cómo extraer los errores y devolverlos con LiaError para mostrar errores, avisos o información en línea.\nSi usas un proyecto y quieres integrar más de un archivo en la ejecución, tendrás que usar la macro parametrizada @input(int); el entero se define por el orden de los archivos (@input equivale a 0).\n\nEjemplo:\n\n  ```javascript\n  var s = \"Resaltado de sintaxis JavaScript\";\n  alert(s);\n  ```\n  <script>\n    try{\n      eval(`@input`);  // <== código a evaluar\n    } catch (e) {\n      var log = e.stack.match(/((.*?):(.*))\\n.*?(:(\\d+):(\\d+)\\)\\n)/);\n      var err_msg = new LiaError(log[1] + \" =>  (\" + log[4], 1);\n      err_msg.add_detail(0, log[3], \"error\", log[5]-1, log[6]);\n      throw err_msg;\n    }\n  </script>",
    insertText:
      '```javascript\nvar s = "JavaScript syntax highlighting";\nalert(s);\n```\n<script>\n  try{\n    eval(`@input`);\n  } catch (e) {\n    var log = e.stack.match(/((.*?):(.*))\\n.*?(:(\\d+):(\\d+)\\)\\n)/);\n    var err_msg = new LiaError(log[1] + " =>  (" + log[4], 1);\n    err_msg.add_detail(0, log[3], "error", log[5]-1, log[6]);\n    throw err_msg;\n  }\n</script>',
    label: 'lia-code-block-jsx',
  },
  {
    documentation:
      "Versión ejecutable extendida de un bloque de código: muestra cómo extraer los errores y devolverlos con LiaError para mostrar errores, avisos o información en línea.\nSi usas un proyecto y quieres integrar más de un archivo en la ejecución, tendrás que usar la macro parametrizada @input(int); el entero se define por el orden de los archivos (@input equivale a 0).\n\nEjemplo:\n\n  <script>\n    try{\n      eval(`@input`); // código a evaluar\n    } catch (e) {\n      // pattern matching para obtener el mensaje, la línea y la columna\n      var log = e.stack.match(/((.*?):(.*))\\n.*?(:(\\d+):(\\d+)\\)\\n)/);\n\n      // crea un nuevo objeto LiaError con\n      // param1: mensaje de error\n      // param2: número de archivos implicados (int)\n      var err_msg = new LiaError(log[1] + \" =>  (\" + log[4], 1);\n\n      // añade tanta información como quieras al mensaje de error\n      // param1: id del archivo\n      // param2: cadena de información adicional\n      // param3: tipo, \"error\", \"info\" o \"warning\"\n      // param4: número de línea\n      // param5: número de columna\n      err_msg.add_detail(0, log[3], \"error\", log[5]-1, log[6]);\n\n      throw err_msg;   // por último, lánzalo\n    }\n  </script>",
    insertText:
      '<script>\n  try{\n    eval(`@input`);\n  } catch (e) {\n    var log = e.stack.match(/((.*?):(.*))\\n.*?(:(\\d+):(\\d+)\\)\\n)/);\n    var err_msg = new LiaError(log[1] + " =>  (" + log[4], 1);\n    err_msg.add_detail(0, log[3], "error", log[5]-1, log[6]);\n    throw err_msg;\n  }\n</script>',
    label: 'lia-code-js',
  },
  {
    documentation:
      "Además de la macro @input, existe la macro @output, que define la salida inicial de un bloque de código ejecutable. Este bloque tiene que ser el último y puedes anteponer un signo más (+) o menos (-) para indicar si la salida se interpreta como stdout normal o como stderr.\n\nEjemplo:\n\n  ``` js     -EvalScript.js\n  let str = \"hola mundo\";\n\n  consolelog(str)\n  ```\n  ``` json    -@ouput\n  Hay un error en la línea 3...\n  ```\n  <script>@input</script>",
    insertText: '``` text     +@output\nEnter your default output\n```',
    label: 'lia-code-output',
  },
  {
    documentation:
      "Si quieres crear un proyecto y separar datos y código en varios archivos, simplemente escribe varios bloques de código seguidos. Para hacerlos ejecutables como un todo, añade una etiqueta script al final y usa la macro parametrizada @input(id) para componer tu proyecto. El id de cada archivo se define por el orden de los bloques de código.\nPulsa el enlace de abajo para ver más ejemplos.\n\nEjemplo:\n\n  ``` js     -EvalScript.js\n  let quien = data.first_name + \" \" + data.last_name;\n\n  if(data.online) { quien + \" está conectado\"; }\n  else            { quien + \" NO está conectado\"; }\n  ```\n  ``` json    +Data.json\n  { \"first_name\" :  \"Sammy\",\n    \"last_name\"  :  \"Shark\",\n    \"online\"     :  true   }\n  ```\n  <script>\n    // inserta el conjunto de datos JSON en la variable local data\n    let data = @input(1);\n\n    // evalúa el script que usa ese conjunto de datos\n    eval(`@input(0)`);\n  </script>",
    insertText:
      '``` js     -EvalScript.js\nlet who = data.first_name + " " + data.last_name;\n\nif(data.online) {\n  who + " is online";\n}\nelse {\n  who + " is NOT online";\n}\n```\n``` json    Data.json\n{\n  "first_name" :  "Sammy",\n  "last_name"  :  "Shark",\n  "online"     :  true\n}\n```\n<script>\n  // insert the JSON dataset into the local variable data\n  let data = @input(1);\n\n  // eval the script that uses this dataset\n  eval(`@input(0)`);\n</script>',
    label: 'lia-code-project',
  },
  {
    documentation:
      "Los comentarios son los elementos que se leen en voz alta en los modos diapositiva y presentación, y que se imprimen en su posición en el modo libro de texto. Solo se permiten párrafos como comentarios y se puede usar Markdown para dar estilo.\nLa voz por defecto se define en la cabecera principal; si no, se usará el inglés. Esta voz principal se puede cambiar por sección añadiendo un comentario de sección.\n\nEjemplo:\n  <!--\n  author:   ...\n  email:    ...\n  ...\n  narrator: Spanish Female\n  -->\n\n  # Título\n\n               --{{0}}--\n  Hablaré con voz *femenina* en español.\n\n  ## Sección\n  <!-- narrator: Spanish Male -->\n\n               --{{0}}--\n  Toda esta sección la leerá una voz masculina en español.\n\n               --{{1}}--\n  Pero solo esta parte...\n\nPara simplificar la búsqueda de voces, empieza a escribir \"voice\" y haz una búsqueda difusa de todas las voces disponibles, o pulsa el enlace de abajo.",
    insertText:
      "              --{{number}}--\nEnter some **text** that gets read out aloud.\nOnly paragraphs are allowed!'",
    label: 'lia-comment',
  },
  {
    documentation:
      "También puedes cambiar la voz por comentario añadiéndola justo después del número de aparición.\nEscribe \"voice\" para buscar entre todas las voces o pulsa el enlace de abajo.\n\nEjemplo:\n        --{{0 Spanish Female}}--\n  Hablaré con voz femenina en español,\n  sin importar cuál sea el idioma por defecto.\n\n        --{{0 Deutsch Male}}--\n  Und hier äußert sich gerade ein deutscher Mann.",
    insertText:
      "              --{{number voice}}--\nEnter some **text** that gets read out aloud with another voice.\nOnly paragraphs are allowed!'",
    label: 'lia-comment-voice',
  },
  {
    documentation:
      "Si quieres leer en voz alta un texto adicional que no debe aparecer en el modo libro de texto, simplemente mete tu comentario dentro de una etiqueta de comentario HTML.\n\nEjemplo:\n  <!-- --{{2}}--\n  Hablaré con la voz por defecto, pero no apareceré\n  en ningún otro lugar del documento.\n  -->",
    insertText:
      '<!-- --{{number}}-- Enter some **text** that gets read out aloud! -->',
    label: 'lia-comment-hidden',
  },
  {
    documentation:
      "Si quieres leer en voz alta un texto adicional que no debe aparecer en el modo libro de texto y además con otra voz, mete tu comentario con una definición de voz dentro de una etiqueta de comentario HTML.\n\nEjemplo:\n  <!-- --{{2 Spanish Female}}--\n  Hablaré con voz femenina en español, pero no apareceré\n  en ningún otro lugar del documento.\n  -->\n\nEscribe \"voice\" para buscar entre las voces o pulsa el enlace de abajo para más información.",
    insertText:
      '<!-- --{{number voice}}-- Enter some **text** that gets read out aloud! -->',
    label: 'lia-comment-voice-hidden',
  },
  {
    documentation:
      "El carácter se usa como código de color: r es rojo, w es blanco, etc. Las mayúsculas y minúsculas definen el tamaño de los puntos dibujados. Y si solo hay un carácter, se dibuja como un único punto.\n\nEjemplo:\n                  Puntos de colores\n     6 | A a B b C c\n       | D d E e F f G g H h I i\neje y | J j K k L l M m N n o O\n       | P p Q q R r S s T t U u\n       | V v W w X x Y y Z Z   *\n     1 +------------------------\n       0        eje x         24\n\nLa definición del título, las etiquetas de los ejes y sus límites es opcional, pero el número de barras verticales (|) y guiones (-) define la resolución del diagrama.",
    insertText:
      '               Title - dots\n6 | A a B b C c\n  | D d E e F f G g H h I i\n  | J j K k L l M m N n o O\n  | P p Q q R r S s T t U u\n  | V v W w X x Y y Z Z   *\n1 +------------------------\n  0                      24',
    label: 'lia-diagram-dots',
  },
  {
    documentation:
      "El carácter se usa como código de color: r es rojo, B es azul, etc. Las mayúsculas y minúsculas definen el tamaño de los puntos. Una secuencia de caracteres iguales se interpreta como una polilínea, si hay más de dos caracteres y no hay dos caracteres en la misma posición x.\n\nEjemplo:\n                                  Multilínea\n  1.9 |\n      |                 ***\n    y |               *     *\n    - | r r r r r r r*r r r r*r r r r r r r\n    a |             *         *\n    x |            *           *\n    i | B B B B B * B B B B B B * B B B B B\n    s |         *                 *\n      | *  * *                       * *  *\n   -1 +------------------------------------\n      0            eje x                 1\n\nLa definición del título, las etiquetas de los ejes y sus límites es opcional, pero el número de barras verticales (|) y guiones (-) define la resolución del diagrama.",
    insertText:
      '                                Multiline\n1.9 |\n    |                 ***\n  y |               *     *\n  - | r r r r r r r*r r r r*r r r r r r r\n  a |             *         *\n  x |            *           *\n  i | B B B B B * B B B B B B * B B B B B\n  s |         *                 *\n    | *  * *                       * *  *\n -1 +------------------------------------\n    0              x-axis               1',
    label: 'lia-diagram-multiline',
  },
  {
    documentation:
      "Los puntos simples y las polilíneas se pueden combinar en un mismo diagrama si usan caracteres distintos.\n\nEjemplo:\n              Combinando puntos y polilíneas\n  1.9 |\n      |     PUNTOS\n    y |                                *\n    - |\n    a |                         *\n    x |                  *\n    i |         *\n    s |\n      | *\n   -1 +------------------------------------\n      0            eje x                 1\n\nLa definición del título, las etiquetas de los ejes y sus límites es opcional, pero el número de barras verticales (|) y guiones (-) define la resolución del diagrama.",
    insertText:
      '             Combining dots and polylines\n1.9 |\n    |     DOTS\n  y |                                *\n  - |\n  a |                         *\n  x |                  *\n  i |         *\n  s |\n    | *\n -1 +------------------------------------\n    0            x-axis                 1',
    label: 'lia-diagram-simple',
  },
  {
    documentation:
      "Usa efectos en línea para destacar elementos concretos dentro de un bloque Markdown. Simplemente encierra tus elementos entre dos llaves consecutivas ({}{}), donde la primera guarda el número de aparición y la segunda tu texto, imagen, vídeo o lo que sea...\nPuedes retocar los efectos con animaciones y estilos adicionales. Animate.css está incluido por defecto.\n\nEjemplos:\n  Este bloque contiene algunos {1}{__efectos__ en línea} que aparecerán {2}{después}.\n\n  Los efectos en línea también pueden contener más efectos {1}{yo aparezco primero {2}{y yo segundo}}.\n\n  Con estilo ++ {3}{rebotando, rojo y con retardo}<!--\n        class = \"animated infinite bounce\"\n        style = \"animation-delay: 3s; color: red;\"\n      -->",
    insertText: '{number}{__element__}',
    label: 'lia-effect-inline',
  },
  {
    documentation:
      "Usa efectos en línea para destacar elementos concretos dentro de un bloque Markdown. Encierra tus elementos entre dos llaves consecutivas ({}{}), donde la primera contiene dos números separados por un guion (-): el primero define el momento de aparición y el segundo el de desaparición. El elemento contiene el Markdown a destacar (texto, vídeos, imágenes, etc.).\nPuedes retocar los efectos con animaciones y estilos adicionales. Animate.css está incluido por defecto.\n\nEjemplos:\n  Este bloque contiene {1-2}{aparezco en el fragmento 1 y desaparezco en el 2}.\n\n  Se puede anidar si tiene sentido {1-3}{permanezco del 1 al 3 {4}{y yo no seré visible}}.\n\n  Con estilo ++ {1-3}{rebotando, rojo y con retardo}<!--\n        class = \"animated infinite bounce\"\n        style = \"animation-delay: 3s; color: red;\"\n      -->",
    insertText: '{from-to}{__element__}',
    label: 'lia-effect-inline2',
  },
  {
    documentation:
      "Usa efectos de bloque para hacer aparecer o desaparecer bloques Markdown enteros. Funciona igual que los efectos en línea, pero el número de aparición va entre llaves dobles.\nEl bloque entero también se puede estilizar y retocar la animación, pero la etiqueta de comentario necesaria tiene que ir antes del bloque Markdown. Animate.css está incluido por defecto.\n\nEjemplos:\n                    {{1}}\n  Todo este bloque aparecerá con el primer\n  fragmento. Y permanecerá hasta el final de la diapositiva.\n\n                    {{2}}\n  ```js\n  // funciona con cualquier bloque markdown\n  ```\n\n  <!-- class = \"animated rollIn\" -->\n       {{3}}\n  | También | con   |\n  |---------|-------|\n  | cualquier| tabla |",
    insertText: '    {{number}}',
    label: 'lia-effect-block',
  },
  {
    documentation:
      "Usa efectos de bloque para hacer aparecer o desaparecer bloques Markdown enteros. Funciona igual que los efectos en línea, pero el número de aparición va entre llaves dobles, seguido de un guion (-) y el número de desaparición.\nEl bloque entero también se puede estilizar y retocar la animación, pero la etiqueta de comentario necesaria tiene que ir antes del bloque Markdown. Animate.css está incluido por defecto.\n\nEjemplos:\n                   {{1-4}}\n  Todo este bloque aparecerá con el primer fragmento.\n  Y permanecerá hasta el cuarto fragmento de esta diapositiva.\n\n                   {{0-1}}\n  ```js\n  // estaré presente desde el principio y desapareceré\n  // en el fragmento 1.\n  ```\n\n  <!-- class = \"animated rollIn\" -->\n       {{3-4}}\n  | También | con   |\n  |---------|-------|\n  | cualquier| tabla |",
    insertText: '    {{from-to}}',
    label: 'lia-effect-block',
  },
  {
    documentation:
      "Puedes agrupar varios bloques en un único bloque de efecto encerrándolos entre dos líneas de asteriscos (*). El resto funciona igual que los efectos de bloque...\nEl bloque entero también se puede estilizar y retocar la animación, pero la etiqueta de comentario necesaria tiene que ir antes del bloque Markdown. Animate.css está incluido por defecto.\n\nEjemplos:\n                    {{1}}\n  *************************************************\n\n  Ambos bloques aparecerán a la vez. También se permite\n  anidar otros efectos {2}{en línea} y de bloque.\n\n\n  | También | con   |\n  |---------|-------|\n  | cualquier| tabla |\n\n  **************************************************",
    insertText:
      '                 {{number}}\n************************************************\n\nInsert your Markdown blocks in here ...\n\n************************************************',
    label: 'lia-effect-multiblock',
  },
  {
    documentation:
      "Puedes agrupar varios bloques en un único bloque de efecto encerrándolos entre dos líneas de asteriscos (*). El resto funciona igual que los efectos de bloque...\nEl bloque entero también se puede estilizar y retocar la animación, pero la etiqueta de comentario necesaria tiene que ir antes del bloque Markdown. Animate.css está incluido por defecto.\n\nEjemplos:\n                    {{1-3}}\n  *************************************************\n\n  Ambos bloques aparecerán a la vez y desaparecerán en\n  el tercer fragmento. También se permite anidar otros\n  efectos {2}{en línea} y de bloque.\n\n\n  | También | con   |\n  |---------|-------|\n  | cualquier| tabla |\n\n  **************************************************",
    insertText:
      '                 {{from-to}}\n************************************************\n\nInsert your Markdown blocks in here ...\n\n************************************************',
    label: 'lia-effect-multiblock2',
  },
  {
    documentation:
      "Esto es solo un ejemplo de cómo se puede usar Animate.css para retocar tus efectos. Se puede aplicar más magia CSS a elementos o bloques sueltos añadiendo una etiqueta de comentario delante del bloque o justo después del elemento.\n\nEjemplo:\n\n  <!-- class = \"animated rollIn\" style = \"animation-delay: 3s; color: purple\" -->\n  Todo el bloque de texto debería aparecer en color púrpura y con un efecto de balanceo.\n  Que es un **mal** ejemplo, úsalo con cautela...\n  ~~ Rojo saltarín ~~ <!-- class = \"animated infinite bounce\" style = \"color: red;\" -->\n\nPara más información sobre cómo cambiar los estilos de animación, pulsa el enlace de abajo.",
    insertText: '<!-- class="animated rollIn" style="animation-delay: 3s;" -->',
    label: 'lia-effect-animate-example',
  },
  {
    documentation:
      "Con esta notación de triángulo se puede añadir un botón de reproducción que lee en voz alta el texto de las segundas llaves. Es posible añadir definiciones de animación y también cambiar la voz.\n\nEmpieza a escribir voice si quieres cambiar el narrador y el idioma.\n\nEjemplos:\n  Dentro de este bloque {|>}{este texto se leerá en voz alta}.\n\n  Se puede anidar si tiene sentido {1-3 |>}{hablo del 1 al 3 {4}{y también se puede anidar}}.\n\n  Si quieres {|> Spanish Female}{también es posible cambiar la voz}.",
    insertText: '{|>}{text to read}',
    label: 'lia-effect-inline-playback',
  },
  {
    documentation:
      "Usa `|>` o `!>` para indicar que todo el bloque siguiente se debe leer en voz alta con el idioma por defecto. También se pueden añadir números de efecto para indicar la aparición y otra lengua. Empieza a escribir \"voice\" para elegir otro narrador e idioma.\n\nEjemplo:\n\n     {{|>}}\n  Lee este bloque cuando el usuario pulse el botón de reproducción.\n\n     {{3 |>}}\n  Este bloque solo aparecerá en el paso 3 de la animación.\n\n     {{1-2 |> Spanish Female}}\n  Aparecerá en el paso 1 y desaparecerá en el paso 2; cuando\n  el usuario pulse sobre él, se usará una voz femenina en español como narradora.",
    insertText: '{{|>}}',
    label: 'lia-effect-block-playback',
  },
  {
    documentation:
      "Los enlaces se pueden añadir de muchas formas (relativos o absolutos): al estilo Markdown habitual con corchetes ([]) y paréntesis (()), o directamente si empiezan por http o www y siguen el patrón habitual de las URL.\nSi quieres navegar dentro del documento actual, usa la almohadilla y el número de la diapositiva.\nY puedes añadir opciones HTML y CSS adicionales con un comentario al final.\n\nEjemplos:\n  [LiaScript](https://liascript.github.io)\n\n  También un enlace aceptado: https://liascript.github.io\n\n  Navegación local por número de diapositiva: [arriba](#1)\n\n  Navegación local por título de diapositiva: [arriba](#algun-titulo)\n\n  Con estilo [LiaScript](https://liascript.github.io)<!--\n    title = \"haz clic\"\n    style = \"color: red;\"\n  -->",
    insertText: '[name](url)',
    label: 'lia-link',
  },
  {
    documentation:
      "Se puede añadir información opcional a cada enlace poniendo comillas dobles después del enlace dentro de los paréntesis.\n\nEjemplos:\n  [LiaScript](https://liascript.github.io \"haz clic\")\n\n  Navegación local:\n    [arriba](#1 \"por número de diapositiva\")\n    [arriba](#y-el-titulo-es \"por título de diapositiva\")",
    insertText: '[name](url "info")',
    label: 'lia-link-info',
  },
  {
    documentation:
      "Incluye imágenes con la notación Markdown habitual, como se muestra abajo, usando rutas absolutas o relativas. A diferencia del Markdown común, también puedes añadir estilos, clases o cualquier otro atributo permitido de imagen simplemente añadiendo una etiqueta de comentario.\n\nEjemplo:\n\n  ![imagen de un cachorro](https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg)\n\n  ![relativa](./img/cachorro.jpg)\n\n  ![con estilo](./img/cachorro.jpg)<!--\n      title = \"un cachorro gris\"\n      width = \"300px\"\n      style = \"border: 10px solid; filter: grayscale(100%);\"\n    -->",
    insertText: '![alt-text](image-url)',
    label: 'lia-image',
  },
  {
    documentation:
      "Se puede añadir información opcional a cada imagen poniendo comillas dobles después del enlace dentro de los paréntesis. Se mostrará como subtítulo del elemento y también puede incluir sintaxis Markdown.\n\nEjemplo:\n\n  ![imagen de un cachorro](https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg \"Esta imagen es libre __CC0__\")\n\n  ![relativa](./img/cachorro.jpg \"Una bonita imagen de un __cachorro__\")",
    insertText: '![alt-text](image-url "info")',
    label: 'lia-image-info',
  },
  {
    documentation:
      "El audio se incluye con un signo de interrogación inicial (?) seguido de un enlace Markdown normal. Si quieres incluir SoundCloud, basta con referirte al enlace y el reproductor se incrustará en tu curso.\n\nEjemplo:\n\n  ?[pájaros cantando](https://bigsoundbank.com/UPLOAD/mp3/1068.mp3)\n\n  ?[soundcloud](https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata)",
    insertText: '?[alt-text](audio-url)',
    label: 'lia-audio',
  },
  {
    documentation:
      "Se puede añadir información opcional a cada archivo de audio poniendo comillas dobles después del enlace dentro de los paréntesis. Se mostrará como subtítulo del elemento y también puede incluir sintaxis Markdown.\n\nEjemplo:\n\n  ?[pájaros cantando](https://bigsoundbank.com/UPLOAD/mp3/1068.mp3 \"información opcional\")",
    insertText: '?[alt-text](audio-url "info")',
    label: 'lia-audio-info',
  },
  {
    documentation:
      "Incluir vídeos es como combinar imágenes y sonido con una exclamación seguida de una interrogación (!?), como se muestra abajo. Las rutas pueden ser absolutas o relativas. También puedes añadir estilos, clases u otras opciones permitidas con una etiqueta de comentario.\n\nPara simplificar, puedes usar directamente el enlace de YouTube, Vimeo o TeacherTube. Esos recursos se analizan automáticamente y se incluyen en el documento sin buscar un código de incrustación.\n\nEjemplo:\n\n  !?[eLab](https://www.youtube.com/watch?v=bICfKRyKTwE)\n\n  !?[relativo](./mov/video.mp4)\n\n  !?[eLab](https://www.youtube.com/watch?v=bICfKRyKTwE)<!--\n      title = \"el elab en gris\"\n      width = \"90%\"\n      style = \"border: 10px solid; filter: grayscale(100%);\"\n    -->\n\nPero también se puede usar HTML para incluir vídeos y otras cosas...\n\n  <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/bICfKRyKTwE\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
    insertText: '!?[alt-text](movie-url)',
    label: 'lia-movie',
  },
  {
    documentation:
      "Se puede añadir información opcional a cada vídeo poniendo comillas dobles después del enlace dentro de los paréntesis. Se mostrará como subtítulo del elemento y también puede incluir sintaxis Markdown.\n\nEjemplo:\n\n  !?[eLab](https://www.youtube.com/watch?v=bICfKRyKTwE \"Información sobre el proyecto __eLab__ anterior.\")",
    insertText: '!?[alt-text](movie-url "info")',
    label: 'lia-movie-info',
  },
  {
    documentation:
      "Incrusta cualquier cosa usando dos signos de interrogación. LiaScript intentará determinar si es posible usar oEmbed para ese sitio; si no, el contenido se incrustará como un `<iframe>`.\n\nEjemplo:\n\n  ??[simulador de circuitos](https://falstad.com/circuit/circuitjs.html)\n\n  ??[Modelo 3D de una jarra](https://sketchfab.com/3d-models/pottery-jar-0576d43d28924c948ed3bbae02e4e0cb)",
    insertText: '??[alt-text](url)',
    label: 'lia-embed',
  },
  {
    documentation:
      "Si agrupas enlaces multimedia en una misma línea o en un mismo bloque, aparecerán como una galería en LiaScript.\n\nEjemplo:\n\n  ![imagen de un cachorro](https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg)\n  ??[simulador de circuitos](https://falstad.com/circuit/circuitjs.html)\n  ??[Modelo 3D de una jarra](https://sketchfab.com/3d-models/pottery-jar-0576d43d28924c948ed3bbae02e4e0cb)",
    insertText: '![alt-text](url) ![alt-text](url)',
    label: 'lia-gallery',
  },
  {
    documentation:
      "Las notas a pie en línea se componen de una referencia entre corchetes con un acento circunflejo inicial. El texto siguiente va entre paréntesis; solo se permite una línea.\n\n   Ejemplo con [^1](nota al pie _en línea_) y algo más de texto.",
    insertText: '[^ref](explanation)',
    label: 'lia-footnote-inline',
  },
  {
    documentation:
      "Las notas a pie multilínea se dividen en una referencia y un comentario. Las referencias se definen con corchetes y un acento circunflejo inicial y pueden aparecer en cualquier parte del texto. Los textos de las notas se colocan al final de cada sección.\n\nEjemplo:\n\nAquí hay una referencia a nota a pie, [^1] y otra.[^notalarga]\n\n...\n\n[^1]: Aquí está el texto de la nota.\n\n[^notalarga]: Aquí una con varios bloques.\n\n               Los párrafos siguientes se indentan para mostrar que\n               pertenecen a la nota anterior.",
    insertText: '[^ref]',
    label: 'lia-footnote-reference',
  },
  {
    documentation:
      "Las notas a pie multilínea se dividen en una referencia y un comentario. Los textos de las notas empiezan con una \"etiqueta\" de referencia seguida de dos puntos. Tienen que colocarse al final de cada sección; si no, no se interpretan como notas, y las notas con varios bloques deben seguir la indentación anterior.\nEjemplo:\n...\n\n[^1]: Aquí está el texto de la nota.\n\n[^notalarga]: Aquí una con varios bloques.\n\n               Los párrafos siguientes se indentan para mostrar que\n               pertenecen a la nota anterior.",
    insertText: '[^ref]: some comments',
    label: 'lia-footnote-text',
  },
  {
    documentation:
      "Inserta una fórmula matemática (en línea) dentro de tu texto. Tiene que ir encerrada entre dos signos de dólar simples, como se muestra en el ejemplo.\n\nEjemplo: $ f(a,b,c) = (a^2+b^2+c^2)^3 $\n\nLas fórmulas se renderizan con KaTeX; pulsa el enlace de abajo para más información y ejemplos de la notación.",
    insertText: '$ f(a,b,c) = (a^2+b^2+c^2)^3 $',
    label: 'lia-formula-inline',
  },
  {
    documentation:
      "Inserta una fórmula matemática multilínea como bloque, centrada automáticamente en el documento. Tiene que ir encerrada entre dos signos de dólar, como se muestra en el ejemplo.\n\nEjemplo:\n\n$$\n   \\sum_{i=1}^\\infty\\frac{1}{n^2}\n        =\\frac{\\pi^2}{6}\n$$\n\nLas fórmulas se renderizan con KaTeX; pulsa el enlace de abajo para más información y ejemplos de la notación.",
    insertText:
      '$$\n   \\sum_{i=1}^\\infty\\frac{1}{n^2}\n        =\\frac{\\pi^2}{6}\n$$',
    label: 'lia-formula-block',
  },
  {
    documentation:
      "  La cabecera principal es un comentario con el siguiente formato. Puedes usarla para definir valores por defecto: autores, emails, dónde encontrar traducciones, qué JavaScript y estilos cargar, así como el idioma de tu curso.\n  Puedes cambiar algunos de estos ajustes dentro de una subcabecera para cada sección individualmente.\n\n  Por defecto:\n      language: (en) | de | es | ua | fa | hy | bg\n      narrator: US English Male\n\n  Ejemplo:\n\n      <!--\n      author:   Tu Nombre\n      email:    tu@email.com\n      version:  0.1.0\n      language: es\n      narrator: Spanish Female\n\n      comment:  Una breve descripción de tu curso.\n                También puede ocupar varias líneas.\n\n      link:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css\n                https://...\n\n      script:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js\n                https://...\n\n      translation: English translations/English.md\n      translation: Deutsch translations/German.md\n      -->\n\n      # Curso ...\n\nY puedes referirte a estos valores con las macros de sistema:\n\n    @author\n    @email\n    @version",
    insertText:
      '<!--\nauthor:   Your Name\nemail:    your@email.com\nversion:  0.1.0\nlanguage: en\nnarrator: US English Female\n\ncomment:  This simple description of your course.\n          Multiline is also okay.\n\nlink:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css\n\nscript:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js\n\ntranslation: Français translations/French.md\n-->',
    label: 'lia-header-main',
  },
  {
    documentation:
      "Puedes sobrescribir algunos ajustes de la cabecera principal, como se muestra abajo. Basta con añadir un comentario al título de la sección y sobrescribir solo los ajustes que te interesen.\n\nEjemplo:\n\n    ...\n    # Curso\n    ...\n    ## Sección\n    <!--\n    narrator: Spanish Male\n    -->\n    ...\n    ### Subsección\n    <!--\n    author:   Autor de la Sección\n    email:    autor.seccion@email.com\n    version:  0.1.0\n    narrator: Spanish Female\n\n    link:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css\n    script:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js\n    -->",
    insertText:
      '<!--\nauthor:   Section Author\nemail:    section.author@email.com\nversion:  0.1.0\nnarrator: UK English Female\n\nlink:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css\n\nscript:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js\n-->',
    label: 'lia-header-section',
  },
  {
    documentation:
      '',
    insertText: 'actionscript',
    label: 'hili-actionscript',
  },
  {
    documentation:
      '',
    insertText: 'as',
    label: 'hili-as',
  },
  {
    documentation:
      '',
    insertText: 'apache',
    label: 'hili-apache',
  },
  {
    documentation:
      '',
    insertText: 'apacheconf',
    label: 'hili-apacheconf',
  },
  {
    documentation:
      '',
    insertText: 'asciidoc',
    label: 'hili-asciidoc',
  },
  {
    documentation:
      '',
    insertText: 'adoc',
    label: 'hili-adoc',
  },
  {
    documentation:
      '',
    insertText: 'x86asm',
    label: 'hili-x86asm',
  },
  {
    documentation:
      '',
    insertText: 'armasm',
    label: 'hili-armasm',
  },
  {
    documentation:
      '',
    insertText: 'arm',
    label: 'hili-arm',
  },
  {
    documentation:
      '',
    insertText: 'avrasm',
    label: 'hili-avrasm',
  },
  {
    documentation:
      '',
    insertText: 'asm',
    label: 'hili-asm',
  },
  {
    documentation:
      '',
    insertText: 'bash',
    label: 'hili-bash',
  },
  {
    documentation:
      '',
    insertText: 'sh',
    label: 'hili-sh',
  },
  {
    documentation:
      '',
    insertText: 'zsh',
    label: 'hili-zsh',
  },
  {
    documentation:
      '',
    insertText: 'c',
    label: 'hili-c',
  },
  {
    documentation:
      '',
    insertText: 'cc',
    label: 'hili-cc',
  },
  {
    documentation:
      '',
    insertText: 'cpp',
    label: 'hili-cpp',
  },
  {
    documentation:
      '',
    insertText: 'c++',
    label: 'hili-c++',
  },
  {
    documentation:
      '',
    insertText: 'h',
    label: 'hili-h',
  },
  {
    documentation:
      '',
    insertText: 'hpp',
    label: 'hili-hpp',
  },
  {
    documentation:
      '',
    insertText: 'h++',
    label: 'hili-h++',
  },
  {
    documentation:
      '',
    insertText: 'clojure',
    label: 'hili-clojure',
  },
  {
    documentation:
      '',
    insertText: 'clj',
    label: 'hili-clj',
  },
  {
    documentation:
      '',
    insertText: 'coffeescript',
    label: 'hili-coffeescript',
  },
  {
    documentation:
      '',
    insertText: 'coffee',
    label: 'hili-coffee',
  },
  {
    documentation:
      '',
    insertText: 'cson',
    label: 'hili-cson',
  },
  {
    documentation:
      '',
    insertText: 'iced',
    label: 'hili-iced',
  },
  {
    documentation:
      '',
    insertText: 'csharp',
    label: 'hili-csharp',
  },
  {
    documentation:
      '',
    insertText: 'cs',
    label: 'hili-cs',
  },
  {
    documentation:
      '',
    insertText: 'c#',
    label: 'hili-c#',
  },
  {
    documentation:
      '',
    insertText: 'diff',
    label: 'hili-diff',
  },
  {
    documentation:
      '',
    insertText: 'patch',
    label: 'hili-patch',
  },
  {
    documentation:
      '',
    insertText: 'django',
    label: 'hili-django',
  },
  {
    documentation:
      '',
    insertText: 'jinja',
    label: 'hili-jinja',
  },
  {
    documentation:
      '',
    insertText: 'dockerfile',
    label: 'hili-dockerfile',
  },
  {
    documentation:
      '',
    insertText: 'docker',
    label: 'hili-docker',
  },
  {
    documentation:
      '',
    insertText: 'elixir',
    label: 'hili-elixir',
  },
  {
    documentation:
      '',
    insertText: 'ex',
    label: 'hili-ex',
  },
  {
    documentation:
      '',
    insertText: 'exs',
    label: 'hili-exs',
  },
  {
    documentation:
      '',
    insertText: 'erlang',
    label: 'hili-erlang',
  },
  {
    documentation:
      '',
    insertText: 'erl',
    label: 'hili-erl',
  },
  {
    documentation:
      '',
    insertText: 'fsharp',
    label: 'hili-fsharp',
  },
  {
    documentation:
      '',
    insertText: 'fs',
    label: 'hili-fs',
  },
  {
    documentation:
      '',
    insertText: 'f#',
    label: 'hili-f#',
  },
  {
    documentation:
      '',
    insertText: 'fortran',
    label: 'hili-fortran',
  },
  {
    documentation:
      '',
    insertText: 'f90',
    label: 'hili-f90',
  },
  {
    documentation:
      '',
    insertText: 'f95',
    label: 'hili-f95',
  },
  {
    documentation:
      '',
    insertText: 'gcode',
    label: 'hili-gcode',
  },
  {
    documentation:
      '',
    insertText: 'nc',
    label: 'hili-nc',
  },
  {
    documentation:
      '',
    insertText: 'golang',
    label: 'hili-golang',
  },
  {
    documentation:
      '',
    insertText: 'go',
    label: 'hili-go',
  },
  {
    documentation:
      '',
    insertText: 'handlebars',
    label: 'hili-handlebars',
  },
  {
    documentation:
      '',
    insertText: 'hbs',
    label: 'hili-hbs',
  },
  {
    documentation:
      '',
    insertText: 'html.hbs',
    label: 'hili-html.hbs',
  },
  {
    documentation:
      '',
    insertText: 'html.handlebars',
    label: 'hili-html.handlebars',
  },
  {
    documentation:
      '',
    insertText: 'haskell',
    label: 'hili-haskell',
  },
  {
    documentation:
      '',
    insertText: 'hs',
    label: 'hili-hs',
  },
  {
    documentation:
      '',
    insertText: 'haxe',
    label: 'hili-haxe',
  },
  {
    documentation:
      '',
    insertText: 'hx',
    label: 'hili-hx',
  },
  {
    documentation:
      '',
    insertText: 'html',
    label: 'hili-html',
  },
  {
    documentation:
      '',
    insertText: 'xhtml',
    label: 'hili-xhtml',
  },
  {
    documentation:
      '',
    insertText: 'rss',
    label: 'hili-rss',
  },
  {
    documentation:
      '',
    insertText: 'atom',
    label: 'hili-atom',
  },
  {
    documentation:
      '',
    insertText: 'xjb',
    label: 'hili-xjb',
  },
  {
    documentation:
      '',
    insertText: 'xsd',
    label: 'hili-xsd',
  },
  {
    documentation:
      '',
    insertText: 'xsl',
    label: 'hili-xsl',
  },
  {
    documentation:
      '',
    insertText: 'plist',
    label: 'hili-plist',
  },
  {
    documentation:
      '',
    insertText: 'javascript',
    label: 'hili-javascript',
  },
  {
    documentation:
      '',
    insertText: 'js',
    label: 'hili-js',
  },
  {
    documentation:
      '',
    insertText: 'livescript',
    label: 'hili-livescript',
  },
  {
    documentation:
      '',
    insertText: 'ls',
    label: 'hili-ls',
  },
  {
    documentation:
      '',
    insertText: 'makefile',
    label: 'hili-makefile',
  },
  {
    documentation:
      '',
    insertText: 'mk',
    label: 'hili-mk',
  },
  {
    documentation:
      '',
    insertText: 'mak',
    label: 'hili-mak',
  },
  {
    documentation:
      '',
    insertText: 'markdown',
    label: 'hili-markdown',
  },
  {
    documentation:
      '',
    insertText: 'md',
    label: 'hili-md',
  },
  {
    documentation:
      '',
    insertText: 'mkdown',
    label: 'hili-mkdown',
  },
  {
    documentation:
      '',
    insertText: 'mkd',
    label: 'hili-mkd',
  },
  {
    documentation:
      '',
    insertText: 'ocaml',
    label: 'hili-ocaml',
  },
  {
    documentation:
      '',
    insertText: 'ml',
    label: 'hili-ml',
  },
  {
    documentation:
      '',
    insertText: 'objectivec',
    label: 'hili-objectivec',
  },
  {
    documentation:
      '',
    insertText: 'mm',
    label: 'hili-mm',
  },
  {
    documentation:
      '',
    insertText: 'objc',
    label: 'hili-objc',
  },
  {
    documentation:
      '',
    insertText: 'obj-c',
    label: 'hili-obj-c',
  },
  {
    documentation:
      '',
    insertText: 'delphi',
    label: 'hili-delphi',
  },
  {
    documentation:
      '',
    insertText: 'dpr',
    label: 'hili-dpr',
  },
  {
    documentation:
      '',
    insertText: 'dfm',
    label: 'hili-dfm',
  },
  {
    documentation:
      '',
    insertText: 'pas',
    label: 'hili-pas',
  },
  {
    documentation:
      '',
    insertText: 'pascal',
    label: 'hili-pascal',
  },
  {
    documentation:
      '',
    insertText: 'freepascal',
    label: 'hili-freepascal',
  },
  {
    documentation:
      '',
    insertText: 'lazarus',
    label: 'hili-lazarus',
  },
  {
    documentation:
      '',
    insertText: 'lpr',
    label: 'hili-lpr',
  },
  {
    documentation:
      '',
    insertText: 'lfm',
    label: 'hili-lfm',
  },
  {
    documentation:
      '',
    insertText: 'php',
    label: 'hili-php',
  },
  {
    documentation:
      '',
    insertText: 'php3',
    label: 'hili-php3',
  },
  {
    documentation:
      '',
    insertText: 'php4',
    label: 'hili-php4',
  },
  {
    documentation:
      '',
    insertText: 'php5',
    label: 'hili-php5',
  },
  {
    documentation:
      '',
    insertText: 'php6',
    label: 'hili-php6',
  },
  {
    documentation:
      '',
    insertText: 'perl',
    label: 'hili-perl',
  },
  {
    documentation:
      '',
    insertText: 'pl',
    label: 'hili-pl',
  },
  {
    documentation:
      '',
    insertText: 'pm',
    label: 'hili-pm',
  },
  {
    documentation:
      '',
    insertText: 'powershell',
    label: 'hili-powershell',
  },
  {
    documentation:
      '',
    insertText: 'ps',
    label: 'hili-ps',
  },
  {
    documentation:
      '',
    insertText: 'puppet',
    label: 'hili-puppet',
  },
  {
    documentation:
      '',
    insertText: 'pp',
    label: 'hili-pp',
  },
  {
    documentation:
      '',
    insertText: 'python',
    label: 'hili-python',
  },
  {
    documentation:
      '',
    insertText: 'py',
    label: 'hili-py',
  },
  {
    documentation:
      '',
    insertText: 'gyp',
    label: 'hili-gyp',
  },
  {
    documentation:
      '',
    insertText: 'ruby',
    label: 'hili-ruby',
  },
  {
    documentation:
      '',
    insertText: 'rb',
    label: 'hili-rb',
  },
  {
    documentation:
      '',
    insertText: 'gemspec',
    label: 'hili-gemspec',
  },
  {
    documentation:
      '',
    insertText: 'podspec',
    label: 'hili-podspec',
  },
  {
    documentation:
      '',
    insertText: 'thor',
    label: 'hili-thor',
  },
  {
    documentation:
      '',
    insertText: 'irb',
    label: 'hili-irb',
  },
  {
    documentation:
      '',
    insertText: 'rust',
    label: 'hili-rust',
  },
  {
    documentation:
      '',
    insertText: 'rs',
    label: 'hili-rs',
  },
  {
    documentation:
      '',
    insertText: 'scad',
    label: 'hili-scad',
  },
  {
    documentation:
      '',
    insertText: 'openscad',
    label: 'hili-openscad',
  },
  {
    documentation:
      '',
    insertText: 'shell',
    label: 'hili-shell',
  },
  {
    documentation:
      '',
    insertText: 'console',
    label: 'hili-console',
  },
  {
    documentation:
      '',
    insertText: 'stylus',
    label: 'hili-stylus',
  },
  {
    documentation:
      '',
    insertText: 'styl',
    label: 'hili-styl',
  },
  {
    documentation:
      '',
    insertText: 'tcl',
    label: 'hili-tcl',
  },
  {
    documentation:
      '',
    insertText: 'tk',
    label: 'hili-tk',
  },
  {
    documentation:
      '',
    insertText: 'twig',
    label: 'hili-twig',
  },
  {
    documentation:
      '',
    insertText: 'craftcms',
    label: 'hili-craftcms',
  },
  {
    documentation:
      '',
    insertText: 'typescript',
    label: 'hili-typescript',
  },
  {
    documentation:
      '',
    insertText: 'ts',
    label: 'hili-ts',
  },
  {
    documentation:
      '',
    insertText: 'vbscript',
    label: 'hili-vbscript',
  },
  {
    documentation:
      '',
    insertText: 'vbs',
    label: 'hili-vbs',
  },
  {
    documentation:
      '',
    insertText: 'verilog',
    label: 'hili-verilog',
  },
  {
    documentation:
      '',
    insertText: 'v',
    label: 'hili-v',
  },
  {
    documentation:
      '',
    insertText: 'xpath',
    label: 'hili-xpath',
  },
  {
    documentation:
      '',
    insertText: 'xq',
    label: 'hili-xq',
  },
  {
    documentation:
      "Inicializa tu archivo con un curso de ejemplo completo, con cabecera y cuerpo, que puedes usar como punto de partida para tu curso.\n\nEjemplo:\n\n    <!--\n    author:   Tu Nombre\n\n    email:    tu@email.org\n\n    version:  0.0.1\n\n    language: es\n\n    narrator: Spanish Female\n\n    ...\n    -->\n\n    # Título principal del curso\n\n    Este es el esqueleto inicial de tu **curso**...",
    insertText:
      '<!--\nauthor:   Your Name\n\nemail:    your@mail.org\n\nversion:  0.0.1\n\nlanguage: en\n\nnarrator: US English Female\n\ncomment:  Try to write a short comment about\n          your course, multiline is also okay.\n\nlink:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css\n\nscript:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js\n\ntranslation: Deutsch  translations/German.md\n\ntranslation: Français translations/French.md\n-->\n\n# Course Main Title\n\nThis is your **course** initialization stub.\n\nPlease see the [Docs](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md)\nto find out what is possible in [LiaScript](https://liascript.github.io).\n\nIf you want to use instant help in your Atom IDE, please type **lia** to see all available shortcuts.\n\n## Markdown\n\nYou can use common [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) syntax to create your course, such as:\n\n1. Lists\n2. ordered or\n\n   * unordered\n   * ones ...\n\n\n| Header 1   | Header 2   |\n| :--------- | :--------- |\n| Item 1     | Item 2     |\n\n\nImages:\n\n![images](https://farm2.static.flickr.com/1618/26701766821_7bea494826.jpg)\n\n\n### Extensions\n\n     --{{0}}--\nBut you can also include other features such as spoken text.\n\n      --{{1}}--\nInsert any kind of audio file:\n\n       {{1}}\n?[audio](https://bigsoundbank.com/UPLOAD/mp3/1068.mp3)\n\n\n     --{{2}}--\nEven videos or change the language completely.\n\n       {{2-3}}\n!?[video](https://www.youtube.com/watch?v=bICfKRyKTwE)\n\n\n      --{{3 Russian Female}}--\nПервоначально создан в 2004 году Джоном Грубером (англ. John Gruber) и Аароном\nШварцем. Многие идеи языка были позаимствованы из существующих соглашений по\nразметке текста в электронных письмах...\n\n\n    {{3}}\nType "voice" to see a list of all available languages.\n\n\n### Styling\n\n<!-- class = "animated rollIn" style = "animation-delay: 2s; color: purple" -->\nThe whole text-block should appear in purple color and with a wobbling effect.\nWhich is a **bad** example, please use it with caution ...\n~~ only this is red ;-) ~~ <!-- class = "animated infinite bounce" style = "color: red;" -->\n\n## Charts\n\nUse ASCII-Art to draw diagrams:\n\n                                    Multiline\n    1.9 |    DOTS\n        |                 ***\n      y |               *     *\n      - | r r r r r r r*r r r r*r r r r r r r\n      a |             *         *\n      x |            *           *\n      i | B B B B B * B B B B B B * B B B B B\n      s |         *                 *\n        | *  * *                       * *  *\n     -1 +------------------------------------\n        0              x-axis               1\n\n## Quizzes\n\n### A Textquiz\n\nWhat did the **fish** say when he hit a **concrete wall**?\n\n    [[dam]]\n\n### Multiple Choice\n\nJust add as many points as you wish:\n\n    [[X]] Only the **X** marks the correct point.\n    [[ ]] Empty ones are wrong.\n    [[X]] ...\n\n### Single Choice\n\nJust add as many points as you wish:\n\n    [( )] ...\n    [(X)] <-- Only the **X** is allowed.\n    [( )] ...\n\n## Executable Code\n\nA drawing example, for demonstrating that any JavaScript library can be used, also for drawing.\n\n```javascript\n// Initialize a Line chart in the container with the ID chart1\nnew Chartist.Line(\'#chart1\', {\n  labels: [1, 2, 3, 4],\n  series: [[100, 120, 180, 200]]\n});\n\n// Initialize a Line chart in the container with the ID chart2\nnew Chartist.Bar(\'#chart2\', {\n  labels: [1, 2, 3, 4],\n  series: [[5, 2, 8, 3]]\n});\n```\n<script>@input</script>\n\n<div class="ct-chart ct-golden-section" id="chart1"></div>\n<div class="ct-chart ct-golden-section" id="chart2"></div>\n\n\n### Projects\n\nYou can make your code executable and define projects:\n\n``` js     -EvalScript.js\nlet who = data.first_name + " " + data.last_name;\n\nif(data.online) {\n  who + " is online"; }\nelse {\n  who + " is NOT online"; }\n```\n``` json    +Data.json\n{\n  "first_name" :  "Sammy",\n  "last_name"  :  "Shark",\n  "online"     :  true\n}\n```\n<script>\n  // insert the JSON dataset into the local variable data\n  let data = @input(1);\n\n  // eval the script that uses this dataset\n  eval(`@input(0)`);\n</script>\n\n## More\n\nFind out what you can even do more with quizzes:\n\nhttps://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md',
    label: 'lia-init',
  },
  {
    documentation:
      "Inicializa tu archivo con un curso de ejemplo completo, con cabecera y cuerpo, que puedes usar como punto de partida para tu curso.\n\nEjemplo:\n\n    <!--\n    author:   Tu Nombre\n\n    email:    tu@email.org\n\n    version:  0.0.1\n\n    language: es\n\n    narrator: Spanish Female\n\n    ...\n    -->\n\n    # Título principal del curso\n\n    Este es el esqueleto inicial de tu **curso**...",
    insertText:
      '<!--\nauthor:   Your Name\n\nemail:    your.email@example.org\n\nversion:  0.0.1\n\nlanguage: en\n\nnarrator: US English Female\n\ncomment:  A minimal LiaScript template for quick experimentation.\n\nlink:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css\n\nscript:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js\n-->\n\n# Course Title\n\n> Replace this with your course description.\n\n## Text Formatting\n\n**Bold**, *italic*, ***bold+italic***\n\n~Strikethrough~, ~~underline~~, ^superscript^\n\n`inline code`\n\n## Headings\n\n```markdown\n# H1 - Course Title\n## H2 - Section (new slide)\n### H3 - Subsection\n#### H4 - Sub-subsection\n```\n\n## Lists\n\n**Unordered**\n\n- Item 1\n- Item 2\n  - Nested item\n  - Another nested\n\n**Ordered**\n\n1. First step\n2. Second step\n   1. Sub-step A\n   2. Sub-step B\n\n**Tasks**\n\n- [ ] Todo\n- [x] Done\n\n## Links\n\n[Link text](https://liascript.github.io)\n\n[Section link](#text-formatting)\n\n## Blockquotes\n\n> Simple blockquote\n>\n> > Nested blockquotes\n> > are possible too...\n\n> Quote with citation\n>\n> -- Author Name\n\n## Math\n\nInline: $a^2 + b^2 = c^2$\n\nDisplay:\n\n$$\n\\int_0^1 x^2 \\, dx = \\frac{1}{3}\n$$\n\nMulti-line:\n\n$$\n\\begin{aligned}\nf(x) &= x^2 + 2x + 1 \\\\\n     &= (x + 1)^2\n\\end{aligned}\n$$\n\nMatrix:\n\n$$\n\\begin{pmatrix}\n1 & 0 \\\\\n0 & 1\n\\end{pmatrix}\n$$\n\nChemistry: $\\ce{H2O}$ or $\\ce{CO2 + C -> 2 CO}$\n\n## Tables\n\n| Left | Center | Right |\n| :--- | :----: | ----: |\n| A    |   B    |     C |\n| D    |   E    |     F |\n| H    |   I    |     J |\n\n## Multimedia\n\n**Images**\n\n![Alt text](https://picsum.photos/300/200)\n\n**Audio**\n\n?[Audio](https://bigsoundbank.com/UPLOAD/mp3/1068.mp3)\n\n**Video**\n\n!?[YouTube Video](https://www.youtube.com/watch?v=rbqm6MN0We4)\n\n### Galleries\n\n![Image 1](https://picsum.photos/200/150?1) ![Image 2](https://picsum.photos/200/150?2) ![Image 3](https://picsum.photos/200/150?3)\n\n### QR Code\n\n[qr-code](https://liascript.github.io "Scan me")\n\n### oEmbed\n\n??[SketchFab 3D Model](https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042)\n\n## Animations & Text-to-Speech\n\n     {{0}}\nStep 0: Appears first\n\n     {{1}}\nStep 1: Appears second\n\n     {{2-3}}\nSteps 2-3: Visible from step 2, disappears at step 4\n\n     {{4}}\nStep 4: Appears last\n\n### With narration\n\n     --{{0}}--\nThis text is spoken when step 0 appears.\n\n     {{0}}\nFirst content\n\n     --{{1 UK English Female}}--\nThis uses a different voice for step 1.\n\n     {{1}}\nSecond content\n\n     --{{2 French Female}}--\nCeci est parlé en français.\n\n     {{2}}\n!?[One document multiple representations](https://www.youtube.com/watch?v=saxAFw7XpjI)\n\n**Inline animations:**\n\nAlways visible, but {1}{this appears on step 1}, and {2}{this on step 2}.\n\n## Styling\n\n<!-- style="color: red; font-weight: bold;" -->\nStyled the entire block.\n\nStyle only One<!-- style="color: blue;" --> element\n\n## Diagrams\n\n### ASCII 1\n\n                                  Diagram Title\n    1.5 |                                  DOTS\n        |                 ***\n      y |               *     *\n      - |         r r r*r r r r*r r r\n      a |             *         *\n      x |            *           *\n      i |     B B B * B B B B B B * B B B\n      s |         *                 *\n        | *  * *                       * *  *\n   -1.0 +------------------------------------\n        0            x-axis                 1\n\n\n### ASCII 2\n\n```ascii\n .---------------.\n(      Start      )\n \'-------+-------\'\n         |\n         v\n    +----+----+      .----------.\n    |  Input  |----->| Process  |\n    +---------+      \'-----+----\'\n                          /\n                         /\n                        /\n        +--------------+---+\n        |                  |\n        v                  v\n   +----+----+       +-----+-----+\n   | Success |       |   Error   |\n   +---------+       +-----------+\n```\n\n### Data Visualization\n\n__Line Charts__\n\n| Year | Sales | Profit |\n| :--: | :---: | :----: |\n| 2018 | 1000  |  500   |\n| 2019 | 1500  |  700   |\n| 2020 | 1200  |  400   |\n| 2022 | 1800  |  890   |\n| 2023 | 2000  |  999   |\n\n__Bar Charts__\n\n| Animal          | Weight (kg) | Lifespan (years) | Mitogen |\n| --------------- | -----------:| ----------------:| -------:|\n| Mouse           |       0.028 |                2 |      95 |\n| Flying squirrel |       0.085 |               15 |      50 |\n| Brown bat       |       0.020 |               30 |      10 |\n| Sheep           |          90 |               12 |      95 |\n| Human           |          68 |               70 |      10 |\n\n__Pie Charts__\n\n| Music Style 1994 | Classic | Country | Reggae | Hip-Hop | Hard Rock | Samba |\n|:---------------- | -------:| -------:| ------:| -------:| ---------:| -----:|\n| Student Rating   |      50 |      50 |    100 |     200 |       350 |   250 |\n\n__Radar Charts__\n\n| Animal          | Weight (kg) | Lifespan (years) | Mitogen |\n| --------------- | -----------:| ----------------:| -------:|\n| Mouse           |       0.028 |                2 |      95 |\n| Flying squirrel |       0.085 |               15 |      50 |\n| Brown bat       |       0.020 |               30 |      10 |\n\n## Quizzes\n\n### Text Input\n\nWhat is 2 + 2?\n\n    [[4]]\n\n### Multiple Choice\n\n    [[X]] Correct\n    [[ ]] Wrong\n    [[X]] Also correct\n\n### Single Choice\n\n    [(X)] Correct\n    [( )] Wrong\n    [( )] Also wrong\n\n### Selection\n\n    [[ Option A | (Option B) | Option C ]]\n\n### With Hints\n\n    [[42]]\n    [[?]] First hint\n    [[?]] Second hint\n\n### With Solution\n\n    [[answer]]\n****************************************\n\nExplanation of the solution goes here.\n\n****************************************\n\n### Gap Text\n\nFill in the [[ blank ]] words in this [[ sentence ]].\n\nYou can also use selection: [[(one)|two|three]] and [[(another)|choice]].\n\n## Executable Code\n\n```javascript\n// Your code here\nlet x = 5;\nlet y = 10;\nconsole.log("Sum:", x + y);\n\nx + y  // Return value\n```\n<script>@input</script>\n\n### Multi-File Code\n\n``` js     -script.js\nlet result = data.value * 2;\n"Result: " + result\n```\n``` json    +data.json\n{\n  "value": 21\n}\n```\n<script>\n  let data = @input(1);\n  eval(`@input(0)`);\n</script>\n\n### Charts with Chartist\n\n```javascript\nnew Chartist.Line(\'#chart1\', {\n  labels: [1, 2, 3, 4, 5],\n  series: [[12, 9, 7, 8, 5]]\n});\n```\n<script>@input</script>\n\n<div class="ct-chart ct-golden-section" id="chart1"></div>\n\n### JavaScript\n\nThe $\\sqrt{2} = $ <script>Math.pow(2, 0.5)</script>\n\n#### Weather API Example\n\nlongitude: <script default="13.33125" input="range" output="longitude">@input</script>\n\nlatitude: <script default="50.92558" input="range" output="latitude">@input</script>\n\n<script run-once="true" style="display: block">\n  fetch("https://api.open-meteo.com/v1/forecast?latitude=@input(`latitude`)&longitude=@input(`longitude`)&hourly=temperature_2m")\n    .then(response => response.json())\n    .then(data => {\n      let table = "<!-- data-show data-type=\'line\' data-title=\'Open-Meteo Weather API\' -->\\n"\n\n      table += "| Time | Temperature |\\n"\n      table += "| ---- | ----------- |\\n"\n\n      for (let i=0; i < data.hourly.time.length; i++) {\n        table += "| " + data.hourly.time[i] + " | " + data.hourly.temperature_2m[i] + " |\\n"\n      }\n      send.lia("LIASCRIPT: "+table) }\n    )\n    .catch(e => {\n      send.lia("ups, something went wrong")\n    })\n  "waiting for the weather"\n</script>\n\n## Surveys\n\nRate this course:\n\n    [(1)] ⭐\n    [(2)] ⭐⭐\n    [(3)] ⭐⭐⭐\n    [(4)] ⭐⭐⭐⭐\n    [(5)] ⭐⭐⭐⭐⭐\n\nFeedback:\n\n    [[___]]\n\n## Footnotes\n\nText with footnote[^1]\n\n[^1]: Footnote content\n\n## Publishing\n\n1. Push to GitHub\n2. Get raw URL: `https://raw.githubusercontent.com/user/repo/main/README.md`\n3. Share: `https://liascript.github.io/course/?YOUR_RAW_URL`\n\n\n**Build your course from here! 🚀**\n',
    label: 'lia-template',
  },
  {
    documentation:
      "Inicializa tu archivo con un curso de ejemplo completo, con cabecera y cuerpo, que puedes usar como punto de partida para tu curso.\n\nEjemplo:\n\n    <!--\n    author:   Tu Nombre\n\n    email:    tu@email.org\n\n    version:  0.0.1\n\n    language: es\n\n    narrator: Spanish Female\n\n    ...\n    -->\n\n    # Título principal del curso\n\n    Este es el esqueleto inicial de tu **curso**...",
    insertText:
      '<!--\nauthor:   Your Name Here\n          (Visible in course info. Separate multiple authors with semicolons)\n\nemail:    your.email@example.org\n          (Contact information shown to learners)\n\nversion:  0.0.1\n\nlanguage: en\n\nnarrator: US English Female\n\ncomment:  Write a short, compelling description of your course here.\n          This appears on the course card and helps learners decide if this\n          course is right for them. Keep it concise but informative.\n\nlink:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css\n\nscript:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js\n\n-->\n\n# Your Course Title Here\n\n> 🎯 **Quick Start Guide**\n>\n> 1. **Read through this template** - Each section demonstrates a LiaScript feature\n> 2. **Edit the examples** - Replace sample content with your own\n> 3. **Delete what you don\'t need** - Remove sections that aren\'t relevant\n> 4. **Publish on GitHub** - Push to a repository and share via LiaScript.github.io\n> 5. **Type `lia`** in your IDE for instant syntax help and shortcuts\n\n<!--- \n📚 TEMPLATE TABLE OF CONTENTS\n============================\nThis template is organized to teach you LiaScript by example:\n\nSection 1: Markdown Basics - Text, formatting, headings, lists, links, etc.\nSection 2: Tables - Creating and formatting tables\nSection 3: Formulas & Math - LaTeX math formulas and chemistry\nSection 4: Multimedia - Images, audio, video, galleries, QR codes\nSection 5: Animations & Effects - Step-by-step reveals and text-to-speech\nSection 6: Styling & Customization - CSS classes and inline styles\nSection 7: ASCII Art & Diagrams - Creating diagrams with ASCII art\nSection 8: Data Visualization - Tables as charts (line, bar, pie, radar)\nSection 9: Interactive Quizzes - Text, multiple choice, single choice, etc.\nSection 10: Executable Code - Making code interactive and runnable\nSection 11: Advanced Features - Macros, tasks, surveys\nSection 12: Publishing Your Course - GitHub, LMS, and sharing options\n\n💡 Tip: You can collapse all sections in your editor for a better overview!\n--->\n\n## 🚀 Welcome to LiaScript!\n\nThis is your **interactive course template** - a fully-functional starting point that teaches you LiaScript by example.\n\n**What is LiaScript?**\n\nLiaScript is a Markdown dialect that transforms static text into interactive, educational experiences. With LiaScript, you can create:\n\n- 📊 **Interactive quizzes** that provide instant feedback\n- 🎬 **Animated presentations** with step-by-step reveals\n- 💻 **Executable code** that runs directly in the browser\n- 🗣️ **Text-to-speech narration** for accessibility\n- 📈 **Data visualizations** generated from simple tables\n- 🎨 **Rich multimedia** content with images, audio, and video\n\n**How to use this template:**\n\nEach section below demonstrates a different LiaScript feature with working examples. The code shows you **how it\'s written**, and the result shows you **how it looks**. Simply:\n\n1. Read through the examples\n2. Modify them for your needs\n3. Delete sections you don\'t want\n4. Add your own content\n\n**Publishing Your Course:**\n\n1. Save this file in a **GitHub repository**\n2. Share using: `https://liascript.github.io/course/?YOUR_REPO_URL/README.md`\n3. Example: `https://liascript.github.io/course/?https://raw.githubusercontent.com/yourusername/yourcourse/main/README.md`\n\n**Need Help?**\n\n- 📖 Full documentation: [LiaScript Docs](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md)\n- 💬 Community chat: [Gitter](https://gitter.im/LiaScript/community)\n- 🎓 Example courses: [LiaBooks](https://github.com/LiaBooks)\n- 🧩 Templates & extensions: [LiaTemplates](https://github.com/LiaTemplates)\n\nLet\'s start creating your course! 🎓\n\n---\n\n## 📝 Section 1: Markdown Basics\n\n> **What you\'ll learn:** How to structure and format text using standard Markdown syntax.\n\nLiaScript uses standard [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) syntax, which means your courses are readable as plain text and compatible with other Markdown tools.\n\n### 1.1 Writing Text & Structure\n\nClear, well-structured text is the foundation of good teaching.\n\n**Writing Tips:**\n- Write short, focused paragraphs (one idea per paragraph)\n- Use headings to create hierarchy and navigation\n- Break up long text with lists, images, and examples\n- Leave blank lines between paragraphs\n\n\n### 1.2 Headings & Navigation\n\nHeadings create your course structure. Each `##` heading becomes a slide/section in LiaScript.\n\n**Syntax:**\n\n```markdown\n# Course Title (appears in browser tab and course info)\n## Section Title (creates a new slide/section)\n### Subsection (creates hierarchy within a section)\n#### Sub-subsection (deeper nesting)\n```\n\n> 💡 **Tips:**\n> - Use `#` (H1) only for your main course title\n> - Use `##` (H2) for each major section (these become slides)\n> - Use `###` and `####` for subsections within slides\n> - **Don\'t skip heading levels** (e.g., don\'t go from `##` to `####`)\n> - Keep headings concise and descriptive\n\n### 1.3 Paragraphs\n\n**How to write paragraphs:**\n\nThis is a paragraph. It contains related sentences about one topic.\n\nThis is a new paragraph. Leave a blank line between paragraphs to separate them.\n\nYou can add a line break without starting a new paragraph  \nby ending a line with two spaces.\n\n> 💡 **Tip:** One paragraph = one idea. If you\'re switching topics, start a new paragraph.\n\n### 1.4 Text Formatting\n\n**Basic formatting:**\n\n*Italic text* – use `*single asterisks*` or `_underscores_`\n\n**Bold text** – use `**double asterisks**` or `__double underscores__`\n\n***Bold and italic*** – use `***triple asterisks***`\n\n**LiaScript extensions:**\n\n~Strikethrough~ – use `~one tilde~`\n\n~~Underline~~ – use `~~two tildes~~`\n\n~~~Underline and strikethrough~~~ – use `~~~three tildes~~~`\n\n^Superscript^ – use `^carets^` (great for footnotes^[1]^)\n\n`Inline code` – use `` `backticks` ``\n\n> 💡 **Tip:** Combine formatting: **bold with *nested italic* inside** or ***all at once***\n\n## 🧮 Section 3: Formulas & Math\n\n> **What you\'ll learn:** How to write mathematical formulas using LaTeX syntax.\n\nLiaScript uses [KaTeX](https://katex.org/) for rendering mathematical formulas.\n\n### 2.1 Inline Formulas\n\nUse single dollar signs `$...$` for inline math:\n\nThe Pythagorean theorem states that $a^2 + b^2 = c^2$ for right triangles.\n\nEinstein\'s famous equation: $E = mc^2$\n\nQuadratic formula: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$\n\n### 2.2 Block Formulas\n\nUse double dollar signs `$$...$$` for display (centered) math:\n\n$$\n\\int_0^1 x^2 \\, dx = \\frac{1}{3}\n$$\n\n$$\n\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}\n$$\n\n### 2.3 Multi-line Formulas\n\nUse `aligned` environment for multi-line equations:\n\n$$\n\\begin{aligned}\nf(x) &= x^2 + 2x + 1 \\\\\n     &= (x + 1)^2 \\\\\n     &= (x + 1)(x + 1)\n\\end{aligned}\n$$\n\n### 2.4 Matrices\n\nIdentity matrix:\n\n$$\nI = \\begin{pmatrix}\n1 & 0 & 0 \\\\\n0 & 1 & 0 \\\\\n0 & 0 & 1\n\\end{pmatrix}\n$$\n\nDeterminant:\n\n$$\n\\begin{vmatrix}\na & b \\\\\nc & d\n\\end{vmatrix} = ad - bc\n$$\n\n### 2.5 Common Symbols\n\n**Greek letters:** $\\alpha, \\beta, \\gamma, \\Delta, \\theta, \\pi, \\sigma, \\omega$\n\n**Operators:** $\\sum, \\prod, \\int, \\oint, \\nabla, \\partial$\n\n**Relations:** $\\leq, \\geq, \\neq, \\approx, \\equiv, \\sim$\n\n**Sets:** $\\in, \\notin, \\subset, \\subseteq, \\cup, \\cap, \\emptyset$\n\n**Arrows:** $\\rightarrow, \\Rightarrow, \\leftrightarrow, \\Leftrightarrow$\n\n> 💡 **Resources:**\n> - All KaTeX functions: [katex.org/docs/supported.html](https://katex.org/docs/supported.html)\n> - Symbol finder: [detexify.kirelabs.org](http://detexify.kirelabs.org/classify.html)\n\n### 2.6 Chemistry (mhchem)\n\nChemical formulas and equations:\n\n$\\ce{CO2 + C -> 2 CO}$\n\n$\\ce{H2O}$ → $\\ce{H+ + OH-}$\n\n$$\\ce{Zn^2+ <=>[ + 2OH-][ + 2H+] $\\underset{\\text{amphoteric hydroxide}}{\\ce{Zn(OH)2 v}}$ <=>[ + 2OH-][ + 2H+] $\\underset{\\text{tetrahydroxozincate}}{\\ce{[Zn(OH)4]^2-}}$}$$\n\n### 1.5 Lists\n\nLiaScript supports **ordered** and **unordered** lists.\n\n**Unordered lists** (bullets):\n\n- First item\n- Second item\n  - Nested item (indent with 2 spaces)\n  - Another nested item\n- Third item\n\n**Ordered lists** (numbers):\n\n1. First step\n2. Second step\n   1. Sub-step A\n   2. Sub-step B\n3. Third step\n\n**Mixed lists:**\n\n1. Ordered item\n   - Unordered sub-item\n   - Another sub-item\n2. Next ordered item\n\n**Task lists:**\n\n- [x] Completed task\n- [ ] Incomplete task\n- [ ] Another task to do\n\n> 💡 **Tip:** Use ordered lists for **steps/processes** and unordered lists for **features/collections**.\n\n\n### 1.6 Links & References\n\n**Simple links:**\n\nAuto-link: https://liascript.github.io\n\nNamed link: [LiaScript website](https://liascript.github.io)\n\nLink with title: [LiaScript](https://liascript.github.io "Hover to see this title")\n\n**Internal navigation:**\n\nLink to section: [Jump to Quizzes](#section-5-interactive-quizzes)\n\nLink to slide number: [Go to slide 3](#3)\n\n**Email and telephone:**\n\nEmail: [contact@example.com](mailto:contact@example.com)\n\nPhone: [+1-234-567-8900](tel:+1-234-567-8900)\n\n### 1.7 Blockquotes\n\nBlockquotes highlight important information or citations.\n\n> This is a blockquote.\n> It can span multiple lines.\n>\n> And have multiple paragraphs.\n\n**Nested blockquotes:**\n\n> Outer quote\n>\n> > Nested quote\n> >\n> > > Deeper nesting\n\n**Citations (LiaScript special):**\n\n> "Education is the most powerful weapon which you can use to change the world."\n>\n> -- Nelson Mandela\n\n### 1.8 Horizontal Rules\n\nSeparate sections with horizontal rules.\n\n---\n\nAnother section below.\n\n(Use three or more dashes)\n\n### 1.9 Escaping Characters\n\nEscape special characters with a backslash `\\`:\n\n\\* Not a bullet point  \n\\# Not a heading  \n\\[Not a link]()\n\n```markdown\n\\* \\# \\[ \\] \\( \\) \\~ \\` \\$ \\@\n```\n\n### 1.10 Footnotes\n\nAdd footnotes to your text^[This is a footnote]:\n\nLiaScript supports footnotes[^1] with references at the bottom of sections[^note].\n\n[^1]: This is a simple footnote.\n\n[^note]: This is a named footnote with more detailed information.\n\n## 🗂️ Section 2: Tables\n\n> **What you\'ll learn:** How to create and format tables in LiaScript.\n\nTables organize information in rows and columns.\n\n### 2.1 Basic Tables\n\n**Simple table:**\n\n| Header 1  | Header 2  | Header 3  |\n|---------- |---------- |---------- |\n| Cell A1   | Cell B1   | Cell C1   |\n| Cell A2   | Cell B2   | Cell C2   |\n| Cell A3   | Cell B3   | Cell C3   |\n\n### 2.2 Table Alignment\n\nControl column alignment with colons:\n\n- `:---` = Left aligned (default)\n- `:---:` = Center aligned\n- `---:` = Right aligned\n\n| Left      | Center     | Right     |\n|:--------- |:----------:| ---------:|\n| A         | B          | C         |\n| Short     | Medium     | Long text |\n| 1         | 2          | 3         |\n\n### 2.3 Complex Table Content\n\nTables can contain formatted text:\n\n| Feature          | Markdown                  | LiaScript               |\n|:---------------- |:------------------------- |:----------------------- |\n| **Bold**         | Yes                       | Yes                     |\n| *Italic*         | Yes                       | Yes                     |\n| `Code`           | Yes                       | Yes                     |\n| Links            | [Yes](https://link.com)   | [Yes](https://link.com) |\n| Math             | Limited                   | Full $a^2 + b^2 = c^2$  |\n\n> 💡 **Tip:** Keep tables simple and readable. For complex data, consider charts (Section 3).\n\n## 🖼️ Section 4: Multimedia\n\n> **What you\'ll learn:** How to embed images, audio, video, and external content.\n\n### 3.1 Images\n\n**Basic image:**\n\n![LiaScript Logo](https://liascript.github.io/img/bg-showcase-1.jpg "This is the title")\n\n**Relative paths:**\n\n```markdown\n![Local image](./images/my-image.png)\n![Image in subfolder](../assets/diagram.svg)\n```\n\n**Image with attribution:**\n\n![Global Open Educational Resources logo](https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Global_Open_Educational_Resources_Logo.svg/400px-Global_Open_Educational_Resources_Logo.svg.png "© Jonathasmello, CC BY 3.0, via Wikimedia Commons")\n\n### 3.2 Audio\n\nUse `?[...]` for audio files:\n\n?[Bird sounds](https://bigsoundbank.com/UPLOAD/mp3/1068.mp3)\n\n**Supported formats:** MP3, OGG, WAV\n\n### 3.3 Video\n\nUse `!?[...]` for videos:\n\n!?[What is LiaScript?](https://www.youtube.com/watch?v=bICfKRyKTwE)\n\n**Supported platforms:**\n- YouTube\n- Vimeo  \n- PeerTube\n- DailyMotion\n- TeacherTube\n- Local video files (.mp4, .webm, .ogv)\n\n**Time controls:**\n\n```markdown\n!?[Video](video.mp4#t=10,60)\n<!-- Plays from 10s to 60s -->\n```\n\n### 3.4 Image Galleries\n\nMultiple images in one paragraph create a gallery:\n\n![Image 1](https://picsum.photos/200/150?1) ![Image 2](https://picsum.photos/200/150?2) ![Image 3](https://picsum.photos/200/150?3)\n![Image 4](https://picsum.photos/200/150?4) ![Image 5](https://picsum.photos/200/150?5)\n\n### 3.5 QR Codes\n\nCreate QR codes automatically (links to content):\n\n[qr-code](https://LiaScript.github.io "Scan to visit LiaScript")\n\n\n### 3.6 Embed External Content\n\nUse `??[...]` to embed external content via oEmbed or iframe:\n\n??[SketchFab 3D Model](https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042)\n\n> 💡 **Tip:** For local files, use relative paths. For external files, use full URLs.\n\n## 🎬 Section 4: Animations & Effects\n\n> **What you\'ll learn:** How to create step-by-step reveals and text-to-speech narration.\n\nLiaScript brings your content to life with animations and spoken narration.\n\n### 4.1 Step-by-Step Animations\n\nUse `{{0}}`, `{{1-2}}`, `{{2}}`, etc. to reveal content progressively:\n\n     {{0}}\nThis appears first when you load the slide.\n\n     {{1-2}}\nThis appears when you click the arrow or press the right key.\nAnd stays visible until you click again.\n\n     {{2}}\nThis appears on the next click.\n\n     {{3}}\nAnd this appears last.\n\n\n> 💡 **Tip:** Use `{{0}}` for initial state, then increment for each step.\n\n### 4.2 Text-to-Speech (TTS)\n\nAdd spoken narration to your slides using `--{{0}}--` comments:\n\n     --{{0}}--\nThis text will be read aloud when the slide loads.\n\n     --{{1}}--\nThis will be read when the first animation step appears.\n\n     --{{2}}--\nAnd this on the second step.\n\n### 4.3 Changing Voices\n\nYou can change the voice for specific comments:\n\n     --{{0 UK English Female}}--\nThis is spoken in a British female voice.\n\n     --{{1 Russian Female}}--\nПервоначально создан в 2004 году Джоном Грубером.\n\n     --{{2 Spanish Male}}--\nTambién puede utilizar diferentes idiomas.\n\n**Available voices:** Type "voice" in LiaScript to see all 40+ available voices.\n\n\n### 4.4 Hidden Comments (No Playback Button)\n\nUse HTML comments to hide the play button:\n\n<!-- --{{0}}--\nThis will be spoken but won\'t show a playback button.\n-->\n\n     {{0}}\nFirst visible content.\n\n<!-- --{{1}}--\nNarration for second step, hidden.\n-->\n\n     {{1}}\nSecond visible content.\n\n### 4.5 Combining Animations with Other Elements\n\n**With lists:**\n\n     {{1}}\n- First item appears\n\n     {{2}}\n- Second item appears\n\n     {{3}}\n- Third item appears\n\n**With multimedia:**\n\n     {{1}}\n?[Audio plays on step 1](https://bigsoundbank.com/UPLOAD/mp3/1068.mp3)\n\n     {{2-3}}\n!?[Video appears on step 2, disappears on step 4](https://www.youtube.com/watch?v=bICfKRyKTwE)\n\n### 4.6 Inline Animations\n\nYou can also animate parts of a paragraph:\n\nThis text is always visible, but {1}{this appears on step 1}, and {2}{this on step 2}.\n\n### 4.7 Playback Button for Text Blocks\n\nAdd `{{|>}}` to create a playback button for any text block:\n\n                            {{English Male |>}}\n> This entire blockquote can be read aloud by clicking the play button.\n> Perfect for read-along features or accessibility.\n\n## 🎨 Section 6: Styling & Customization\n\n> **What you\'ll learn:** How to add custom styles and classes to your content.\n\nLiaScript allows you to customize the appearance of elements using HTML attributes.\n\n### 5.1 Adding CSS Classes\n\nAdd classes using HTML comments after elements:\n\n<!-- class="animated rollIn" style="animation-delay: 2s; color: purple" -->\nThis paragraph has custom animation and color applied via classes and inline styles.\n\n### 5.2 Inline Styling\n\nApply inline CSS to specific elements:\n\nThis word is ~red~<!-- style="color: red;" --> and this is **big**<!-- style="font-size: 2em;" -->.\n\n**For blocks:**\n\n<!-- style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;" -->\nThis entire paragraph has a custom background, padding, and rounded corners.\n\n### 5.3 Styling Tables\n\n<!-- style="color: red; font-weight: bold;" -->\n| Red Header | Also Red |\n|----------- |--------- |\n| Normal     | Cells    |\n\n### 5.4 Animation Classes\n\nUse [Animate.css](https://animate.style/) classes (if included in header):\n\n<!-- class="animated bounce" -->\nThis text bounces!\n\n<!-- class="animated fadeIn" -->\nThis fades in.\n\n<!-- class="animated infinite pulse" -->\nThis pulses forever.\n\n**Common animation classes:**\n- `bounce`, `flash`, `pulse`, `shake`, `swing`\n- `fadeIn`, `fadeOut`, `slideInUp`, `slideInDown`\n- `zoomIn`, `zoomOut`, `rotateIn`, `rotateOut`\n\nAdd `infinite` for continuous animation: `animated infinite bounce`\n\n> ⚠️ **Warning:** Use animations sparingly! Too many can distract learners.\n\n## 📊 Section 7: ASCII Art & Diagrams\n\n> **What you\'ll learn:** How to create diagrams using ASCII art.\n\nLiaScript can convert ASCII art into beautiful SVG diagrams.\n\n                                    Multiline\n    1.9 |    DOTS\n        |                 ***\n      y |               *     *\n      - | r r r r r r r*r r r r*r r r r r r r\n      a |             *         *\n      x |            *           *\n      i | B B B B B * B B B B B B * B B B B B\n      s |         *                 *\n        | *  * *                       * *  *\n     -1 +------------------------------------\n        0              x-axis               1\n\n### Next to diagrams\n\n```ascii\n+-----------------------------------------+\n|                                         |\n|                             .--->  G    |\n|    A       B     D   F     /            |\n|    #-------*-----*---*----o----->  H    |\n|             \\            ^ \\            |\n|              v          /   \'--->  I    |\n|               C --> E -\'                |\n|                                         |\n+-----------------------------------------+\n```\n\n**Tips for ASCII art:**\n- Use at least 10 backticks or `ascii` as language identifier\n- Or indent with 4 spaces (more compatible with other Markdown viewers)\n- Characters: `+`, `-`, `|`, `/`, `\\`, `*`, `#`, `o`, `>`, `<`, `^`, `v`\n- Arrows: `->`, `<-`, `=>`, `<=`, `-->`, `<--`\n\n## 📈 Section 8: Data Visualization\n\n> **What you\'ll learn:** How to turn tables into interactive charts.\n\nLiaScript automatically detects numeric data in tables and offers chart visualizations!\n\n### 8.1 Line Charts\n\nTables with year/time data automatically become line charts:\n\n| Year | Users |\n| ---- | ----- |\n| 2020 | 50    |\n| 2021 | 120   |\n| 2022 | 280   |\n| 2023 | 540   |\n| 2024 | 980   |\n\n**Click the chart button** above the table to toggle between table and chart views!\n\n### 8.2 Bar Charts\n\n| Animal          | Weight (kg) | Lifespan (years) | Mitogen |\n| --------------- | -----------:| ----------------:| -------:|\n| Mouse           |       0.028 |                2 |      95 |\n| Flying squirrel |       0.085 |               15 |      50 |\n| Brown bat       |       0.020 |               30 |      10 |\n| Sheep           |          90 |               12 |      95 |\n| Human           |          68 |               70 |      10 |\n\n### 8.3 Pie Charts\n\n| Music Style 1994 | Classic | Country | Reggae | Hip-Hop | Hard Rock | Samba |\n|:---------------- | -------:| -------:| ------:| -------:| ---------:| -----:|\n| Student Rating   |      50 |      50 |    100 |     200 |       350 |   250 |\n\n### 8.4 Radar Charts\n\n| Animal          | Weight (kg) | Lifespan (years) | Mitogen |\n| --------------- | -----------:| ----------------:| -------:|\n| Mouse           |       0.028 |                2 |      95 |\n| Flying squirrel |       0.085 |               15 |      50 |\n| Brown bat       |       0.020 |               30 |      10 |\n\n> 💡 **Tip:** LiaScript auto-detects the best chart type based on your data structure!\n\n## ✅ Section 9: Interactive Quizzes\n\n> **What you\'ll learn:** How to create different types of interactive quizzes.\n\nQuizzes engage learners and provide instant feedback!\n\n### 9.1 Text Input Quiz\n\nWhat did the **fish** say when he hit a **concrete wall**?\n\n    [[dam]]\n\n### 9.2 Multiple Choice (Checkboxes)\n\nSelect all programming languages:\n\n    [[X]] JavaScript\n    [[ ]] HTML\n    [[X]] Python\n    [[ ]] CSS\n    [[X]] Java\n\n### 9.3 Single Choice (Radio Buttons)\n\nWhat is the capital of France?\n\n    [( )] London\n    [( )] Berlin\n    [(X)] Paris\n    [( )] Madrid\n\n### 9.4 Selection List\n\nWhat is the derivative of $f(x) = x^6$?\n\n    [[ $f\'(x) = 6$ | ($f\'(x) = 6x^5$) | $f\'(x) = 5x^6$ ]]\n\n**Syntax:**\n\n```markdown\n    [[ wrong | (correct) | wrong ]]\n```\n\n###\n\n### 9.5 Matrix Quiz (Multiple Questions)\n\nRate your experience with these tools:\n\n    [[Beginner] (Intermediate) [Advanced]]\n    [   ( )         (X)          ( )     ]  Git\n    [   (X)         ( )          ( )     ]  Docker\n    [   ( )         ( )          (X)     ]  JavaScript\n\n### 9.6 Adding Hints\n\nHelp learners with progressive hints:\n\nWhat is $37 + 15$?\n\n    [[52]]\n    [[?]] The answer is greater than 50\n    [[?]] It is less than 55\n    [[?]] It is an even number\n\n### 9.7 Adding Solutions\n\nProvide detailed explanations:\n\nWhat is $5 \\times 8$?\n\n    [[40]]\n    [[?]] Multiply 5 by 8\n****************************************\n\nThe correct answer is 40 because:\n\n$$5 \\times 8 = 40$$\n\nYou can think of it as:\n- 5 groups of 8, or\n- 8 groups of 5\n\nBoth equal 40!\n\n****************************************\n\n### 9.8 Gap Text (Cloze Test)\n\nFill in the blanks (combines multiple quiz types):\n\nThe film that I watched [[last]] night with [[my]] sister was very\n[[(exciting)| amusing | interesting | fantastic]]. It was all [[about]] a man\nwho [[(built)| created | made]] a spaceship.\n\n## 💻 Section 10: Executable Code\n\n> **What you\'ll learn:** How to make your code examples interactive and executable.\n\n### 10.1 Simple JavaScript Execution\n\nAdd `<script>@input</script>` after any code block to make it executable:\n\n```javascript\n// Calculate the sum of numbers 1 to 10\nlet sum = 0;\nfor(let i = 1; i <= 10; i++) {\n    sum += i;\n    console.log(`Adding ${i}, sum is now: ${sum}`);\n}\n\n// Return the final result\nsum;\n```\n<script>@input</script>\n\n**How it works:**\n- Click the ▶️ run button below the code\n- Edit the code and run again\n- Results show in the console below\n- The last statement becomes the return value\n\n### 10.2 Using External Libraries\n\nLibraries defined in the header (like Chartist) can be used directly:\n\n```javascript\n// Initialize a Line chart in the container with the ID chart1\nnew Chartist.Line(\'#chart1\', {\n  labels: [1, 2, 3, 4],\n  series: [[100, 120, 180, 200]]\n});\n\n// Initialize a Bar chart in the container with the ID chart2\nnew Chartist.Bar(\'#chart2\', {\n  labels: [1, 2, 3, 4],\n  series: [[5, 2, 8, 3]]\n});\n```\n<script>@input</script>\n\n<div class="ct-chart ct-golden-section" id="chart1"></div>\n<div class="ct-chart ct-golden-section" id="chart2"></div>\n\n### 10.3 Multi-File Projects\n\nCreate projects with multiple files using special syntax:\n\n**Syntax:** `language +MainFile.ext` or `language -Library.ext`\n\n``` js     -EvalScript.js\nlet who = data.first_name + " " + data.last_name;\n\nif(data.online) {\n  who + " is online"; \n} else {\n  who + " is NOT online"; \n}\n```\n``` json    +Data.json\n{\n  "first_name" :  "Sammy",\n  "last_name"  :  "Shark",\n  "online"     :  true\n}\n```\n<script>\n  // insert the JSON dataset into the local variable data\n  let data = @input(1);\n\n  // eval the script that uses this dataset\n  eval(`@input(0)`);\n</script>\n\n**File naming convention:**\n- `+` = Main file (shown first, often data or config)\n- `-` = Secondary file (the executable script)\n- Use `@input(0)` for first file, `@input(1)` for second, etc.\n\n### 10.4 Console Methods\n\n```javascript\nconsole.log("Regular message");\nconsole.warn("Warning message ⚠️");\nconsole.error("Error message ❌");\nconsole.debug("Debug info 🔍");\n\n// Last statement is always the return value\n"Done! Check the console above ☝️"\n```\n<script>@input</script>\n\n### 10.5 Async Code with send.lia\n\nFor asynchronous operations:\n\n```javascript\nsetTimeout(function(){\n  console.log("⏰ This runs after 2 seconds!");\n  send.lia("Async operation complete! ✅");\n}, 2000);\n\n// Tell LiaScript to wait for async code\n"LIA: wait"\n```\n<script>@input</script>\n\n> 💡 **Tips:**\n> - Use `<script>@input</script>` to make any code executable\n> - Console output appears below the code\n> - Learners can modify and re-run the code\n> - Great for teaching by experimentation!\n\n---\n\n## 📚 Section 11: Advanced Features\n\n> **What you\'ll learn:** Macros, tasks, surveys, and more advanced LiaScript features.\n\n### 10.1 Tasks & Checklists\n\nCreate interactive to-do lists that save progress:\n\n**Your Learning Checklist:**\n\n- [ ] Understand Markdown basics\n- [ ] Create my first quiz\n- [ ] Add multimedia content\n- [ ] Make code executable\n- [ ] Publish my course\n\n**Syntax:**\n\n```markdown\n- [ ] Unchecked task\n- [x] Completed task\n```\n\n### 10.2 Surveys\n\nCollect feedback from learners (data stays private):\n\n**Quick course feedback:**\n\nHow would you rate this template?\n\n    [(1)] ⭐\n    [(2)] ⭐⭐\n    [(3)] ⭐⭐⭐\n    [(4)] ⭐⭐⭐⭐\n    [(5)] ⭐⭐⭐⭐⭐\n\nWhat could be improved?\n\n    [[___]]\n\n**Syntax for text survey:**\n\n```markdown\n__Single-line:__\n\n[[___]]\n\n__Multi-line:__\n\n[[___ ___ ___]]\n```\n\n### 10.3 Simple Macros\n\nDefine reusable content in the header comment:\n\n```markdown\n<!--\n@author: Jane Doe\n\n@highlight: <b style="color: red;">@0</b>\n\n@important:\n> ⚠️ **Important:** @0\n@end\n-->\n\n# Course Title\n\nThis is @important(very crucial information)!\n\nAnd @highlight(this text is red and bold).\n```\n\n**How macros work:**\n- Define in header with `@name: content`\n- Use in course with `@name` or `@name(parameter)`\n- `@0`, `@1`,  etc. are parameters\n- Use `@end` for multi-line macros\n\n### 10.4 Importing from Other Courses\n\nReuse content from other LiaScript courses:\n\n```markdown\n<!--\nimport: https://raw.githubusercontent.com/liaTemplates/AVR8js/main/README.md\n-->\n\n# My Course\n\nNow I can use all macros from the imported course!\n```\n\n**Popular templates:** [github.com/LiaTemplates](https://github.com/LiaTemplates)\n\n---\n\n## 🚀 Section 12: Publishing Your Course\n\n> **What you\'ll learn:** How to share your LiaScript course with the world.\n\n### 11.1 GitHub Publishing (Recommended)\n\n**Steps:**\n\n1. **Create a GitHub repository** (public or private)\n2. **Add this README.md** to your repository\n3. **Get the raw file URL:**\n   - Go to your README.md on GitHub\n   - Click the "Raw" button\n   - Copy the URL (it starts with `https://raw.githubusercontent.com/`)\n\n4. **Share using LiaScript.github.io:**\n   ```\n   https://liascript.github.io/course/?YOUR_RAW_URL\n   ```\n\n**Example:**\n```\nhttps://liascript.github.io/course/?https://raw.githubusercontent.com/yourusername/yourcourse/main/README.md\n```\n\n### 11.2 Version Management\n\nUpdate the `version` in your header when you make changes:\n\n- **Patch** (0.0.1 → 0.0.2): Typos, small fixes\n- **Minor** (0.1.0 → 0.2.0): New content, added sections  \n- **Major** (1.0.0 → 2.0.0): Restructuring, quiz reordering\n\n> ⚠️ **Important:** Version 0.x.x = development (always reloads). Version 1.0.0+ = stable (caches for offline use).\n\n### 11.3 Making Your Course Discoverable\n\n**Add GitHub topics:**\n- `liascript` (general tag)\n- `liascript-course` (for complete courses)\n- `liascript-template` (for reusable templates)\n- Your subject area (e.g., `mathematics`, `programming`, `history`)\n\n**Optional header fields:**\n\n```markdown\n<!--\nlogo:   https://your-logo-url.png\nicon:   https://your-icon-url.png\ntags:   Programming, JavaScript, Tutorial\n-->\n```\n\n### 11.4 Other Publishing Options\n\n**DropBox / Cloud Storage:**\n- Upload your README.md\n- Make it publicly accessible\n- Get the public link\n- Use with LiaScript.github.io  \n\n**LMS Integration (SCORM):**\n- Use [LiaScript-Exporter](https://github.com/LiaScript/LiaScript-Exporter)\n- Generate SCORM packages\n- Upload to Moodle, Canvas, Blackboard, etc.\n\n**Static Website:**\n- Export using LiaScript-Exporter\n- Host on GitHub Pages, Netlify, Vercel, etc.\n- Fully offline-capable\n\n---\n\n## 🎓 Next Steps\n\nCongratulations! You now know the basics of LiaScript. Here\'s what to do next:\n\n### Edit This Template\n\n1. **Replace the course title** (line 47)\n2. **Update the metadata** in the header (author, email, etc.)\n3. **Delete sections** you don\'t need\n4. **Add your own content** following the examples\n5. **Test locally** using the [LiaScript DevServer](https://www.npmjs.com/package/@liascript/devserver) or [LiaEdit](https://liascript.github.io/LiveEditor/)\n6. **Publish on GitHub** and share!\n\n### Learn More\n\n**📖 Full Documentation:**\n[LiaScript Docs](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/main/README.md) - Complete guide to all features\n\n**💬 Community & Support:**\n- [Gitter Chat](https://gitter.im/LiaScript/community) - Ask questions and get help\n- [GitHub Discussions](https://github.com/LiaScript/LiaScript/discussions) - Feature requests and ideas\n- [YouTube Channel](https://www.youtube.com/channel/UCyiTe2GkW_u05HSdvUblGYg) - Tutorial videos\n\n**🎓 Example Courses:**\n- [LiaBooks](https://github.com/LiaBooks) - Interactive versions of open textbooks\n- [LiaScript Courses](https://github.com/topics/liascript-course) - Community courses\n\n**🧩 Templates & Extensions:**\n- [LiaTemplates](https://github.com/LiaTemplates) - Reusable components (AVR8js, ABCjs, Algebrite, etc.)\n- [Template Collection](https://github.com/topics/liascript-template) - Browse all templates\n\n**🛠️ Development Tools:**\n- [LiaEdit](https://liascript.github.io/LiveEditor/) - Browser-based editor with preview\n- [DevServer](https://www.npmjs.com/package/@liascript/devserver) - Local development server\n- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=LiaScript.liascript-preview) - Preview in VS Code\n- [Atom Package](https://atom.io/packages/liascript-preview) - Preview in Atom\n\n**📦 Export & Integration:**\n- [LiaScript Exporter](https://github.com/LiaScript/LiaScript-Exporter) - Create SCORM packages & standalone sites\n\n---\n\n## 📋 Quick Reference\n\n### Common Syntax At-a-Glance\n\n```markdown\n# Heading (New slide)              ## Subheading\n\n**bold** *italic* `code`           $math$ or $$display math$$\n\n![image](url)                      ?[audio](url)\n!?[video](url)                     [link](url)\n\n     {{1}}                                --{{1}}--\nAppear on step 1                   Spoken on step 1\n\n[[answer]]                         [[X]] [[ ]] Multiple choice\n[(X)] [( )] Single choice          [[opt1|(opt2)|opt3]] Selection\n\n| Header | Header |                - [ ] Task\n|------- |------- |                - [x] Done\n| Data   | Data   |\n\n    [[___ ___ ___]]\nMulti-line survey input\n\n``\\u200b`javascript\ncode here\n``\\u200b`\n<script>@input</script>\n```\n\n### Keyboard Shortcuts (in LiaScript)\n\n- `→` or `Space` - Next slide/animation step\n- `←` or `Backspace` - Previous slide/animation step\n- `Home` - First slide\n- `End` - Last slide\n- `Esc` - Toggle table of contents\n- `M` - Toggle mode (Presentation/Slides/Textbook)\n- `S` - Search\n- `?` - Help\n\n---\n\n## ❓ Troubleshooting\n\n**Course won\'t load?**\n- Make sure the GitHub URL is the **raw** file URL\n- Check that your GitHub repo is **public** (or you\'re logged in)\n- Verify the URL format: `https://liascript.github.io/course/?YOUR_RAW_URL`\n\n**Quizzes not working?**\n- Indent quizzes with 4 spaces\n- Check for correct syntax: `[[answer]]`, `[[X]]`, `[(X)]`\n- Make sure there\'s a blank line before the quiz\n\n**Code won\'t execute?**\n- Add `<script>@input</script>` after the code block\n- Check for JavaScript syntax errors in the console\n- For libraries, make sure they\'re loaded in the header\n\n**Text-to-speech not working?**\n- Try toggling between browser TTS and ResponsiveVoice in settings\n- Check your browser\'s text-to-speech support\n- Some voices may not be available on all systems\n\n**Animations not appearing?**\n- Make sure animation numbers start at 0 or 1\n- Check indentation (comments need proper spacing)\n- Verify syntax: `     {{0}}` or `--{{0}}--`\n\n---\n\n## 🏁 Ready to Create?\n\nYou\'re all set! This template is yours to customize. Remember:\n\n✅ Read through examples\n✅ Edit and experimentation\n✅ Delete what you don\'t need  \n✅ Add your unique content\n✅ Test your course\n✅ Publish and share!\n\n**Happy teaching with LiaScript! 🎓✨**\n\n---\n\n<!--- \n💡 TIP: Delete everything above this line except the header comment once you\'ve\n        created your own course content. Or keep sections as reference!\n\n👋 Having trouble? Ask in the community chat: https://gitter.im/LiaScript/community\n--->\n\n',
    label: 'lia-template-full',
  },
  {
    documentation:
      "Inicializa tu archivo con un curso de ejemplo completo en ALEMÁN, con cabecera y cuerpo, que puedes usar como punto de partida para tu curso.\n\nEjemplo:\n\n    <!--\n    author:   Your Name\n\n    email:    your@mail.org\n\n    version:  0.0.1\n\n    language: de\n\n    ...\n    -->\n\n    # Kurstitel\n\n    Este es el esqueleto inicial de tu **curso**...",
    insertText:
      '<!--\nauthor:   Dein Name\n\nemail:    deine.email@example.org\n\nversion:  0.0.1\n\nlanguage: de\n\nnarrator: Deutsch Female\n\ncomment:  Eine minimalistische LiaScript-Vorlage zum schnellen Experimentieren.\n\nlink:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css\n\nscript:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js\n-->\n\n# Kurstitel\n\n> Ersetze dies mit deiner Kursbeschreibung.\n\n## Textformatierung\n\n**Fett**, *kursiv*, ***fett+kursiv***\n\n~Durchgestrichen~, ~~unterstrichen~~, ^hochgestellt^\n\n`Inline-Code`\n\n## Überschriften\n\n```markdown\n# H1 - Kurstitel\n## H2 - Abschnitt (neue Folie)\n### H3 - Unterabschnitt\n#### H4 - Unter-Unterabschnitt\n```\n\n## Listen\n\n**Ungeordnet**\n\n- Punkt 1\n- Punkt 2\n  - Verschachtelter Punkt\n  - Noch ein verschachtelter\n\n**Geordnet**\n\n1. Erster Schritt\n2. Zweiter Schritt\n   1. Unterschritt A\n   2. Unterschritt B\n\n**Aufgaben**\n\n- [ ] Todo\n- [x] Erledigt\n\n## Links\n\n[Linktext](https://liascript.github.io)\n\n[Abschnittslink](#textformatierung)\n\n## Blockzitate\n\n> Einfaches Blockzitat\n>\n> > Verschachtelte Blockzitate\n> > sind auch möglich...\n\n> Zitat mit Quellenangabe\n>\n> -- Autor Name\n\n## Mathematik\n\nInline: $a^2 + b^2 = c^2$\n\nAnzeige:\n\n$$\n\\int_0^1 x^2 \\, dx = \\frac{1}{3}\n$$\n\nMehrzeilig:\n\n$$\n\\begin{aligned}\nf(x) &= x^2 + 2x + 1 \\\\\n     &= (x + 1)^2\n\\end{aligned}\n$$\n\nMatrix:\n\n$$\n\\begin{pmatrix}\n1 & 0 \\\\\n0 & 1\n\\end{pmatrix}\n$$\n\nChemie: $\\ce{H2O}$ oder $\\ce{CO2 + C -> 2 CO}$\n\n## Tabellen\n\n| Links | Zentriert | Rechts |\n| :---- | :-------: | -----: |\n| A     |     B     |      C |\n| D     |     E     |      F |\n| H     |     I     |      J |\n\n## Multimedia\n\n**Bilder**\n\n![Alt-Text](https://picsum.photos/300/200)\n\n**Audio**\n\n?[Audio](https://bigsoundbank.com/UPLOAD/mp3/1068.mp3)\n\n**Video**\n\n!?[YouTube-Video](https://www.youtube.com/watch?v=rbqm6MN0We4)\n\n### Galerien\n\n![Bild 1](https://picsum.photos/200/150?1) ![Bild 2](https://picsum.photos/200/150?2) ![Bild 3](https://picsum.photos/200/150?3)\n\n### QR-Code\n\n[qr-code](https://liascript.github.io "Scanne mich")\n\n### oEmbed\n\n??[SketchFab 3D-Modell](https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042)\n\n## Animationen & Text-zu-Sprache\n\n     {{0}}\nSchritt 0: Erscheint zuerst\n\n     {{1}}\nSchritt 1: Erscheint als zweites\n\n     {{2-3}}\nSchritte 2-3: Sichtbar ab Schritt 2, verschwindet bei Schritt 4\n\n     {{4}}\nSchritt 4: Erscheint zuletzt\n\n### Mit Sprachausgabe\n\n     --{{0}}--\nDieser Text wird gesprochen, wenn Schritt 0 erscheint.\n\n     {{0}}\nErster Inhalt\n\n     --{{1 UK English Female}}--\nThis uses a different voice for step 1.\n\n     {{1}}\nZweiter Inhalt\n\n     --{{2 French Female}}--\nCeci est parlé en français.\n\n     {{2}}\n!?[Ein Dokument mehrere Darstellungen](https://www.youtube.com/watch?v=saxAFw7XpjI)\n\n**Inline-Animationen:**\n\nImmer sichtbar, aber {1}{dies erscheint in Schritt 1}, und {2}{dies in Schritt 2}.\n\n## Styling\n\n<!-- style="color: red; font-weight: bold;" -->\nGestaltet den gesamten Block.\n\nGestaltet nur Ein<!-- style="color: blue;" --> Element\n\n## Diagramme\n\n### ASCII 1\n\n                                  Diagrammtitel\n    1.5 |                                  PUNKTE\n        |                 ***\n      y |               *     *\n      - |         r r r*r r r r*r r r\n      a |             *         *\n      x |            *           *\n      i |     B B B * B B B B B B * B B B\n      s |         *                 *\n        | *  * *                       * *  *\n   -1.0 +------------------------------------\n        0            x-Achse               1\n\n\n### ASCII 2\n\n```ascii\n .---------------.\n(      Start      )\n \'-------+-------\'\n         |\n         v\n    +----+----+      .----------.\n    | Eingabe |----->| Prozess  |\n    +---------+      \'-----+----\'\n                          /\n                         /\n                        /\n        +--------------+---+\n        |                  |\n        v                  v\n   +----+----+       +-----+-----+\n   | Erfolg  |       |   Fehler  |\n   +---------+       +-----------+\n```\n\n### Datenvisualisierung\n\n__Liniendiagramme__\n\n| Jahr | Verkäufe | Gewinn |\n| :--: | :------: | :----: |\n| 2018 |   1000   |  500   |\n| 2019 |   1500   |  700   |\n| 2020 |   1200   |  400   |\n| 2022 |   1800   |  890   |\n| 2023 |   2000   |  999   |\n\n__Balkendiagramme__\n\n| Tier            | Gewicht (kg) | Lebensspanne (Jahre) | Mitogen |\n| --------------- | ------------:| --------------------:| -------:|\n| Maus            |        0.028 |                    2 |      95 |\n| Flughörnchen    |        0.085 |                   15 |      50 |\n| Braune Flederm. |        0.020 |                   30 |      10 |\n| Schaf           |           90 |                   12 |      95 |\n| Mensch          |           68 |                   70 |      10 |\n\n__Kreisdiagramme__\n\n| Musikstil 1994  | Klassik | Country | Reggae | Hip-Hop | Hard Rock | Samba |\n|:--------------- | -------:| -------:| ------:| -------:| ---------:| -----:|\n| Studentenbewert.|      50 |      50 |    100 |     200 |       350 |   250 |\n\n__Netzdiagramme__\n\n| Tier            | Gewicht (kg) | Lebensspanne (Jahre) | Mitogen |\n| --------------- | ------------:| --------------------:| -------:|\n| Maus            |        0.028 |                    2 |      95 |\n| Flughörnchen    |        0.085 |                   15 |      50 |\n| Braune Flederm. |        0.020 |                   30 |      10 |\n\n## Quiz\n\n### Texteingabe\n\nWas ist 2 + 2?\n\n    [[4]]\n\n### Multiple Choice\n\n    [[X]] Richtig\n    [[ ]] Falsch\n    [[X]] Auch richtig\n\n### Single Choice\n\n    [(X)] Richtig\n    [( )] Falsch\n    [( )] Auch falsch\n\n### Auswahl\n\n    [[ Option A | (Option B) | Option C ]]\n\n### Mit Hinweisen\n\n    [[42]]\n    [[?]] Erster Hinweis\n    [[?]] Zweiter Hinweis\n\n### Mit Lösung\n\n    [[Antwort]]\n****************************************\n\nHier steht die Erklärung der Lösung.\n\n****************************************\n\n### Lückentext\n\nFülle die [[ leeren ]] Wörter in diesem [[ Satz ]] aus.\n\nDu kannst auch Auswahl verwenden: [[(eins)|zwei|drei]] und [[(eine andere)|Wahl]].\n\n## Ausführbarer Code\n\n```javascript\n// Dein Code hier\nlet x = 5;\nlet y = 10;\nconsole.log("Summe:", x + y);\n\nx + y  // Rückgabewert\n```\n<script>@input</script>\n\n### Mehrere Dateien\n\n``` js     -script.js\nlet result = data.value * 2;\n"Ergebnis: " + result\n```\n``` json    +data.json\n{\n  "value": 21\n}\n```\n<script>\n  let data = @input(1);\n  eval(`@input(0)`);\n</script>\n\n### Diagramme mit Chartist\n\n```javascript\nnew Chartist.Line(\'#chart1\', {\n  labels: [1, 2, 3, 4, 5],\n  series: [[12, 9, 7, 8, 5]]\n});\n```\n<script>@input</script>\n\n<div class="ct-chart ct-golden-section" id="chart1"></div>\n\n### JavaScript\n\nDie $\\sqrt{2} = $ <script>Math.pow(2, 0.5)</script>\n\n#### Wetter-API Beispiel\n\nLängengrad: <script default="13.33125" input="range" output="longitude">@input</script>\n\nBreitengrad: <script default="50.92558" input="range" output="latitude">@input</script>\n\n<script run-once="true" style="display: block">\n  fetch("https://api.open-meteo.com/v1/forecast?latitude=@input(`latitude`)&longitude=@input(`longitude`)&hourly=temperature_2m")\n    .then(response => response.json())\n    .then(data => {\n      let table = "<!-- data-show data-type=\'line\' data-title=\'Open-Meteo Wetter-API\' -->\\n"\n\n      table += "| Zeit | Temperatur |\\n"\n      table += "| ---- | ---------- |\\n"\n\n      for (let i=0; i < data.hourly.time.length; i++) {\n        table += "| " + data.hourly.time[i] + " | " + data.hourly.temperature_2m[i] + " |\\n"\n      }\n      send.lia("LIASCRIPT: "+table) }\n    )\n    .catch(e => {\n      send.lia("ups, etwas ist schief gelaufen")\n    })\n  "Warte auf das Wetter"\n</script>\n\n## Umfragen\n\nBewerte diesen Kurs:\n\n    [(1)] ⭐\n    [(2)] ⭐⭐\n    [(3)] ⭐⭐⭐\n    [(4)] ⭐⭐⭐⭐\n    [(5)] ⭐⭐⭐⭐⭐\n\nFeedback:\n\n    [[___]]\n\n## Fußnoten\n\nText mit Fußnote[^1]\n\n[^1]: Fußnoteninhalt\n\n## Veröffentlichung\n\n1. Auf GitHub hochladen\n2. Raw-URL holen: `https://raw.githubusercontent.com/user/repo/main/README.md`\n3. Teilen: `https://liascript.github.io/course/?DEINE_RAW_URL`\n\n\n**Erstelle deinen Kurs von hier aus! 🚀**\n',
    label: 'lia-template-de',
  },
  {
    documentation:
      "Inicializa tu archivo con un curso de ejemplo completo en ESPAÑOL, con cabecera y cuerpo, que puedes usar como punto de partida para tu curso.\n\nEjemplo:\n\n    <!--\n    author:   Tu Nombre\n\n    email:    tu@email.org\n\n    version:  0.0.1\n\n    language: es\n\n    narrator: Spanish Female\n\n    ...\n    -->\n\n    # Título del curso\n\n    Este es el esqueleto inicial de tu **curso**...",
    insertText:
      "<!--\nauthor:   Tu Nombre\n\nemail:    tu.email@example.org\n\nversion:  0.0.1\n\nlanguage: es\n\nnarrator: Spanish Female\n\ncomment:  Una plantilla LiaScript minimalista para experimentar rápidamente.\n\nlink:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css\n\nscript:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js\n-->\n\n# Título del curso\n\n> Sustituye esto por la descripción de tu curso.\n\n## Formato de texto\n\n**Negrita**, *cursiva*, ***negrita+cursiva***\n\n~Tachado~, ~~subrayado~~, ^superíndice^\n\n`código en línea`\n\n## Encabezados\n\n```markdown\n# H1 - Título del curso\n## H2 - Sección (nueva diapositiva)\n### H3 - Subsección\n#### H4 - Sub-subsección\n```\n\n## Listas\n\n**Sin orden**\n\n- Elemento 1\n- Elemento 2\n  - Elemento anidado\n  - Otro anidado\n\n**Numeradas**\n\n1. Primer paso\n2. Segundo paso\n   1. Subpaso A\n   2. Subpaso B\n\n**Tareas**\n\n- [ ] Por hacer\n- [x] Hecho\n\n## Enlaces\n\n[Texto del enlace](https://liascript.github.io)\n\n[Enlace a sección](#formato-de-texto)\n\n## Citas en bloque\n\n> Cita simple\n>\n> > Las citas anidadas\n> > también son posibles...\n\n> Cita con fuente\n>\n> -- Nombre del autor\n\n## Matemáticas\n\nEn línea: $a^2 + b^2 = c^2$\n\nEn bloque:\n\n$$\n\\int_0^1 x^2 \\, dx = \\frac{1}{3}\n$$\n\nMultilínea:\n\n$$\n\\begin{aligned}\nf(x) &= x^2 + 2x + 1 \\\\\n     &= (x + 1)^2\n\\end{aligned}\n$$\n\nMatriz:\n\n$$\n\\begin{pmatrix}\n1 & 0 \\\\\n0 & 1\n\\end{pmatrix}\n$$\n\nQuímica: $\\ce{H2O}$ o $\\ce{CO2 + C -> 2 CO}$\n\n## Tablas\n\n| Izquierda | Centro | Derecha |\n| :-------- | :----: | ------: |\n| A         |   B    |       C |\n| D         |   E    |       F |\n| H         |   I    |       J |\n\n## Multimedia\n\n**Imágenes**\n\n![Texto alternativo](https://picsum.photos/300/200)\n\n**Audio**\n\n?[Audio](https://bigsoundbank.com/UPLOAD/mp3/1068.mp3)\n\n**Vídeo**\n\n!?[Vídeo de YouTube](https://www.youtube.com/watch?v=rbqm6MN0We4)\n\n### Galerías\n\n![Imagen 1](https://picsum.photos/200/150?1) ![Imagen 2](https://picsum.photos/200/150?2) ![Imagen 3](https://picsum.photos/200/150?3)\n\n### Código QR\n\n[qr-code](https://liascript.github.io \"Escanéame\")\n\n### oEmbed\n\n??[Modelo 3D de SketchFab](https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042)\n\n## Animaciones y texto a voz\n\n     {{0}}\nPaso 0: aparece primero\n\n     {{1}}\nPaso 1: aparece segundo\n\n     {{2-3}}\nPasos 2-3: visible desde el paso 2, desaparece en el paso 4\n\n     {{4}}\nPaso 4: aparece al final\n\n### Con narración\n\n     --{{0}}--\nEste texto se lee en voz alta cuando aparece el paso 0.\n\n     {{0}}\nPrimer contenido\n\n     --{{1 Spanish Male}}--\nEste paso usa una voz diferente.\n\n     {{1}}\nSegundo contenido\n\n     --{{2 French Female}}--\nCeci est parlé en français.\n\n     {{2}}\n!?[Un documento, varias representaciones](https://www.youtube.com/watch?v=saxAFw7XpjI)\n\n**Animaciones en línea:**\n\nSiempre visible, pero {1}{esto aparece en el paso 1} y {2}{esto en el paso 2}.\n\n## Estilos\n\n<!-- style=\"color: red; font-weight: bold;\" -->\nDa estilo a todo el bloque.\n\nDa estilo solo a Un<!-- style=\"color: blue;\" --> elemento\n\n## Diagramas\n\n### ASCII 1\n\n                              Título del diagrama\n    1.5 |                              PUNTOS\n        |                 ***\n      y |               *     *\n      - |         r r r*r r r r*r r r\n      a |             *         *\n      x |            *           *\n      i |     B B B * B B B B B B * B B B\n      s |         *                 *\n        | *  * *                       * *  *\n   -1.0 +------------------------------------\n        0            eje x                 1\n\n\n### ASCII 2\n\n```ascii\n .---------------.\n(      Inicio     )\n '-------+-------'\n         |\n         v\n    +----+----+      .----------.\n    | Entrada |----->| Proceso  |\n    +---------+      '-----+----'\n                          /\n                         /\n                        /\n        +--------------+---+\n        |                  |\n        v                  v\n   +----+----+       +-----+-----+\n   |  Éxito  |       |   Error   |\n   +---------+       +-----------+\n```\n\n### Visualización de datos\n\n__Gráficos de líneas__\n\n| Año  | Ventas | Beneficio |\n| :--: | :----: | :-------: |\n| 2018 |  1000  |    500    |\n| 2019 |  1500  |    700    |\n| 2020 |  1200  |    400    |\n| 2022 |  1800  |    890    |\n| 2023 |  2000  |    999    |\n\n__Gráficos de barras__\n\n| Animal           | Peso (kg) | Esperanza de vida | Mitogen |\n| ---------------- | ---------:| -----------------:| -------:|\n| Ratón            |     0.028 |                 2 |      95 |\n| Ardilla voladora |     0.085 |                15 |      50 |\n| Murciélago       |     0.020 |                30 |      10 |\n| Oveja            |        90 |                12 |      95 |\n| Humano           |        68 |                70 |      10 |\n\n__Gráficos circulares__\n\n| Estilo musical 1994 | Clásica | Country | Reggae | Hip-Hop | Hard Rock | Samba |\n|:------------------- | -------:| -------:| ------:| -------:| ---------:| -----:|\n| Valoración          |      50 |      50 |    100 |     200 |       350 |   250 |\n\n__Gráficos de radar__\n\n| Animal           | Peso (kg) | Esperanza de vida | Mitogen |\n| ---------------- | ---------:| -----------------:| -------:|\n| Ratón            |     0.028 |                 2 |      95 |\n| Ardilla voladora |     0.085 |                15 |      50 |\n| Murciélago       |     0.020 |                30 |      10 |\n\n## Cuestionarios\n\n### Entrada de texto\n\n¿Cuánto es 2 + 2?\n\n    [[4]]\n\n### Opción múltiple\n\n    [[X]] Correcta\n    [[ ]] Incorrecta\n    [[X]] También correcta\n\n### Opción única\n\n    [(X)] Correcta\n    [( )] Incorrecta\n    [( )] También incorrecta\n\n### Selección\n\n    [[ Opción A | (Opción B) | Opción C ]]\n\n### Con pistas\n\n    [[42]]\n    [[?]] Primera pista\n    [[?]] Segunda pista\n\n### Con solución\n\n    [[respuesta]]\n****************************************\n\nAquí va la explicación de la solución.\n\n****************************************\n\n### Texto con huecos\n\nRellena las palabras [[ que faltan ]] en esta [[ frase ]].\n\nTambién puedes usar selección: [[(una)|dos|tres]] y [[(otra)|opción]].\n\n## Código ejecutable\n\n```javascript\n// Tu código aquí\nlet x = 5;\nlet y = 10;\nconsole.log(\"Suma:\", x + y);\n\nx + y  // Valor de retorno\n```\n<script>@input</script>\n\n### Código con varios archivos\n\n``` js     -script.js\nlet resultado = data.valor * 2;\n\"Resultado: \" + resultado\n```\n``` json    +datos.json\n{\n  \"valor\": 21\n}\n```\n<script>\n  let data = @input(1);\n  eval(`@input(0)`);\n</script>\n\n### Gráficos con Chartist\n\n```javascript\nnew Chartist.Line('#chart1', {\n  labels: [1, 2, 3, 4, 5],\n  series: [[12, 9, 7, 8, 5]]\n});\n```\n<script>@input</script>\n\n<div class=\"ct-chart ct-golden-section\" id=\"chart1\"></div>\n\n### JavaScript\n\nLa $\\sqrt{2} = $ <script>Math.pow(2, 0.5)</script>\n\n#### Ejemplo de API del tiempo\n\nLongitud: <script default=\"13.33125\" input=\"range\" output=\"longitude\">@input</script>\n\nLatitud: <script default=\"50.92558\" input=\"range\" output=\"latitude\">@input</script>\n\n<script run-once=\"true\" style=\"display: block\">\n  fetch(\"https://api.open-meteo.com/v1/forecast?latitude=@input(`latitude`)&longitude=@input(`longitude`)&hourly=temperature_2m\")\n    .then(response => response.json())\n    .then(data => {\n      let table = \"<!-- data-show data-type='line' data-title='API del tiempo Open-Meteo' -->\\n\"\n\n      table += \"| Hora | Temperatura |\\n\"\n      table += \"| ---- | ----------- |\\n\"\n\n      for (let i=0; i < data.hourly.time.length; i++) {\n        table += \"| \" + data.hourly.time[i] + \" | \" + data.hourly.temperature_2m[i] + \" |\\n\"\n      }\n      send.lia(\"LIASCRIPT: \"+table) }\n    )\n    .catch(e => {\n      send.lia(\"ups, algo salió mal\")\n    })\n  \"Esperando el tiempo\"\n</script>\n\n## Encuestas\n\nValora este curso:\n\n    [(1)] ⭐\n    [(2)] ⭐⭐\n    [(3)] ⭐⭐⭐\n    [(4)] ⭐⭐⭐⭐\n    [(5)] ⭐⭐⭐⭐⭐\n\nComentarios:\n\n    [[___]]\n\n## Notas a pie\n\nTexto con nota a pie[^1]\n\n[^1]: Contenido de la nota\n\n## Publicación\n\n1. Sube el archivo a GitHub\n2. Obtén la URL raw: `https://raw.githubusercontent.com/usuario/repo/main/README.md`\n3. Comparte: `https://liascript.github.io/course/?TU_URL_RAW`\n\n\n**¡Construye tu curso a partir de aquí! 🚀**\n",
    label: 'lia-template-es',
  },
  {
    documentation:
      "Inserta una lista numerada de Markdown, como se muestra abajo. La indentación es importante en este caso.\n\nEjemplo:\n  1. primer punto\n  2. segundo punto\n  3. algo de texto\n\n     y una imagen ![imagen](img/punto.jpg)",
    insertText: '1. block\n2. block\n3. block',
    label: 'lia-list-ordered',
  },
  {
    documentation:
      "Inserta una lista con viñetas de Markdown, como se muestra abajo. Puedes usar (*+-) para empezar cada punto. La indentación es importante en este caso.\n\nEjemplo:\n  * primer punto\n  + segundo punto\n  - algo de texto\n\n    y una imagen ![imagen](img/punto.jpg)",
    insertText: '+ block\n+ block\n+ block',
    label: 'lia-list-unordered',
  },
  {
    documentation:
      "Se sustituye por el autor definido en la cabecera.",
    insertText: '@author',
    label: 'lia-macro-author',
  },
  {
    documentation:
      "Se sustituye por la fecha definida en la cabecera.",
    insertText: '@date',
    label: 'lia-macro-date',
  },
  {
    documentation:
      "Se sustituye por el email definido en la cabecera.",
    insertText: '@email',
    label: 'lia-macro-email',
  },
  {
    documentation:
      "Úsala solo junto con código ejecutable y proyectos o con cuestionarios. Esta macro solo se puede usar dentro de una etiqueta script y se sustituye por la entrada actual del usuario.\nPara referirte a las entradas de un proyecto, usa la macro parametrizada:\n\n  @input(0)   <== igual que @input\n  @input(1)",
    insertText: '@input',
    label: 'lia-macro-input',
  },
  {
    documentation:
      "Se sustituye por el número de la sección actual.",
    insertText: '@section',
    label: 'lia-macro-section',
  },
  {
    documentation:
      "Genera un UID que se puede usar para nombrar etiquetas de forma única.",
    insertText: '@uid',
    label: 'lia-macro-uid',
  },
  {
    documentation:
      "Se sustituye por la versión definida en la cabecera.",
    insertText: '@version',
    label: 'lia-macro-version',
  },
  {
    documentation:
      "Si no quieres guardar el estado del curso en indexeddb ni en el índice local de cursos, puedes usar esta macro en la cabecera: no quedará ningún rastro de este curso guardado localmente.\n\nEjemplo:\n  <!--\n  persistent: false\n  -->",
    insertText: 'persistent: false',
    label: 'lia-macro-persistent',
  },
  {
    documentation:
      "Puedes importar las macros principales de otros cursos simplemente con el comando import, seguido de la URL raw del curso ajeno.\n\nEjemplo:\n\n  ## sección\n  <!--\n  import: https://raw.githubusercontent.com/liaTemplates/rextester_template/master/README.md\n  -->\n\n  ``` python\n  print(\"Hola Mundo\")\n  ```\n  @Rextester.eval(@Python)",
    insertText: 'import: url',
    label: 'lia-macro-import',
  },
  {
    documentation:
      "La atribución es importante. Con el comando attribute puedes definir la atribución que se muestra en el campo de información del panel de navegación. Estos elementos también se importan si importas la funcionalidad de otro curso.\n\nUna buena atribución podría ser como las siguientes...\n\nEjemplo:\n  <!--\n  attribute: [AlaSQL](https://alasql.org)\n             by [Andrey Gershun](agershun@gmail.com)\n             & [Mathias Rangel Wulff](m@rawu.dk)\n             is licensed under [MIT](https://opensource.org/licenses/MIT)\n\n  attribute: [PapaParse](https://www.papaparse.com)\n             by [Matthew Holt](https://twitter.com/mholt6)\n             is licensed under [MIT](https://opensource.org/licenses/MIT)\n  -->\n",
    insertText: 'attribute: thx',
    label: 'lia-macro-attribute',
  },
  {
    documentation:
      "Puedes cambiar la apariencia por defecto de tu documento, tanto si prefieres el modo oscuro como el claro. Esto no cambia las preferencias del usuario. El modo por defecto lo definen los ajustes del usuario.\n\nEjemplo:\n  <!--\n  dark: true\n\n  dark: false\n  -->\n",
    insertText: 'dark: true',
    label: 'lia-macro-dark',
  },
  {
    documentation:
      "Puedes cambiar el estilo por defecto de tu documento: si no tienes efectos, puedes poner el modo Textbook, o empezar con una presentación interactiva. Los tres modos son los mismos que se definen en el botón superior derecho del documento. El modo por defecto lo definen los ajustes del usuario.\n\nEjemplo:\n  <!--\n  mode: Presentation\n\n  mode: Slides\n\n  mode: Textbook\n  -->\n",
    insertText: 'mode: Presentation',
    label: 'lia-macro-mode',
  },
  {
    documentation:
      "Activa o desactiva la función classroom de tu curso usando esta macro en la cabecera. Puedes usar palabras como `false`, `disabled`, `0`, `OFF`... LiaScript las reconocerá como negativas. Cualquier otra palabra se trata como positiva. __Pero mejor quédate con `false`/`true`, `on`/`off`, `disable`/`enable`__\n\nEjemplo:\n  <!--\n  classroom: false\n  -->\n",
    insertText: 'classroom: disable',
    label: 'lia-macro-classroom',
  },
  {
    documentation:
      "Activa o desactiva la traducción experimental con Google de tu curso usando esta macro en la cabecera. Puedes usar palabras como `false`, `disabled`, `0`, `OFF`... LiaScript las reconocerá como negativas. Cualquier otra palabra se trata como positiva. __Pero mejor quédate con `false`/`true`, `on`/`off`, `disable`/`enable`__\n\nEjemplo:\n  <!--\n  translateWithGoogle: false\n  -->\n",
    insertText: 'translateWithGoogle: disable',
    label: 'lia-macro-translateWithGoogle',
  },
  {
    documentation:
      "Activa o desactiva la opción de compartir de tu curso usando esta macro en la cabecera (no se mostrará ni el icono ni el botón de compartir). Puedes usar palabras como `false`, `disabled`, `0`, `OFF`... LiaScript las reconocerá como negativas. Cualquier otra palabra se trata como positiva. __Pero mejor quédate con `false`/`true`, `on`/`off`, `disable`/`enable`__\n\nEjemplo:\n  <!--\n  sharing: false\n  -->\n",
    insertText: 'sharing: disable',
    label: 'lia-macro-sharing',
  },
  {
    documentation:
      "Usa esta macro para redefinir la información del repositorio de tu proyecto; por defecto el curso mostrará el origen de GitHub, GitLab o Dropbox. Añadiendo esta información a la cabecera puedes definir una raíz estática para tu proyecto, que también será visible en todas las exportaciones.\n\nEjemplo:\n  <!--\n  repository: https://github.com/andre-dietrich/liascript-snippets\n  -->\n",
    insertText: 'repository: url',
    label: 'lia-macro-repository',
  },
  {
    documentation:
      "Usa macros para las tareas repetitivas y para hacer el documento más legible. Puedes definir tus propias macros en las cabeceras principal y de sección. Empieza tu macro con una arroba (@) y dale un nombre. Separa el nombre del cuerpo con dos puntos (:). Si quieres parametrizar tu macro, usa @0, @1, ... como id de parámetro. Es un simple mecanismo de sustitución de cadenas y los parámetros se separan con comas (,). Si tienes comas en tus parámetros, usa acentos graves (`) para encerrarlos. Y triples acentos graves (```) para encerrar parámetros multilínea.\n\nEjemplo:\n\n  ## sección\n  <!--\n  @rojo: <!-- style=\"color: red;\" -->\n\n  @negrita_cursiva: __@0__ _@1_\n  -->\n\n  @rojo\n  Todo este párrafo será rojo y esto será:\n  @negrita_cursiva( Soy negrita,`y yo, cursiva`).",
    insertText: '@name: line',
    label: 'lia-macro-definition-line',
  },
  {
    documentation:
      "Usa macros para las tareas repetitivas y para hacer el documento más legible. Las macros multilínea empiezan con (@tu_nombre) y terminan con (@end). Los parámetros se pasan igual que en las macros de una línea.\n\nEjemplo:\n\n  ## sección\n  <!--\n  @evalJS\n  <script>\n    try{\n      eval(`@input`);\n    } catch (e) {\n      var log = e.stack.match(/((.*?):(.*))\n.*?(:(d+):(d+))\n)/);\n      var err_msg = new LiaError(log[1] + \" =>  (\" + log[4], 1);\n      err_msg.add_detail(0, log[3], \"error\", log[5]-1, log[6]);\n      throw err_msg;\n    }\n  </script>\n  @end\n  -->\n\n  evalúa este código con errores:\n\n  ```js\n  let x = 12;\n  x * c;\n  ```\n  @evalJS",
    insertText: '@name\nparam1 -> __@0__\n@end',
    label: 'lia-macro-definition-block',
  },
  {
    documentation:
      "Este tipo de llamada a macro resulta útil si quieres referirte a una URL concreta y que otros lectores de Markdown la muestren como un enlace. También es posible añadir parámetros adicionales entre paréntesis; la URL siempre se usa como último parámetro.\n\nEjemplo:\n\n  @[hazAlgoCon](URL)\n\n  @[hazAlgoCon(1,2,3)](URL \"esto se ignora por ahora\")",
    insertText: '@[macro](url-param)',
    label: 'lia-macro-call-link',
  },
  {
    documentation:
      "Si tienes una definición de macro multilínea más compleja, también puedes usar el siguiente estilo para que al menos se renderice de forma legible, por ejemplo en GitHub. Así, puedes colocar tu llamada a macro en la cabecera del bloque de código; el primer parámetro (opcional) de lenguaje se ignora y los elementos siguientes dentro del bloque se pasan como último parámetro multilínea a esa llamada.\n\nEjemplo:\n\n    ## Macro\n    <!--\n    link:   https://pannellum.org/css/style.css\n            https://cdn.pannellum.org/2.4/pannellum.css\n\n    script: https://cdn.pannellum.org/2.4/pannellum.js\n\n    @panorama\n    <div id=\"panorama_@0\" style=\"width: 100%; height: 400px;\"></div>\n    <script>\n    pannellum.viewer('panorama_@0', {\n        \"type\": \"equirectangular\",\n        \"panorama\": \"@1\",\n        \"autoLoad\": false,\n        \"hotSpots\": [@2]\n    });\n    </script>\n    @end\n    -->\n\n    ```json @panorama(\"0\",https://pannellum.org/images/cerro-toco-0.jpg)\n    {\n        \"pitch\": 14.1,\n        \"yaw\": 1.5,\n        \"type\": \"info\",\n        \"text\": \"Baltimore Museum of Art\",\n        \"URL\": \"https://artbma.org/\"\n    },\n    {\n        \"pitch\": -0.9,\n        \"yaw\": 144.4,\n        \"type\": \"info\",\n        \"text\": \"North Charles Street\"\n    }\n    ```",
    insertText: '```lang @macro\na multiline\nparameter\n```',
    label: 'lia-macro-call-block',
  },
  {
    documentation:
      "Las líneas horizontales se crean añadiendo al menos 3 guiones seguidos (---), aunque más guiones quedan un poco mejor ;)\n\nEjemplo:\n  Esto es una línea horizontal:\n\n    ---\n\n  Y esto también:\n\n  ---------------------------------------------",
    insertText: '----------------------\n',
    label: 'lia-horizontal-line',
  },
  {
    documentation:
      "Inserta citas de una línea o bloques de cita simplemente con un (>) inicial.\n\nEjemplo:\n  > Las citas en bloque son muy útiles en el correo para emular el texto de respuesta.\n  > Esta línea forma parte de la misma cita.\n\n  Salto de cita.\n\n  > Esta es una línea muy larga que seguirá citándose correctamente al ajustarse. Vamos a seguir escribiendo para asegurarnos de que es lo bastante larga como para ajustarse para todo el mundo. Ah, también puedes *poner* **Markdown** dentro de una cita en bloque.",
    insertText: '> your quote',
    label: 'lia-quote',
  },
  {
    documentation:
      "Inserta citas de una línea o bloques de cita simplemente con un (>) inicial, y haz que el último párrafo empiece con -- para indicar la fuente de la cita.\n\nEjemplo:\n  > “Vive como si fueras a morir mañana.\n  > Aprende como si fueras a vivir para siempre.”\n  >\n  > -- Mahatma Gandhi",
    insertText: '> your quote\n>\n> -- your citation',
    label: 'lia-quote-citation',
  },
  {
    documentation:
      "Como en el Markdown habitual, un documento se divide en partes por sus títulos. Un título empieza con una almohadilla (#) seguida de un encabezado. El número de almohadillas consecutivas define el orden. Además, es posible sobrescribir algunas de las definiciones de la cabecera principal; escribe \"liaheadersection\" para más información...\n\nEjemplo:\n  # Título principal\n\n  ...\n\n  ## Título del capítulo\n  <!--\n  comment: Este comentario es solo de demostración\n           y se sobrescribirá en la siguiente diapositiva...\n\n  author:  Nuevo Autor\n  email:   noeselprincipal@email.com\n  -->\n\n  ...\n\n  ### Título de __Sección__\n\n  ...\n\nEs posible añadir elementos de estilo a los títulos, pero solo debería usarse en casos excepcionales.",
    insertText: '# Main Title\n',
    label: 'lia-title-1',
  },
  {
    documentation:
      "Como en el Markdown habitual, un documento se divide en partes por sus títulos. Un título empieza con una almohadilla (#) seguida de un encabezado. El número de almohadillas consecutivas define el orden. Además, es posible sobrescribir algunas de las definiciones de la cabecera principal; escribe \"liaheadersection\" para más información...\n\nEjemplo:\n  # Título principal\n\n  ...\n\n  ## Título del capítulo\n  <!--\n  comment: Este comentario es solo de demostración\n           y se sobrescribirá en la siguiente diapositiva...\n\n  author:  Nuevo Autor\n  email:   noeselprincipal@email.com\n  -->\n\n  ...\n\n  ### Título de __Sección__\n\n  ...\n\nEs posible añadir elementos de estilo a los títulos, pero solo debería usarse en casos excepcionales.",
    insertText: '## Chapter Title\n',
    label: 'lia-title-2',
  },
  {
    documentation:
      "Como en el Markdown habitual, un documento se divide en partes por sus títulos. Un título empieza con una almohadilla (#) seguida de un encabezado. El número de almohadillas consecutivas define el orden. Además, es posible sobrescribir algunas de las definiciones de la cabecera principal; escribe \"liaheadersection\" para más información...\n\nEjemplo:\n  # Título principal\n\n  ...\n\n  ## Título del capítulo\n  <!--\n  comment: Este comentario es solo de demostración\n           y se sobrescribirá en la siguiente diapositiva...\n\n  author:  Nuevo Autor\n  email:   noeselprincipal@email.com\n  -->\n\n  ...\n\n  ### Título de __Sección__\n\n  ...\n\nEs posible añadir elementos de estilo a los títulos, pero solo debería usarse en casos excepcionales.",
    insertText: '### Section Title\n',
    label: 'lia-title-3',
  },
  {
    documentation:
      "Como en el Markdown habitual, un documento se divide en partes por sus títulos. Un título empieza con una almohadilla (#) seguida de un encabezado. El número de almohadillas consecutivas define el orden. Además, es posible sobrescribir algunas de las definiciones de la cabecera principal; escribe \"liaheadersection\" para más información...\n\nEjemplo:\n  # Título principal\n\n  ...\n\n  ## Título del capítulo\n  <!--\n  comment: Este comentario es solo de demostración\n           y se sobrescribirá en la siguiente diapositiva...\n\n  author:  Nuevo Autor\n  email:   noeselprincipal@email.com\n  -->\n\n  ...\n\n  ### Título de __Sección__\n\n  ...\n\nEs posible añadir elementos de estilo a los títulos, pero solo debería usarse en casos excepcionales.",
    insertText: '#### SubSection Title\n',
    label: 'lia-title-4',
  },
  {
    documentation:
      "Como en el Markdown habitual, un documento se divide en partes por sus títulos. Un título empieza con una almohadilla (#) seguida de un encabezado. El número de almohadillas consecutivas define el orden. Además, es posible sobrescribir algunas de las definiciones de la cabecera principal; escribe \"liaheadersection\" para más información...\n\nEjemplo:\n  # Título principal\n\n  ...\n\n  ## Título del capítulo\n  <!--\n  comment: Este comentario es solo de demostración\n           y se sobrescribirá en la siguiente diapositiva...\n\n  author:  Nuevo Autor\n  email:   noeselprincipal@email.com\n  -->\n\n  ...\n\n  ### Título de __Sección__\n\n  ...\n\nEs posible añadir elementos de estilo a los títulos, pero solo debería usarse en casos excepcionales.",
    insertText: '##### Paragraph Title\n',
    label: 'lia-title-5',
  },
  {
    documentation:
      "Como en el Markdown habitual, un documento se divide en partes por sus títulos. Un título empieza con una almohadilla (#) seguida de un encabezado. El número de almohadillas consecutivas define el orden. Además, es posible sobrescribir algunas de las definiciones de la cabecera principal; escribe \"liaheadersection\" para más información...\n\nEjemplo:\n  # Título principal\n\n  ...\n\n  ## Título del capítulo\n  <!--\n  comment: Este comentario es solo de demostración\n           y se sobrescribirá en la siguiente diapositiva...\n\n  author:  Nuevo Autor\n  email:   noeselprincipal@email.com\n  -->\n\n  ...\n\n  ### Título de __Sección__\n\n  ...\n\nEs posible añadir elementos de estilo a los títulos, pero solo debería usarse en casos excepcionales.",
    insertText: '##### SubParagraph Title\n',
    label: 'lia-title-6',
  },
  {
    documentation:
      "Las etiquetas details y summary son etiquetas HTML estándar y GitHub también admite su uso con Markdown. Estas etiquetas ofrecen una forma elegante de definir lo que hoy se llama acordeón: el usuario puede pulsar en el texto de summary para que aparezca el cuerpo de details.\n\nEjemplo:\n  <details>\n\n  <summary>**Anuncios honestos de libros de texto (pulsa para ampliar)**</summary>\n\n  !?[If High School and College Textbooks Were Honest - Honest Ads](https://www.youtube.com/watch?v=lhSjYT7pWkw)\n\n  </details>",
    insertText: '<details>\n\n<summary>title</summary>\n\nbody\n\n</details>',
    label: 'lia-details',
  },
  {
    documentation:
      '',
    insertText: 'UK English Female',
    label: 'voice-uk-english-female',
  },
  {
    documentation:
      '',
    insertText: 'UK English Male',
    label: 'voice-uk-english-male',
  },
  {
    documentation:
      '',
    insertText: 'US English Female',
    label: 'voice-us-english-female',
  },
  {
    documentation:
      '',
    insertText: 'US English Male',
    label: 'voice-us-english-male',
  },
  {
    documentation:
      '',
    insertText: 'Arabic Female',
    label: 'voice-arabic-female',
  },
  {
    documentation:
      '',
    insertText: 'Arabic Male',
    label: 'voice-arabic-male',
  },
  {
    documentation:
      '',
    insertText: 'Armenian Male',
    label: 'voice-armenian-male',
  },
  {
    documentation:
      '',
    insertText: 'Australian Female',
    label: 'voice-australian-english-female',
  },
  {
    documentation:
      '',
    insertText: 'Australian Male',
    label: 'voice-australian-english-male',
  },
  {
    documentation:
      '',
    insertText: 'Bangla Bangladesh Female',
    label: 'voice-bangla-bangladesh-female',
  },
  {
    documentation:
      '',
    insertText: 'Bangla Bangladesh Male',
    label: 'voice-bangla-bangladesh-male',
  },
  {
    documentation:
      '',
    insertText: 'Bangla India Female',
    label: 'voice-bangla-india-female',
  },
  {
    documentation:
      '',
    insertText: 'Bangla India Male',
    label: 'voice-bangla-india-male',
  },
  {
    documentation:
      '',
    insertText: 'Brazilian Portuguese Female',
    label: 'voice-brazilian-portuguese-female',
  },
  {
    documentation:
      '',
    insertText: 'Brazilian Portuguese Male',
    label: 'voice-brazilian-portuguese-male',
  },
  {
    documentation:
      '',
    insertText: 'Chinese Female',
    label: 'voice-chinese-female',
  },
  {
    documentation:
      '',
    insertText: 'Chinese Male',
    label: 'voice-chinese-male',
  },
  {
    documentation:
      '',
    insertText: 'Chinese (Hong Kong) Female',
    label: 'voice-chinese-hong-kong-female',
  },
  {
    documentation:
      '',
    insertText: 'Chinese (Hong Kong) Male',
    label: 'voice-chinese-hong-kong-male',
  },
  {
    documentation:
      '',
    insertText: 'Chinese Taiwan Female',
    label: 'voice-chinese-taiwan-female',
  },
  {
    documentation:
      '',
    insertText: 'Chinese Taiwan Male',
    label: 'voice-chinese-taiwan-male',
  },
  {
    documentation:
      '',
    insertText: 'Czech Female',
    label: 'voice-czech-female',
  },
  {
    documentation:
      '',
    insertText: 'Czech Male',
    label: 'voice-czech-male',
  },
  {
    documentation:
      '',
    insertText: 'Danish Female',
    label: 'voice-danish-female',
  },
  {
    documentation:
      '',
    insertText: 'Danish Male',
    label: 'voice-danish-male',
  },
  {
    documentation:
      '',
    insertText: 'Deutsch Female',
    label: 'voice-deutsch-female',
  },
  {
    documentation:
      '',
    insertText: 'Deutsch Male',
    label: 'voice-deutsch-male',
  },
  {
    documentation:
      '',
    insertText: 'Deutsch Female',
    label: 'voice-german-female',
  },
  {
    documentation:
      '',
    insertText: 'Deutsch Male',
    label: 'voice-german-male',
  },
  {
    documentation:
      '',
    insertText: 'Dutch Female',
    label: 'voice-dutch-female',
  },
  {
    documentation:
      '',
    insertText: 'Dutch Male',
    label: 'voice-dutch-male',
  },
  {
    documentation:
      '',
    insertText: 'Filipino Female',
    label: 'voice-filipino-female',
  },
  {
    documentation:
      '',
    insertText: 'Filipino Male',
    label: 'voice-filipino-male',
  },
  {
    documentation:
      '',
    insertText: 'Finnish Female',
    label: 'voice-finnish-female',
  },
  {
    documentation:
      '',
    insertText: 'Finnish Male',
    label: 'voice-finnisch-male',
  },
  {
    documentation:
      '',
    insertText: 'French Canadian Female',
    label: 'voice-french-vanadian-female',
  },
  {
    documentation:
      '',
    insertText: 'French Male',
    label: 'voice-french-canadian-male',
  },
  {
    documentation:
      '',
    insertText: 'French Female',
    label: 'voice-french-female',
  },
  {
    documentation:
      '',
    insertText: 'French Male',
    label: 'voice-french-male',
  },
  {
    documentation:
      '',
    insertText: 'Greek Female',
    label: 'voice-greek-female',
  },
  {
    documentation:
      '',
    insertText: 'Greek Male',
    label: 'voice-greek-male',
  },
  {
    documentation:
      '',
    insertText: 'Hindi Female',
    label: 'voice-hindi-female',
  },
  {
    documentation:
      '',
    insertText: 'Hindi Male',
    label: 'voice-hindi-male',
  },
  {
    documentation:
      '',
    insertText: 'Hungarian Female',
    label: 'voice-hungarian-female',
  },
  {
    documentation:
      '',
    insertText: 'Hungarian Male',
    label: 'voice-hungarian-male',
  },
  {
    documentation:
      '',
    insertText: 'Indonesian Female',
    label: 'voice-indonesian-female',
  },
  {
    documentation:
      '',
    insertText: 'Indonesian Male',
    label: 'voice-indonesian-male',
  },
  {
    documentation:
      '',
    insertText: 'Italian Female',
    label: 'voice-italian-female',
  },
  {
    documentation:
      '',
    insertText: 'Italian Male',
    label: 'voice-italian-male',
  },
  {
    documentation:
      '',
    insertText: 'Japanese Female',
    label: 'voice-japanese-female',
  },
  {
    documentation:
      '',
    insertText: 'Japanese Male',
    label: 'voice-japanese-male',
  },
  {
    documentation:
      '',
    insertText: 'Korean Female',
    label: 'voice-korean-female',
  },
  {
    documentation:
      '',
    insertText: 'Korean Male',
    label: 'voice-korean-male',
  },
  {
    documentation:
      '',
    insertText: 'Latin Female',
    label: 'voice-latin-female',
  },
  {
    documentation:
      '',
    insertText: 'Latin Male',
    label: 'voice-latin-male',
  },
  {
    documentation:
      '',
    insertText: 'Norwegian Female',
    label: 'voice-norwegian-female',
  },
  {
    documentation:
      '',
    insertText: 'Norwegian Male',
    label: 'voice-norwegian-male',
  },
  {
    documentation:
      '',
    insertText: 'Polish Female',
    label: 'voice-polish-female',
  },
  {
    documentation:
      '',
    insertText: 'Polish Male',
    label: 'voice-polish-male',
  },
  {
    documentation:
      '',
    insertText: 'Portuguese Female',
    label: 'voice-portuguese-female',
  },
  {
    documentation:
      '',
    insertText: 'Portuguese Male',
    label: 'voice-portuguese-male',
  },
  {
    documentation:
      '',
    insertText: 'Romanian Female',
    label: 'voice-romanian-female',
  },
  {
    documentation:
      '',
    insertText: 'Romanian Male',
    label: 'voice-romanian-male',
  },
  {
    documentation:
      '',
    insertText: 'Russian Female',
    label: 'voice-russian-female',
  },
  {
    documentation:
      '',
    insertText: 'Russian Male',
    label: 'voice-russian-male',
  },
  {
    documentation:
      '',
    insertText: 'Slovak Female',
    label: 'voice-slovak-female',
  },
  {
    documentation:
      '',
    insertText: 'Slovak Male',
    label: 'voice-slovak-male',
  },
  {
    documentation:
      '',
    insertText: 'Spanish Female',
    label: 'voice-spanish-female',
  },
  {
    documentation:
      '',
    insertText: 'Spanish Male',
    label: 'voice-spanish-male',
  },
  {
    documentation:
      '',
    insertText: 'Spanish Latin American Female',
    label: 'voice-spanish-latin-america-female',
  },
  {
    documentation:
      '',
    insertText: 'Spanish Latin American Male',
    label: 'voice-spanish-latin-america-male',
  },
  {
    documentation:
      '',
    insertText: 'Swedish Female',
    label: 'voice-swedish-female',
  },
  {
    documentation:
      '',
    insertText: 'Swedish Male',
    label: 'voice-swedish-male',
  },
  {
    documentation:
      '',
    insertText: 'Tamil Male',
    label: 'voice-tamil-male',
  },
  {
    documentation:
      '',
    insertText: 'Thai Female',
    label: 'voice-tamil-female',
  },
  {
    documentation:
      '',
    insertText: 'Thai Male',
    label: 'voice-thai-male',
  },
  {
    documentation:
      '',
    insertText: 'Turkish Female',
    label: 'voice-turkish-female',
  },
  {
    documentation:
      '',
    insertText: 'Turkish Male',
    label: 'voice-turkish-male',
  },
  {
    documentation:
      '',
    insertText: 'Vietnamese Female',
    label: 'voice-vietnamese-female',
  },
  {
    documentation:
      '',
    insertText: 'Vietnamese Male',
    label: 'voice-vietnamese-male',
  },
  {
    documentation:
      '',
    insertText: 'Afrikaans Male',
    label: 'voice-afrikaans-male',
  },
  {
    documentation:
      '',
    insertText: 'Albanian Male',
    label: 'voice-albanian-male',
  },
  {
    documentation:
      '',
    insertText: 'Bosnian Male',
    label: 'voice-bosnian-male',
  },
  {
    documentation:
      '',
    insertText: 'Catalan Male',
    label: 'voice-catalan-male',
  },
  {
    documentation:
      '',
    insertText: 'Croatian Male',
    label: 'voice-croatian-male',
  },
  {
    documentation:
      '',
    insertText: 'Esperanto Male',
    label: 'voice-esperanto-male',
  },
  {
    documentation:
      '',
    insertText: 'Estonian Male',
    label: 'voice-estonian-male',
  },
  {
    documentation:
      '',
    insertText: 'Icelandic Male',
    label: 'voice-icelandic-male',
  },
  {
    documentation:
      '',
    insertText: 'Latvian Male',
    label: 'voice-latvian-male',
  },
  {
    documentation:
      '',
    insertText: 'Macedonian Male',
    label: 'voice-macedonian-male',
  },
  {
    documentation:
      '',
    insertText: 'Moldavian Female',
    label: 'voice-moldavian-female',
  },
  {
    documentation:
      '',
    insertText: 'Moldavian Male',
    label: 'voice-moldavian-male',
  },
  {
    documentation:
      '',
    insertText: 'Montenegrin Male',
    label: 'voice-montenegrin-male',
  },
  {
    documentation:
      '',
    insertText: 'Nepali',
    label: 'voice-nepali',
  },
  {
    documentation:
      '',
    insertText: 'Sinhala',
    label: 'voice-sinhala',
  },
  {
    documentation:
      '',
    insertText: 'Serbian Male',
    label: 'voice-serbian-male',
  },
  {
    documentation:
      '',
    insertText: 'Serbo-Croatian Male',
    label: 'voice-serbo-croatian-male',
  },
  {
    documentation:
      '',
    insertText: 'Swahili Male',
    label: 'voice-swahili-male',
  },
  {
    documentation:
      '',
    insertText: 'Ukrainian Female',
    label: 'voice-ukrainian-female',
  },
  {
    documentation:
      '',
    insertText: 'Welsh Male',
    label: 'voice-welsh-male',
  },
  {
    documentation:
      "Las encuestas se definen de forma similar a los cuestionarios usando corchetes ([]). Una encuesta de texto se define con grupos de tres guiones bajos (___) encerrados entre dobles corchetes. El número de guiones bajos define el número de líneas que el usuario tiene que rellenar.\n\nEjemplo:\n\n  Una encuesta de texto de una línea:\n\n    [[___]]\n\n  Una encuesta de texto de dos líneas:\n\n    [[___ ___]]\n\n  Y una de seis líneas:\n\n    [[___ ___ ___ ___ ___ ___ ]]",
    insertText: '[[___ ___]]',
    label: 'lia-survey-text',
  },
  {
    documentation:
      "La definición es similar a un cuestionario de opción única, pero en lugar de una X hay que poner números entre paréntesis o nombres de variables. No tienen que estar ordenados y la cantidad también es variable.\n\nEjemplo:\n\n  Elige entre distintas opciones:\n\n    [(1)] opción 1\n    [(2)] opción 2\n    [(0)] opción 3\n\n  ¿Cuál es tu color favorito?\n\n    [(rojo)]  ¿rojo?\n    [(azul)]  ¿azul?\n    [(verde)] ¿verde?",
    insertText: '[(1)] option 1\n[(2)] option 2\n[(3)] option 3',
    label: 'lia-survey-single-choice',
  },
  {
    documentation:
      "La definición es similar a un cuestionario de opción múltiple, pero en lugar de una X hay que poner números entre corchetes o nombres de variables. No tienen que estar ordenados y la cantidad también es variable.\n\nEjemplo:\n\n  Elige tantas opciones como quieras:\n\n    [[1]] opción 1\n    [[2]] opción 2\n    [[0]] opción 0\n\n  Marca todos los colores que te gusten:\n\n    [[rojo]]   ¿rojo?\n    [[azul]]   ¿azul?\n    [[verde]]  ¿verde?\n    [[ninguno]]  Ninguno de estos...",
    insertText: '[[1]] option 1\n[[2]] option 2\n[[3]] option 3',
    label: 'lia-survey-multiple-choice',
  },
  {
    documentation:
      "Una lista de encuestas de opción única se puede definir como se muestra abajo. Hay que poner números entre paréntesis o variables. No tienen que estar ordenados y la cantidad también es variable.\n\nEjemplo:\n\n  Pon nota:\n\n      [(-1)(0)(1)]\n      [          ] ¿LiaScript es genial?\n      [          ] ¿Lo usarías para hacer **cursos** en línea?\n      [          ] ¿Lo usarías para **encuestas** en línea?\n\n  ¿Cuál es tu opinión?\n\n      [(de acuerdo)(indeciso)(quizá no tanto)]\n      [                                      ] ¿LiaScript es genial?\n      [                                      ] ¿Lo usarías para hacer **cursos** en línea?\n      [                                      ] ¿Lo usarías para **encuestas** en línea?",
    insertText:
      '[(0)(1)(2)]\n[         ] text\n[         ] text\n[         ] text',
    label: 'lia-survey-single-choice-matrix',
  },
  {
    documentation:
      "Una lista de encuestas de opción múltiple se puede definir como se muestra abajo. Hay que poner números entre corchetes o nombres de variables. No tienen que estar ordenados y la cantidad también es variable.\n\nEjemplo:\n\n  Pon nota:\n\n      [[-1][0][1]]\n      [          ] ¿LiaScript es genial?\n      [          ] ¿Lo usarías para hacer **cursos** en línea?\n      [          ] ¿Lo usarías para **encuestas** en línea?\n\n  ¿Cuál es tu opinión?\n\n      [[de acuerdo][indeciso][quizá no tanto]]\n      [                                      ] ¿LiaScript es genial?\n      [                                      ] ¿Lo usarías para hacer **cursos** en línea?\n      [                                      ] ¿Lo usarías para **encuestas** en línea?",
    insertText:
      '[[0][1][2]]\n[         ] text\n[         ] text\n[         ] text',
    label: 'lia-survey-multiple-choice-matrix',
  },
  {
    documentation:
      "Debe haber al menos 3 guiones separando cada celda de la cabecera. Las celdas se separan con barras verticales (|) y no hace falta que el Markdown en bruto quede bien alineado. Los guiones (-) separan la cabecera del cuerpo de la tabla, y los dos puntos alinean las columnas.\n\nEjemplo:\n\n| Las tablas    | están         | Geniales |\n| ------------- |:-------------:| --------:|\n| la columna 3  | está a la derecha | $1600 |\n| la columna 2  | está centrada |    $12 |\n| las rayas de cebra | molan  |     $1 |",
    insertText: '| Header     |\n| :--------- |\n| Item       |',
    label: 'lia-table-1',
  },
  {
    documentation:
      "Debe haber al menos 3 guiones separando cada celda de la cabecera. Las celdas se separan con barras verticales (|) y no hace falta que el Markdown en bruto quede bien alineado. Los guiones (-) separan la cabecera del cuerpo de la tabla, y los dos puntos alinean las columnas.\n\nEjemplo:\n\n| Las tablas    | están         | Geniales |\n| ------------- |:-------------:| --------:|\n| la columna 3  | está a la derecha | $1600 |\n| la columna 2  | está centrada |    $12 |\n| las rayas de cebra | molan  |     $1 |",
    insertText:
      '| Header 1   | Header 2   |\n| :--------- | :--------- |\n| Item 1     | Item 2     |',
    label: 'lia-table-2',
  },
  {
    documentation:
      "Debe haber al menos 3 guiones separando cada celda de la cabecera. Las celdas se separan con barras verticales (|) y no hace falta que el Markdown en bruto quede bien alineado. Los guiones (-) separan la cabecera del cuerpo de la tabla, y los dos puntos alinean las columnas.\n\nEjemplo:\n\n| Las tablas    | están         | Geniales |\n| ------------- |:-------------:| --------:|\n| la columna 3  | está a la derecha | $1600 |\n| la columna 2  | está centrada |    $12 |\n| las rayas de cebra | molan  |     $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   |\n| :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     |',
    label: 'lia-table-3',
  },
  {
    documentation:
      "Debe haber al menos 3 guiones separando cada celda de la cabecera. Las celdas se separan con barras verticales (|) y no hace falta que el Markdown en bruto quede bien alineado. Los guiones (-) separan la cabecera del cuerpo de la tabla, y los dos puntos alinean las columnas.\n\nEjemplo:\n\n| Las tablas    | están         | Geniales |\n| ------------- |:-------------:| --------:|\n| la columna 3  | está a la derecha | $1600 |\n| la columna 2  | está centrada |    $12 |\n| las rayas de cebra | molan  |     $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   | Header 4   |\n| :--------- | :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     | Item 4     |',
    label: 'lia-table-4',
  },
  {
    documentation:
      "Debe haber al menos 3 guiones separando cada celda de la cabecera. Las celdas se separan con barras verticales (|) y no hace falta que el Markdown en bruto quede bien alineado. Los guiones (-) separan la cabecera del cuerpo de la tabla, y los dos puntos alinean las columnas.\n\nEjemplo:\n\n| Las tablas    | están         | Geniales |\n| ------------- |:-------------:| --------:|\n| la columna 3  | está a la derecha | $1600 |\n| la columna 2  | está centrada |    $12 |\n| las rayas de cebra | molan  |     $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   | Header 4   | Header 5   |\n| :--------- | :--------- | :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     | Item 4     | Item 5     |',
    label: 'lia-table-5',
  },
  {
    documentation:
      "Debe haber al menos 3 guiones separando cada celda de la cabecera. Las celdas se separan con barras verticales (|) y no hace falta que el Markdown en bruto quede bien alineado. Los guiones (-) separan la cabecera del cuerpo de la tabla, y los dos puntos alinean las columnas.\n\nEjemplo:\n\n| Las tablas    | están         | Geniales |\n| ------------- |:-------------:| --------:|\n| la columna 3  | está a la derecha | $1600 |\n| la columna 2  | está centrada |    $12 |\n| las rayas de cebra | molan  |     $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   | Header 4   | Header 5   | Header 6   |\n| :--------- | :--------- | :--------- | :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     | Item 4     | Item 5     | Item 6     |',
    label: 'lia-table-6',
  },
  {
    documentation:
      "Debe haber al menos 3 guiones separando cada celda de la cabecera. Las celdas se separan con barras verticales (|) y no hace falta que el Markdown en bruto quede bien alineado. Los guiones (-) separan la cabecera del cuerpo de la tabla, y los dos puntos alinean las columnas.\n\nEjemplo:\n\n| Las tablas    | están         | Geniales |\n| ------------- |:-------------:| --------:|\n| la columna 3  | está a la derecha | $1600 |\n| la columna 2  | está centrada |    $12 |\n| las rayas de cebra | molan  |     $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   | Header 4   | Header 5   | Header 6   | Header 7   |\n| :--------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     | Item 4     | Item 5     | Item 6     | Item 7     |',
    label: 'lia-table-7',
  },
  {
    documentation:
      "Debe haber al menos 3 guiones separando cada celda de la cabecera. Las celdas se separan con barras verticales (|) y no hace falta que el Markdown en bruto quede bien alineado. Los guiones (-) separan la cabecera del cuerpo de la tabla, y los dos puntos alinean las columnas.\n\nEjemplo:\n\n| Las tablas    | están         | Geniales |\n| ------------- |:-------------:| --------:|\n| la columna 3  | está a la derecha | $1600 |\n| la columna 2  | está centrada |    $12 |\n| las rayas de cebra | molan  |     $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   | Header 4   | Header 5   | Header 6   | Header 7   | Header 8   |\n| :--------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     | Item 4     | Item 5     | Item 6     | Item 7     | Item 8     |',
    label: 'lia-table-8',
  },
  {
    documentation:
      "Debe haber al menos 3 guiones separando cada celda de la cabecera. Las celdas se separan con barras verticales (|) y no hace falta que el Markdown en bruto quede bien alineado. Los guiones (-) separan la cabecera del cuerpo de la tabla, y los dos puntos alinean las columnas.\n\nEjemplo:\n\n| Las tablas    | están         | Geniales |\n| ------------- |:-------------:| --------:|\n| la columna 3  | está a la derecha | $1600 |\n| la columna 2  | está centrada |    $12 |\n| las rayas de cebra | molan  |     $1 |",
    insertText:
      '| Header 1   | Header 2   | Header 3   | Header 4   | Header 5   | Header 6   | Header 7   | Header 8   | Header 9   |\n| :--------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- |\n| Item 1     | Item 2     | Item 3     | Item 4     | Item 5     | Item 6     | Item 7     | Item 8     | Item 9     |',
    label: 'lia-table-9',
  },
  {
    documentation:
      "Puedes definir el título del diagrama de tu documento con el parámetro data-title; solo es visible si cambias al modo diagrama.\n\nEjemplo:\n  <!--\n  data-title=\"Gasto público en educación\"\n  data-xlabel=\"año\"\n  data-ylabel=\"% del PIB\"\n  -->\n  | Año  | Finlandia | USA | Alemania |   China |\n  | ---- | ---------:| ---:| --------:| -------:|\n  | 1995 |   6.80942 |     |  4.42079 | 1.84192 |\n  | 1996 |   6.86052 |     |  4.48319 | 1.85338 |\n  | ...  |       ... | ... |      ... |     ... |",
    insertText: '<!-- data-title="title" -->',
    label: 'lia-table-diagram-title',
  },
  {
    documentation:
      "Puedes sobrescribir la etiqueta del eje x del diagrama con el parámetro data-xlabel; solo es visible si cambias al modo diagrama.\n\nEjemplo:\n  <!--\n  data-title=\"Gasto público en educación\"\n  data-xlabel=\"año\"\n  data-ylabel=\"% del PIB\"\n  -->\n  | Año  | Finlandia | USA | Alemania |   China |\n  | ---- | ---------:| ---:| --------:| -------:|\n  | 1995 |   6.80942 |     |  4.42079 | 1.84192 |\n  | 1996 |   6.86052 |     |  4.48319 | 1.85338 |\n  | ...  |       ... | ... |      ... |     ... |",
    insertText: '<!-- data-xlabel="title" -->',
    label: 'lia-table-diagram-xlabel',
  },
  {
    documentation:
      "Puedes sobrescribir la etiqueta del eje y del diagrama con el parámetro data-ylabel; solo es visible si cambias al modo diagrama.\n\nEjemplo:\n  <!--\n  data-title=\"Gasto público en educación\"\n  data-xlabel=\"año\"\n  data-ylabel=\"% del PIB\"\n  -->\n  | Año  | Finlandia | USA | Alemania |   China |\n  | ---- | ---------:| ---:| --------:| -------:|\n  | 1995 |   6.80942 |     |  4.42079 | 1.84192 |\n  | 1996 |   6.86052 |     |  4.48319 | 1.85338 |\n  | ...  |       ... | ... |      ... |     ... |",
    insertText: '<!-- data-ylabel="title" -->',
    label: 'lia-table-diagram-ylabel',
  },
  {
    documentation:
      "Puedes forzar la visualización de un tipo concreto, aunque la estructura de tu tabla sugiera otra cosa.\nLos tipos de datos disponibles son: lineplot, scatterplot, boxplot, barchart, radar, piechart, map, heatmap, parallel, graph, sankey y none.\nSi no quieres mostrar las tablas como diagramas, también puedes usar data-type=\"None\" y solo será visible la tabla.\n\nEjemplo:\n  <!-- data-type=\"pie\" -->\n  | Año  | Finlandia | USA | Alemania |   China |\n  | ---- | ---------:| ---:| --------:| -------:|\n  | 1995 |   6.80942 |     |  4.42079 | 1.84192 |\n  | 1996 |   6.86052 |     |  4.48319 | 1.85338 |\n  | ...  |       ... | ... |      ... |     ... |",
    insertText: '<!-- data-type="type" -->',
    label: 'lia-table-diagram-type',
  },
  {
    documentation:
      "Si la primera columna contiene números (sin repetir) al igual que las demás columnas, se usan gráficos de líneas como representación por defecto; no hace falta una etiqueta especial. Si no es el caso, puedes aplicar esta etiqueta para forzar la visualización como gráfico de líneas.\n\nEjemplo:\n  <!-- data-type=\"lineplot\" -->\n  | x's |  algunas y's |    dist |\n  | --- |:------------:| -------:|\n  | 1   |      1 $    | 16 $km$ |\n  | 2.2 |      2 $    | 12 $km$ |\n  | 3.3 |      5 $    |  1 $km$ |\n  | 4   |  -12.333 $ |         |",
    insertText: '<!-- data-type="lineplot" -->',
    label: 'lia-table-diagram-lineplot',
  },
  {
    documentation:
      "Si la primera columna contiene números repetidos, se usan gráficos de dispersión como representación por defecto si se detectan más números; no hace falta una etiqueta especial.\n\nEjemplo:\n  <!-- data-type=\"scatterplot\" -->\n  | x's |  algunas y's |                              dist |\n  | --- |:------------:| ------------------------------------:|\n  | 1   |      1 $    |                              16 $km$ |\n  | 2.2 |      2 $    |                              12 $km$ |\n  | 3.3 |      5 $    |                               1 $km$ |\n  | 4   |  -12.333 $ | -555$km$ <-- esto se ignorará |\n  | 4   |              |                                     1 |",
    insertText: '<!-- data-type="scatterplot" -->',
    label: 'lia-table-diagram-scatterplot',
  },
  {
    documentation:
      "A diferencia de un gráfico de líneas o de dispersión, si la primera columna contiene al menos una entrada que no se puede interpretar como número, se puede representar como un gráfico de barras, que funciona perfectamente con el siguiente ejemplo. Si los valores máximos de las columnas no difieren demasiado, este conjunto de datos se representa como un gráfico de barras; si no, podrías acabar viendo solo una barra enorme mientras las demás son indistinguibles. En ese caso se eligen otras visualizaciones.\n\nEjemplo:\n  <!-- data-type=\"barchart\" -->\n  | Animal           | peso en kg | Esperanza de vida | Mitogen |\n  | ---------------- | ----------:| -----------------:| -------:|\n  | Ratón            |      0.028 |                 2 |      95 |\n  | Ardilla voladora |      0.085 |                15 |      50 |\n  | Murciélago       |      0.020 |                30 |      10 |\n  | Oveja            |         90 |                12 |      95 |\n  | Humano           |         68 |                70 |      10 |",
    insertText: '<!-- data-type="barchart" -->',
    label: 'lia-table-diagram-barchart',
  },
  {
    documentation:
      "Si tienes una representación tipo gráfico de dispersión pero quieres usar esos datos como datos principales de tu diagrama de cajas, puedes cambiar manualmente el tipo de visualización a BoxPlot simplemente añadiendo el siguiente atributo a la cabecera de tu tabla, como se muestra en el fragmento. Las columnas se tratan entonces como conjuntos de datos y se visualizan en consecuencia.\n\nEjemplo:\n  <!-- data-type=\"boxplot\" -->\n  | Aleatorio |  I |  II |\n  | ---------:| ---:| ---:|\n  |       5.0 | 1.0 |   5 |\n  |       6.0 | 1.0 |   4 |\n  |       7.0 | 1.0 |   5 |\n  |       8.0 | 1.0 |   5 |\n  |       9.0 | 1.0 |   4 |\n  |      10.0 | 1.0 |   5 |\n  |       5.0 | 10.0 |  7 |\n  |       6.0 | 10.0 |  8 |\n  |       7.0 | 10.0 |  7 |\n  |       8.0 | 10.0 |  7 |\n  |       9.0 | 10.0 |  8 |",
    insertText: '<!-- data-type="boxplot" -->',
    label: 'lia-table-diagram-boxplot',
  },
  {
    documentation:
      "Si por ejemplo se quitan los humanos y las ovejas del conjunto de datos, el peso en kg no sería visible en un gráfico de barras. En este caso se selecciona un Radar, que permite analizar los datos visualmente con distintos ejes \"y\".\n\nEjemplo:\n  <!-- data-type=\"radar\" -->\n  | Animal           | peso en kg | Esperanza de vida | Mitogen |\n  | ---------------- | ----------:| -----------------:| -------:|\n  | Ratón            |      0.028 |                02 |      95 |\n  | Ardilla voladora |      0.085 |                15 |      50 |\n  | Murciélago       |      0.020 |                30 |      10 |",
    insertText: '<!-- data-type="radar" -->',
    label: 'lia-table-diagram-radar',
  },
  {
    documentation:
      "Si tienes una tabla con una sola fila llena de números, se presentará automáticamente como un gráfico circular. La cabecera representa las categorías y el cuerpo las cantidades.\n\nEjemplo:\n  | Clásica | Country | Reggae | Hip-Hop | Hard-Rock | Samba |\n  | -------:| -------:| ------:| -------:| ---------:| -----:|\n  |      50 |      50 |    100 |     200 |       350 |   250 |\n\n  <!-- data-type=\"PieChart\" -->\n  | Estilo musical | Clásica | Country | Reggae | Hip-Hop | Hard-Rock | Samba |\n  |:-------------- | -------:| -------:| ------:| -------:| ---------:| -----:|\n  | 1994           |      50 |      50 |    100 |     200 |       350 |   250 |\n  | 2014           |      20 |      30 |    100 |     220 |       400 |   230 |\n  | demo 2034      |       5 |      12 |     98 |     293 |       345 |    32 |",
    insertText: '<!-- data-type="piechart" -->',
    label: 'lia-table-diagram-piechart',
  },
  {
    documentation:
      "Un mapa es similar a un gráfico de barras en cuanto a la estructura de la tabla, pero si quieres representar tus datos en un mapa real, tendrás que añadir un archivo geojson que contenga los datos relevantes sobre la forma de tus países, estados, ciudades, etc. La primera columna tiene que coincidir con los nombres de tus objetos en los datos geojson, que se adjuntan a tu tabla de la siguiente manera:\n\nEjemplo:\n  <!-- data-type=\"map\" data-src=\"https://code.highcharts.com/mapdata/custom/europe.geo.json\" -->\n  | País                   | porcentaje |\n  | ---------------------- | ---------- |\n  | Albania                | 73.5       |\n  | Andorra                | 98.9       |\n  | Armenia                | 72.4       |\n  | ...                    |            |",
    insertText: '<!-- data-type="map" -->',
    label: 'lia-table-diagram-map',
  },
  {
    documentation:
      "Otro tipo de visualización es el mapa de calor (HeatMap), que se usa si la cabecera de la tabla y la primera columna solo contienen números, es decir, coordenadas. Si quieres usar categorías en lugar de coordenadas numéricas, puedes forzar el uso de un mapa de calor con el comentario siguiente:\n\nEjemplo:\n  <!--\n  data-type=\"heatmap\"\n  data-title=\"Temperatura media de Seattle en Fahrenheit\"\n  data-show\n  -->\n    | Seattle |  Ene |  Feb |  Mar |  Abr |  May |  ... |\n    | -------:| ----:| ----:| ----:| ----:| ----:| ----:|\n    |       0 | 40.7 | 41.5 | 43.6 | 46.6 | 51.4 |  ... |\n    |       2 |  ... |  ... |  ... |  ... |  ... |  ... |",
    insertText: '<!-- data-type="heatmap" -->',
    label: 'lia-table-diagram-heatmap',
  },
  {
    documentation:
      "Una representación en paralelo entra en juego cuando simplemente hay demasiadas categorías, de modo que tu gráfico de barras contendría solo líneas finas.\n\nEjemplo:\n  <!-- data-type=\"parallel\" -->\n  | País                   | Crecimiento PIB (%) | Nacimientos por mujer | Esperanza de vida ...\n  | ---------------------- | -------------------:| ---------------------:| ---------------------\n  | Albania                |                 7.5 |                 1.858 |                 76.63\n  | Andorra                |               3.570 |                 1.260 |                   NaN\n  | Austria                |               2.178 |                 1.414 |                 80.44\n  | ...                    |                 ... |                   ... |                   ...",
    insertText: '<!-- data-type="parallel" -->',
    label: 'lia-table-diagram-parallel',
  },
  {
    documentation:
      "Si la primera columna y la cabecera de la tabla son iguales, el intérprete intenta interpretar el contenido de la tabla como una matriz de adyacencia, que define un grafo. Si esos valores son simétricos respecto a la diagonal, la matriz define un \"grafo no dirigido\".\nEn cambio, si esos valores difieren, el resultado es un \"grafo dirigido\", donde los valores definen la intensidad de la línea.\n\nEjemplo:\n  <!-- data-title=\"Grafo no dirigido\" -->\n  | Grafo |  A  |  B  |  C  |  D  |  E  |\n  |:----- |:---:|:---:|:---:|:---:|:---:|\n  | A     |  0  |  1  |  0  |  1  |  0  |\n  | B     |  1  |  0  |  0  |  1  |  0  |\n  | C     |  0  |  0  |  0  |  0  |  0  |\n  | D     |  1  |  1  |  0  |  0  |  1  |\n  | E     |  0  |  0  |  0  |  1  |  0  |\n\n  <!-- data-title=\"Grafo dirigido\" -->\n  | Grafo |  A  |  B  |  C  |  D  |  E  |\n  |:----- |:---:|:---:|:---:|:---:|:---:|\n  | A     |  0  | 12  |  0  |  1  |  0  |\n  | B     | -22 |  0  |  0  | 0.4 |  0  |\n  | C     |  0  |  0  |  0  |  0  |  0  |\n  | D     |  2  | 12  |  0  |  0  |  1  |\n  | E     |  0  |  0  |  0  |  2  |  0  |",
    insertText: '<!-- data-type="graph" -->',
    label: 'lia-table-diagram-graph',
  },
  {
    documentation:
      "Un diagrama de Sankey es un tipo especial de grafo dirigido que se puede usar para flujos o corrientes de algo, como energía, dinero, etc.\n\nEjemplo:\n  <!-- data-type=\"sankey\" -->\n  | Sankey |  A  |  B  |  C  |  D  |  E  |\n  |:------ |:---:|:---:|:---:|:---:|:---:|\n  | A      |     |  2  |     |     |     |\n  | B      |  3  |     |     |     |     |\n  | C      |  1  |  1  |     |     |     |\n  | D      |     |  1  |  1  |     |     |\n  | E      |  2  |  1  |  1  |  1  |     |",
    insertText: '<!-- data-type="sankey" -->',
    label: 'lia-table-diagram-sankey',
  },
  {
    documentation:
      "Simplemente data-type=\"none\" para evitar cualquier tipo de visualización.\n\nEjemplo:\n  <!-- data-type=\"none\" -->\n  | Sankey |  A  |  B  |  C  |  D  |  E  |\n  |:------ |:---:|:---:|:---:|:---:|:---:|\n  | A      |     |  2  |     |     |     |\n  | B      |  3  |     |     |     |     |\n  | C      |  1  |  1  |     |     |     |\n  | D      |     |  1  |  1  |     |     |\n  | E      |  2  |  1  |  1  |  1  |     |",
    insertText: '<!-- data-type="none" -->',
    label: 'lia-table-diagram-none',
  },
  {
    documentation:
      "Simplemente añade este atributo o ponlo a true (data-show=\"true\") si quieres visualizar tus datos inmediatamente, sin necesidad de pulsar el botón de cambio. Tus usuarios aún podrán cambiar a la representación en tabla.\n\nEjemplo:\n  <!-- data-show -->\n  | Sankey |  A  |  B  |  C  |  D  |  E  |\n  |:------ |:---:|:---:|:---:|:---:|:---:|\n  | A      |     |  2  |     |     |     |\n  | B      |  3  |     |     |     |     |\n  | C      |  1  |  1  |     |     |     |\n  | D      |     |  1  |  1  |     |     |\n  | E      |  2  |  1  |  1  |  1  |     |",
    insertText: '<!-- data-show -->',
    label: 'lia-table-diagram-show',
  },
  {
    documentation:
      "Como en el sentido matemático, pon este atributo o dale valor true (data-transpose=\"true\") si quieres intercambiar filas y columnas. Una ventaja es que puedes, por ejemplo, usar PieChart y dejar que tu tabla crezca verticalmente en lugar de tener un monstruo horizontal.\n\nEjemplo:\n  <!-- data-transpose -->\n  | Estilo musical {0-1}{1994} {1}{2014} |  Valoración del alumnado |\n  |:------------------------------------ | ------------------------:|\n  | Clásica                              |        {0-1}{50} {1}{20} |\n  | Country                              |        {0-1}{50} {1}{30} |\n  | Reggae                               |                      100 |\n  | Hip-Hop                              |      {0-1}{200} {1}{220} |\n  | Hard-Rock                            |      {0-1}{350} {1}{400} |\n  | Samba                                |      {0-1}{250} {1}{230} |",
    insertText: '<!-- data-transpose -->',
    label: 'lia-table-diagram-transpose',
  },
  {
    documentation:
      "Actualmente este atributo se usa para referirse a tus datos geojson si usas la representación `data-type=\"Map\"`, pero podría cambiar en el futuro para cargar y visualizar datos directamente, como csv.\nSi usas archivos geojson de sitios web externos como: https://code.highcharts.com/mapdata/\npuede ser útil usar anycors si los datos no se pueden visualizar por restricciones de CORS:\n\ndata-src=\"https://cors-anywhere.herokuapp.com/https://code.highcharts.com/mapdata/custom/europe.geo.json\"\n\nEjemplo:\n  <!-- data-type=\"map\" data-src=\"https://code.highcharts.com/mapdata/custom/europe.geo.json\" -->\n  | País                   | porcentaje |\n  | ---------------------- | ---------- |\n  | Albania                | 73.5       |\n  | Andorra                | 98.9       |\n  | Armenia                | 72.4       |\n  | ...                    |            |",
    insertText: '<!-- data-src="url" -->',
    label: 'lia-table-diagram-source',
  },
  {
    documentation:
      "Usa la sintaxis de tareas de GitHub-flavoured Markdown. Si la versión del curso es mayor que 1, los estados de las tareas se guardarán de forma persistente.\n\nPuedes definir tantas tareas como quieras.\n\nEjemplo:\n\n  -[ ] Esto no está marcado por defecto\n  -[X] Esto sí está marcado por defecto",
    insertText: '-[X] line with Markdown',
    label: 'lia-task',
  },
  {
    documentation:
      "Usa la sintaxis de tareas de GitHub-flavoured Markdown junto con código JavaScript que se ejecuta con cada entrada.\n\nPuedes definir tantas tareas como quieras.\n\nEjemplo:\n\n  - [X] Biología\n  - [ ] Química\n  <script output=\"tasks\">\"@input\"</script>\n\n  <script style=\"width: 100%\">\n  try {\n    let task = @input(`tasks`) // interpreta el output=\"tasks\"\n\n    if(task[0]) {\n      send.liascript(`## Biología\n\n  Oye, genial, quieres aprender algo de Biología.\n\n  * recurso 1\n  * recurso 2\n\n  La entrada de las tareas de arriba fue: `[${task}]``)\n    } else send.clear()\n  } catch(e) { }\n  </script>",
    insertText:
      '-[X] task-definition\n-[X] task-definition\n<script>\n  js-code\n</script>',
    label: 'lia-task-js',
  },
  {
    documentation:
      '',
    insertText: '_italic_',
    label: 'lia-text-italic',
  },
  {
    documentation:
      '',
    insertText: '*italic*',
    label: 'lia-text-italic2',
  },
  {
    documentation:
      '',
    insertText: '__bold__',
    label: 'lia-text-bold',
  },
  {
    documentation:
      '',
    insertText: '**bold**',
    label: 'lia-text-bold2',
  },
  {
    documentation:
      '',
    insertText: '___italic bold___',
    label: 'lia-text-italic-bold',
  },
  {
    documentation:
      '',
    insertText: '***italic bold***',
    label: 'lia-text-italic-bold2',
  },
  {
    documentation:
      '',
    insertText: '~strike~',
    label: 'lia-text-strike',
  },
  {
    documentation:
      '',
    insertText: '~~underline~~',
    label: 'lia-text-underline',
  },
  {
    documentation:
      '',
    insertText: '~~~strike underline~~~',
    label: 'lia-text-strike-underline',
  },
  {
    documentation:
      '',
    insertText: '^superscript^',
    label: 'lia-text-superscript',
  },
  {
    documentation:
      "Simplemente encierra tu palabra solución entre dobles corchetes y obtendrás un cuestionario de texto bien renderizado.\n\nEjemplo:\n  ¿De qué color es el cielo?\n\n  [[azul]]",
    insertText: '[[solution]]',
    label: 'lia-quiz-text',
  },
  {
    documentation:
      "Si son posibles distintas entradas, puedes añadir una etiqueta script a tu campo de cuestionario. La referencia @input se sustituirá por la cadena de entrada actual del usuario, y el resultado del script tiene que ser true o false.\n\nEjemplo:\n  ¿De qué color es el cielo?\n\n  [[azul]]\n  <script>\n    let input_string = \"@input\";\n    \"AZUL\" == input_string.trim().toUpperCase();\n  </script>",
    insertText:
      '[[solution]]\n<script>\n  // @input will be replace by the user input\n  let input_string = "@input";\n  "solution" == input_string.trim().toLowerCase();\n</script>',
    label: 'lia-quiz-text-js',
  },
  {
    documentation:
      "Crea un campo de selección que contiene varias soluciones distintas, separadas por `|`. Imágenes, fórmulas... todo está permitido; solo la solución correcta tiene que ir entre paréntesis y puede haber varias soluciones correctas.\n\nEjemplo:\n  ¿De qué color es el cielo?\n\n  [[ rojo | (__azul__) | verde | (negro por la noche)]]",
    insertText: '[[option|option]]',
    label: 'lia-quiz-select',
  },
  {
    documentation:
      "Compón tus cuestionarios de opción única con muchas líneas en el siguiente formato:\n\nEjemplo:\n  Esto es un cuestionario de opción única con tres opciones:\n\n    [( )] ¿Añadir tantas líneas como quieras?\n    [(X)] ¡La X marca la única respuesta correcta!\n    [( )] ... Y solo se permite una X.\n\n(Si quieres, también puedes tener varias opciones correctas.)",
    insertText: '[( )] enter your text',
    label: 'lia-quiz-single-choice',
  },
  {
    documentation:
      "Compón tus cuestionarios de opción múltiple con muchas líneas en el siguiente formato:\n\nEjemplo:\n  Esto es un cuestionario de opción múltiple con cuatro opciones:\n\n    [[ ]] ¿Añadir tantas líneas como quieras?\n    [[X]] ¡La X marca las líneas correctas que hay que seleccionar!\n    [[X]] Esto puede ofrecer varias opciones que hay que marcar.\n    [[ ]] Pero también puede consistir en corchetes vacíos.",
    insertText: '[[ ]] enter your text',
    label: 'lia-quiz-multiple-choice',
  },
  {
    documentation:
      "Compón una matriz de cuestionarios con varios cuestionarios de opción única y múltiple por fila. Las cabeceras de columna tienen que ir entre corchetes o paréntesis, según el contenido Markdown que pases. Se permite tener distinto número de opciones por fila.\n\nEjemplo:\n  Esto es un cuestionario de opción múltiple con cuatro opciones:\n    [[:-)] (:-]) (_negrita_)]\n    [ [ ]   [ ]     [X]  ] ¡Solo la X marca la solución correcta!\n    [ [X]   [ ]     [ ]  ] Cuestionarios de opción múltiple y única en una matriz,\n    [ ( )   ( )     (X)  ] pero tienes que ser coherente por fila.\n    [ ( )   ( )     ( )   ( ) ] También se permiten más o menos opciones que las definidas en la cabecera.",
    insertText:
      '[[ ] [ ] [ ]]\n[[ ] [ ] [ ]]  add a line\n[( ) ( ) ( )]  add a line',
    label: 'lia-quiz-matrix-choice',
  },
  {
    documentation:
      "Si un cuestionario puede resultar un poco difícil, puedes añadir pistas directamente después de cualquier tipo de cuestionario, y tantas como quieras. El usuario puede decidir si quiere usarlas simplemente pulsando el signo de interrogación adicional que aparece tras el botón de comprobar.\n\nEjemplo:\n  Esto es un cuestionario de texto con dos pistas:\n\n    [[solución]]\n    [[?]] Esta es la primera pista\n    [[?]] Esta es una segunda pista\n\n  Y un cuestionario de opción múltiple con una pista:\n\n    [[X]] ¡Esto es correcto!\n    [[ ]] ¡Esto es incorrecto!\n    [[?]] ¡Marca la primera opción!",
    insertText: '[[?]] enter your hint',
    label: 'lia-quiz-hint',
  },
  {
    documentation:
      "Si el usuario resuelve un cuestionario o pulsa resolver, la respuesta correcta se revela automáticamente, pero puedes añadir información adicional a tu solución añadiendo dos líneas al final de tu cuestionario, que pueden contener varios bloques Markdown como explicación.\n\nEjemplo:\n  ¿De qué color es el cielo?\n\n    [[azul]]\n    [[?]] ¡Escribe azul!\n    *************************************\n\n    Durante el día el color es azul, si\n    no está nublado. Mira la siguiente\n    imagen...\n\n    ![cielo azul](./img/soleado.jpg)\n\n    *************************************",
    insertText:
      '****************************************\n\nAdd a solution explanation __Markdown__!\n\n****************************************',
    label: 'lia-quiz-solution',
  },
  {
    documentation:
      "En algunos casos excepcionales puede que quieras cambiar la solución correcta, o añadir un contador que revele la respuesta correcta tras un número predefinido de intentos. Simplemente añade una etiqueta script al cuestionario. La cadena @input se sustituye por un entero que representa la entrada actual del usuario:\n\n-1 -> sin selección\n0  -> la primera\n1  -> la segunda\n\nEjemplo:\n\n    [( )] Marca esto...\n    [(X)] ... y no esto\n    <script>\n      // @input se sustituye por un único número\n      // -1 si no hay selección; si no, empieza\n      // por 0.\n      let input_number = @input;\n\n      ${7:if(input_number == 0)\n        true;\n      else\n        false;}\n    </script>",
    insertText:
      '<script>\n  // @input gets replaced by a single number\n  // -1 if no selection otherwise it starts\n  // with 0.\n  let input_number = @input;\n\n  if(input_number == 1)\n    true;\n  else\n    false;\n</script>',
    label: 'lia-quiz-single-js',
  },
  {
    documentation:
      "En algunos casos excepcionales puede que quieras cambiar la solución correcta, añadir un contador o dejar pasar algunas respuestas correctas. Simplemente añade una etiqueta script al cuestionario. Aquí la cadena @input se sustituye por un array de enteros ([0,1,1,0]) que representa la entrada actual del usuario:\n\n0 -> significa marcado\n1 -> representa un campo sin marcar\n\nEjemplo:\n\n  Acierta al menos una...\n\n  [[ ]] Incorrecta.\n  [[X]] Correcta.\n  [[ ]] Incorrecta.\n  [[X]] Correcta.\n  <script>\n    // @input se sustituye por un array en la\n    // forma [0,0,0,1], donde 0 y 1\n    // definen si una casilla está marcada\n    // o no...\n    let input_array = @input;\n    input_array = JSON.stringify(input_array);\n\n    if      (input_array == \"[0,1,0,1]\")  true;\n    else if (input_array == \"[0,1,0,0]\")  true;\n    else if (input_array == \"[0,0,0,1]\")  true;\n    else                                 false;\n  </script>",
    insertText:
      '<script>\n  // @input gets replaced by an array in the\n  // form of [0,0,0,1], whereby 0 and 1\n  // define whether a checkbox is checked\n  // or not...\n  let input_array = @input;\n  input_array = JSON.stringify(input_array);\n\n  if      (input_array == "[0,1,0,1]")  true;\n  else if (input_array == "[0,1,0,0]")  true;\n  else if (input_array == "[0,0,0,1]")  true;\n  else                                 false;\n</script>',
    label: 'lia-quiz-multiple-js',
  },
  {
    documentation:
      "Esto insertará una etiqueta script genérica de la siguiente forma; @input se sustituirá según el contexto actual:\n\n<script>\n  // @input se sustituye por la entrada actual del cuestionario.\n  // En caso de:\n  // * entrada de texto -> cadena, que hay que encerrar entre (\")\n  // * opción única -> int (-1 si no hay nada seleccionado)\n  // * opción múltiple -> array int (0 sin marcar, 1 marcado)\n  let input = @input;\n\n  true; // si está resuelto; si no, devuelve false\n</script>",
    insertText:
      '<script>\n  // @input gets replaced by the current quiz input.\n  // In case of a:\n  // * text input -> string, that has to be encapsulated with (")\n  // * single choice -> int (-1, if nothing is selected)\n  // * multiple choice -> array int (0 unchecked, 1 checked)\n  let input = @input;\n\n  true; // if solved otherwise return false\n</script>',
    label: 'lia-quiz-js',
  },
  {
    documentation:
      "Inserta el siguiente cuestionario de ejemplo:\n\n  [( )] Esto es incorrecto.\n  [(X)] La única opción correcta.\n  [( )] Sigue sin ser correcta.",
    insertText:
      '[( )] This is wrong.\n[(X)] The only correct option.\n[( )] Still not right.',
    label: 'lia-quiz-single-choice-3',
  },
  {
    documentation:
      "Inserta el siguiente cuestionario de ejemplo:\n\n[[ ]] ¿Añadir tantos elementos como quieras?\n[[X]] ¡La X marca la respuesta correcta!\n[[ ]] ... esto es incorrecto...\n[[X]] ... esto también hay que seleccionarlo...",
    insertText:
      '[[ ]] Add as many elements as you want?\n[[X]] The X marks the correct answer!\n[[ ]] ... this is wrong ...\n[[X]] ... this has to be selected too ...',
    label: 'lia-quiz-multiple-choice-4',
  },
  {
    documentation:
      "En casos muy muy raros puede que quieras algo completamente distinto y analizar otras entradas de HTML o código (pruebas unitarias). En ese caso puedes aplicar esta etiqueta genérica y hacer en JavaScript lo que quieras. El cuestionario se da por resuelto si el script se evalúa a true; no resuelto si da false (todo lo demás se ignora).\n\n*¡Haz clic!*<!-- onclick=\"window['rand'] = Math.random();\" -->\n\n[[!]]\n<script>\n  alert(\"tu valor aleatorio es:\", window['rand']);\n  if(window['rand'] > 0.8)\n    true;\n  else\n    false\n</script>",
    insertText:
      '[[!]]\n<script>\n  // you are free to check anything you want\n  true;\n</script>',
    label: 'lia-quiz-generic-js',
  },
]

export { Snippets }
