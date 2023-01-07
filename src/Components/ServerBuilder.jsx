import React from 'react'
import { ToggleSwitch } from './Utilities/ToggleSwitch'
import { InputBox } from './Utilities/InputBox'
import { Footer } from './Utilities/Footer'
import {BuildButton } from './Utilities/Button'
const JSZip = require('jszip');
import { saveAs } from 'file-saver';
import '../CSS/ServerBuilder.css'
import { sm1_10_linux, sm1_10_win, sm1_11_win, sm1_11_linux} from './ServerBuilderPathData.jsx'


// This is not my great work, but it works.
// I will clean it up at a later date.


function ServerBuilder() {
    const [win_value, win_setValue] = React.useState(false);
    const [linux_value, linux_setValue] = React.useState(true);
    const [sm1_11_value, sm1_11_setValue] = React.useState(true);
    const [sm1_10_value, sm1_10_setValue] = React.useState(false);
    const [tickrate_value, tickrate_setValue] = React.useState(true);
    const [shavit_value, shavit_setValue] = React.useState(true);
    const [fjt_value, fjt_setValue] = React.useState(true);
    const [eqf_value, eqf_setValue] = React.useState(true);
    const [mom_value, mom_setValue] = React.useState(true);
    const [rng_value, rng_setValue] = React.useState(true);
    const [etf_value, etf_setValue] = React.useState(true);
    const [hbf_value, hbf_setValue] = React.useState(true);
    const [sound_value, sound_setValue] = React.useState(true);
    const [clips_value, clips_setValue] = React.useState(true);
    const [triggers_value, triggers_setValue] = React.useState(true);
    const [paint_value, paint_setValue] = React.useState(true);
    const [bash2_value, bash2_setValue] = React.useState(true);
    const [mbh_value, mbh_setValue] = React.useState(true);
    const [ssj_value, ssj_setValue] = React.useState(true);
    const [strafet_value, strafet_setValue] = React.useState(true);
    const [jhud_value, jhud_setValue] = React.useState(true);
    const [noslide_value, noslide_setValue] = React.useState(true);
    const [landfix_value, landfix_setValue] = React.useState(true);
    const [sgtf_value, sgtf_setValue] = React.useState(true);
    const [clc_voicedata_value, clc_voicedata_setValue] = React.useState(false);
    const [maplister_value, maplister_setValue] = React.useState(false);
    
    const [console_value, console_setValue] = React.useState(true);
    const [insecure_value, insecure_setValue] = React.useState(false);
    let [gslt_value, gslt_setValue] = React.useState("");
    let [map_value, map_setValue] = React.useState("");

    let [srvname_text, srvname_setText] = React.useState("");
    let [rcon_text, rcon_setText] = React.useState("");
    let [srvpw_text, srvpw_setText] = React.useState("");
    let [tags_text, tags_setText] = React.useState("");

    let [admins, admins_setAdmins] = React.useState([{
        name: "log-ical (Example)",
        steamid: "STEAM_0:1:107793987",
        flags: "z",
        inc: false,
    }]);

    let [adminname_text, adminname_setText] = React.useState("");
    let [adminsteamid_text, adminsteamid_setText] = React.useState("");
    let [adminflags_text, adminflags_setText] = React.useState("");

    const [BBlabel_value, BBsetLabel] = React.useState("Build");
    const [BBcolor_value, BBsetColor] = React.useState("#070");
    return (
        <>
        <div className="main_content">
            <div className="content_builder">
            CS:S Server Builder v0.1.0<br/>
            <h2>Disclaimer: Some plugins may be out of date.</h2>
                <h3>Server</h3>
                    <h4>Operating System</h4>
                        <ToggleSwitch 
                            label="Windows"
                            isOn={win_value}
                            onColor="#070"
                            handleToggle={() => {
                                    win_setValue(!win_value);
                                    linux_setValue(!linux_value)
                            }}
                        />
                        <ToggleSwitch 
                            label="Linux"
                            isOn={linux_value}
                            onColor="#070"
                            handleToggle={() => {
                                    linux_setValue(!linux_value);
                                    win_setValue(!win_value)
                            }}
                        />
                    <h4>Mods</h4>
                        <ToggleSwitch 
                            label="MetaMod + SourceMod 1.11"
                            isOn={sm1_11_value}
                            onColor="#070"
                            handleToggle={() => {
                                    sm1_11_setValue(!sm1_11_value);
                                    sm1_10_setValue(!sm1_10_value)
                            }}
                        />
                        <ToggleSwitch 
                            label="MetaMod + SourceMod 1.10"
                            desc="Warning: Plugins compiled with SM 1.11+ will not work with this version of SourceMod."
                            isOn={sm1_10_value}
                            onColor="#FF8C00"
                            handleToggle={() => {
                                    sm1_11_setValue(!sm1_11_value);
                                    sm1_10_setValue(!sm1_10_value)
                            }}
                        />
                    <h4>Enablers</h4>
                    <ToggleSwitch 
                        label="100 Tickrate Enabler"
                        isOn={tickrate_value}
                        onColor="#070"
                        handleToggle={() => tickrate_setValue(!tickrate_value)}
                    />
                    <br/>
                <h3>Plugins</h3>
                    <h4>Timer</h4>
                        <ToggleSwitch 
                            label="Bhop Timer a.k.a Shavit's Timer"
                            isOn={shavit_value}
                            onColor="#070"
                            handleToggle={() => shavit_setValue(!shavit_value)}
                        />
                    <h4>Fixes</h4>
                        <ToggleSwitch 
                            label="Event Queue Fix"
                            isOn={eqf_value}
                            onColor="#070"
                            handleToggle={() => eqf_setValue(!eqf_value)}
                        />
                        <ToggleSwitch 
                            label="Momentum Surf Fix"
                            isOn={mom_value}
                            onColor="#070"
                            handleToggle={() => mom_setValue(!mom_value)}
                        />
                        <ToggleSwitch 
                            label="RNG Fix"
                            isOn={rng_value}
                            onColor="#070"
                            handleToggle={() => rng_setValue(!rng_value)}
                        />
                        <ToggleSwitch 
                            label="End Touch Fix"
                            isOn={etf_value}
                            onColor="#070"
                            handleToggle={() => etf_setValue(!etf_value)}
                        />
                        <ToggleSwitch 
                            label="Head Bug Fix"
                            isOn={hbf_value}
                            onColor="#070"
                            handleToggle={() => hbf_setValue(!hbf_value)}
                        />
                        <ToggleSwitch 
                            label="Landfix"
                            isOn={landfix_value}
                            onColor="#070"
                            handleToggle={() => landfix_setValue(!landfix_value)}
                        />
                    <h4>Exploit Patches</h4>
                        <ToggleSwitch 
                            label="spec_goto Crash Fix"
                            isOn={sgtf_value}
                            onColor="#070"
                            handleToggle={() => sgtf_setValue(!sgtf_value)}
                        />
                        <ToggleSwitch 
                            label="CLC_VoiceData Buffer Overflow Fix"
                            desc="Experimental plugin that requires end user configuration. SM 1.11+ only."
                            isOn={clc_voicedata_value}
                            onColor="#FF8C00"
                            handleToggle={() => clc_voicedata_setValue(!clc_voicedata_value)}
                        />
                    <h4>Utility</h4>
                        <ToggleSwitch 
                            label="First Jump Tick"
                            isOn={fjt_value}
                            onColor="#070"
                            handleToggle={() => fjt_setValue(!fjt_value)}
                        />
                        <ToggleSwitch 
                            label="Sound Manager"
                            isOn={sound_value}
                            onColor="#070"
                            handleToggle={() => sound_setValue(!sound_value)}
                        />
                        <ToggleSwitch 
                            label="Paint"
                            isOn={paint_value}
                            onColor="#070"
                            handleToggle={() => paint_setValue(!paint_value)}
                        />
                        <ToggleSwitch 
                            label="Multi Bhop"
                            isOn={mbh_value}
                            onColor="#070"
                            handleToggle={() => mbh_setValue(!mbh_value)}
                        />
                        <ToggleSwitch 
                            label="No Slide"
                            isOn={noslide_value}
                            onColor="#070"
                            handleToggle={() => noslide_setValue(!noslide_value)}
                        />
                    <h4>Server Utilities</h4>
                        <ToggleSwitch 
                            label="Map Lister"
                            isOn={maplister_value}
                            onColor="#070"
                            handleToggle={() => maplister_setValue(!maplister_value)}
                        />
                    <h4>UI</h4>
                        <ToggleSwitch 
                            label="Show Player Clips"
                            isOn={clips_value}
                            onColor="#070"
                            handleToggle={() => clips_setValue(!clips_value)}
                        />
                        <ToggleSwitch 
                            label="Show Triggers"
                            isOn={triggers_value}
                            onColor="#070"
                            handleToggle={() => triggers_setValue(!triggers_value)}
                        />

                        <ToggleSwitch 
                            label="SSJ"
                            isOn={ssj_value}
                            onColor="#070"
                            handleToggle={() => ssj_setValue(!ssj_value)}
                        />
                        <ToggleSwitch 
                            label="JHUD"
                            isOn={jhud_value}
                            onColor="#070"
                            handleToggle={() => jhud_setValue(!jhud_value)}
                        />
                        <ToggleSwitch 
                            label="Strafe Trainer"
                            isOn={strafet_value}
                            onColor="#070"
                            handleToggle={() => strafet_setValue(!strafet_value)}
                        />
                    <h4>Anti-Cheats</h4>
                        <ToggleSwitch 
                            label="BASH 2.0"
                            isOn={bash2_value}
                            onColor="#070"
                            handleToggle={() => {
                                bash2_setValue(!bash2_value);
                                }}
                        />
                <br/>
                <h3>Run Script</h3>
                    <ToggleSwitch
                        label="-console"
                        isOn={console_value}
                        onColor="#070"
                        handleToggle={() => console_setValue(!console_value)}
                    />
                    <ToggleSwitch
                        label="-insecure"
                        isOn={insecure_value}
                        onColor="#070"
                        handleToggle={() => insecure_setValue(!insecure_value)}
                    />
                    <InputBox
                        label="+sv_setsteamaccount"
                        text={gslt_value}
                        handleChange={text => {gslt_setValue(text); gslt_value = text}}
                    />
                    <InputBox
                        label="+map"
                        text={map_value}
                        handleChange={text => {map_setValue(text); map_value = text}}
                    />
                <h3>Server Config</h3>
                    <InputBox
                        label="Server Name"
                        text={srvname_text}
                        handleChange={text => {srvname_setText(text); srvname_text = text;}}
                    />
                    <InputBox
                        label="RCon Password"
                        text={rcon_text}
                        handleChange={text => {rcon_setText(text); rcon_text = text;}}
                    />
                    <InputBox
                        label="Server Password"
                        text={srvpw_text}
                        handleChange={text => {srvpw_setText(text); srvpw_text = text;}}
                    />
                    <InputBox
                        label="Tags"
                        text={tags_text}
                        handleChange={text => {tags_setText(text); tags_text = text;}}
                    />
                    <BuildButton
                        label="Randomize RCon"
                        color="#070"
                        onChange={() => {
                            rcon_setText(makeRcon(9));
                        }}
                    />
                <br/>
                <h3>Admin Config</h3>
                    <div className="adminGroup">
                        {
                            admins.map((admin, index) => {
                                if(admin.name == undefined || admin.name == "" || admin.steamid == undefined || admin.steamid == "" || admin.flags == undefined|| admin.flags == "") {
                                    if(admin.name && admin.steamid && !admin.flags) {
                                        return(
                                        <div className="adminInfoWarning2" key={index}>
                                            Admin: {admin.name}<br/>
                                            Steam ID: {admin.steamid}<br/>
                                            Flags: {admin.flags}<br/>
                                            ————————Warning: Missing Flags———————<br/>
                                            Client will not have any special privileges 
                                        </div>
                                        )
                                    }
                                    
                                    return(
                                        <div className="adminInfoWarning" key={index}>
                                            Admin: {admin.name}<br/>
                                            Steam ID: {admin.steamid}<br/>
                                            Flags: {admin.flags}<br/>
                                            ————————Warning: Missing Information———————<br/>
                                            Fill in missing information or entry will not be added

                                        </div>
                                    )
                                }
                                return (
                                    <div className="adminInfo" key={index}>
                                        Admin: {admin.name}<br/>
                                        Steam ID: {admin.steamid}<br/>
                                        Flags: {admin.flags}<br/>
                                    </div>
                                )    
                            })
                        }

                    </div>

                    

                    <InputBox
                        label="Admin Name"
                        handleChange={text => {adminname_setText(text); adminname_text = text;}}
                    />
                    <InputBox
                        label="Steam ID"
                        handleChange={text => {adminsteamid_setText(text); adminsteamid_text = text;}}
                    />
                    <InputBox
                        label="flags"
                        handleChange={text => {adminflags_setText(text); adminflags_text = text;}}
                    />
                    
                    <BuildButton
                        label="Add Admin"
                        color="#070"
                        onChange={() => {
                            admins_setAdmins([...admins, {name: adminname_text, steamid: adminsteamid_text, flags: adminflags_text, inc: true}]);
                        }}
                    />
                    <BuildButton
                        label="Remove Admin"
                        color="#ff0000"
                        onChange={() => {
                            admins_setAdmins((admins) => admins.filter((_, i) => i !== admins.length - 1));
                        }}
                    />
                <h3>Build</h3>
                    <BuildButton
                        label={BBlabel_value}
                        color={BBcolor_value}
                        onChange={() => {
                            BBsetColor("#040")
                            BBsetLabel("Building...")
                            const zip = new JSZip();
                            
                            zip.file("README.txt", DownloadFile("README.txt"));
                            //I don't like if statements... 
                            if(linux_value)
                            {
                                zip.file("server/run.sh", buildRun(linux_value, console_value, insecure_value, map_value, gslt_value, tickrate_value))

                                zip.file("server/cstrike/addons/metamod.vdf", DownloadFile("metamod-linux/metamod.vdf"));
                                zip.file("server/cstrike/addons/metamod_x64.vdf", DownloadFile("metamod-linux/metamod_x64.vdf"));
                                zip.file("server/cstrike/addons/metamod/metaplugins.ini", DownloadFile("metamod-linux/metamod/metaplugins.ini"));
                                zip.file("server/cstrike/addons/metamod/README.txt", DownloadFile("metamod-linux/metamod/README.txt"));
                                zip.file("server/cstrike/addons/metamod/bin/linux64/metamod.2.csgo.so", DownloadFile("metamod-linux/metamod/bin/linux64/metamod.2.csgo.so"));
                                zip.file("server/cstrike/addons/metamod/bin/linux64/server.so", DownloadFile("metamod-linux/metamod/bin/linux64/server.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.bms.so", DownloadFile("metamod-linux/metamod/bin/metamod.2.bms.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.csgo.so", DownloadFile("metamod-linux/metamod/bin/metamod.2.csgo.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.css.so", DownloadFile("metamod-linux/metamod/bin/metamod.2.css.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.dods.so", DownloadFile("metamod-linux/metamod/bin/metamod.dods.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.doi.so", DownloadFile("metamod-linux/metamod/bin/metamod.doi.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.ep1.so", DownloadFile("metamod-linux/metamod/bin/ep1.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.ep2.so", DownloadFile("metamod-linux/metamod/bin/ep2.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.hl2dm.so", DownloadFile("metamod-linux/metamod/bin/hl2dm.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.insurgency.so", DownloadFile("metamod-linux/metamod/bin/insurgency.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.l4d.so", DownloadFile("metamod-linux/metamod/bin/l4d.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.l4d2.so", DownloadFile("metamod-linux/metamod/bin/l4d2.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.nd.so", DownloadFile("metamod-linux/metamod/bin/nd.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.sdk2013.so", DownloadFile("metamod-linux/metamod/bin/sdk2013.so"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.tf2.so", DownloadFile("metamod-linux/metamod/bin/tf2.so"));
                                zip.file("server/cstrike/addons/metamod/bin/server_i486.so", DownloadFile("metamod-linux/metamod/bin/server_i486.so"));
                                zip.file("server/cstrike/addons/metamod/bin/server.so", DownloadFile("metamod-linux/metamod/bin/server.so"));

                                if(sm1_11_value){
                                    sm1_11_linux.forEach((file)=>{
                                        zip.file("server/cstrike/"+file, DownloadFile("sourcemod-1.11.0-git6842-linux/"+file));
                                    })
                                }
                                else{ //1.10
                                    sm1_10_linux.forEach((file)=>{
                                        zip.file("server/cstrike/"+file, DownloadFile("sourcemod-1.10.0-git6528-linux/"+file));
                                    })
                                }
                                if(tickrate_value){
                                    zip.file("server/cstrike/addons/Tickrate_Enabler.so", DownloadFile("Tickrate_Enabler_linx86/addons/Tickrate_Enabler.so"));
                                    zip.file("server/cstrike/addons/Tickrate_Enabler.vdf", DownloadFile("Tickrate_Enabler_win32/addons/Tickrate_Enabler.vdf"));
                                }
                            }
                            else //windows
                            {
                                zip.file("server/run.bat",buildRun(linux_value, console_value, insecure_value, map_value, gslt_value, tickrate_value))
                                zip.file("server/cstrike/addons/metamod_x64.vdf", DownloadFile("metamod-win/metamod_x64.vdf"));
                                zip.file("server/cstrike/addons/metamod.vdf", DownloadFile("metamod-win/metamod.vdf"));
                                zip.file("server/cstrike/addons/metamod/metaplugins.ini", DownloadFile("metamod-win/metamod/metaplugins.ini"));
                                zip.file("server/cstrike/addons/metamod/README.txt", DownloadFile("metamod-win/metamod/README.txt"));
                                zip.file("server/cstrike/addons/metamod/bin/win64/server.dll", DownloadFile("metamod-win/metamod/bin/win64/server.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.bgt.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.bgt.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.blade.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.blade.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.bms.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.bms.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.contagion.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.contagion.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.csgo.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.csgo.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.css.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.css.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.darkm.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.darkm.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.dods.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.dods.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.doi.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.doi.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.ep1.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.ep1.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.ep2.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.ep2.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.eye.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.eye.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.hl2dm.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.hl2dm.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.insurgency.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.insurgency.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.l4d.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.l4d.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.l4d2.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.l4d2.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.nd.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.nd.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.sdk2013.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.sdk2013.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.swarm.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.swarm.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/metamod.2.tf2.dll", DownloadFile("metamod-win/metamod/bin/metamod.2.tf2.dll"));
                                zip.file("server/cstrike/addons/metamod/bin/server.dll", DownloadFile("metamod-win/metamod/bin/server.dll"));
                                
                                if(sm1_11_value)
                                {
                                    sm1_11_win.forEach((file)=>{
                                        zip.file("server/cstrike/"+file, DownloadFile("sourcemod-1.11.0-git6837-windows/"+file));
                                    })
                                }
                                else{
                                    sm1_10_win.forEach((file)=>{
                                        zip.file("server/cstrike/"+file, DownloadFile("sourcemod-1.10.0-git6528-windows/"+file));
                                    })
                                }
                                if(tickrate_value){
                                    zip.file("server/cstrike/addons/Tickrate_Enabler.dll", DownloadFile("Tickrate_Enabler_win32/addons/Tickrate_Enabler.dll"));
                                    zip.file("server/cstrike/addons/Tickrate_Enabler.vdf", DownloadFile("Tickrate_Enabler_win32/addons/Tickrate_Enabler.vdf"));
                                }
                            }
                            if(shavit_value){
                                zip.file("server/cstrike/sound/shavit/copyrights.txt", DownloadFile("bhoptimer-v3.0.8/sound/shavit/copyrights.txt"));
                                zip.file("server/cstrike/sound/shavit/fr_1.mp3", DownloadFile("bhoptimer-v3.0.8/sound/shavit/fr_1.mp3"));
                                zip.file("server/cstrike/sound/shavit/pb_1.mp3", DownloadFile("bhoptimer-v3.0.8/sound/shavit/pb_1.mp3"));
                                zip.file("server/cstrike/sound/shavit/wr_1.mp3", DownloadFile("bhoptimer-v3.0.8/sound/shavit/wr_1.mp3"));
                                zip.file("server/cstrike/sound/shavit/wr_2.mp3", DownloadFile("bhoptimer-v3.0.8/sound/shavit/wr_2.mp3"));
                                zip.file("server/cstrike/sound/shavit/wr_3.mp3", DownloadFile("bhoptimer-v3.0.8/sound/shavit/wr_3.mp3"));
                                zip.file("server/cstrike/sound/shavit/wr_4.mp3", DownloadFile("bhoptimer-v3.0.8/sound/shavit/wr_4.mp3"));
                                zip.file("server/cstrike/materials/shavit/zone_beam_ignorez.vmt", DownloadFile("bhoptimer-v3.0.8/materials/shavit/zone_beam_ignorez.vmt"));
                                zip.file("server/cstrike/materials/shavit/zone_beam.vmt", DownloadFile("bhoptimer-v3.0.8/materials/shavit/zone_beam.vmt"));
                                zip.file("server/cstrike/materials/shavit/zone_beam.vtf", DownloadFile("bhoptimer-v3.0.8/materials/shavit/zone_beam.vtf"));
                                zip.file("server/cstrike/addons/sourcemod/translations/shavit-chat.phrases.txt", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/translations/shavit-chat.phrases.txt"));
                                zip.file("server/cstrike/addons/sourcemod/translations/shavit-common.phrases.txt", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/translations/shavit-common.phrases.txt"));
                                zip.file("server/cstrike/addons/sourcemod/translations/shavit-core.phrases.txt", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/translations/shavit-core.phrases.txt"));
                                zip.file("server/cstrike/addons/sourcemod/translations/shavit-hud.phrases.txt", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/translations/shavit-hud.phrases.txt"));
                                zip.file("server/cstrike/addons/sourcemod/translations/shavit-misc.phrases.txt", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/translations/shavit-misc.phrases.txt"));
                                zip.file("server/cstrike/addons/sourcemod/translations/shavit-rankings.phrases.txt", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/translations/shavit-rankings.phrases.txt"));
                                zip.file("server/cstrike/addons/sourcemod/translations/shavit-replay.phrases.txt", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/translations/shavit-replay.phrases.txt"));
                                zip.file("server/cstrike/addons/sourcemod/translations/shavit-stats.phrases.txt", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/translations/shavit-stats.phrases.txt"));
                                zip.file("server/cstrike/addons/sourcemod/translations/shavit-wr.phrases.txt", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/translations/shavit-wr.phrases.txt"));
                                zip.file("server/cstrike/addons/sourcemod/translations/shavit-zones.phrases.txt", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/translations/shavit-zones.phrases.txt"));
                                zip.file("server/cstrike/addons/sourcemod/gamedata/shavit.games.txt", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/gamedata/shavit.games.txt"));
                                zip.file("server/cstrike/addons/sourcemod/configs/shavit-advertisements.cfg", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/configs/shavit-advertisements.cfg"));
                                zip.file("server/cstrike/addons/sourcemod/configs/shavit-chat.cfg", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/configs/shavit-chat.cfg"));
                                zip.file("server/cstrike/addons/sourcemod/configs/shavit-chatsettings.cfg", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/configs/shavit-chatsettings.cfg"));
                                zip.file("server/cstrike/addons/sourcemod/configs/shavit-mapfixes.cfg", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/configs/shavit-mapfixes.cfg"));
                                zip.file("server/cstrike/addons/sourcemod/configs/shavit-messages.cfg", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/configs/shavit-messages.cfg"));
                                zip.file("server/cstrike/addons/sourcemod/configs/shavit-prefix.txt", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/configs/shavit-prefix.txt"));
                                zip.file("server/cstrike/addons/sourcemod/configs/shavit-readme.txt", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/configs/shavit-readme.txt"));
                                zip.file("server/cstrike/addons/sourcemod/configs/shavit-replay.cfg", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/configs/shavit-replay.cfg"));
                                zip.file("server/cstrike/addons/sourcemod/configs/shavit-sounds.cfg", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/configs/shavit-sounds.cfg"));
                                zip.file("server/cstrike/addons/sourcemod/configs/shavit-styles.cfg", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/configs/shavit-styles.cfg"));
                                zip.file("server/cstrike/addons/sourcemod/configs/shavit-zones.cfg", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/configs/shavit-zones.cfg"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/shavit-chat.smx", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/plugins/shavit-chat.smx"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/shavit-core.smx", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/plugins/shavit-core.smx"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/shavit-hud.smx", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/plugins/shavit-hud.smx"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/shavit-mapchooser.smx", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/plugins/shavit-mapchooser.smx"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/shavit-misc.smx", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/plugins/shavit-misc.smx"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/disabled/shavit-rankings.smx", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/plugins/shavit-rankings.smx"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/shavit-replay.smx", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/plugins/shavit-replay.smx"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/shavit-sounds.smx", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/plugins/shavit-sounds.smx"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/shavit-stats.smx", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/plugins/shavit-stats.smx"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/shavit-timelimit.smx", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/plugins/shavit-timelimit.smx"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/shavit-wr.smx", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/plugins/shavit-wr.smx"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/shavit-zones.smx", DownloadFile("bhoptimer-v3.0.8/addons/sourcemod/plugins/shavit-zones.smx"));
                            }
                            if(fjt_value){
                                zip.file("server/cstrike/addons/sourcemod/translations/shavit-firstjumptick.phrases.txt", DownloadFile("fjt/translations/shavit-firstjumptick.phrases.txt"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/shavit-firstjumptick.smx", DownloadFile("fjt/plugins/shavit-firstjumptick.smx"));
                            } 
                            if(eqf_value){
                                zip.file("server/cstrike/addons/sourcemod/gamedata/eventfix.games.txt", DownloadFile("eventqueuefix-1.2/gamedata/eventfix.games.txt"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/eventqueuefix.smx", DownloadFile("eventqueuefix-1.2/plugins/eventqueuefix.smx"));
                            }
                            if(mom_value){
                                zip.file("server/cstrike/addons/sourcemod/gamedata/momsurffix2.games.txt", DownloadFile("MomSurfFix2v1.1.3/addons/sourcemod/gamedata/momsurffix2.games.txt"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/momsurffix2.smx", DownloadFile("MomSurfFix2v1.1.3/addons/sourcemod/plugins/momsurffix2.smx"));
                            }
                            if(rng_value){
                                zip.file("server/cstrike/addons/sourcemod/gamedata/rngfix.games.txt", DownloadFile("rngfix_1.1.2d/gamedata/rngfix.games.txt"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/rngfix.smx", DownloadFile("rngfix_1.1.2d/plugins/rngfix.smx"));
                            }
                            if(etf_value){
                                zip.file("server/cstrike/addons/sourcemod/gamedata/endtouch.games.txt", DownloadFile("End-Touch-Fix/gamedata/endtouch.games.txt"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/EndTouchFix.smx", DownloadFile("End-Touch-Fix/plugins/EndTouchFix.smx"));
                            }
                            if(hbf_value){
                                zip.file("server/cstrike/addons/sourcemod/gamedata/headbugfix.games.txt", DownloadFile("headbugfix_1.0.0/addons/sourcemod/gamedata/headbugfix.games.txt"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/headbugfix.smx", DownloadFile("headbugfix_1.0.0/addons/sourcemod/plugins/headbugfix.smx"));
                            }
                            if(sound_value){
                                zip.file("server/cstrike/addons/sourcemod/gamedata/SoundManager.games.txt", DownloadFile("SoundManager-v1.0.1/addons/sourcemod/gamedata/SoundManager.games.txt"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/SoundManager.smx", DownloadFile("SoundManager-v1.0.1/addons/sourcemod/plugins/SoundManager.smx"));
                            }
                            if(clips_value){
                                zip.file("server/cstrike/addons/sourcemod/gamedata/showplayerclips.games.txt", DownloadFile("showplayerclips_1.1.1/addons/sourcemod/gamedata/showplayerclips.games.txt"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/showplayerclips.smx", DownloadFile("showplayerclips_1.1.1/addons/sourcemod/plugins/showplayerclips.smx"));
                                zip.file("server/cstrike/addons/sourcemod/translations/showplayerclips.phrases.txt", DownloadFile("showplayerclips_1.1.1/addons/sourcemod/translations/showplayerclips.phrases.txt"));
                            }
                            if(triggers_value){
                                zip.file("server/cstrike/addons/sourcemod/extensions/outputinfo.ext.2.csgo.dll", DownloadFile("showtriggers/addons/sourcemod/extensions/outputinfo.ext.2.csgo.dll"));
                                zip.file("server/cstrike/addons/sourcemod/extensions/outputinfo.ext.2.csgo.so", DownloadFile("showtriggers/addons/sourcemod/extensions/outputinfo.ext.2.csgo.so"));
                                zip.file("server/cstrike/addons/sourcemod/extensions/outputinfo.ext.dll", DownloadFile("showtriggers/addons/sourcemod/extensions/outputinfo.ext.2.sdk2013.dll"));
                                zip.file("server/cstrike/addons/sourcemod/extensions/outputinfo.ext.so", DownloadFile("showtriggers/addons/sourcemod/extensions/outputinfo.ext.2.sdk2013.so"));
                                zip.file("server/cstrike/addons/sourcemod/extensions/outputinfo.ext.2.tf2.dll", DownloadFile("showtriggers/addons/sourcemod/extensions/outputinfo.ext.2.tf2.dll"));
                                zip.file("server/cstrike/addons/sourcemod/extensions/outputinfo.ext.2.tf2.so", DownloadFile("showtriggers/addons/sourcemod/extensions/outputinfo.ext.2.tf2.so"));
                                zip.file("server/cstrike/addons/sourcemod/gamedata/outputinfo.games.txt", DownloadFile("showtriggers/addons/sourcemod/gamedata/outputinfo.games.txt"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/showtriggers.smx", DownloadFile("showtriggers/showtriggers.smx"));
                            }
                            if(paint_value){
                                zip.file("server/cstrike/addons/sourcemod/plugins/paint.smx", DownloadFile("paint/cstrike/addons/sourcemod/plugins/paint.smx"));
                                zip.file("server/cstrike/addons/sourcemod/scripting/paint.sp", DownloadFile("paint/cstrike/addons/sourcemod/scripting/paint.sp"));
                                zip.file("server/cstrike/materials/paint/paint_black_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_black_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_black_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_black_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_black.vmt", DownloadFile("paint/cstrike/materials/paint/paint_black.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_blue_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_blue_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_blue_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_blue_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_blue.vmt", DownloadFile("paint/cstrike/materials/paint/paint_blue.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_brown_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_brown_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_brown_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_brown_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_brown.vmt", DownloadFile("paint/cstrike/materials/paint/paint_brown.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_cyan_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_cyan_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_cyan_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_cyan_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_cyan.vmt", DownloadFile("paint/cstrike/materials/paint/paint_cyan.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_darkgreen_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_darkgreen_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_darkgreen_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_darkgreen_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_darkgreen.vmt", DownloadFile("paint/cstrike/materials/paint/paint_darkgreen.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_decal.vtf", DownloadFile("paint/cstrike/materials/paint/paint_decal.vtf"));
                                zip.file("server/cstrike/materials/paint/paint_green_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_green_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_green_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_green_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_green.vmt", DownloadFile("paint/cstrike/materials/paint/paint_green.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_lightblue_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_lightblue_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_lightblue_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_lightblue_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_lightblue.vmt", DownloadFile("paint/cstrike/materials/paint/paint_lightblue.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_lightpink_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_lightpink_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_lightpink_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_lightpink_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_lightpink.vmt", DownloadFile("paint/cstrike/materials/paint/paint_lightpink.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_orange_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_orange_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_orange_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_orange_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_orange.vmt", DownloadFile("paint/cstrike/materials/paint/paint_orange.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_pink_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_pink_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_pink_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_pink_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_pink.vmt", DownloadFile("paint/cstrike/materials/paint/paint_pink.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_purple_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_purple_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_purple_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_purple_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_purple.vmt", DownloadFile("paint/cstrike/materials/paint/paint_purple.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_red_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_red_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_red_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_red_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_red.vmt", DownloadFile("paint/cstrike/materials/paint/paint_red.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_white_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_white_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_white_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_white_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_white.vmt", DownloadFile("paint/cstrike/materials/paint/paint_white.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_yellow_large.vmt", DownloadFile("paint/cstrike/materials/paint/paint_yellow_large.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_yellow_med.vmt", DownloadFile("paint/cstrike/materials/paint/paint_yellow_med.vmt"));
                                zip.file("server/cstrike/materials/paint/paint_yellow.vmt", DownloadFile("paint/cstrike/materials/paint/paint_yellow.vmt"));
                            }
                            if(bash2_value){
                                zip.file("server/cstrike/addons/sourcemod/plugins/discord_api.smx", DownloadFile("discord_api.smx"));
                                zip.file("server/cstrike/addons/sourcemod/plugins/shavit-bash2.smx", DownloadFile("shavit-bash2.smx"));
                                zip.file("server/cstrike/addons/sourcemod/extensions/SteamWorks.ext.dll", DownloadFile("steamworks/SteamWorks.ext.dll"));
                                zip.file("server/cstrike/addons/sourcemod/extensions/SteamWorks.ext.so", DownloadFile("steamworks/SteamWorks.ext.so"));
                                zip.file("server/cstrike/addons/sourcemod/extensions/smjansson.ext.dll", DownloadFile("smjansson/smjansson.ext.dll"));
                                zip.file("server/cstrike/addons/sourcemod/extensions/smjansson.ext.so", DownloadFile("smjansson/smjansson.ext.so"));
                                
                            }
                            if(mbh_value)               zip.file("server/cstrike/addons/sourcemod/plugins/mpbhops_but_working.smx", DownloadFile("mpbhops_but_working.smx"));
                            if(ssj_value)               zip.file("server/cstrike/addons/sourcemod/plugins/ssj.smx", DownloadFile("ssj.smx"));
                            if(strafet_value)           zip.file("server/cstrike/addons/sourcemod/plugins/strafe_trainer.smx", DownloadFile("strafe_trainer.smx"));
                            if(jhud_value)              zip.file("server/cstrike/addons/sourcemod/plugins/jhud.smx", DownloadFile("jhud.smx"));
                            if(noslide_value)           zip.file("server/cstrike/addons/sourcemod/plugins/noslide.smx", DownloadFile("noslide.smx"));
                            if(landfix_value)           zip.file("server/cstrike/addons/sourcemod/plugins/landfix.smx", DownloadFile("landfix.smx"));
                            if(sgtf_value)              zip.file("server/cstrike/addons/sourcemod/plugins/specgotofix.smx", DownloadFile("specgotofix.smx"));
                            if(clc_voicedata_value)     zip.file("server/cstrike/addons/sourcemod/plugins/voice_overflow_fix.smx", DownloadFile("voice_overflow_fix.smx"));
                            if(maplister_value)         zip.file("server/cstrike/addons/sourcemod/plugins/maplister.smx", DownloadFile("maplister.smx"));
                            
                            //DHooks
                            if(eqf_value||hbf_value||mom_value||rng_value||bash2_value||shavit_value||clips_value||triggers_value||sound_value)
                            {
                                zip.file("server/cstrike/addons/sourcemod/extensions/dhooks.ext.dll", DownloadFile("dhooks/sourcemod/extensions/dhooks.ext.dll"));
                                zip.file("server/cstrike/addons/sourcemod/extensions/dhooks.ext.so", DownloadFile("dhooks/sourcemod/extensions/dhooks.ext.so"));
                                zip.file("server/cstrike/addons/sourcemod/gamedata/dhooks-test.games.txt", DownloadFile("dhooks/sourcemod/gamedata/dhooks-test.games.txt"));
                            }

                            zip.file("server/cstrike/addons/sourcemod/configs/admins.cfg", buildAdminConfig(admins));
                            zip.file("server/cstrike/cfg/server.cfg", buildServerConfig(srvname_text, rcon_text, srvpw_text, tags_text));
                            
                            zip.generateAsync({ type:"blob" })
                               .then(function(content) {
                                   BBsetColor("#030")
                                   BBsetLabel("Downloading...")
                                   window.setTimeout(() => {
                                       saveAs(content, "server.zip")
                                       BBsetColor("#070")
                                       BBsetLabel("Build")
                               }, 3000)
                            })
                           
                        }}
                    />
           </div>
        </div>


        <Footer>
            <span>"Building" may take a while, please be patient.</span>
        </Footer>
        </>
    )
}

async function DownloadFile(url){
    let file = await fetch(url)
        .then(r => r.blob())
        .then(blobFile => new File([blobFile], url))
    return file;
}

function buildAdminConfig(admins){
    let adminFormated = "";
    if(admins.length == 1 && admins[0].inc == false)
        return (`
/**
 * USE THIS SECTION TO DECLARE DETAILED ADMIN PROPERTIES.
 *
 * Each admin should have its own "Admin" section, followed by a name.
 * The name does not have to be unique.
 *
 * Available properties: (Anything else is filtered as custom)
 *      "auth"          - REQUIRED - Auth method to use.  Built-in methods are:
 *                        "steam"  - Steam based authentication
 *                        "name"   - Name based authentication
 *                        "ip"	- IP based authentication
 *                        Anything else is treated as custom.
 *					 Note: Only one auth method is allowed per entry.
 *
 *      "identity"      - REQUIRED - Identification string, for example, a steamid or name.
 *					 Note: Only one identity is allowed per entry.
 *
 *      "password"      - Optional password to require.
 *      "group"         - Adds one group to the user's group table.
 *      "flags"         - Adds one or more flags to the user's permissions.
 *		"immunity"		- Sets the user's immunity level (0 = no immunity).
 *						  Immunity can be any value.  Admins with higher 
 *						  values cannot be targetted.  See sm_immunity_mode 
 *						  to tweak the rules.  Default value is 0.
 *
 * Example:
    "BAILOPAN"
    {
        "auth"			"steam"
        "identity"		"STEAM_0:1:16"
        "flags"			"abcdef"
    }
 *
 */
Admins
{
}
`)
    admins.filter((x)=>x.inc && x.name && x.steamid).forEach((admin) =>{
        
        adminFormated += '\n"'+admin.name+'"\n'+"{\n"+'\t"auth"\t\t"steam"\n'+'\t"identity"\t\t'+'"'+admin.steamid+'"'+'\n' + '\t"flags"\t\t'+'"'+admin.flags+'"'+'\n}';
    })
    return(`
/**
 * USE THIS SECTION TO DECLARE DETAILED ADMIN PROPERTIES.
 *
 * Each admin should have its own "Admin" section, followed by a name.
 * The name does not have to be unique.
 *
 * Available properties: (Anything else is filtered as custom)
 *      "auth"          - REQUIRED - Auth method to use.  Built-in methods are:
 *                        "steam"  - Steam based authentication
 *                        "name"   - Name based authentication
 *                        "ip"	- IP based authentication
 *                        Anything else is treated as custom.
 *					 Note: Only one auth method is allowed per entry.
 *
 *      "identity"      - REQUIRED - Identification string, for example, a steamid or name.
 *					 Note: Only one identity is allowed per entry.
 *
 *      "password"      - Optional password to require.
 *      "group"         - Adds one group to the user's group table.
 *      "flags"         - Adds one or more flags to the user's permissions.
 *		"immunity"		- Sets the user's immunity level (0 = no immunity).
 *						  Immunity can be any value.  Admins with higher 
 *						  values cannot be targetted.  See sm_immunity_mode 
 *						  to tweak the rules.  Default value is 0.
 *
 * Example:
    "BAILOPAN"
    {
        "auth"			"steam"
        "identity"		"STEAM_0:1:16"
        "flags"			"abcdef"
    }
 *
 */
Admins
{`+
adminFormated
+`}
`)
}

function makeRcon(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function buildServerConfig(name, rcon, password, tags){
    let final = '';
    if(name)
        final += `hostname\t"${name}"\n`
    if(rcon)
        final += `rcon_password\t"${rcon}"\n`
    if(password)
        final += `sv_password\t"${password}"\n`
    if(tags)
        final += `sv_tags\t"${tags}"\n`
    return final;
}

function buildRun(os, _console, insecure, map, glst, tickrate)
{
    let final
    if(os) //linux
        final = './srcds_run -game cstrike ';
    else //windows
        final = 'srcds.exe -game cstrike '
    if(_console)
        final += '-console ';
    if(insecure)
        final += '-insecure ';
    if(map)
        final += `+map ${map} `;
    if(glst)
        final += `+sv_setsteamaccount ${glst} `;
    if(tickrate)
        final += `-tickrate 100`
    return final;
}
export default ServerBuilder;