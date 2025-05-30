import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsDefined({ message: 'barcode property mavjud bolishi shart' })
  @IsString()
  @IsNotEmpty({ message: 'barcode bosh bolmasligi kerak' })
  barcode: string;

  @ApiProperty()
  @IsDefined({ message: 'name property mavjud bolishi shart' })
  @IsString()
  @IsNotEmpty({ message: 'name bosh bolmasligi kerak' })
  name: string;

  @ApiProperty()
  @IsDefined({ message: 'branch_id property mavjud bolishi shart' })
  @IsNumber()
  @IsNotEmpty({ message: 'branch_id bosh bolmasligi kerak' })
  branch_id: number;

  @ApiProperty()
  @IsDefined({ message: 'price property mavjud bolishi shart' })
  @IsNumber()
  @IsNotEmpty({ message: 'price bosh bolmasligi kerak' })
  price: number;

  @ApiProperty()
  @IsDefined({ message: 'real_price property mavjud bolishi shart' })
  @IsNumber()
  @IsNotEmpty({ message: 'real_price bosh bolmasligi kerak' })
  real_price: number;

  @ApiProperty()
  @IsDefined({ message: 'stock property mavjud bolishi shart' })
  @IsNumber()
  @IsNotEmpty({ message: 'stock bosh bolmasligi kerak' })
  stock: number;

  @IsOptional()
  @ApiProperty()
  @IsDefined({ message: 'description property mavjud bolishi shart' })
  @IsString()
  description: string;

  @IsOptional()
  @ApiProperty({ type: [String], required: false })
  imageUrls?: string[];
}
