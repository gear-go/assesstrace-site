import type { Metadata } from "next";
import { DiagnosticWizard } from "../components/DiagnosticWizard";
export const metadata: Metadata = { title: "Diagnóstico docente" };
export default function DiagnosticPage() {
  return (
    <main id="contenido-principal" className="diagnostic-page">
      <section className="diagnostic-intro">
        <div className="shell narrow-shell">
          <p className="brand-kicker dark-kicker">Diagnóstico docente · 7–10 minutos</p>
          <h1>Convierte el contexto de tu curso en un buen punto de partida.</h1>
          <p>La web no rediseña ni envía tus respuestas. Organiza la información necesaria para comenzar una conversación rigurosa con AssessTrace.</p>
        </div>
      </section>
      <DiagnosticWizard />
    </main>
  );
}
