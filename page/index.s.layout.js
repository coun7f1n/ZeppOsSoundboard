import * as hmUI from "@zos/ui";
import { push } from "@zos/router";
import { getText } from "@zos/i18n";
import { px } from "@zos/utils";
import { log as Logger } from "@zos/utils";

export const TEXT_STYLE = {
  x: px(0),
  y: px(0),
};

export const COMMON_TITTLE_TEXT = null;
export const ALIGN_DESC_GROUP = {
  x: px(20),
  y: px(60),
  w: px(280),
  h: px(32),
};

export const SOUND_01_BUTTON_MARGIN = 0;
export const SOUND_01_BUTTON_TEXT_SIZE = px(20);
export const SOUND_01_BUTTON = {
  text: getText("sound01"),
  press_color: 0x333333,
  normal_color: 0x1a1a1a,
  x: px(0),
  y: px(0),
  w: px(120),
  h: px(40),
  color: 0x000000,
  text_size: SOUND_01_BUTTON_TEXT_SIZE,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
};

export const SOUND_02_BUTTON_MARGIN = 0;
export const SOUND_02_BUTTON_TEXT_SIZE = px(20);
export const SOUND_02_BUTTON = {
  text: getText("sound02"),
  press_color: 0x333333,
  normal_color: 0x1a1a1a,
  x: px(0),
  y: px(0),
  w: px(120),
  h: px(40),
  color: 0x000000,
  text_size: SOUND_02_BUTTON_TEXT_SIZE,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
}