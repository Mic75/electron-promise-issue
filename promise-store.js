let petStore = {
  cat: "meow",
  dog: 'waf'
};

const storeInterface = {
  getItemsPromise(){
    return Promise.resolve(petStore);
  },

  getItems(){
    return petStore;
  },

  addItem(key, value){
    petStore[key] = value;
  }

};


module.exports = storeInterface;