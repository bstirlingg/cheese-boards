const { User } = require("../models");
const { db } = require('../db/db.js');

test('Test works', async () => {
    await User.sync({ force: true });
    await User.create({name: "Robert", email: "rob@gmail.com"})
    
    const test = await User.findAll({where: {email: "rob@gmail.com"}})
    expect(test[0].getDataValue("name")).toMatch('Robert');
})

test('Test works', async () => {
    await User.sync({ force: true });
    await User.create({name: "Dude", email: "dude@gmail.com"})
    
    const test = await User.findAll({where: {email: "dude@gmail.com"}})
    expect(test[0].getDataValue("email")).toMatch('dude@gmail.com');
})

