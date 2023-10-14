import request from 'supertest'
import app from '../server';

describe("CRUD Operations", () => {
  it("Should create a new book", async () => {
    const response = await request(app).post('/books').send({
      title: "title",
      author: "author",
      description: "description",
      price: 1,
    });
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('id');
  })

  it('Should list books', async () => {
    const response = await request(app).get('/books');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('Should get details of a book', async () => {
    const createResponse = await request(app)
      .post('/books')
      .send({
        name: 'Test Book',
        description: 'This is a test book',
        author: "author",
        price: 1,
      });
    const resourceId = createResponse.body.id;

    const response = await request(app).get(`/books/${resourceId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', resourceId);
  });

  it('Should update book details', async () => {
    const createResponse = await request(app)
      .post('/books')
      .send({
        name: 'Test Book',
        description: 'This is a test book',
        author: "author",
        price: 1,
      });
    const resourceId = createResponse.body.id;

    const response = await request(app)
      .put(`/books/${resourceId}`)
      .send({
        name: 'Updated Test Book',
        description: 'Updated This is a test book',
        author: "Updated author",
        price: 1,
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', resourceId);
    expect(response.body).toHaveProperty('name', 'Updated Test book');
    expect(response.body).toHaveProperty('description', 'Updated This is a test book');
    expect(response.body).toHaveProperty('author', 'Updated author');
    expect(response.body).toHaveProperty('price', 1);
  });

  it('Should delete a book', async () => {
    const createResponse = await request(app)
      .post('/books')
      .send({
        name: 'Test Book',
        description: 'This is a test book',
        author: "author",
        price: 1,
      });
    const resourceId = createResponse.body.id;

    const response = await request(app).delete(`/books/${resourceId}`);
    expect(response.status).toBe(200);
  });
})