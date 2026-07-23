# AssessTrace — Evidence by Design

Sitio público de AssessTrace, respaldado por la Universidad del Desarrollo (UDD).

AssessTrace ayuda a rediseñar la evaluación para que el proceso de aprendizaje deje evidencia en cursos donde se utiliza IA generativa. GPT-5.6 comprende y propone; el docente decide; un motor determinista verifica; Canvas MDS implementa estructuras controladas en Canvas.

## Estado

- Sitio completo y funcional.
- Seis rutas públicas.
- Diagnóstico interactivo que genera un prompt inicial para Codex.
- Sin base de datos, almacenamiento remoto ni variables secretas.
- Compilación de producción validada.
- Pendiente: crear y publicar el proyecto con una cuenta de ChatGPT que tenga Sites habilitado.

La cuenta utilizada durante el desarrollo no pudo crear el proyecto remoto porque Sites respondió: `Project owner is not linked to an account`. No se guardó ningún `project_id` inválido.

## Documentación para retomar

- [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md): propósito, historia, usuarios, metodología, contenido y decisiones de producto.
- [CHATGPT_SITES_HANDOFF.md](CHATGPT_SITES_HANDOFF.md): instrucciones completas para abrir esta carpeta desde otra cuenta y publicar.
- [AGENTS.md](AGENTS.md): reglas operativas para cualquier agente Codex que trabaje en este repositorio.

## Ejecución local

Requiere Node.js 22.13 o superior.

```powershell
npm ci
npm run dev
```

Abrir la URL local que informe el servidor. Si el puerto predeterminado está ocupado:

```powershell
npm run dev -- --port 3001
```

Validación de producción:

```powershell
npm run build
```

## Rutas

| Ruta | Propósito |
|---|---|
| `/` | Tesis del producto y recorridos por audiencia |
| `/docentes` | Experiencia inicial para docentes |
| `/directivos` | Valor, gobernanza y piloto institucional |
| `/metodologia` | Metodología Evidence by Design |
| `/diagnostico` | Diagnóstico guiado y generación local del prompt |
| `/acceso` | Solicitud de acceso operativo |

## Privacidad y seguridad

- El diagnóstico se ejecuta completamente en el navegador.
- Las respuestas no se envían ni se almacenan.
- No se solicitan nombres, RUT, correos, notas, trabajos ni otros datos personales de estudiantes.
- La web no publica ni elimina contenido en Canvas.
- AssessTrace no califica ni infiere autoría.
- El acceso operativo se solicita escribiendo a `gagomez@udd.cl` e indicando nickname de GitHub, motivo y contexto de uso.

## Arquitectura

- Next.js 16 y React 19.
- Vinext/Vite con salida compatible con ChatGPT Sites.
- CSS propio y responsive.
- Metadatos Open Graph y tarjeta social en `public/og.png`.
- `.openai/hosting.json` sin `project_id` hasta que una cuenta habilitada cree el proyecto.
- D1 y R2 no se utilizan.

## Contacto

`gagomez@udd.cl`
