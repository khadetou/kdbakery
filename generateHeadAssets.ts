import { readdir, writeFile } from "fs/promises";
import { join, relative } from "path";

/**
 * Récupère récursivement tous les chemins de fichiers dans le répertoire donné.
 */
async function getFilesRecursively(dir: string): Promise<string[]> {
  let files: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      const subFiles = await getFilesRecursively(fullPath);
      files = files.concat(subFiles);
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

async function generateHeadAssets() {
  // Répertoires à scanner
  const cssDir = join(process.cwd(), "public/assets/css");
  const jsDir = join(process.cwd(), "public/assets/js");
  const fontsDir = join(process.cwd(), "public/assets/fonts");

  // --- Traitement des fichiers CSS
  let cssFiles: string[] = [];
  try {
    cssFiles = await getFilesRecursively(cssDir);
  } catch (err) {
    console.error("Erreur de lecture du répertoire CSS:", err);
  }
  const cssLinks = cssFiles
    .filter((file) => file.endsWith(".css"))
    .map((file) => {
      const relativePath =
        "/" + relative(join(process.cwd(), "public"), file).replace(/\\/g, "/");
      return { rel: "stylesheet", href: relativePath };
    });

  // --- Traitement des fichiers JS
  let jsFiles: string[] = [];
  try {
    jsFiles = await getFilesRecursively(jsDir);
  } catch (err) {
    console.error("Erreur de lecture du répertoire JS:", err);
  }

  const jsOrder = [
    "jquery-3.6.0.min.js",
    "jquery-migrate-3.0.0.min.js",
    "modernizr-2.6.2.min.js",
    "popper.min.js",
    "bootstrap.min.js",
    "jquery.isotope.v3.0.2.js",
    "jquery.magnific-popup.js",
    "pace.js",
    "vegas.slider.min.js",
    "owl.carousel.min.js",
    "select2.js",
    "smoke.js",
    "smooth-scroll.min.js",
    "imagesloaded.pkgd.min.js",
    "YouTubePopUp.js",
    "scrollIt.min.js",
    "jquery.stellar.min.js",
    "jquery.waypoints.min.js",
    "datepicker.js",
    "custom.js",
  ];

  // Filtrer et trier les fichiers JS selon jsOrder
  const filteredJsFiles = jsFiles.filter((file) => file.endsWith(".js"));
  filteredJsFiles.sort((a, b) => {
    const nameA = a.split("/").pop()!;
    const nameB = b.split("/").pop()!;
    const indexA = jsOrder.indexOf(nameA);
    const indexB = jsOrder.indexOf(nameB);
    return (
      (indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA) -
      (indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB)
    );
  });

  // Pour jQuery et jquery-migrate, on ne définit pas l'attribut defer
  const jsScripts = filteredJsFiles.map((file) => {
    const fileName = file.split("/").pop()!;
    const relativePath =
      "/" + relative(join(process.cwd(), "public"), file).replace(/\\/g, "/");
    const script: Record<string, any> = { src: relativePath };
    if (
      fileName !== "jquery-3.6.0.min.js" &&
      fileName !== "jquery-migrate-3.0.0.min.js"
    ) {
      script.defer = true;
    }
    return script;
  });

  // --- Traitement des fichiers de polices (fonts)
  const fontMimeTypes: Record<string, string> = {
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".ttf": "font/ttf",
    ".otf": "font/otf",
    ".eot": "application/vnd.ms-fontobject",
  };
  let fontFiles: string[] = [];
  try {
    fontFiles = await getFilesRecursively(fontsDir);
  } catch (err) {
    console.error("Erreur de lecture du répertoire des fonts:", err);
  }
  const fontLinks = fontFiles
    .filter((file) =>
      Object.keys(fontMimeTypes).some((ext) => file.endsWith(ext))
    )
    .map((file) => {
      const ext = Object.keys(fontMimeTypes).find((ext) => file.endsWith(ext))!;
      const type = fontMimeTypes[ext];
      const relativePath =
        "/" + relative(join(process.cwd(), "public"), file).replace(/\\/g, "/");
      return {
        rel: "preload",
        href: relativePath,
        as: "font",
        type: type,
        crossorigin: "anonymous",
      };
    });

  // --- Génération du contenu de sortie
  const outputContent = `// Fichier auto-généré. Ne pas modifier manuellement.
export const cssLinks = ${JSON.stringify(cssLinks, null, 2)};
export const jsScripts = ${JSON.stringify(jsScripts, null, 2)};
export const fontLinks = ${JSON.stringify(fontLinks, null, 2)};
`;

  const outputPath = join(process.cwd(), "headAssets.generated.ts");
  await writeFile(outputPath, outputContent);
  console.log("Fichier généré :", outputPath);
}

generateHeadAssets().catch((err) => {
  console.error("Erreur lors de la génération des assets :", err);
});
