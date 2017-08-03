const superheroes = require('superheroes');
const superb = require('superb');

class HeroSet {

  constructor() {
    this.intervalId = undefined;
    this.heroes = {
      [superheroes.random()]: superb(),
      [superheroes.random()]: superb(),
      [superheroes.random()]: superb(),
    }
  }

  getHeroesPromise() {
    return Promise.resolve(this.heroes);
  }

  getHeroes() {
    return this.heroes;
  }

  getHeroesByValue() {
    return Object.assign({}, this.heroes);
  }

  addHero(key, value) {
    this.heroes[key] = value;
  }

  startAutoFill(period) {
    this.intervalId = setInterval(() => {
      this.heroes[superheroes.random()] = superb();
    }, period);
  }

  stopAutoFill() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

};

module.exports = new HeroSet();
