// import db from "../Database/index.js";

import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
function ModuleRoutes(app) {
  // app.get("/api/modules", (req, res) => {
  //   res.send(db.modules);
  // });
  
  // app.delete("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   db.modules = db.modules.filter((m) => m._id !== mid);
  //   res.sendStatus(200);
  // });

  // app.get("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   const module = db.modules.find((m) => m._id === mid);
  //   res.send(module);
  // });

  // app.get("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const modules = db.modules
  //     .filter((m) => m.course === cid);
  //   res.send(modules);
  // });

  // app.post("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const newModule = {
  //     ...req.body,
  //     course: cid,
  //     _id: new Date().getTime().toString(),
  //   };
  //   db.modules.push(newModule);
  //   res.send(newModule);
  // });

  // app.put("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   const moduleIndex = db.modules.findIndex(
  //     (m) => m._id === mid);
  //   db.modules[moduleIndex] = {
  //     ...db.modules[moduleIndex],
  //     ...req.body
  //   };
  //   res.sendStatus(204);
  // });

  app.get("/api/modules", async (req, res) => {
    const modules = await dao.findAllModules();
    // .then((modules) => 
    res.send(modules);
  // );
  });

  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    await dao.deleteModule(mid);
    res.sendStatus(200);
  });

  app.get("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const module  = await dao.findModuleById(mid);
      // .then((module) => 
    if (module) {
      res.send(module);
    } else {
      res.sendStatus(404);
    }
    // );
  });

  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const course = await courseDao.findCourseById(cid);
    const courseModules = await dao.findModulesByCourse(course.id);
    // console.log(courseModules)
      // .then((modules) =>
    res.send(courseModules);
      //);
  });

  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const course = await courseDao.findCourseById(cid);
    const newModule = {
      ...req.body,
      course: course.id,
    };
    const response = await dao.createModule(newModule);
    res.send(newModule);
  });

  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const module = req.body;
    const status = await dao.updateModule(mid, module);
    res.json(status);
  });

}
export default ModuleRoutes;