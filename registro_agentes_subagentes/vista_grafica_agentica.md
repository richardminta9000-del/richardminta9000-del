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