import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Para docentes" };
const steps = [
  ["Prepara", "Resultados de aprendizaje, evaluaciones actuales, política de IA y restricciones reales."],
  ["Diagnostica", "Describe qué evidencia existe y qué procesos de aprendizaje permanecen invisibles."],
  ["Genera", "La web convierte tus respuestas en un prompt inicial trazable y editable."],
  ["Rediseña", "AssessTrace propone alternativas y se detiene cuando necesita una decisión docente."],
  ["Revisa", "El motor determinista valida el diseño antes de cualquier operación en Canvas."],
] as const;
export default function FacultyPage() {
  return (
    <main id="contenido-principal">
      <section className="page-hero faculty-hero"><div className="shell narrow-shell"><p className="brand-kicker dark-kicker">Tu primera experiencia con AssessTrace</p><h1>Empieza por una pregunta pedagógica, no por un comando.</h1><p>No necesitas ser experto en Codex. Necesitas conocer tu curso, tus estudiantes y aquello que la evaluación debería permitir observar.</p><Link className="button button-primary" href="/diagnostico">Preparar mi prompt inicial</Link></div></section>
      <section className="section shell"><div className="section-heading"><h2>Un recorrido guiado, con decisiones docentes explícitas.</h2></div><ol className="journey-list">{steps.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></section>
      <section className="section preparation-section"><div className="shell preparation-grid"><div><h2>Qué conviene tener a mano</h2><ul className="check-list"><li>Descripción y resultados de aprendizaje del curso.</li><li>Evaluaciones, rúbricas y ponderaciones actuales.</li><li>Política institucional o acuerdos sobre uso de IA.</li><li>Restricciones de tiempo, carga y accesibilidad.</li></ul></div><div className="privacy-panel"><h2>Qué no debes ingresar</h2><p>Nombres, RUT, correos, notas, entregas ni cualquier información que permita identificar estudiantes.</p><strong>AssessTrace rediseña la estructura de evidencia; no necesita expedientes individuales.</strong></div></div></section>
      <section className="section shell prompt-preview-section"><div><h2>El diagnóstico no decide por ti.</h2><p>Genera un punto de partida que pide a GPT-5.6 diagnosticar, comparar alternativas y detenerse ante decisiones materiales.</p></div><pre className="prompt-preview" aria-label="Ejemplo abreviado del prompt generado"><code>{"Use $canvas-mds-redisenar and apply Evidence by Design...\n\nCourse context: ...\nCurrent assessment: ...\nInvisible process evidence: ...\nFaculty constraints: ...\n\nDo not use student data.\nStop for faculty confirmation before compiling artifacts."}</code></pre></section>
      <section className="section final-cta shell"><h2>Tu evaluación real es el mejor punto de partida.</h2><div className="button-row"><Link className="button button-primary" href="/diagnostico">Comenzar diagnóstico</Link><Link className="button button-secondary" href="/acceso">Cómo solicitar acceso</Link></div></section>
    </main>
  );
}
