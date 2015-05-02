---
title: Dojo
admin: dojo
address: 18 noemvriou 21
lat: 59.342457
long: 18.057340
---   

{% for school in site.schools | where: "place" , page.tag %}
 {{ school.title}}
{% endfor %}