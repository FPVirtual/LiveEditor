// Introduction shown in the preview while a course is still empty (and
// inserted by the "Tutorial" toolbar tab). German UI gets the German text,
// every other language the English one.

export const tutorial = `<!--
author:  LiaScript
email:   LiaScript@web.de
comment: A short tour of LiaEdit, the LiaScript editor.

classroom: disable
-->

# Welcome to LiaEdit

Your course is still empty, so here is a short tour.
As soon as you write something on the left and refresh the preview, this introduction disappears.

> **Good to know:**
> Everything you write is stored only in this browser.
> Nothing is sent to a server unless you share or publish it yourself.
> Back up important courses via **Share & export** – as a ZIP, in a folder or on GitHub.

<article>

### 1. Write and refresh

Type Markdown on the left.
The preview does not change with every keystroke: that saves computing power and avoids error messages while code is still incomplete.
Click **Refresh** in the top bar or press <kbd>Ctrl</kbd> + <kbd>S</kbd>.

Try it – copy this example into the editor and refresh:

\`\`\`\` markdown
# My first course

Welcome! This is **LiaScript**.

## A small quiz

What is 2 + 2?

- [( )] 3
- [(X)] 4
- [( )] 5

## Code you can run

\`\`\` javascript
console.log("Hello LiaScript!");
\`\`\`
<script>@input</script>
\`\`\`\`

| Shortcut                               | Action                      |
| -------------------------------------- | --------------------------- |
| <kbd>Ctrl</kbd> + <kbd>S</kbd>         | Refresh the preview         |
| <kbd>Ctrl</kbd> + <kbd>Space</kbd>     | Show suggestions            |
| <kbd>Ctrl</kbd> + <kbd>F</kbd>         | Search in the document      |
| <kbd>Tab</kbd> (inside a table)        | Tidy up the table           |
| <kbd>F1</kbd>                          | Open the command palette    |

### 2. Help while typing

You do not have to remember the LiaScript syntax:

- Type \`lia\` to get building blocks such as quizzes, surveys, animations or slides.
- Type \`voice\` to pick a narrator voice for the read-aloud function.
- Type \`hili\` followed by a language to get syntax highlighting for code.

Choose with the arrow keys and insert with <kbd>Tab</kbd> or <kbd>Enter</kbd>.
The most common elements are also buttons in the toolbar above the editor.
The **Tutorial** tab there inserts complete templates.

### 3. Jump between text and preview

- **Preview → text:** double-click an element in the preview, and the editor jumps to its line.
- **Text → preview:** hold <kbd>Ctrl</kbd> and double-click a word in the editor, and the preview opens that slide.

### 4. Files, images and media

The folder symbol at the left edge opens the file panel.
There you can add images, audio, video and further Markdown files.
Refer to them with a relative path, for example \`![Logo](img/logo.png)\`.
The file with the house symbol is the start of your course.

### 5. Work together

The button **Only me** in the top bar shows who is writing.
Switch to **Live – direct** or **Live – via server** and share the link: everyone sees the changes immediately.
Everyone with the link edits the same course.
For a version of your own, use **Make a copy** in the ⋮ menu.

### 6. Share, publish, export

**Share & export** collects everything you can do with your course:

- links for learners – as a GitHub Gist, on Nostr or with the course inside the link,
- syncing with GitHub, GitLab or a folder on your computer,
- a ZIP download and the conversion to SCORM, IMS, PDF or ePub with the LiaScript Exporter.

### Drawing with text

Simple diagrams can be drawn with characters:

\`\`\`\` markdown
\`\`\` ascii
+------+   +------+   +------+
|      |   |      |   |      |
| Idea +-->| Text +-->|Course|
|      |   |      |   |      |
+------+   +------+   +------+
\`\`\`
\`\`\`\`

### Learn more

- Documentation: https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md
- Website and blog: https://liascript.github.io
- Templates: https://github.com/topics/liascript-template
- Published courses: https://github.com/topics/liascript-course
- Source code: https://github.com/liascript
- Videos: https://www.youtube.com/channel/UCyiTe2GkW_u05HSdvUblGYg
- Contact: LiaScript@web.de or the chat at https://gitter.im/LiaScript/community

</article>
`

