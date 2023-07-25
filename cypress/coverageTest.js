/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
const { exec } = require('child_process')
const { readFileSync } = require('fs')
const path = require('path')

const getPackageJSON = () => {
  console.log('🚀 ~ file: coverageTest.js:10 ~ getPackageJSON ~ __dirname:', __dirname)

  const packageJSONPath = path.join(__dirname, '../package.json')
  const packageJsonFile = readFileSync(packageJSONPath)
  const data = JSON.parse(packageJsonFile)

  return data
}

const getCoverageReportValue = () =>
  new Promise((res, rej) => {
    console.log('🚀 ~ file: coverageTest.js:20 ~ getCoverageReportValue ~ __dirname:', __dirname)

    exec('pwd', (err, stdout, stderr) => {
      console.log('🚀 ~ file: coverageTest.js:24 ~ exec ~ stdout:', stdout)
    })

    exec('ls -la', (err, stdout, stderr) => {
      console.log('🚀 ~ file: coverageTest.js:26 ~ exec ~ stdout:', stdout)
    })

    exec('cd ../ && npx nyc report --reporter=text-summary', (err, stdout, stderr) => {
      if (err) {
        rej(stderr || err)
      }

      try {
        const summaryRegexp = /\d{2}.\d{1}/
        const coverageReportValueString = stdout.match(summaryRegexp)?.[0]
        const coverageValueNumber = parseFloat(coverageReportValueString)

        if (!coverageValueNumber) {
          console.error('coverageValueNumber was parsed incorrectly')
          process.exit(1)
        }

        res(coverageValueNumber)
      } catch (e) {
        rej(e)
      }
    })
  })

;(async () => {
  const data = getPackageJSON()
  const minCoverageValue = data.coverage.min

  console.log('🚀 required coverage', minCoverageValue)

  if (!minCoverageValue) {
    console.error('minCoverageValue from package.json was parsed incorrectly')
    process.exit(1)
  }

  const valueReportValue = await getCoverageReportValue()

  console.log('🚀 coverage report value', valueReportValue)

  if (valueReportValue < minCoverageValue) {
    console.error('Project test coverage less then required')
    process.exit(1)
  }

  console.log('Coverage is good')
})()

process.on('exit', (code) => console.error(`exiting the code ${code}`))
