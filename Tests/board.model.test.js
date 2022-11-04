//const { Board } = require('cheese-boards/models/board.model.js');
const { Board } = require("../models/index.js");
const { db } = require('../db/db.js');

test('Test works', async () => {
    await Board.sync({ force: true });
    await Board.create({type: "Hard", description: "Crunchy, but very smelly", rating: 3})
    
    const test = await Board.findAll({where: {type: "Hard"}})
    expect(test[0].getDataValue("type")).toMatch('Hard');
})

test('Test works', async () => {
    await Board.sync({ force: true });
    await Board.create({type: "Soft", description: "Droopy, best on toast", rating: 8})

    const test = await Board.findAll({where: {description: "Droopy, best on toast"}})
    expect(test[0].getDataValue("description")).toMatch("Droopy, best on toast");
})

test('Test works', async () => {
    await Board.sync({ force: true });
    await Board.create({type: "Stringy", description: "Best in lunchboxes", rating: 3})

    const test = await Board.findAll({where: {rating: 3}})
    expect(test[0].getDataValue("rating")).toBe(3);
})
