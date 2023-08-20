

```JS
export const frontmatter = {
note_id: "<% tp.user.setNoteID()%>",
note_path: "<% tp.file.path()%>",
note_title: "<% tp.file.title %>",
backlinks: [<% tp.user.getBacklinks(tp.file.path(true), this.app) %>] ,
links: [<% tp.user.getLinks(tp.file.path(true), this.app) %>],
tags:  <%* const theseTags = tp.file.tags; let tagString = `[${theseTags.map(a => `\"${a}\"`)}]`; tagString = tagString.replace(/\#/g,'') ; tR += tagString; %>
creation_date: "<% tp.file.creation_date('dddd, Do MMMM YYYY, HH:mm ') %>",
modification_date: "<%+ tp.file.last_modified_date('dddd, Do MMMM YYYY, HH:mm') %>",
meta: {date:"",wordcount:"",coverImage:"",},
}
```