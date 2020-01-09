import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export default class FindOperaDto {
  @Type(() => Number)
  @IsInt()
  readonly pageSize: number;

  @Type(() => Number)
  @IsInt()
  readonly pageIndex: number;
}