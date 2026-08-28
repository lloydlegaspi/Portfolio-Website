import { rename, stat } from "node:fs/promises";
import sharp from "sharp";

const targets = [
  { path: "public/images/projects/ProjectAMIHANHomePage.png", width: 1600 },
  { path: "public/images/projects/Cyclistic.png", width: 1600 },
  { path: "public/images/education-logos/nnhs-logo.png", width: 512 },
  { path: "public/images/projects/CCISConcernHub.png", width: 1600 },
  { path: "public/images/projects/Recall.png", width: 1600 },
];

for (const target of targets) {
  const before = (await stat(target.path)).size;
  const temporaryPath = `${target.path}.optimized`;

  await sharp(target.path)
    .resize({ width: target.width, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toFile(temporaryPath);
  await rename(temporaryPath, target.path);

  const after = (await stat(target.path)).size;
  process.stdout.write(
    `${target.path}: ${(before / 1_048_576).toFixed(2)} MiB -> ${(after / 1_048_576).toFixed(2)} MiB\n`,
  );
}
