import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// Common MIME types for web assets
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
    // Clean query parameters and anchors
    const cleanUrl = req.url.split('?')[0];
    let relativePath = cleanUrl === '/' ? '/index.html' : cleanUrl;
    let safePath = path.normalize(path.join(__dirname, relativePath));

    // Security: restrict file access within current directory
    if (!safePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(safePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`<!DOCTYPE html><html><body><h1>404 Not Found</h1><p>The file <code>${cleanUrl}</code> was not found.</p><a href="/">Return to Home</a></body></html>`);
            return;
        }

        const ext = path.extname(safePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': 'no-cache, no-store, must-revalidate'
        });

        const stream = fs.createReadStream(safePath);
        stream.pipe(res);
    });
});

server.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.log('\n======================================================');
    console.log('  🚀 Personal Portfolio Development Server Started');
    console.log('======================================================');
    console.log(`  ➜ Local URL:  ${url}`);
    console.log(`  ➜ Project:    ${__dirname}`);
    console.log('  ➜ Press Ctrl + C to stop\n');

    // Automatically open in default browser on Windows / Mac / Linux
    const openCommand = process.platform === 'win32' ? `start ${url}`
        : process.platform === 'darwin' ? `open ${url}`
        : `xdg-open ${url}`;

    exec(openCommand, (error) => {
        if (error) {
            // Silently ignore if auto-launch is disabled or unavailable
        }
    });
});
