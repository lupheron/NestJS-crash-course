import { IsNumber, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto {
    @IsString()
    @Length(2, 10, { message: "error in length" })
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    @IsPositive()
    area: number;
}