// Student Course Tracker
// This program stores student and course information,
// calculates course progress, and displays a message
// depending on the student's progress.

const studentName = "Brian";
const courseName = "JavaScript";
let completedLessons = 6;
const totalLessons = 10;

// Boolean value
const enrolled = true;

// Array containing lessons
const lessons = [
    "HTML Basics",
    "CSS Basics",
    "JavaScript Variables",
    "Data Types",
    "Operators"
];

// Student object
const student = {
    name: studentName,
    course: courseName,
    enrolled: enrolled
};

// Using typeof during development
console.log(typeof studentName);
console.log(typeof completedLessons);
console.log(typeof enrolled);
console.log(typeof lessons);

// Check if total lessons is zero
if (totalLessons === 0) {
    document.getElementById("message").textContent =
        "No lessons have been added yet.";
} else {

    // Calculate course completion percentage
    const progress = (completedLessons / totalLessons) * 100;

    // Display percentage using a template literal
    document.getElementById("student").textContent =
        `Student: ${student.name}`;

    document.getElementById("course").textContent =
        `Course: ${student.course}`;

    document.getElementById("progress").textContent =
        `Course Progress: ${progress}%`;

    // Determine progress level
    if (progress === 100) {
        document.getElementById("message").textContent =
            "Course completed";
    } else if (progress >= 50 && progress < 100) {
        document.getElementById("message").textContent =
            "Keep going";
    } else {
        document.getElementById("message").textContent =
            "You are getting started";
    }
}