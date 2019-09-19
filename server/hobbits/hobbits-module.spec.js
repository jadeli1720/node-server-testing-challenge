const Hobbits = require('./hobbits-modules.js');
const db = require('../data/dbConfig.js');

describe('hobbits model', () => {
    //Clean table before run each test:
    beforeEach(async () => {
        await db('hobbits').truncate();
    })

    //testing the environment
    it('should set the environment to testing', () => {
        
        expect(process.env.DB_ENV).toBe('testing')//knexfile.js line 20 
    });
    
    //creating a hobbit
    describe('insert()', () => {
        it('should insert hobbits into the db', async() => {
            await Hobbits.insert({ name: 'Lily' });
            let hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(1);
        })
    });
    //Checking to see what is returned after insertion
    it('should insert hobbits into the db', async() => {
        //insert a record
        const [id] = await Hobbits.insert({name: 'Lily'});
        //checking against the database
        let hobbit = await db('hobbits')
            .where({ id })
            .first()

        //assert the record was inserted
        // expect(hobbit.name).toBe('Thomas');
        expect(hobbit.name).toBe('Lily');
        
    });

})