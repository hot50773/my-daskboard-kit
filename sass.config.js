var sass = require('node-sass')
var fs = require('fs')
var path = require('path')

// 絕對路徑
const plugins = path.resolve(__dirname, 'node_modules/')

const myScss = path.resolve(__dirname, 'src/scss/', 'base.scss')
const myCss = path.resolve(__dirname, 'dist/css/', 'base.css')

const themeSrc = path.resolve(__dirname, 'src/scss/', 'theme.scss')
const themeDist = path.resolve(__dirname, 'dist/css/', 'theme.css')

sass.render(
  {
    file: myScss,
    outFile: myCss, // 告訴 sourceMap 你的 css 檔案輸出路徑，注意：此選項不會自動生成 output 的 css 檔
    // outputStyle: 'compressed',
    includePaths: [plugins],
    sourceMap: true // or an absolute or relative (to outFile) path
  },
  function (error, result) {
    if (error) {
      console.error(error)

      return
    }

    const buffer = result.css

    // write this result on the disk
    fs.writeFile(myCss, buffer, function (err) {
      if (err) {
        console.error(err)
      } else {
        console.log('success')
      }
    })
  }
)

sass.render(
  {
    file: themeSrc,
    outFile: themeDist, // 告訴 sourceMap 你的 css 檔案輸出路徑，注意：此選項不會自動生成 output 的 css 檔
    // outputStyle: 'compressed',
    includePaths: [plugins],
    sourceMap: true // or an absolute or relative (to outFile) path
  },
  function (error, result) {
    if (error) {
      console.error(error)

      return
    }

    const buffer = result.css

    // write this result on the disk
    fs.writeFile(themeDist, buffer, function (err) {
      if (err) {
        console.error(err)
      } else {
        console.log('success')
      }
    })
  }
)