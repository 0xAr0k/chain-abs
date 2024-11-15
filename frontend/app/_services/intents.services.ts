// temporary
// @TODO: Check back this method and finese it

const createIntentsServices = <T>(services: T): T => ({
  ...services,
});

export const intentsServices = createIntentsServices({});
