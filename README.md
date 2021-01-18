# Tooltip Codemaker
 Creates tooltip localization code that works in conjuction with the tooltip generator.

# Requirements
The Tooltip Codemaker requires NodesJS to function properly. If you don't have it, or your version is old, get it [here](https://nodejs.org/en/).

# Installation
1. Clone the repo to your PC and extract it to a location of your choice (outside of your addon).
2. Go into the root folder of this repo. If you can see the `package.json` file, you're in the right place.
3. Click on the path bar of the folder, type "cmd" and press enter. This should open the command line on the folder you're currently in. If you're not sure where the path bar is, press Alt+D to highlight it.
4. In the command line, type `npm install` and press enter. Keep the command line open for now.

# Running the Tooltip Codemaker
1. Go into the `tooltip-codemaker` folder, then to the `localization` folder and delete the `addon_english.txt` file that resides there.
2. Put all your `addon_<language>.txt` files of your mode in this folder, for all the languages that you have localization for.
3. In the command line, type `cd tooltip-codemaker` to move to the tooltip codemaker's folder.
4. In the command line, type `node tooltip-codemaker.js` and press enter. 
5. The codemaker asks you for the primary language. This is the language that you have the most localization for. Make sure to enter it exactly the same as your `addon_<language>.txt` file, for instance type `spanish` for `addon_spanish.txt`. Defaults to `english` if nothing is typed into this field. Press enter to confirm.
6. If the script was successful, it will show you how many abilities, modifiers and standard tooltips it has processed. The output file is created inside the `tooltip-codemaker` folder.

# What now?
Assuming you installed the Tooltip Generator, put `outputCode.ts` into your addon's `resource/localization` folder. Open it and check if the editor shows any issues with the code. You might have to enable additional languages on the Tooltip Generator to have all your languages properly supported.

# What about the Tooltip Codemaker?
When you're done and you verified that it works as expected, you can just delete it. If you need it again in the future, just clone it again.
