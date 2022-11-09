import { type MonsterType, type WeaponType, type MaterialType, transformItems } from '../common/transform'
import artifactInfoJson from './artifactInfo.json?raw'
import avatarItemJson from './avatarItem.json?raw'
import materialItemJson from './materialItem.json?raw'
import monsterItemJson from './monsterItem.json?raw'
import questItemJson from './questItem.json?raw'
import { route } from './route'
import sceneItemJson from './sceneItem.json?raw'
import weaponItemJson from './weaponItem.json?raw'
import weatherItemJson from './weatherItem.json?raw'

const monsterTypeDict: Record<MonsterType, string> = {
  MONSTER_ORDINARY: 'モンスター',
  MONSTER_BOSS: 'ボス',
  MONSTER_ENV_ANIMAL: '動物',
  MONSTER_FISH: '魚',
  MONSTER_PARTNER: '友軍'
}

const questTags = ['隠す', 'テスト', '未発表']

const weatherType = ['晴天', '曇り', '雨', '雷雨', '雪', '霧']

const itemTags = ['キャラクター', '武器', '素材']

const weaponTypeDict: Record<WeaponType, string> = {
  WEAPON_SWORD_ONE_HAND: '片手剣',
  WEAPON_CLAYMORE: '両手剣',
  WEAPON_POLE: '長柄',
  WEAPON_CATALYST: '法器',
  WEAPON_BOW: '弓'
}

const materialTypeDict: Record<MaterialType, string> = {
  undefined: 'Sundry',
  FAKE_ABSORBATE: 'FAKE_ABSORBATE',
  ADSORBATE: 'ADSORBATE',
  CONSUME: '消耗品',
  TALENT: '天賦',
  AVATAR: 'キャラ',
  CHEST: '宝箱',
  NOTICE_ADD_HP: '料理',
  EXCHANGE: 'Exchange',
  WOOD: '木材',
  QUEST: 'クエスト',
  CRICKET: 'Cricket',
  WIDGET: 'ウィジェット',
  ELEM_CRYSTAL: '元素クリスタル',
  SPICE_FOOD: 'Spice Food',
  ACTIVITY_GEAR: 'ACTIVITY_GEAR',
  ACTIVITY_ROBOT: 'ACTIVITY_ROBOT',
  ACTIVITY_JIGSAW: 'ACTIVITY_JIGSAW',
  FOOD: '食品',
  EXP_FRUIT: '経験',
  WEAPON_EXP_STONE: '鉱石',
  AVATAR_MATERIAL: 'キャラ突破素材',
  RELIQUARY_MATERIAL: '聖遺物の素材',
  CONSUME_BATCH_USE: '樹脂',
  FISH_BAIT: '魚の餌',
  CHEST_BATCH_USE: 'CHEST_BATCH_USE',
  SELECTABLE_CHEST: '選択可能な宝箱',
  HOME_SEED: '種子',
  FLYCLOAK: 'FLYCLOAK',
  BGM: 'BGM',
  SEA_LAMP: 'SEA_LAMP',
  CHANNELLER_SLAB_BUFF: 'CHANNELLER_SLAB_BUFF',
  FISH_ROD: '釣り竿',
  NAMECARD: '名刺',
  ARANARA: 'ARANARA',
  DESHRET_MANUAL: 'DESHRET_MANUAL',
  FIREWORKS: '花火',
  COSTUME: '衣料品',
  FURNITURE_SUITE_FORMULA: 'オーナメントセット',
  FURNITURE_FORMULA: '装飾品'
}

const items = transformItems({
  artifactInfoJson,
  monsterItemJson,
  monsterTypeDict,
  questItemJson,
  questTags,
  sceneItemJson,
  weatherItemJson,
  weatherType,
  itemTags,
  avatarItemJson,
  weaponItemJson,
  weaponTypeDict,
  materialItemJson,
  materialTypeDict
})

const message: Message = { route, ...items }

export default message
