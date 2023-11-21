import {Controller, Get} from '@nestjs/common';
import {CategoryRepository} from "./category.repository";

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  @Get()
  async findAll() {
    return this.categoryRepository.findAll()
  }
}
