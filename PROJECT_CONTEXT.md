# Contexto del proyecto AssessTrace

## Resumen ejecutivo

**AssessTrace — Evidence by Design** rediseña la evaluación para que el proceso de aprendizaje deje evidencia en tiempos de educación con IA.

Pitch:

> AssessTrace — evidence by design. Rediseña la evaluación para que el proceso de aprendizaje deje evidencia; el docente decide, la herramienta traza. Canvas MDS es su primer adaptador.

AssessTrace es el producto. **Evidence by Design** es la metodología. **Canvas MDS** es el primer adaptador técnico.

## Origen

El proyecto nace de necesidades observadas en:

- el curso IA Workshop de la Universidad del Desarrollo;
- el trabajo en comisiones de IA de la UDD, tanto a nivel universidad como facultad;
- el desarrollo de la política y los lineamientos institucionales de IA;
- discusiones sobre uso de IA en docencia;
- la dirección de la Maestría en Data Science de la UDD;
- la necesidad de incorporar IA en los cursos sin reducir la evaluación al producto final;
- la necesidad de ofrecer a docentes y programas una solución portable, trazable y gobernable.

La tesis central es que, cuando la IA puede contribuir de manera importante al producto final, la evaluación debe observar también formulación del problema, decisiones, alternativas descartadas, iteración, verificación, respuesta al feedback y comprensión individual.

## Problema

Muchas evaluaciones siguen concentrando la mayor parte de la nota en un producto grupal final. Ese diseño puede ocultar:

- cómo se construyó el resultado;
- qué decisiones fueron humanas;
- qué sugerencias de IA se aceptaron, rechazaron o verificaron;
- cómo se utilizó el feedback;
- qué comprendió cada estudiante;
- si los resultados de aprendizaje fueron realmente observados.

AssessTrace no propone vigilancia ni proctoring. Propone diseñar evidencia válida del proceso.

## Diferenciación

AssessTrace adopta una posición deliberadamente acotada y portable:

- no agrega una nueva plataforma de evaluación;
- no requiere un nuevo procesador de trabajos estudiantiles;
- trabaja con la infraestructura institucional existente;
- excluye datos estudiantiles por diseño;
- separa el razonamiento generativo, las decisiones docentes y la verificación determinista;
- reduce la superficie institucional que debe gobernarse.

La promesa no es tener más funciones que todas las alternativas. Es requerir menos infraestructura, menos datos y menos decisiones irreversibles.

## Audiencias

### Docentes

No necesitan dominar Codex. Necesitan conocer su curso, resultados de aprendizaje, evaluaciones, restricciones y aquello que debería ser observable.

La web les permite completar un diagnóstico y obtener un prompt inicial estructurado.

### Diseñadores instruccionales y líderes de programa

Pueden acompañar a docentes, comparar alternativas, revisar alineamiento y preparar pilotos.

### Directivas UDD

La web presenta:

- el cambio de paradigma desde producto hacia proceso;
- el valor institucional;
- el modelo de gobernanza;
- las barreras de seguridad;
- una ruta de demostración o piloto con casos sanitizados.

## Modelo de responsabilidades

1. **GPT-5.6 propone.** Comprende fuentes heterogéneas, diagnostica brechas y compara alternativas con trade-offs.
2. **El docente decide.** Confirma resultados, ponderaciones, formatos, carga, accesibilidad y cualquier cambio material.
3. **El motor determinista verifica.** Rechaza decisiones pendientes, trazas espurias, ponderaciones incompatibles y condiciones inseguras.
4. **Canvas MDS implementa.** Prepara estructuras revisables y no publicadas en Canvas.

## Evidence by Design

La metodología comienza por lo que debe ser observable, no por la actividad o el calendario.

Secuencia conceptual:

1. necesidad educativa;
2. objetivos o resultados de aprendizaje;
3. indicadores observables;
4. evidencia;
5. instrumento y procedimiento;
6. actividad;
7. feedback y revisión;
8. trazabilidad y validación.

