#Launch a config server
mongod --configsvr --dbpath $HOME/Desktop/mongodb/data/configdb --port 27019

#Launch a mongos
mongos --configdb mongo-master:27019,mongo-shard1:27019,mongo-shard2:27019

#Launch a shard
mongod --port 27016 --dbpath $HOME/Desktop/mongodb/data/db
