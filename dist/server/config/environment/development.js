'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://nrsteiner:YFcode21@cluster0-shard-00-00.dj1gb.mongodb.net:27017,cluster0-shard-00-01.dj1gb.mongodb.net:27017,cluster0-shard-00-02.dj1gb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7qnhf1-shard-0&authSource=admin&retryWrites=true&w=majority'
  },

  seedDB: true
};
