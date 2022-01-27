---
id: 83787c0a-339f-4192-aeaa-91099d273d68
blueprint: extras
title: 'Save File'
subtext: 'PSX Memory Card'
image: img/extras/card-save.png
link: /workspace/theme/files/save-legend-of-mana-usa.zip
updated_by: ea6393ed-5c2e-4abf-b78d-80b9488e0102
updated_at: 1643048254
---
### Details

* 2 save slots: New Game+ as well a save right before the final event.
* Custom-forged 1H Sword (101 power).
* Polterbox pet (for item farming).
* All the Workshops unlocked (their respective quests recorded in the cactus diary).
* All level ups had the 1H sword equipped so you can continue the levels using a [max-stats guide](/walkthrough/starting-instructions/#start-stats) if you choose.
* Character name: __Chumpy__, so you can say "Yes" to the Onion Knight ;)

$$$ Instructions

* [__OpenEmu__](http://openemu.org/)
Start the game at least once so OpenEmu can create a blank memory card. Quit the game and quit OpenEmu. Rename the downloaded *Legend of Mana (USA).mcr* to the name located at `~/Library/Application Support/OpenEmu/Mednafen/Battery Saves/Legend of Mana....0.mcr` and replace that file with the newly renamed file.

* [__RetroArch__](http://retroarch.com/) / [__RetroPie__](https://retropie.org.uk/)
Rename the downloaded `Legend of Mana (USA).mcr` to the same name as your .cue, .bin, .iso, etc. and copy it to the same place (you may have to change the extension to .srm as required by the core being used). Depending on how you have RetroArch set up you may have to copy the file to `~/retroarch/saves/`

* __PSP(PlayStation Portable) / PS Vita / PSTV(PlayStation TV)__
This is a tricky one as you need to convert the .mcr to .vmp. The *easiest way* to do that is with [vita-mcr2vmp](https://github.com/dots-tb/vita-mcr2vmp).
* The __hardest way__ is with CFW __and__ a PSP plugin called [CWCheat](http://google.com/search?q=psp+cwcheat).
  * Rename the `Legend of Mana (USA).mcr` to `SLUS_01013-0.mcr`.
  * Upload/copy the save file to your memory card at `/seplugins/cwcheat/mc/` (on Vita this is located in `ux0:pspemu`).
  * Load up the game (if you are on Vita/PSTV load the game via Adrenaline).
  * Bring up the CWCheat menu (hold select when the game is fully loaded).
  * Choose "Manage Memory Cards", and import the memory card using the instructions on screen.