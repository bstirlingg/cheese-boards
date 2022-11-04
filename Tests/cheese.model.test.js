//const { Board } = require('cheese-boards/models/board.model.js');
const { Cheese } = require("../models");
const { db } = require('../db/db.js');


test('Test works', async () => {
    await Cheese.sync({ force: true });
    await Cheese.create({title: "Parmsean", description: "Crunchy, but very smelly"})
    
    const test = await Cheese.findAll({where: {title: "Parmsean"}})
    expect(test[0].getDataValue("title")).toMatch('Parmsean');
})

test('Test works', async () => {
    await Cheese.sync({ force: true });
    await Cheese.create({title: "Hard", description: "Crunchy, but very smelly"})
    
    const test = await Cheese.findAll({where: {title: "Hard"}})
    expect(test[0].getDataValue("description")).toMatch('Crunchy, but very smelly');
})
