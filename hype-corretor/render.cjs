// Renderiza index.html quadro a quadro (Playwright) e monta o MP4 (ffmpeg).
// Uso: node render.cjs [pasta_de_frames]   |   STILLS=1 node render.cjs pasta  (só alguns quadros)
const { chromium } = require("playwright");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { pathToFileURL } = require("node:url");

(async () => {
  const here = __dirname;
  const framesDir = path.resolve(process.argv[2] || path.join(here, ".frames"));
  const FPS = 30, DURATION = 30;
  const stills = process.env.STILLS === "1";
  const outFile = path.join(here, "out", "corretor-hype.mp4");

  fs.rmSync(framesDir, { recursive: true, force: true });
  fs.mkdirSync(framesDir, { recursive: true });
  fs.mkdirSync(path.dirname(outFile), { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(path.join(here, "index.html")).href, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);

  if (stills) {
    const times = [1, 2, 5, 8, 11.5, 15, 18.5, 22, 25.5, 29];
    for (const t of times) {
      await page.evaluate(sec => window.renderAt(sec), t);
      await page.screenshot({ path: path.join(framesDir, `still_${t}.png`) });
    }
    await browser.close();
    console.log("stills ok");
    return;
  }

  const total = DURATION * FPS;
  for (let i = 0; i < total; i++) {
    await page.evaluate(sec => window.renderAt(sec), i / FPS);
    await page.screenshot({ path: path.join(framesDir, `f_${String(i).padStart(5, "0")}.png`) });
  }
  await browser.close();

  const ff = spawnSync("ffmpeg", ["-y", "-framerate", String(FPS), "-i", path.join(framesDir, "f_%05d.png"),
    "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-pix_fmt", "yuv420p", "-movflags", "+faststart", outFile],
    { stdio: "inherit" });
  if (ff.status !== 0 || !fs.existsSync(outFile)) { console.error("ffmpeg falhou"); process.exit(1); }
  console.log(`MP4 gerado: ${outFile} (${total} quadros, ${DURATION}s)`);
})().catch(e => { console.error(e); process.exit(1); });
