import { registerDecorator } from "class-validator";

export function ExistClient() {
    return (dto: object, propertyName: string) =>
        registerDecorator({
            target: dto.constructor,
            propertyName: propertyName,
            validator: {
                validate: (value: string) => value && ['abc', 'xyz', 'qwe'].includes(value),
                defaultMessage: () => 'Client not found!'
            }
        })

}