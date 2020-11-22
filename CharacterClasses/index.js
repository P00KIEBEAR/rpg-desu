const CharacterClass = require('./CharacterClass');

module.exports = {
  Warrior: new CharacterClass({
    name: 'Warrior',
    stats: {
      health: { min: 20, max: 30 },
      mana: { min: 20, max: 30 },
      strength: { min: 20, max: 30 },
      defense: { min: 20, max: 30 },
    },
  }),
};
