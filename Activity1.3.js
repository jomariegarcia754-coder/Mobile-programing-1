    // PERSONAL INFORMATION SYSTEM

// 10 LET VARIABLES
let name="Jomarie", age=21, gender="male", course="BSIT", year="3rd Year";
let section="3A", city="Calbayog", hobby="drawing", phone="09855713253", status="Student";

// 10 CONST VARIABLES
const school="NWSSU", email="jomariegarcia754@gmail.com", birthday="August 31, 2005";
const id="2024-1049-1", department="CCIS", semester="1st", sy="2026-2027";
const country="Philippines", role="Student", system="Personal Information";

// 5 ARROW FUNCTIONS
const greet=x=>`Hello, ${x}!`;
const upper=x=>x.toUpperCase();
const check=x=>x==="Student"?"Active":"Inactive";
const add=(x,y)=>x+y;
const show=x=>`My name is ${x}.`;

// 3 DESTRUCTURED ARRAYS
const info=[name,age,gender], [n,a,g]=info;
const education=[course,year,section], [c,y,s]=education;
const contact=[city,phone,email], [ct,p,e]=contact;

// 3 DESTRUCTURED OBJECTS
const person={name,age,gender}, {name:n1,age:a1,gender:g1}=person;
const schoolInfo={school,department,course}, {school:sc,department:d,course:cr}=schoolInfo;
const account={id,email,status}, {id:studentID,email:mail,status:st}=account;

// 2 ARRAYS WITH SPREAD
const hobbies=["Drawing","Music"];
const allHobbies=[...hobbies,hobby];

const skills=["HTML","CSS"];
const allSkills=[...skills,"JavaScript"];

// 2 OBJECTS WITH SPREAD
const basic={name,age};
const profile={...basic,gender,course};

const contactInfo={city,phone};
const fullProfile={...profile,...contactInfo};

// 2 MAP()
const upperHobbies=allHobbies.map(x=>x.toUpperCase());
const hobbyList=allHobbies.map(x=>`Hobby: ${x}`);

// 2 FILTER()
const selectedHobbies=allHobbies.filter(x=>x.length>5);
const webSkills=allSkills.filter(x=>x.includes("HTML")||x.includes("CSS"));

// 2 OPTIONAL CHAINING
const address={details:{city}};
const myCity=address.details?.city;

const social={};
const facebook=social.accounts?.facebook;

// OUTPUT: 10+ TEMPLATE LITERALS
console.log(`
===== ${system} =====
${greet(name)}
Name: ${name}
Age: ${age}
Gender: ${gender}
Birthday: ${birthday}
Course: ${course}
Year: ${year}
Section: ${section}
School: ${school}
Department: ${department}
Student ID: ${id}
City: ${myCity}
Phone: ${phone}
Email: ${email}
Country: ${country}
Hobby: ${hobby}
Role: ${role}
Status: ${check(status)}
Semester: ${semester}
School Year: ${sy}
Hobbies: ${allHobbies}
Skills: ${allSkills}
Uppercase: ${upperHobbies}
Selected: ${selectedHobbies}
Facebook: ${facebook}
${show(name)}
Total: ${add(age,year.length)}
`);