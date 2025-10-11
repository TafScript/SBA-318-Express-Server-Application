export function timer(req, res, next) {
  const start = Date.now();
  res.on("finish", () => {
    console.log(req.method + " " + req.originalUrl + " took " + (Date.now() - start) + "ms");
  });
  next();
}
