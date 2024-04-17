// import Database from "../Database/index.js";
import * as dao from "./dao.js";
export default function CourseRoutes(app) {

  // app.delete("/api/courses/:id", (req, res) => {
  //   // const { id } = req.params;
  //   // Database.courses = Database.courses
  //   //   .filter((c) => c._id !== id);
  //   res.sendStatus(204);
  // });

  // app.put("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   const course = req.body;
  //   Database.courses = Database.courses.map((c) =>
  //     c._id === id ? { ...c, ...course } : c
  //   );
  //   res.sendStatus(204);
  // });

  // app.get("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   const course = Database.courses
  //     .find((c) => c._id === id);
  //   if (!course) {
  //     res.status(404).send("Course not found");
  //     return;
  //   }
  //   res.send(course);
  // });


  // app.post("/api/courses", (req, res) => {
  //   const course = { ...req.body,
  //     _id: new Date().getTime().toString() };
  //   Database.courses.push(course);
  //   res.send(course);
  // });

  // app.get("/api/courses", (req, res) => {
  //   const courses = Database.courses;
  //   res.send(courses);
  // });

  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    await dao.deleteCourse(id);
    res.sendStatus(204);
  });

  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    await dao.updateCourse(id, course);
    res.sendStatus(204);
  });

  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = await dao.findCourseById(id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });

  app.post("/api/courses", async (req, res) => {
    const course = req.body;
    await dao.createCourse(course);
    const newCourse = await dao.findCourseByCourseId(course.id);
    res.send(newCourse);
  });

  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });

  app.get("/api/courses/number/:cid", async (req, res) => {
    const { cid } = req.params;
    const courses = await dao.findCourseNumberById(cid);
    if (!courses) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(courses[0].id);
  });

}
