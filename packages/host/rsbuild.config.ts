import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3001,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.resolve ||= {};
      config.resolve.alias ||= {};
      config.output = { publicPath: "auto" };
      appendPlugins([
        new ModuleFederationPlugin({
          name: `app01`,
          filename: `app01_remoteEntry.js`,
          remotes: {
            app02: "app02@https://www.hrgui.dev/mf-playground/button/remoteEntry.js",
          },
        }),
      ]);
    },
  },
});
