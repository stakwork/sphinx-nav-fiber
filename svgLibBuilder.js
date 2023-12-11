/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const fs = require('fs').promises
const path = require('path')
const prettier = require('prettier')
const parser = require('prettier/parser-babel')

const inputDirectory = './public/svg-icons'
const outputDirectory = './src/components/Icons'

function removeMaskTypeAlpha(svgContent) {
  return svgContent.replace(/style="[^"]*mask-type:alpha[^"]*"/g, '')
}

async function processFiles() {
  try {
    try {
      await fs.access(outputDirectory)
    } catch (error) {
      await fs.mkdir(outputDirectory)
    }

    const files = await fs.readdir(inputDirectory)

    for (const file of files) {
      if (path.extname(file) === '.svg') {
        const componentName = path.basename(file, '.svg')
        const svgContent = await fs.readFile(path.join(inputDirectory, file), 'utf-8')

        const cleanSvg = removeMaskTypeAlpha(svgContent)
        const modifiedSVG = cleanSvg.replace(/width="\d+(\.\d+)?" height="\d+(\.\d+)?" /g, 'width="1em" height="1em" ')
        const finalSVG = modifiedSVG.replace(/fill="[^"]*"/g, 'fill="currentColor"')

        const componentCode = `
          /* eslint-disable */
          import React from 'react';

          const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
            ${finalSVG}
          );

          export default ${componentName};
        `

        const formattedComponentCode = await prettier.format(componentCode, {
          parser: 'babel-ts',
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          plugins: [parser],
        })

        await fs.writeFile(path.join(outputDirectory, `${componentName}.tsx`), formattedComponentCode)

        console.log(`Converted ${file} to ${componentName}.tsx`)
      }
    }
  } catch (error) {
    console.error('Error processing SVG files:', error)
  }
}

processFiles()
