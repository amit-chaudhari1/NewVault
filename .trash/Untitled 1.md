-
title: function my_function (msg) {
    return `Message from my script: ${msg}`;
}
path: (relative = false) => {
      let vault_path = "";
      if (import_obsidian8.Platform.isMobileApp) {
        const vault_adapter = app.vault.adapter.fs.uri;
        const vault_base = app.vault.adapter.basePath;
        vault_path = `${vault_adapter}/${vault_base}`;
      } else {
        if (app.vault.adapter instanceof import_obsidian8.FileSystemAdapter) {
          vault_path = app.vault.adapter.getBasePath();
        } else {
          throw new TemplaterError("app.vault is not a FileSystemAdapter instance");
        }
      }
      if (relative) {
        return this.config.target_file.path;
      } else {
        return `${vault_path}/${this.config.target_file.path}`;
      }
    }
---