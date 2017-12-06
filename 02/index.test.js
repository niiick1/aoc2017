const { assert } = require('chai'),
  chalk = require('chalk'),
  fs = require('fs')

const { checksum01, checksum02 } = require('./')

describe('Day 2', () => {
  describe('Part 1', () => {
    it('Sample 01', () => {
      let table = fs.readFileSync(`${__dirname}/samples/sample01.txt`, 'utf-8')

      assert.strictEqual(checksum01(table), 18)
    })

    it('My Spreadsheet', () => {
      let table = fs.readFileSync(`${__dirname}/samples/mySpreadsheet.txt`, 'utf-8'),
        result = checksum01(table)

      console.log(`Checksum for my spreadsheet is ${chalk.blue(result)}`)

      assert.strictEqual(result, 51833)
    })
  })

  describe('Part 2', () => {
    it('Sample 01', () => {
      let table = fs.readFileSync(`${__dirname}/samples/sample02.txt`, 'utf-8')

      assert.strictEqual(checksum02(table), 9)
    })

    it('My Spreadsheet', () => {
      let table = fs.readFileSync(`${__dirname}/samples/mySpreadsheet.txt`, 'utf-8'),
        result = checksum02(table)

      console.log(`Checksum for my spreadsheet is ${chalk.blue(result)}`)

      assert.strictEqual(result, 288)
    })
  })
})