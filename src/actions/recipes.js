export const toggleRecipe = (id) => ({
  type: 'TOGGLE_RECIPE',
  id
});

export const addRecipe = (title) => ({
  type: 'ADD_RECIPE',
  title: title.trim()
});