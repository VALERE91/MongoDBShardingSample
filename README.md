# MongoDBShardingSample

In this sample we have 4 Ubuntu VM :
- mongo-master : a config server and a mongos
- mongo-shard1 : a config server, a mongos and a shard
- mongo-shard2 : a config server and a shard
- mongo-shard3 : a shard

The mongodb folder contains the mongodb bin in version 3.2 rc2.

The launch-cluster.sh file contains the different commands to launch all the different instances. Don't forget to change your data path if your 
mongodb folder is not in your desktop.

Once the cluster launch you must configure it and your database. Use 
shard_queries on a mongos instance for this step.

Have fun ;)
