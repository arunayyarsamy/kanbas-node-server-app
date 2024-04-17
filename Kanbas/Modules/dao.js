import model from "./model.js";

export const createModule = (module) => {
    delete module._id
    const resp = model.create(module)
    console.log(resp)
};
export const findAllModules = () => model.find();
export const findModuleById = (moduleId
) => model.findById(moduleId);
export const updateModule = (moduleId, module) => model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
export const findModulesByCourse = (courseId) => model.find({ course: courseId });