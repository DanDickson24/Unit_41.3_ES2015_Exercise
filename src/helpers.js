
function choice(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }
  
function remove(items, item) {
    const index = items.indexOf(item);
    if (index !== -1) {
      return items.splice(index, 1)[0];
    }
  }
  
  export { choice, remove };