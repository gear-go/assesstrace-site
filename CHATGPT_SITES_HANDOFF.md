# Relevo para publicar AssessTrace con otra cuenta de ChatGPT

> Nota de estado: el sitio ya está publicado públicamente en Cloudflare Workers en
> `https://assesstrace-site.assesstrace-udd.workers.dev/`. Este documento conserva
> el procedimiento histórico de ChatGPT Sites; antes de reutilizarlo se debe leer
> el `project_id` existente en `.openai/hosting.json` y nunca crear un duplicado.

## Objetivo

Abrir esta misma carpeta desde una cuenta de ChatGPT con Sites habilitado, crear el proyecto remoto una sola vez y publicar el sitio para cualquier persona en Internet.

No se debe reinicializar, recrear ni rediseñar el sitio.

## Estado al recibir la carpeta

- El código está completo.
- La compilación de producción funciona.
- `.openai/hosting.json` no contiene `project_id`.
- D1 y R2 están desactivados.
- No existen secretos ni credenciales locales necesarias.
- No existe un sitio remoto creado por la cuenta anterior.

La cuenta anterior intentó crear el sitio, pero Sites rechazó la operación antes de crear un proyecto:

```text
Project owner is not linked to an account
```

Por esa razón es correcto que la nueva cuenta realice una nueva creación, siempre que `.openai/hosting.json` siga sin `project_id`.

## Requisitos de la nueva cuenta

- Plan y región elegibles para ChatGPT Sites.
- Aplicación ChatGPT Desktop actualizada.
- Sites habilitado para la cuenta o workspace.
- En Enterprise/Edu, permiso para crear Sites.
- Permiso específico de publicación pública.
- Sesión iniciada en el workspace que será propietario del sitio.

## Prompt recomendado para la nueva cuenta

Abrir esta carpeta en Codex Desktop y enviar:

```text
Este repositorio contiene el sitio terminado de AssessTrace.

Lee completamente AGENTS.md, README.md, PROJECT_CONTEXT.md y
CHATGPT_SITES_HANDOFF.md. Usa las skills sites-building y sites-hosting.
No reinicialices ni rediseñes el proyecto.

Valida la compilación y publícalo mediante ChatGPT Sites. Confirmo
explícitamente que el sitio debe quedar público para cualquier persona en
Internet. Si .openai/hosting.json no tiene project_id, crea el sitio una sola
vez con el slug assesstrace-udd y persiste inmediatamente el ID devuelto.
Después guarda y despliega la versión exacta validada, comprueba el estado
hasta que finalice y entrégame la URL pública.
```

## Secuencia de publicación

La cuenta nueva debe seguir este orden:

1. Leer `.openai/hosting.json`.
2. Confirmar que no existe `project_id`.
3. Ejecutar `npm ci` solo si faltan dependencias.
4. Ejecutar `npm run build`.
5. Corregir únicamente errores reales de compilación; no hacer un rediseño.
6. Crear el proyecto de Sites una sola vez:
   - título: `AssessTrace — Evidence by Design`;
   - slug sugerido: `assesstrace-udd`;
   - descripción: `Rediseño de evaluación centrado en evidencia del proceso de aprendizaje, respaldado por IDS-UDD.`
7. Guardar inmediatamente el ID opaco devuelto como `project_id` en `.openai/hosting.json`.
8. No volver a llamar a creación para esta carpeta después de persistir el ID.
9. Confirmar y guardar el estado exacto del código.
10. Empujar ese estado al repositorio fuente que Sites asigne, usando la credencial temporal solo para esa operación.
11. No escribir el token en archivos, remotos Git, logs, documentación ni configuración.
12. Empaquetar la misma versión compilada con el helper oficial de Sites.
13. Guardar una versión de Sites asociada al commit exacto.
14. Cambiar el acceso a público para cualquier persona en Internet.
15. Desplegar esa versión guardada.
16. Consultar el estado hasta que indique éxito o fallo definitivo.
17. Abrir la URL desplegada y entregar la URL pública.

## Configuración esperada

Antes de crear el proyecto:

```json
{
  "d1": null,
  "r2": null
}
```

Después de crearlo, Sites debe agregar únicamente el ID real:

```json
{
  "project_id": "ID_OPACO_DEVUELTO_POR_SITES",
  "d1": null,
  "r2": null
}
```

Nunca inventar, transformar ni copiar un ID de otro sitio o cuenta.

## Comprobaciones antes de publicar

- `npm run build` termina correctamente.
- Existen las rutas `/`, `/docentes`, `/directivos`, `/metodologia`, `/diagnostico` y `/acceso`.
- `public/og.png` existe.
- Los metadatos generan la URL social desde el host entrante.
- El diagnóstico funciona sin servidor ni base de datos.
- La dirección de contacto es `gagomez@udd.cl`.
- No se han agregado datos personales, tokens o archivos `.env`.
- `.openai/hosting.json` solo contiene el `project_id` real y los bindings nulos.

## Comprobaciones después de publicar

- La portada carga sin autenticación.
- La opción de acceso es pública.
- El diagnóstico puede completarse.
- El prompt puede copiarse y descargarse.
- El prompt incluye `HARD STOP 1`, Evidence by Design y la prohibición de datos personales.
- Los enlaces de correo apuntan a `gagomez@udd.cl`.
- Las rutas internas funcionan.
- La tarjeta social se carga desde el dominio publicado.

## Qué no hacer

- No ejecutar el inicializador de Sites.
- No reemplazar Next/Vinext.
- No crear una base de datos.
- No agregar autenticación al diagnóstico.
- No almacenar sus respuestas.
- No volver a generar `public/og.png`.
- No cambiar la identidad, los textos o la metodología antes de la primera publicación.
- No publicar desde un commit distinto al que se empaqueta.
- No guardar credenciales temporales.
- No crear proyectos duplicados.

## Si vuelve a fallar la creación

Si Sites devuelve nuevamente `Project owner is not linked to an account`, detenerse. Es un problema de aprovisionamiento, elegibilidad o permisos de la cuenta/workspace, no del código.

Comprobar:

1. que Sites aparezca en ChatGPT Work;
2. que la cuenta pueda crear un Site de prueba;
3. que esté seleccionado el workspace correcto;
4. que un administrador haya habilitado Sites y publicación pública;
5. que la cuenta y región sean elegibles.

Si todo está habilitado, contactar a soporte de OpenAI e incluir el error exacto, correo de la cuenta, nombre del workspace, plan y versión de ChatGPT Desktop.

## Criterio de término

El relevo termina únicamente cuando Sites informa despliegue exitoso y existe una URL pública visitable. Una compilación local o una versión guardada sin desplegar no es suficiente.
