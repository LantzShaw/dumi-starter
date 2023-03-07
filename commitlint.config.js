module.exports = {
  extends: [
    "@commitlint/config-angular"
  ],
  "rules": {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "type-empty": [2, "never"],
    "scope-empty": [0],
    "subject-empty": [2, "never"],
    "subject-full-stop": [0],
    "type-case": [0],
    "scope-case": [0],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert"
      ]
    ]
  }
}
