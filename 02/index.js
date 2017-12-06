function convertToMatrix(table) {
  return table.split('\n')
    .map(row => row.split(/\s+/)
      .map(num => parseInt(num, 10))
    )
}

function checksum01(table) {
  return convertToMatrix(table)
    .map(row => {
      let min = max = row[0]

      for (let x = 1; x < row.length; x++) {
        if (row[x] > max) {
          max = row[x]
        } else if (row[x] < min) {
          min = row[x]
        }
      }

      return max - min
    })
    .reduce((sum, diff) => sum + diff, 0)
}

function checksum02(table) {
  return convertToMatrix(table)
    .map(row => {
      let division

      const foundEvenDivisible = row.some((baseNum, idx) => {
        const evenDivisibleNum = row.slice(idx + 1)
          .find(num => {
            const module = num > baseNum ? num % baseNum : baseNum % num

            return module === 0
          })

        if (evenDivisibleNum) {
          division = evenDivisibleNum > baseNum ? evenDivisibleNum / baseNum : baseNum / evenDivisibleNum
          return true
        }

        return false
      })

      return foundEvenDivisible ? division : 0
    })
    .reduce((sum, diff) => sum + diff, 0)
}

module.exports = {
  checksum01,
  checksum02
}