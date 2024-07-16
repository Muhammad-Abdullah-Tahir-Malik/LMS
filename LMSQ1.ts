class Course {
    private static idCounter = 0;
    public id: number;
    public name: string;
    public students: Student[];
  
    constructor(name: string) {
      this.id = Course.idCounter++;
      this.name = name;
      this.students = [];
    }
  
    enrollStudent(student: Student): void {
      this.students.push(student);
      console.log(`${student.name} has been enrolled in ${this.name}.`);
    }
  
    listStudents(): void {
      console.log(`Course: ${this.name} (ID: ${this.id})`);
      console.log("Enrolled Students:");
      this.students.forEach(student => {
        console.log(`- ${student.name} (ID: ${student.id})`);
      });
    }
  }
  
  class Student {
    private static idCounter = 0;
    public id: number;
    public name: string;
  
    constructor(name: string) {
      this.id = Student.idCounter++;
      this.name = name;
    }
  }
  
  class LMS {
    private courses: Course[];
  
    constructor() {
      this.courses = [];
    }
  
    addCourse(courseName: string): void {
      const course = new Course(courseName);
      this.courses.push(course);
      console.log(`Course ${courseName} has been added.`);
    }
  
    getCourse(courseId: number): Course | undefined {
      return this.courses.find(course => course.id === courseId);
    }
  
    listCourses(): void {
      console.log("Courses:");
      this.courses.forEach(course => {
        console.log(`- ${course.name} (ID: ${course.id})`);
      });
    }
  }
  
  // Example Usage
  const lms = new LMS();
  lms.addCourse("Math 101");
  lms.addCourse("History 202");
  
  const student1 = new Student("Alice");
  const student2 = new Student("Bob");
  
  const mathCourse = lms.getCourse(0);
  const historyCourse = lms.getCourse(1);
  
  if (mathCourse) {
    mathCourse.enrollStudent(student1);
    mathCourse.enrollStudent(student2);
    mathCourse.listStudents();
  }
  
  if (historyCourse) {
    historyCourse.enrollStudent(student1);
    historyCourse.listStudents();
  }
  
  lms.listCourses();
  