import { getText } from '@zos/i18n'
import { hmApp } from '@zos/app'
import { create, id } from '@zos/media'
import * as Styles from 'zosLoader:./index.[pf].layout.js'
import hmUI from '@zos/ui'

import {
  COMMON_TITTLE_TEXT,
  ALIGN_DESC_GROUP,
  SOUND_01_BUTTON,
  SOUND_02_BUTTON,
  SOUND_01_BUTTON_MARGIN,
  SOUND_02_BUTTON_MARGIN,

} from "zosLoader:./index.[pf].layout.js";

const player = create(id.PLAYER)

Page({
  build() {
    console.log(getText('title'))
  },
  onInit() {

    player.addEventListener(player.event.PREPARE, function (ok) {
      if (ok) {
        console.log('player prepared — starting')
        player.start()
      } else {
        console.log('player prepare failed')
        player.release()
      }
    })

    player.addEventListener(player.event.COMPLETE, function () {
      console.log('playback finished — cleaning up')
      try { player.stop() } catch (e) {}
      player.release()
    })
    
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 60,
      y: 120,
      w: 120,
      h: 60,
      text: "Sound 01",
      click_func: () => {
        try {
          // path relative to /assets (where your bundled files live)
          player.setSource(player.source.FILE, { name: 'ding01' })
          player.prepare()   // will emit PREPARE -> start()
          console.log('player started')
        } catch (err) {
          console.log('player error:', err)
        }
      }
    })
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 60,
      y: 220,
      w: 120,
      h: 60,
      text: "Sound 02",
      click_func: () => {
        try {
          // path relative to /assets (where your bundled files live)
          player.setSource(player.source.FILE, { name: ding01 })
          player.prepare()   // will emit PREPARE -> start()
          console.log('player started')
        } catch (err) {
          console.log('player error:', err)
        }
      }
    })
  }
})
