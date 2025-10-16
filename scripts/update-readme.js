// scripts/update-readme.js
// تحديث كتلة تلقائية فى README.md بإحصائيات الريبو، آخر كومِت، ورابط Cloudflare إن وُجد.

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const README_PATH = resolve("README.md");
const START_TAG = "<!--AUTO-README:START-->";
const END_TAG = "<!--AUTO-README:END-->";

const repo = process.env.GITHUB_REPOSITORY || ""; // owner/repo
const token = process.env.GITHUB_TOKEN || "";
const cfUrl = process.env.CF_PAGES_URL || "غير مُحدد";

function run(cmd) {
  return execSync(cmd, { encoding: "utf8" }).trim();
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "gh-actions",
      Authorization: token ? `Bearer ${token}` : undefined,
      Accept: "application/vnd.github+json",
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed fetch ${url}: ${res.status} ${text}`);
  }
  return res.json();
}

function getLastCommitInfo() {
  const hash = run(`git rev-parse --short HEAD`);
  const message = run(`git log -1 --pretty=%B`).split("\n").map(s => s.trim()).filter(Boolean).join(" ");
  const isoDate = run(`git log -1 --pretty=%cI`);
  return { hash, message, isoDate };
}

async function getRepoStats() {
  if (!repo) return { stars: "—", forks: "—" };
  const data = await fetchJson(`https://api.github.com/repos/${repo}`);
  return {
    stars: data.stargazers_count ?? "—",
    forks: data.forks_count ?? "—",
  };
}

function buildBlock({ stars, forks, last, cfUrl }) {
  // استخدم Badges جاهزة من shields.io
  const repoBadge = repo
    ? `![GitHub Repo stars](https://img.shields.io/github/stars/${repo}?style=flat)&nbsp;![GitHub forks](https://img.shields.io/github/forks/${repo}?style=flat)`
    : "";

  return `
${START_TAG}
### 🔴 Live
- **Production:** ${cfUrl}
- **Last update:** ${new Date().toISOString()}

### 📊 Repo stats
- **Stars:** ${stars}
- **Forks:** ${forks}
- **Last commit:** \`${last.hash}\` — ${last.message} (${last.isoDate})

${repoBadge}
${END_TAG}
`.trim() + "\n";
}

function upsertBlock(readme, block) {
  const startIdx = readme.indexOf(START_TAG);
  const endIdx = readme.indexOf(END_TAG);

  if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    // استبدال محتوى البلوك فقط
    const before = readme.slice(0, startIdx);
    const after = readme.slice(endIdx + END_TAG.length);
    return `${before}${block}${after}`.replace(/\n{3,}/g, "\n\n");
  }

  // لو مفيش بلوك، أضِف واحد فى النهاية
  const sep = readme.endsWith("\n") ? "" : "\n";
  return `${readme}${sep}\n${block}`;
}

async function main() {
  if (!existsSync(README_PATH)) {
    // أنشئ README أساسى لو مش موجود
    writeFileSync(README_PATH, "# " + (repo || "Project") + "\n\n" + START_TAG + "\n" + END_TAG + "\n", "utf8");
  }

  const readme = readFileSync(README_PATH, "utf8");
  const last = getLastCommitInfo();
  const { stars, forks } = await getRepoStats();
  const newBlock = buildBlock({ stars, forks, last, cfUrl });

  const nextReadme = upsertBlock(readme, newBlock);

  if (nextReadme !== readme) {
    writeFileSync(README_PATH, nextReadme, "utf8");
    console.log("README updated.");
  } else {
    console.log("No changes in README content.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
