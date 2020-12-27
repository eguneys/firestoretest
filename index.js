const Firestore = require('@google-cloud/firestore');

const db = new Firestore();

const coll = db.collection('test-dev');

async function test() {

  let docref = coll.doc('testrule');

  await docref.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });

  const snapshot = await coll.get();
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });

  

}

test().then(() => {
  db.terminate();

  process.exit();
});
