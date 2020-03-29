const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('Should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "Herbert",
        email: "hgd1313@gmail.com",
        whatsapp: "351935030016",
        city: "Campina Grande",
        uf: "PB"
    });
    
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8)
  });
});