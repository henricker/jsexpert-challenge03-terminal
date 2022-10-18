import { describe, it, before } from 'mocha';
import { expect } from 'chai';
import { incomeRepositoryMock, mocks } from '../mocks/incomeRepository.mock.js';

describe('IncomeRepository Suite Tests', () => {
  let repository = {};

  before(() => {
    repository = incomeRepositoryMock;
  });

  it('should return the correct list of conversions when getConversions is called', async () => {
    const expected = mocks.convertResponse.results;
    const result = await repository.getConversions();

    expect(result).to.be.deep.equal(expected);
  });
});
