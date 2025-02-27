---
title: 'Save'
sub: 'PSX Memory Card'
img: /_assets/img/extras/card-save.png
file: /_assets/files/save-legend-of-mana-usa.zip
tags:
  - extras
eleventyNavigation:
  key: 'Save File'
  hash: /extras/#save
  parent: Extras
  order: 3
date: 0003-00-00
---

## Save Info { .heading }

- 2 save slots: New Game+ as well a save right before the final event.
- Custom-forged 1H Sword (101 power).
- Polterbox pet (for item farming).
- All the Workshops unlocked (their respective quests recorded in the cactus diary).
- All level ups had the 1H sword equipped so you can continue the levels using a [max-stats guide](/walkthrough/get-started/#start-stats) if you choose.
- Character name is _Chumpy_, so you can say "Yes" to the Onion Knight ;)

## [OpenEmu](http://openemu.org/) { .heading }

1. Start the game at least once so OpenEmu can create a blank memory card.
2. Quit the game and quit OpenEmu.
3. Rename the downloaded `Legend of Mana (USA).mcr` to the same name as the file located here:

```bash
~/Library/Application Support/OpenEmu/Mednafen/Battery Saves/Legend of Mana (USA).{SOME_UNIQUE_ID}.0.mcr
```

4. Replace the file in your `~/Library...` with this newly renamed file.

## [RetroArch](http://retroarch.com/) / [RetroPie](https://retropie.org.uk/) { .heading }

Rename the downloaded `Legend of Mana (USA).mcr` to the same name as your **.cue**, **.bin**, **.iso**, etc. and copy it to the same place (you may have to change the extension to **.srm** as required by the core being used). Depending on how you have RetroArch set up you may have to copy the file to `~/retroarch/saves/`

## __PSP / PS Vita / PSTV__ { .heading }

This is a tricky one as you need to convert the .mcr to .vmp.

### Easy

Use [vita-mcr2vmp](https://github.com/dots-tb/vita-mcr2vmp).

### Difficult

CFW **and** a PSP plugin called [CWCheat](http://google.com/search?q=psp+cwcheat).

1. Rename the `Legend of Mana (USA).mcr` to `SLUS_01013-0.mcr`.
2. Upload/copy the save file to your memory card at `/seplugins/cwcheat/mc/` (on Vita this is located in `ux0:pspemu`).
3. Load up the game (if you are on Vita/PSTV load the game via Adrenaline).
4. Bring up the CWCheat menu (hold select when the game is fully loaded).
5. Choose "Manage Memory Cards", and import the memory card using the instructions on screen.
