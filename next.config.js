/* eslint-disable unicorn/no-array-for-each */
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("node:path");

const withTM = require("next-transpile-modules")([
  // `monaco-editor` isn't published to npm correctly: it includes both CSS
  // imports and non-Node friendly syntax, so it needs to be compiled.
  "highlight.js",
  "diff2html",
]);

const Languages = [
  "plaintext",
  "sql",
  "json",
  "markdown",
  "css",
  "typescript",
  "javascript",
  "html",
  "graphql",
  "python",
  "scss",
  "yaml",
  "abap",
  "apex",
  "azcli",
  "bat",
  "bicep",
  "cameligo",
  "clojure",
  "coffeescript",
  "c",
  "cpp",
  "csharp",
  "csp",
  "cypher",
  "dart",
  "dockerfile",
  "ecl",
  "elixir",
  "flow9",
  "fsharp",
  "freemarker2",
  "freemarker2.tag-angle.interpolation-dollar",
  "freemarker2.tag-bracket.interpolation-dollar",
  "freemarker2.tag-angle.interpolation-bracket",
  "freemarker2.tag-bracket.interpolation-bracket",
  "freemarker2.tag-auto.interpolation-dollar",
  "freemarker2.tag-auto.interpolation-bracket",
  "go",
  "handlebars",
  "hcl",
  "ini",
  "java",
  "julia",
  "kotlin",
  "less",
  "lexon",
  "lua",
  "liquid",
  "m3",
  "mips",
  "msdax",
  "mysql",
  "objective-c",
  "pascal",
  "pascaligo",
  "perl",
  "pgsql",
  "php",
  "pla",
  "postiats",
  "powerquery",
  "powershell",
  "proto",
  "pug",
  "qsharp",
  "r",
  "razor",
  "redis",
  "redshift",
  "restructuredtext",
  "ruby",
  "rust",
  "sb",
  "scala",
  "scheme",
  "shell",
  "sol",
  "aes",
  "sparql",
  "st",
  "swift",
  "systemverilog",
  "verilog",
  "tcl",
  "twig",
  "vb",
  "xml",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["antd"],
  webpack: (config, { isServer }) => {
    config.module.rules
      .filter((rule) => rule.oneOf)
      .forEach((rule) => {
        rule.oneOf.forEach((r) => {
          if (
            r.issuer &&
            r.issuer.and &&
            r.issuer.and.length === 1 &&
            r.issuer.and[0].source &&
            r.issuer.and[0].source.replace(/\\/g, "") ===
              path.resolve(process.cwd(), "src/pages/_app")
          ) {
            r.issuer.or = [
              ...r.issuer.and,
              /[/\\]node_modules[/\\]monaco-editor[/\\]/,
            ];
            delete r.issuer.and;
          }
        });
      });
    if (!isServer) {
      config.plugins.push(
        new MonacoWebpackPlugin({
          languages: Languages,
          filename: "static/[name].worker.js",
        })
      );
    }

    return config;
  },
  async headers() {
    return [
      {
        source: "/styles/animate.css/@4.1.1/animate.css",
        headers: [
          {
            key: "cache-control",
            value: "public, immutable, max-age=31536000",
          },
        ],
      },
    ];
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = withTM(nextConfig);