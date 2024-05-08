module.exports = {
    validatebody: (schema) => {
        return (req, res, next) => {
            let result = schema.validate(req.body);
            // console.log("this is validate body")
            if(result.error) {
                next(new Error(result.error.details[0].message))
            }else{
                next();
            }
        }
    }
}