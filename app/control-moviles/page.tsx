import type { Metadata } from "next";
import Link from "next/link";
import { InformationPage } from "@/components/information-page";

export const metadata: Metadata = {
  title: "Control de móviles — Informes Spotify",
  description: "Consulta las sesiones de Spotify, cuentas, planes e IP de tus móviles en GenFarmer y sincroniza los resultados con tu hoja de Google.",
  alternates: { canonical: "/control-moviles", languages: { es: "/control-moviles" } },
  openGraph: { title: "Control de móviles — Informes Spotify", url: "/control-moviles", locale: "es_ES" },
};

export default function DeviceReportsPage() {
  return (
    <InformationPage title="Tus móviles, con la información clara." introduction="Control de móviles — Informes Spotify es una herramienta de NewTalentt para consultar tus dispositivos en GenFarmer y mantener tu hoja de control actualizada.">
      <section aria-labelledby="report-features">
        <h2 id="report-features">Qué puedes comprobar</h2>
        <ul>
          <li>Qué cuenta tiene abierta cada móvil y si su sesión está abierta, cerrada o sin confirmar.</li>
          <li>El plan de Spotify que se haya podido comprobar, la IP local y la IP pública observada.</li>
          <li>La fecha de cada comprobación, con buscador, filtros y páginas para localizar dispositivos.</li>
          <li>Los resultados dentro de GenFarmer y su descarga en Excel, CSV, PDF o TXT.</li>
        </ul>
      </section>
      <section aria-labelledby="google-connection">
        <h2 id="google-connection">Tu hoja de Google, al día</h2>
        <p>Conecta una cuenta de Google que pueda editar tu hoja de control. Al pulsar Actualizar informe en GenFarmer, la herramienta revisa los móviles elegidos y envía sus resultados al terminar. Los demás conservan sus últimas comprobaciones.</p>
        <p>Google solicita un permiso que permite ver, editar, crear y eliminar hojas de cálculo de tu cuenta. La herramienta utiliza ese permiso para leer la estructura y actualizar únicamente la hoja que hayas vinculado. No crea ni elimina tus hojas.</p>
        <p>La sincronización no envía contraseñas ni cookies y no modifica la columna manual KEY UPDATE. La autorización se guarda cifrada en tu ordenador con la protección de tu usuario de Windows.</p>
      </section>
      <section aria-labelledby="control-and-support">
        <h2 id="control-and-support">Tú decides qué revisar</h2>
        <p>La revisión de informes consulta las sesiones existentes. No inicia ni cierra sesiones de Spotify. Si no puede confirmar un dato, lo indica; una IP pública por sí sola no demuestra que exista un proxy.</p>
        <p>Esta integración requiere un ordenador Windows, GenFarmer, acceso a tus dispositivos y una hoja compatible. Es una herramienta independiente de NewTalentt, sin afiliación oficial con Google, Spotify ni GenFarmer.</p>
        <p><Link href="/control-moviles/privacidad">Consulta cómo tratamos los datos</Link>.</p>
        <p>Soporte: <a href="mailto:newtalentt-controlmoviles-soporte@googlegroups.com">newtalentt-controlmoviles-soporte@googlegroups.com</a>.</p>
      </section>
    </InformationPage>
  );
}
