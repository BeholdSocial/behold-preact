import { defineConfig } from "vite"
import preact from "@preact/preset-vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "BeholdWidget",
      fileName: (format, entryName) => {
        const extension = format === "es" ? "js" : "cjs"
        return `${entryName}.${extension}`
      },
    },
    emptyOutDir: false,
    rollupOptions: {
      external: ["preact", "preact/jsx-runtime", "preact/hooks"],
      output: {
        globals: {
          preact: "Preact",
          "preact/jsx-runtime": "jsxRuntime",
          "preact/hooks": "hooks",
        },
      },
    },
  },
})
