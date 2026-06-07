import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTypescript,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "_DataURI/**",
    "cdn-*/**",
    "fonts.gstatic.com/**",
    "googleads.g.doubleclick.net/**",
    "rightonlandscapinginc.ca/**",
    "s.w.org/**",
    "scripts.clarity.ms/**",
    "to.getnitropack.com/**",
    "www.clarity.ms/**",
    "www.google.ca/**",
    "www.google.com/**",
    "www.googletagmanager.com/**",
    "website-ops-templates/**",
  ]),
]);

export default eslintConfig;
