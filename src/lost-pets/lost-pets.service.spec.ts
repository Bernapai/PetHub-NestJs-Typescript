import { Test, TestingModule } from '@nestjs/testing';
import { LostPetsService } from './lost-pets.service';

describe('LostPetsService', () => {
  let service: LostPetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LostPetsService],
    }).compile();

    service = module.get<LostPetsService>(LostPetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
