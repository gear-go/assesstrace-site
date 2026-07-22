import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Evidence by Design" };
const chain = ["Necesidad", "Objetivo", "Indicador", "Evidencia", "Instrumento", "Procedimiento"] as const;
export default function MethodPage() {
  return (
    <main id="contenido-principal">
      <section className="page-hero method-hero"><div className="shell narrow-shell"><p className="brand-kicker dark-kicker">Evidence by Design</p><h1>Diseñar la evidencia antes de calendarizar la actividad.</h1><p>La metodología parte de lo que la evaluación debe permitir observar y mantiene separadas las fuentes, las propuestas de IA y las decisiones docentes.</p></div></section>
      <section className="section shell"><div className="section-heading"><h2>Una cadena que debe poder explicarse en ambos sentidos</h2><p>Cada actividad hereda una relación aprobada; no puede ampliar por accidente lo que un objetivo o instrumento pretende evaluar.</p></div><ol className="alignment-chain">{chain.map((item, index) => <li key={item}><span>{index + 1}</span><strong>{item}</strong></li>)}</ol></section>
      <section className="section method-layers"><div className="shell"><div className="section-heading compact-heading"><h2>Cuatro responsabilidades, sin zonas grises</h2></div><div className="layer-list"><article><span>01</span><div><h3>GPT-5.6 propone</h3><p>Comprende evidencia heterogénea, diagnostica brechas y compara alternativas con trade-offs.</p></div></article><article><span>02</span><div><h3>El docente decide</h3><p>Resuelve objetivos, ponderaciones, formatos, carga y todo cambio material.</p></div></article><article><span>03</span><div><h3>El motor verifica</h3><p>Rechaza decisiones pendientes, trazas espurias, pesos incompatibles y condiciones inseguras.</p></div></article><article><span>04</span><div><h3>Canvas MDS implementa</h3><p>Prepara una estructura revisable y no publicada para el curso confirmado.</p></div></article></div></div></section>
      <section className="section shell hard-stop-section"><div><h2>Detenerse también es una capacidad.</h2><p>Un HARD STOP evita que una propuesta plausible sea confundida con una decisión. El sistema pregunta, registra lo pendiente y espera confirmación docente.</p></div><div className="stop-signal"><span>HARD STOP</span><strong>Falta una decisión que puede cambiar el diseño.</strong><p>No se compilan artefactos ni se prepara Canvas hasta resolverla.</p></div></section>
      <section className="section final-cta shell"><h2>Prueba la metodología con el contexto de tu curso.</h2><Link className="button button-primary" href="/diagnostico">Generar prompt inicial</Link></section>
    </main>
  );
}
