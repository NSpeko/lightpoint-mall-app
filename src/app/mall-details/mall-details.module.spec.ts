import { MallDetailsModule } from './mall-details.module';

describe('MallDetailsModule', () => {
  let mallDetailsModule: MallDetailsModule;

  beforeEach(() => {
    mallDetailsModule = new MallDetailsModule();
  });

  it('should create an instance', () => {
    expect(mallDetailsModule).toBeTruthy();
  });
});
