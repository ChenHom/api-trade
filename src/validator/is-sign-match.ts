const md5 = require('md5')
import { registerDecorator } from "class-validator"

export function IsSignMatch() {
    return (dto: object, propertyName: string) => {
        registerDecorator({
            target: dto.constructor,
            propertyName: propertyName,
            validator: {
                validate: (value: string, validationArgs) => {
                    const dto = { key: 'abc123', ...validationArgs.object }
                    const sorted = Object.keys(dto)
                        .filter(v => v !== 'signature')
                        .sort()
                        .reduce((prev, value) => `${prev}${value}=${dto[value]}&`, '')
                        .slice(0, -1)

                    return dto['signature'] === md5(sorted)
                },
                defaultMessage: () => 'Not match signature!'
            }
        })
    }
}