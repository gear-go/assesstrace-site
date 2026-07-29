import Link from "next/link";

const nav = [
  ["Docentes", "/docentes"],
  ["Directivos", "/directivos"],
  ["Metodología", "/metodologia"],
  ["Acceso", "/acceso"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="AssessTrace, inicio">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span><strong>AssessTrace</strong><small>Evidence by Design · UDD</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link className="button button-small button-primary" href="/diagnostico">Crear mi prompt</Link>
        </nav>
        <details className="mobile-menu">
          <summary>Menú</summary>
          <nav aria-label="Navegación móvil">
            {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            <Link href="/diagnostico">Crear mi prompt</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-layout">
        <div>
          <p className="footer-brand">AssessTrace</p>
          <p>El aprendizaje deja huella.</p>
          <p className="footer-note">Producto respaldado por Universidad del Desarrollo. Canvas MDS es su primer adaptador técnico.</p>
        </div>
        <div className="footer-links">
          <Link href="/docentes">Para docentes</Link>
          <Link href="/directivos">Para directivos</Link>
          <Link href="/metodologia">Evidence by Design</Link>
          <Link href="/acceso">Instalar AssessTrace</Link>
        </div>
        <div className="footer-contact">
          <p>Contacto</p>
          <a href="mailto:gagomez@udd.cl">gagomez@udd.cl</a>
          <span>Universidad del Desarrollo · Chile</span>
        </div>
      </div>
    </footer>
  );
}
