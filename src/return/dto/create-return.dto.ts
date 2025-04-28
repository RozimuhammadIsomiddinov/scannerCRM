import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReturnDto {
  @ApiProperty()
  @IsDefined({ message: 'barcode property mavjud bolishi shart' })
  @IsString()
  @IsNotEmpty({ message: 'barcode bosh bolmasligi kerak' })
  item_barcode: string;

  @ApiProperty()
  @IsDefined({ message: 'quantity property mavjud bolishi shart' })
  @IsNumber()
  @IsNotEmpty({ message: 'quantity bosh bolmasligi kerak' })
  quantity: number;

  @ApiProperty()
  @IsDefined({ message: 'description property mavjud bolishi shart' })
  @IsString()
  description: string;
}
