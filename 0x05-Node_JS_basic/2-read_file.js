const countStudents = function (path) {
  const fs = require('fs');
  
  fs.readFileSync('path', (err, data) => {
    if (err) {
      console.log('Cannot load the database');
    };
    process.stdout.Write(`Number of students: ${NUMBER_OF_STUDENTS}`);
  });
}

module.export = countStudents; 
