#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para regenerar los arrays de fotos en selector.js y selector-originales.js

Uso:
  py generate_photos_array.py           -> actualiza ambos selectores
  py generate_photos_array.py editadas  -> solo selector.js (imagenes/*.webp)
  py generate_photos_array.py originales -> solo selector-originales.js (imagenes/todas originales/*.webp)
"""
import re
import sys
from pathlib import Path


def build_array(photos_dir: Path, prefix: str) -> str:
    photos = sorted(photos_dir.glob("*.webp"))
    if not photos:
        return None, 0
    lines = ["const photos = ["]
    for i, p in enumerate(photos):
        comma = "," if i < len(photos) - 1 else ""
        lines.append(f"    '{prefix}/{p.name}'{comma}")
    lines.append("];")
    return "\n".join(lines), len(photos)


def update_js(js_path: Path, new_array: str) -> bool:
    if not js_path.exists():
        print(f"Error: No se encontró {js_path}")
        return False
    content = js_path.read_text(encoding="utf-8")
    new_content = re.sub(r"const photos\s*=\s*\[[\s\S]*?\];", new_array, content, count=1)
    if new_content == content:
        print(f"Advertencia: No se encontró el bloque 'const photos' en {js_path}")
        return False
    js_path.write_text(new_content, encoding="utf-8")
    return True


def run_editadas():
    dir_editadas = Path("imagenes")
    if not dir_editadas.exists():
        print("Error: No existe la carpeta imagenes/")
        return
    array, count = build_array(dir_editadas, "imagenes")
    if not array:
        print("No se encontraron fotos .webp en imagenes/")
        return
    if update_js(Path("js/selector.js"), array):
        print(f"[OK] selector.js actualizado — {count} fotos")


def run_originales():
    dir_orig = Path("imagenes/todas originales")
    if not dir_orig.exists():
        print("Error: No existe la carpeta 'imagenes/todas originales/'")
        return
    array, count = build_array(dir_orig, "imagenes/todas originales")
    if not array:
        print("No se encontraron fotos .webp en imagenes/todas originales/")
        return
    if update_js(Path("js/selector-originales.js"), array):
        print(f"[OK] selector-originales.js actualizado — {count} fotos")


if __name__ == "__main__":
    arg = sys.argv[1].lower() if len(sys.argv) > 1 else "ambos"

    if arg in ("editadas", "editada"):
        run_editadas()
    elif arg in ("originales", "original"):
        run_originales()
    else:
        run_editadas()
        run_originales()

    print("\nListo. Haz: git add js/ && git commit -m 'Actualizar fotos' && git push")
