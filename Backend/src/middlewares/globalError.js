const { MyError } = require("../helpes/customError");

class GlobalError {
  constructor(defaultStatus) {
    this.defaultStatus = defaultStatus;
    this.handle = this.handle.bind(this);
  }

  handle(error, _req, res, _next) {
    if (error instanceof MyError) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.status(this.defaultStatus).json({ message: error.message });
  }
}

const globalError = new GlobalError(500);

module.exports = globalError;