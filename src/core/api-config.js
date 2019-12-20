export const fetchTasks = {
  path: "/api/v1/tasks",
  method: "GET"
};

export const createTask = {
  path: "/api/v1/tasks",
  method: "POST"
};
// my api
export const fetchCommoditiesByDay = {
  path: "/api/expenses/day/:date",
  method: "GET"
};

export const fetchCommoditiesByWeek = {
  path: "/api/expenses/week/:date",
  method: "GET"
};

export const fetchCommoditiesByMonth = {
  path: "/api/expenses/month/:date",
  method: "GET"
};

export const fetchCommoditiesByYear = {
  path: "/api/expenses/Year/:date",
  method: "GET"
};

export const fetchAllTags = {
  path: "/api/tags",
  method: "GET"
};

export const createCommidity = {
  path: "/api/expense",
  method: "POST"
};