export const tutorialDe = `<!--
author:   LiaScript
email:    LiaScript@web.de
language: de
comment:  Eine kurze Tour durch LiaEdit, den LiaScript-Editor.

classroom: disable
-->

# Willkommen bei LiaEdit

Dein Kurs ist noch leer, deshalb hier eine kurze Tour.
Sobald du links etwas schreibst und die Vorschau aktualisierst, verschwindet diese Einführung.

> **Gut zu wissen:**
> Alles, was du schreibst, liegt nur in diesem Browser.
> Nichts geht an einen Server, außer du teilst oder veröffentlichst es selbst.
> Sichere wichtige Kurse über **Teilen & Exportieren** – als ZIP, in einem Ordner oder auf GitHub.

<article>

### 1. Schreiben und aktualisieren

Schreibe links Markdown.
Die Vorschau ändert sich nicht bei jedem Tastendruck: Das spart Rechenleistung und vermeidet Fehlermeldungen, solange Code noch unvollständig ist.
Klicke oben auf **Aktualisieren** oder drücke <kbd>Strg</kbd> + <kbd>S</kbd>.

Probier es aus – kopiere dieses Beispiel in den Editor und aktualisiere:

\`\`\`\` markdown
# Mein erster Kurs

Willkommen! Das ist **LiaScript**.

## Ein kleines Quiz

Was ist 2 + 2?

- [( )] 3
- [(X)] 4
- [( )] 5

## Code zum Ausführen

\`\`\` javascript
console.log("Hallo LiaScript!");
\`\`\`
<script>@input</script>
\`\`\`\`

| Tastenkürzel                           | Aktion                        |
| -------------------------------------- | ----------------------------- |
| <kbd>Strg</kbd> + <kbd>S</kbd>         | Vorschau aktualisieren        |
| <kbd>Strg</kbd> + <kbd>Leertaste</kbd> | Vorschläge anzeigen           |
| <kbd>Strg</kbd> + <kbd>F</kbd>         | Im Dokument suchen            |
| <kbd>Tab</kbd> (in einer Tabelle)      | Tabelle ordentlich ausrichten |
| <kbd>F1</kbd>                          | Befehlsübersicht öffnen       |

### 2. Hilfe beim Schreiben

Die LiaScript-Syntax musst du dir nicht merken:

- Tippe \`lia\` für Bausteine wie Quiz, Umfrage, Animation oder Folie.
- Tippe \`voice\` für eine Stimme der Vorlese-Funktion.
- Tippe \`hili\` und eine Sprache für farbigen Programmcode.

Wähle mit den Pfeiltasten und füge mit <kbd>Tab</kbd> oder <kbd>Enter</kbd> ein.
Die häufigsten Elemente gibt es auch als Knöpfe in der Leiste über dem Editor.
Der Reiter **Tutorial** dort fügt komplette Vorlagen ein.

### 3. Zwischen Text und Vorschau springen

- **Vorschau → Text:** Doppelklick auf ein Element in der Vorschau, und der Editor springt zur passenden Zeile.
- **Text → Vorschau:** <kbd>Strg</kbd> halten und doppelt auf ein Wort im Editor klicken, und die Vorschau öffnet diese Folie.

### 4. Dateien, Bilder und Medien

Das Ordner-Symbol am linken Rand öffnet die Dateiliste.
Dort kannst du Bilder, Audio, Video und weitere Markdown-Dateien hinzufügen.
Verweise mit einem relativen Pfad darauf, zum Beispiel \`![Logo](img/logo.png)\`.
Die Datei mit dem Haus-Symbol ist der Anfang deines Kurses.

### 5. Gemeinsam arbeiten

Der Knopf **Nur ich** oben zeigt, wer mitschreibt.
Wechsle zu **Live – direkt** oder **Live – über Server** und teile den Link: Alle sehen die Änderungen sofort.
Alle mit dem Link bearbeiten denselben Kurs.
Für eine eigene Version nimm **Kopie anlegen** im ⋮-Menü.

### 6. Teilen, veröffentlichen, exportieren

**Teilen & Exportieren** sammelt alles, was du mit deinem Kurs machen kannst:

- Links für Lernende – als GitHub Gist, auf Nostr oder mit dem Kurs im Link,
- Abgleich mit GitHub, GitLab oder einem Ordner auf deinem Rechner,
- ZIP-Download und die Umwandlung in SCORM, IMS, PDF oder ePub mit dem LiaScript Exporter.

### Zeichnen mit Text

Einfache Diagramme lassen sich mit Zeichen malen:

\`\`\`\` markdown
\`\`\` ascii
+------+   +------+   +------+
|      |   |      |   |      |
| Idee +-->| Text +-->| Kurs |
|      |   |      |   |      |
+------+   +------+   +------+
\`\`\`
\`\`\`\`

### Mehr erfahren

- Dokumentation: https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md
- Website und Blog: https://liascript.github.io
- Vorlagen: https://github.com/topics/liascript-template
- Veröffentlichte Kurse: https://github.com/topics/liascript-course
- Quellcode: https://github.com/liascript
- Videos: https://www.youtube.com/channel/UCyiTe2GkW_u05HSdvUblGYg
- Kontakt: LiaScript@web.de oder im Chat unter https://gitter.im/LiaScript/community

</article>
`

