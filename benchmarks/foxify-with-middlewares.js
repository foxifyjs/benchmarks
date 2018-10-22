"use strict"

const Foxify = require("foxify");

const app = new Foxify();

app.disable("x-powered-by");

app.set("workers", 1);

app.use(require("cors")());
app.use(require("dns-prefetch-control")());
app.use(require("frameguard")());
app.use(require("hide-powered-by")());
app.use(require("hsts")());
app.use(require("ienoopen")());
app.use(require("x-xss-protection")());

const schema = {
  response: {
    200: {
      type: "object",
      properties: {
        hello: {
          type: "string",
        },
      },
    },
  },
};

app.get("/", { schema }, (req, res) => res.json({ hello: "world" }));

app.start();