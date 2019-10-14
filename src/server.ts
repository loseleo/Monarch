import 'reflect-metadata'

import app from './app'
const server = app.listen(3888, () => {
  console.log('Server is running at http://localhost:3888')
  console.log('Press CTRL-C to stop \n')
})
// createConnection().then(async connection => {
//   let savedPhotos = await connection.manager.find(User);
//   console.log("All photos from the db: ", savedPhotos);

// }).catch(error => console.log(error));

module.exports = server
