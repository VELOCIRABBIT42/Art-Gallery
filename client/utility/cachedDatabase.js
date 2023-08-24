const cachedDatabase = {
  //Function to load values
  loadServerValues: async function() {
    try {
      let response = await fetch('/art/gallery');
      // console.log(response);
      response = await response.json();

      if (!Array.isArray(response)) return;
  
      this.serverDataObject = response;
      while (this.callbackFunctions.length){
        this.callbackFunctions.pop()(this.serverDataObject);
      }
    }
    catch (e) {
      console.error('Error fetching images:', e);
    }
  },
  
  //Array that contains functions to run on load with recieved data
  callbackFunctions: [],
  //Object containing data from server
  serverDataObject: undefined,
}

export default cachedDatabase;