---
title: Dojo
adminTitle: dojo
address: 18ης Νοέμβρη 21
perioxi: Τούμπα
lat: 59.342457
long: 18.057340
---   

{% for school in site.schools | where: "place" , page.tag %}
 {{ school.title}}
{% endfor %}