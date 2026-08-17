import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const siteUrl = "https://syracuseappraiser.com";
const updated = "August 17, 2026";

const pages = [
  {
    slug: "divorce-appraisal-guide.html",
    title: "Divorce Appraisal Guide for Central New York",
    eyebrow: "PRIVATE APPRAISAL GUIDE",
    description: "A practical guide to residential appraisals for divorce matters in Syracuse and Central New York, including effective dates, access, records and report use.",
    lead: "A divorce appraisal should answer a clearly defined valuation question with an effective date and intended use that match the legal matter. The strongest assignments begin with scope, property access and recordkeeping—not with pressure to reach a preferred number.",
    sections: [
      ["Start with the valuation question", ["The appraiser needs to know the client, intended users, intended use, property interest and effective date. A current market value opinion may be appropriate in one matter, while another requires a retrospective date tied to separation, filing or another legally relevant event.", "Attorneys and parties should identify the required date before the inspection whenever possible. Changing the effective date later may require additional market research, different comparable sales and a revised scope of work."]],
      ["Keep the appraisal independent", ["A residential appraisal is not an advocacy document for either spouse. The appraiser analyzes the property and market evidence under the agreed assignment conditions. Complete access, accurate improvement information and relevant documents are useful; arguments about the desired result are not.", "When both parties need confidence in the process, written communication about access, occupants, contact procedures and document delivery can reduce misunderstandings."]],
      ["Prepare the property record", ["Useful materials can include deeds, surveys, renovation records, permits, leases, prior appraisals, purchase documents and information about unusual land, outbuildings or waterfront rights. Not every document changes value, but undisclosed facts can delay the analysis.", "The appraiser still verifies information independently where possible. Owner-provided records are one source among public records, market data, inspection observations and other assignment evidence."]],
      ["Understand what the report can and cannot do", ["The appraisal develops an opinion of value for the stated effective date and intended use. It does not divide property, determine legal ownership, interpret a settlement agreement or advise either party on litigation strategy.", "Questions about admissibility, discovery, testimony or legal standards belong with counsel. The appraisal report should be ordered early enough that the scope can be completed without forcing market analysis into an artificial deadline."]]
    ],
    checklist: ["Confirm the client and intended users", "Confirm the legally relevant effective date", "Arrange safe and complete property access", "Gather surveys, deeds and major improvement records", "Identify unusual acreage, accessory structures or rights", "Tell the appraiser whether testimony may be requested", "Keep valuation communications factual and documented"],
    faq: [
      ["Can one appraisal be used by both spouses?", "That depends on the engagement, intended users and the parties' legal arrangement. The appraiser must know who the client is and who may rely on the report before accepting the assignment."],
      ["What if the required value date is in the past?", "A retrospective appraisal may be possible. It requires market data and property information relevant to the historical effective date, not simply today's value adjusted backward."],
      ["Does the house need to be empty?", "Usually no. The appraiser needs reasonable access to the areas and features required by the assignment scope, along with a safe inspection environment."],
      ["Will improvements always increase value dollar for dollar?", "No. Market reaction depends on utility, quality, condition, conformity, timing and buyer demand. Cost and market value are different concepts."]
    ]
  },
  {
    slug: "probate-estate-appraisal-guide.html",
    title: "Probate and Estate Appraisal Guide",
    eyebrow: "ESTATE VALUATION GUIDE",
    description: "How executors, heirs and attorneys can prepare for a date-of-death or estate appraisal in Syracuse and Central New York.",
    lead: "Estate work often requires a residential value opinion as of a date in the past. A clear effective date, reliable property history and an understanding of the report's intended use are essential.",
    sections: [
      ["Confirm the effective date", ["The date of death is a common effective date, but the attorney, accountant or estate representative should confirm the exact valuation date and purpose. The appraiser researches the market as it existed on that date.", "A historical appraisal is not produced by taking a current value and applying a general percentage. Comparable sales, listings, market conditions and property characteristics must be analyzed in the correct time frame."]],
      ["Reconstruct property condition", ["When the effective date is months or years earlier, the appraiser may need photographs, repair invoices, insurance records, listing photographs, permits, interviews or other evidence showing what the property was like at that time.", "Later renovations should be separated from the historical condition. The report should explain important assumptions and the quality of the available evidence."]],
      ["Document unusual real estate", ["Central New York estates often include rural acreage, lake access, barns, workshops, multiple dwellings, seasonal cottages or long-held homes with additions completed over decades. These features may require broader research than a typical subdivision property.", "Provide surveys, deeds, tax maps, leases and any records that clarify the real property interest being appraised."]],
      ["Coordinate with the professional team", ["The appraiser provides valuation expertise. Attorneys and tax professionals determine filing requirements, legal strategy and tax treatment. Early coordination helps ensure the report identifies the correct client, intended users, ownership interest and effective date.", "Avoid waiting until a filing deadline to discover that the assignment requires a different date or a more complex property analysis."]]
    ],
    checklist: ["Confirm the exact valuation date", "Identify the estate representative and intended users", "Collect photographs from the effective-date period", "Separate later repairs or renovations", "Provide deed, survey and acreage information", "Identify tenants, life estates or unusual ownership interests", "Ask counsel or the tax professional about report timing"],
    faq: [
      ["Is a date-of-death appraisal different from a current appraisal?", "Yes. The value opinion and market evidence are tied to the historical effective date, even if the property is inspected today."],
      ["What if there are no old interior photographs?", "The appraiser may use other credible evidence and clearly stated assumptions, but limited historical evidence can affect the scope and certainty of the analysis."],
      ["Can the appraisal help heirs set a listing price?", "A retrospective estate appraisal answers a historical question. A separate current market analysis or appraisal may be needed for a present sale decision."],
      ["Are personal belongings included?", "A residential real estate appraisal generally addresses the stated real property interest, not furniture, vehicles, collections or other personal property unless specifically included in a qualified scope."]
    ]
  },
  {
    slug: "pre-listing-appraisal-guide.html",
    title: "Pre-Listing Appraisal Guide",
    eyebrow: "SELLER DECISION GUIDE",
    description: "When a pre-listing appraisal can help Central New York homeowners price an unusual, rural, waterfront or difficult-to-compare property.",
    lead: "A pre-listing appraisal is most useful when the property is hard to compare, the pricing decision carries real consequences or the owners need an independent opinion before choosing a marketing strategy.",
    sections: [
      ["Know when an appraisal adds value", ["Many typical homes can be priced effectively with strong local brokerage analysis. An appraisal may add more value when the home has extensive acreage, waterfront, multiple buildings, unusual construction, a significant addition, an accessory dwelling or limited nearby sales.", "It can also help when co-owners disagree, an estate needs documentation or a seller wants to understand the evidence before committing to a price."]],
      ["Appraisal and marketing are different", ["An appraisal develops an opinion of market value under defined assignment conditions. A listing strategy also considers seller timing, competition, exposure, negotiation plans and the possibility of intentionally testing the market.", "The appraised value should inform the decision, not replace the seller's conversation with a qualified real estate professional."]],
      ["Prepare accurate improvement information", ["Create a concise list of significant renovations with approximate dates, permitted additions, major mechanical replacements, accessory structures and land improvements. Include surveys or plans when the site is complicated.", "Avoid treating every maintenance expense as a separate value increase. The appraiser analyzes how the market reacts to the property's overall utility, quality and condition."]],
      ["Use the report before the listing goes live", ["Order the appraisal early enough to review the analysis, correct factual misunderstandings and coordinate the marketing plan. A rushed report delivered after photographs, price and launch date are already fixed has less practical value.", "For unusual property, the report can also reveal which features require clearer marketing documentation."]]
    ],
    checklist: ["Decide the intended use before ordering", "Gather surveys and addition records", "List major improvements with dates", "Provide information about acreage and accessory buildings", "Explain any unusual easements or water rights", "Allow time for complex market research", "Discuss the final strategy with the listing professional"],
    faq: [
      ["Is a pre-listing appraisal the same as a CMA?", "No. A CMA is a brokerage pricing and marketing tool. An appraisal is an independent valuation assignment completed under professional appraisal standards."],
      ["Does the appraiser set the listing price?", "No. The report provides a value opinion. The seller and listing professional decide the asking price and marketing strategy."],
      ["Can a high-end renovation be worth less than its cost?", "Yes. Market value reflects buyer reaction, not simply invoices. Design, quality, location, conformity and remaining economic life all matter."],
      ["Will the buyer's lender use the seller's appraisal?", "Usually the lender orders its own appraisal through its required process. A seller's appraisal is primarily for the seller's stated private use unless another user is specifically identified."]
    ]
  },
  {
    slug: "tax-assessment-review-guide.html",
    title: "Property Tax Assessment Review Guide",
    eyebrow: "ASSESSMENT GUIDE",
    description: "A homeowner's guide to reviewing a property tax assessment and deciding whether independent appraisal evidence may be useful in Central New York.",
    lead: "An assessment review begins with the municipality's record, the applicable valuation date and the local process. A difference between assessed value and a homeowner's preferred number is not, by itself, proof of an error.",
    sections: [
      ["Read the assessment record first", ["Check the parcel identification, land size, building size, style, age, condition, finished areas, outbuildings and exemptions. A factual record error can be important even before market value is debated.", "Ask the assessor how the equalization rate or residential assessment ratio affects comparison between assessed value and full market value in that jurisdiction."]],
      ["Match evidence to the valuation date", ["Sales used in an assessment challenge should be relevant to the municipality's valuation date and the property type. A sale occurring much later may reflect a different market.", "The strongest evidence explains similarities and differences rather than presenting a list of nearby transactions without analysis."]],
      ["Know when an appraisal may help", ["Independent appraisal evidence may be useful for a high-value home, unusual acreage, waterfront property, major condition issue, mixed residential utility or a case where the financial stakes justify the cost.", "For a straightforward difference, public records and a focused comparable-sales presentation may be enough. The local filing rules and deadlines control."]],
      ["Keep the process factual", ["Assessment review is more effective when the argument is organized around property facts, market evidence and the required valuation standard. Photographs, repair estimates and surveys can support relevant claims.", "Legal advice and filing strategy should come from the appropriate professional. An appraiser should not guarantee an assessment reduction."]]
    ],
    checklist: ["Obtain the current assessment record", "Verify the applicable valuation date", "Check square footage, land and improvement data", "Review the local equalization information", "Collect relevant sales and property photographs", "Confirm grievance deadlines and required forms", "Evaluate whether appraisal cost is justified by the tax impact"],
    faq: [
      ["Is assessed value always equal to market value?", "Not necessarily. Local assessment practices and equalization factors can affect how the assessment relates to full market value."],
      ["Can an appraiser guarantee a reduction?", "No. The appraiser can provide an independent value opinion and supporting analysis; the assessor, board or court decides the outcome."],
      ["Does a recent purchase price settle the issue?", "A recent arm's-length sale can be important, but the circumstances, property changes and applicable valuation date still need analysis."],
      ["Should deferred maintenance be documented?", "Yes. Material condition issues should be supported with clear photographs, access and, where useful, contractor or engineering information."]
    ]
  },
  {
    slug: "unique-home-appraisal-guide.html",
    title: "Appraising Unique and Hard-to-Compare Homes",
    eyebrow: "COMPLEX PROPERTY GUIDE",
    description: "How appraisers analyze unique homes, large acreage, custom construction, accessory buildings and limited comparable sales in Central New York.",
    lead: "A unique property is not impossible to appraise, but it usually requires a wider search, stronger verification and a clear explanation of which differences matter to buyers.",
    sections: [
      ["Define what is actually unusual", ["A property may be unique because of architecture, size, acreage, waterfront, quality, condition, multiple dwellings, equestrian improvements, commercial-style outbuildings or an unusual location. Each feature affects the search differently.", "The appraiser should separate features that create market appeal from features that are costly but have limited buyer demand."]],
      ["Expand the search intelligently", ["When close substitutes do not exist, the appraiser may use older sales, a broader geographic area or properties that match different components of the subject. The goal is not to find a perfect twin; it is to assemble credible evidence.", "Market areas should be expanded based on buyer behavior, not municipal boundaries alone."]],
      ["Verify the property carefully", ["Surveys, floor plans, permits, utility information, construction details, leases and photographs help reduce uncertainty. Gross living area, finished basement, accessory dwelling space and detached improvements should be identified consistently.", "For rural or waterfront properties, access, frontage, topography, utilities, wetlands and functional land use may be as important as total acreage."]],
      ["Expect more explanation", ["Complex assignments often need more narrative discussion and reconciliation than standard subdivision reports. Adjustments may be supported by paired data, grouped market evidence, cost information, sensitivity testing and qualitative analysis.", "A credible report should make the reasoning understandable without pretending that thin data are more precise than they are."]]
    ],
    checklist: ["Provide a current survey or tax map", "Identify all living units and finished areas", "List accessory buildings and their actual use", "Document major custom construction features", "Explain water, septic, access and utility systems", "Provide permits or plans for additions", "Allow time for an expanded market search"],
    faq: [
      ["Can an appraisal be completed without a nearly identical sale?", "Yes. Appraisers often combine multiple imperfect indicators and explain how each one informs the value conclusion."],
      ["Is every outbuilding worth its construction cost?", "No. Contribution depends on utility, condition, size, location and demand among likely buyers."],
      ["Why might comparable sales be farther away?", "Buyers of unusual properties may search across a broader region. The appraiser should explain why the expanded area competes for the same buyers."],
      ["Does uniqueness always increase value?", "No. Some unique features increase appeal; others narrow the buyer pool or create maintenance and functional concerns."]
    ]
  },
  {
    slug: "home-improvement-value-guide.html",
    title: "Home Improvements and Appraised Value",
    eyebrow: "HOMEOWNER VALUE GUIDE",
    description: "How Central New York appraisers consider kitchens, baths, additions, roofs, mechanical systems, energy upgrades and other home improvements.",
    lead: "Home improvements can protect, restore or increase value, but the market does not reimburse every project dollar for dollar. Appraisers analyze buyer reaction, utility, quality, condition and neighborhood expectations.",
    sections: [
      ["Separate maintenance from added utility", ["A sound roof, working heating system and repaired foundation may preserve marketability rather than create a separate premium. These projects can be essential even when the value increase is less visible than the cost.", "An addition, additional bath or improved layout may create new utility that buyers recognize more directly."]],
      ["Quality and consistency matter", ["A renovation should be judged in the context of the whole property. High-end finishes in one room may receive limited support if the remaining house is dated or the improvement exceeds neighborhood expectations.", "Permit status, workmanship, design integration and remaining economic life can influence market reaction."]],
      ["Document completed work", ["Provide concise records showing the scope and approximate date of major projects. Plans, permits and before-and-after information can help the appraiser understand additions, conversions and energy upgrades.", "Receipts establish cost, not value. They are useful background but do not replace market analysis."]],
      ["Focus on the buyer's decision", ["The central question is whether buyers pay more, choose the property more quickly or view the improvement as necessary for competition. Comparable sales, listings and market interviews may reveal that reaction.", "Some projects improve enjoyment and function even when the resale return is partial. Personal utility and market value are related but not identical."]]
    ],
    checklist: ["List major projects and completion dates", "Provide permits for additions or conversions", "Separate unfinished and finished areas clearly", "Identify mechanical and energy-system upgrades", "Explain changes to bedroom, bath or living-area utility", "Keep cost records without assuming full return", "Make all improved areas accessible for inspection"],
    faq: [
      ["Does a new roof increase value by its full cost?", "Usually not dollar for dollar. A new roof may reduce buyer risk and protect condition, while an old failing roof may cause a discount."],
      ["Are basement improvements counted like above-grade space?", "Market treatment varies. Appraisers typically analyze below-grade finished area separately and compare it with market-supported alternatives."],
      ["Do solar panels add value?", "They may, depending on ownership, transfer terms, energy savings, condition and local buyer reaction. Leased systems require careful documentation."],
      ["Should cosmetic projects be finished before the appraisal?", "Only when it makes practical sense. Complete, durable work is easier to analyze than partially completed construction, but the decision should consider cost, timing and intended use."]
    ]
  }
];

