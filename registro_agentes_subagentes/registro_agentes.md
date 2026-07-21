# Registro de Agentes, Subagentes, Prompts y Validaciones

## 🤖 Arquitectura del Sistema Multiagente

### 1. Agente Principal: Coordinador de Política Pública y Gobernanza
* **Rol:** Diseñar la estrategia de articulación interinstitucional para el mercado laboral de Cotopaxi y validar la coherencia entre los datos de la ENEMDU 2025 y la propuesta de política pública regional.
* **Fase de aplicación:** Definición del modelo de gobernanza y articulación institucional.

---

### 2. Subagentes Especializados

#### Subagente A: Analista de Microdatos e Indicadores (Python)
* **Función:** Procesar la base de datos `basedata2025limpia`, filtrar la provincia de Cotopaxi y calcular los indicadores del mercado laboral.
* **Prompt del Sistema utilizado:**
  > *"Actúa como un economista experto en econometría e indicadores laborales del INEC Ecuador. Escribe un script en Python (`indicadores.py`) que procese la base ENEMDU 2025 para la provincia de Cotopaxi y exporte un archivo `indicadores.json` con la población expandida, empleo adecuado, subempleo y desempleo."*
* **Resultados Obtenidos:**
  * **Población expandida analizada:** 399.904 personas.
  * **Empleo Adecuado:** 21,92% de la población ocupada.
  * **Subempleo:** 17,54% (suma de subempleo por ingresos y por tiempo de trabajo).
  * **Desempleo:** 1,81%.
* **Validación de Resultados:** 
  * Se aplicaron y verificaron los factores de expansión oficiales de la ENEMDU 2025 para garantizar representatividad provincial.

---

#### Subagente B: Especialista en Gobernanza y Articulación Institucional
* **Función:** Estructurar la matriz de roles y competencias para la ejecución de la política pública regional en Cotopaxi.
* **Prompt del Sistema utilizado:**
  > *"Actúa como un especialista en desarrollo territorial y descentralización en Ecuador. Define las competencias y responsabilidades para un esquema tripartito de gobernanza entre la Prefectura de Cotopaxi, el MIPRO y los GAD Municipales para abordar el subempleo y el empleo informal."*
* **Definición del Esquema de Gobernanza:**
  * 🏛 **Prefectura de Cotopaxi:** Coordina la ejecución de la política pública, realiza el seguimiento institucional y evalúa los resultados obtenidos a nivel provincial.
  * 🏭 **MIPRO (Ministerio de Producción):** Promueve programas de fortalecimiento productivo, emprendimiento, innovación y generación de empleo.
  * 🏘 **GAD Municipales:** Ejecutan acciones territoriales directas, identifican a los beneficiarios en cada cantón y articulan los procesos de comercialización local.
* **Validación de Resultados:**
  * Verificación de la alineación legal con el COOTAD y las competencias exclusivas/concurrentes de los GADs.

---

#### Subagente C: Diseñador de Interfaz y Dashboard (Vercel)
* **Función:** Construir el dashboard estático en HTML/JS para la visualización pública de los datos.
* **Prompt del Sistema utilizado:**
  > *"Genera la estructura web en `index.html` para desplegar un dashboard interactivo que consuma `indicadores.json` y visualice la brecha entre empleo adecuado y subempleo en Cotopaxi."*
* **Validación de Resultados:**
  * Prueba de consumo de datos JSON e integración en el entorno de producción de Vercel.

---

## 📌 Conclusiones de la Validación del Sistema

1. **Diagnóstico General:** La población expandida de Cotopaxi es de 399.904 personas. La alta presencia de empleo vulnerable (subempleo del 17,54%) confirma la necesidad urgente de intervención estatal coordinada.
2. **Brecha de Formalidad:** El empleo adecuado representa apenas el 21,92% de la población ocupada, evidenciando limitaciones estructurales para generar puestos formales y estables.
3. **Estrategia Recomendada:** Implementación de la propuesta coordinada entre la Prefectura, MIPRO y GADs Municipales para canalizar capacitación técnica, financiamiento a emprendimientos y canales de comercialización que eleven la productividad regional.