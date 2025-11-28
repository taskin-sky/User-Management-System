const mongoose = require('mongoose');

const connectDB = () => console.log('✅ DB connected.');

// when Mongodb connection needed
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL);
//     console.log('✅ DB connected.');
//   } catch (error) {
//     console.log(`❌ ${error.message}`);
//   }
// };

module.exports = connectDB;
