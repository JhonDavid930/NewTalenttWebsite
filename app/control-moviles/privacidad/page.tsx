import type { Metadata } from "next";
import { InformationPage } from "@/components/information-page";

export const metadata: Metadata = {
  title: "Privacidad de Control de móviles",
  description: "Acceso, uso, almacenamiento y conservación de los datos de Google en Control de móviles — Informes Spotify de NewTalentt.",
  alternates: { canonical: "/control-moviles/privacidad", languages: { es: "/control-moviles/privacidad" } },
  openGraph: { title: "Privacidad de Control de móviles", url: "/control-moviles/privacidad", locale: "es_ES" },
};

export default function DeviceReportsPrivacyPage() {
  return (
    <InformationPage title="Privacidad de Control de móviles" introduction="Esta política describe el tratamiento de datos de la función de informes y su conexión con Google Sheets en Control de móviles — Informes Spotify, de NEWTALENTT, LLC. Última actualización: 7 de noviembre de 2026.">
      <section aria-labelledby="privacy-contact">
        <h2 id="privacy-contact">Quién ofrece la herramienta</h2>
        <p>NEWTALENTT, LLC. Dirección postal: 7345 W Sand Lake Rd, Ste 210, Office 3744, Orlando, FL 32819, Estados Unidos.</p>
        <p>Para consultas de privacidad o asistencia: <a href="mailto:newtalentt-controlmoviles-soporte@googlegroups.com">newtalentt-controlmoviles-soporte@googlegroups.com</a>.</p>
        <p>Esta política cubre la función de informes y su sincronización con Sheets. No describe un servicio de almacenamiento o exportación de cookies.</p>
      </section>
      <section aria-labelledby="privacy-access">
        <h2 id="privacy-access">Qué datos se consultan</h2>
        <p>La revisión local puede observar el identificador y número del dispositivo, la cuenta abierta en Spotify, el estado de sesión, el plan, las IP local y pública y las fechas de comprobación. Solo debes revisar dispositivos y cuentas que tengas autorización para administrar.</p>
        <p>Al conectar Google, solicitas el permiso de Google Sheets. Su alcance permite ver, editar, crear y eliminar hojas de cálculo de tu cuenta. El código de esta integración utiliza exclusivamente el documento vinculado: lee su zona horaria, estructura, encabezados, rangos y filas automáticas para asociar los resultados a los dispositivos y actualizar las celdas correspondientes. No crea ni elimina documentos.</p>
        <p>No consulta Gmail, contactos ni el contenido de otros documentos. No lee los valores de KEY UPDATE ni las contraseñas de tus listados. Los tokens de Google permiten mantener la conexión y no son tu contraseña de Google.</p>
      </section>
      <section aria-labelledby="privacy-purpose">
        <h2 id="privacy-purpose">Para qué se utilizan</h2>
        <p>Los datos se utilizan para elaborar el informe solicitado, mantener la correspondencia entre dispositivo y cuenta, actualizar las filas de la hoja vinculada, evitar duplicados y reintentar entregas pendientes. La integración no utiliza estos datos para publicidad, venta de datos ni entrenamiento de modelos de inteligencia artificial.</p>
        <p>El uso y la transferencia de información obtenida de las APIs de Google se ajustarán a la <a href="https://developers.google.com/terms/api-services-user-data-policy" rel="noreferrer">Política de Datos de Usuario de los Servicios de API de Google</a>, incluidos sus requisitos de Uso Limitado.</p>
      </section>
      <section aria-labelledby="privacy-storage">
        <h2 id="privacy-storage">Dónde se guardan y comparten</h2>
        <p>El informe, el historial y la cola de entregas se guardan en el ordenador que ejecuta la herramienta. Las credenciales de conexión de Google se cifran con DPAPI y quedan vinculadas al usuario de Windows. Los informes locales contienen datos personales y deben protegerse mediante los permisos y la seguridad del equipo.</p>
        <p>Cuando activas la sincronización, los resultados se transmiten mediante HTTPS a la API de Google Sheets y quedan en tu documento. Google los almacena según sus condiciones y la configuración de tu cuenta. Las personas que tengan acceso a esa hoja podrán ver los datos según los permisos que tú hayas concedido.</p>
        <p>Esta función no envía informes ni tokens a un servidor de NewTalentt. Si decides enviarnos información para recibir soporte, recibiremos únicamente lo que nos remitas y lo utilizaremos para atender esa solicitud. No envíes contraseñas, cookies ni tokens.</p>
      </section>
      <section aria-labelledby="privacy-retention">
        <h2 id="privacy-retention">Conservación y eliminación</h2>
        <p>Los informes, el historial, las exportaciones y la cola local no se eliminan automáticamente al finalizar una revisión. Permanecen hasta que los elimines del ordenador o de Google Sheets. Las copias de seguridad y los archivos que hayas compartido deben gestionarse por separado.</p>
        <p>Puedes detener la sincronización y revocar el acceso desde <a href="https://myaccount.google.com/connections" rel="noreferrer">las conexiones de tu cuenta de Google</a>. Revocar el permiso impide nuevas entregas, pero no elimina los datos ya guardados. Para retirar la conexión local o solicitar ayuda con la eliminación, contacta con soporte. Detén la herramienta antes de retirar sus archivos de configuración y sus datos locales.</p>
        <p>Puedes solicitar acceso, corrección o eliminación de la información que hayas enviado a soporte escribiendo al correo indicado. Las solicitudes se atenderán conforme a la normativa aplicable y a las obligaciones de conservación que correspondan.</p>
      </section>
      <section aria-labelledby="privacy-changes">
        <h2 id="privacy-changes">Cambios de esta política</h2>
        <p>Publicaremos aquí las modificaciones con su fecha de actualización. Si cambia la forma en que se utilizan los datos de Google, la herramienta deberá informar del cambio y obtener una nueva autorización cuando corresponda.</p>
      </section>
    </InformationPage>
  );
}
