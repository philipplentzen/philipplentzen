import type { ChangelogFunctions } from "@changesets/types";

const typeMap: Record<string, string> = {
  feat: "✨ Features",
  fix: "🐛 Bug Fixes",
  chore: "🧹 Chores",
  docs: "📚 Documentation",
  style: "💅 Styles",
  refactor: "♻️ Refactors",
  perf: "⚡ Performance",
  test: "🧪 Tests",
  ci: "🔄 CI",
};

const getReleaseLine: ChangelogFunctions["getReleaseLine"] = async (
  changeset,
) => {
  // 1. Clean and Split lines
  const lines = changeset.summary
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const groups: Record<string, string[]> = {};
  const ungrouped: string[] = [];

  // 2. Sort lines into Groups
  for (const line of lines) {
    const cleaned = line.replace(/^-\s*/, "");
    const match = cleaned.match(/^(\w+)(?:\(.+\))?:\s*(.+)/);

    if (match && typeMap[match[1]]) {
      const type = match[1];
      if (!groups[type]) groups[type] = [];
      groups[type].push(match[2]);
    } else {
      ungrouped.push(cleaned);
    }
  }

  // 3. Build the Markdown Output
  const blocks: string[] = [];

  for (const [type, items] of Object.entries(groups)) {
    blocks.push(
      `**${typeMap[type]}**\n${items.map((item) => `- ${item}`).join("\n")}`,
    );
  }

  if (ungrouped.length > 0) {
    blocks.push(ungrouped.map((item) => `- ${item}`).join("\n"));
  }

  return `\n\n${blocks.join("\n\n")}\n`;
};

const getDependencyReleaseLine: ChangelogFunctions["getDependencyReleaseLine"] =
  async (_changesets, dependenciesUpdated) => {
    if (dependenciesUpdated.length === 0) return "";
    const header = `**📦 Dependencies**`;
    const items = dependenciesUpdated.map(
      (dep) => `- ${dep.name}@${dep.newVersion}`,
    );
    return `\n\n${header}\n${items.join("\n")}\n`;
  };

export default { getReleaseLine, getDependencyReleaseLine };
