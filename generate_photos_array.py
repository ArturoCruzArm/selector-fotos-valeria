#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para generar el array de fotos para selector.js
Uso: python generate_photos_array.py
"""
import os
import re
from pathlib import Path


def generate_photos_array():
    """Genera el array JS y lo inserta directamente en js/selector.js"""

    imagenes_dir = Path("imagenes")

    if not imagenes_dir.exists():
        print(f"Error: El directorio {imagenes_dir} no existe")
        return False

    photos = sorted(imagenes_dir.glob("*.webp"))

    if not photos:
        print("No se encontraron fotos WebP en la carpeta imagenes/")
        return False

    # Construir el array JS
    lines = ["const photos = ["]
    for i, photo in enumerate(photos):
        comma = "," if i < len(photos) - 1 else ""
        lines.append(f"    'imagenes/{photo.name}'{comma}")
    lines.append("];")
    js_array = "\n".join(lines)

    print(f"[OK] {len(photos)} fotos encontradas")
    print(f"Primeras 5: {[p.name for p in photos[:5]]}")

    # Actualizar js/selector.js reemplazando el bloque const photos = [...]
    selector_js = Path("js/selector.js")
    if not selector_js.exists():
        print("Error: No se encontró js/selector.js")
        return False

    content = selector_js.read_text(encoding="utf-8")
    new_content = re.sub(
        r"const photos\s*=\s*\[[\s\S]*?\];",
        js_array,
        content,
        count=1
    )

    if new_content == content:
        print("Advertencia: No se encontró el bloque 'const photos = [...]' en selector.js")
        # Guardar en archivo separado como respaldo
        Path("photos_array.txt").write_text(js_array, encoding="utf-8")
        print("[OK] Array guardado en photos_array.txt (cópialo manualmente)")
        return True

    selector_js.write_text(new_content, encoding="utf-8")
    print(f"[OK] js/selector.js actualizado con {len(photos)} fotos")
    print("Ahora haz: git add js/selector.js && git commit && git push")
    return True


if __name__ == "__main__":
    generate_photos_array()
