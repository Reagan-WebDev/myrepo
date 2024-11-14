const student1 = {
    FirstName: "Reagan",
    LastName: "Otieno",
    AdmissionNumber: "SB62/PU/41064/22",
    Age: 21,
    course: () =>  console.log("I am taking Bsc Telecoms")
};
const student2 = {
    FirstName: "Kimberley",
    LastName: "Taa",
    AdmissionNumber: "SB30/PU/41090/22",
    Age: 21,
    course: () => console.log("I am taking Bsc Computer Science")
};
console.log(student1.FirstName);
console.log(student1.LastName);
console.log(student1.AdmissionNumber);
console.log(student1.Age);
console.log(student1.course());
console.log(student2.FirstName);
console.log(student2.LastName);
console.log(student2.AdmissionNumber);
console.log(student2.Age);
console.log(student2.course());