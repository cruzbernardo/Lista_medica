import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, ValidationOptions, registerDecorator } from 'class-validator';


@ValidatorConstraint({ name: 'checkEspecialidade', async: false })
export class checkEspecialidadeConstraint implements ValidatorConstraintInterface {
  validate(especialidade: string[], args: ValidationArguments) {
     if(especialidade.length===2 && especialidade[0]===especialidade[1]){
         return false;
     }
     return true // for async validations you must return a Promise<boolean> here
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'Não é possivel cadastrar a mesma especialidade duas vezes';
  }  
}
export function checkEspecialidade (validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: checkEspecialidadeConstraint,
      });
    };
}