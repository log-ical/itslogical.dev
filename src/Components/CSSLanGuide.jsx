import React from 'react';
import '../CSS/Home.css';


function LanGuide() {
	return(
		<>	
<div className="LanContent">
<h3>How To Create a CSS Bhop LAN server</h3>
    <p>1.) Prereqs</p>
    	<div className="LanData">
			First step to setting up a server is making sure you have the files to create that server. For this you'll need:<br/>

			<a href="https://developer.valvesoftware.com/wiki/SteamCMD" target="_blank">SteamCMD</a><br/>
			<a href="https://www.sourcemod.net/downloads.php?branch=stable" target="_blank">SourceMod</a><br/>
			<a href="https://www.metamodsource.net/downloads.php?branch=stable" target="_blank">MetaMod</a><br/>

			SteamCMD is going be the tool we will use to download the server files on to our machine -- essentially this is what allows us to create the server.<br/>
			MetaMod is a dependency of SourceMod, both of these are server modifications that will allow us to run plugins on our servers.<br/>
		</div>
    
	<p> 2.) Building the Server</p>
    	<div className="LanData">

			Take the SteamCMD.exe file that downloaded from the previous section and place it into its own folder, you can name this folder anything you please.<br/>
			At this point you can now open SteamCMD.exe and a window will appear, give the program a while to download the SteamCMD files then in your SteamCMD folder you'll see a bunch of files and folders,
			just ignore them :-). Wait until it has finished.<br/>
			<br/>
			If you closed out of your SteamCMD window open it back up, if not then type the following commands:<br/>
			<code>
			  login anonymous<br/>
			  force_install_dir ./css/
			</code><br/>
			You can change the name of css to anything you'd like as well, force_install_dir just creates a folder for where your server will be downloaded to.<br/>
			Next type in:<br/>
			<code>
			  app_update 232330 validate
			</code><br/>
			This will now download the CSS server files. 232330 is the App ID of the CSS dedicated server. If you were doing this for a different game you'd change that.<br/> 
			The download may take a while to finish, so sit back and relax. <br/>
			After it finishes, you can close out of SteamCMD; if you open the folder you did force_install_dir on, you'll find all of your server files.
    	</div>
    
	<p> 3.) Setting up SM/MM</p>
    	<div className="LanData">

			As stated from the first section, MM and SM are needed to run the pluings you need; make sure you download both SM and MM from the links in that section.<br/>
			In your server files, navigate to ./cstrike/.<br/>
			Extract the files from the SourceMod and MetaMod archives into ./cstrike/ in a way that after you are done you have created an ./cstrike/addons/ folder and
			added a folder called sourcemod into ./cstrike/config/ both with files/folders inside of them.<br/>
			<br/>
			Your file system should look *similar* as I haven't listed every file.<br/>
			If it doesn't... well... you messed up somewhere... probably.<br/>
			📂cstrike<br/>
			 ┣ 📂addons<br/>
			 ┃ ┣ 📂metamod<br/>
			 ┃ ┃ ┣ 📂bin<br/>
			 ┃ ┃ ┣ 📜metaplugins.ini<br/>
			 ┃ ┃ ┣ 📜README.txt<br/>
			 ┃ ┃ ┗ 📜sourcemod.vdf<br/>
			 ┃ ┣ 📂sourcemod<br/>
			 ┃ ┃ ┣ 📂bin<br/>
			 ┃ ┃ ┣ 📂configs<br/>
			 ┃ ┃ ┣ 📂data<br/>
			 ┃ ┃ ┣ 📂extensions<br/>
			 ┃ ┃ ┣ 📂gamedata<br/>
			 ┃ ┃ ┣ 📂logs<br/>
			 ┃ ┃ ┣ 📂plugins<br/>
			 ┃ ┃ ┣ 📂scripting<br/>
			 ┃ ┃ ┣ 📂translations<br/>
			 ┃ ┃ ┣ 📜GPLv2.txt<br/>
			 ┃ ┃ ┣ 📜GPLv3.txt<br/>
			 ┃ ┃ ┗ 📜LICENSE.txt<br/>
			 ┃ ┗ 📜metamod.vdf<br/>
			 ┣ 📂bin<br/>
			 ┣ 📂cfg<br/>
			 ┃ ┗ 📂sourcemod<br/>
			 ┣ 📂custom<br/>
			 ┣ 📂download<br/>
			 ┣ 📂maps<br/>
			 ┣ 📂media<br/>
			 ┣ 📂resource<br/>
			 ┣ 📜cstrike_pak.vpk.sound.cache<br/>
			 ┣ 📜cstrike_pak_000.vpk<br/>
			 ┣ 📜cstrike_pak_001.vpk<br/>
			 ┣ 📜cstrike_pak_002.vpk<br/>
			 ┣ 📜cstrike_pak_003.vpk<br/>
			 ┣ 📜cstrike_pak_004.vpk<br/>
			 ┣ 📜cstrike_pak_005.vpk<br/>
			 ┣ 📜cstrike_pak_006.vpk<br/>
			 ┣ 📜cstrike_pak_007.vpk<br/>
			 ┣ 📜cstrike_pak_008.vpk<br/>
			 ┣ 📜cstrike_pak_009.vpk<br/>
			 ┣ 📜cstrike_pak_010.vpk<br/>
			 ┣ 📜cstrike_pak_011.vpk<br/>
			 ┣ 📜cstrike_pak_012.vpk<br/>
			 ┣ 📜cstrike_pak_dir.vpk<br/>
			 ┣ 📜gameinfo.txt<br/>
			 ┗ 📜steam.inf<br/>
		</div>

    <p> 4.) Installing Plugins</p>
    	<div className="LanData">

			Now that you've installed SourceMod and MetaMod you're ready to begin installing plugins for your server. <br/>
			These are the plugins I recommend you install, however, feel free to use whatever plugins you want - the process is still the same.<br/>

			<a href="https://github.com/shavitush/bhoptimer/releases" target="_blank">bhoptimer (aka Shavit's or Shavit's Timer)</a><br/>
			<a href="https://forums.alliedmods.net/showthread.php?t=310825" target="_blank">RNG Fix</a><br/>
			<a href="https://github.com/hermansimensen/eventqueue-fix/releases/tag/1.0" target="_blank">Event Queue Fix</a><br/>
			<a href="https://github.com/neko-pm/ssj" target="_blank">SSJ: Advanced</a><br/>
			<a href="https://github.com/blankbhop/jhud" target="_blank">JHUD</a><br/>
			<a href="https://github.com/PaxPlay/bhop-strafe-trainer" target="_blank">Strafe Trainer</a><br/>

			Once you have downloaded the plugin you want to install you want to check for how the plugin is organized in the folder.<br/>
			Some plugins when downloaded will just give you the pluginname.smx, if thats the case just place that .smx file into the
			plugins folder under ./cstrike/addons/sourcemod/ but others can do things differently.<br/>
			<br/>
			For shavits when you download it you'll be given a folder that will look like<br/>

			📂bhoptimer-vX.X.X<br/>
			 ┣ 📂addons<br/>
			 ┣ 📂maps<br/>
			 ┣ 📂materials<br/>
			 ┣ 📂sound<br/>
			 ┗ 📜README.txt<br/>

			You want to copy everything inside of bhoptimer-vX.X.X and place it in your ./cstrike/ folder, you can skip README.txt.<br/>
			If you get the option to replace something just accept.<br/>
			<br/>
			For plugins like SSJ: Advanced you are presented with:<br/>

			📂ssj-master<br/>
			 ┣ 📂plugins<br/>
			 ┣ 📂scripting<br/>
			 ┣ 📜.travis.yml<br/>
			 ┣ 📜README.md<br/>
			 ┗ 📜smbuild<br/>

			All you need to do for this is take the ssj.smx inside of ssj-master/plugins/ and copy it to your ./cstrike/addons/sourcemod/plugins folder.<br/>
			You should also take the sourcecode which is everything inside of the scripting folder and copy it to your own scripting folder under ./cstrike/addons/sourcemod/scripting.<br/>

			Follow this same process for any other plugins you want to install. <br/>
		</div>

    <p> 5.) Tickrate</p>
    	<div className="LanData">

			<a href="https://github.com/daemon32/tickrate_enabler/releases/download/0.5-100tick/Tickrate_Enabler_100tick_win32.zip" target="_blank">Tickrate Enabler 100tick</a><br/>
			Having 100 tickrate is pretty important if you want to run a normal server. CSS runs at 66 tick by default, using this will force it to 100 tick.<br/>
			<br/>
			To install just copy everything in the addons folder into your own addons folder under ./cstrike/. Your new addons folder should look like:<br/>

			📂addons<br/>
			 ┣ 📂metamod<br/>
			 ┣ 📂sourcemod<br/>
			 ┣ 📜metamod.vdf<br/>
			 ┣ 📜Tickrate_Enabler_100tick.dll<br/>
			 ┗ 📜Tickrate_Enabler_100tick.vdf<br/>
		</div>

    <p> 6.) Running the Server</p>
    	<div className="LanData">

			You have a few different options to run the server, but the first step is always the same. Begin by in your server folder,
			this is the one that has srcds.exe. Create a file and call it run.bat.<br/>

			<a href="https://developer.valvesoftware.com/wiki/Command_Line_Options#Source_Dedicated_Server" target="_blank">Source Command Line Parameters</a><br/>

			You have a lot of options to choose from, but they all begin with:<br/>
			<code>
			  start srcds.exe -game cstrike
			</code><br/>
			I recomended adding <code>-insecure</code> and <code>-console</code> to your run.bat file.<br/>
			-insecure makes it to the server is running without vac enabled, this probably wont effect you at all, but it is something that I like putting in my files, 
			and it's something you need if you are using BunnyhopAPE.<br/>
			-console makes the server run inside a command prompt windows instead of ancient (not to mention buggy) valve software. <br/>
			<br/>
			<b>NOTE: If you use -console you MUST add a map parameter in your run.bat or autoexec.cfg, read on if you wish to learn how to make an autoexec.cfg, if not skip until after the code block </b>
			To make an autoexec.cfg locate to ./cstrike/cfg/, when there you want to make a new text file called autoexec.cfg. Open that text file in notepad and put in <code>map de_dust2</code>. Obviously
			replace de_dust2 with any map that is on your server.<br/>
			<br/>
			If you add those two parameters, your run.bat should look like: <br/>
			<code>
			  start srcds.exe -game cstrike -insecure -console +map de_dust2<br/>
			</code>
			<h5>Keep in mind that you should change de_dust2 a map thats not only on the server but a map that you want the server to start on. For example if I have bhop_bfur on my server but
			not de_dust2, I shouldn't put de_dust2 but I should put bhop_bfur. You do not need +map if you are using the autoexec.cfg method.</h5>
				or<br/>
			<code>
			  start srcds.exe -game cstrike -insecure
			</code><br/>
			Once you want to start your server, simply run your run.bat file and wait for the server to start. When you open Source it will appear under the LAN tab.<br/>
		</div>

    <p> 7.) Configuration</p>
    	<div className="LanData">
			There are two different places where configuration files appear, ./cstrike/cfg/ and ./cstrike/addons/sourcemod/configs/. Any config files under sourcemod are for plugins,
			anything outside are for your server. (If you curious, the files under ./cstrike/cfg/ are for convars, the other ones are for specific plugin settings) <br/>
			<br/>
			There is a .cfg file you do need to change.
			<br/>
			<code>admins.cfg</code> under cstrike/addons/sourcemod/configs/ is that one. Inside the file, if you 
			scroll to the bottom, there is going to be a section that has Admins. You want to make yourself an admin
			so you can create zones and access commands (You could change other config files to do the same thing but this is the easist way in my opinion).<br/>
			You want to use a format like this:<br/>
			<code>
			Admins<br/>
			&#123;<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"logical"<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"auth"			"steam"<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"identity"		"STEAM_0:1:107793987"<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"flags"			"z"<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
			&#125;<br/>
			</code><br/>
			You can change "logical" to your name, and you want to change the steamid under "identity" to your own steamid. The z flag is ADMFLAG_ROOT which means you have total control over everything.
			Now save admins.cfg and you are all set with this file.<br/>
			<br/>
			If you wish to change any other .cfg files feel free too, but they aren't needed to get you hopping.
    	</div>

    <p> 8.) Maps</p>
    	<div className="LanData">

			Okay, so you have your server running, cool... but--you still need bhop maps to play.<br/>
			The best place to find maps is gamebanana, you can go to https://gamebanana.com/maps/cats/2976 which is CS:S Bhop maps section and download the ones you like. 
			Your next best option is to going to a servers FastDL and downloading the maps you want. Currently the largest collection of maps that I know of
			is http://sojourner.me/fastdl/maps/. Alternativly, you can talk to a server owner and ask them for their servers FastDL where you can download maps from.
			<br/><br/>
			After you have all your maps downloaded go into your server files under ./cstrike/maps and remove all of the DE and CS maps, along with test_speakers and test_hardware. Then copy all of the .bsp files
			into the server. Keep in mind if you are using the <code>+map</code> in run.bat or <code>map</code> in autoexec.cfg you need to make sure that the map that is there is one of the maps you
			placed into the server. If the map that you put in the file isn't there the server will not show up.
			<br/><br/>
			Open CSS after you start run.bat and go to your LAN tab in servers, there you will find your server. 
			<br/><br/>
			Now, G. We hoppin' today? And be honest.
    	</div>
</div>
		</>
	)	
}

export default LanGuide;