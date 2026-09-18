# Solaris Merit · Tu carrera pública despega

**En línea:** https://ttonguinon.github.io/solaris-merit-invima/ · **Repositorio:** https://github.com/ttonguinon/solaris-merit-invima

Simulador de práctica para las pruebas escritas del proceso de selección **Entidades del Orden Nacional 2026** de la CNSC, nivel profesional, para el **Invima** (Acuerdo 80 de 2026) y el **Fondo Nacional de Estupefacientes** (Acuerdo 76 de 2026).

## Contenido del proyecto

| Archivo | Qué es |
|---|---|
| `index.html` | La app. Un solo archivo, sin servidor. GitHub Pages la abre como página principal. |
| `banco-preguntas.xlsx` | Banco de preguntas. La app lo lee cada vez que se abre; si falla, usa una copia incorporada. |
| `presentacion.html` | Presentación animada de 3:44 con narración en voz colombiana y música, todo incrustado. |
| `Solaris Merit - Presentacion.mp4` | La misma presentación como video, para WhatsApp, redes o proyectar sin internet. |
| `marca/` | Logo en SVG y PNG: versión oscura, clara, horizontal e íconos de 192 y 512 px. |
| `README.md` | Este archivo. |
| `manifest.webmanifest` + `sw.js` | Hacen la app instalable en el celular y le permiten funcionar sin conexión. |
| `404.html` | Página de error con la marca. |
| `qr/` | Códigos QR listos: de la app y de la presentación, en PNG y SVG, y dos tarjetas para imprimir. |
| `qr.html` | Generador de QR: escribe cualquier enlace y descarga el código con los colores de la marca. |
| `.nojekyll` | Evita que GitHub Pages procese los archivos con Jekyll. |
| `.gitignore` | Ignora temporales de Office, del sistema y de editores. |
| `LICENSE` | Términos de uso: derechos reservados, uso personal permitido. |
| `robots.txt` y `sitemap.xml` | Para buscadores. Cambia la URL por la de tu repositorio. |

## El banco

420 preguntas funcionales en 140 casos y 80 situaciones comportamentales.

- **Pool Invima:** 255 preguntas (comunes + Invima).
- **Pool Estupefacientes:** 231 preguntas (comunes + FNE).
- **Ejes:** atención al ciudadano y derecho de petición, transparencia, MIPG y control interno, contratación y supervisión, ética y conflicto de interés, régimen disciplinario, acciones constitucionales, carrera administrativa, talento humano, gestión documental, protección de datos, precisión jurídica del verbo, y los propios de cada entidad (IVC sanitaria, sancionatorio, alimentos, medicamentos, dispositivos, cosméticos, carne, importaciones, bebidas alcohólicas; monopolio del Estado, control especial, comercio internacional, almacenamiento, presupuesto).

## Cómo funciona la app

1. **Empleo:** experiencia y posgrado que exige el requisito, y si la vacante es de reserva.
2. **Antecedentes:** se califican con las tablas del Anexo Técnico.
3. **Funcionales:** casos con tres enunciados y tres opciones. Eliminatoria: mínimo 65,00.
4. **Comportamentales:** competencias del Decreto 815 de 2018.
5. **Resultado:** puntaje ponderado (60 / 20 / 20), aciertos por eje, revisión con explicación, "por qué no las otras" y soporte normativo, y diploma descargable si aprueba.

Además: modo práctica o simulacro con cronómetro, contrarreloj de 10 preguntas, racha diaria, gráfica de puntajes, dominio por eje, enlaces oficiales del concurso y celebraciones con sonido y confeti. Todo se guarda en el dispositivo, por concurso, sin cuentas.

## Publicar en GitHub Pages

1. Crea un repositorio público y sube a la raíz: `index.html`, `banco-preguntas.xlsx`, `presentacion.html` y la carpeta `marca/`.
2. Ve a **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`, y guarda.
3. La app queda en `https://<usuario>.github.io/<repositorio>/` y la presentación en `.../presentacion.html`.
4. Sube también los archivos de repositorio: `.nojekyll`, `manifest.webmanifest`, `sw.js`, `404.html`, `robots.txt`, `sitemap.xml`, `LICENSE` y `.gitignore`.
5. Edita `robots.txt` y `sitemap.xml` con la URL real de tu repositorio.

La ventana de bienvenida trae arriba el botón **📲 Instalar la app** (en iPhone muestra la instrucción de Safari, que no permite instalar con un botón). Con el `sw.js` la app queda instalable: en el celular aparece "Agregar a la pantalla de inicio" y luego abre a pantalla completa y funciona sin internet. El banco se intenta leer siempre de la red y, si no hay señal, usa la última copia guardada.

## Códigos QR

En `qr/` están los códigos ya generados para `https://ttonguinon.github.io/solaris-merit-invima/`:

- `qr-app.png` y `qr-app.svg` · llevan al simulador.
- `qr-presentacion.png` y `qr-presentacion.svg` · llevan a la presentación.
- `tarjeta-qr-app.png` y `tarjeta-qr-presentacion.png` · tarjetas verticales con logo y enlace, listas para imprimir o publicar.

Si tu repositorio queda con otra dirección, abre `qr.html` (también funciona publicada, en `.../qr.html`), escribe el enlace y descarga el código nuevo. Usa corrección de errores alta, así que sigue leyéndose con el logo en el centro.

## Renovar o ampliar las preguntas

1. Descarga `banco-preguntas.xlsx`, edítalo y súbelo con el mismo nombre (**Add file → Upload files**).
2. La app toma el banco nuevo al abrirse. En la pantalla inicial se ve si usa el Excel o la copia incorporada.
3. Reglas: no cambies nombres de hojas ni encabezados. `respuesta` es A, B o C; `activa` en NO oculta una pregunta sin borrarla; un caso son tres filas con el mismo `caso_id`. La columna `porque_no` explica por qué las otras dos opciones no sirven y `fuente` cita la norma.

## Avisos

- Preguntas de práctica elaboradas a partir de la normativa citada en cada una. **No son preguntas oficiales de la CNSC**, que son reservadas.
- Solaris Merit no está afiliada a la CNSC. Los puntajes reales los calcula el operador comparando el desempeño con el grupo de admitidos al mismo empleo.
- Las normas cambian: verifica la vigencia antes de usar una pregunta como referencia y desactiva las que queden desactualizadas.
- La narración de la presentación se generó con la voz neuronal es-CO de Microsoft. Para uso comercial conviene generarla con una cuenta de Azure Speech.
