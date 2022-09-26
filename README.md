# fastify-validator

Fastify validation library inspired by Laravel validation mechanism

## Usage/Examples

```javascript
import fastify from 'fastify'
import fastifyPost from 'fastify-post'
import fastifyValidator from 'fastify-validator'

const app = fastify()
app.register(fastifyPost)
app.register(fastifyValidator)

app.post('/', async (req) => {
  const validator = req.validator.make(req.body, {
    username: 'required|min:2',
    password: 'required|min:4',
  })
  if (!validator.validate()) {
    return validator.errors().all()
  }
  return req.body
})

app.listen({ port: 8000 }, (err, address) => {
  if (err) throw err
  console.log(`server listening on ${address}`)
})
```
Register Custom Validation Rules:
```javascript
app.register(fastifyValidator)
app.validator.register('telephone', function (value) {
  return /^\d{3}-\d{3}-\d{4}$/.test(value);
})
```

## API Reference

Read more at [Simple Body Validator](https://www.simple-body-validator.com/)

## License

[MIT](https://github.com/erwinstone/fastify-validator/blob/main/LICENSE)
