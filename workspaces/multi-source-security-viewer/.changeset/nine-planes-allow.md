---
'@backstage-community/plugin-multi-source-security-viewer': patch
---

Replaced `downloadLogFile` from `@janus-idp/shared-react` with a local version based on PatternFly’s `CodeEditor`, so the plugin no longer depends on `shared-react` for this utility.
