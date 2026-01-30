import { Body, Controller, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';

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
    create(@Body() body: CreatePropertyDto) {
        return body;
    }

    @Patch(":id")
    update(
        @Param() params: IdParamDto,
        @Body() body: CreatePropertyDto
    ) {
        return body;
    }
}
