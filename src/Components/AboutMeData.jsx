import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Timeline = [
	{
		title: "Coding as a Six-Year-Old: (c. 2012-c. 2013)",
		subtitle: <>When I was this age I never really understood much about computers, but I was always fascinated by how they worked. I would go downstairs to my family's desktop and write <a href="https://en.wikipedia.org/wiki/VBScript">VBScript</a>, because I saw a video on Youtube on how to write troll programs, and think I was so cool. In reality I was practically writing "Hello World!" messages but with buttons attached to it... However, around this time I also started dabbling into HTML; my "Hello World!" message boxes were now in Internet Explorer! As a 6-7 year old I was never able to make anything bigger, but I was satisfied with what I had done, and I left programming alone to do 6-7 year old things. I never truly left programming; though, I never took time to learn anything new directly, I just picked up on things as I heard and saw them and that would come to support me when I started to learn seriously years later.</>,
		id: 0,
	},
	{
		title: "Counter-Strike & SourceMod: (2019-Present)",
		subtitle: <>A lot of my early programming began in the <a href="https://developer.valvesoftware.com/wiki/Source">Source Engine</a>, more specifically Counter-Strike: Source, where I learned SourcePawn to make plugins for the server modification <a href="https://www.sourcemod.net/">SourceMod</a>. I started simple making basic plugins, then I moved into making more advanced plugins. After a while I moved from just development to handling the game servers themselves, and eventually to setting up the servers themselves.</>,
		id: 1,
	},
	{
		title: "itslogical.dev (2019-Present)",
		subtitle: <>I had always wanted to make a website for myself. The only problem was I didn't have any way to host it. I found a free hosting service and used that, but it was only good for some things. I originally made the website entirely of HTML and CSS, but I soon modified the design over time and moved to a Javascript framework.</>,
		id: 2,
	},
	{
		title: "Discord Bots: (2020-2022)",
		subtitle: <>Everyone loves discord and bots</>,
		id: 4,
	},
	{
		title: "C++ and Emulation: (2021)",
		subtitle: `My friend 'destoer' is obsessed with emulation. It's rare to find a day where he hasn't starred a new emulation repository on Github. He eventually convinced me to make an emulator.`,
		id: 5,
	},
	{
		title: "The Lamble - Junior Year School Project: (2022)",
		subtitle: <>In my junior year of high school I took <a href="https://apstudents.collegeboard.org/courses/ap-english-language-and-composition">AP English Language and Composition</a> or just AP Lang for short. In that class we had a semester long inquiry project where we researched and built a product of our research. Naturally, as this is not a programming class, people did things like grilling, making music, and creating a board game. I, on the other hand, decided to do something with programming.</>,
		id: 6,
	},
//	{
//		title: "",
//		subtitle: ``,
//		id: 7,
//	},

]


