import { Body, Controller, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return "All properties";
    }

    @Get(":id/:slug")
    findOne(@Param("id") id: string, @Param("slug") slug: string, @Query("sort") sort: boolean) {
        return "Find one property" + id;
    }

    @Post()
    // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    create(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, groups: ['create'] })) body: CreatePropertyDto) {
        return body;
    }

    @Patch(":id")
    update(@Body(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        groups: ['update']
    })) body: CreatePropertyDto) {
        return body;
    }
}
