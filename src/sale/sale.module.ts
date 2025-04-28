import { Module } from '@nestjs/common';
import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';
import { ProductRepo } from 'src/product/product.repository';
import { SaleRepo } from './sale.repository';

@Module({
  controllers: [SaleController],
  providers: [SaleService, SaleRepo, ProductRepo],
})
export class SaleModule {}
