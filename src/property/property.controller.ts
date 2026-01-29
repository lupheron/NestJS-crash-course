import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return "All properties";
    }

    @Get(":id/:slug")
    findOne(@Param("id") id: string, @Param("slug") slug: string) {
        return "Find one property" + id;
    }

    @Post() 
    create() {
        return "This will create a property"
    }
}
