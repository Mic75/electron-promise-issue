let petStore = {
  cat: "meow",
  dog: 'waf'
};

const storeInterface = {
  getItems(){
    return Promise.resolve(petStore);
  },

  addItem(key, value){
    petStore[key] = value;
  }

};


module.exports = storeInterface;