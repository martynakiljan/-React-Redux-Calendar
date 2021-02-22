    import FunctionValidation from '../validation/validation'
    

    export default function  validateForm({firstName, lastName, email, date, time }) {
        const errors = [];
  
        const Validation = new FunctionValidation()


        if(!Validation.isDateCorrect(date)) {
            errors.push('correct the entered date');
        }
    
        if(!Validation.isTimeCorrect(time)) {
            errors.push('correct the entered date')
        }
    
        if(!Validation.isFirstNameCorrect(firstName)) {
            errors.push('enter your first name');
        }
    
        if(!Validation.isLastNameCorrect(lastName)) {
            errors.push('enter your last name')
        }
    
        if(!Validation.isEmailCorrect(email)) {
            errors.push(' Enter Email');
        }
    
    
        return errors;
    }
    
    
