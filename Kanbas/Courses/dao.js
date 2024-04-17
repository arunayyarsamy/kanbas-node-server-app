import model from "./model.js";

export const createCourse = (course) => {
    delete course._id;
    delete course.image;
    model.create(course);
};
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);
export const findCourseByCourseId = (courseId) => model.findOne({ id: courseId });
export const updateCourse = (courseId, course) => model.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
export const findCourseNumberById = (courseId) => model.find({_id: courseId}, {id: true, _id: false});
