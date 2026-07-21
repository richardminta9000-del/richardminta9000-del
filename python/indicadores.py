from pathlib import Path
import pandas as pd
import json

# ==========================================
# CONFIGURACIÓN
# ==========================================

BASE = Path(__file__).resolve().parent
DATA = BASE.parent / "data"

ARCHIVO = DATA / "basedata2025limpia.csv"

CONDICION = "condicionlaboral"
FACTOR = "factorexpancion"

# ==========================================
# LEER BASE
# ==========================================

df = pd.read_csv(
    ARCHIVO,
    sep=";",
    decimal=",",
    encoding="utf-8-sig"
)

print("Base cargada correctamente.")

# ==========================================
# POBLACIÓN TOTAL
# ==========================================

poblacion = df[FACTOR].sum()

print(f"Población expandida: {poblacion:,.2f}")

# ==========================================
# FUNCIÓN
# ==========================================

def porcentaje(codigo):

    total = df.loc[
        df[CONDICION] == codigo,
        FACTOR
    ].sum()

    return round(total / poblacion * 100, 2)


# ==========================================
# INDICADORES
# ==========================================

indicadores = {

    "Poblacion Expandida": round(poblacion),

    "Empleo Adecuado": porcentaje(1),

    "Subempleo Tiempo": porcentaje(2),

    "Subempleo Ingresos": porcentaje(3),

    "Otro Empleo No Pleno": porcentaje(4),

    "No Remunerado": porcentaje(5),

    "No Clasificado": porcentaje(6),

    "Desempleo Abierto": porcentaje(7),

    "Desempleo Oculto": porcentaje(8),

    "PEI": porcentaje(9)

}

# ==========================================
# GUARDAR JSON
# ==========================================

salida = DATA / "indicadores.json"

with open(
    salida,
    "w",
    encoding="utf-8"
) as archivo:

    json.dump(
        indicadores,
        archivo,
        indent=4,
        ensure_ascii=False
    )

print("\nIndicadores generados correctamente.\n")

for k, v in indicadores.items():
    print(f"{k:25} {v}")