function escapeHtml(value) {
  return String(value).replace(/[&<>\"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

function renderPage(page) {
  const canonical = `${siteUrl}/guides/${page.slug}`;
  const articleSections = page.sections.map(([heading, paragraphs]) => `<h2>${escapeHtml(heading)}</h2>${paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("")}`).join("");
  const checklist = page.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const faq = page.faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join("");
  const faqSchema = page.faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } }));
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: page.title, description: page.description, url: canonical, dateModified: "2026-08-17", author: { "@type": "Organization", name: "Syracuse Appraiser by Accurate Real Estate Appraisals" }, publisher: { "@type": "Organization", name: "Syracuse Appraiser" } };
  const faqJson = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqSchema };
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(page.title)} | Syracuse Appraiser</title><meta name="description" content="${escapeHtml(page.description)}"><link rel="canonical" href="${canonical}"><meta property="og:type" content="article"><meta property="og:title" content="${escapeHtml(page.title)}"><meta property="og:description" content="${escapeHtml(page.description)}"><meta property="og:url" content="${canonical}"><link rel="stylesheet" href="../assets/style.css"><script type="application/ld+json">${JSON.stringify(articleSchema)}</script><script type="application/ld+json">${JSON.stringify(faqJson)}</script></head><body><header><div class="wrap nav"><a class="brand" href="../index.html"><span>SYRACUSE</span> APPRAISER<small>by Accurate Real Estate Appraisals • a division of ARE Appraisals, Inc.</small></a><nav><a href="../services/index.html">Services</a><a href="../areas/index.html">Areas</a><a href="index.html">Guides</a><a href="../about.html">About</a><a href="../request-appraisal.html">Request</a></nav><a class="phone" href="tel:+13154135024">315-413-5024</a></div></header><main><section class="page-hero"><div class="wrap"><p class="eyebrow">${escapeHtml(page.eyebrow)}</p><h1>${escapeHtml(page.title)}</h1><p class="lead">${escapeHtml(page.lead)}</p></div></section><section class="section"><div class="wrap content-grid"><article class="article"><p><strong>Updated ${updated}.</strong> This guide provides general appraisal information and is not legal, tax or accounting advice.</p>${articleSections}<h2>Planning checklist</h2><ul class="bullet-list">${checklist}</ul><div class="callout"><strong>Need an independent residential appraisal?</strong><p>Describe the property, intended use and required effective date before scheduling so the scope can be matched to the assignment.</p><a class="btn" href="../request-appraisal.html">Request an Appraisal</a></div><section class="faq"><h2>Frequently asked questions</h2>${faq}</section></article><aside class="sidebar"><div class="card"><h3>Central New York coverage</h3><p>Syracuse, Onondaga County and surrounding Central New York communities.</p><a class="text-link" href="../areas/index.html">View service areas</a></div><div class="card"><h3>More homeowner guidance</h3><a class="text-link" href="index.html">Browse all appraisal guides</a></div></aside></div></section></main><footer><div class="wrap footer"><div><strong>Syracuse Appraiser</strong><p>by Accurate Real Estate Appraisals</p><p>a division of ARE Appraisals, Inc.</p></div><div><p>Residential Real Estate Appraisal • Central New York</p><p><a href="tel:+13154135024">315-413-5024</a> • <a href="mailto:info@accuratereappraisals.org">Email</a></p><div class="footer-links"><a href="../services/index.html">Services</a><a href="../areas/index.html">Areas</a><a href="index.html">Guides</a><a href="../resources.html">Helpful Links</a></div></div></div></footer></body></html>`;
}

function upsertBlock(path, marker, block) {
  const filePath = join(root, path);
  let html = readFileSync(filePath, "utf8");
  const start = `<!-- ${marker} START -->`;
  const end = `<!-- ${marker} END -->`;
  const wrapped = `${start}${block}${end}`;
  const pattern = new RegExp(`${start.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${end.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`);
  if (pattern.test(html)) html = html.replace(pattern, wrapped);
  else if (html.includes("</main>")) html = html.replace("</main>", `${wrapped}</main>`);
  else html = html.replace("</body>", `${wrapped}</body>`);
  writeFileSync(filePath, html);
}

for (const page of pages) {
  const filePath = join(root, "guides", page.slug);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, renderPage(page));
}

const cards = `<section class="section"><div class="wrap"><p class="eyebrow">NEW IN THE APPRAISAL LIBRARY</p><h2>More decisions, explained clearly</h2><div class="grid three">${pages.map((page) => `<article class="card"><h3><a href="${page.slug}">${escapeHtml(page.title)}</a></h3><p>${escapeHtml(page.description)}</p><a class="text-link" href="${page.slug}">Read the guide</a></article>`).join("")}</div></div></section>`;
upsertBlock("guides/index.html", "SYRACUSE EXPANSION", cards);

const sitemapPath = join(root, "sitemap.xml");
let sitemap = readFileSync(sitemapPath, "utf8");
for (const page of pages) {
  const loc = `${siteUrl}/guides/${page.slug}`;
  const escaped = loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  sitemap = sitemap.replace(new RegExp(`<url>\\s*<loc>${escaped}<\\/loc>[\\s\\S]*?<\\/url>\\s*`, "g"), "");
}
const entries = pages.map((page) => `<url><loc>${siteUrl}/guides/${page.slug}</loc><lastmod>2026-08-17</lastmod><changefreq>monthly</changefreq><priority>0.72</priority></url>`).join("");
sitemap = sitemap.replace("</urlset>", `${entries}</urlset>`);
writeFileSync(sitemapPath, sitemap);

console.log(`Generated ${pages.length} new Syracuse Appraiser guides and refreshed the guide hub and sitemap.`);