export const tutorialEs = `<!--
author:   LiaScript
email:    LiaScript@web.de
language: es
comment:  Un breve recorrido por LiaEdit, el editor de LiaScript.

classroom: disable
-->

# Bienvenido a LiaEdit

Tu curso todavía está vacío, así que aquí tienes un breve recorrido.
En cuanto escribas algo a la izquierda y actualices la vista previa, esta introducción desaparecerá.

> **Conviene saber:**
> Todo lo que escribes se guarda únicamente en este navegador.
> Nada se envía a ningún servidor salvo que tú lo compartas o lo publiques.
> Haz copias de seguridad de los cursos importantes desde **Compartir y exportar** – como ZIP, en una carpeta o en GitHub.

<article>

### 1. Escribir y actualizar

Escribe Markdown a la izquierda.
La vista previa no cambia a cada pulsación de tecla: así se ahorra capacidad de cálculo y se evitan mensajes de error mientras el código aún está incompleto.
Pulsa **Actualizar** en la barra superior o <kbd>Ctrl</kbd> + <kbd>S</kbd>.

Pruébalo – copia este ejemplo en el editor y actualiza:

\`\`\`\` markdown
# Mi primer curso

¡Bienvenido! Esto es **LiaScript**.

## Un pequeño cuestionario

¿Cuánto es 2 + 2?

- [( )] 3
- [(X)] 4
- [( )] 5

## Código que puedes ejecutar

\`\`\` javascript
console.log("¡Hola LiaScript!");
\`\`\`
<script>@input</script>
\`\`\`\`

| Atajo                                  | Acción                        |
| -------------------------------------- | ----------------------------- |
| <kbd>Ctrl</kbd> + <kbd>S</kbd>         | Actualizar la vista previa    |
| <kbd>Ctrl</kbd> + <kbd>Espacio</kbd>   | Mostrar sugerencias           |
| <kbd>Ctrl</kbd> + <kbd>F</kbd>         | Buscar en el documento        |
| <kbd>Tab</kbd> (dentro de una tabla)   | Dejar la tabla bien alineada  |
| <kbd>F1</kbd>                          | Abrir la paleta de comandos   |

### 2. Ayuda mientras escribes

No hace falta memorizar la sintaxis de LiaScript:

- Escribe \`lia\` para obtener bloques como cuestionarios, encuestas, animaciones o diapositivas.
- Escribe \`voice\` para elegir una voz para la lectura en voz alta.
- Escribe \`hili\` seguido de un lenguaje para colorear el código.

Elige con las flechas e inserta con <kbd>Tab</kbd> o <kbd>Enter</kbd>.
Los elementos más habituales también son botones de la barra de herramientas sobre el editor.
La pestaña **Tutorial** de esa barra inserta plantillas completas.

### 3. Saltar entre el texto y la vista previa

- **Vista previa → texto:** haz doble clic en un elemento de la vista previa y el editor salta a su línea.
- **Texto → vista previa:** mantén <kbd>Ctrl</kbd> y haz doble clic en una palabra del editor, y la vista previa abre esa diapositiva.

### 4. Archivos, imágenes y medios

El símbolo de la carpeta en el borde izquierdo abre el panel de archivos.
Ahí puedes añadir imágenes, audio, vídeo y más archivos Markdown.
Refiérete a ellos con una ruta relativa, por ejemplo \`![Logo](img/logo.png)\`.
El archivo con el símbolo de la casa es el inicio de tu curso.

### 5. Trabajar en equipo

El botón **Solo yo** de la barra superior muestra quién está escribiendo.
Cambia a **En vivo – directo** o **En vivo – por servidor** y comparte el enlace: todos ven los cambios al instante.
Todos los que tienen el enlace editan el mismo curso.
Para tener tu propia versión, usa **Hacer una copia** en el menú ⋮.

### 6. Compartir, publicar, exportar

**Compartir y exportar** reúne todo lo que puedes hacer con tu curso:

- enlaces para el alumnado – como GitHub Gist, en Nostr o con el curso dentro del propio enlace,
- sincronización con GitHub, GitLab o una carpeta de tu ordenador,
- descarga en ZIP y conversión a SCORM, IMS, PDF o ePub con el LiaScript Exporter.

### Dibujar con texto

Los diagramas sencillos se pueden dibujar con caracteres:

\`\`\`\` markdown
\`\`\` ascii
+------+   +-------+   +--------+
|      |   |       |   |        |
| Idea +-->| Texto +-->|  Curso |
|      |   |       |   |        |
+------+   +-------+   +--------+
\`\`\`
\`\`\`\`

### Más información

- Documentación: https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md
- Web y blog: https://liascript.github.io
- Plantillas: https://github.com/topics/liascript-template
- Cursos publicados: https://github.com/topics/liascript-course
- Código fuente: https://github.com/liascript
- Vídeos: https://www.youtube.com/channel/UCyiTe2GkW_u05HSdvUblGYg
- Contacto: LiaScript@web.de o el chat en https://gitter.im/LiaScript/community

</article>
`

export function tutorialFor(locale: string): string {
  if (locale === "de") return tutorialDe
  if (locale === "es") return tutorialEs
  return tutorial
}
