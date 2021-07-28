import {
  AnemoHypostasis,
  BeneathTheDragonQueller,
  CeciliaGarden,
  ClearPoolAndMountainCavern,
  ConfrontStormterror,
  CourtOfFlowingSand,
  CryoHypostasis,
  CryoRegisvine,
  Domain,
  DomainOfGuyun,
  ElectroHypostasis,
  EnterTheGoldenHouse,
  ForsakenRift,
  GeoHypostasis,
  HiddenPalaceOfLianshanFormula,
  HiddenPalaceOfZhouFormula,
  MaguuKenki,
  MidsummerCourtyard,
  MomijiDyedCourt,
  PeakOfVindagnyr,
  PerpetualMechanicalArray,
  PrimoGeovishap,
  PyroHypostasis,
  PyroRegisvine,
  RhodeiaOfLoch,
  RidgeWatch,
  TaishanMansion,
  ValleyOfRemembrance,
  VioletCourt,
  WolfOfTheNorthChallenge,
} from "./domains";
import {
  Albedo,
  Amber,
  Ayaka,
  Barbara,
  Beidou,
  Bennett,
  Character,
  Chongyun,
  Diluc,
  Diona,
  Eula,
  Fischl,
  Ganyu,
  Jean,
  Kaeya,
  Kazuha,
  Keqing,
  Klee,
  Lisa,
  Mona,
  Ningguang,
  Noelle,
  Qiqi,
  Razor,
  Sayu,
  Sucrose,
  Tartaglia,
  Venti,
  Xiangling,
  Xiao,
  Xingqiu,
  Xinyan,
  Yanfei,
  Yoimiya,
  Zhongli,
} from "./characters";
import { registerMessage } from "../utils";

export type Region = {
  type: "Region";
  name: string;
  wiki: string;
  domains: Domain[];
  characters: Character[];
};

registerMessage({ defaultMessage: "Region" });

export const Mondstadt: Region = {
  type: "Region",
  name: registerMessage({ defaultMessage: "Mondstadt" }),
  wiki: "https://genshin-impact.fandom.com/wiki/Mondstadt",
  domains: [
    CeciliaGarden,
    MidsummerCourtyard,
    ValleyOfRemembrance,
    ForsakenRift,
    ConfrontStormterror,
    WolfOfTheNorthChallenge,
    PeakOfVindagnyr,
    AnemoHypostasis,
    CryoRegisvine,
    CryoHypostasis,
    ElectroHypostasis,
  ],
  characters: [
    Albedo,
    Amber,
    Barbara,
    Bennett,
    Diluc,
    Diona,
    Eula,
    Fischl,
    Jean,
    Kaeya,
    Klee,
    Lisa,
    Mona,
    Noelle,
    Razor,
    Sucrose,
    Venti,
  ],
};

export const Liyue: Region = {
  type: "Region",
  name: registerMessage({ defaultMessage: "Liyue" }),
  wiki: "https://genshin-impact.fandom.com/wiki/Liyue",
  domains: [
    HiddenPalaceOfLianshanFormula,
    DomainOfGuyun,
    HiddenPalaceOfZhouFormula,
    ClearPoolAndMountainCavern,
    TaishanMansion,
    EnterTheGoldenHouse,
    BeneathTheDragonQueller,
    RidgeWatch,
    PrimoGeovishap,
    GeoHypostasis,
    RhodeiaOfLoch,
    PyroRegisvine,
  ],
  characters: [Beidou, Chongyun, Ganyu, Keqing, Ningguang, Qiqi, Xiangling, Xiao, Xingqiu, Xinyan, Yanfei, Zhongli],
};

export const Inazuma: Region = {
  type: "Region",
  name: registerMessage({ defaultMessage: "Inazuma" }),
  wiki: "https://genshin-impact.fandom.com/wiki/Inazuma",
  domains: [MomijiDyedCourt, VioletCourt, CourtOfFlowingSand, MaguuKenki, PyroHypostasis, PerpetualMechanicalArray],
  characters: [Ayaka, Kazuha, Sayu, Yoimiya],
};

export const Snezhnaya: Region = {
  type: "Region",
  name: registerMessage({ defaultMessage: "Snezhnaya" }),
  wiki: "https://genshin-impact.fandom.com/wiki/Snezhnaya",
  domains: [],
  characters: [Tartaglia],
};

export const Regions = [Mondstadt, Liyue, Inazuma, Snezhnaya];
