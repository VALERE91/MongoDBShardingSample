//Add all the shards
sh.addShard("mongo-shard1:27016")
sh.addShard("mongo-shard2:27016")
sh.addShard("mongo-shard3:27016")

//Show shared param
sh.status()

//Enable sharding for our database
sh.enableSharding("ocean")

//Shared out collection
sh.shardCollection("ocean.ocean_data", { "station_id":"hashed" });

//Change to ocean
use ocean

//Show sharding index created
db.ocean_data.getIndexes()

//Ensure some indexes
db.ocean_data.ensureIndex({"loc":"2dsphere"},{"background":true});
db.ocean_data.ensureIndex({"products.name":-1},{"background":true});
db.ocean_data.ensureIndex({"products.t":-1},{"background":true});

//Show them
db.ocean_data.getIndexes()

//Import data
mongoimport -d ocean -c ocean_data $HOME/Desktop/ocean_data.json
mongoimport -d ocean -c ocean_station $HOME/Desktop/stations.json

//Show sharding
use ocean
db.stats()
