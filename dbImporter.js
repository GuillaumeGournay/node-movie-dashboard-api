const host = 'localhost';
const port = 3308;
const user = 'root';
const password = '';
const database = 'movie-dashboard';

const mysql_import = require('./node_modules/mysql-import');
const Importer = require('./node_modules/mysql-import/mysql-import.js');
const importer = new Importer({host, port, user, password, database});

importer.import('./public/movie-dashboard.sql').then(()=>{
  var files_imported = importer.getImported();
  console.log(`${files_imported.length} SQL file(s) imported.`);
}).catch(err=>{
  console.error(err);
});

