import * as core from '@actions/core'
import {spawn} from 'child_process'

const signtool = 'signtool.exe'

async function run(): Promise<void> {
  try {
    const filename = core.getInput('filename', {required: true})
    console.log(`Signing file '${filename}'...`)
    const child = spawn(signtool, ['sign', '/v', '/debug', '/fd', 'sha256', '/dlib', 'Ess.SignCore.AzSign.SignTool.Dlib.dll', filename], {
      cwd: './tools',
      stdio: 'inherit',
      windowsHide: true
    })
    child.on('exit', code => {
      if (code != 0) {
        throw `Child process exited with code ${code}`
      }
    })
  } catch (err) {
    core.setFailed(err.message)
  }
}

run()
