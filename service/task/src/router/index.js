const Router = require("koa-router");
const { Task } = require("../model");
const router = new Router({
  prefix: "/api",
});

router.get('/', async (ctx) => {
  ctx.body = 'task service running!';
  ctx.status = 200;
});

router.post("/tasks", async (ctx) => {
  let task = ctx.request.body;
  try {
    let result = await Task.create(task);
    ctx.body = result;
    ctx.status = 201;
  } catch (error) {
    ctx.throw(400, error.message);
  }
});

router.delete("/tasks/:id", async (ctx) => {
  await Task.deleteOne({ _id: ctx.params.id });
  ctx.status = 204;
});

router.patch("/tasks/:id", async (ctx) => {
  let newData = ctx.request.body;
  let result = await Task.findByIdAndUpdate(ctx.params.id, newData, {
    new: true,
  });
  ctx.body = result;
  ctx.status = 201;
});

router.get("/tasks", async (ctx) => {
  let page = parseInt(ctx.query.page);
  let size = parseInt(ctx.query.size);

  let result = await Task.find().populate([{ path: 'user', select: 'name' }])
    .skip((page - 1) * size)
    .limit(size);

  ctx.body = result;
  ctx.status = 200;
});

router.get("/tasks/:id", async (ctx) => {
  let result = await Task.findById(ctx.params.id);
  ctx.body = result;
  ctx.status = 200;
});

module.exports = router;