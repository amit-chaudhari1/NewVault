<% const theseTags = tp.file.tags;
let tagString = `[${theseTags.map(a => `\"${a}\"`)}]`
tagString = tagString.replace(/\#/g,'')
tR = tagString;
%>