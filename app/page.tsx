import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "El aprendizaje deja huella" };
const roles = [
  ["GPT-5.6", "Comprende y propone", "Reconcilia evidencia del curso, identifica brechas de validez y compara alternativas viables."],
  ["Docente", "Decide", "Confirma, modifica o rechaza cada decisión que cambia el diseño de la evaluación."],
  ["Motor determinista", "Verifica", "Comprueba trazabilidad, ponderaciones, decisiones pendientes y límites de seguridad."],
] as const;
const referenceCaseUrl =
  "https://github.com/gear-go/canvas-mds-build-week/blob/main/plugins/canvas-mds/assets/judge-case/reference/before-after.es.md";

export default function Home() {
  return (
    <main id="contenido-principal">
      <section className="hero hero-home">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="brand-kicker">AssessTrace · respaldado por IDS-UDD</p>
            <h1>El aprendizaje deja huella.</h1>
            <p className="hero-lead">Rediseña la evaluación para hacer visibles el razonamiento, las decisiones, la iteración, el feedback y el aporte individual en cursos donde se utiliza IA generativa.</p>
            <div className="button-row">
              <Link className="button button-accent" href="/diagnostico">Crear mi prompt inicial</Link>
              <Link className="button button-quiet-on-dark" href="/directivos">Evaluar adopción institucional</Link>
            </div>
            <p className="hero-note">Sin datos de estudiantes. Sin calificación automática. El docente conserva las decisiones materiales.</p>
          </div>
          <div className="trace-stage" aria-label="Ruta de evidencia a diseño aprobado">
            <div className="trace-line" aria-hidden="true" />
            {["Evidencia", "Propuesta", "Decisión", "Verificación"].map((item, index) => (
              <div className="trace-stop" key={item}><span>{index + 1}</span><strong>{item}</strong></div>
            ))}
            <div className="trace-result"><span>Diseño aprobado</span><strong>listo para revisar antes de Canvas</strong></div>
          </div>
        </div>
      </section>
      <section className="section shell problem-section">
        <div className="section-heading"><h2>Un producto convincente ya no cuenta toda la historia.</h2><p>La IA puede mejorar una entrega final sin revelar quién comprendió, qué decisiones se tomaron o cómo cambió el trabajo después del feedback.</p></div>
        <div className="evidence-shift">
          <div className="shift-state before-state"><span>Cuando solo vemos el resultado</span><strong>Producto final</strong><p>Inferimos el proceso desde una entrega terminada. La comprensión individual puede permanecer invisible.</p></div>
          <div className="shift-arrow" aria-hidden="true">→</div>
          <div className="shift-state after-state"><span>Cuando diseñamos la evidencia</span><strong>Proceso + producto</strong><p>Hitos, decisiones, versiones, respuesta al feedback y verificación individual dejan una trazabilidad evaluable.</p></div>
        </div>
        <p className="evidence-caption">El caso de referencia demuestra este cambio en un curso sanitizado; no se presenta como una receta universal.</p>
      </section>
      <section className="section example-section" id="caso">
        <div className="shell example-layout">
          <div className="example-intro">
            <p className="example-label">Caso sanitizado de referencia</p>
            <h2>De una nota difícil de interpretar a evidencia que permite decidir.</h2>
            <p>AssessTrace no “mejora una rúbrica” en abstracto. Reconcilia los objetivos, la evaluación actual, la política de IA y la carga docente; identifica qué aprendizaje sigue invisible; y compara alternativas antes de preparar cualquier cambio.</p>
          </div>
          <div className="example-story">
            <article className="example-step">
              <span className="example-step-number">01</span>
              <div>
                <p className="example-step-label">Evaluación inicial</p>
                <h3>Un proyecto grupal concentra casi toda la evidencia.</h3>
                <p>La entrega final puede ser excelente, pero no permite distinguir quién encuadró el problema, qué decisiones se verificaron o cómo respondió cada integrante al feedback.</p>
                <div className="weight-bar weight-before" aria-label="95 por ciento producto final y 5 por ciento verificación individual">
                  <span>95% producto final</span>
                  <span>5%</span>
                </div>
              </div>
            </article>
            <article className="example-step">
              <span className="example-step-number">02</span>
              <div>
                <p className="example-step-label">Diagnóstico AssessTrace</p>
                <h3>La brecha no es “uso de IA”; es evidencia insuficiente.</h3>
                <p>El sistema hace visibles las fuentes, formula solo preguntas capaces de cambiar el diseño y aplica un HARD STOP hasta que el docente confirme objetivos, carga y decisiones materiales.</p>
                <ul className="example-signals">
                  <li>Decisiones y alternativas descartadas</li>
                  <li>Iteraciones y respuesta al feedback</li>
                  <li>Contribución y comprensión individual</li>
                </ul>
              </div>
            </article>
            <article className="example-step example-step-result">
              <span className="example-step-number">03</span>
              <div>
                <p className="example-step-label">Rediseño aprobado</p>
                <h3>Producto, proceso y verificación dejan rastros distintos.</h3>
                <p>El caso resultante incorpora hitos revisables, evidencia de decisiones y una comprobación individual. El motor valida trazabilidad y ponderaciones antes de generar una estructura no publicada para Canvas.</p>
                <div className="weight-bar weight-after" aria-label="40 por ciento producto final, 55 por ciento proceso y 5 por ciento verificación individual">
                  <span>40% producto</span>
                  <span>55% proceso</span>
                  <span>5%</span>
                </div>
              </div>
            </article>
          </div>
          <div className="example-outcome">
            <div>
              <strong>El poder está en cambiar lo que la evaluación puede demostrar.</strong>
              <p>No en vigilar más ni en automatizar la autoridad pedagógica.</p>
            </div>
            <a className="button button-secondary" href={referenceCaseUrl} target="_blank" rel="noreferrer">Ver el caso completo en español</a>
          </div>
        </div>
      </section>
      <section className="section responsibility-section">
        <div className="shell"><div className="section-heading compact-heading"><h2>La IA propone. La autoridad pedagógica no se automatiza.</h2></div><div className="role-bands">{roles.map(([label, title, copy]) => <article className="role-band" key={label}><span>{label}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
      </section>
      <section className="section shell audience-section">
        <div className="audience-path faculty-path"><p>Para docentes</p><h2>Parte desde tu evaluación real, no desde una plantilla.</h2><p>Completa un diagnóstico breve. Obtendrás un prompt estructurado para iniciar el rediseño con AssessTrace en Codex.</p><Link className="text-link" href="/docentes">Ver el recorrido docente <span aria-hidden="true">→</span></Link></div>
        <div className="audience-path leadership-path"><p>Para directivos</p><h2>Evalúa valor, gobernanza y condiciones de adopción.</h2><p>Revisa el modelo operativo, los límites de seguridad y una propuesta de piloto institucional acotado.</p><Link className="text-link" href="/directivos">Revisar el caso institucional <span aria-hidden="true">→</span></Link></div>
      </section>
      <section className="section trust-section">
        <div className="shell trust-layout"><div><h2>Menos superficie que gobernar.</h2><p>AssessTrace no agrega una plataforma de evaluación ni necesita procesar trabajos de estudiantes para preparar el rediseño.</p></div><ul className="trust-list"><li><span>No publica ni elimina</span><strong>Canvas queda bajo control docente.</strong></li><li><span>No califica ni infiere autoría</span><strong>La IA apoya el diseño, no juzga al estudiante.</strong></li><li><span>No solicita datos personales</span><strong>El diagnóstico trabaja con estructura del curso.</strong></li></ul></div>
      </section>
      <section className="section final-cta shell"><h2>Haz visible lo que hoy tu evaluación solo supone.</h2><div className="button-row"><Link className="button button-primary" href="/diagnostico">Comenzar diagnóstico</Link><Link className="button button-secondary" href="/metodologia">Conocer Evidence by Design</Link></div></section>
    </main>
  );
}
