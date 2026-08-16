import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const token = '474ac7713fd4429d8ac853829065192c';
const marker = 'Cloudflare Web Analytics';
const beacon = `<!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "${token}"}'></script><!-- End Cloudflare Web Analytics -->`;

const skipDirs = new Set(['.git', 'node_modules']);
let changed = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const rel = relative(root, path);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      if (!skipDirs.has(name)) walk(path);
      continue;
    }
    if (!name.toLowerCase().endsWith('.html')) continue;
    let html = readFileSync(path, 'utf8');
    if (html.includes(marker) || html.includes(token)) continue;
    if (/<\/body>/i.test(html)) html = html.replace(/<\/body>/i, `${beacon}</body>`);
    else html += `\n${beacon}\n`;
    writeFileSync(path, html);
    console.log(`Injected analytics: ${rel}`);
    changed++;
  }
}

walk(root);
console.log(`Cloudflare analytics injection complete. Updated ${changed} HTML file(s).`);
