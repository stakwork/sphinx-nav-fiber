const fs = require('fs')
const path = require('path')
const prettier = require('prettier')
const parser = require('prettier/parser-babel')

const inputDirectory = './public/svg-icons'
const outputDirectory = './src/components/Icons'

function removeMaskTypeAlpha(svgContent) {
  return svgContent.replace(/style="[^"]*mask-type:alpha[^"]*"/g, '')
}

fs.readdir(inputDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err)

    return
  }

  // Create the output directory if it doesn't exist
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory)
  }

  // Loop through each SVG file and convert it to a TypeScript React component
  files.forEach((file) => {
    if (path.extname(file) === '.svg') {
      const componentName = `${path.basename(file, '.svg')}`
      const svgContent = fs.readFileSync(path.join(inputDirectory, file), 'utf-8')

      const cleanSvg = removeMaskTypeAlpha(svgContent)
      // Replace width and height attributes with "1rem"
      const modifiedSVG = cleanSvg.replace(/width="\d+(\.\d+)?" height="\d+(\.\d+)?" /g, 'width="1em" height="1em" ')

      // Replace fill attributes with "currentColor"
      const finalSVG = modifiedSVG.replace(/fill="[^"]*"/g, 'fill="currentColor"')

      // Generate the TypeScript React component file (.tsx)
      const componentCode = `
      /* eslint-disable */
      import React from 'react';

      const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
        ${finalSVG}
      );

      export default ${componentName};
    `

      // Use Prettier to format the TypeScript component code
      const formattedComponentCode = prettier.format(componentCode, {
        parser: 'babel-ts',
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        plugins: [parser],
      })

      // Write the TypeScript component to the output directory with a .tsx extension
      fs.writeFileSync(path.join(outputDirectory, `${componentName}.tsx`), formattedComponentCode)

      console.log(`Converted ${file} to ${componentName}.tsx`)
    }
  })
})

// ...
