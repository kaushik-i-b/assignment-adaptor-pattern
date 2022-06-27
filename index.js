function typeCheck(object) {
    // Use console.log() for debugging
    console.log(object,"this is the object")

    console.log(object.length,"this is the object length")

    const handler = {

        set(object, prop, value) {

            if (prop.includes("_string")) {
                if (typeof (value) === "string") {
                    console.log(prop + ": " + value, "string-valid");
                    object[prop] = value;
                    return Reflect.set(object, prop, value);
                }
                object[prop] = "";
                throw new Error('error');
            }


            if(prop.includes("_bool")){
                if(typeof(value) === "string"){
                    console.log(prop +": "+value ,"bool-invalid")
                    Reflect.set(object, prop, "");
                    throw new Error('error');
                }
                if(typeof(value) === "boolean"){
                    console.log(prop +": "+value ,"bool-valid")
                    return Reflect.set(object, prop, value);
                }
                object[prop] = "";
                throw new Error('error');
            }

            if(prop.includes("_number") ){
                if(typeof(value) === "number"){
                    console.log(prop +": "+value ,"number-valid");
                    return Reflect.set(object, prop, value);
                }
                object[prop] = "";
                console.log(prop +": "+value ,"number-invalid");
                throw new Error('error');
            }

            if(prop.includes("_int")){
                if(typeof value !== "number"){
                    console.log(prop +": "+value ,"int-invalid");
                    throw new Error('error');
                }

                if( Math.floor(value) === value){
                    console.log(prop +": "+value ,"int-valid");
                    return Reflect.set(object, prop, value);
                }
                object[prop] = "";
                console.log(prop +": "+value ,"int-invalid");
                throw new Error('error');
            }


            if(prop.includes("_float") ){
                //  console.log(prop +": "+value ,"value")
                if(typeof value === "number"){

                    if(Math.floor(value) !== value){

                        return Reflect.set(object, prop, value);
                    }
                    object[prop] = "";
                    throw  Error('error');
                }
                object[prop] = "";
                console.log(prop +": "+value ,"float-invalid");
                throw  Error('error');
            }

            return Reflect.set(object, prop, value);
        }
    }
    if(!object){
        throw new Error();
    }

    if(object.length !== 1){

        for (const [prop, value] of Object.entries(object)) {
            if(prop.includes("_int")){
                if(typeof value !== "number"){
                    console.log(prop +": "+value ,"int-invalid");
                    throw new Error('error');
                }

                if( Math.floor(value) !== value){
                    console.log(prop +": "+value ,"int-invalid");
                    throw new Error('error');
                }

            }

            if(prop.includes("_float")){
                //  console.log(prop +": "+value ,"value")
                if(typeof value === "number"){

                    if(Math.floor(value) === value){
                        throw  Error('error');
                    }

                }else{
                    throw new Error('error');
                }

            }
            if (prop.includes("_string")) {
                if (typeof (value) !== "string") {

                    throw Error();
                }


            }


            if(prop.includes("_bool")){
                if(typeof(value) === "string"){

                    throw new Error('error');
                }
                if(typeof(value) !== "boolean"){

                    throw new Error('error');
                }


            }

            if(prop.includes("_number") ){
                if(typeof(value) !== "number"){

                    throw new Error('error');
                }


            }

        }

    }
    return new Proxy(object,handler);


}


// const obj = { age_float: 2.0, phoneNumber: '200 600 200', isAdult_bool: true }
// const validatingObject = typeCheck(obj)
// validatingObject.rt_string = "asd";
// console.log(validatingObject);