export const TimelineData = [
	{
		title: "Hello World",
		subtitle: "",
		text: <>
			This is about as far as I got. 
			<br/><br/>
			<SyntaxHighlighter language="vbs" style={stackoverflowDark} wrapLongLines >
				X=MsgBox("Hello World",0,":)")
			</SyntaxHighlighter>
			<br/>
			I learned to make different types of message boxes and buttons eventually. I could to open up notepad and other programs, but it never evolved beyond that. 
		</>,
		id: 0,
	},
	{
		title: "Color Laser",
		subtitle: "",
		text: <>Although this wasn't my first plugin, it was the first one that held a purpose and was used. This plugin was made for Jailbreak, a game mode were one player, the warden, would order players around the map playing games. This plugin would allow you to color any players with a laser if you were the warden. 
		
		<SyntaxHighlighter language="cpp" style={stackoverflowDark} showLineNumbers wrapLongLines >
		{`float EyePos[3];
float EyeAng[3]; 
float EndPos[3];
GetClientEyePosition(client, EyePos);
GetClientEyeAngles(client, EyeAng);	
Handle trace = TR_TraceRayFilterEx(EyePos, EyeAng, MASK_SHOT, RayType_Infinite, RayFilter, client);

if (TR_DidHit(trace))
{
	TR_GetEndPosition(EndPos, trace);
	EyePos[2] = EyePos[2] - 1; 
	TE_SetupBeamPoints(EyePos, EndPos, g_sprite, sprite_laserring, 0, 60, 0.1, 0.8, 4.0, 0, 0.0, g_iColor, 10);
	TE_SendToAll();

	int entity = TR_GetEntityIndex(trace);
	
	if (1 <= entity <= 34)
	{
		if (IsClientInGame(entity) && IsPlayerAlive(entity))
		{
			// omitted code
		}
	}
}`}
		</SyntaxHighlighter>
		This was done by first creating a ray coming out from the players view point. We grab the clients position and angle vectors and create a ray with a filter to collide only with the things we want it to. Using the built-in TR_DidHit() function we can check if the ray hit anything. If it did, we grab the position where the ray hit, lower the y component vector by 1 unit to make it visible and create a beam using a laser sprite. This process creates a visible laser to see where the laser is hitting. After we create the laser we grab the entity index of the end position of the ray and check the value of that entity index between 1 and 34 which is reserved for players. The way Source works <a href="https://developer.valvesoftware.com/wiki/Entity_index">"An entity index is a unique integer given to every entity by the engine. It allows the same entity to be referred to across library boundaries, but will be different on the client and server unless an edict is used. Within the client and server, pointers to CBaseEntity are more useful. There can be up to 4096 entities in the index. The first 2048 entries are reserved for entities with edicts, which cross the client/server divide."</a> The reason why 1 through 34 are special is because those indices are reserved for players.
		<SyntaxHighlighter language="cpp" style={stackoverflowDark} showLineNumbers wrapLongLines >
			SetEntityRenderColor(entity, r, g, b, a);
		</SyntaxHighlighter>
		Once we determine that we want to color the entity, we simply use the SetEntityRenderColor function and pass in the entity index, and the rgba values for the color.
						  </>,
        id: 1,
	},
	{
		title: "lootcrates",
		subtitle: "",
		text: <>Simple plugin where you would spend in-game currency to try and win items. Each item had it's own chance of being selected. Although this was made for a server, I was never a fan of the concept. It eventually got removed after a short testing period showed it did not fit the game mode.</>,
        id: 1,
	},
	{
		title: "The legend of sp-coinflip",
		subtitle: "An adventurous tail of a 'slight' oversight.",
		text: <></>,
		id: 1,
	},
	{
		title: "discordrelay-btimes",
		subtitle: "",
		text: <>The precursor to my more popular DiscordRelay plugin but aimed with support for bTimes in mind (bTimes is a timer plugin for the bunnyhop game mode). <br/>
		<SyntaxHighlighter language="cpp" style={stackoverflowDark} wrapLongLines >PrintColorTextAll("%s[%sDiscord%s] %s%s%s#%s%s%s: %s", g_msg_textcol, g_msg_varcol, g_msg_textcol, g_msg_varcol, discorduser, g_msg_textcol, g_msg_varcol, discriminator, g_msg_textcol, message); </SyntaxHighlighter>
		The main difference between this plugin and my DiscordRelay plugin is that this one uses global variables that are provided by bTimes for coloring. In other words, it makes the relay messages appear in the same theme and color as for the bTimes UI.</>,
        id: 1,
	},
	{
		title: "sbpp_discord_logs",
		subtitle: <a href="https://github.com/log-ical/sp-sbpp_discord_logs">https://github.com/log-ical/sp-sbpp_discord_logs</a>,
		text: <>This would eventually become a feature built into Discord Relay, it simply waited until someone got muted, silenced, or gagged and sent that message formatted into an embed into a discord channel.</>,
        id: 1,
	},
	{
		title: "jailbreak-specialdays",
		subtitle: <a href="https://github.com/ashort96/sp-jailbreak-specialdays">https://github.com/ashort96/sp-jailbreak-specialdays</a>,
		text: <>Created by my friend ashort, I contributed more game modes. The main contribution being a one in the chamber implementation from Call of Duty.</>,
        id: 1,
	},
	{
		title: "Word Filter",
		subtitle: "",
		text: <>Self explanatory. In this there is a list of banned words and variations. When someone says one of these words in chat, we send a query to the SoruceBans database which contains all previous mutes. We select count from the table where they've been muted by the filter before and use that length to give the client a punishment scaled on that length.</>,
        id: 1,
	},
	{
		title: "topkillshud",
		subtitle: <a href="https://github.com/log-ical/sp-topkillshud">https://github.com/log-ical/sp-topkillshud</a>,
		text: <>Made for deathmatch servers. Would display </>,
        id: 1,
	},
    {
		title: "Discord Relay",
		subtitle: <a href="https://github.com/log-ical/sp-discordrelay">https://github.com/log-ical/sp-discordrelay</a>,
		text: <>Discord ⇄ Server interaction for the Source Engine.<br/>
        Features:<br/>  
- Steam avatars used for discord messages<br/>
- Map change, client connect/disconnect messages<br/>
- Chat messages sent to discord (commands can be hidden)<br/>
- SBPP bans and mutes<br/>
- RCon channel in discord  </>,
        id: 1,
	},
    {
		title: "The Original Website",
		subtitle: "The first version website. Was comprised of just HTML and CSS.",
		text: <>
		Originally, the plan was never to make this my portfolio. At the time, having a portfolio wouldn't really help me, I was still a freshmen in high school after all, but I did include links to my Github and GameBanana. 
		I had made it more of a resource center, something that could be used as a quick reference. I did a lot of mapping for Source at the time and it was nice to have all the tools out there layed out with descriptions to quickly find what I'm looking for. It was also there for other mappers who wanted it.
		I also wrote a guide on how to create a server for CS:S and that was tailored to others in the community of people I was around. <br/>
		<img src="https://cdn.discordapp.com/attachments/764923424618840074/988816288942030888/unknown.png" width={"20%"}></img>
		</>,
        id: 2,
	},
    {
		title: "The React Port",
		subtitle: "The website was ported from plain HTML to a complete redesign of the original in React.js.",
		text: <>
		<img src="https://cdn.discordapp.com/attachments/764923424618840074/988818433464479794/unknown.png" width={"20%"}></img>
		</>,
        id: 2,
	},
    {
		title: "The First Revision",
		subtitle: "The first revision was a design change from the react port. It looked much the same to this design but everything was on the topbar and was very unorganized.",
		text: <>
		The main change in this version was in the logo, the positioning, and change in organization. I decided to have the website reflect myself more and included a brief description about myself and the technologies I knew on the home page. <br/>
		<img src="https://cdn.discordapp.com/attachments/764923424618840074/992091292106510477/unknown.png" width={"20%"}></img>
		</>,
        id: 2,
	},
    {
		title: "The Second Revision",
		subtitle: "The current version you are looking at.",
		text: <>
		I eventually embraced the fact that having a portfolio was nice and that my website really wasn't that good. I more or less scrapped everything, and redid the "tabs" on the top nav bar. Now all the projects I've worked on are in the projects tab, <sub>almost</sub> everything about me in is the about me tab, and I added nice transitions to everything to pretty it up. There's still a lot about it that can be improved on, and maybe a 3rd revision may came about soon. 
		</>,
        id: 2,
	},
	{
		title: "FOAAS",
		subtitle: <a href="https://github.com/log-ical/foaas-discord-Bot">https://github.com/log-ical/foaas-discord-Bot</a>,
		text: <>This was a pretty interesting API I found one day, I thought why not turn it into a bot. This uses axios to send an API request then takes the response and sends it right into the server.</>,
		id: 4,
	},
	{
		title: "sourcebans-reloaded",
		subtitle: <></>,
		text: <>An abandoned project which wished to take the need for a web panel out of SourceBans++</>,
		id: 4,
	},
	{
		title: "SourceJump Discord Bot",
		subtitle: <a href="https://github.com/sourcejump/discord-bot">https://github.com/sourcejump/discord-bot</a>,
		text: <>A project I'm working with other members of the SourceJump community on to rewrite and add more functions to the existing bot in the SourceJump discord.</>,
		id: 4,
	},
	{
		title: "Chip 8 Emulator",
		subtitle: <></>,
		text: <>
		This was my attempt at a Chip 8 emulator. It was a lot of fun to make, and I learned a lot more about the architecture of CPUs and how the CPU processes things even though this was at a very toned down level. I also was forced to learn bitwise operators. Below is my code for the chip CPU, unchanged, so you get to see my thousands of comments trying to wrap my head around what I'm doing.
		<SyntaxHighlighter language="cpp" style={stackoverflowDark} wrapLongLines >{`// cpu.cpp
#include "cpu.h"
#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>
#include <time.h>

unsigned char chip_fontset[80] =
{ 
  0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
  0x20, 0x60, 0x20, 0x20, 0x70, // 1
  0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
  0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
  0x90, 0x90, 0xF0, 0x10, 0x10, // 4
  0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
  0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
  0xF0, 0x10, 0x20, 0x40, 0x40, // 7
  0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
  0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
  0xF0, 0x90, 0xF0, 0x90, 0x90, // A
  0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
  0xF0, 0x80, 0x80, 0x80, 0xF0, // C
  0xE0, 0x90, 0x90, 0x90, 0xE0, // D
  0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
  0xF0, 0x80, 0xF0, 0x80, 0x80  // F
};

//constructer
cpu::cpu()
{

}

//destructer
cpu::~cpu()
{

}

void cpu::init()
{
	// Initialize registers and memory once
	pc 		= 0x200; //Counter starts at 0x200
	opcode 	= 0;     //Reset opcode
	I 		= 0;	 //Reset index register
	sp 		= 0; 	 //Reset stack pointer
	
	for(int i = 0; i < 64*32; ++i)
	{
		gfx[i] = 0;
	}
	for(int i = 0; i < 16; ++i)
	{
		stack[i] = 0;
	}
	for(int i = 0; i < 16; ++i)
	{
		key[i] = V[i] = 0;
	}
	//clear mem
	for(int i = 0; i < 4096; ++i)
	{
		memory[i] = 0;
	}
	//load font set
	for(int i = 0; i < 80; ++i)
	{
		memory[i] = chip_fontset[i];
	}

	delay_timer = 0;
	sound_timer = 0;


	srand (time(NULL));
}
void cpu::cpuCycle()
{
/*
Fetch opcode 

	assuming
	memory[pc] == 0xA2
	memory[pc+1] == 0xF0
	// 0xA2       0xA2 << 8 = 0xA200   HEX
	// 10100010   1010001000000000     BIN
1010001000000000 | 			// 0xA200
		11110000 = 			// 0xF0 (0x00F0)
________________
1010001011110000   			// 0xA2F0

			0xA2F0 
*/

	//opcode = memory[pc] << 8 | memory[pc + 1];
	opcode = read_mem(pc) << 8 | read_mem(pc + 1);
	pc += 2;
	//inc
/*
Decode the first byte with & ( and ) operator
0011 0100 0101 0001 &
0x3451
1111 0000 0000 0000
0xF000
___________________
					Forces us to only get the first byte of intruction
0011 0000 0000 0000
0x3000
*/
	switch(opcode & 0xF000)
	{
		case 0x0000:
			switch (opcode & 0x000F)
			{
				/*
				0011 0100 0101 1110 &
				0x345E
				0000 0000 0000 1111
				0x000F
				___________________
				Decodes last diget to discriminate 00EE and 00E0 instruction
				0000 0000 0000 1110
				0x000E
				*/
				case 0x0000: //Clear Screen Instruction
					for(int i = 0; i < 64 * 32; ++i)
					{
						gfx[i] = 0x0;
					}
				break;
				case 0x000E: // Return from a subroutine
					--sp;
					pc = stack[sp];
				break;
				//Else Unknown 
			}
		break;
		case 0x1000: // Jumps to address NNN
			pc = opcode & 0x0FFF;
		break;
		case 0x2000:
			stack[sp] = pc;
		break;
		case 0x3000: // Skips the next instruction if VX equals NN
			if(V[(opcode & 0x0F00) >> 8] == (opcode & 0x00FF))
				pc += 2;
		break;
		case 0x4000: // kips the next instruction if VX doesn't equal NN
			if(V[(opcode & 0x0F00) >> 8] != (opcode & 0x00FF))
				pc += 2;
		break;
		case 0x5000: // Skips the next instruction if VX equals VY.
			if(V[(opcode & 0x0F00) >> 8] == V[(opcode & 0x00F0) >> 4])
				pc += 2;
		break;
		case 0x6000: // 6XNN 	Store number NN in register VX
			V[(opcode & 0x0F00) >> 8] = opcode & 0x00FF;
		break;
		case 0x7000: // 7XNN 	Add the value NN to register VX
			V[(opcode & 0x0F00) >> 8] += opcode & 0x00FF;
		break;
		case 0x8000:
			switch(opcode & 0x000F)
			{
				case 0x0000: // 8XY0 	Store the value of register VY in register VX
					V[(opcode & 0x0F00) >> 8] = V[(opcode & 0x00F0) >> 4];
				break;
				case 0x0001: // 8XY1 	Set VX to VX OR VY
					V[(opcode & 0x0F00) >> 8] |= V[(opcode & 0x00F0) >> 4];
				break;
				case 0x0002: // 8XY2 	Set VX to VX AND VY
					V[(opcode & 0x0F00) >> 8] &= V[(opcode & 0x00F0) >> 4];
				break;
				case 0x0003: // 8XY3 	Set VX to VX XOR VY
					V[(opcode & 0x0F00) >> 8] ^= V[(opcode & 0x00F0) >> 4];
				break;
				case 0x0004: // 8XY4 	Add the value of register VY to register VX
				{
					unsigned short X = (opcode & 0x0F00) >> 8;
					unsigned short Y = (opcode & 0x00F0) >> 4;
					V[0xF] = ((V[Y] + V[X]) > 255) ? 1 : 0;
					V[X] += V[Y];
				}
				break;
				case 0x0005: // 8XY5 	Subtract the value of register VY from register VX
				{
					unsigned short X = (opcode & 0x0F00) >> 8;
					unsigned short Y = (opcode & 0x00F0) >> 4;
					V[0xF] = (V[Y] > V[X]) ? 1 : 0;
					V[X] -= V[Y];
				}
				break;
				case 0x0006: // 8XY6 	Store the value of register VY shifted right one bit in register VX¹ Set register VF to the least significant bit prior to the shift
					V[0xF] = V[(opcode & 0x0F00) >> 8] & 0x1;
					V[(opcode & 0x0F00) >> 8] >>= 1;
				break;
				case 0x0007: // Set register VX to the value of VY minus VX
				{
					unsigned short X = (opcode & 0x0F00) >> 8;
					unsigned short Y = (opcode & 0x00F0) >> 4;
					V[0xF] = (V[Y] > V[X]) ? 1 : 0;
					V[X] = (V[Y] - V[X]);
				}
				break;
				case 0x000E: // 8XYE 	Store the value of register VY shifted left one bit in register VX¹ Set register VF to the most significant bit prior to the shift
					V[0xF] = V[(opcode & 0x0F00) >> 8] >> 7;
					V[(opcode & 0x0F00) >> 8] <<= 1;
				break;
			}
		break;
		case 0x9000: // 9XY0 Skip the following instruction if the value of register VX is not equal to the value of register VY
			if(V[(opcode & 0x0F00)] != V[(opcode & 0x00F0) << 4])
				pc += 2;
		break;
		case 0xA000: // ANNN 	Store memory address NNN in register I
			I = opcode & 0x0FFF;
		break;
		case 0xB000: // BNNN 	Jump to address NNN + V0
			pc = (opcode & 0x0FFF) + V[0];
		break;
		case 0xC000: // CXNN 	Set VX to a random number with a mask of NN
			V[opcode & 0X0F00] = (rand() % 0XFF) & (opcode & 0x00FF);
		break;
		case 0xD000: // Display
		{
		/*
DXYN 	Draw a sprite at position VX, VY with N bytes of sprite data starting at the address stored in I
Set VF to 01 if any set pixels are changed to unset, and 00 otherwise
		*/
			unsigned short x = V[(opcode & 0x0F00) >> 8];
			unsigned short y = V[(opcode & 0x00F0) >> 4];
			unsigned short height = opcode & 0x000F;
			unsigned short pixel;
			
			V[0xF] = 0;
			for (int yline = 0; yline < height; yline++)
			{
				pixel = read_mem(I + yline);
				for(int xline = 0; xline < 8; xline++)
				{
					if((pixel & (0x80 >> xline)) != 0)
					{
						if(gfx[(x + xline + ((y + yline) * 64))] == 1)
						{
							V[0xF] = 1;                                    
						}
						gfx[x + xline + ((y + yline) * 64)] ^= 1;
					}
				}
			}		
		}
		break;
		case 0xE000: //Key presses
		printf("0xE000\\n");
			switch(opcode & 0x00FF)
			{
				case 0x009E: // EX9E 	Skip the following instruction if the key corresponding to the hex value currently stored in register VX is pressed
					if(key[V[(opcode & 0x0F00) >> 8]] != 0)
						pc += 2;
						printf("0xE09E\\n");
				break;
				case 0x00A1: // EXA1 	Skip the following instruction if the key corresponding to the hex value currently stored in register VX is not pressed
					if(key[V[(opcode & 0x0F00) >> 8]] == 0)
						pc += 2;
						printf("0xE0A1\\n");
				break;
			}
		break;
		case 0xF000: // Display & Sound
		printf("0xF000\\n");
			switch(opcode & 0x00FF)
			{
				case 0x0007: // FX07 	Store the current value of the delay timer in register VX
					V[(opcode & 0x0F00) >> 8] = delay_timer;
					printf("0xF007\\n");

				break;
				case 0x000A: // FX0A 	Wait for a keypress and store the result in register VX
				{
					printf("0xF00A\\n");
					bool keyPress = false;
					for(int i = 0; i < 16; ++i)
					{
						if(key[i] != 0)
						{
							V[(opcode & 0x0F00) >> 8] = i;
							keyPress = true;
						}
					}
					if(!keyPress)
						return;
				}
				break;
				case 0x0015: // FX15 	Set the delay timer to the value of register VX
					printf("0xF015\\n");
					delay_timer = V[(opcode & 0x0F00) >> 8];
				break;
				case 0x0018: // FX18 	Set the sound timer to the value of register VX
					printf("0xF018\\n");
					sound_timer = V[(opcode & 0x0F00) >> 8];
				break;
				case 0x001E: // FX1E 	Add the value stored in register VX to register I
					printf("0xF01E\\n");
					I += V[(opcode & 0x0F00) >> 8];
				break;
				case 0x0029: // FX29 	Set I to the memory address of the sprite data corresponding to the hexadecimal digit stored in register VX
					printf("0xF029\\n");
					I = V[(opcode & 0x0F00) >> 8] * 0x5;
				break;
				case 0x0033:
					printf("0xF033\\n");
					write_mem(I, V[(opcode & 0x0F00) >> 8] / 100);
					write_mem(I+1, (V[(opcode & 0x0F00) >> 8] / 10) % 10);
					write_mem(I+2, (V[(opcode & 0x0F00) >> 8] % 100) % 10);
				break;
				case 0x0055:
					printf("0xF055\\n");
					for(int i = 0; i <= ((opcode & 0x0F00) >> 8); ++i)
					{
						write_mem(I + i, V[i]);
					}
					I += ((opcode & 0x0F00) >> 8) + 1;
				break;
				case 0x0065:
					printf("0xF065\\n");
					for (int i = 0; i <= ((opcode & 0x0F00) >> 8); ++i)
					{
						V[i] = memory[I + i];			
					}
					I += ((opcode & 0x0F00) >> 8) + 1;
				break;
			}
		break;
	}
	printf("out of ins switch\\n");
	if(delay_timer > 0)
		--delay_timer;
	if(sound_timer > 0)
		if(sound_timer == 1)
			//Beep
			//printf("beep\\n");
		--sound_timer;
		printf("timer\\n");
}

uint8_t cpu::read_mem(uint16_t addr)
{
	return memory[addr];
}

void cpu::write_mem(uint16_t addr, uint8_t v)
{
	memory[addr] = v;
}

bool cpu::loadFile(char* file)
{
	init();
	printf("%s", file);

	FILE *pFile = fopen(file, "rb");
	if(pFile == NULL)
		return false;

	fseek(pFile, 0, SEEK_END);
	long lSize = ftell(pFile);
	rewind(pFile);
	
	char* buffer = (char*)malloc(sizeof(char) *lSize);
	if(buffer == NULL)
		return false;
	size_t result = fread(buffer, 1, lSize, pFile);
	if(result != lSize)
		return false;
	if((4096-512) > lSize)
	{
		for(int i = 0; i < lSize; ++i)
			write_mem(i + 512, buffer[i]);
	}
	else
		printf("ROM too large for memory");

	fclose(pFile);
	free(buffer);
	return true;
}`}</SyntaxHighlighter></>,
		id: 5,
	},
	
	//{
	//	title: "",
	//	subtitle: <></>,
	//	text: <></>,
	//	id: ,
	//}},

]
