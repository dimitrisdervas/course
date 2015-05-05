---
title: 11gymnasio
adminTitle: 11gymnasio
address: Φαναρίου 23
perioxi: Καλαμαριά
lat: 59.342457
long: 18.057340
---   

{% for school in site.schools | where: "place" , page.tag %}
 {{ school.title}}
{% endfor %}