import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { pagesA } from "./expansion-two-pages-a.mjs";
import { pagesB } from "./expansion-two-pages-b.mjs";

const root = process.cwd();
const siteUrl = "https://syracuseappraiser.com";
const updated = "2026-08-17";
const pages = [...pagesA, ...pagesB];
const analytics = `<!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "474ac7713fd4429d8ac853829065192c"}'></script><!-- End Cloudflare Web Analytics -->`;
const esc = (value) => String(value).replace(/[&<>\"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));

function render(page) {
  const canonical = `${siteUrl}/guides/${page.slug}`;
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: page.title, description: page.description, url: canonical, dateModified: updated, author: { "@type": "Organization", name: "Syracuse Appraiser by Accurate Real Estate Appraisals" }, publisher: { "@type": "Organization", name: "Syracuse Appraiser" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  const sections = page.sections.map(([heading, paragraphs]) => `<h2>${esc(heading)}</h2>${paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}`).join("");
  const checklist = page.checklist.map((item) => `<li>${esc(item)}</li>`).join("");
  const faq = page.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(page.title)} | Syracuse Appraiser</title><meta name="description" content="${esc(page.description)}"><link rel="canonical" href="${canonical}"><meta property="og:type" content="article"><meta property="og:title" content="${esc(page.title)}"><meta property="og:description" content="${esc(page.description)}"><meta property="og:url" content="${canonical}"><meta name="twitter:card" content="summary"><link rel="stylesheet" href="../assets/style.css"><script type="application/ld+json">${JSON.stringify(articleSchema)}</script><script type="application/ld+json">${JSON.stringify(faqSchema)}</script></head><body><header><div class="wrap nav"><a class="brand" href="../index.html"><span>SYRACUSE</span> APPRAISER<small>by Accurate Real Estate Appraisals • a division of ARE Appraisals, Inc.</small></a><nav><a href="../services/index.html">Services</a><a href="../areas/index.html">Areas</a><a href="index.html">Guides</a><a href="../about.html">About</a><a href="../request-appraisal.html">Request</a></nav><a class="phone" href="tel:+13154135024">315-413-5024</a></div></header><main><section class="page-hero"><div class="wrap"><p class="eyebrow">${esc(page.eyebrow)}</p><h1>${esc(page.title)}</h1><p class="lead">${esc(page.lead)}</p></div></section><section class="section"><div class="wrap content-grid"><article class="article"><p><strong>Updated August 17, 2026.</strong> General appraisal information only; not legal, tax, lending, engineering or accounting advice.</p>${sections}<h2>Planning checklist</h2><ul class="bullet-list">${checklist}</ul><div class="callout"><strong>Need an independent residential appraisal?</strong><p>Send the address, intended use, effective date and unusual property features so the assignment can be reviewed before scheduling.</p><a class="btn" href="../request-appraisal.html">Request an Appraisal</a></div><section class="faq"><h2>Frequently asked questions</h2>${faq}</section></article><aside class="sidebar"><div class="card"><h3>Central New York coverage</h3><p>Syracuse, Onondaga County and surrounding Central New York communities.</p><a class="text-link" href="../areas/index.html">View service areas</a></div><div class="card"><h3>Continue reading</h3><a class="text-link" href="index.html">All appraisal guides</a><a class="text-link" href="prepare-for-appraisal.html">Prepare for an appraisal</a><a class="text-link" href="appraisal-vs-cma.html">Appraisal vs. CMA</a></div></aside></div></section></main><footer><div class="wrap footer"><div><strong>Syracuse Appraiser</strong><p>by Accurate Real Estate Appraisals</p><p>a division of ARE Appraisals, Inc.</p></div><div><p>Residential Real Estate Appraisal • Central New York</p><p><a href="tel:+13154135024">315-413-5024</a> • <a href="mailto:info@accuratereappraisals.org">Email</a></p></div></div></footer>${analytics}</body></html>`;
}

function upsert(path, marker, block) {
  const full = join(root, path);
  let html = readFileSync(full, "utf8");
  const start = `<!-- ${marker} START -->`;
  const end = `<!-- ${marker} END -->`;
  const wrapped = `${start}${block}${end}`;
  const pattern = new RegExp(`${start.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${end.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`);
  html = pattern.test(html) ? html.replace(pattern, wrapped) : html.replace("</main>", `${wrapped}</main>`);
  writeFileSync(full, html);
}

for (const page of pages) {
  const full = join(root, "guides", page.slug);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, render(page));
}

const cards = pages.map((page) => `<article class="card"><h3><a href="${page.slug}">${esc(page.title)}</a></h3><p>${esc(page.description)}</p><a class="text-link" href="${page.slug}">Read the guide</a></article>`).join("");
upsert("guides/index.html", "SYRACUSE EXPANSION TWO", `<section class="section"><div class="wrap"><p class="eyebrow">MORE APPRAISAL ANSWERS</p><h2>Ten complete guides for higher-stakes property decisions</h2><p class="lead">Current and retrospective value, lending, small income property, manufactured homes, ADUs, construction and report review.</p><div class="grid three">${cards}</div><div class="callout"><strong>Not sure which assignment fits?</strong><p>Describe the property, decision and required date before ordering.</p><a class="btn" href="../request-appraisal.html">Start a Request</a></div></div></section>`);

const sitemapPath = join(root, "sitemap.xml");
let sitemap = readFileSync(sitemapPath, "utf8");
for (const page of pages) {
  const loc = `${siteUrl}/guides/${page.slug}`;
  const escaped = loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  sitemap = sitemap.replace(new RegExp(`<url>\\s*<loc>${escaped}<\\/loc>[\\s\\S]*?<\\/url>\\s*`, "g"), "");
}
sitemap = sitemap.replace("</urlset>", `${pages.map((page) => `<url><loc>${siteUrl}/guides/${page.slug}</loc><lastmod>${updated}</lastmod><changefreq>monthly</changefreq><priority>0.78</priority></url>`).join("")}</urlset>`);
writeFileSync(sitemapPath, sitemap);
console.log(`Generated ${pages.length} additional Syracuse Appraiser guides.`);
