import type { Metadata } from "next";

export const metadata: Metadata = { title: "Instalar AssessTrace" };

const repositoryUrl = "https://github.com/gear-go/canvas-mds-build-week";
const spanishDocsUrl = `${repositoryUrl}/blob/main/docs/es/README.md`;
const installationUrl = `${repositoryUrl}/blob/main/README.es.md#instalaci%C3%B3n-para-pilotos-desde-github`;
const accessMail =
  "mailto:gagomez@udd.cl?subject=Piloto%20acompa%C3%B1ado%20de%20AssessTrace&body=Hola%20Germ%C3%A1n%3A%0A%0AQuisiera%20participar%20en%20un%20piloto%20acompa%C3%B1ado%20de%20AssessTrace.%0A%0AUsuario%20de%20GitHub%3A%0AInstituci%C3%B3n%20o%20unidad%3A%0ACurso%2C%20programa%20o%20contexto%20de%20uso%3A%0A%0A%C2%BFPor%20qu%C3%A9%20quiero%20utilizar%20AssessTrace%3F%0A%0A%C2%BFPara%20qu%C3%A9%20evaluaci%C3%B3n%2C%20curso%20o%20proyecto%20quiero%20utilizarlo%3F%0A%0AConfirmo%20que%20no%20incluir%C3%A9%20datos%20personales%20de%20estudiantes.%0A%0ASaludos%2C";

export default function AccessPage() {
  return (
    <main id="contenido-principal">
      <section className="page-hero access-hero">
        <div className="shell narrow-shell">
          <p className="brand-kicker dark-kicker">Plugin público · pilotos controlados</p>
          <h1>Instala AssessTrace desde GitHub y úsalo en Codex.</h1>
          <p>El repositorio incluye el marketplace, las tres skills de AssessTrace · Canvas MDS, el motor determinista y documentación completa en español e inglés. La guía en español conduce la instalación; si quieres acompañamiento para el primer caso, también puedes escribirnos.</p>
          <div className="button-row">
            <a className="button button-primary" href={installationUrl} target="_blank" rel="noreferrer">Abrir instalación en español</a>
            <a className="button button-secondary" href={accessMail}>Solicitar piloto acompañado</a>
          </div>
        </div>
      </section>

      <section className="section shell install-section" id="instalacion">
        <div className="install-heading">
          <h2>Instalación en cuatro pasos</h2>
          <p>Necesitas Codex con soporte de plugins, GPT-5.6 y Python 3.10 o superior. La configuración de Canvas ocurre después y nunca requiere pegar el token en el chat.</p>
        </div>
        <ol className="install-steps">
          <li>
            <span>01</span>
            <div>
              <h3>Instala las dependencias locales</h3>
              <p>Abre PowerShell o una terminal y ejecuta:</p>
              <pre><code>python -m pip install requests keyring</code></pre>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Agrega el marketplace de AssessTrace</h3>
              <p>Registra el repositorio público directamente desde GitHub:</p>
              <pre><code>codex plugin marketplace add gear-go/canvas-mds-build-week --ref main</code></pre>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Instala el plugin en Codex</h3>
              <p>Reinicia ChatGPT Desktop. En Codex o Work, abre <strong>Plugins</strong>, selecciona el marketplace <strong>Canvas MDS · Docentes</strong> e instala <strong>AssessTrace · Canvas MDS</strong>.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Comienza con una configuración segura</h3>
              <p>Abre una tarea nueva con GPT-5.6 y escribe:</p>
              <pre><code>$canvas-mds-configurar</code></pre>
              <p>La skill te guiará para conectar Canvas, guardar el token fuera del chat y comprobar permisos antes de cualquier auditoría.</p>
            </div>
          </li>
        </ol>
        <div className="repository-callout">
          <div>
            <strong>Documentación en español y código público</strong>
            <p>La guía en español reúne instalación, seguridad, experiencia de evaluación, caso de referencia y materiales de publicación. La documentación original en inglés se mantiene disponible.</p>
          </div>
          <div className="repository-links">
            <a className="text-link" href={spanishDocsUrl} target="_blank" rel="noreferrer">Ver documentación en español <span aria-hidden="true">↗</span></a>
            <a className="text-link repository-link-secondary" href={repositoryUrl} target="_blank" rel="noreferrer">Repositorio e inglés <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="section support-section">
        <div className="shell access-layout">
          <div>
            <h2>¿Prefieres una primera experiencia acompañada?</h2>
            <p>Para el piloto, cuéntanos el contexto sin incluir información de estudiantes. Podemos revisar si el MVP se ajusta a tu caso y acompañar la primera configuración.</p>
            <a className="button button-primary" href={accessMail}>Preparar correo a gagomez@udd.cl</a>
          </div>
          <div className="access-process">
            <span>Incluye en el correo</span>
            <ul className="check-list">
              <li>Tu nickname de GitHub.</li>
              <li>Institución, unidad o programa.</li>
              <li>Por qué quieres usar AssessTrace.</li>
              <li>Para qué curso, evaluación o proyecto.</li>
              <li>Confirmación de que no incluirás datos personales de estudiantes.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell narrow-shell">
          <h2>Preguntas frecuentes</h2>
          <details><summary>¿Necesito saber programar?</summary><p>No para rediseñar la evaluación. La instalación usa dos comandos y el trabajo ocurre como una conversación guiada en Codex. La conexión inicial con Canvas puede requerir apoyo técnico.</p></details>
          <details><summary>¿La web guarda mis respuestas?</summary><p>No. El diagnóstico se ejecuta en tu navegador y no envía sus respuestas a un servidor.</p></details>
          <details><summary>¿Puedo ingresar trabajos o datos de estudiantes?</summary><p>No. AssessTrace necesita estructura del curso, resultados, evaluaciones y restricciones; no necesita expedientes individuales.</p></details>
          <details><summary>¿AssessTrace publica cambios en Canvas?</summary><p>No. Las inspecciones y dry-runs no realizan mutaciones. La creación protegida produce estructuras no publicadas y requiere confirmación explícita.</p></details>
        </div>
      </section>
    </main>
  );
}
