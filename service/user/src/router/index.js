const Router = require("koa-router");
const { User } = require("../model");
const router = new Router({
  prefix: "/api",
});

router.get('/', async (ctx) => {
  ctx.body = 'user service running!';
  ctx.status = 200;
});

router.post("/users", async (ctx) => {
  let user = ctx.request.body;
  try {
    let result = await User.create(user);
    ctx.body = result;
    ctx.status = 201;
  } catch (error) {
    ctx.throw(400, error.message);
  }
});

router.delete("/users/:id", async (ctx) => {
  await User.deleteOne({ _id: ctx.params.id });
  ctx.status = 204;
});

router.patch("/users/:id", async (ctx) => {
  let newData = ctx.request.body;
  let result = await User.findByIdAndUpdate(ctx.params.id, newData, {
    new: true,
  });
  ctx.body = result;
  ctx.status = 201;
});

router.get("/users", async (ctx) => {
  let page = parseInt(ctx.query.page);
  let size = parseInt(ctx.query.size);

  let result = await User.find()
    .sort({ value: 1 })
    .skip((page - 1) * size)
    .limit(size);

  ctx.body = result;
  ctx.status = 200;
});

router.get("/users/:id", async (ctx) => {
  let result = await User.findById(ctx.params.id);
  ctx.body = result;
  ctx.status = 200;
});

module.exports = router;