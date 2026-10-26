---
layout: page
title: Research
permalink: /projects/
description: Device innovation, DTCO, and integration beyond conventional scaling.
nav: true
nav_order: 3
display_categories: [work, fun]
horizontal: false
---

Semiconductor technology advances when device concepts are evaluated alongside integration constraints and design implications. Our group studies architectures and methods that connect device-level innovation to practical technology development.

## Research themes

### Advanced transistor architectures
We investigate emerging transistor structures—including complementary FETs (CFETs) and vertical FETs—to understand their potential, trade-offs, and integration challenges beyond conventional scaling.

### 3D and dual-sided integration
We explore Flip FET, Flip 3D, and approaches that use both sides of a wafer. The goal is to open new architectural options for transistor integration and interconnects while carefully considering process complexity and manufacturability.

### Design–technology co-optimization (DTCO)
We connect device and process choices with layout, parasitics, standard cells, and circuit-level performance. This helps distinguish innovations that look promising in isolation from those that can deliver meaningful system-level benefits.

### Manufacturing-aware technology development
We study how process integration, design constraints, and variability affect the feasibility of emerging technologies. Our philosophy is to identify the important engineering questions early and evaluate ideas with rigorous, evidence-based methods.

---

## Selected projects

The projects below provide more detail on specific research directions and results. For collaboration inquiries, please visit the [Collaborate with Us page](/collaborate/).

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}
{% else %}
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
