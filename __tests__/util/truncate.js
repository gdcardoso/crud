import mongoose from 'mongoose';

const db = mongoose.connection;

export default function truncate() {
  db.on('error', console.error);

  db.once('open', () => {
    db.dropCollection('developers', err => {
      if (err) throw err;
    });
  });

  mongoose.connect(process.env.MONGO_URL);
}
