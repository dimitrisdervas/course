---
title: 11gymnasio
admin: 11gymnasio
address: fanariou 23
lat: 59.342457
long: 18.057340
---   

{% for school in site.schools | where: "place" , page.tag %}
 {{ school.title}}
{% endfor %}