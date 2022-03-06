const express = require("express");
const bodyParser = require("body-parser");
const departmentsController = require("./departments-controller");

const app = express();
app.use(bodyParser.json());

app.get("/departments", departmentsController.getAllHandler);
app.get("/departments/:id", departmentsController.getByIdHandler);
app.post("/departments", departmentsController.createDepartmentHandler);
app.put("/departments/:id", departmentsController.updateDepartmentHandler);
app.delete("/departments/:id", departmentsController.deleteDepartmentHandler);

app.listen(8080, () =>
  console.log("Server is running on http://localhost:8080")
);
