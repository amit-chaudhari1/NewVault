const geatLinks = (path, obsidian) => {
    const allFiles = obsidian.vault.getFiles();
  
    const currentFile = allFiles.find((file) => file.path === path);
  
    const allFilesWithoutCurrent = allFiles.filter(
      (file) => file.path !== path,
    );
  
    const currentLinks = obsidian.metadataCache.getCache(path).links || [];
    // don't add if link does not exists right?
    const resultArr = currentLinks.map((a)=>`\"${a.link}\"`);
    console.log(resultArr, "Currrr")
    
    return `${resultArr}`;
  }
    
    
    
  module.exports = geatLinks;