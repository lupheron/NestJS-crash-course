import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
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
    create(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) body: CreatePropertyDto) {
        return body;
    }
}
