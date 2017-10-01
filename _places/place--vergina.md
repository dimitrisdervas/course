---
title: Βεργίνα Γυμναστήριο
adminTitle: vergina-gym
address: Καρολίδου 22
city: Θεσσαλονίκη
perioxi: Καλαμαριά
lat: 40.584119
long: 22.956133
---

{% for school in site.schools | where: "place" , page.tag %}
 {{ school.title}}
{% endfor %}