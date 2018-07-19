const abbrevs = [
"A3",
"AA",
"AA",
"AA",
"AAF",
"AAF",
"AAK",
"AAK",
"AAMOF",
"AAMOI",
"AAP",
"AAR",
"AAS",
"AASHTA",
"AATK",
"AAYF",
"ABBR",
"ABC",
"ABD",
"ABT",
"ABT2",
"ABTA",
"ABU",
"AC",
"ACC",
"ACD",
"ACDNT",
"ACE",
"ACK",
"ACPT",
"ACQSTN",
"ADAD",
"ADBB",
"ADD",
"ADDY",
"ADIH",
"ADIP",
"ADMIN",
"ADMINR",
"ADN",
"ADR",
"AE",
"AEAP",
"AF",
"AF",
"AF",
"AFC",
"AFAIAA",
"AFAIC",
"AFAIK",
"AFAIUI",
"AFAP",
"AFFA",
"AFJ",
"AFK",
"AFZ",
"AFPOE",
"AGI",
"AH",
"AIAMU",
"AIGHT",
"AIR",
"AISB",
"AISB",
"AISI",
"AITR",
"AKA",
"ALCON",
"ALOL",
"AMA",
"AMAP",
"AMBW",
"AML",
"AMOF",
"A/N",
"AO",
"AOC",
"AOE",
"AOM",
"AOM",
"AOTA",
"AOYP",
"APAC",
"APP",
"APP",
"AQAP",
"ARC",
"ARE",
"ARG",
"ASIG",
"ASAP",
"A/S/L",
"ASL",
"ASLA",
"AT",
"ATB",
"ATEOTD",
"ATM",
"ATSITS",
"ATSL",
"AWC",
"AWESO",
"AWOL",
"AWOL",
"AYDY",
"AYBABTU",
"AYEC",
"AYOR",
"AYSOS",
"AYS",
"AYT",
"AYTMTB",
"AYV",
"AYW",
"AYW",
"AZN",
"B",
"B",
"B&",
"B2B",
"B2C",
"B2W",
"B8",
"B9",
"B/F",
"B/G",
"B4",
"B4N",
"BAG",
"BA",
"BAE",
"BAE",
"BAFO",
"BAK",
"BAM",
"BAMF",
"BAO",
"BAS",
"BASOR",
"BAU",
"BAY",
"BB",
"BB",
"BB",
"BBC",
"BBIAB",
"BBIAF",
"BBIAM",
"BBIAS",
"BBL",
"BBN",
"BBQ",
"BBS",
"BBT",
"BC",
"B/C",
"BC",
"BCNU",
"BCOS",
"BCO",
"BCOY",
"BD",
"BDAY",
"B-DAY",
"BDN",
"BEG",
"BELF",
"BF",
"BF",
"BFAW",
"BF2",
"BF",
"BFF",
"BFFL",
"BFFLNMW",
"BFD",
"BFG",
"BFFN",
"BFN",
"BG",
"BGWM",
"BHL8",
"BIB",
"BIBO",
"BIC",
"BIF",
"BIH",
"BIL",
"BIO",
"BION",
"BIOYA",
"BIOYN",
"BIS",
"BISFLATM",
"BITMT",
"BL",
"BLNT",
"BM",
"BME",
"BM&Y",
"BOB",
"BN",
"BOE",
"BOHICA",
"BOL",
"BOM",
"BOLO",
"BOOMS",
"BOP",
"BOSMKL",
"BOT",
"BOT",
"BOYF",
"BPLM",
"BRB",
"BR",
"BRBB",
"BRNC",
"BRD",
"BRH",
"BRT",
"BSF",
"BSOD",
"BSTS",
"BT",
"BT",
"BTA",
"BTDT",
"BTW",
"BTYCL",
"BUBU",
"BWL",
"BYOB",
"BYOC",
"BYOD",
"BYOH",
"BYOP",
"BYTM",
"C&G",
"C4N",
"CAD",
"CAD",
"CAM",
"CB",
"CB",
"CB",
"CD9",
"CFS",
"CFY",
"CHK",
"CIAO",
"CICO",
"CID",
"CID",
"CLAB",
"CLD",
"CLK",
"CM",
"CMAP",
"CMB",
"CMGR",
"CMIIW",
"CMON",
"CNP",
"COB",
"COH",
"COS",
"C/P",
"CP",
"CR8",
"CRE8",
"CRA CRA",
"CRAFT",
"CRB",
"CRBT",
"CRIT",
"CRZ",
"CRS",
"CSG",
"CSL",
"CSS",
"CT",
"CTC",
"CTHU",
"CTN",
"CTO",
"CU",
"CU",
"CU2",
"CUA",
"CUL",
"CULA",
"CUL8R",
"CUMID",
"CURLO",
"CWOT",
"CWYL",
"CX",
"CYA",
"CYAL8R",
"CYE",
"CYEP",
"CYO",
"D2",
"D46?",
"DA",
"DAE",
"DAFUQ",
"DAM",
"DAoC",
"DBAU",
"DBEYR",
"DC",
"DD",
"DD",
"DDG",
"DEEZ NUTZ",
"DEGT",
"DERP",
"DF",
"DFL",
"DGA",
"DGAF",
"DGT",
"DGTG",
"DGYF",
"DH",
"DHU",
"DIIK",
"DIKU",
"DILLIGAF",
"DILLIGAS",
"DIS",
"DITYID",
"DIY",
"DKDC",
"DKP",
"D/L",
"DL",
"DL",
"DL",
"DLBBB",
"DLTBBB",
"DM",
"DM",
"DM",
"DM",
"DMNO",
"DMY",
"DN",
"DNC",
"DNR",
"DNT",
"d00d",
"DOE",
"DORBS",
"DOT",
"DPS",
"DQMOT",
"DR",
"DS",
"DTR",
"DTRT",
"DTS",
"DTTD",
"DUPE",
"DUR",
"DV8",
"DW",
"DWF",
"DWM",
"DXNRY",
"DYNWUTB",
"DYFI",
"DYFM",
"DYJHIW",
"DYOR",
"E",
"E",
"E1",
"E123",
"E2EG",
"EAK",
"EBKAC",
"ED",
"EF4T",
"EG",
"EI",
"EIP",
"ELI5",
"EM",
"EMA",
"EMBAR",
"EMFBI",
"EMFBI",
"EMSG",
"ENUF",
"EOD",
"EOD",
"EOL",
"EOL",
"EOM",
"EOS",
"EOT",
"EQ",
"ERP",
"ERS2",
"ES",
"ESAD",
"ETA",
"ETA",
"EVA",
"EVO",
"EWG",
"EWI",
"EYC",
"EZ",
"EZY",
"F",
"F2F",
"F2P",
"FAAK",
"FAB",
"Facepalm",
"FAF",
"FAQ",
"FAY",
"FB",
"FBB",
"FBC",
"FBF",
"FBF",
"FBF",
"FBFR",
"FBM",
"FBO",
"FBOW",
"FC",
"FC",
"FC'INGO",
"FEITCTAJ",
"FF",
"FFA",
"FFS",
"FICCL",
"FIF",
"FIIK",
"FIIOOH",
"FIL",
"FIMH",
"FISH",
"FITB",
"FML",
"FOMC",
"FOAD",
"FOAF",
"FOMCL",
"FRT",
"FTBOMH",
"FTFY",
"FTL",
"FTW",
"FU",
"FUBAR",
"FUBB",
"FUD",
"FUTAB",
"FW",
"FWB",
"FWIW",
"FWM",
"FYEO",
"FYA",
"FYI",
"G",
"G",
"G+",
"G/F",
"G2CU",
"G2G",
"G2GICYAL8ER",
"G2R",
"G2TU",
"G4C",
"G9",
"GA",
"GAC",
"GAFC",
"GAL",
"GANK",
"GAS",
"GAS",
"GB",
"GBTW",
"GBU",
"GD",
"GDR",
"GD/R",
"GFI",
"GF",
"GFN",
"GG",
"GG",
"GG",
"GGA",
"GGE1",
"GGU2",
"GGMSOT",
"GGOH",
"GGP",
"GH",
"GIAR",
"GIC",
"GIGO",
"GIRL",
"GJ",
"GL",
"GL2U",
"GLA",
"GL/HF",
"GLE",
"GLE1",
"GLNG",
"GMBA",
"GMTA",
"GMV",
"GN",
"GNA",
"GNE1",
"GNIGHT",
"GNITE",
"GNSD",
"GOI",
"GOL",
"GOMB",
"GPOY",
"GR8",
"GRATZ",
"GRL",
"GRWG",
"GR&D",
"GS",
"GS",
"GT",
"GTFO",
"GTFOH",
"GTG",
"GTM",
"GTRM",
"GTSY",
"GUD",
"GWHTLC",
"H",
"H8",
"H8TTU",
"HAG1",
"HAK",
"HAU",
"H&K",
"H2CUS",
"HAGN",
"HAGO",
"HAND",
"HAWT",
"HAWT",
"HB",
"HB",
"HBD",
"H-BDAY",
"HBU",
"HF",
"HFAC",
"H-FDAY",
"HHIS",
"HIFW",
"HL",
"HLA",
"H-MDAY",
"HNL",
"HOAS",
"HP",
"HRU",
"HTH",
"HUB",
"HUYA",
"HV",
"HVH",
"HW",
"HYFR",
"I2",
"IA8",
"IAAA",
"IAAD",
"IAAL",
"IAC",
"IAE",
"IANAC",
"IANAL",
"IAO",
"IB",
"IB",
"IC",
"ICAM",
"ICBW",
"ICEDI",
"ICFILWU",
"ICYMI",
"IDBI",
"IDC",
"IDGAF",
"IDK",
"IDTS",
"IDUNNO",
"IFYP",
"IG",
"IG2R",
"IGHT",
"IGN",
"IGP",
"IHNI",
"IIRC",
"IIIO",
"IK",
"IKR",
"ILBL8",
"ILU",
"ILUM",
"ILYSM",
"ILY",
"IM",
"IMAO",
"IMHO",
"ImL",
"IMNSHO",
"IMO",
"IMS",
"IMSB",
"IMTM",
"IMU",
"INAL",
"INC",
"INV",
"IOMH",
"IOW",
"IRL",
"IRMC",
"ISLY",
"ISO",
"ITAM",
"ITYK",
"IUSS",
"IWALU",
"IWAWO",
"IWIAM",
"IWSN",
"IYKWIM",
"IYO",
"IYQ",
"IYSS",
"j00",
"j00r",
"JAC",
"JAM",
"JAS",
"JC (J/C)",
"JDI",
"JELLY",
"JFF",
"JFGI",
"JIC",
"JJ (J/J)",
"JJA",
"JK (J/K)",
"JLMK",
"JMO",
"JP",
"JP",
"JT (J/T)",
"JTLYK",
"JV",
"JW",
"K",
"KK",
"KK",
"K8T",
"k/b",
"KB",
"KB",
"KDFU",
"KEWL",
"KEYA",
"KEYME",
"KFY",
"KIA",
"KISS",
"KIT",
"KMA",
"KMK",
"KMT",
"KOC",
"KOL",
"KOS",
"KOS",
"KOW",
"KOTC",
"KOTL",
"KNIM",
"KNOW",
"KPC",
"KS",
"KSC",
"KT",
"KUTGW",
"L2G",
"L2G",
"L2K",
"L2P",
"l33t",
"L8R",
"L8RG8R",
"LBAY",
"LBS",
"LBVS",
"LD",
"LD",
"LDO",
"LEMENO",
"LERK",
"LFD",
"LFG",
"LFG",
"LFM",
"LGH",
"LH6",
"LHSX",
"LHM",
"LHO",
"LI",
"LIC",
"LIK",
"LIMT",
"LLGB",
"LLS",
"LMAO",
"LMBO",
"LMFAO",
"LMIRL",
"LMK",
"LMMFAO",
"LMNK",
"LMS",
"LNT",
"LOA",
"LOL",
"LOL",
"LOL",
"LOLH",
"LOLO",
"LOLWTF",
"LOTI",
"LOTR",
"LQTM",
"LSHMBH",
"LSV",
"LTD",
"LTLWDLS",
"LTNS",
"LTOD",
"LTS",
"LULT",
"LULZ",
"LVM",
"LWOS",
"LY",
"LYLAS",
"LYLC",
"LYSM",
"M$",
"M8",
"MB",
"MBS",
"MC",
"MDIAC",
"MEGO",
"MEH",
"MEH",
"MEHH",
"MEZ",
"MFI",
"MFW",
"MGB",
"MGMT",
"MHOTY",
"MIRL",
"MIRL",
"MKAY",
"MLM",
"MM",
"MMK",
"MNC",
"MNSG",
"MOD",
"MOD",
"MORF",
"MOMBOY",
"MOO",
"MOOS",
"MOS",
"MOSS",
"MP",
"MRT",
"MRW",
"MSG",
"MTF",
"MTFBWU",
"MU",
"MUAH",
"MUSM",
"MWAH",
"MYO",
"MYOB",
"n00b",
"N1",
"N2M",
"NADT",
"NALOPKT",
"NANA",
"NBD",
"NBFAB",
"NC",
"ND",
"NE",
"NE1",
"NERF",
"NFM",
"NFM",
"NGL",
"NFS",
"NFS",
"NFW",
"NFW",
"NFWS",
"NH",
"NIFOC",
"NIGI",
"NIMBY",
"NIROK",
"NLT",
"NM",
"NM",
"NM",
"NMH",
"NMJC",
"NMU",
"NO1",
"NOOB",
"NOWL",
"NOYB",
"NP",
"NPC",
"NQT",
"NR",
"NRN",
"NS",
"NS",
"NSA",
"NSFL",
"NSFW",
"NSISR",
"NT",
"NTHING",
"NTS",
"NVM",
"NVR",
"NW",
"NWO",
"O4U",
"O",
"O",
"O",
"OA",
"OATUS",
"OB",
"OB",
"OBV",
"OFC",
"OG",
"OGIM",
"OH",
"OI",
"OIB",
"OIC",
"OJ",
"OL",
"OLL",
"OM",
"OM",
"OMAA",
"OMDB",
"OMFG",
"omfglmaobbqrofl",
"copteriss",
"OMG",
"OMG",
"OMGYG2BK",
"OMGYS",
"OMS",
"OMW",
"ONL",
"OO",
"OOC",
"OOH",
"OOTD",
"OOTO",
"OP",
"ORLY",
"OS",
"OT",
"OTB",
"OTFL",
"OTL",
"OTOH",
"OTP",
"OTT",
"OTTOMH",
"OTW",
"OVA",
"OYO",
"P",
"P2P",
"P2P",
"P2P",
"P911",
"PAT",
"PAW",
"PBOOK",
"PC",
"PCM",
"PDA",
"PDH",
"PDS",
"PDQ",
"PEEPS",
"PFT",
"PIC",
"PIP",
"PIR",
"PISS",
"PITA",
"PKMN",
"PL8",
"PLD",
"PLMK",
"PLS",
"PLU",
"PLZ",
"PLZTLME",
"PM",
"PMFI",
"PMFJI",
"PMSL",
"POAHF",
"POIDH",
"POS",
"POT",
"POV",
"POV",
"PPL",
"PPU",
"PRESH",
"PROBS",
"PROLLY",
"PROGGY",
"PRON",
"PRT",
"PRT",
"PRW",
"PSOS",
"PSP",
"PST",
"PTFO",
"PTIYPASI",
"PTL",
"PTMM",
"PTO",
"PTO",
"PTO",
"PUG",
"PVP",
"PWN",
"PXT",
"PU",
"PUKS",
"PYT",
"PZ",
"PZA",
"Q",
"Q4U",
"QC",
"QFE",
"QFI",
"QFI",
"QFT",
"QIK",
"QL",
"QOTD",
"QQ (qq) (Q_Q)",
"QQ",
"QSL",
"QSO",
"QT",
"QTPI",
"R",
"R8",
"RBAY",
"RFN",
"RGR",
"RHIP",
"RIP",
"RL",
"RLY",
"RME",
"RMLB",
"RMMM",
"ROFL",
"ROFLCOPTER",
"ROFLMAO",
"ROTFL",
"ROTFLUTS",
"RS",
"RSN",
"RT",
"RT",
"RTBS",
"RTFM",
"RTFQ",
"RTHX",
"RTMS",
"RTNTN",
"RTRCTV",
"RTRMT",
"RTSM",
"RTWFQ",
"RU",
"RUMOF",
"RUT",
"RUOK",
"RX",
"RW",
"RX",
"RYB",
"RYO",
"RYS",
"RYS",
"S2R",
"S2S",
"S4L",
"SAL",
"SAT",
"SB",
"SB",
"SBIA",
"SBT",
"SC",
"SD",
"SDMB",
"SENPAI",
"SEO",
"SETE",
"SELFIE",
"SFAIK",
"SH",
"SH^",
"SHID",
"SICNR",
"SIG2R",
"SIHTH",
"SIMYC",
"SIR",
"SIS",
"SIS",
"SIT",
"SITD",
"SJW",
"SK8",
"SK8NG",
"SK8R",
"SK8RBOI",
"SLAP",
"SM",
"SMAZED",
"SMEXI",
"SMH",
"SMHID",
"SNAFU",
"SNERT",
"SO",
"SOAB",
"S'OK",
"SOMY",
"SorG",
"SOS",
"SOS",
"SOT",
"SOTMG",
"SOWM",
"SPK",
"SRSLY",
"SPST",
"SPTO",
"SQ",
"SRY",
"SS",
"SSDD",
"SSIF",
"SSINF",
"ST&D",
"STFU",
"STR8",
"STW",
"SU",
"SUITM",
"SUL",
"SUP",
"SUTH",
"SUX",
"SUYF",
"SWAG",
"SWAG",
"SWAK",
"SWALK",
"SWAT",
"SWL",
"SWMBO",
"SYL",
"SYS",
"SYY",
"T+",
"T4BU",
"T:)T",
"TA",
"TAFN",
"TAM",
"TANK",
"TANKED",
"TANKING",
"TARFU",
"TAU",
"TAUMUALU",
"TBAG",
"TBC",
"TBD",
"TBH",
"TBL",
"TBT",
"TC",
"TCB",
"TCOY",
"TD",
"TD2M",
"TDTM",
"TFF",
"TFS",
"TFTF",
"TFTI",
"TFTT",
"TG",
"TGIF",
"THX",
"THT",
"THNX",
"THNQ",
"TIA",
"TIAD",
"TIC",
"TIL",
"TILIS",
"TIR",
"TLK2UL8R",
"TL",
"TL;DR",
"TM",
"TMA",
"TMB",
"TMB",
"TMI",
"TMOT",
"TMTH",
"TMYL",
"TMWFI",
"TNSTAAFL",
"TNT",
"TOJ",
"TOS",
"TOTES",
"TOU",
"TOY",
"TPM",
"TPTB",
"TQ",
"TSH",
"TSNF",
"TSTB",
"TT",
"TTFN",
"TTLY",
"TTTT",
"TTUL",
"TU",
"TUI",
"TURNT",
"TWSS",
"TTG",
"TTYAFN",
"TTYL",
"TTYS",
"TY",
"TYFC",
"TYFYC",
"TYS",
"TYT",
"TYSO",
"TYAFY",
"TYVM",
"^URS",
"UCMU",
"UDI",
"UDM",
"UDS",
"UFB",
"UFN",
"UFWM",
"UGTBK",
"UHGTBSM",
"UKTR",
"UL",
"U-L",
"UNA",
"UN4TUN8",
"UNBLEFBLE",
"UNCRTN",
"UNPC",
"UOK",
"UR",
"UR2YS4ME",
"URA*",
"URH",
"URSKTM",
"URTM",
"URW",
"USBCA",
"USU",
"UT",
"UT2L",
"UTM",
"UV",
"UW",
"UX",
"V",
"VAT",
"VBL",
"VBS",
"VEG",
"VFF",
"VFM",
"VGC",
"VGG",
"VGH",
"VIP",
"VM",
"VN",
"VNH",
"VoIP",
"VRY",
"VSC",
"VSF",
"VWD",
"VWP",
"W@",
"    W/",
"W/B",
"W3",
"W8",
"WAH",
"WAJ",
"WAM",
"WAN2",
"WAN2TLK",
"WAREZ",
"WAS",
"WAS",
"WAT",
"WAWA",
"WAYF",
"W/B",
"WB",
"WBS",
"WBU",
"WC",
"WC",
"WCA",
"W/E",
"W/END",
"WE",
"WEBO",
"WEEBO",
"WEP",
"WH5",
"WHATEVES",
"WIBNI",
"WDALYIC",
"WDYK",
"WDYT",
"WGACA",
"WIIFM",
"WISP",
"WITP",
"WITW",
"WIU",
"WK",
"WKD",
"WRT",
"WL",
"W/O",
"WOA",
"WOMBAT",
"WOW",
"WRK",
"WRU",
"WRU@",
"WRUD",
"WTB",
"WTF",
"WTFE",
"WTFO",
"WTG",
"WTGP",
"WTH",
"WTM",
"WTS",
"WTT",
"WU",
"WUCIWUG",
"WUF",
"WUP",
"WUT",
"WUW",
"WUU2",
"WUZ",
"WWJD",
"WWJD",
"WWNC",
"WWYC",
"WYCM",
"WYD",
"WYGAM",
"WYHAM",
"WYLEI",
"WYSIWYG",
"WYWH",
"X-1-10",
"X",
"X!",
"XD",
"XD",
"XME",
"XOXOXO",
"XLNT",
"XLR8",
"XYL",
"XYZ",
"Y?",
"Y",
"Y2K",
"YA",
"YAA",
"YABA",
"YARLY",
"YBIC",
"YBS",
"YCDBWYCID",
"YCHT",
"YCLIU",
"YCMU",
"YCT",
"YD",
"YF",
"YG",
"YGG",
"YGTBKM",
"YGTR",
"YHBT",
"YHBW",
"YHL",
"YIU",
"YKW",
"YKWYCD",
"YL",
"YMMV",
"YNK",
"YOLO",
"YR",
"YR",
"YRYOCC",
"YSIC",
"YSYD",
"YT",
"YT",
"YTB",
"YTB",
"YTTL",
"YTG",
"YW",
"YWHNB",
"YWHOL",
"YWSYLS",
"YYSSW",
"Z",
"Z",
"Z",
"Z%",
"ZH",
"ZOMG",
"ZOT",
"ZUP",
"ZZZZ"
];

module.exports = abbrevs;