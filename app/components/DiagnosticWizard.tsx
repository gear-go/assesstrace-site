"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type FormState = {
  courseName: string;
  program: string;
  modality: string;
  duration: string;
  cohort: string;
  objectiveStatus: string;
  outcomes: string;
  finalProduct: string;
  weighting: string;
  groupMode: string;
  currentEvidence: string;
  invisibleEvidence: string[];
  aiPolicy: string;
  allowedTools: string;
  constraints: string;
  reviewCapacity: string;
  accessibility: string;
  preserve: string;
  privacyConfirmed: boolean;
};

const initialState: FormState = {
  courseName: "",
  program: "",
  modality: "Presencial",
  duration: "",
  cohort: "",
  objectiveStatus: "Existen resultados de aprendizaje aprobados",
  outcomes: "",
  finalProduct: "",
  weighting: "",
  groupMode: "Combinación grupal e individual",
  currentEvidence: "",
  invisibleEvidence: [],
  aiPolicy: "",
  allowedTools: "",
  constraints: "",
  reviewCapacity: "",
  accessibility: "",
  preserve: "",
  privacyConfirmed: false,
};

const stepNames = ["Contexto", "Aprendizaje", "Evaluación", "Proceso", "IA y límites", "Revisión"];
const evidenceOptions = [
  "Encuadre del problema",
  "Alternativas consideradas o descartadas",
  "Decisiones fundamentadas",
  "Iteraciones y versiones",
  "Respuesta al feedback",
  "Contribución individual",
  "Verificación del uso de IA",
  "Autoevaluación o coevaluación",
];

