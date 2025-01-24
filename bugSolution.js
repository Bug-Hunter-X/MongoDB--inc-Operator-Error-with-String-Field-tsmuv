```javascript
// Correct usage of $inc operator with a numeric field
db.collection('myCollection').updateOne( { "_id": 1 }, { $inc: { "myNumber": 1 } } );

//Alternative solution, converting string to int before update
db.collection('myCollection').updateOne( { "_id": 1 }, { $inc: { "myNumber": parseInt(myString) } } );
```