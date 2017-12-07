const { assert } = require('chai'),
  chalk = require('chalk'),
  fs = require('fs')

const calculateSteps = require('./')

const myMemLocation = 265149

describe('Day 3', () => {
  describe('Part 1', () => {
    it('Sample 01', () => {
      assert.strictEqual(calculateSteps(1), 0)
    })

    it('Sample 02', () => {
      assert.strictEqual(calculateSteps(12), 3)
    })

    it('Sample 03', () => {
      assert.strictEqual(calculateSteps(23), 2)
    }),

    it('Sample 04', () => {
      assert.strictEqual(calculateSteps(1024), 31)
    })

    it('Sample 05', () => {
      const result = calculateSteps(265149)

      console.log(`Steps to access from my memory location: ${chalk.blue(result)}`)

      assert.strictEqual(result, 438)
    })
  })
})