---
year: {{date | format("YYYY")}}
authors: {{authors}}
citekey: {{citationKey}}
---
Yazar: {{authors}}
Yıl: {{date | format("YYYY")}}
Tür: {{type}}
URL: {{url}}
Zotero Link: {{pdfZoteroLink}}

---

{% for annotation in annotations -%} 

  [PDFte Göster Sf.{{annotation.page}}](zotero://open-pdf/library/items/{{annotation.attachment.itemKey}}?page={{annotation.page}}&annotation={{annotation.id}})
```ad-{% if annotation.color %}{{annotation.colorCategory}}{% endif %}
title: {% if annotation.comment %} {{annotation.comment}} {% endif %}

 {% if annotation.annotatedText %} 
 {% if annotation.hashTags %}  {{annotation.hashTags}}  {% endif %}   {{annotation.annotatedText}} [@{{citationKey}}]
{% endif %}

```

---
{% endfor -%}
