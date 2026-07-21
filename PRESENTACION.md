# UNIVERSIDAD TECNICA DE COTOPAXI
**Carrera:** ECONOMIA  
**Materia:** POLITICAS PUBLICAS  
**Estudiante:** Minta Hachi Richard Antony  
**Curso / Paralelo:** 6to "A"  
**Fecha:** 21 de Julio, 2026  

---

# 📊 RESUMEN EJECUTIVO DEL PROYECTO
## Sistema Multiagente de Gobernanza y Dashboard Interactivo: Política Pública para el Empleo en Cotopaxi (ENEMDU 2025)

---

## 🏛️ 1. Contexto e Indicadores del Mercado Laboral (ENEMDU 2025)

El presente proyecto analiza la estructura del mercado laboral en la provincia de Cotopaxi utilizando la base de datos de microdatos de la **ENEMDU 2025 (INEC)**. El procesamiento abarca una población expandida de **399.904 personas**.

### 📈 Indicadores Clave Obtenidos:
* **Empleo Adecuado:** **21,92%** de la población ocupada. Denota una limitada capacidad de absorción del sector formal y la necesidad de impulsar la productividad.
* **Subempleo Total:** **17,54%** (suma de subempleo por ingresos y por insuficiencia de tiempo de trabajo). Refleja vulnerabilidad estructural en los ingresos y calidad del empleo.
* **Desempleo:** **1,81%**. Indique que el problema central de la provincia no es la falta absoluta de trabajo, sino la **alta informalidad y precariedad (subempleo)**.

---

## 🤝 2. Esquema Tripartito de Gobernanza Territorial

Para transformar estos indicadores en acciones de desarrollo económico regional, se establece un modelo de gobernanza articulado entre tres actores principales:

* 🏛 **Prefectura de Cotopaxi:** Coordina la ejecución de la política pública a nivel provincial, realiza el seguimiento institucional continuo y evalúa el impacto de los resultados obtenidos.
* 🏭 **MIPRO (Ministerio de Producción, Comercio Exterior, Inversiones y Pesca):** Promueve programas de fortalecimiento productivo, fomento al emprendimiento, transferencia de innovación y generación de empleo cualificado.
* 🏘 **GAD Municipales:** Ejecutan las acciones territoriales directas en cada cantón, identifican a los beneficiarios locales y articulan circuitos de comercialización directa.

---

## 🤖 3. Arquitectura del Sistema Multiagente e Inteligencia Artificial

El desarrollo de este proyecto se estructuró mediante la orquestación de subagentes especializados asistidos por Inteligencia Artificial, garantizando trazabilidad y validación metodológica.

```mermaid
graph TD
    %% Estilos visuales
    classDef main fill:#1e293b,stroke:#3b82f6,stroke-width:2px,color:#fff;
    classDef agent fill:#0f172a,stroke:#10b981,stroke-width:2px,color:#fff;
    classDef input fill:#111827,stroke:#6366f1,stroke-width:2px,color:#fff;
    classDef output fill:#111827,stroke:#f59e0b,stroke-width:2px,color:#fff;
    classDef status fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#fff;

    %% Agente Principal
    Orquestador[🤖 Agente Principal<br/>Coordinador de Política Pública y Gobernanza]:::main

    %% Entradas / Fuentes de Datos
    BaseENEMDU[(📊 Microdatos ENEMDU 2025<br/>Cotopaxi: 399.904 hab)]:::input
    COOTAD[🏛️ Marco Legal COOTAD<br/>Competencias GADs]:::input

    %% Subagentes
    SubA[📊 Subagente A<br/>Analista de Microdatos e Indicadores]:::agent
    SubB[🏛️ Subagente B<br/>Especialista en Gobernanza Territorial]:::agent
    SubC[💻 Subagente C<br/>Diseñador Frontend / Dashboard]:::agent

    %% Conexiones de Entrada
    BaseENEMDU --> SubA
    COOTAD --> SubB
    Orquestador --> SubA
    Orquestador --> SubB
    Orquestador --> SubC

    %% Entregables / Salidas
    SubA --> OutA[📄 script python / data/indicadores.json<br/>- Empleo Adecuado: 21.92%<br/>- Subempleo: 17.54%<br/>- Desempleo: 1.81%]:::output
    SubB --> OutB[📄 Matriz de Gobernanza Tripartita<br/>- Prefectura: Evaluador<br/>- MIPRO: Productivo<br/>- GADs: Ejecución Local]:::output
    SubC --> OutC[🌐 Dashboard Interactivo<br/>index.html desplegado en Vercel]:::output

    %% Validaciones y Cierre
    OutA --> Validador{✅ Validaciones e Integración Final}
    OutB --> Validador
    OutC --> Validador

    Validador --> InformeFinal[📘 Informe Académico y Video de Demostración]:::status