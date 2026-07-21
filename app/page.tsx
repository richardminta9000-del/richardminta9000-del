import indicadores from "../data/indicadores.json";

export default function Home() {
  const subempleoTotal = (
    indicadores["Subempleo Tiempo"] +
    indicadores["Subempleo Ingresos"]
  ).toFixed(2);

  const desempleoTotal = (
    indicadores["Desempleo Abierto"] +
    indicadores["Desempleo Oculto"]
  ).toFixed(2);

  return (
    <main className="container">
      <h1 className="title">
        Política pública para reducir desempleo y subempleo
      </h1>

      <p className="subtitle">
        Provincia de Cotopaxi · ENEMDU 2025 · población de 15 años y más
      </p>

      <div className="grid">
        <div className="card">
          <h3>Población expandida</h3>
          <p>
            {indicadores["Poblacion Expandida"].toLocaleString()}
          </p>
        </div>

        <div className="card">
          <h3>Empleo adecuado</h3>
          <p>{indicadores["Empleo Adecuado"]}%</p>
        </div>

        <div className="card">
          <h3>Subempleo total</h3>
          <p>{subempleoTotal}%</p>
        </div>

        <div className="card">
          <h3>Desempleo total</h3>
          <p>{desempleoTotal}%</p>
        </div>
      </div>

      <section className="section">
        <h2>Resumen de indicadores</h2>

        <table>
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Valor</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(indicadores).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>
                  {typeof value === "number" && key !== "Poblacion Expandida"
                    ? `${value}%`
                    : value.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>Interpretación principal</h2>

        <div className="card">
          <p>
            Los resultados de la ENEMDU 2025 muestran que el principal
            desafío laboral en Cotopaxi no es únicamente el desempleo
            abierto, sino la precariedad laboral, reflejada en los
            niveles de subempleo, empleo no pleno y trabajo no
            remunerado.
          </p>

          <p>
            Por ello, la política pública propuesta se orienta a
            fortalecer la inserción laboral, la capacitación
            productiva y los mecanismos locales de comercialización.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Arquitectura multiagente</h2>

        <div className="grid">
          <div className="card">
            <h3>Agente coordinador</h3>
            <p>Prefectura de Cotopaxi</p>
          </div>

          <div className="card">
            <h3>Agente productivo</h3>
            <p>MIPRO</p>
          </div>

          <div className="card">
            <h3>Agente de comercialización</h3>
            <p>GAD Municipales</p>
          </div>
        </div>
      </section>
    </main>
  );
}