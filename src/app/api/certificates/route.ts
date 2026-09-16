import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import { join } from "path";

export async function GET() {
  try {
    const certificatesDir = join(process.cwd(), "public", "certificates");

    // Leer los archivos de la carpeta
    const files = await readdir(certificatesDir);

    // Filtrar solo archivos de imagen y PDF
    const certificates = files
      .filter((file) => {
        const ext = file.toLowerCase().slice(-4);
        return (
          ext === ".pdf" ||
          ext === ".png" ||
          ext === ".jpg" ||
          file.toLowerCase().endsWith(".jpeg")
        );
      })
      .map((file) => ({
        name: file,
        url: `/certificates/${file}`,
      }));

    return NextResponse.json(certificates);
  } catch (error) {
    console.error("Error reading certificates directory:", error);
    return NextResponse.json([], { status: 200 });
  }
}