### HARD STOP

Cuando falta una decisión docente capaz de cambiar materialmente el diseño, AssessTrace debe detenerse. No debe compilar artefactos ni preparar Canvas hasta que la decisión quede confirmada.

## Alcance del MVP

El MVP actual es un motor con barreras de seguridad, operado mediante Codex, Python y confirmaciones explícitas. No se presenta como una interfaz docente terminada.

La superficie para docentes es:

- esta web pública;
- el diagnóstico inicial;
- la conversación con las skills de AssessTrace en Codex;
- acompañamiento técnico o de diseño instruccional durante el piloto.

## Requisitos confirmados para la web

- Debe ser pública.
- AssessTrace es la marca principal.
- UDD aparece como respaldo.
- La identidad utiliza colores institucionales.
- Debe servir a docentes y a directivas no expertas en Codex.
- Debe incluir un diagnóstico que genere el prompt inicial.
- El diagnóstico no debe enviar ni almacenar respuestas.
- Para obtener acceso operativo se debe escribir a `gagomez@udd.cl`.
- La solicitud debe incluir nickname de GitHub, por qué se quiere usar y para qué curso, evaluación o proyecto.

## Diagnóstico interactivo

El diagnóstico tiene seis etapas:

1. contexto;
2. aprendizaje;
3. evaluación;
4. proceso;
5. IA y límites;
6. revisión.

El prompt generado solicita:

- usar `$canvas-mds-redisenar`;
- aplicar Evidence by Design;
- inventariar evidencia y fuentes;
- diagnosticar validez;
- formular un máximo de tres preguntas materiales;
- aplicar `HARD STOP 1`;
- aplicar un `ALIGNMENT STOP`;
- comparar alternativas y explicitar trade-offs;
- no usar datos personales de estudiantes;
- no modificar Canvas.

El usuario puede copiar el prompt o descargarlo como Markdown.

## Contenido y navegación

### Inicio

Titular: **El aprendizaje deja huella.**

Presenta la tesis, los roles, los recorridos por audiencia, la gobernanza y la llamada al diagnóstico.

### Docentes

Explica qué información preparar, qué datos excluir y cómo se genera el punto de partida.

### Directivos

Reencuadra la necesidad como mejor evidencia, no más vigilancia, y ofrece una conversación institucional o piloto.

### Metodología

Explica Evidence by Design, las cuatro responsabilidades y el HARD STOP.

### Acceso

El acceso a la web y al diagnóstico es público. El acceso operativo al plugin es controlado y se solicita por correo.

## Identidad y tono

- Marca: AssessTrace.
- Tagline/metodología: Evidence by Design.
- Respaldo: Universidad del Desarrollo.
- Adaptador: Canvas MDS.
- Personalidad: clara, rigurosa y humana.
- Evitar: vigilancia, claims inflados, lenguaje genérico de SaaS y promesas de automatización total.
- Accesibilidad objetivo: WCAG 2.1 AA.

## Principios de seguridad

- Cero datos estudiantiles en el diagnóstico.
- Cero mutaciones de Canvas durante análisis y dry-run.
- Nunca publicar o eliminar automáticamente.
- No calificar.
- No inferir autoría.
- Mantener visible la fuente de cada afirmación y la autoridad de cada decisión.
- El docente conserva la responsabilidad y la decisión final.

## Estado técnico verificado

- Las seis rutas compilan.
- El diagnóstico fue probado de extremo a extremo.
- La salida contiene las restricciones y stops esperados.
- La interfaz fue revisada en escritorio y móvil.
- La tarjeta social está incluida.
- No hay D1, R2, autenticación propia ni variables de entorno.
- La compilación de producción pasó antes de preparar este relevo.

## Propiedad y contacto

Contacto institucional: `gagomez@udd.cl`
