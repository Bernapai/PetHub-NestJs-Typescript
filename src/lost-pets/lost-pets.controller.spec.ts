import { Test, TestingModule } from '@nestjs/testing';
import { LostPetsController } from './lost-pets.controller';

describe('LostPetsController', () => {
  let controller: LostPetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LostPetsController],
    }).compile();

    controller = module.get<LostPetsController>(LostPetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
