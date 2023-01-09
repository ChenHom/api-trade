import { Body, Controller, Post } from '@nestjs/common';
import { PaymentDTO } from './payment.dto';

@Controller('payment')
export class PaymentController {
    @Post('charge')
    charge(@Body() request: PaymentDTO) {
        return request
    }
}
