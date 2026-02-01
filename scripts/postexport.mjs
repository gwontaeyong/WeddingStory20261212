import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");

// GitHub Pages에서 Jekyll이 _next 같은 폴더를 건드리지 않게
fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

// basePath를 쓰는 경우를 위해 404도 보장(정적)
const notFound = path.join(outDir, "404.html");
if (!fs.existsSync(notFound)) {
  // Next가 out/404.html 생성하는 경우가 많지만 안전장치
  fs.writeFileSync(notFound, "<!doctype html><meta charset='utf-8'><title>404</title><h1>404</h1>");
}

console.log("postexport: wrote out/.nojekyll");
