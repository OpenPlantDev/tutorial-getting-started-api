// Node.js + Express server backend
// use SQLite (https://www.sqlite.org/index.html) as a database
//

// run this once to create the initial database file
//   node create_database.js

// to clear the database, simply delete the database file:

const sqlite3 = require('sqlite3');
const dbName = 'model.db';
const db = new sqlite3.Database(dbName);

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db.serialize(() => {
  // create a new database tables:
  db.run("CREATE TABLE components (id INTEGER PRIMARY KEY, className TEXT, tag TEXT, description TEXT, manufacturer TEXT, properties TEXT)");
  db.run("CREATE TABLE wbsitems (id INTEGER PRIMARY KEY, className TEXT, tag TEXT, description TEXT)");

  let valve = {
    className: "valve",
    tag: "V-100",
    desc: 'Gate Valve',
    man: "ABC",
    props: { length: 50, weight: 100 },
  };

  let pump = {
    className: "pump",
    tag: "P-100",
    desc:"Centrifugal Pump", 
    man: "ABC",
    props: {},
  };

  let tank = {
    className: "tank",
    tag: "T-100",
    desc:"Horizontal Tank", 
    man: "XYZ",
    props: {},
  };

  let sql = `INSERT INTO components (className, tag, description, manufacturer, properties)  VALUES 
    ('${valve.className}', '${valve.tag}', '${valve.desc}', '${valve.man}', '${JSON.stringify(valve.props)}'),
    ('${pump.className}', '${pump.tag}', '${pump.desc}', '${pump.man}', '${JSON.stringify(pump.props)}'),
    ('${tank.className}', '${tank.tag}', '${tank.desc}', '${tank.man}', '${JSON.stringify(tank.props)}')
  `;

  console.log (sql);
  // insert data into components table:
  db.run(sql);
         
  console.log(`successfully added components to the components table in ${dbName}`);

const u1 = { className: "unit", tag: "U1", desc: "Unit #1" };
const u2 = { className: "unit", tag: "U2", desc: "Unit #2" };
const s1 = { className: "service", tag: "S1", desc: "Service #1" };
const a1 = { className: "area", tag: "A1", desc: "Area #1" };

  // insert data into wbsitems table:
  let sql1 = `INSERT INTO wbsitems (className, tag, description)  VALUES 
            ('${u1.className}', '${u1.tag}', '${u1.desc}'),
            ('${u2.className}', '${u2.tag}', '${u2.desc}'),
            ('${s1.className}', '${s1.tag}', '${s1.desc}'),
            ('${a1.className}', '${a1.tag}', '${a1.desc}')
        `;
         
  console.log (sql1);
  // insert data into components table:
  db.run(sql1);
  console.log(`successfully add wbsitems to the wbsitems table in ${dbName}`);



  
  // print them out to confirm their contents:
  db.each("SELECT * FROM components", (err, row) => {
    let item = {
      className: row.className,
      tag: row.tag,
      description: row.description,
      manufacturer: row.manufacturer,
      properties: row.properties ? JSON.parse(row.properties) : []
    };
      console.log(`className=${item.className}, tag=${item.tag}, 
                  description=${item.description},
                  manufacturer=${item.manufacturer},
                  properties=${JSON.stringify(item.properties)} 
                  `);

  });

  // print them out to confirm their contents:
  db.each("SELECT * FROM wbsitems", (err, row) => {
    let item = {
      className: row.className,
      tag: row.tag,
      description: row.description,
    };
      console.log(`className=${item.className}, tag=${item.tag}, 
                  description=${item.description},
                  `);

  });

});

db.close();