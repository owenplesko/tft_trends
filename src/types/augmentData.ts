// using black magic from https://stackoverflow.com/questions/73825273/creating-a-zod-enum-from-an-object

import { z } from "zod";

const augmentDataArr = [
  {
    apiName: "TFT9_Augment_SettTheBoss",
    icon: "/augment/TFT9_Augment_SettTheBoss.png",
    name: "The Boss",
  },
  {
    apiName: "TFT9_Augment_AirspeedVelocity3",
    icon: "/augment/TFT9_Augment_AirspeedVelocity3.png",
    name: "Unburdened III",
  },
  {
    apiName: "TFT9_Augment_VanquisherTrait",
    icon: "/augment/TFT9_Augment_VanquisherTrait.png",
    name: "Vanquisher Heart",
  },
  {
    apiName: "TFT9_Augment_ProtectorEmblem2",
    icon: "/augment/TFT9_Augment_ProtectorEmblem2.png",
    name: "Protector Crown",
  },
  {
    apiName: "TFT9_Augment_IxtalTrait2",
    icon: "/augment/TFT9_Augment_IxtalTrait2.png",
    name: "Ixtal Soul",
  },
  {
    apiName: "TFT9_Augment_Executioner",
    icon: "/augment/TFT9_Augment_Executioner.png",
    name: "Executioner I",
  },
  {
    apiName: "TFT9_Augment_BastionEmblem2",
    icon: "/augment/TFT9_Augment_BastionEmblem2.png",
    name: "Bastion Crown",
  },
  {
    apiName: "TFT9_Augment_GadgeteenSpirit",
    icon: "/augment/TFT9_Augment_GadgeteenSpirit.png",
    name: "Gadgeteen Spirit",
  },
  {
    apiName: "TFT9_Augment_StationarySupport1HR",
    icon: "/augment/TFT9_Augment_StationarySupport1HR.png",
    name: "Stationary Support I",
  },
  {
    apiName: "TFT9_Augment_IoniaTrait",
    icon: "/augment/TFT9_Augment_IoniaTrait.png",
    name: "Ionia Heart",
  },
  {
    apiName: "TFT9_Augment_MarksmanEmblem2",
    icon: "/augment/TFT9_Augment_MarksmanEmblem2.png",
    name: "Gunner Crown",
  },
  {
    apiName: "TFT9_Augment_CosmicWisdom",
    icon: "/augment/TFT9_Augment_CosmicWisdom.png",
    name: "Cosmic Wisdom I",
  },
  {
    apiName: "TFT9_Augment_NoxusEmblem2",
    icon: "/augment/TFT9_Augment_NoxusEmblem2.png",
    name: "Noxus Crown",
  },
  {
    apiName: "TFT9_Augment_Commander_Coinpurse2plus",
    icon: "/augment/TFT9_Augment_Commander_Coinpurse2plus.png",
    name: "Coinpurse II +",
  },
  {
    apiName: "TFT9_Augment_ZaunChemicallyEnhancedBulk",
    icon: "/augment/TFT9_Augment_ZaunChemicallyEnhancedBulk.png",
    name: "Chemtech Enhancements",
  },
  {
    apiName: "TFT9_Augment_Commander_NutsAndBolts2",
    icon: "/augment/TFT9_Augment_Commander_NutsAndBolts2.png",
    name: "Nuts and Bolts II",
  },
  {
    apiName: "TFT9_Augment_DeadeyeEmblem",
    icon: "/augment/TFT9_Augment_DeadeyeEmblem.png",
    name: "Deadeye Crest",
  },
  {
    apiName: "TFT9_Augment_Commander_NutsAndBolts3",
    icon: "/augment/TFT9_Augment_Commander_NutsAndBolts3.png",
    name: "Nuts and Bolts III",
  },
  {
    apiName: "TFT9_Augment_Commander_Experience3Plus",
    icon: "/augment/TFT9_Augment_Commander_Experience3Plus.png",
    name: "Knowledge Download III+",
  },
  {
    apiName: "TFT9_Augment_InvokerLovingInvocation",
    icon: "/augment/TFT9_Augment_InvokerLovingInvocation.png",
    name: "Loving Invocation",
  },
  {
    apiName: "TFT9_Augment_Commander_NutsAndBolts1",
    icon: "/augment/TFT9_Augment_Commander_NutsAndBolts1.png",
    name: "Nuts and Bolts I",
  },
  {
    apiName: "TFT9_Augment_ChallengerTrait",
    icon: "/augment/TFT9_Augment_ChallengerTrait.png",
    name: "Challenger Heart",
  },
  {
    apiName: "TFT9_Augment_ArmorcladTrait",
    icon: "/augment/TFT9_Augment_ArmorcladTrait.png",
    name: "Juggernaut Heart",
  },
  {
    apiName: "TFT9_Augment_MagicalJourneyPlusPlus",
    icon: "/augment/TFT9_Augment_MagicalJourneyPlusPlus.png",
    name: "Magical Journey++",
  },
  {
    apiName: "TFT9_Augment_DoubleEquipment",
    icon: "/augment/TFT9_Augment_DoubleEquipment.png",
    name: "Double Equipment",
  },
  {
    apiName: "TFT9_Augment_GuildOfThieves",
    icon: "/augment/TFT9_Augment_GuildOfThieves.png",
    name: "Guild of Thieves",
  },
  {
    apiName: "TFT9_Augment_LearningFromExperience1",
    icon: "/augment/TFT9_Augment_LearningFromExperience1.png",
    name: "Patient Study I",
  },
  {
    apiName: "TFT9_Augment_VanquisherEmblem2",
    icon: "/augment/TFT9_Augment_VanquisherEmblem2.png",
    name: "Vanquisher Crown",
  },
  {
    apiName: "TFT9_Augment_MediumEndShopping",
    icon: "/augment/TFT9_Augment_MediumEndShopping.png",
    name: "High-End Shopping I",
  },
  {
    apiName: "TFT9_Augment_LearningFromExperience3",
    icon: "/augment/TFT9_Augment_LearningFromExperience3.png",
    name: "Patient Study III",
  },
  {
    apiName: "TFT9_Augment_StrategistTacticalSuperiority",
    icon: "/augment/TFT9_Augment_StrategistTacticalSuperiority.png",
    name: "Tactical Superiority",
  },
  {
    apiName: "TFT9_Augment_SorcererEmblem2",
    icon: "/augment/TFT9_Augment_SorcererEmblem2.png",
    name: "Sorcerer Crown",
  },
  {
    apiName: "TFT9_Augment_PumpingUpHR",
    icon: "/augment/TFT9_Augment_PumpingUpHR.png",
    name: "Pumping Up I",
  },
  {
    apiName: "TFT9_Augment_Commander_Coinpurse1plus",
    icon: "/augment/TFT9_Augment_Commander_Coinpurse1plus.png",
    name: "Coinpurse I +",
  },
  {
    apiName: "TFT9_Augment_IxtalRejuvenatingFlames",
    icon: "/augment/TFT9_Augment_IxtalRejuvenatingFlames.png",
    name: "Rejuvenating Flames",
  },
  {
    apiName: "TFT9_Augment_FreljordEmblem",
    icon: "/augment/TFT9_Augment_FreljordEmblem.png",
    name: "Freljord Crest",
  },
  {
    apiName: "TFT9_Augment_SlayerTrait",
    icon: "/augment/TFT9_Augment_SlayerTrait.png",
    name: "Slayer Heart",
  },
  {
    apiName: "TFT9_Augment_PiltoverTrait",
    icon: "/augment/TFT9_Augment_PiltoverTrait.png",
    name: "Piltover Heart",
  },
  {
    apiName: "TFT9_Augment_ThinkInsideTheBox",
    icon: "/augment/TFT9_Augment_ThinkInsideTheBox.png",
    name: "Think Inside The Box I",
  },
  {
    apiName: "TFT9_Augment_VoidRapidIncubation",
    icon: "/augment/TFT9_Augment_VoidRapidIncubation.png",
    name: "Stable Evolution",
  },
  {
    apiName: "TFT9_Augment_JayceCarry",
    icon: "/augment/TFT9_Augment_JayceCarry.png",
    name: "Mercury Cannon: Overdrive",
  },
  {
    apiName: "TFT9_Augment_VoidTrait",
    icon: "/augment/TFT9_Augment_VoidTrait.png",
    name: "Void Heart",
  },
  {
    apiName: "TFT9_Augment_ShadowIslesTrait2",
    icon: "/augment/TFT9_Augment_ShadowIslesTrait2.png",
    name: "Shadow Isles Soul",
  },
  {
    apiName: "TFT9_Augment_ShadowIslesHauntedShell",
    icon: "/augment/TFT9_Augment_ShadowIslesHauntedShell.png",
    name: "Haunted Shell",
  },
  {
    apiName: "TFT9_Augment_MarksmanEmblem",
    icon: "/augment/TFT9_Augment_MarksmanEmblem.png",
    name: "Gunner Crest",
  },
  {
    apiName: "TFT9_Augment_MagicalJourney",
    icon: "/augment/TFT9_Augment_MagicalJourney.png",
    name: "Magical Journey",
  },
  {
    apiName: "TFT9_Augment_Superstars",
    icon: "/augment/TFT9_Augment_Superstars.png",
    name: "Superstars",
  },
  {
    apiName: "TFT9_Augment_GunnerSpiritOfTheDuelist",
    icon: "/augment/TFT9_Augment_GunnerSpiritOfTheDuelist.png",
    name: "Dueling Gunners",
  },
  {
    apiName: "TFT9_Augment_Commander_Amplify3",
    icon: "/augment/TFT9_Augment_Commander_Amplify3.png",
    name: "Amplify III",
  },
  {
    apiName: "TFT9_Augment_Commander_Amplify2",
    icon: "/augment/TFT9_Augment_Commander_Amplify2.png",
    name: "Amplify II",
  },
  {
    apiName: "TFT9_Augment_ThinkInsideTheBox2",
    icon: "/augment/TFT9_Augment_ThinkInsideTheBox2.png",
    name: "Think Inside The Box II",
  },
  {
    apiName: "TFT9_Augment_Commander_Amplify1",
    icon: "/augment/TFT9_Augment_Commander_Amplify1.png",
    name: "Amplify I",
  },
  {
    apiName: "TFT9_Augment_ThinkInsideTheBox3",
    icon: "/augment/TFT9_Augment_ThinkInsideTheBox3.png",
    name: "Think Inside The Box III",
  },
  {
    apiName: "TFT9_Augment_BilgewaterRisingInfamy",
    icon: "/augment/TFT9_Augment_BilgewaterRisingInfamy.png",
    name: "Rising Infamy",
  },
  {
    apiName: "TFT9_Augment_MarksmanTrait",
    icon: "/augment/TFT9_Augment_MarksmanTrait.png",
    name: "Gunner Heart",
  },
  {
    apiName: "TFT9_Augment_PiltoverTrait2",
    icon: "/augment/TFT9_Augment_PiltoverTrait2.png",
    name: "Piltover Soul",
  },
  {
    apiName: "TFT9_Augment_SlayerEmblem2",
    icon: "/augment/TFT9_Augment_SlayerEmblem2.png",
    name: "Slayer Crown",
  },
  {
    apiName: "TFT9_Augment_BilgewaterEmblem",
    icon: "/augment/TFT9_Augment_BilgewaterEmblem.png",
    name: "Bilgewater Crest",
  },
  {
    apiName: "TFT9_Augment_StrategistTrait2",
    icon: "/augment/TFT9_Augment_StrategistTrait2.png",
    name: "Strategist Soul",
  },
  {
    apiName: "TFT9_Augment_MulticasterTrait",
    icon: "/augment/TFT9_Augment_MulticasterTrait.png",
    name: "Multicaster Heart",
  },
  {
    apiName: "TFT9_Augment_ProtectorEmblem",
    icon: "/augment/TFT9_Augment_ProtectorEmblem.png",
    name: "Protector Crest",
  },
  {
    apiName: "TFT9_Augment_YordleTrait2",
    icon: "/augment/TFT9_Augment_YordleTrait2.png",
    name: "Yordle Soul",
  },
  {
    apiName: "TFT9_Augment_YordleUnstableYordlePortal",
    icon: "/augment/TFT9_Augment_YordleUnstableYordlePortal.png",
    name: "Unstable Yordle Delivery",
  },
  {
    apiName: "TFT9_Augment_BastionEmblem",
    icon: "/augment/TFT9_Augment_BastionEmblem.png",
    name: "Bastion Crest",
  },
  {
    apiName: "TFT9_Augment_WarwickCarry",
    icon: "/augment/TFT9_Augment_WarwickCarry.png",
    name: "Ravenous Hunter",
  },
  {
    apiName: "TFT9_Augment_YordleTrait",
    icon: "/augment/TFT9_Augment_YordleTrait.png",
    name: "Yordle Heart",
  },
  {
    apiName: "TFT9_Augment_IxtalEmblem",
    icon: "/augment/TFT9_Augment_IxtalEmblem.png",
    name: "Ixtal Crest",
  },
  {
    apiName: "TFT9_Augment_Legend_OnARoll",
    icon: "/augment/TFT9_Augment_Legend_OnARoll.png",
    name: "On a Roll",
  },
  {
    apiName: "TFT9_Augment_ZaunTrait",
    icon: "/augment/TFT9_Augment_ZaunTrait.png",
    name: "Zaun Heart",
  },
  {
    apiName: "TFT9_Augment_Commander_ManaJolt1",
    icon: "/augment/TFT9_Augment_Commander_ManaJolt1.png",
    name: "Mana Jolt I",
  },
  {
    apiName: "TFT9_Augment_Commander_ManaJolt3",
    icon: "/augment/TFT9_Augment_Commander_ManaJolt3.png",
    name: "Mana Jolt III",
  },
  {
    apiName: "TFT9_Augment_Commander_ManaJolt2",
    icon: "/augment/TFT9_Augment_Commander_ManaJolt2.png",
    name: "Mana Jolt II",
  },
  {
    apiName: "TFT9_Augment_GiftsFromAbove",
    icon: "/augment/TFT9_Augment_GiftsFromAbove.png",
    name: "Spectral Supplies",
  },
  {
    apiName: "TFT9_Augment_VanquisherStolenVitality",
    icon: "/augment/TFT9_Augment_VanquisherStolenVitality.png",
    name: "Stolen Vitality",
  },
  {
    apiName: "TFT9_Augment_GetJinxed",
    icon: "/augment/TFT9_Augment_GetJinxed.png",
    name: "Get Jinxed!",
  },
  {
    apiName: "TFT9_Augment_VoidTrait2",
    icon: "/augment/TFT9_Augment_VoidTrait2.png",
    name: "Void Soul",
  },
  {
    apiName: "TFT9_Augment_YordleUnstableYordlePortalHR",
    icon: "/augment/TFT9_Augment_YordleUnstableYordlePortalHR.png",
    name: "Unstable Yordle Delivery",
  },
  {
    apiName: "TFT9_Augment_StrategistEmblem2",
    icon: "/augment/TFT9_Augment_StrategistEmblem2.png",
    name: "Strategist Crown",
  },
  {
    apiName: "TFT9_Augment_NoScope",
    icon: "/augment/TFT9_Augment_NoScope.png",
    name: "No Scope",
  },
  {
    apiName: "TFT9_Augment_RogueEmblem2",
    icon: "/augment/TFT9_Augment_RogueEmblem2.png",
    name: "Rogue Crown",
  },
  {
    apiName: "TFT9_Augment_CosmicWisdom2",
    icon: "/augment/TFT9_Augment_CosmicWisdom2.png",
    name: "Cosmic Wisdom II",
  },
  {
    apiName: "TFT9_Augment_FreljordEmblem2",
    icon: "/augment/TFT9_Augment_FreljordEmblem2.png",
    name: "Freljord Crown",
  },
  {
    apiName: "TFT9_Augment_ExecutionerPlusPlus",
    icon: "/augment/TFT9_Augment_ExecutionerPlusPlus.png",
    name: "Executioner III",
  },
  {
    apiName: "TFT9_Augment_SorcererEmblem",
    icon: "/augment/TFT9_Augment_SorcererEmblem.png",
    name: "Sorcerer Crest",
  },
  {
    apiName: "TFT9_Augment_ChemtechOverdrive",
    icon: "/augment/TFT9_Augment_ChemtechOverdrive.png",
    name: "Chemtech Overdrive",
  },
  {
    apiName: "TFT9_Augment_DemaciaTrait",
    icon: "/augment/TFT9_Augment_DemaciaTrait.png",
    name: "Demacia Heart",
  },
  {
    apiName: "TFT9_Augment_LongTimeCraftingHR",
    icon: "/augment/TFT9_Augment_LongTimeCraftingHR.png",
    name: "Latent Forge",
  },
  {
    apiName: "TFT9_Augment_JustKeepRollingHR",
    icon: "/augment/TFT9_Augment_JustKeepRollingHR.png",
    name: "Frequent Flier",
  },
  {
    apiName: "TFT9_Augment_LissandraCarry",
    icon: "/augment/TFT9_Augment_LissandraCarry.png",
    name: "No Thaw",
  },
  {
    apiName: "TFT9_Augment_PiltoverEmblem",
    icon: "/augment/TFT9_Augment_PiltoverEmblem.png",
    name: "Piltover Crest",
  },
  {
    apiName: "TFT9_Augment_JuggernautCantStopMe",
    icon: "/augment/TFT9_Augment_JuggernautCantStopMe.png",
    name: "Adrenaline Rush",
  },
  {
    apiName: "TFT9_Augment_StrengthOfAges",
    icon: "/augment/TFT9_Augment_StrengthOfAges.png",
    name: "Strength Of Ages I",
  },
  {
    apiName: "TFT9_Augment_ZaunEmblem2",
    icon: "/augment/TFT9_Augment_ZaunEmblem2.png",
    name: "Zaun Crown",
  },
  {
    apiName: "TFT9_Augment_FreljordTrait2",
    icon: "/augment/TFT9_Augment_FreljordTrait2.png",
    name: "Freljord Soul",
  },
  {
    apiName: "TFT9_Augment_BerserkII",
    icon: "/augment/TFT9_Augment_BerserkII.png",
    name: "Berserkers II",
  },
  {
    apiName: "TFT9_Augment_PhreakyFridayPlusHR",
    icon: "/augment/TFT9_Augment_PhreakyFridayPlusHR.png",
    name: "Phreaky Friday +",
  },
  {
    apiName: "TFT9_Augment_ShurimaTrait",
    icon: "/augment/TFT9_Augment_ShurimaTrait.png",
    name: "Shurima Heart",
  },
  {
    apiName: "TFT9_Augment_ShurimaEmblem",
    icon: "/augment/TFT9_Augment_ShurimaEmblem.png",
    name: "Shurima Crest",
  },
  {
    apiName: "TFT9_Augment_VanquisherEmblem",
    icon: "/augment/TFT9_Augment_VanquisherEmblem.png",
    name: "Vanquisher Crest",
  },
  {
    apiName: "TFT9_Augment_Commander_Coinpurse3plus",
    icon: "/augment/TFT9_Augment_Commander_Coinpurse3plus.png",
    name: "Coinpurse III +",
  },
  {
    apiName: "TFT9_Augment_BruiserTitanicStrength",
    icon: "/augment/TFT9_Augment_BruiserTitanicStrength.png",
    name: "Titanic Strength",
  },
  {
    apiName: "TFT9_Augment_ShadowIslesTrait",
    icon: "/augment/TFT9_Augment_ShadowIslesTrait.png",
    name: "Shadow Isles Heart",
  },
  {
    apiName: "TFT9_Augment_BilgewaterEmblem2",
    icon: "/augment/TFT9_Augment_BilgewaterEmblem2.png",
    name: "Bilgewater Crown",
  },
  {
    apiName: "TFT9_Augment_PumpingUp3HR",
    icon: "/augment/TFT9_Augment_PumpingUp3HR.png",
    name: "Pumping Up III",
  },
  {
    apiName: "TFT9_Augment_SorcererOverchargedManafont",
    icon: "/augment/TFT9_Augment_SorcererOverchargedManafont.png",
    name: "Overcharged Manafont",
  },
  {
    apiName: "TFT9_Augment_Commander_Experience2Plus",
    icon: "/augment/TFT9_Augment_Commander_Experience2Plus.png",
    name: "Knowledge Download II+",
  },
  {
    apiName: "TFT9_Augment_PhreakyFridayHR",
    icon: "/augment/TFT9_Augment_PhreakyFridayHR.png",
    name: "Phreaky Friday",
  },
  {
    apiName: "TFT9_Augment_ProtectorTrait",
    icon: "/augment/TFT9_Augment_ProtectorTrait.png",
    name: "Protector Heart",
  },
  {
    apiName: "TFT9_Augment_BerserkIII",
    icon: "/augment/TFT9_Augment_BerserkIII.png",
    name: "Berserkers III",
  },
  {
    apiName: "TFT9_Augment_DeadeyeTrait",
    icon: "/augment/TFT9_Augment_DeadeyeTrait.png",
    name: "Deadeye Heart",
  },
  {
    apiName: "TFT9_Augment_NoxusEmblem",
    icon: "/augment/TFT9_Augment_NoxusEmblem.png",
    name: "Noxus Crest",
  },
  {
    apiName: "TFT9_Augment_DeadeyeSuppressingFire",
    icon: "/augment/TFT9_Augment_DeadeyeSuppressingFire.png",
    name: "Suppressing Fire",
  },
  {
    apiName: "TFT9_Augment_DeadeyeEmblem2",
    icon: "/augment/TFT9_Augment_DeadeyeEmblem2.png",
    name: "Deadeye Crown",
  },
  {
    apiName: "TFT9_Augment_BruiserEmblem2",
    icon: "/augment/TFT9_Augment_BruiserEmblem2.png",
    name: "Bruiser Crown",
  },
  {
    apiName: "TFT9_Augment_FortuneFavorsTheBold",
    icon: "/augment/TFT9_Augment_FortuneFavorsTheBold.png",
    name: "Fortune Favors the Bold",
  },
  {
    apiName: "TFT9_Augment_PreserverTrait",
    icon: "/augment/TFT9_Augment_PreserverTrait.png",
    name: "Invoker Heart",
  },
  {
    apiName: "TFT9_Augment_ArmorcladEmblem2",
    icon: "/augment/TFT9_Augment_ArmorcladEmblem2.png",
    name: "Juggernaut Crown",
  },
  {
    apiName: "TFT9_Augment_BerserkI",
    icon: "/augment/TFT9_Augment_BerserkI.png",
    name: "Berserkers I",
  },
  {
    apiName: "TFT9_Augment_ShadowIslesEmblem",
    icon: "/augment/TFT9_Augment_ShadowIslesEmblem.png",
    name: "Shadow Isles Crest",
  },
  {
    apiName: "TFT9_Augment_LevelUpGold",
    icon: "/augment/TFT9_Augment_LevelUpGold.png",
    name: "Level Up.",
  },
  {
    apiName: "TFT9_Augment_PreserverEmblem",
    icon: "/augment/TFT9_Augment_PreserverEmblem.png",
    name: "Invoker Crest",
  },
  {
    apiName: "TFT9_Augment_StrategistTrait",
    icon: "/augment/TFT9_Augment_StrategistTrait.png",
    name: "Strategist Heart",
  },
  {
    apiName: "TFT9_Augment_Commander_Coinpurse3",
    icon: "/augment/TFT9_Augment_Commander_Coinpurse3.png",
    name: "Coinpurse III",
  },
  {
    apiName: "TFT9_Augment_MulticasterTrait2",
    icon: "/augment/TFT9_Augment_MulticasterTrait2.png",
    name: "Multicaster Soul",
  },
  {
    apiName: "TFT9_Augment_Commander_Coinpurse2",
    icon: "/augment/TFT9_Augment_Commander_Coinpurse2.png",
    name: "Coinpurse II",
  },
  {
    apiName: "TFT9_Augment_Commander_Coinpurse1",
    icon: "/augment/TFT9_Augment_Commander_Coinpurse1.png",
    name: "Coinpurse I",
  },
  {
    apiName: "TFT9_Augment_SwainCarry",
    icon: "/augment/TFT9_Augment_SwainCarry.png",
    name: "Demonflare",
  },
  {
    apiName: "TFT9_Augment_TargonEmblem2",
    icon: "/augment/TFT9_Augment_TargonEmblem2.png",
    name: "Targon Crown",
  },
  {
    apiName: "TFT9_Augment_TargonTrait2",
    icon: "/augment/TFT9_Augment_TargonTrait2.png",
    name: "Targon Soul",
  },
  {
    apiName: "TFT9_Augment_TargonTrait",
    icon: "/augment/TFT9_Augment_TargonTrait.png",
    name: "Targon Heart",
  },
  {
    apiName: "TFT9_Augment_BruiserEmblem",
    icon: "/augment/TFT9_Augment_BruiserEmblem.png",
    name: "Bruiser Crest",
  },
  {
    apiName: "TFT9_Augment_BruiserTrait",
    icon: "/augment/TFT9_Augment_BruiserTrait.png",
    name: "Bruiser Heart",
  },
  {
    apiName: "TFT9_Augment_ActionSurge2",
    icon: "/augment/TFT9_Augment_ActionSurge2.png",
    name: "Action Surge II",
  },
  {
    apiName: "TFT9_Augment_SentinelsShield",
    icon: "/augment/TFT9_Augment_SentinelsShield.png",
    name: "Sentinel's Shield",
  },
  {
    apiName: "TFT9_Augment_ActionSurge3",
    icon: "/augment/TFT9_Augment_ActionSurge3.png",
    name: "Action Surge III",
  },
  {
    apiName: "TFT9_Augment_RogueEmblem",
    icon: "/augment/TFT9_Augment_RogueEmblem.png",
    name: "Rogue Crest",
  },
  {
    apiName: "TFT9_Augment_FreljordTrait",
    icon: "/augment/TFT9_Augment_FreljordTrait.png",
    name: "Freljord Heart",
  },
  {
    apiName: "TFT9_Augment_ChallengerDefensiveDash",
    icon: "/augment/TFT9_Augment_ChallengerDefensiveDash.png",
    name: "Defensive Dash",
  },
  {
    apiName: "TFT9_Augment_ActionSurge",
    icon: "/augment/TFT9_Augment_ActionSurge.png",
    name: "Action Surge",
  },
  {
    apiName: "TFT9_Augment_IoniaSentinelsSpirit",
    icon: "/augment/TFT9_Augment_IoniaSentinelsSpirit.png",
    name: "Sentinel's Spirit",
  },
  {
    apiName: "TFT9_Augment_ArmorcladEmblem",
    icon: "/augment/TFT9_Augment_ArmorcladEmblem.png",
    name: "Juggernaut Crest",
  },
  {
    apiName: "TFT9_Augment_ChallengerEmblem",
    icon: "/augment/TFT9_Augment_ChallengerEmblem.png",
    name: "Challenger Crest",
  },
  {
    apiName: "TFT9_Augment_ZaunEmblem",
    icon: "/augment/TFT9_Augment_ZaunEmblem.png",
    name: "Zaun Crest",
  },
  {
    apiName: "TFT9_Augment_SlayerSlayersResolve",
    icon: "/augment/TFT9_Augment_SlayerSlayersResolve.png",
    name: "Slayer's Resolve",
  },
  {
    apiName: "TFT9_Augment_BastionTrait",
    icon: "/augment/TFT9_Augment_BastionTrait.png",
    name: "Bastion Heart",
  },
  {
    apiName: "TFT9_Augment_ExecutionerPlus",
    icon: "/augment/TFT9_Augment_ExecutionerPlus.png",
    name: "Executioner II",
  },
  {
    apiName: "TFT9_Augment_SlayerEmblem",
    icon: "/augment/TFT9_Augment_SlayerEmblem.png",
    name: "Slayer Crest",
  },
  {
    apiName: "TFT9_Augment_DemaciaPetriciteShackles",
    icon: "/augment/TFT9_Augment_DemaciaPetriciteShackles.png",
    name: "Petricite Shackles",
  },
  {
    apiName: "TFT9_Augment_StrategistEmblem",
    icon: "/augment/TFT9_Augment_StrategistEmblem.png",
    name: "Strategist Crest",
  },
  {
    apiName: "TFT9_Augment_FreljordGlacialBreeze",
    icon: "/augment/TFT9_Augment_FreljordGlacialBreeze.png",
    name: "Glacial Breeze",
  },
  {
    apiName: "TFT9_Augment_PiltoverShimmeringInventors",
    icon: "/augment/TFT9_Augment_PiltoverShimmeringInventors.png",
    name: "Shimmering Inventors",
  },
  {
    apiName: "TFT9_Augment_BastionMorningLight",
    icon: "/augment/TFT9_Augment_BastionMorningLight.png",
    name: "Morning Light",
  },
  {
    apiName: "TFT9_Augment_NoxusTrait",
    icon: "/augment/TFT9_Augment_NoxusTrait.png",
    name: "Noxus Heart",
  },
  {
    apiName: "TFT9_Augment_Commander_Experience1Plus",
    icon: "/augment/TFT9_Augment_Commander_Experience1Plus.png",
    name: "Knowledge Download 1+",
  },
  {
    apiName: "TFT9_Augment_KassadinCarry",
    icon: "/augment/TFT9_Augment_KassadinCarry.png",
    name: "Riftwalk",
  },
  {
    apiName: "TFT9_Augment_LongDistanceRelationship1",
    icon: "/augment/TFT9_Augment_LongDistanceRelationship1.png",
    name: "Long Distance Pals",
  },
  {
    apiName: "TFT9_Augment_MoneyLaundering",
    icon: "/augment/TFT9_Augment_MoneyLaundering.png",
    name: "Money Laundering",
  },
  {
    apiName: "TFT9_Augment_IxtalTrait",
    icon: "/augment/TFT9_Augment_IxtalTrait.png",
    name: "Ixtal Heart",
  },
  {
    apiName: "TFT9_Augment_PreserverEmblem2",
    icon: "/augment/TFT9_Augment_PreserverEmblem2.png",
    name: "Invoker Crown",
  },
  {
    apiName: "TFT9_Augment_EagleEye",
    icon: "/augment/TFT9_Augment_EagleEye.png",
    name: "Eagle Eye",
  },
  {
    apiName: "TFT9_Augment_LevelUpSilver",
    icon: "/augment/TFT9_Augment_LevelUpSilver.png",
    name: "Level Up?",
  },
  {
    apiName: "TFT9_Augment_BrokenTradeSector",
    icon: "/augment/TFT9_Augment_BrokenTradeSector.png",
    name: "Broken Trade Sector",
  },
  {
    apiName: "TFT9_Augment_NoxusTotalDomination",
    icon: "/augment/TFT9_Augment_NoxusTotalDomination.png",
    name: "Total Domination",
  },
  {
    apiName: "TFT9_Augment_TargonEmblem",
    icon: "/augment/TFT9_Augment_TargonEmblem.png",
    name: "Targon Crest",
  },
  {
    apiName: "TFT9_Augment_AllNatural3",
    icon: "/augment/TFT9_Augment_AllNatural3.png",
    name: "All Natural III",
  },
  {
    apiName: "TFT9_Augment_IoniaEmblem2",
    icon: "/augment/TFT9_Augment_IoniaEmblem2.png",
    name: "Ionia Crown",
  },
  {
    apiName: "TFT9_Augment_Execute",
    icon: "/augment/TFT9_Augment_Execute.png",
    name: "Execute",
  },
  {
    apiName: "TFT9_Augment_DemaciaEmblem",
    icon: "/augment/TFT9_Augment_DemaciaEmblem.png",
    name: "Demacia Crest",
  },
  {
    apiName: "TFT9_Augment_IoniaEmblem",
    icon: "/augment/TFT9_Augment_IoniaEmblem.png",
    name: "Ionia Crest",
  },
  {
    apiName: "TFT9_Augment_IxtalEmblem2",
    icon: "/augment/TFT9_Augment_IxtalEmblem2.png",
    name: "Ixtal Crown",
  },
  {
    apiName: "TFT9_Augment_MagicalJourneyPlus",
    icon: "/augment/TFT9_Augment_MagicalJourneyPlus.png",
    name: "Magical Journey+",
  },
  {
    apiName: "TFT9_Augment_TargonStaffOfFlowingWaters",
    icon: "/augment/TFT9_Augment_TargonStaffOfFlowingWaters.png",
    name: "Stellacorn's Blessing",
  },
  {
    apiName: "TFT9_Augment_ChallengerForAllUnits",
    icon: "/augment/TFT9_Augment_ChallengerForAllUnits.png",
    name: "Challenger Unity",
  },
  {
    apiName: "TFT9_Augment_Conditioning1",
    icon: "/augment/TFT9_Augment_Conditioning1.png",
    name: "Conditioning I",
  },
  {
    apiName: "TFT9_Augment_BilgewaterRisingInfamy2",
    icon: "/augment/TFT9_Augment_BilgewaterRisingInfamy2.png",
    name: "Rising Infamy+",
  },
  {
    apiName: "TFT9_Augment_BilgewaterRisingInfamy3",
    icon: "/augment/TFT9_Augment_BilgewaterRisingInfamy3.png",
    name: "Rising Infamy++",
  },
  {
    apiName: "TFT9_Augment_ShurimaEmblem2",
    icon: "/augment/TFT9_Augment_ShurimaEmblem2.png",
    name: "Shurima Crown",
  },
  {
    apiName: "TFT9_Augment_Conditioning3",
    icon: "/augment/TFT9_Augment_Conditioning3.png",
    name: "Conditioning III",
  },
  {
    apiName: "TFT9_Augment_Conditioning2",
    icon: "/augment/TFT9_Augment_Conditioning2.png",
    name: "Conditioning II",
  },
  {
    apiName: "TFT9_Augment_VoidEmblem",
    icon: "/augment/TFT9_Augment_VoidEmblem.png",
    name: "Void Crest",
  },
  {
    apiName: "TFT9_Augment_ShurimaShurimasLegacy",
    icon: "/augment/TFT9_Augment_ShurimaShurimasLegacy.png",
    name: "Shurima's Legacy",
  },
  {
    apiName: "TFT9_Augment_GuinsoosLargeBead",
    icon: "/augment/TFT9_Augment_GuinsoosLargeBead.png",
    name: "Guinsoo's Large Bead",
  },
  {
    apiName: "TFT9_Augment_PumpingUp2HR",
    icon: "/augment/TFT9_Augment_PumpingUp2HR.png",
    name: "Pumping Up II",
  },
  {
    apiName: "TFT9_Augment_RogueTrait",
    icon: "/augment/TFT9_Augment_RogueTrait.png",
    name: "Rogue Heart",
  },
  {
    apiName: "TFT9_Augment_DemaciaEmblem2",
    icon: "/augment/TFT9_Augment_DemaciaEmblem2.png",
    name: "Demacia Crown",
  },
  {
    apiName: "TFT9_Augment_MulticasterPracticeMakesPerfect",
    icon: "/augment/TFT9_Augment_MulticasterPracticeMakesPerfect.png",
    name: "Perfected Repetition",
  },
  {
    apiName: "TFT9_Augment_PiltoverEmblem2",
    icon: "/augment/TFT9_Augment_PiltoverEmblem2.png",
    name: "Piltover Crown",
  },
  {
    apiName: "TFT9_Augment_SorcererTrait",
    icon: "/augment/TFT9_Augment_SorcererTrait.png",
    name: "Sorcerer Heart",
  },
  {
    apiName: "TFT9_Augment_Edgy3",
    icon: "/augment/TFT9_Augment_Edgy3.png",
    name: "Edgy III",
  },
  {
    apiName: "TFT9_Augment_ACutAboveHR",
    icon: "/augment/TFT9_Augment_ACutAboveHR.png",
    name: "A Cut Above",
  },
  {
    apiName: "TFT9_Augment_Edgy2",
    icon: "/augment/TFT9_Augment_Edgy2.png",
    name: "Edgy II",
  },
  {
    apiName: "TFT9_Augment_ArmyBuildingHR",
    icon: "/augment/TFT9_Augment_ArmyBuildingHR.png",
    name: "Team Building",
  },
  {
    apiName: "TFT9_Augment_Edgy1",
    icon: "/augment/TFT9_Augment_Edgy1.png",
    name: "Edgy I",
  },
  {
    apiName: "TFT9_Augment_ShadowIslesEmblem2",
    icon: "/augment/TFT9_Augment_ShadowIslesEmblem2.png",
    name: "Shadow Isles Crown",
  },
  {
    apiName: "TFT9_Augment_AllThatShimmers",
    icon: "/augment/TFT9_Augment_AllThatShimmers.png",
    name: "All That Shimmers",
  },
  {
    apiName: "TFT9_Augment_RogueVampiricBlades",
    icon: "/augment/TFT9_Augment_RogueVampiricBlades.png",
    name: "Vampiric Blades",
  },
  {
    apiName: "TFT9_Augment_ChallengerEmblem2",
    icon: "/augment/TFT9_Augment_ChallengerEmblem2.png",
    name: "Challenger Crown",
  },
  {
    apiName: "TFT9_Augment_LearningPotential",
    icon: "/augment/TFT9_Augment_LearningPotential.png",
    name: "Learning Potential",
  },
  {
    apiName: "TFT9_Augment_VoidEmblem2",
    icon: "/augment/TFT9_Augment_VoidEmblem2.png",
    name: "Void Crown",
  },
  {
    apiName: "TFT9_Augment_BilgewaterTrait",
    icon: "/augment/TFT9_Augment_BilgewaterTrait.png",
    name: "Bilgewater Heart",
  },
  {
    apiName: "TFT9_Augment_GalioCarry",
    icon: "/augment/TFT9_Augment_GalioCarry.png",
    name: "Winds of War",
  },
  {
    apiName: "TFT9_Augment_BloodPrice3",
    icon: "/augment/TFT9_Augment_BloodPrice3.png",
    name: "Blood Price III",
  },
  {
    apiName: "TFT9_Augment_BloodPrice2",
    icon: "/augment/TFT9_Augment_BloodPrice2.png",
    name: "Blood Price II",
  },
  {
    apiName: "TFT9_Augment_BloodPrice1",
    icon: "/augment/TFT9_Augment_BloodPrice1.png",
    name: "Blood Price I",
  },
  {
    apiName: "TFT9_Augment_ReturnOnInvestmentHR",
    icon: "/augment/TFT9_Augment_ReturnOnInvestmentHR.png",
    name: "Return on Investment",
  },
  {
    apiName: "TFT9_Augment_LockStep",
    icon: "/augment/TFT9_Augment_LockStep.png",
    name: "Lock Step",
  },
  {
    apiName: "TFT9_Augment_PiltoverShimmeringInventorsHR",
    icon: "/augment/TFT9_Augment_PiltoverShimmeringInventorsHR.png",
    name: "Shimmering Inventors",
  },
  {
    apiName: "TFT9_Augment_Jackpot",
    icon: "/augment/TFT9_Augment_Jackpot.png",
    name: "Missing Link",
  },
  {
    apiName: "TFT6_Augment_TheGoldenEgg",
    icon: "/augment/TFT6_Augment_TheGoldenEgg.png",
    name: "The Golden Egg",
  },
  {
    apiName: "TFT6_Augment_TheGoldenEggHR",
    icon: "/augment/TFT6_Augment_TheGoldenEggHR.png",
    name: "The Golden Egg",
  },
  {
    apiName: "TFT7_Augment_LivingForgeHR",
    icon: "/augment/TFT7_Augment_LivingForgeHR.png",
    name: "Living Forge",
  },
  {
    apiName: "TFT8_Augment_SalvageBinPlusHR",
    icon: "/augment/TFT8_Augment_SalvageBinPlusHR.png",
    name: "Salvage Bin+",
  },
  {
    apiName: "TFT6_Augment_SalvageBinHR",
    icon: "/augment/TFT6_Augment_SalvageBinHR.png",
    name: "Salvage Bin",
  },
  {
    apiName: "TFT9_Augment_WhatTheForge",
    icon: "/augment/TFT9_Augment_WhatTheForge.png",
    name: "What The Forge",
  },
  {
    apiName: "TFT9_Augment_Dedication",
    icon: "/augment/TFT9_Augment_Dedication.png",
    name: "Dedication",
  },
  {
    apiName: "TFT9_Augment_ThreesACrowd",
    icon: "/augment/TFT9_Augment_ThreesACrowd.png",
    name: "Three's a Crowd",
  },
  {
    apiName: "TFT9_Augment_MoneyHealsAllWounds",
    icon: "/augment/TFT9_Augment_MoneyHealsAllWounds.png",
    name: "Wellness Trust",
  },
  {
    apiName: "TFT6_Augment_TinyTitans",
    icon: "/augment/TFT6_Augment_TinyTitans.png",
    name: "Tiny Titans",
  },
  {
    apiName: "TFT6_Augment_RichGetRicher",
    icon: "/augment/TFT6_Augment_RichGetRicher.png",
    name: "Rich Get Richer",
  },
  {
    apiName: "TFT9_Augment_CuttingCorners",
    icon: "/augment/TFT9_Augment_CuttingCorners.png",
    name: "Cutting Corners",
  },
  {
    apiName: "TFT9_Augment_ArmyBuilding",
    icon: "/augment/TFT9_Augment_ArmyBuilding.png",
    name: "Team Building",
  },
  {
    apiName: "TFT9_Augment_TiniestTitan",
    icon: "/augment/TFT9_Augment_TiniestTitan.png",
    name: "Tiniest Titan",
  },
  {
    apiName: "TFT9_Augment_YoungAndWildAndFree",
    icon: "/augment/TFT9_Augment_YoungAndWildAndFree.png",
    name: "Young and Wild and Free",
  },
  {
    apiName: "TFT6_Augment_CyberneticImplants1",
    icon: "/augment/TFT6_Augment_CyberneticImplants1.png",
    name: "Cybernetic Implants I",
  },
  {
    apiName: "TFT6_Augment_HyperRoll",
    icon: "/augment/TFT6_Augment_HyperRoll.png",
    name: "Hustler",
  },
  {
    apiName: "TFT10_Augment_CrownGuarded",
    icon: "/augment/TFT10_Augment_CrownGuarded.png",
    name: "Crown Guarded",
  },
  {
    apiName: "TFT6_Augment_CyberneticImplants3",
    icon: "/augment/TFT6_Augment_CyberneticImplants3.png",
    name: "Cybernetic Implants III",
  },
  {
    apiName: "TFT6_Augment_LudensEcho3",
    icon: "/augment/TFT6_Augment_LudensEcho3.png",
    name: "Luden's Echo III",
  },
  {
    apiName: "TFT9_Augment_EnshroudingStillness",
    icon: "/augment/TFT9_Augment_EnshroudingStillness.png",
    name: "Mana Burn",
  },
  {
    apiName: "TFT6_Augment_CyberneticImplants2",
    icon: "/augment/TFT6_Augment_CyberneticImplants2.png",
    name: "Cybernetic Implants II",
  },
  {
    apiName: "TFT6_Augment_LudensEcho2",
    icon: "/augment/TFT6_Augment_LudensEcho2.png",
    name: "Luden's Echo II",
  },
  {
    apiName: "TFT10_Augment_CrashTestDummies",
    icon: "/augment/TFT10_Augment_CrashTestDummies.png",
    name: "Crash Test Dummies",
  },
  {
    apiName: "TFT6_Augment_LudensEcho1",
    icon: "/augment/TFT6_Augment_LudensEcho1.png",
    name: "Luden's Echo I",
  },
  {
    apiName: "TFT7_Augment_LuckyGlovesPlus",
    icon: "/augment/TFT7_Augment_LuckyGlovesPlus.png",
    name: "Lucky Gloves+",
  },
  {
    apiName: "TFT9_Augment_GiftsFromTheFallen",
    icon: "/augment/TFT9_Augment_GiftsFromTheFallen.png",
    name: "Gifts from the Fallen",
  },
  {
    apiName: "TFT7_Augment_UrfsGrabBag2",
    icon: "/augment/TFT7_Augment_UrfsGrabBag2.png",
    name: "Urf's Grab Bag II",
  },
  {
    apiName: "TFT7_Augment_LastStand",
    icon: "/augment/TFT7_Augment_LastStand.png",
    name: "Last Stand",
  },
  {
    apiName: "TFT10_Augment_Scapegoat",
    icon: "/augment/TFT10_Augment_Scapegoat.png",
    name: "Scapegoat",
  },
  {
    apiName: "TFT9_Augment_MissedConnections",
    icon: "/augment/TFT9_Augment_MissedConnections.png",
    name: "Missed Connections",
  },
  {
    apiName: "TFT10_Augment_LuckyStreak_HR",
    icon: "/augment/TFT10_Augment_LuckyStreak_HR.png",
    name: "Lucky Streak",
  },
  {
    apiName: "TFT9_Augment_ACutAbove",
    icon: "/augment/TFT9_Augment_ACutAbove.png",
    name: "A Cut Above",
  },
  {
    apiName: "TFT10_Augment_BlankSlate",
    icon: "/augment/TFT10_Augment_BlankSlate.png",
    name: "Blank Slate",
  },
  {
    apiName: "TFT6_Augment_Ascension",
    icon: "/augment/TFT6_Augment_Ascension.png",
    name: "Ascension",
  },
  {
    apiName: "TFT6_Augment_GrandGambler",
    icon: "/augment/TFT6_Augment_GrandGambler.png",
    name: "High Roller",
  },
  {
    apiName: "TFT9_Augment_Transfusion",
    icon: "/augment/TFT9_Augment_Transfusion.png",
    name: "Transfusion I",
  },
  {
    apiName: "TFT9_Augment_WanderingTrainer",
    icon: "/augment/TFT9_Augment_WanderingTrainer.png",
    name: "Wandering Trainer",
  },
  {
    apiName: "TFT6_Augment_ThriftShop",
    icon: "/augment/TFT6_Augment_ThriftShop.png",
    name: "Wise Spending",
  },
  {
    apiName: "TFT10_Augment_FullyAdapted",
    icon: "/augment/TFT10_Augment_FullyAdapted.png",
    name: "Fully Adapted",
  },
  {
    apiName: "TFT10_Augment_BigGains",
    icon: "/augment/TFT10_Augment_BigGains.png",
    name: "Big Gains",
  },
  {
    apiName: "TFT9_Augment_YouHaveMyBow",
    icon: "/augment/TFT9_Augment_YouHaveMyBow.png",
    name: "You Have My Bow",
  },
  {
    apiName: "TFT9_Augment_ImpenetrableBulwark",
    icon: "/augment/TFT9_Augment_ImpenetrableBulwark.png",
    name: "Impenetrable Bulwark",
  },
  {
    apiName: "TFT7_Augment_PandorasBench",
    icon: "/augment/TFT7_Augment_PandorasBench.png",
    name: "Pandora's Bench",
  },
  {
    apiName: "TFT6_Augment_SlowAndSteady",
    icon: "/augment/TFT6_Augment_SlowAndSteady.png",
    name: "March of Progress",
  },
  {
    apiName: "TFT6_Augment_MakeshiftArmor1",
    icon: "/augment/TFT6_Augment_MakeshiftArmor1.png",
    name: "Makeshift Armor I",
  },
  {
    apiName: "TFT6_Augment_MakeshiftArmor2",
    icon: "/augment/TFT6_Augment_MakeshiftArmor2.png",
    name: "Makeshift Armor II",
  },
  {
    apiName: "TFT7_Augment_TomeOfTraits2",
    icon: "/augment/TFT7_Augment_TomeOfTraits2.png",
    name: "Ancient Archives II",
  },
  {
    apiName: "TFT9_Augment_LesserJeweledLotus",
    icon: "/augment/TFT9_Augment_LesserJeweledLotus.png",
    name: "Jeweled Lotus I",
  },
  {
    apiName: "TFT6_Augment_MakeshiftArmor3",
    icon: "/augment/TFT6_Augment_MakeshiftArmor3.png",
    name: "Makeshift Armor III",
  },
  {
    apiName: "TFT10_Augment_Stimpack",
    icon: "/augment/TFT10_Augment_Stimpack.png",
    name: "Stimpack",
  },
  {
    apiName: "TFT6_Augment_WindfallPlus",
    icon: "/augment/TFT6_Augment_WindfallPlus.png",
    name: "Windfall+",
  },
  {
    apiName: "TFT6_Augment_TargetDummies",
    icon: "/augment/TFT6_Augment_TargetDummies.png",
    name: "Phony Frontline",
  },
  {
    apiName: "TFT9_Augment_JustKeepRolling",
    icon: "/augment/TFT9_Augment_JustKeepRolling.png",
    name: "Frequent Flier",
  },
  {
    apiName: "TFT10_Augment_ReachTheSummit",
    icon: "/augment/TFT10_Augment_ReachTheSummit.png",
    name: "Reach the Summit",
  },
  {
    apiName: "TFT9_Augment_CyberneticBulk2",
    icon: "/augment/TFT9_Augment_CyberneticBulk2.png",
    name: "Cybernetic Bulk II",
  },
  {
    apiName: "TFT9_Augment_CyberneticBulk3",
    icon: "/augment/TFT9_Augment_CyberneticBulk3.png",
    name: "Cybernetic Bulk III",
  },
  {
    apiName: "TFT7_Augment_BigFriend",
    icon: "/augment/TFT7_Augment_BigFriend.png",
    name: "Big Friend I",
  },
  {
    apiName: "TFT9_Augment_CyberneticBulk1",
    icon: "/augment/TFT9_Augment_CyberneticBulk1.png",
    name: "Cybernetic Bulk I",
  },
  {
    apiName: "TFT9_Augment_Infusion",
    icon: "/augment/TFT9_Augment_Infusion.png",
    name: "Infusion",
  },
  {
    apiName: "TFT10_Augment_HelpIsOnTheWay",
    icon: "/augment/TFT10_Augment_HelpIsOnTheWay.png",
    name: "Help Is On The Way",
  },
  {
    apiName: "TFT9_Augment_PumpingUp",
    icon: "/augment/TFT9_Augment_PumpingUp.png",
    name: "Pumping Up I",
  },
  {
    apiName: "TFT7_Augment_BestFriends3",
    icon: "/augment/TFT7_Augment_BestFriends3.png",
    name: "Best Friends III",
  },
  {
    apiName: "TFT9_Augment_Formation1",
    icon: "/augment/TFT9_Augment_Formation1.png",
    name: "Unified Resistance I",
  },
  {
    apiName: "TFT7_Augment_BestFriends2",
    icon: "/augment/TFT7_Augment_BestFriends2.png",
    name: "Best Friends II",
  },
  {
    apiName: "TFT6_Augment_Meditation1",
    icon: "/augment/TFT6_Augment_Meditation1.png",
    name: "Meditation I",
  },
  {
    apiName: "TFT7_Augment_ClutteredMind",
    icon: "/augment/TFT7_Augment_ClutteredMind.png",
    name: "Cluttered Mind",
  },
  {
    apiName: "TFT7_Augment_BestFriends1",
    icon: "/augment/TFT7_Augment_BestFriends1.png",
    name: "Best Friends I",
  },
  {
    apiName: "TFT6_Augment_Meditation3",
    icon: "/augment/TFT6_Augment_Meditation3.png",
    name: "Meditation III",
  },
  {
    apiName: "TFT9_Augment_Formation2",
    icon: "/augment/TFT9_Augment_Formation2.png",
    name: "Unified Resistance II",
  },
  {
    apiName: "TFT6_Augment_Meditation2",
    icon: "/augment/TFT6_Augment_Meditation2.png",
    name: "Meditation II",
  },
  {
    apiName: "TFT9_Augment_BuildingACollectionPlusPlus",
    icon: "/augment/TFT9_Augment_BuildingACollectionPlusPlus.png",
    name: "Buried Treasures III",
  },
  {
    apiName: "TFT9_Augment_GargantuanResolve",
    icon: "/augment/TFT9_Augment_GargantuanResolve.png",
    name: "Gargantuan Resolve",
  },
  {
    apiName: "TFT9_Augment_HealingOrbsI",
    icon: "/augment/TFT9_Augment_HealingOrbsI.png",
    name: "Healing Orbs I",
  },
  {
    apiName: "TFT6_Augment_PortableForgePlusPlus",
    icon: "/augment/TFT6_Augment_PortableForgePlusPlus.png",
    name: "Portable Forge++",
  },
  {
    apiName: "TFT9_Augment_Martyr",
    icon: "/augment/TFT9_Augment_Martyr.png",
    name: "Martyr",
  },
  {
    apiName: "TFT9_Augment_SocialDistancing3",
    icon: "/augment/TFT9_Augment_SocialDistancing3.png",
    name: "Social Distancing III",
  },
  {
    apiName: "TFT9_Augment_BlindingSpeed",
    icon: "/augment/TFT9_Augment_BlindingSpeed.png",
    name: "Blinding Speed",
  },
  {
    apiName: "TFT6_Augment_TomeOfTraits1",
    icon: "/augment/TFT6_Augment_TomeOfTraits1.png",
    name: "Ancient Archives I",
  },
  {
    apiName: "TFT9_Augment_SocialDistancing2",
    icon: "/augment/TFT9_Augment_SocialDistancing2.png",
    name: "Social Distancing II",
  },
  {
    apiName: "TFT7_Augment_LuckyGloves",
    icon: "/augment/TFT7_Augment_LuckyGloves.png",
    name: "Lucky Gloves",
  },
  {
    apiName: "TFT9_Augment_EnduranceTraining",
    icon: "/augment/TFT9_Augment_EnduranceTraining.png",
    name: "Endurance Training",
  },
  {
    apiName: "TFT6_Augment_PortableForgePlus",
    icon: "/augment/TFT6_Augment_PortableForgePlus.png",
    name: "Portable Forge+",
  },
  {
    apiName: "TFT9_Augment_Inconsistency",
    icon: "/augment/TFT9_Augment_Inconsistency.png",
    name: "Inconsistency",
  },
  {
    apiName: "TFT9_Augment_Commander_TeamingUp1",
    icon: "/augment/TFT9_Augment_Commander_TeamingUp1.png",
    name: "Teaming Up I",
  },
  {
    apiName: "TFT6_Augment_RichGetRicherPlus",
    icon: "/augment/TFT6_Augment_RichGetRicherPlus.png",
    name: "Rich Get Richer+",
  },
  {
    apiName: "TFT6_Augment_Electrocharge3",
    icon: "/augment/TFT6_Augment_Electrocharge3.png",
    name: "Electrocharge III",
  },
  {
    apiName: "TFT6_Augment_Electrocharge2",
    icon: "/augment/TFT6_Augment_Electrocharge2.png",
    name: "Electrocharge II",
  },
  {
    apiName: "TFT7_Augment_AxiomArc2",
    icon: "/augment/TFT7_Augment_AxiomArc2.png",
    name: "Axiom Arc II",
  },
  {
    apiName: "TFT6_Augment_Electrocharge1",
    icon: "/augment/TFT6_Augment_Electrocharge1.png",
    name: "Electrocharge I",
  },
  {
    apiName: "TFT6_Augment_WoodlandCharm",
    icon: "/augment/TFT6_Augment_WoodlandCharm.png",
    name: "Woodland Charm",
  },
  {
    apiName: "TFT9_Augment_Commander_TeamingUp2",
    icon: "/augment/TFT9_Augment_Commander_TeamingUp2.png",
    name: "Teaming Up II",
  },
  {
    apiName: "TFT6_Augment_ItemGrabBag2",
    icon: "/augment/TFT6_Augment_ItemGrabBag2.png",
    name: "Item Grab Bag II",
  },
  {
    apiName: "TFT9_Augment_DravenSpoilsOfWar",
    icon: "/augment/TFT9_Augment_DravenSpoilsOfWar.png",
    name: "Spoils of War I",
  },
  {
    apiName: "TFT9_Augment_NotToday",
    icon: "/augment/TFT9_Augment_NotToday.png",
    name: "Not Today",
  },
  {
    apiName: "TFT6_Augment_ItemGrabBag1",
    icon: "/augment/TFT6_Augment_ItemGrabBag1.png",
    name: "Item Grab Bag I",
  },
  {
    apiName: "TFT10_Augment_GoingLong",
    icon: "/augment/TFT10_Augment_GoingLong.png",
    name: "Going Long",
  },
  {
    apiName: "TFT9_Augment_UnleashedArcana",
    icon: "/augment/TFT9_Augment_UnleashedArcana.png",
    name: "Unleashed Arcana",
  },
  {
    apiName: "TFT9_Augment_PhreakyFridayPlus",
    icon: "/augment/TFT9_Augment_PhreakyFridayPlus.png",
    name: "Phreaky Friday +",
  },
  {
    apiName: "TFT6_Augment_TriForce1",
    icon: "/augment/TFT6_Augment_TriForce1.png",
    name: "Tri Force I",
  },
  {
    apiName: "TFT6_Augment_SunfireBoard",
    icon: "/augment/TFT6_Augment_SunfireBoard.png",
    name: "Sunfire Board",
  },
  {
    apiName: "TFT6_Augment_TriForce3",
    icon: "/augment/TFT6_Augment_TriForce3.png",
    name: "Tri Force III",
  },
  {
    apiName: "TFT9_Augment_IronAssets",
    icon: "/augment/TFT9_Augment_IronAssets.png",
    name: "Iron Assets",
  },
  {
    apiName: "TFT6_Augment_TriForce2",
    icon: "/augment/TFT6_Augment_TriForce2.png",
    name: "Tri Force II",
  },
  {
    apiName: "TFT7_Augment_ThinkFast",
    icon: "/augment/TFT7_Augment_ThinkFast.png",
    name: "Think Fast",
  },
  {
    apiName: "TFT9_Augment_HedgeFundPlus",
    icon: "/augment/TFT9_Augment_HedgeFundPlus.png",
    name: "Hedge Fund+",
  },
  {
    apiName: "TFT10_Augment_SticksAndStones",
    icon: "/augment/TFT10_Augment_SticksAndStones.png",
    name: "Sticks And Stones",
  },
  {
    apiName: "TFT6_Augment_BlueBattery2",
    icon: "/augment/TFT6_Augment_BlueBattery2.png",
    name: "Blue Battery II",
  },
  {
    apiName: "TFT9_Augment_CombatCaster",
    icon: "/augment/TFT9_Augment_CombatCaster.png",
    name: "Combat Caster",
  },
  {
    apiName: "TFT6_Augment_BlueBattery1",
    icon: "/augment/TFT6_Augment_BlueBattery1.png",
    name: "Blue Battery I",
  },
  {
    apiName: "TFT7_Augment_AFK",
    icon: "/augment/TFT7_Augment_AFK.png",
    name: "AFK",
  },
  {
    apiName: "TFT9_Augment_HedgeFund",
    icon: "/augment/TFT9_Augment_HedgeFund.png",
    name: "Hedge Fund",
  },
  {
    apiName: "TFT9_Augment_StationarySupport3",
    icon: "/augment/TFT9_Augment_StationarySupport3.png",
    name: "Stationary Support III",
  },
  {
    apiName: "TFT9_Augment_StationarySupport2",
    icon: "/augment/TFT9_Augment_StationarySupport2.png",
    name: "Stationary Support II",
  },
  {
    apiName: "TFT9_Augment_StationarySupport1",
    icon: "/augment/TFT9_Augment_StationarySupport1.png",
    name: "Stationary Support I",
  },
  {
    apiName: "TFT9_Augment_LongDistanceRelationship2",
    icon: "/augment/TFT9_Augment_LongDistanceRelationship2.png",
    name: "Long Distance Pals",
  },
  {
    apiName: "TFT7_Augment_SacrificialPact",
    icon: "/augment/TFT7_Augment_SacrificialPact.png",
    name: "Cruel Pact",
  },
  {
    apiName: "TFT9_Augment_SocialDistancing",
    icon: "/augment/TFT9_Augment_SocialDistancing.png",
    name: "Social Distancing I",
  },
  {
    apiName: "TFT6_Augment_SalvageBin",
    icon: "/augment/TFT6_Augment_SalvageBin.png",
    name: "Salvage Bin",
  },
  {
    apiName: "TFT9_Augment_LearningFromExperience2",
    icon: "/augment/TFT9_Augment_LearningFromExperience2.png",
    name: "Patient Study",
  },
  {
    apiName: "TFT6_Augment_HighEndShopping",
    icon: "/augment/TFT6_Augment_HighEndShopping.png",
    name: "High End Shopping II",
  },
  {
    apiName: "TFT9_Augment_OneHundredDuckSizedHorses",
    icon: "/augment/TFT9_Augment_OneHundredDuckSizedHorses.png",
    name: "Endless Hordes",
  },
  {
    apiName: "TFT6_Augment_Distancing",
    icon: "/augment/TFT6_Augment_Distancing.png",
    name: "Exiles I",
  },
  {
    apiName: "TFT9_Augment_CapriciousForge",
    icon: "/augment/TFT9_Augment_CapriciousForge.png",
    name: "Capricious Forge",
  },
  {
    apiName: "TFT9_Augment_ReturnOnInvestment",
    icon: "/augment/TFT9_Augment_ReturnOnInvestment.png",
    name: "Return on Investment",
  },
  {
    apiName: "TFT6_Augment_TradeSectorPlus",
    icon: "/augment/TFT6_Augment_TradeSectorPlus.png",
    name: "Trade Sector+",
  },
  {
    apiName: "TFT10_Augment_TwinTerror1",
    icon: "/augment/TFT10_Augment_TwinTerror1.png",
    name: "Twin Terror I",
  },
  {
    apiName: "TFT10_Augment_Vampirism",
    icon: "/augment/TFT10_Augment_Vampirism.png",
    name: "Vampirism I",
  },
  {
    apiName: "TFT9_Augment_OneHundredDuckSizedHorsesPlus",
    icon: "/augment/TFT9_Augment_OneHundredDuckSizedHorsesPlus.png",
    name: "Endless Hordes +",
  },
  {
    apiName: "TFT10_Augment_TwinTerror2",
    icon: "/augment/TFT10_Augment_TwinTerror2.png",
    name: "Twin Terror II",
  },
  {
    apiName: "TFT10_Augment_InspiringEpitaph",
    icon: "/augment/TFT10_Augment_InspiringEpitaph.png",
    name: "Inspiring Epitaph",
  },
  {
    apiName: "TFT10_Augment_GoodForSomethingSilver",
    icon: "/augment/TFT10_Augment_GoodForSomethingSilver.png",
    name: "Good For Something I",
  },
  {
    apiName: "TFT8_Augment_SalvageBinPlus",
    icon: "/augment/TFT8_Augment_SalvageBinPlus.png",
    name: "Salvage Bin+",
  },
  {
    apiName: "TFT6_Augment_Keepers1",
    icon: "/augment/TFT6_Augment_Keepers1.png",
    name: "Keepers I",
  },
  {
    apiName: "TFT10_Augment_LowInterestRates",
    icon: "/augment/TFT10_Augment_LowInterestRates.png",
    name: "Low Interest Rates",
  },
  {
    apiName: "TFT6_Augment_Keepers2",
    icon: "/augment/TFT6_Augment_Keepers2.png",
    name: "Keepers II",
  },
  {
    apiName: "TFT10_Augment_LuckyStreak",
    icon: "/augment/TFT10_Augment_LuckyStreak.png",
    name: "Lucky Streak",
  },
  {
    apiName: "TFT7_Augment_Preparation3",
    icon: "/augment/TFT7_Augment_Preparation3.png",
    name: "Preparation III",
  },
  {
    apiName: "TFT7_Augment_Preparation2",
    icon: "/augment/TFT7_Augment_Preparation2.png",
    name: "Preparation II",
  },
  {
    apiName: "TFT6_Augment_Traitless2",
    icon: "/augment/TFT6_Augment_Traitless2.png",
    name: "Built Different II",
  },
  {
    apiName: "TFT9_Augment_RedBuff",
    icon: "/augment/TFT9_Augment_RedBuff.png",
    name: "Blistering Strikes",
  },
  {
    apiName: "TFT6_Augment_Traitless3",
    icon: "/augment/TFT6_Augment_Traitless3.png",
    name: "Built Different III",
  },
  {
    apiName: "TFT9_Augment_DangerousToGoAlone",
    icon: "/augment/TFT9_Augment_DangerousToGoAlone.png",
    name: "Parting Gifts",
  },
  {
    apiName: "TFT6_Augment_Diversify2",
    icon: "/augment/TFT6_Augment_Diversify2.png",
    name: "Stand United II",
  },
  {
    apiName: "TFT6_Augment_MaxLevel10",
    icon: "/augment/TFT6_Augment_MaxLevel10.png",
    name: "Level Up!",
  },
  {
    apiName: "TFT6_Augment_Diversify3",
    icon: "/augment/TFT6_Augment_Diversify3.png",
    name: "Stand United III",
  },
  {
    apiName: "TFT6_Augment_ThrillOfTheHunt1",
    icon: "/augment/TFT6_Augment_ThrillOfTheHunt1.png",
    name: "Thrill of the Hunt I",
  },
  {
    apiName: "TFT6_Augment_Traitless1",
    icon: "/augment/TFT6_Augment_Traitless1.png",
    name: "Built Different I",
  },
  {
    apiName: "TFT6_Augment_SecondWind2",
    icon: "/augment/TFT6_Augment_SecondWind2.png",
    name: "Second Wind II",
  },
  {
    apiName: "TFT6_Augment_SecondWind1",
    icon: "/augment/TFT6_Augment_SecondWind1.png",
    name: "Second Wind I",
  },
  {
    apiName: "TFT6_Augment_Diversify1",
    icon: "/augment/TFT6_Augment_Diversify1.png",
    name: "Stand United I",
  },
  {
    apiName: "TFT6_Augment_JeweledLotus",
    icon: "/augment/TFT6_Augment_JeweledLotus.png",
    name: "Jeweled Lotus II",
  },
  {
    apiName: "TFT9_Augment_StarsAreBorn",
    icon: "/augment/TFT9_Augment_StarsAreBorn.png",
    name: "Stars are Born",
  },
  {
    apiName: "TFT6_Augment_ThrillOfTheHunt2",
    icon: "/augment/TFT6_Augment_ThrillOfTheHunt2.png",
    name: "Thrill of the Hunt II",
  },
  {
    apiName: "TFT6_Augment_BinaryAirdrop",
    icon: "/augment/TFT6_Augment_BinaryAirdrop.png",
    name: "Binary Airdrop",
  },
  {
    apiName: "TFT9_Augment_IndomitableWill",
    icon: "/augment/TFT9_Augment_IndomitableWill.png",
    name: "Indomitable Will",
  },
  {
    apiName: "TFT6_Augment_OneTwoFive",
    icon: "/augment/TFT6_Augment_OneTwoFive.png",
    name: "One, Two, Five!",
  },
  {
    apiName: "TFT9_Augment_SilverSpoon",
    icon: "/augment/TFT9_Augment_SilverSpoon.png",
    name: "Silver Spoon",
  },
  {
    apiName: "TFT10_Augment_LearningToSpell",
    icon: "/augment/TFT10_Augment_LearningToSpell.png",
    name: "Learning to Spell",
  },
  {
    apiName: "TFT9_Augment_AllNatural2",
    icon: "/augment/TFT9_Augment_AllNatural2.png",
    name: "All Natural II",
  },
  {
    apiName: "TFT9_Augment_BranchingOut",
    icon: "/augment/TFT9_Augment_BranchingOut.png",
    name: "Branching Out",
  },
  {
    apiName: "TFT9_Augment_BuildingACollection",
    icon: "/augment/TFT9_Augment_BuildingACollection.png",
    name: "Buried Treasures I",
  },
  {
    apiName: "TFT9_Augment_EarlyEducation",
    icon: "/augment/TFT9_Augment_EarlyEducation.png",
    name: "Early Education",
  },
  {
    apiName: "TFT9_Augment_OneTwosThree",
    icon: "/augment/TFT9_Augment_OneTwosThree.png",
    name: "Ones Twos Three",
  },
  {
    apiName: "TFT9_Augment_SupportCache",
    icon: "/augment/TFT9_Augment_SupportCache.png",
    name: "Support Cache",
  },
  {
    apiName: "TFT9_Augment_PhreakyFriday",
    icon: "/augment/TFT9_Augment_PhreakyFriday.png",
    name: "Phreaky Friday",
  },
  {
    apiName: "TFT6_Augment_VerdantVeil",
    icon: "/augment/TFT6_Augment_VerdantVeil.png",
    name: "Verdant Veil",
  },
  {
    apiName: "TFT9_Augment_HighEndSector",
    icon: "/augment/TFT9_Augment_HighEndSector.png",
    name: "Shopping Spree",
  },
  {
    apiName: "TFT6_Augment_WindfallPlusPlus",
    icon: "/augment/TFT6_Augment_WindfallPlusPlus.png",
    name: "Windfall++",
  },
  {
    apiName: "TFT9_Augment_JeweledLotus",
    icon: "/augment/TFT9_Augment_JeweledLotus.png",
    name: "Jeweled Lotus II",
  },
  {
    apiName: "TFT9_Augment_ImpromptuInventions",
    icon: "/augment/TFT9_Augment_ImpromptuInventions.png",
    name: "Scrappy Inventions",
  },
  {
    apiName: "TFT6_Augment_ComponentGrabBag",
    icon: "/augment/TFT6_Augment_ComponentGrabBag.png",
    name: "Component Grab Bag",
  },
  {
    apiName: "TFT7_Augment_CursedCrown",
    icon: "/augment/TFT7_Augment_CursedCrown.png",
    name: "Cursed Crown",
  },
  {
    apiName: "TFT9_Augment_InfernalContract",
    icon: "/augment/TFT9_Augment_InfernalContract.png",
    name: "Infernal Contract",
  },
  {
    apiName: "TFT9_Augment_CustomerIsAlwaysRight",
    icon: "/augment/TFT9_Augment_CustomerIsAlwaysRight.png",
    name: "Component Buffet",
  },
  {
    apiName: "TFT10_Augment_HeroicGrabBag",
    icon: "/augment/TFT10_Augment_HeroicGrabBag.png",
    name: "Heroic Grab Bag",
  },
  {
    apiName: "TFT7_Augment_Preparation",
    icon: "/augment/TFT7_Augment_Preparation.png",
    name: "Preparation I",
  },
  {
    apiName: "TFT9_Augment_RollTheDice",
    icon: "/augment/TFT9_Augment_RollTheDice.png",
    name: "Roll The Dice",
  },
  {
    apiName: "TFT9_Augment_Commander_Ascension",
    icon: "/augment/TFT9_Augment_Commander_Ascension.png",
    name: "Ascension",
  },
  {
    apiName: "TFT9_Augment_PandorasItems2",
    icon: "/augment/TFT9_Augment_PandorasItems2.png",
    name: "Pandora's Items II",
  },
  {
    apiName: "TFT9_Augment_SilverTicket",
    icon: "/augment/TFT9_Augment_SilverTicket.png",
    name: "Golden Ticket",
  },
  {
    apiName: "TFT6_Augment_Recombobulator",
    icon: "/augment/TFT6_Augment_Recombobulator.png",
    name: "Recombobulator",
  },
  {
    apiName: "TFT9_Augment_HedgeFundPlusPlus",
    icon: "/augment/TFT9_Augment_HedgeFundPlusPlus.png",
    name: "Hedge Fund++",
  },
  {
    apiName: "TFT10_Augment_LittleBuddies",
    icon: "/augment/TFT10_Augment_LittleBuddies.png",
    name: "Little Buddies",
  },
  {
    apiName: "TFT9_Augment_TransfusionPlusPlus",
    icon: "/augment/TFT9_Augment_TransfusionPlusPlus.png",
    name: "Transfusion III",
  },
  {
    apiName: "TFT9_Augment_PumpingUp3",
    icon: "/augment/TFT9_Augment_PumpingUp3.png",
    name: "Pumping Up III",
  },
  {
    apiName: "TFT10_Augment_ShockTreatment",
    icon: "/augment/TFT10_Augment_ShockTreatment.png",
    name: "Shock Treatment",
  },
  {
    apiName: "TFT9_Augment_PumpingUp2",
    icon: "/augment/TFT9_Augment_PumpingUp2.png",
    name: "Pumping Up II",
  },
  {
    apiName: "TFT9_Augment_WhatDoesntKillYou",
    icon: "/augment/TFT9_Augment_WhatDoesntKillYou.png",
    name: "What Doesn't Kill You",
  },
  {
    apiName: "TFT6_Augment_CyberneticShell1",
    icon: "/augment/TFT6_Augment_CyberneticShell1.png",
    name: "Cybernetic Shell I",
  },
  {
    apiName: "TFT6_Augment_CyberneticShell3",
    icon: "/augment/TFT6_Augment_CyberneticShell3.png",
    name: "Cybernetic Shell III",
  },
  {
    apiName: "TFT6_Augment_CyberneticShell2",
    icon: "/augment/TFT6_Augment_CyberneticShell2.png",
    name: "Cybernetic Shell II",
  },
  {
    apiName: "TFT6_Augment_MetabolicAccelerator",
    icon: "/augment/TFT6_Augment_MetabolicAccelerator.png",
    name: "Metabolic Accelerator",
  },
  {
    apiName: "TFT9_Augment_Idealism",
    icon: "/augment/TFT9_Augment_Idealism.png",
    name: "Idealism",
  },
  {
    apiName: "TFT6_Augment_ClearMind",
    icon: "/augment/TFT6_Augment_ClearMind.png",
    name: "Clear Mind",
  },
  {
    apiName: "TFT9_Augment_YouHaveMySword",
    icon: "/augment/TFT9_Augment_YouHaveMySword.png",
    name: "You Have My Sword",
  },
  {
    apiName: "TFT7_Augment_MikaelsGift",
    icon: "/augment/TFT7_Augment_MikaelsGift.png",
    name: "Better Together",
  },
  {
    apiName: "TFT10_Augment_SwitchingGears",
    icon: "/augment/TFT10_Augment_SwitchingGears.png",
    name: "Switching Gears",
  },
  {
    apiName: "TFT9_Augment_Commander_RollingForDays",
    icon: "/augment/TFT9_Augment_Commander_RollingForDays.png",
    name: "Rolling For Days I",
  },
  {
    apiName: "TFT6_Augment_BandOfThieves2",
    icon: "/augment/TFT6_Augment_BandOfThieves2.png",
    name: "Band of Thieves II",
  },
  {
    apiName: "TFT10_Augment_HeavyHitters",
    icon: "/augment/TFT10_Augment_HeavyHitters.png",
    name: "Heavy Hitters",
  },
  {
    apiName: "TFT10_Augment_Determinedinvestors",
    icon: "/augment/TFT10_Augment_Determinedinvestors.png",
    name: "Determined Investors",
  },
  {
    apiName: "TFT9_Augment_Commander_FinalAscension",
    icon: "/augment/TFT9_Augment_Commander_FinalAscension.png",
    name: "Final Ascension",
  },
  {
    apiName: "TFT7_Augment_FirstAidKit2",
    icon: "/augment/TFT7_Augment_FirstAidKit2.png",
    name: "First Aid Kit II",
  },
  {
    apiName: "TFT7_Augment_Consistency",
    icon: "/augment/TFT7_Augment_Consistency.png",
    name: "Consistency",
  },
  {
    apiName: "TFT9_Augment_BronzeTicket",
    icon: "/augment/TFT9_Augment_BronzeTicket.png",
    name: "Silver Ticket",
  },
  {
    apiName: "TFT9_Augment_Contagion",
    icon: "/augment/TFT9_Augment_Contagion.png",
    name: "Contagion",
  },
  {
    apiName: "TFT9_Augment_StarterKit",
    icon: "/augment/TFT9_Augment_StarterKit.png",
    name: "Starter Kit",
  },
  {
    apiName: "TFT7_Augment_LategameSpecialist",
    icon: "/augment/TFT7_Augment_LategameSpecialist.png",
    name: "Lategame Specialist",
  },
  {
    apiName: "TFT7_Augment_BirthdayPresents",
    icon: "/augment/TFT7_Augment_BirthdayPresents.png",
    name: "Birthday Present",
  },
  {
    apiName: "TFT9_Augment_AllNatural",
    icon: "/augment/TFT9_Augment_AllNatural.png",
    name: "All Natural I",
  },
  {
    apiName: "TFT9_Augment_Shoplifting",
    icon: "/augment/TFT9_Augment_Shoplifting.png",
    name: "Shoplifting",
  },
  {
    apiName: "TFT9_Augment_DravenSpoilsOfWar3",
    icon: "/augment/TFT9_Augment_DravenSpoilsOfWar3.png",
    name: "Spoils of War III",
  },
  {
    apiName: "TFT9_Augment_DravenSpoilsOfWar2",
    icon: "/augment/TFT9_Augment_DravenSpoilsOfWar2.png",
    name: "Spoils of War II",
  },
  {
    apiName: "TFT6_Augment_Distancing3",
    icon: "/augment/TFT6_Augment_Distancing3.png",
    name: "Exiles III",
  },
  {
    apiName: "TFT6_Augment_Distancing2",
    icon: "/augment/TFT6_Augment_Distancing2.png",
    name: "Exiles II",
  },
  {
    apiName: "TFT9_Augment_OnARoll",
    icon: "/augment/TFT9_Augment_OnARoll.png",
    name: "On a Roll",
  },
  {
    apiName: "TFT6_Augment_Weakspot",
    icon: "/augment/TFT6_Augment_Weakspot.png",
    name: "Weakspot",
  },
  {
    apiName: "TFT9_Augment_EscortQuest",
    icon: "/augment/TFT9_Augment_EscortQuest.png",
    name: "Escort Quest",
  },
  {
    apiName: "TFT9_Augment_Sleightofhand",
    icon: "/augment/TFT9_Augment_Sleightofhand.png",
    name: "Sleight of Hand",
  },
  {
    apiName: "TFT7_Augment_ScopedWeapons1",
    icon: "/augment/TFT7_Augment_ScopedWeapons1.png",
    name: "Scoped Weapons",
  },
  {
    apiName: "TFT6_Augment_TrueTwos",
    icon: "/augment/TFT6_Augment_TrueTwos.png",
    name: "True Twos",
  },
  {
    apiName: "TFT9_Augment_TransfusionPlus",
    icon: "/augment/TFT9_Augment_TransfusionPlus.png",
    name: "Transfusion II",
  },
  {
    apiName: "TFT10_Augment_GoodForSomething",
    icon: "/augment/TFT10_Augment_GoodForSomething.png",
    name: "Good For Something II",
  },
  {
    apiName: "TFT9_Augment_PandorasRadiantBox",
    icon: "/augment/TFT9_Augment_PandorasRadiantBox.png",
    name: "Pandora's Items III",
  },
  {
    apiName: "TFT9_Augment_TacticiansTools",
    icon: "/augment/TFT9_Augment_TacticiansTools.png",
    name: "Tactician's Tools",
  },
  {
    apiName: "TFT6_Augment_TradeSector",
    icon: "/augment/TFT6_Augment_TradeSector.png",
    name: "Trade Sector",
  },
  {
    apiName: "TFT9_Augment_AirspeedVelocity2",
    icon: "/augment/TFT9_Augment_AirspeedVelocity2.png",
    name: "Unburdened II",
  },
  {
    apiName: "TFT9_Augment_BigGrabBag",
    icon: "/augment/TFT9_Augment_BigGrabBag.png",
    name: "Big Grab Bag",
  },
  {
    apiName: "TFT9_Augment_BardPlaybook2",
    icon: "/augment/TFT9_Augment_BardPlaybook2.png",
    name: "Caretaker's Favor",
  },
  {
    apiName: "TFT6_Augment_Battlemage1",
    icon: "/augment/TFT6_Augment_Battlemage1.png",
    name: "Battlemage I",
  },
  {
    apiName: "TFT6_Augment_CelestialBlessing1",
    icon: "/augment/TFT6_Augment_CelestialBlessing1.png",
    name: "Celestial Blessing I",
  },
  {
    apiName: "TFT9_Augment_BardPlaybook3",
    icon: "/augment/TFT9_Augment_BardPlaybook3.png",
    name: "Caretaker's Chosen",
  },
  {
    apiName: "TFT9_Augment_AirspeedVelocity1",
    icon: "/augment/TFT9_Augment_AirspeedVelocity1.png",
    name: "Unburdened I",
  },
  {
    apiName: "TFT6_Augment_CelestialBlessing2",
    icon: "/augment/TFT6_Augment_CelestialBlessing2.png",
    name: "Celestial Blessing II",
  },
  {
    apiName: "TFT6_Augment_Battlemage3",
    icon: "/augment/TFT6_Augment_Battlemage3.png",
    name: "Battlemage III",
  },
  {
    apiName: "TFT6_Augment_GachaAddict",
    icon: "/augment/TFT6_Augment_GachaAddict.png",
    name: "Prismatic Ticket",
  },
  {
    apiName: "TFT6_Augment_CelestialBlessing3",
    icon: "/augment/TFT6_Augment_CelestialBlessing3.png",
    name: "Celestial Blessing III",
  },
  {
    apiName: "TFT9_Augment_BardPlaybook1",
    icon: "/augment/TFT9_Augment_BardPlaybook1.png",
    name: "Caretaker's Ally",
  },
  {
    apiName: "TFT6_Augment_Battlemage2",
    icon: "/augment/TFT6_Augment_Battlemage2.png",
    name: "Battlemage II",
  },
  {
    apiName: "TFT6_Augment_CalculatedLoss",
    icon: "/augment/TFT6_Augment_CalculatedLoss.png",
    name: "Calculated Loss",
  },
  {
    apiName: "TFT9_Augment_CyberneticLeech3",
    icon: "/augment/TFT9_Augment_CyberneticLeech3.png",
    name: "Cybernetic Leech III",
  },
  {
    apiName: "TFT9_Augment_BalancedBudget2",
    icon: "/augment/TFT9_Augment_BalancedBudget2.png",
    name: "Balanced Budget",
  },
  {
    apiName: "TFT9_Augment_RiskyMoves",
    icon: "/augment/TFT9_Augment_RiskyMoves.png",
    name: "Risky Moves",
  },
  {
    apiName: "TFT6_Augment_ForceOfNature",
    icon: "/augment/TFT6_Augment_ForceOfNature.png",
    name: "New Recruit",
  },
  {
    apiName: "TFT9_Augment_CyberneticLeech2",
    icon: "/augment/TFT9_Augment_CyberneticLeech2.png",
    name: "Cybernetic Leech II",
  },
  {
    apiName: "TFT9_Augment_CyberneticLeech1",
    icon: "/augment/TFT9_Augment_CyberneticLeech1.png",
    name: "Cybernetic Leech I",
  },
  {
    apiName: "TFT9_Augment_KnowledgeIsPower",
    icon: "/augment/TFT9_Augment_KnowledgeIsPower.png",
    name: "Library Card",
  },
  {
    apiName: "TFT7_Augment_BandOfThieves1",
    icon: "/augment/TFT7_Augment_BandOfThieves1.png",
    name: "Band of Thieves I",
  },
  {
    apiName: "TFT9_Augment_BalancedBudgetPlus",
    icon: "/augment/TFT9_Augment_BalancedBudgetPlus.png",
    name: "Balanced Budget+",
  },
  {
    apiName: "TFT9_Augment_GreaterJeweledLotus",
    icon: "/augment/TFT9_Augment_GreaterJeweledLotus.png",
    name: "Jeweled Lotus III",
  },
  {
    apiName: "TFT7_Augment_LivingForge",
    icon: "/augment/TFT7_Augment_LivingForge.png",
    name: "Living Forge",
  },
  {
    apiName: "TFT6_Augment_MeleeStarBlade3",
    icon: "/augment/TFT6_Augment_MeleeStarBlade3.png",
    name: "Knife's Edge III",
  },
  {
    apiName: "TFT6_Augment_MeleeStarBlade2",
    icon: "/augment/TFT6_Augment_MeleeStarBlade2.png",
    name: "Knife's Edge II",
  },
  {
    apiName: "TFT6_Augment_Windfall",
    icon: "/augment/TFT6_Augment_Windfall.png",
    name: "Windfall",
  },
  {
    apiName: "TFT9_Augment_OverwhelmingForce",
    icon: "/augment/TFT9_Augment_OverwhelmingForce.png",
    name: "Overwhelming Force",
  },
  {
    apiName: "TFT6_Augment_MeleeStarBlade1",
    icon: "/augment/TFT6_Augment_MeleeStarBlade1.png",
    name: "Knife's Edge I",
  },
  {
    apiName: "TFT6_Augment_RadiantRelics",
    icon: "/augment/TFT6_Augment_RadiantRelics.png",
    name: "Radiant Relics",
  },
  {
    apiName: "TFT7_Augment_BigFriend2",
    icon: "/augment/TFT7_Augment_BigFriend2.png",
    name: "Big Friend II",
  },
  {
    apiName: "TFT6_Augment_Twins1",
    icon: "/augment/TFT6_Augment_Twins1.png",
    name: "Double Trouble I",
  },
  {
    apiName: "TFT6_Augment_FuturePeepers2",
    icon: "/augment/TFT6_Augment_FuturePeepers2.png",
    name: "Future Sight II",
  },
  {
    apiName: "TFT9_Augment_KnowYourEnemy",
    icon: "/augment/TFT9_Augment_KnowYourEnemy.png",
    name: "Know Your Enemy",
  },
  {
    apiName: "TFT6_Augment_Featherweights1",
    icon: "/augment/TFT6_Augment_Featherweights1.png",
    name: "Featherweights I",
  },
  {
    apiName: "TFT10_Augment_SilverVeil",
    icon: "/augment/TFT10_Augment_SilverVeil.png",
    name: "Silver Veil",
  },
  {
    apiName: "TFT6_Augment_Twins2",
    icon: "/augment/TFT6_Augment_Twins2.png",
    name: "Double Trouble II",
  },
  {
    apiName: "TFT9_Augment_BuildingACollectionPlus",
    icon: "/augment/TFT9_Augment_BuildingACollectionPlus.png",
    name: "Buried Treasures II",
  },
  {
    apiName: "TFT6_Augment_Twins3",
    icon: "/augment/TFT6_Augment_Twins3.png",
    name: "Double Trouble III",
  },
  {
    apiName: "TFT6_Augment_Featherweights3",
    icon: "/augment/TFT6_Augment_Featherweights3.png",
    name: "Featherweights III",
  },
  {
    apiName: "TFT6_Augment_ThreesCompany",
    icon: "/augment/TFT6_Augment_ThreesCompany.png",
    name: "Three's Company",
  },
  {
    apiName: "TFT9_Augment_TonsOfStats",
    icon: "/augment/TFT9_Augment_TonsOfStats.png",
    name: "Tons of Stats!",
  },
  {
    apiName: "TFT6_Augment_Featherweights2",
    icon: "/augment/TFT6_Augment_Featherweights2.png",
    name: "Featherweights II",
  },
  {
    apiName: "TFT6_Augment_FirstAidKit",
    icon: "/augment/TFT6_Augment_FirstAidKit.png",
    name: "First Aid Kit I",
  },
  {
    apiName: "TFT10_Augment_VampirismPlus",
    icon: "/augment/TFT10_Augment_VampirismPlus.png",
    name: "Vampirism II",
  },
  {
    apiName: "TFT9_Augment_TiniestTitanPlus",
    icon: "/augment/TFT9_Augment_TiniestTitanPlus.png",
    name: "Tiniest Titan+",
  },
  {
    apiName: "TFT9_Augment_FinalReserves",
    icon: "/augment/TFT9_Augment_FinalReserves.png",
    name: "Final Reserves",
  },
  {
    apiName: "TFT9_Augment_Commander_PartialAscension",
    icon: "/augment/TFT9_Augment_Commander_PartialAscension.png",
    name: "Partial Ascension",
  },
  {
    apiName: "TFT9_Augment_Harmacist1",
    icon: "/augment/TFT9_Augment_Harmacist1.png",
    name: "Harmacist I",
  },
  {
    apiName: "TFT9_Augment_HealingOrbsII",
    icon: "/augment/TFT9_Augment_HealingOrbsII.png",
    name: "Healing Orbs II",
  },
  {
    apiName: "TFT7_Augment_Bloodlust1",
    icon: "/augment/TFT7_Augment_Bloodlust1.png",
    name: "Combat Training",
  },
  {
    apiName: "TFT9_Augment_Harmacist2",
    icon: "/augment/TFT9_Augment_Harmacist2.png",
    name: "Harmacist II",
  },
  {
    apiName: "TFT6_Augment_PandorasItems",
    icon: "/augment/TFT6_Augment_PandorasItems.png",
    name: "Pandora's Items",
  },
  {
    apiName: "TFT6_Augment_PortableForge",
    icon: "/augment/TFT6_Augment_PortableForge.png",
    name: "Portable Forge",
  },
  {
    apiName: "TFT9_Augment_Harmacist3",
    icon: "/augment/TFT9_Augment_Harmacist3.png",
    name: "Harmacist III",
  },
  {
    apiName: "TFT9_Augment_OldMansWalkingStick",
    icon: "/augment/TFT9_Augment_OldMansWalkingStick.png",
    name: "Magic Wand",
  },
  {
    apiName: "TFT9_Augment_LongTimeCrafting",
    icon: "/augment/TFT9_Augment_LongTimeCrafting.png",
    name: "Latent Forge",
  },
  {
    apiName: "TFT6_Augment_CyberneticUplink1",
    icon: "/augment/TFT6_Augment_CyberneticUplink1.png",
    name: "Cybernetic Uplink I",
  },
  {
    apiName: "TFT9_Augment_BloodMoney",
    icon: "/augment/TFT9_Augment_BloodMoney.png",
    name: "Blood Money",
  },
  {
    apiName: "TFT6_Augment_CyberneticUplink2",
    icon: "/augment/TFT6_Augment_CyberneticUplink2.png",
    name: "Cybernetic Uplink II",
  },
  {
    apiName: "TFT6_Augment_CyberneticUplink3",
    icon: "/augment/TFT6_Augment_CyberneticUplink3.png",
    name: "Cybernetic Uplink III",
  },
  {
    apiName: "TFT9_Augment_TwoHealthy",
    icon: "/augment/TFT9_Augment_TwoHealthy.png",
    name: "Two Healthy",
  },
  {
    apiName: "TFT6_Augment_FuturePeepers",
    icon: "/augment/TFT6_Augment_FuturePeepers.png",
    name: "Future Sight I",
  },
  {
    apiName: "TFT9_Augment_Commander_TeamingUp3",
    icon: "/augment/TFT9_Augment_Commander_TeamingUp3.png",
    name: "Teaming Up III",
  },
  {
    apiName: "TFT9_Augment_ItemGrabBagPlusPlus",
    icon: "/augment/TFT9_Augment_ItemGrabBagPlusPlus.png",
    name: "Item Grab Bag III",
  },
  {
    apiName: "TFT9_Augment_Legend_StarsAreBorn",
    icon: "/augment/TFT9_Augment_Legend_StarsAreBorn.png",
    name: "Stars are Born",
  },
  {
    apiName: "TFT9_Augment_Legend_HighEndSector",
    icon: "/augment/TFT9_Augment_Legend_HighEndSector.png",
    name: "Shopping Spree",
  },
  {
    apiName: "TFT9_Augment_Legend_BuildingACollectionPlus",
    icon: "/augment/TFT9_Augment_Legend_BuildingACollectionPlus.png",
    name: "Buried Treasures II",
  },
  {
    apiName: "TFT6_Augment_Legend_TomeOfTraits1",
    icon: "/augment/TFT6_Augment_Legend_TomeOfTraits1.png",
    name: "Ancient Archives I",
  },
  {
    apiName: "TFT6_Augment_Legend_MaxLevel10",
    icon: "/augment/TFT6_Augment_Legend_MaxLevel10.png",
    name: "Level Up!",
  },
  {
    apiName: "TFT9_Augment_Legend_HedgeFund",
    icon: "/augment/TFT9_Augment_Legend_HedgeFund.png",
    name: "Hedge Fund",
  },
  {
    apiName: "TFT9_Augment_FinalGrabBag",
    icon: "/augment/TFT9_Augment_FinalGrabBag.png",
    name: "Final Grab Bag",
  },
  {
    apiName: "TFT9_Augment_Legend_OneTwosThree",
    icon: "/augment/TFT9_Augment_Legend_OneTwosThree.png",
    name: "Ones Twos Three",
  },
  {
    apiName: "TFT7_Augment_Legend_AFK",
    icon: "/augment/TFT7_Augment_Legend_AFK.png",
    name: "AFK",
  },
  {
    apiName: "TFT9_Augment_Commander_RollingForDays3",
    icon: "/augment/TFT9_Augment_Commander_RollingForDays3.png",
    name: "Rolling For Days III",
  },
  {
    apiName: "TFT9_Augment_Commander_RollingForDays2",
    icon: "/augment/TFT9_Augment_Commander_RollingForDays2.png",
    name: "Rolling For Days II",
  },
  {
    apiName: "TFT9_Augment_Legend_Transfusion",
    icon: "/augment/TFT9_Augment_Legend_Transfusion.png",
    name: "Transfusion I",
  },
  {
    apiName: "TFT9_Augment_ItPaysToLearn",
    icon: "/augment/TFT9_Augment_ItPaysToLearn.png",
    name: "It Pays To Learn",
  },
  {
    apiName: "TFT9_Augment_Legend_GreaterJeweledLotus",
    icon: "/augment/TFT9_Augment_Legend_GreaterJeweledLotus.png",
    name: "Jeweled Lotus III",
  },
  {
    apiName: "TFT9_Augment_Legend_DravenSpoilsOfWar",
    icon: "/augment/TFT9_Augment_Legend_DravenSpoilsOfWar.png",
    name: "Spoils of War I",
  },
  {
    apiName: "TFT9_Augment_TinyGrabBag",
    icon: "/augment/TFT9_Augment_TinyGrabBag.png",
    name: "Tiny Grab Bag",
  },
  {
    apiName: "TFT9_Augment_Legend_PandorasRadiantBox",
    icon: "/augment/TFT9_Augment_Legend_PandorasRadiantBox.png",
    name: "Pandora's Items III",
  },
  {
    apiName: "TFT9_Augment_Legend_TransfusionPlus",
    icon: "/augment/TFT9_Augment_Legend_TransfusionPlus.png",
    name: "Transfusion II",
  },
  {
    apiName: "TFT6_Augment_Legend_TinyTitans",
    icon: "/augment/TFT6_Augment_Legend_TinyTitans.png",
    name: "Tiny Titans",
  },
  {
    apiName: "TFT9_Augment_Commander_SmallForge",
    icon: "/augment/TFT9_Augment_Commander_SmallForge.png",
    name: "Small Forge",
  },
  {
    apiName: "TFT9_Augment_Commander_MediumForge",
    icon: "/augment/TFT9_Augment_Commander_MediumForge.png",
    name: "Medium Forge",
  },
  {
    apiName: "TFT9_Augment_Commander_LargeForge",
    icon: "/augment/TFT9_Augment_Commander_LargeForge.png",
    name: "Large Forge",
  },
  {
    apiName: "TFT9_Augment_Commander_WellEarnedComforts",
    icon: "/augment/TFT9_Augment_Commander_WellEarnedComforts.png",
    name: "Well-Earned Comforts I",
  },
  {
    apiName: "TFT6_Augment_Legend_PortableForge",
    icon: "/augment/TFT6_Augment_Legend_PortableForge.png",
    name: "Portable Forge",
  },
  {
    apiName: "TFT9_Augment_Legend_StarterKit",
    icon: "/augment/TFT9_Augment_Legend_StarterKit.png",
    name: "Starter Kit",
  },
  {
    apiName: "TFT9_Augment_Legend_CuttingCorners",
    icon: "/augment/TFT9_Augment_Legend_CuttingCorners.png",
    name: "Cutting Corners",
  },
  {
    apiName: "TFT9_Augment_ItPaysToLearnII",
    icon: "/augment/TFT9_Augment_ItPaysToLearnII.png",
    name: "It Pays to Learn II",
  },
  {
    apiName: "TFT7_Augment_Legend_LivingForge",
    icon: "/augment/TFT7_Augment_Legend_LivingForge.png",
    name: "Living Forge",
  },
  {
    apiName: "TFT9_Augment_BalancedBudget",
    icon: "/augment/TFT9_Augment_BalancedBudget.png",
    name: "Balanced Budget",
  },
  {
    apiName: "TFT9_Augment_Legend_BranchingOut",
    icon: "/augment/TFT9_Augment_Legend_BranchingOut.png",
    name: "Branching Out",
  },
  {
    apiName: "TFT9_Augment_TopDeckPlusPlus",
    icon: "/augment/TFT9_Augment_TopDeckPlusPlus.png",
    name: "Training Reward III",
  },
  {
    apiName: "TFT9_Augment_Legend_TiniestTitan",
    icon: "/augment/TFT9_Augment_Legend_TiniestTitan.png",
    name: "Tiniest Titan",
  },
  {
    apiName: "TFT9_Augment_GottaGoFast",
    icon: "/augment/TFT9_Augment_GottaGoFast.png",
    name: "Gotta Go Fast!",
  },
  {
    apiName: "TFT9_Augment_Commander_SmallForgePlus",
    icon: "/augment/TFT9_Augment_Commander_SmallForgePlus.png",
    name: "Job's Done",
  },
  {
    apiName: "TFT9_Augment_GottaGoFastIII",
    icon: "/augment/TFT9_Augment_GottaGoFastIII.png",
    name: "Gotta Go Fast!!! III",
  },
  {
    apiName: "TFT6_Augment_Legend_PandorasItems",
    icon: "/augment/TFT6_Augment_Legend_PandorasItems.png",
    name: "Pandora's Items",
  },
  {
    apiName: "TFT9_Augment_Legend_PumpingUp2",
    icon: "/augment/TFT9_Augment_Legend_PumpingUp2.png",
    name: "Pumping Up II",
  },
  {
    apiName: "TFT9_Augment_Legend_PandorasItems2",
    icon: "/augment/TFT9_Augment_Legend_PandorasItems2.png",
    name: "Pandora's Items II",
  },
  {
    apiName: "TFT9_Augment_Legend_PumpingUp3",
    icon: "/augment/TFT9_Augment_Legend_PumpingUp3.png",
    name: "Pumping Up III",
  },
  {
    apiName: "TFT9_Augment_ItPaysToLearnIII",
    icon: "/augment/TFT9_Augment_ItPaysToLearnIII.png",
    name: "It Pays to Learn III",
  },
  {
    apiName: "TFT9_Augment_Legend_BardPlaybook1",
    icon: "/augment/TFT9_Augment_Legend_BardPlaybook1.png",
    name: "Caretaker's Ally",
  },
  {
    apiName: "TFT9_Augment_Legend_BardPlaybook3",
    icon: "/augment/TFT9_Augment_Legend_BardPlaybook3.png",
    name: "Caretaker's Chosen",
  },
  {
    apiName: "TFT9_Augment_Legend_BardPlaybook2",
    icon: "/augment/TFT9_Augment_Legend_BardPlaybook2.png",
    name: "Caretaker's Favor",
  },
  {
    apiName: "TFT6_Augment_Legend_RichGetRicher",
    icon: "/augment/TFT6_Augment_Legend_RichGetRicher.png",
    name: "Rich Get Richer",
  },
  {
    apiName: "TFT9_Augment_Legend_BuildingACollectionPlusPlus",
    icon: "/augment/TFT9_Augment_Legend_BuildingACollectionPlusPlus.png",
    name: "Buried Treasures III",
  },
  {
    apiName: "TFT9_Augment_Legend_BuildingACollection",
    icon: "/augment/TFT9_Augment_Legend_BuildingACollection.png",
    name: "Buried Treasures I",
  },
  {
    apiName: "TFT9_Augment_Legend_LongTimeCrafting",
    icon: "/augment/TFT9_Augment_Legend_LongTimeCrafting.png",
    name: "Latent Forge",
  },
  {
    apiName: "TFT9_Augment_GottaGoFastII",
    icon: "/augment/TFT9_Augment_GottaGoFastII.png",
    name: "Gotta Go Fast! II",
  },
  {
    apiName: "TFT9_Augment_TopDeck",
    icon: "/augment/TFT9_Augment_TopDeck.png",
    name: "Training Reward",
  },
  {
    apiName: "TFT9_Augment_FinalGrabBagPlus",
    icon: "/augment/TFT9_Augment_FinalGrabBagPlus.png",
    name: "Final Grab Bag II",
  },
  {
    apiName: "TFT9_Augment_BattleReadyII",
    icon: "/augment/TFT9_Augment_BattleReadyII.png",
    name: "Battle Ready II",
  },
  {
    apiName: "TFT9_Augment_BalancedBudget3",
    icon: "/augment/TFT9_Augment_BalancedBudget3.png",
    name: "Balanced Budget III",
  },
  {
    apiName: "TFT9_Augment_Commander_Money",
    icon: "/augment/TFT9_Augment_Commander_Money.png",
    name: "Money!",
  },
  {
    apiName: "TFT9_Augment_Legend_LesserJeweledLotus",
    icon: "/augment/TFT9_Augment_Legend_LesserJeweledLotus.png",
    name: "Jeweled Lotus I",
  },
  {
    apiName: "TFT9_Augment_Commander_Experience2",
    icon: "/augment/TFT9_Augment_Commander_Experience2.png",
    name: "Knowledge Download II",
  },
  {
    apiName: "TFT9_Augment_Commander_Experience3",
    icon: "/augment/TFT9_Augment_Commander_Experience3.png",
    name: "Knowledge Download III",
  },
  {
    apiName: "TFT9_Augment_BattleReady",
    icon: "/augment/TFT9_Augment_BattleReady.png",
    name: "Battle Ready",
  },
  {
    apiName: "TFT9_Augment_Commander_Experience1",
    icon: "/augment/TFT9_Augment_Commander_Experience1.png",
    name: "Knowledge Download I",
  },
  {
    apiName: "TFT9_Augment_Legend_BronzeTicket",
    icon: "/augment/TFT9_Augment_Legend_BronzeTicket.png",
    name: "Silver Ticket",
  },
  {
    apiName: "TFT9_Augment_FinalGrabBagPlusPlus",
    icon: "/augment/TFT9_Augment_FinalGrabBagPlusPlus.png",
    name: "Urf's Grab Bag",
  },
  {
    apiName: "TFT6_Augment_Legend_MetabolicAccelerator",
    icon: "/augment/TFT6_Augment_Legend_MetabolicAccelerator.png",
    name: "Metabolic Accelerator",
  },
  {
    apiName: "TFT9_Augment_Legend_LearningFromExperience2",
    icon: "/augment/TFT9_Augment_Legend_LearningFromExperience2.png",
    name: "Patient Study",
  },
  {
    apiName: "TFT9_Augment_Commander_MediumForgePlus",
    icon: "/augment/TFT9_Augment_Commander_MediumForgePlus.png",
    name: "Job Well Done",
  },
  {
    apiName: "TFT6_Augment_Legend_TradeSector",
    icon: "/augment/TFT6_Augment_Legend_TradeSector.png",
    name: "Trade Sector",
  },
  {
    apiName: "TFT9_Augment_BattleReadyIII",
    icon: "/augment/TFT9_Augment_BattleReadyIII.png",
    name: "Battle Ready III",
  },
  {
    apiName: "TFT9_Augment_GiantGrabBag",
    icon: "/augment/TFT9_Augment_GiantGrabBag.png",
    name: "Giant Grab Bag",
  },
  {
    apiName: "TFT9_Augment_Legend_DravenSpoilsOfWar2",
    icon: "/augment/TFT9_Augment_Legend_DravenSpoilsOfWar2.png",
    name: "Spoils of War II",
  },
  {
    apiName: "TFT9_Augment_Legend_DravenSpoilsOfWar3",
    icon: "/augment/TFT9_Augment_Legend_DravenSpoilsOfWar3.png",
    name: "Spoils of War III",
  },
  {
    apiName: "TFT9_Augment_Commander_TinyPower1",
    icon: "/augment/TFT9_Augment_Commander_TinyPower1.png",
    name: "Tiny Power I",
  },
  {
    apiName: "TFT9_Augment_Commander_TinyPower3",
    icon: "/augment/TFT9_Augment_Commander_TinyPower3.png",
    name: "Tiny Power III",
  },
  {
    apiName: "TFT9_Augment_Commander_TinyPower2",
    icon: "/augment/TFT9_Augment_Commander_TinyPower2.png",
    name: "Tiny Power II",
  },
  {
    apiName: "TFT9_Augment_Legend_JeweledLotus",
    icon: "/augment/TFT9_Augment_Legend_JeweledLotus.png",
    name: "Jeweled Lotus II",
  },
  {
    apiName: "TFT9_Augment_Commander_Money2",
    icon: "/augment/TFT9_Augment_Commander_Money2.png",
    name: "Money Money!",
  },
  {
    apiName: "TFT9_Augment_Commander_LargeForgePlus",
    icon: "/augment/TFT9_Augment_Commander_LargeForgePlus.png",
    name: "Masterful Job",
  },
  {
    apiName: "TFT9_Augment_Commander_Money3",
    icon: "/augment/TFT9_Augment_Commander_Money3.png",
    name: "Money Money Money!",
  },
  {
    apiName: "TFT9_Augment_TopDeckPlus",
    icon: "/augment/TFT9_Augment_TopDeckPlus.png",
    name: "Training Reward II",
  },
  {
    apiName: "TFT9_Augment_ItemGrabBagPlus",
    icon: "/augment/TFT9_Augment_ItemGrabBagPlus.png",
    name: "Item Grab Bag II",
  },
  {
    apiName: "TFT7_Augment_Legend_TomeOfTraits2",
    icon: "/augment/TFT7_Augment_Legend_TomeOfTraits2.png",
    name: "Ancient Archives II",
  },
  {
    apiName: "TFT9_Augment_Legend_PumpingUp",
    icon: "/augment/TFT9_Augment_Legend_PumpingUp.png",
    name: "Pumping Up I",
  },
  {
    apiName: "TFT9_Augment_Commander_WellEarnedComforts2",
    icon: "/augment/TFT9_Augment_Commander_WellEarnedComforts2.png",
    name: "Well-Earned Comforts II",
  },
  {
    apiName: "TFT9_Augment_Commander_WellEarnedComforts3",
    icon: "/augment/TFT9_Augment_Commander_WellEarnedComforts3.png",
    name: "Well-Earned Comforts III",
  },
  {
    apiName: "TFT9_Augment_Legend_TransfusionPlusPlus",
    icon: "/augment/TFT9_Augment_Legend_TransfusionPlusPlus.png",
    name: "Transfusion III",
  },
  {
    apiName: "TFTTutorial_Augment_WithItemAS2",
    icon: "/augment/TFTTutorial_Augment_WithItemAS2.png",
    name: "Elite Vanguard",
  },
  {
    apiName: "TFTTutorial_Augment_AbilityPwr",
    icon: "/augment/TFTTutorial_Augment_AbilityPwr.png",
    name: "Tons of Stats!",
  },
  {
    apiName: "TFTTutorial_Augment_Mana",
    icon: "/augment/TFTTutorial_Augment_Mana.png",
    name: "Tons of Stats!",
  },
  {
    apiName: "TFTTutorial_Augment_Armor",
    icon: "/augment/TFTTutorial_Augment_Armor.png",
    name: "Tons of Stats!",
  },
  {
    apiName: "TFTTutorial_Augment_FrontRowHealth1",
    icon: "/augment/TFTTutorial_Augment_FrontRowHealth1.png",
    name: "Bulwark",
  },
  {
    apiName: "TFTTutorial_Augment_BackRowAS1",
    icon: "/augment/TFTTutorial_Augment_BackRowAS1.png",
    name: "Swift Strike",
  },
  {
    apiName: "TFTTutorial_Augment_WithoutItemAS2",
    icon: "/augment/TFTTutorial_Augment_WithoutItemAS2.png",
    name: "Unhindered",
  },
  {
    apiName: "TFTTutorial_Augment_AtkDmg",
    icon: "/augment/TFTTutorial_Augment_AtkDmg.png",
    name: "Tons of Stats!",
  },
  {
    apiName: "TFTTutorial_Augment_AtkSpeed",
    icon: "/augment/TFTTutorial_Augment_AtkSpeed.png",
    name: "Tons of Stats!",
  },
  {
    apiName: "TFTTutorial_Augment_WithItemHealth2",
    icon: "/augment/TFTTutorial_Augment_WithItemHealth2.png",
    name: "Cybernetic Mass",
  },
  {
    apiName: "TFTTutorial_Augment_MR",
    icon: "/augment/TFTTutorial_Augment_MR.png",
    name: "Tons of Stats!",
  },
  {
    apiName: "TFTTutorial_Augment_Health",
    icon: "/augment/TFTTutorial_Augment_Health.png",
    name: "Tons of Stats!",
  },
  {
    apiName: "TFTTutorial_Augment_FrontRowMana1",
    icon: "/augment/TFTTutorial_Augment_FrontRowMana1.png",
    name: "Splash Zone",
  },
  {
    apiName: "TFT10_Augment_RepetitiveRiffing",
    icon: "/augment/TFT10_Augment_RepetitiveRiffing.png",
    name: "Extended Play",
  },
  {
    apiName: "TFT10_Augment_PartyStarters",
    icon: "/augment/TFT10_Augment_PartyStarters.png",
    name: "Party Starters",
  },
  {
    apiName: "TFT10_Augment_Bedazzled",
    icon: "/augment/TFT10_Augment_Bedazzled.png",
    name: "The Ol' Razzle Dazzle",
  },
  {
    apiName: "TFT10_Augment_HighScore",
    icon: "/augment/TFT10_Augment_HighScore.png",
    name: "Mesmerizing Performance",
  },
  {
    apiName: "TFT10_Augment_TheDrop",
    icon: "/augment/TFT10_Augment_TheDrop.png",
    name: "The Drop",
  },
  {
    apiName: "TFT10_Augment_LiveForDanger",
    icon: "/augment/TFT10_Augment_LiveForDanger.png",
    name: "Live for Danger",
  },
  {
    apiName: "TFT10_Augment_ThatsJazzBaby",
    icon: "/augment/TFT10_Augment_ThatsJazzBaby.png",
    name: "That's Jazz, Baby!",
  },
  {
    apiName: "TFT10_Augment_GiveMeYourEnergy",
    icon: "/augment/TFT10_Augment_GiveMeYourEnergy.png",
    name: "Give Me Your Energy!",
  },
  {
    apiName: "TFT10_Augment_BiggerShot",
    icon: "/augment/TFT10_Augment_BiggerShot.png",
    name: "Bigger Shot",
  },
  {
    apiName: "TFT10_Augment_EmotionalConnection",
    icon: "/augment/TFT10_Augment_EmotionalConnection.png",
    name: "Emotional Connection",
  },
  {
    apiName: "TFT10_Augment_InsertCoin",
    icon: "/augment/TFT10_Augment_InsertCoin.png",
    name: "Insert Coin",
  },
  {
    apiName: "TFT10_Augment_EncoreHeadliner",
    icon: "/augment/TFT10_Augment_EncoreHeadliner.png",
    name: "Encore!",
  },
  {
    apiName: "TFT10_Augment_Executioner_ExposeWeakness",
    icon: "/augment/TFT10_Augment_Executioner_ExposeWeakness.png",
    name: "Expose Weakness",
  },
  {
    apiName: "TFT10_Augment_MesmerizingPerformance",
    icon: "/augment/TFT10_Augment_MesmerizingPerformance.png",
    name: "Share the Spotlight",
  },
  {
    apiName: "TFT10_Augment_HeartCollector",
    icon: "/augment/TFT10_Augment_HeartCollector.png",
    name: "Heartthrobs",
  },
  {
    apiName: "TFT10_Augment_Superfan_ForTheFans",
    icon: "/augment/TFT10_Augment_Superfan_ForTheFans.png",
    name: "Do It for the Fans",
  },
  {
    apiName: "TFT10_Augment_GuardianHeroicPresence",
    icon: "/augment/TFT10_Augment_GuardianHeroicPresence.png",
    name: "Heroic Presence",
  },
  {
    apiName: "TFT10_Augment_RememberYourRoots",
    icon: "/augment/TFT10_Augment_RememberYourRoots.png",
    name: "Remember Your Roots",
  },
  {
    apiName: "TFT10_Augment_ColdSteel",
    icon: "/augment/TFT10_Augment_ColdSteel.png",
    name: "Cold Steel",
  },
  {
    apiName: "TFT10_Augment_RampingRhythm",
    icon: "/augment/TFT10_Augment_RampingRhythm.png",
    name: "Ramping Rhythm",
  },
  {
    apiName: "TFT10_Augment_EDMAugment",
    icon: "/augment/TFT10_Augment_EDMAugment.png",
    name: "Sample Synthesis",
  },
  {
    apiName: "TFT10_Augment_SpellweaverHalftimeShow",
    icon: "/augment/TFT10_Augment_SpellweaverHalftimeShow.png",
    name: "Raise the Tempo",
  },
  {
    apiName: "TFT10_Augment_Country_BountyHunters",
    icon: "/augment/TFT10_Augment_Country_BountyHunters.png",
    name: "Bounty Hunters",
  },
  {
    apiName: "TFT10_Augment_HeadlinerWoodlandCharm",
    icon: "/augment/TFT10_Augment_HeadlinerWoodlandCharm.png",
    name: "Hologram",
  },
  {
    apiName: "TFT10_Augment_BlingedOut",
    icon: "/augment/TFT10_Augment_BlingedOut.png",
    name: "Blinged Out",
  },
  {
    apiName: "TFT10_Augment_TalentSearch",
    icon: "/augment/TFT10_Augment_TalentSearch.png",
    name: "Talent Search",
  },
  {
    apiName: "TFT10_Augment_SubmitToThePit",
    icon: "/augment/TFT10_Augment_SubmitToThePit.png",
    name: "Submit to the Pit",
  },
  {
    apiName: "TFT10_Augment_TooBigToFail",
    icon: "/augment/TFT10_Augment_TooBigToFail.png",
    name: "Too Big to Fail",
  },
  {
    apiName: "TFT10_Augment_DoubleTheFunk",
    icon: "/augment/TFT10_Augment_DoubleTheFunk.png",
    name: "Double the Funk",
  },
  {
    apiName: "TFT10_Augment_MetalHeads",
    icon: "/augment/TFT10_Augment_MetalHeads.png",
    name: "Metalheads",
  },
] as const;

export type AugmentId = (typeof augmentDataArr)[number]["apiName"];

const augmentIds: [AugmentId, ...AugmentId[]] = [
  augmentDataArr[0].apiName,
  ...augmentDataArr.slice(1).map((data) => data.apiName),
];

export const AugmentIdSchema = z.enum(augmentIds);

const augmentData: Record<AugmentId, { icon: string; name: string }> =
  Object.fromEntries(
    augmentDataArr.map((data) => [
      data.apiName,
      { icon: data.icon, name: data.name },
    ]),
  ) as Record<AugmentId, { icon: string; name: string }>;
export default augmentData;
