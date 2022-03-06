let departmentsDB = [
  {
    id: 1,
    name: "Test",
    location: "testLocation",
  },
];

/**
 * {
 *  id: number
 *  name: string
 *  location: string
 * }
 */

// GET /departments
/**
 *
 * @param req {Request<{}, any, any, qs.ParsedQs, Record<string, any>>}
 * @param res {}
 * @returns
 */
const getAllHandler = (req, res) => {
  return res.send(departmentsDB);
};
// GET /departments/{id}
/**
 *
 * @param req {Request<{}, any, any, qs.ParsedQs, Record<string, any>>}
 * @param res {}
 * @returns
 */
const getByIdHandler = (req, res) => {
  const id = parseInt(req.params.id);
  const department = departmentsDB.find((department) => department.id === id);
  if (department) {
    res.send(department);
  } else {
    res.status(404).send({ error: "NOTFOUND" });
  }
};
// POST /departments
const createDepartmentHandler = (req, res) => {
  const id = Date.now();
  departmentsDB.push({ ...req.body, id });
  res.send({ ...req.body, id });
};
// PUT /departments/{id}
const updateDepartmentHandler = (req, res) => {
  const id = parseInt(req.params.id);
  const departmentIndex = departmentsDB.findIndex(
    (department) => department.id === id
  );
  if (departmentIndex !== -1) {
    departmentsDB[departmentIndex] = {
      ...departmentsDB[departmentIndex],
      ...req.body,
    };
    res.send(departmentsDB[departmentIndex]);
  } else {
    res.status(404).send({ error: "NOTFOUND" });
  }
};
// DELETE /departments/{id}
const deleteDepartmentHandler = (req, res) => {
  const id = parseInt(req.params.id);
  departmentsDB = departmentsDB.filter((dep) => dep.id !== id);
  res.send({ message: "Success" });
};

module.exports = {
  getAllHandler,
  getByIdHandler,
  createDepartmentHandler,
  updateDepartmentHandler,
  deleteDepartmentHandler,
};
