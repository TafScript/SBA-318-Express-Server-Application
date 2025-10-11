export function errorHandler(err, req, res, next) {
  console.error(new Date().toISOString() + " ERROR: " + err.message);
  res.status(500).json({ success: false, message: err.message });
}