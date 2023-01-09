import { PaymentMethodEnum } from '@enums/payment.method.enums';
import { IsHash, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ExistClient } from 'src/validator/exist-client';
import { IsSignMatch } from 'src/validator/is-sign-match';

export class PaymentDTO {
    @IsString()
    @IsNotEmpty()
    @ExistClient()
    client: string;

    @IsNumber()
    amount: number;

    @IsIn([PaymentMethodEnum.ATM, PaymentMethodEnum.CVS])
    method: string;

    @IsString()
    @IsNotEmpty()
    @IsHash('md5')
    @IsSignMatch()
    signature: string
}