export function DiagnosticWizard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [prompt, setPrompt] = useState("");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  const progress = ((step + 1) / stepNames.length) * 100;
  const selectedSummary = useMemo(
    () => form.invisibleEvidence.join(", ") || "Aún no seleccionada",
    [form.invisibleEvidence],
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setPrompt("");
    setCopyState("idle");
    if (errors[key]) setErrors((current) => ({ ...current, [key]: "" }));
  }

  function toggleEvidence(item: string) {
    const next = form.invisibleEvidence.includes(item)
      ? form.invisibleEvidence.filter((value) => value !== item)
      : [...form.invisibleEvidence, item];
    update("invisibleEvidence", next);
  }

  function validate(currentStep: number) {
    const nextErrors: Record<string, string> = {};
    if (currentStep === 0) {
      if (!form.courseName.trim()) nextErrors.courseName = "Escribe el nombre o una descripción breve del curso.";
      if (!form.duration.trim()) nextErrors.duration = "Indica la duración aproximada.";
      if (!form.cohort.trim() || Number(form.cohort) < 1) nextErrors.cohort = "Indica un número aproximado de estudiantes.";
    }
    if (currentStep === 1 && !form.outcomes.trim()) nextErrors.outcomes = "Resume los resultados o el propósito de aprendizaje.";
    if (currentStep === 2) {
      if (!form.finalProduct.trim()) nextErrors.finalProduct = "Describe el producto o desempeño principal.";
      if (!form.weighting.trim()) nextErrors.weighting = "Resume las ponderaciones actuales.";
    }
    if (currentStep === 3 && form.invisibleEvidence.length === 0) nextErrors.invisibleEvidence = "Selecciona al menos un proceso que hoy necesite mayor evidencia.";
    if (currentStep === 4) {
      if (!form.aiPolicy.trim()) nextErrors.aiPolicy = "Describe la orientación o acuerdo actual sobre IA.";
      if (!form.constraints.trim()) nextErrors.constraints = "Indica al menos una restricción real del rediseño.";
    }
    if (currentStep === 5 && !form.privacyConfirmed) nextErrors.privacyConfirmed = "Confirma que no ingresaste datos personales de estudiantes.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function next() {
    if (!validate(step)) return;
    if (step < stepNames.length - 1) {
      setStep((value) => value + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function back() {
    setErrors({});
    setStep((value) => Math.max(0, value - 1));
  }

  function buildPrompt() {
    if (!validate(5)) return;
    const generated = [
      "Usa $canvas-mds-redisenar y aplica la metodología Evidence by Design al siguiente contexto docente.",
      "",
      "PROPÓSITO DE LA INTERACCIÓN",
      "Diagnostica qué puede y qué no puede demostrar la evaluación actual sobre el aprendizaje en un curso con IA. No conviertas simplemente el texto a otro formato: reconcilia la evidencia, identifica brechas de validez, propone alternativas viables y detente para decisiones docentes materiales.",
      "",
      "CONTEXTO DEL CURSO",
      `- Curso: ${form.courseName}`,
      `- Programa o unidad: ${form.program || "No especificado"}`,
      `- Modalidad: ${form.modality}`,
      `- Duración: ${form.duration}`,
      `- Cohorte aproximada: ${form.cohort} estudiantes`,
      "",
      "APRENDIZAJE ESPERADO",
      `- Estado de los objetivos: ${form.objectiveStatus}`,
      `- Resultados o propósito: ${form.outcomes}`,
      "",
      "EVALUACIÓN ACTUAL",
      `- Producto o desempeño principal: ${form.finalProduct}`,
      `- Ponderaciones: ${form.weighting}`,
      `- Modalidad de trabajo: ${form.groupMode}`,
      `- Evidencia de proceso ya existente: ${form.currentEvidence || "No documentada"}`,
      "",
      "PROCESOS QUE NECESITAN MAYOR EVIDENCIA",
      `- ${form.invisibleEvidence.join("; ")}`,
      "",
      "USO DE IA Y RESTRICCIONES",
      `- Política o acuerdo sobre IA: ${form.aiPolicy}`,
      `- Herramientas autorizadas: ${form.allowedTools || "No especificadas"}`,
      `- Restricciones docentes u operativas: ${form.constraints}`,
      `- Capacidad de revisión: ${form.reviewCapacity || "No especificada"}`,
      `- Accesibilidad o formatos equivalentes: ${form.accessibility || "No especificados"}`,
      `- Elementos que deben preservarse: ${form.preserve || "No especificados"}`,
      "",
      "CONDICIONES DE TRABAJO",
      "- No solicites, infieras ni utilices datos personales, calificaciones o trabajos de estudiantes.",
      "- Distingue hechos documentados, propuestas del modelo y decisiones docentes.",
      "- Formula solo preguntas que puedan cambiar materialmente el diseño.",
      "- Aplica HARD STOP 1 mientras existan preguntas materiales sin resolver.",
      "- Si falta un objetivo aprobado, propone alternativas observables y aplica ALIGNMENT STOP antes de derivar actividades.",
      "- Compara al menos dos alternativas con carga, riesgos y trade-offs.",
      "- No compiles artefactos ni prepares Canvas hasta contar con confirmación docente.",
      "- Canvas debe permanecer sin mutaciones durante el diagnóstico y el rediseño.",
      "",
      "Comienza mostrando un inventario de evidencia y un diagnóstico de validez vinculado a las fuentes. Después formula como máximo tres preguntas docentes que puedan cambiar el diseño.",
    ].join("\n");
    setPrompt(generated);
    setCopyState("idle");
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }

  function downloadPrompt() {
    const blob = new Blob([prompt], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "assesstrace-prompt-inicial.md";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="wizard-shell shell" aria-labelledby="wizard-title">
      <div className="privacy-banner" role="note">
        <strong>Trabaja solo con estructura del curso.</strong>
        <span>No ingreses nombres, RUT, correos, notas ni trabajos de estudiantes.</span>
      </div>
      <div className="wizard-progress">
        <div className="progress-copy"><span>Paso {step + 1} de {stepNames.length}</span><strong>{stepNames[step]}</strong></div>
        <div className="progress-track" role="progressbar" aria-label="Progreso del diagnóstico" aria-valuemin={1} aria-valuemax={6} aria-valuenow={step + 1}><span style={{ width: `${progress}%` }} /></div>
      </div>
      <div className="wizard-panel">
        <h2 id="wizard-title">{stepTitle(step)}</h2>
        <p className="wizard-help">{stepHelp(step)}</p>

        {step === 0 && (
          <div className="form-grid">
            <Field label="Curso o asignatura" id="courseName" error={errors.courseName}><input id="courseName" value={form.courseName} onChange={(event) => update("courseName", event.target.value)} /></Field>
            <Field label="Programa o unidad" id="program"><input id="program" value={form.program} onChange={(event) => update("program", event.target.value)} /></Field>
            <Field label="Modalidad" id="modality"><select id="modality" value={form.modality} onChange={(event) => update("modality", event.target.value)}><option>Presencial</option><option>Híbrida</option><option>En línea</option></select></Field>
            <Field label="Duración aproximada" id="duration" error={errors.duration}><input id="duration" placeholder="Ej.: 8 semanas" value={form.duration} onChange={(event) => update("duration", event.target.value)} /></Field>
            <Field label="Número aproximado de estudiantes" id="cohort" error={errors.cohort}><input id="cohort" type="number" min="1" inputMode="numeric" value={form.cohort} onChange={(event) => update("cohort", event.target.value)} /></Field>
          </div>
        )}

        {step === 1 && (
          <div className="form-stack">
            <Field label="Estado de los objetivos" id="objectiveStatus"><select id="objectiveStatus" value={form.objectiveStatus} onChange={(event) => update("objectiveStatus", event.target.value)}><option>Existen resultados de aprendizaje aprobados</option><option>Existe un propósito general, pero debe confirmarse</option><option>No existe todavía un objetivo aprobado</option></select></Field>
            <Field label="Resultados de aprendizaje o propósito del curso" id="outcomes" error={errors.outcomes} help="Resume los resultados aprobados. No incluyas información de estudiantes."><textarea id="outcomes" rows={6} value={form.outcomes} onChange={(event) => update("outcomes", event.target.value)} /></Field>
          </div>
        )}

        {step === 2 && (
          <div className="form-stack">
            <Field label="Producto o desempeño principal" id="finalProduct" error={errors.finalProduct}><textarea id="finalProduct" rows={4} value={form.finalProduct} onChange={(event) => update("finalProduct", event.target.value)} /></Field>
            <Field label="Ponderaciones actuales" id="weighting" error={errors.weighting} help="Ej.: proyecto grupal 70%, presentación 25%, reflexión individual 5%."><textarea id="weighting" rows={3} value={form.weighting} onChange={(event) => update("weighting", event.target.value)} /></Field>
            <Field label="Modalidad de trabajo" id="groupMode"><select id="groupMode" value={form.groupMode} onChange={(event) => update("groupMode", event.target.value)}><option>Combinación grupal e individual</option><option>Principalmente grupal</option><option>Principalmente individual</option></select></Field>
            <Field label="Evidencia de proceso que ya existe" id="currentEvidence" help="Hitos, bitácoras, defensas, feedback, versiones u otras evidencias."><textarea id="currentEvidence" rows={4} value={form.currentEvidence} onChange={(event) => update("currentEvidence", event.target.value)} /></Field>
          </div>
        )}

        {step === 3 && (
          <fieldset className="choice-fieldset">
            <legend>¿Qué procesos necesitan ser más visibles?</legend>
            <p>Selecciona todos los que correspondan.</p>
            <div className="choice-grid">{evidenceOptions.map((item) => <label className="choice-item" key={item}><input type="checkbox" checked={form.invisibleEvidence.includes(item)} onChange={() => toggleEvidence(item)} /><span>{item}</span></label>)}</div>
            {errors.invisibleEvidence && <p className="field-error" role="alert">{errors.invisibleEvidence}</p>}
          </fieldset>
        )}

        {step === 4 && (
          <div className="form-stack">
            <Field label="Política o acuerdo actual sobre uso de IA" id="aiPolicy" error={errors.aiPolicy}><textarea id="aiPolicy" rows={4} value={form.aiPolicy} onChange={(event) => update("aiPolicy", event.target.value)} /></Field>
            <Field label="Herramientas autorizadas" id="allowedTools"><input id="allowedTools" placeholder="Ej.: ChatGPT, Copilot Chat, Gemini" value={form.allowedTools} onChange={(event) => update("allowedTools", event.target.value)} /></Field>
            <Field label="Restricciones reales del rediseño" id="constraints" error={errors.constraints} help="Tiempo docente, número de equipos, ponderaciones, hitos que deben mantenerse, etc."><textarea id="constraints" rows={4} value={form.constraints} onChange={(event) => update("constraints", event.target.value)} /></Field>
            <div className="form-grid">
              <Field label="Capacidad de revisión" id="reviewCapacity"><input id="reviewCapacity" placeholder="Ej.: 6 horas totales" value={form.reviewCapacity} onChange={(event) => update("reviewCapacity", event.target.value)} /></Field>
              <Field label="Accesibilidad o formatos equivalentes" id="accessibility"><input id="accessibility" value={form.accessibility} onChange={(event) => update("accessibility", event.target.value)} /></Field>
            </div>
            <Field label="Elementos que deben preservarse" id="preserve"><textarea id="preserve" rows={3} value={form.preserve} onChange={(event) => update("preserve", event.target.value)} /></Field>
          </div>
        )}

        {step === 5 && (
          <div className="review-content">
            <dl className="review-list">
              <div><dt>Curso</dt><dd>{form.courseName} · {form.cohort} estudiantes · {form.duration}</dd></div>
              <div><dt>Aprendizaje</dt><dd>{form.outcomes}</dd></div>
              <div><dt>Evaluación actual</dt><dd>{form.finalProduct} · {form.weighting}</dd></div>
              <div><dt>Procesos por visibilizar</dt><dd>{selectedSummary}</dd></div>
              <div><dt>Restricciones</dt><dd>{form.constraints}</dd></div>
            </dl>
            <label className="privacy-confirm"><input type="checkbox" checked={form.privacyConfirmed} onChange={(event) => update("privacyConfirmed", event.target.checked)} /><span>Confirmo que no ingresé nombres, datos personales, calificaciones ni trabajos de estudiantes.</span></label>
            {errors.privacyConfirmed && <p className="field-error" role="alert">{errors.privacyConfirmed}</p>}
            {!prompt && <button className="button button-accent" type="button" onClick={buildPrompt}>Generar mi prompt inicial</button>}
          </div>
        )}

        {step === 5 && prompt && (
          <div className="prompt-result" aria-live="polite">
            <div className="result-heading"><div><span>Prompt generado localmente</span><h3>Listo para iniciar en Codex</h3></div><span className="local-badge">No enviado</span></div>
            <textarea aria-label="Prompt inicial generado" value={prompt} onChange={(event) => setPrompt(event.target.value)} rows={20} />
            <div className="button-row"><button className="button button-primary" type="button" onClick={copyPrompt}>{copyState === "copied" ? "Prompt copiado" : "Copiar prompt"}</button><button className="button button-secondary" type="button" onClick={downloadPrompt}>Descargar Markdown</button><Link className="button button-secondary" href="/acceso">Instalar AssessTrace</Link></div>
            {copyState === "error" && <p className="field-error" role="alert">No fue posible copiar automáticamente. Selecciona el texto y cópialo manualmente.</p>}
          </div>
        )}

        <div className="wizard-actions">
          <button className="button button-secondary" type="button" onClick={back} disabled={step === 0}>Volver</button>
          {step < 5 && <button className="button button-primary" type="button" onClick={next}>Continuar a {stepNames[step + 1]}</button>}
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, help, error, children }: { label: string; id: string; help?: string; error?: string; children: React.ReactNode }) {
  const describedBy = [help ? `${id}-help` : "", error ? `${id}-error` : ""].filter(Boolean).join(" ") || undefined;
  return <div className="field"><label htmlFor={id}>{label}</label>{help && <p id={`${id}-help`} className="field-help">{help}</p>}<div aria-describedby={describedBy}>{children}</div>{error && <p id={`${id}-error`} className="field-error" role="alert">{error}</p>}</div>;
}

function stepTitle(step: number) {
  return ["Cuéntanos dónde ocurre esta evaluación", "¿Qué aprendizaje debería poder demostrarse?", "¿Qué observa hoy la evaluación?", "¿Qué parte del proceso permanece invisible?", "Define el uso de IA y los límites reales", "Revisa antes de generar"][step];
}
function stepHelp(step: number) {
  return ["Usa descripciones generales. No incluyas nombres ni identificadores.", "Si los resultados están aprobados, resúmelos sin reescribirlos.", "Describe la estructura actual, aunque todavía no esté formalizada por completo.", "Esto orientará el diagnóstico; no asigna automáticamente ponderaciones.", "Los límites hacen que las alternativas sean viables y gobernables.", "Puedes volver a cualquier paso. Nada se envía ni se guarda en un servidor."][step];
}
