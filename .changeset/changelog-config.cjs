const {
  getInfo,
  getInfoFromPullRequest,
} = require("@changesets/get-github-info");

const typeMap = {
  feat: "✨ Features",
  fix: "🐛 Bug Fixes",
  chore: "🧹 Chores",
  docs: "📚 Documentation",
  style: "💅 Styles",
  refactor: "♻️ Refactors",
  perf: "⚡ Performance",
  test: "🧪 Tests",
  build: "🏗️ Build",
  ci: "🔄 CI",
};

async function getGitHubLinks(changeset, options) {
  const repo = options?.repo;
  if (!repo) return { pull: null, commit: null, user: null };

  let prFromSummary;
  let commitFromSummary;
  const usersFromSummary = [];

  changeset.summary
    .replace(/^\s*(?:pr|pull|pull\s+request):\s*#?(\d+)/im, (_, pr) => {
      prFromSummary = Number(pr);
      return "";
    })
    .replace(/^\s*commit:\s*([^\s]+)/im, (_, commit) => {
      commitFromSummary = commit;
      return "";
    })
    .replace(/^\s*(?:author|user):\s*@?([^\s]+)/gim, (_, user) => {
      usersFromSummary.push(user);
      return "";
    });

  if (prFromSummary !== undefined) {
    const { links } = await getInfoFromPullRequest({
      repo,
      pull: prFromSummary,
    });
    return {
      ...links,
      commit: commitFromSummary
        ? `[\`${commitFromSummary.slice(0, 7)}\`](https://github.com/${repo}/commit/${commitFromSummary})`
        : links.commit,
      user: usersFromSummary.length
        ? usersFromSummary
            .map((u) => `[@${u}](https://github.com/${u})`)
            .join(", ")
        : links.user,
    };
  }

  const commitToFetch = commitFromSummary || changeset.commit;
  if (commitToFetch) {
    const { links } = await getInfo({ repo, commit: commitToFetch });
    return {
      ...links,
      user: usersFromSummary.length
        ? usersFromSummary
            .map((u) => `[@${u}](https://github.com/${u})`)
            .join(", ")
        : links.user,
    };
  }

  return { pull: null, commit: null, user: null };
}

async function getReleaseLine(changeset, _type, options) {
  const links = await getGitHubLinks(changeset, options);

  const summary = changeset.summary
    .replace(/^\s*(?:pr|pull|pull\s+request):\s*#?\d+/im, "")
    .replace(/^\s*commit:\s*[^\s]+/im, "")
    .replace(/^\s*(?:author|user):\s*@?[^\s]+/gim, "")
    .trim();

  const lines = summary.split("\n").filter((l) => l.trim().length > 0);
  const groups = {};
  const ungrouped = [];

  for (const line of lines) {
    const cleaned = line.replace(/^-\s*/, "").trim();
    // Regex to match "feat: message" or "fix(scope): message"
    const match = cleaned.match(/^(\w+)(?:\(.+\))?:\s*(.+)/);

    if (match && typeMap[match[1]]) {
      const type = match[1];
      if (!groups[type]) groups[type] = [];
      groups[type].push(match[2]);
    } else {
      ungrouped.push(cleaned);
    }
  }

  const parts = [];

  for (const [type, items] of Object.entries(groups)) {
    parts.push(`**${typeMap[type]}**`);
    items.map((item) => parts.push(`- ${item}`));
  }

  ungrouped.map((item) => parts.push(`- ${item}`));

  const suffix = [
    links.pull,
    links.commit,
    links.user ? `Thanks ${links.user}!` : null,
  ]
    .filter(Boolean)
    .join(" ");

  if (suffix) {
    parts.push(`&nbsp;&nbsp;${suffix}`);
  }

  return `\n\n${parts.join("\n")}`;
}

async function getDependencyReleaseLine(
  changesets,
  dependenciesUpdated,
  options,
) {
  if (dependenciesUpdated.length === 0) return "";

  const repo = options?.repo;
  const commitLinks = await Promise.all(
    changesets.map(async (cs) => {
      if (cs.commit && repo) {
        const { links } = await getInfo({ repo, commit: cs.commit });
        return links.commit;
      }
    }),
  );

  const linkText = commitLinks.filter(Boolean).join(", ");
  const header = linkText
    ? `- Updated dependencies [${linkText}]:`
    : "- Updated dependencies:";

  const lines = dependenciesUpdated.map(
    (dep) => `  - ${dep.name}@${dep.newVersion}`,
  );

  return [`\n${header}`, ...lines].join("\n");
}

module.exports = { getReleaseLine, getDependencyReleaseLine };
