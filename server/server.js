const app = require("./index");
const appConfig = require("./app/config/app.config.js");

// Listen for incoming requests
const PORT = process.env.PORT || `${appConfig.PORT}`;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});