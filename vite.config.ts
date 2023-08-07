import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: "@Components", replacement: "/src/Components" },
      { find: "@Static", replacement: "/src/Static" },
      { find: "@Fonts", replacement: "/src/Static/Fonts" },
      { find: "@", replacement: "/src" },
    ],
  },
});
