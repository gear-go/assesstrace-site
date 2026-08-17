# Instrucciones para agentes Codex

## Antes de actuar

Leer completamente:

1. `README.md`
2. `PROJECT_CONTEXT.md`
3. `CHATGPT_SITES_HANDOFF.md`
4. `.openai/hosting.json`

Este es un sitio existente y terminado. No ejecutar un inicializador ni sustituir su arquitectura.

## Propósito inmutable

AssessTrace es el producto, Evidence by Design es la metodología y Canvas MDS es el primer adaptador.

La tesis es hacer visible el proceso de aprendizaje en educación con IA. No convertir el producto en vigilancia, proctoring, calificación automática ni inferencia de autoría.

## Reglas de contenido

- Mantener AssessTrace como marca principal.
- Mantener el respaldo del Instituto de Data Science UDD (IDS-UDD), sin atribuir el respaldo a la universidad en general.
- Mantener `gagomez@udd.cl` como contacto.
- Mantener el diagnóstico libre de datos personales.
- No enviar ni almacenar respuestas del diagnóstico.
- No prometer que el MVP es una interfaz docente terminada.
- Mantener los roles: GPT-5.6 propone; el docente decide; el motor verifica; Canvas MDS implementa.
- Mantener `HARD STOP 1` y Evidence by Design en el prompt generado.

## Reglas técnicas

- Usar las skills `sites-building` y `sites-hosting` para cualquier publicación.
- Preservar Next.js, React, Vinext, Vite y el lockfile.
- Ejecutar `npm run build` antes de guardar o desplegar una versión.
- No agregar D1, R2, autenticación ni variables de entorno salvo solicitud explícita.
- No regenerar `public/og.png`.
- No guardar tokens o credenciales en archivos, Git, remotos o mensajes.

## Regla crítica de Sites

Leer `.openai/hosting.json` antes de crear.

- Si contiene `project_id`, reutilizar exactamente ese ID.
- Si no contiene `project_id`, llamar a creación una sola vez y persistir inmediatamente el ID devuelto.
- Nunca inventar, transformar o sustituir IDs.
- Nunca crear dos proyectos para esta carpeta.
- Guardar y desplegar solamente el estado exacto que fue validado y empujado.

El usuario ha definido que el resultado final debe ser público, pero la cuenta que ejecute el despliegue debe recibir confirmación explícita en su propia conversación antes de realizar la publicación abierta.

## Alcance por defecto

Si la solicitud es únicamente publicar, no rediseñar, reescribir ni agregar funcionalidades. Corregir solo bloqueantes reales de compilación o despliegue y documentar cualquier cambio necesario.
