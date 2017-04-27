var expect = require('chai').expect
import getStrength from '../lib/passwordMeter'

describe('passwordMeter', () => {
  it('should return weak by default', () => {
    expect(getStrength('')).to.be.equal('weak')
  })
})