const generateUniqueId = require('../../src/util/generateUniqueId');

describe('Generate Unique Id', () => {
  it('shoul generate an unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  })
})