
        // Functions without Parameters
        function greet(){
            console.log("Hello, World")
        }
        greet()
        // Functions with Parameters
        function addNumbers(a,b){
            console.log(a+b)
        }
        addNumbers(10,30)
        // Functions with Return Statements
        function multiply(x,y){
           let result = x*y;
            return result;

        }
        console.log(multiply(10,10))
        // Combining Functions
function calculateRectangleArea(length,width){
    return multiply(length,width)
}
console.log(calculateRectangleArea(10,20))
// Default Parameters
function greetUser(name){
console.log("hello,",name)
}
greetUser()
function greetUser(name){
console.log("hello,",name)
}
greetUser("Nivedhan")
