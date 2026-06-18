import { existsSync, statSync } from "node:fs";
import { dirname, extname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));
const clientDir = join(rootDir, "dist", "client");
const serverModule = await import("./dist/server/server.js");
const serverHandler = serverModule.default;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".htm": "text/html; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function getStaticFilePath(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const normalizedPath = decodedPath === "/" ? "/index.html" : decodedPath;
  const filePath = resolve(clientDir, `.${normalizedPath}`);

  if (!filePath.startsWith(clientDir + sep)) {
    return null;
  }

  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    return null;
  }

  return filePath;
}

function createStaticResponse(filePath) {
  const type = contentTypes[extname(filePath)] ?? "application/octet-stream";
  return new Response(Bun.file(filePath), {
    headers: {
      "cache-control": "public, max-age=31536000, immutable",
      "content-type": type,
    },
  });
}

const port = Number(process.env.PORT || 3000);

Bun.serve({
  hostname: "0.0.0.0",
  port,
  async fetch(request) {
    const url = new URL(request.url);
    const filePath = getStaticFilePath(url.pathname);

    if (filePath) {
      return createStaticResponse(filePath);
    }

    return serverHandler.fetch(request, Bun.env, undefined);
  },
});

console.log(`Server listening on http://0.0.0.0:${port}`);
