# Object Validation Proxy
Task description
Your task is to implement a function which adds type validation to an object.

Requirements
Your function should receive an object as its only argument and return an object with the same properties, but with type validation added. Types should be validated when:

the function creates the object;
someone updates a property;
someone adds a property.
The type validation should always be based on the last part of the property name. For example, the age_int property should always be an integer and throw an error when set to something else.

Here are possible types:

string: for example, "string type"
int: 12.00 and 12 are both integers
float: for example, 12.34
number: any int or float
bool: for example, true
Assumptions
Types are optional and validation should be skipped if the type isn't specified.
_ always precedes the type name.
Hints
JavaScript Proxy might be useful.
Your solution will be evaluated based on its correctness; performance and coding style will not be assessed.
Do not edit the default export.
Available tools/packages
You can use:

JavaScript Node 14 / ES2020
Examples
Your function (typeCheck here) should behave as shown below:

const obj = {
    age_int: 2,
    name_string: "Adam",
    job: null,
}
const validatingObject = typeCheck(obj)
validatingObject.age_int = 2.25 // Throws error
validatingObject.age_int = 2
validatingObject.job = "fireman"
validatingObject.address_string = 20 // Throws error

const obj_2 = {
    employed_bool: "true",
}
const validatingObject = typeCheck(obj_2) // Throws error
