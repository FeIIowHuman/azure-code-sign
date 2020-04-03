/* eslint-disable no-console */
import * as core from '@actions/core'
import * as path from 'path'
import {spawn} from 'child_process'

const signtool = 'signtool.exe'

async function run(): Promise<void> {
  try {
    const filename = core.getInput('filename', {required: true})
    console.log(`Signing file '${filename}'...`)
    const toolsPath = path.join(__dirname, '..', 'tools')
    const child = spawn(
      signtool,
      [
        'sign',
        '/v',
        '/debug',
        '/fd',
        'sha256',
        '/dlib',
        'Ess.SignCore.AzSign.SignTool.Dlib.dll',
        filename
      ],
      {
        cwd: toolsPath,
        stdio: 'inherit',
        windowsHide: true
      }
    )
    child.on('exit', code => {
      if (code !== 0) {
        throw new Error(`Child process exited with code ${code}`)
      }
    })
  } catch (err) {
    core.setFailed(err.message)
  }
}

run()
