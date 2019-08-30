## Solution

# Tables:

Recipes
Ingredients
Steps

Recipes (many) <==> Ingredients (many)
Steps (many) <==> Recipes (one)

# Table Details

recipes:
- id
- name

ingredients:
- id
- name

steps:
- id
- step_number
- content
- recipe_id

recipe_ingredients:
- recipe_id
- ingredient_id
- quantity