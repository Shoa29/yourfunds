'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://nrsteiner:YFcode21@cluster0-shard-00-00.dj1gb.mongodb.net:27017,cluster0-shard-00-01.dj1gb.mongodb.net:27017,cluster0-shard-00-02.dj1gb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7qnhf1-shard-0&authSource=admin&retryWrites=true&w=majority'
  },

  seedDB: true
};
