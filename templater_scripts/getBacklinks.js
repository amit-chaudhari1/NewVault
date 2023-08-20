const getSetBacklinks = (path, obsidian) => {
  const allFiles = obsidian.vault.getFiles();

  const currentFile = allFiles.find((file) => file.path === path);

  const allFilesWithoutCurrent = allFiles.filter(
    (file) => file.path !== path,
  );

  const currentLinks = obsidian.metadataCache.getCache(path).links || [];

  const basename = currentFile.basename;

  const allBacklinkFiles = allFilesWithoutCurrent
    .filter((file) => {
      const cache = obsidian.metadataCache.getFileCache(file);
      if (!cache || !cache.links) {
        return false;
      }
      return cache.links.some((link) => link.link === basename);
    })
    .map((val) => val.basename)
    // .filter(
    //   (inboundLink) =>
    //     // !currentLinks.find((outLink) => outLink.link === inboundLink),
    //     // currentLinks.find((outLink) => outLink.link === inboundLink),
    // )
    .map((val) => `\"${val}\"`);

  // if (allBacklinkFiles.length === 0) {
  //   return '';
  // }

  return `${allBacklinkFiles.join(',')}`;
}
  
  
  
module.exports = getSetBacklinks;