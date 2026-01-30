import { Body, Controller, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema } from './dto/createProperty.Zod';
import type { CreatePropertyZodDto } from './dto/createProperty.Zod';

@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return "All properties";
    }

    @Get(":id/:slug")
    findOne(@Param("id") id: string, @Query("sort") sort: boolean) {
        return "Find one property" + id;
    }

    @Post()
    // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    @UsePipes(new ZodValidationPipe(createPropertySchema))
    create(
        @Body()
        body: CreatePropertyZodDto
    ) {
        return body;
    }

    @Patch(":id")
    update(
        @Param('id', ParseIdPipe) id,
        @Body() body: CreatePropertyDto
    ) {
        return body;
    }
}
