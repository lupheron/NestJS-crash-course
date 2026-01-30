import { IsInt, IsPositive } from 'class-validator';

export class IdParamDto {
  @IsInt({ always: true })
  @IsPositive()
  id: number;
}
