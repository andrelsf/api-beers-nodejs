const {v4: uuidv4 } = require('uuid');

exports.create = async function (postBeerRequest) {
  const {name, alcoholContent, ingredients} = postBeerRequest;
  return {
    userId: uuidv4(),
    name: name,
    alcoholContent: alcoholContent,
    ingredients: ingredients,
    createdAt: Date.now()
  }
}