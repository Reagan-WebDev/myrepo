class student{
    constructor(AdmisssionNumber,FirstName,LastName,Course){
        this.AdmisssionNumber = AdmisssionNumber;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Course = Course;
    }
    set AdmisssionNumber(newAdmissionNumber){
        if(typeof newAdmissionNumber === "number" && newAdmissionNumber > 0){
            this._AdmissionNumber = newAdmissionNumber;
        }
        else{
            console.error = "AdmisssionNumber must be a number!";
        }
    }
    set FirstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._FirstName = newFirstName;
        }
        else{
            console.error = "FirstName must be string!";
        }
    }
    set LastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._LastName = newLastName;
        }
        else{
            console.error = "LastName must be string!";
        }
    }
    set Course(newCourse){
        if(typeof newCourse === "string" && newCourse.length > 0){
            this._Course = newCourse;
        }
        else{
            console.error = "Course must be string!";
        }
    }
    get AdmissionNumber(){
        return this._AdmissionNumber;
    }
    get FirstName(){
        return this._FirstName;
    }
    get LastName(){
        return this._LastName;
    }
    get Course(){
        return this._Course;
    }
}
const Student = new student(41064,"Reagan","Otieno","Telecoms");
console.log(Student.AdmissionNumber);
console.log(Student.FirstName);
console.log(Student.LastName);
console.log(Student.Course);