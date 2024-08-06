const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_19_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMwLFxuICAgICAgICA5NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyLFxuICAgICAgICAxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk41ODFlajNLRWJQdm1mcndzSks2NHlwb290a2MrZ0VRMmdKNXN0dnJxdlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODExNDExNTU3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDM2NTk5RDc4NjM5NzZDRERCOUFFNUJEQzQxRTE0RTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNzc3NTg4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJ2Z3dBYTRxUjNlQlk3d0ZnNzhONmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTc5NDc0YjctZTJhZC00NGE0LWE1MzMtNTU3YzQxMzgzMmVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMjUzLFxuICAgICAgMTU2LFxuICAgICAgMTgsXG4gICAgICAxNTEsXG4gICAgICA1MCxcbiAgICAgIDEyMCxcbiAgICAgIDE1NSxcbiAgICAgIDYwLFxuICAgICAgMjQ4LFxuICAgICAgMTI3LFxuICAgICAgMjUzLFxuICAgICAgMTI4LFxuICAgICAgMTU3LFxuICAgICAgMTA0LFxuICAgICAgMTA1LFxuICAgICAgMTE4LFxuICAgICAgMyxcbiAgICAgIDI0LFxuICAgICAgMjE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDEyNyxcbiAgICAgIDE1NCxcbiAgICAgIDE0MSxcbiAgICAgIDI4LFxuICAgICAgOTIsXG4gICAgICA1OSxcbiAgICAgIDI1MyxcbiAgICAgIDM0LFxuICAgICAgNjksXG4gICAgICAyMTMsXG4gICAgICAzNCxcbiAgICAgIDEzMyxcbiAgICAgIDExMCxcbiAgICAgIDk1LFxuICAgICAgMjMsXG4gICAgICAxNTgsXG4gICAgICAyMDgsXG4gICAgICAzMCxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhLVjg2SEs1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTE0MTE1NTczOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NzczOTAxNzUzMTYwNDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l2VDR2Y0RFT24vdmJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTkhqSmk2RkxIT2o2c1dVaG5sN01TRjliWlJ3NXlIUEdrWmdmOTlzY3lqMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1VTkyaDMxU0ZNcEduM0JUK1UwZ0FJcU1pRmtWNVBFOVRnUXRUUnEzSXFha3B0aDA1blQxRFVrTGNhejJlYk9FbHRia3lrSFdiN0ExcllUTXpYOUpDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVS05UZk52M2hsL3pWV2l0b2l5SndZdXY0K2ZXbVV6OENhTW9pdlJUVXZmamR4ZTdwRVVaYjI1S3k2cGRXUy9aSVloWktuc0ttbktRS21CV2ZxZTJCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTE0MTE1NTczOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjc3NzU4MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
