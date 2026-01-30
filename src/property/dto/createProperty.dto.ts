import { IsInt, IsNumber, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto {
    @IsString({always: true})
    @Length(2, 10, { message: "error in length" })
    name: string;

    @IsString({always: true})
    @Length(2, 10, {groups: ['create']})
    @Length(2, 15, {groups: ['update']})
    description: string;

    @IsInt({always: true})
    @IsPositive()
    area: number;
}