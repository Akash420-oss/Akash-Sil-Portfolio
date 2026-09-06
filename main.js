"use strict";
const AVATAR = "data:image/jpeg;base64,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";

const PROFILE = {
  name: "Akash Sil",
  role: "Cybersecurity Researcher",
  focus: "VAPT · Web Application Security · Reverse Engineering",
  handle: "Akash420-oss",
  github: "https://github.com/Akash420-oss",
  email: "akashsil2392@gmail.com",
  host: "core",
  links: [
    { k: "github", v: "github.com/Akash420-oss", href: "https://github.com/Akash420-oss" },
    { k: "linkedin", v: "in/akash-sil-102481216", href: "https://linkedin.com/in/akash-sil-102481216" },
    { k: "aur", v: "aur.archlinux.org/akashsil2392", href: "https://aur.archlinux.org/account/akashsil2392" },
    { k: "email", v: "akashsil2392@gmail.com", href: "mailto:akashsil2392@gmail.com" }
  ],
  pitch: "Cybersecurity Researcher with hands-on experience in Vulnerability Assessment and Penetration Testing (VAPT) and advanced security research. Strong expertise in web application security, Linux internals, and custom security tool development.",
  plain: "I find security weaknesses in web applications and connected systems before criminals do. As a purple team operator and AUR maintainer, I build my own tools in Python and C to inspect binaries, forge packets, and automate vulnerability assessments.",
  experience: [
    {
      company: "Swiftsafe",
      role: "Cybersecurity Researcher Intern",
      period: "March 2026 – July 2026",
      points: [
        "Conducted end-to-end VAPT on 3+ client web applications, identifying 15+ critical OWASP Top 10 vulnerabilities.",
        "Automated security assessment workflows using Tenable Nessus and OWASP ZAP, reducing manual scanning time by 35%.",
        "Developed custom Python tools for network traffic analysis and protocol fuzzing in vehicle telematics systems.",
        "Executed manual web application security testing using Burp Suite, discovering 10+ high-severity flaws.",
        "Delivered comprehensive vulnerability reports with reproducible PoC exploits and remediation guidance."
      ]
    }
  ],
  strengths: [
    { k: "Languages", v: "Python, C, Java, JavaScript, Bash, Shell Script" },
    { k: "Security Tools", v: "Burp Suite, OWASP ZAP, Ghidra, GDB, Wireshark, Scapy, Nmap" },
    { k: "Core Domains", v: "VAPT, Web App Security, Reverse Engineering, Malware Analysis" },
    { k: "Systems", v: "Kali Linux, BlackArch Linux, Red Hat Linux, Windows" },
    { k: "Protocols", v: "TCP/IP, HTTP/HTTPS, DNS, CVE, CVSS" }
  ],

  toolGloss: {
    "burp suite": "intercepts and edits web traffic to find flaws",
    "owasp zap": "automated scanner for web vulnerabilities",
    "ghidra": "turns a compiled program back into readable logic",
    "gdb": "steps through a running program one line at a time",
    "wireshark": "reads network traffic packet by packet",
    "scapy": "builds network packets by hand in Python",
    "nmap": "maps what is listening on a network",
    "tcpdump": "captures traffic from the command line"
  }
};

const BODIES = [
  {
    id: "core", kind: "star", name: "CORE", cls: "class G · shell host",
    r: 13.5, color: "#FFD9A0", accent: "#FF9E3D",
    tagline: "The star is a login shell. Fly into it.",
    plain: "Click the sun to open a working command line. Type help it explains itself, "
      + "and every command is a real one you can try.",
    detail: ["Not a decoration: a parser, a history buffer, tab-completion and 20 commands.",
      "Everything the rest of this system holds can also be read from here as text."],
    stack: ["javascript", "canvas2d", "no dependencies"]
  },

  {
    id: "monalisaoni", kind: "planet", name: "Project Monalisa Oni", cls: "offensive network intelligence",
    repo: "https://github.com/Akash420-oss/Project_Monalisa_Offensive_Network_Intelligence", status: "public repo",
    orbit: { r: 30, tilt: 0.05, node: 0.4, phase: 0.2, spin: 0.9 },
    r: 5.0, color: "#C084FC", rings: false,
    satellites: [{ n: "packet-forge" }, { n: "traffic-tap" }, { n: "svc-fingerprint" }],
    tagline: "Your words, weaponized",
    plain: "I built Monalisa because I got tired of wrestling with command line tools. It's an offensive network recon platform that speaks plain English. You just type what you're looking for, and it figures out the technical execution in real time.",
    detail: [
      "It takes conversational prompts like 'scan my network' and translates them into the actual packets and probes needed to get the job done.",
      "Instead of staring at a wall of terminal text, it has a full GUI that builds a visual map of the attack surface based on your chat inputs.",
      "Under the hood, it completely abstracts the messy syntax of tools like Nmap and Scapy. It handles the banner grabbing and fingerprinting quietly in the background.",
      "I call the workflow 'vibe hacking.' You drive the engagement using pure intent and strategy, and the tool handles the manual labor."
    ],
    why: "If you're spending half your time Googling how to format a command, you're losing focus on the actual target. I wanted to build a tool that moves at the speed of thought, bridging the gap between what you want to do and actually doing it.",
    stack: ["python", "raw sockets", "scapy", "linux", "docker", "pyqt5"],
    uplinks: ["malvoid", "daredevil", "monalisa"]
  },

  {
    id: "malvoid", kind: "planet", name: "Malvoid", cls: "static malware analysis",
    repo: "https://aur.archlinux.org/packages/malvoid-analysis", status: "public repo",
    orbit: { r: 42, tilt: 0.13, node: 2.1, phase: 2.4, spin: 0.6 },
    r: 6.4, color: "#7C6BFF", rings: true,
    satellites: [{ n: "metadata-parser" }, { n: "hex-editor" }, { n: "strings-extractor" }],
    tagline: "Static malware analysis made accessible and automated.",
    plain: "Malvoid simplifies static malware analysis by extracting essential metadata, embedded strings, "
      + "and PE headers without executing the malicious file.",
    detail: ["Automates the initial triage of suspicious binaries.",
      "Extracts embedded strings to reveal potential IOCs (Indicators of Compromise).",
      "Parses PE headers and sections to identify anomalies."],
    why: "Executing unknown code is dangerous. Static analysis is the critical first step in understanding "
      + "a threat's capability.",
    stack: ["python", "c"],
    uplinks: ["daredevil"]
  },

  {
    id: "daredevil", kind: "planet", name: "Daredevil Game", cls: "reverse engineering",
    repo: "https://github.com/Akash420-oss/Dare-Devil", status: "public repo",
    orbit: { r: 52, tilt: 0.03, node: 4.4, phase: 4.0, spin: 1.1 },
    r: 5.6, color: "#A855F7", rings: false,
    satellites: [{ n: "reverse-engineering-game" }, { n: "official-write-up" }],
    tagline: "A comprehensive reverse engineering challenge game.",
    plain: "A collection of carefully crafted reverse engineering challenges designed to teach and test "
      + "binary analysis, debugging, and patching skills.",
    detail: ["Includes multiple levels of difficulty, from basic string extraction to advanced anti-debugging techniques.",
      "Comes with a companion web application (Dare-Devil-Web) for scoring and tracking.",
      "Supported by an official write-up repository for learning and reference."],
    why: "The best way to learn reverse engineering is by struggling with intentionally confusing binaries.",
    stack: ["c", "assembly", "gdb", "ghidra", "radare2"],
    uplinks: ["malvoid", "daredevilweb"]
  },
  {
    id: "monalisa", kind: "planet", name: "Project Monalisa", cls: "network analysis",
    repo: "https://aur.archlinux.org/packages/project-monalisa", status: "public repo",
    orbit: { r: 64, tilt: 0.06, node: 0.1, phase: 0.1, spin: 0.2 },
    r: 5.0, color: "#ACE5EE", rings: false,
    satellites: [
      { n: "packet-crafter" },
      { n: "traffic-monitor" },
      { n: "service-scanner" }
    ],
    tagline: "Network analysis through interactive dialogue",
    plain: "I built this project to deeply understand how networking protocols work under the hood. It's an interactive, CLI-based network analysis tool that asks you simple questions instead of forcing you to memorize complex command-line arguments.",
    detail: [
      "It acts as a step-by-step wizard. Whether you want to send custom crafted packets or monitor live network traffic, the CLI guides you through the process intuitively.",
      "Instead of requiring you to write long manual commands like Nmap or other traditional tools, it uses a prompt-and-answer format to discover and identify services like SSH, FTP, and Telnet.",
      "Under the hood, it completely abstracts the messy syntax of raw sockets and Scapy, handling packet forging, traffic tapping, and service fingerprinting automatically based on your answers.",
      "The workflow is focused purely on education and exploration. You drive the discovery process by answering straightforward questions, allowing you to focus on how the protocols actually behave."
    ],
    why: "I developed this tool to eliminate the steep learning curve of traditional command syntax, allowing users to focus directly on protocol behavior and real time network interaction.",
    stack: [
      "python",
      "raw sockets",
      "scapy",
      "linux",
      "cli"
    ],
    uplinks: ["malvoid", "monalisaoni"]
  },
  {
    id: "daredevilweb", kind: "planet", name: "Daredevil Web Game", cls: "web based hacking",
    repo: "https://github.com/Akash420-oss/Dare-Devil-Web", status: "public repo",
    orbit: { r: 90, tilt: 0.02, node: 0.7, phase: 4.0, spin: 1.2 },
    r: 5.6, color: "#FFBC75", rings: false,
    satellites: [{ n: "web-game" }, { n: "dom-manupulation" }],
    tagline: "A comprehensive reverse engineering challenge game.",
    plain: "A collection of carefully crafted reverse engineering challenges designed to teach and test "
      + "binary analysis, debugging, and patching skills.",
    detail: ["Includes multiple levels of difficulty, from basic string extraction to advanced anti-debugging techniques.",
      "Comes with a companion web application (Dare-Devil-Web) for scoring and tracking.",
      "Supported by an official write-up repository for learning and reference."],
    why: "The best way to learn reverse engineering is by struggling with intentionally confusing binaries.",
    stack: ["html", "css", "js"],
    uplinks: ["daredevil"]
  },

  {
    id: "driveconnect", kind: "planet", name: "Drive Connect", cls: "iot utility",
    repo: "https://github.com/Akash420-oss/Drive-Connect", status: "public repo",
    orbit: { r: 118, tilt: 0.10, node: 1.2, phase: 0.9, spin: 0.5 },
    r: 4.8, color: "#6D28D9", rings: false,
    satellites: [
      { n: "wifi-car" },
      { n: "wifi-remote" },
      { n: "tcp-udp" }
    ],
    tagline: "A dual mode IoT smart car controlled via web interface or a custom hardware remote.",
    plain: "This IoT project features a smart car that operates in two distinct network modes depending on your preference. When you power it on and connect with a smartphone or laptop, it acts as a TCP server and hosts a control webpage. Alternatively, if you connect it using the custom-built Wi-Fi remote, it acts as a UDP server for direct, low-latency control without a web interface.",
    detail: [
      "Dynamically switches between TCP and UDP server modes upon boot based on the first connected device.",
      "Hosts an interactive HTML/CSS web dashboard for browser-based control (TCP mode).",
      "Supports direct, peer-to-peer communication with a custom NodeMCU physical remote via push buttons (UDP mode)."
    ],
    why: "To demonstrate flexible IoT networking by allowing users to choose between a convenient, device-agnostic web interface and a tactile, dedicated physical controller.",
    stack: [
      "c++",
      "html",
      "css",
      "nodemcu-esp8266",
      "l293d-motor-driver"
    ],
    uplinks: []
  },

  {
    id: "loveria", kind: "planet", name: "LoVeriA ViRus", cls: "love malware",
    repo: "https://github.com/Akash420-oss/LoVeriA-ViRus", status: "public repo",
    orbit: { r: 148, tilt: 0.16, node: 3.3, phase: 5.4, spin: 1.4 },
    r: 4.2, color: "#D8B4FE", rings: false,
    satellites: [{ n: "decryption_engine" }, { n: "mock_payload" }],
    tagline: "A high-stakes 'love test' decryption challenge with simulated consequences.",
    plain: "A gamified proof-of-concept where players must decrypt love-themed puzzles. "
      + "Failing to crack the codes triggers a simulated destructive payload, turning "
      + "cryptography practice into a thrilling, high-stakes sandbox challenge.",
    detail: ["Implements a C backend for cryptographic logic and puzzle verification.",
      "Uses Shell scripting to manage execution flow and environment setup.",
      "Acts as a fun, controlled environment for practicing reverse engineering and analyzing mock ransomware behaviors."],
    why: "To gamify cryptography and mock payload execution, making analysis and decryption practice more engaging.",
    stack: ["c", "shell scripting"],
    uplinks: ["malvoid"]
  },

  {
    id: "contributions", kind: "planet", name: "Community & Publications", cls: "community impact",
    orbit: { r: 180, tilt: 0.07, node: 5.6, phase: 3.1, spin: 2.0 },
    r: 3.8, color: "#8B5CF6", rings: false,
    satellites: [{ n: "medium-writeups" }, { n: "aur-packages" }, { n: "garuda-forum" }, { n: "ijrar" }, { n: "tryhackme" }],
    tagline: "Giving back to the security and open-source communities.",
    plain: "I actively contribute to the Linux and cybersecurity communities by maintaining Arch User Repository (AUR) packages, writing detailed TryHackMe room writeups on Medium, and participating in forums like Garuda Linux.",
    detail: ["Published 'Daredevil Write-up' on Medium, explaining reverse engineering challenges from TryHackMe.",
      "Maintainer of specialized security utilities on the Arch User Repository (AUR).",
      "Active contributor in the Garuda Linux forum, assisting users and resolving technical issues.",
      "Contributed to rooms on TryHackMe, creating educational content for aspiring hackers."],
    why: "Security knowledge grows best when shared openly. Documenting solutions helps others and reinforces my own understanding.",
    stack: ["markdown", "arch linux", "git", "technical writing"],
    links: [
      { text: "Medium: Daredevil Writeup", href: "https://medium.com/@akashsil2392/daredevil-write-up-tryhackme-01d1d715cc9c" },
      { text: "Garuda Linux Activity", href: "https://forum.garudalinux.org/u/akash420-oss/activity" },
      { text: "AUR Packages", href: "https://aur.archlinux.org/account/akashsil2392" },
      { text: "IJRAR", href: "https://ijrar.org/track.php?r_id=265995" },
      { text: "TryHackMe", href: "https://tryhackme.com/jr/daredevil" }
    ],
    uplinks: []
  },

  {
    id: "identity", kind: "field", name: "Constellation ORION", cls: "biometric lattice",
    pos: { x: -58, y: 46, z: -72 },
    color: "#D8B4FE",
    tagline: "Nine stars, one face. Send the scanner in.",
    plain: "A cluster of stars that only makes sense once a satellite sweeps it: the lines resolve "
      + "into a portrait. It is the 'about me' page, wearing a costume.",
    detail: ["Click it, then launch the scan probe. The lattice is decoded top to bottom.",
      "The reveal is progressive the image is composited line by line as the beam passes."],
    stack: ["canvas2d", "procedural scan"]
  }
];


const EXTRA_LINKS = [["monalisa", "malvoid"], ["daredevil", "loveria"]];

const FILES = {
  "about.txt": ["Akash Sil security researcher.", "",
    "I work on IoT security, network penetration testing and reverse engineering.",
    "Linux is where I live; C, Python and shell are how I argue with it.",
    "Preference for building the probe over reading someone else's summary line."].join("\n"),
  "skills.txt": null,
  "contact.txt": null,
  "notes/iot.md": ["# field notes iot", "",
    "- default credentials are still the most reliable finding",
    "- the debug UART is almost always still populated",
    "- 'signed update' usually means 'checksummed update'",
    "- the network parser is the first place to look and the last place anyone tested"].join("\n"),
  "flag.txt": "nice try. the flag is on a box you own.  :)"
};

"use strict";
const $ = s => document.querySelector(s);
const $$ = s => Array.prototype.slice.call(document.querySelectorAll(s));

const TAU = Math.PI * 2;
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const lerp = (a, b, t) => a + (b - a) * t;
const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeInQuad = t => t * t;


function mulberry(seed) {
  return function () {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const rnd = mulberry(0x420);

const REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const TOUCH = window.matchMedia && window.matchMedia("(hover: none)").matches;
const LOWPOWER = TOUCH || (navigator.hardwareConcurrency || 4) <= 4;

const cv = $("#scene");
const ctx = cv.getContext("2d", { alpha: false });
let W = 0, H = 0, DPR = 1, focal = 900;

const bloomCv = document.createElement("canvas");
const bctx = bloomCv.getContext("2d");
const BLOOM_DIV = LOWPOWER ? 5 : 4;
let BLOOM_OK = true;

function resize() {
  DPR = Math.min(window.devicePixelRatio || 1, LOWPOWER ? 1.5 : 2);
  W = Math.max(320, cv.clientWidth || window.innerWidth);
  H = Math.max(320, cv.clientHeight || window.innerHeight);
  cv.width = Math.round(W * DPR);
  cv.height = Math.round(H * DPR);
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  bloomCv.width = Math.max(2, Math.round(W / BLOOM_DIV));
  bloomCv.height = Math.max(2, Math.round(H / BLOOM_DIV));
  focal = (H / 2) / Math.tan(cam.fov / 2);
  buildNebula();
}

const cam = {
  tx: 0, ty: 0, tz: 0,
  dist: 210, yaw: 0.6, pitch: 0.42, fov: 1.02,
  minDist: 26, maxDist: 520
};
let eye = { x: 0, y: 0, z: 0 }, bR = { x: 1, y: 0, z: 0 }, bU = { x: 0, y: 1, z: 0 }, bF = { x: 0, y: 0, z: 1 };

function updateCamera() {
  const cp = Math.cos(cam.pitch), sp = Math.sin(cam.pitch);
  const cy = Math.cos(cam.yaw), sy = Math.sin(cam.yaw);
  bF.x = -cp * sy; bF.y = -sp; bF.z = -cp * cy;
  eye.x = cam.tx - bF.x * cam.dist;
  eye.y = cam.ty - bF.y * cam.dist;
  eye.z = cam.tz - bF.z * cam.dist;
  bR.x = -cy; bR.y = 0; bR.z = sy;
  bU.x = bF.y * bR.z - bF.z * bR.y;
  bU.y = bF.z * bR.x - bF.x * bR.z;
  bU.z = bF.x * bR.y - bF.y * bR.x;
}

function project(x, y, z) {
  const dx = x - eye.x, dy = y - eye.y, dz = z - eye.z;
  const cz = dx * bF.x + dy * bF.y + dz * bF.z;
  if (cz <= 0.6) return null;
  const cx = dx * bR.x + dy * bR.y + dz * bR.z;
  const cyy = dx * bU.x + dy * bU.y + dz * bU.z;
  const f = focal / cz;
  return { x: W * 0.5 + cx * f, y: H * 0.5 - cyy * f, z: cz, s: f };
}

let neb = document.createElement("canvas");
function buildNebula() {
  const nw = Math.round(W * 1.3), nh = Math.round(H * 1.3);
  neb.width = nw; neb.height = nh;
  const g = neb.getContext("2d");
  g.clearRect(0, 0, nw, nh);
  const blobs = [
    [0.22, 0.30, 0.62, "rgba(109,40,217,0.42)"],
    [0.78, 0.24, 0.50, "rgba(168,85,247,0.26)"],
    [0.58, 0.76, 0.66, "rgba(42,17,71,0.85)"],
    [0.12, 0.80, 0.42, "rgba(124,107,255,0.20)"],
    [0.90, 0.66, 0.38, "rgba(216,180,254,0.11)"],
    [0.46, 0.46, 0.85, "rgba(30,11,56,0.55)"]
  ];
  const R = Math.max(nw, nh);
  for (const [px, py, rr, col] of blobs) {
    const x = px * nw, y = py * nh, rad = rr * R * 0.55;
    const rg = g.createRadialGradient(x, y, 0, x, y, rad);
    rg.addColorStop(0, col);
    rg.addColorStop(0.55, col.replace(/[\d.]+\)$/, "0.06)"));
    rg.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = rg; g.beginPath(); g.arc(x, y, rad, 0, TAU); g.fill();
  }
  const dust = mulberry(7);
  g.globalAlpha = 0.5;
  for (let i = 0; i < (LOWPOWER ? 900 : 2200); i++) {
    const x = dust() * nw, y = dust() * nh, a = dust();
    g.fillStyle = a > .82 ? "rgba(216,180,254,.5)" : "rgba(139,123,168,.28)";
    g.fillRect(x, y, 1, 1);
  }
  g.globalAlpha = 1;
}
const STAR_N = LOWPOWER ? 620 : 1500;
const SKY_R = 2400;
const stars = [];
(function seedStars() {
  for (let i = 0; i < STAR_N; i++) {
    const u = rnd() * 2 - 1, th = rnd() * TAU, sr = Math.sqrt(1 - u * u);
    const mag = Math.pow(rnd(), 2.6);
    stars.push({
      x: SKY_R * sr * Math.cos(th), y: SKY_R * u * 0.75, z: SKY_R * sr * Math.sin(th),
      m: 0.35 + mag * 1.5,
      c: rnd() > .90 ? "#D8B4FE" : rnd() > .78 ? "#C9B8FF" : "#EDE9F4",
      tw: rnd() * TAU, tws: 0.5 + rnd() * 2.2
    });
  }
})();

function drawSky(t) {
  ctx.fillStyle = "#07030F";
  ctx.fillRect(0, 0, W, H);
  const ox = -(((cam.yaw / TAU) % 1) + 1) % 1 * (neb.width - W);
  const oy = -clamp((cam.pitch + 1) / 2, 0, 1) * (neb.height - H);
  ctx.globalAlpha = 0.9;
  ctx.drawImage(neb, ox, oy);
  ctx.globalAlpha = 1;

  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    const p = project(s.x, s.y, s.z);
    if (!p || p.x < -8 || p.x > W + 8 || p.y < -8 || p.y > H + 8) continue;
    const tw = 0.72 + 0.28 * Math.sin(t * s.tws + s.tw);
    const a = clamp(s.m * 0.62 * tw, 0, 1);
    const sz = s.m > 1.35 ? 2 : 1;
    ctx.globalAlpha = a;
    ctx.fillStyle = s.c;
    ctx.fillRect(p.x | 0, p.y | 0, sz, sz);
  }
  ctx.globalAlpha = 1;
}

const bloomQueue = [];
function queueGlow(x, y, r, color, alpha) { bloomQueue.push([x, y, r, color, alpha]); }
function flushBloom() {
  if (!bloomQueue.length) return;
  const k = 1 / BLOOM_DIV;
  bctx.setTransform(1, 0, 0, 1, 0, 0);
  bctx.clearRect(0, 0, bloomCv.width, bloomCv.height);
  bctx.globalCompositeOperation = "lighter";
  for (let i = 0; i < bloomQueue.length; i++) {
    const [x, y, r, color, alpha] = bloomQueue[i];
    const bx = x * k, by = y * k, br = Math.max(1, r * k);
    const rg = bctx.createRadialGradient(bx, by, 0, bx, by, br);
    rg.addColorStop(0, color);
    rg.addColorStop(1, "rgba(0,0,0,0)");
    bctx.globalAlpha = alpha;
    bctx.fillStyle = rg;
    bctx.beginPath(); bctx.arc(bx, by, br, 0, TAU); bctx.fill();
  }
  bctx.globalAlpha = 1;
  bloomQueue.length = 0;
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  if (BLOOM_OK) ctx.filter = "blur(" + (LOWPOWER ? 5 : 7) + "px)";
  ctx.globalAlpha = BLOOM_OK ? 0.85 : 0.5;
  ctx.drawImage(bloomCv, 0, 0, W, H);
  ctx.restore();
  ctx.filter = "none";
}

const tweens = [];
function tween(dur, onStep, onDone, ease) {
  const o = { t: 0, dur: dur, step: onStep, done: onDone, ease: ease || easeInOutCubic };
  tweens.push(o); return o;
}
function stepTweens(dt) {
  for (let i = tweens.length - 1; i >= 0; i--) {
    const w = tweens[i];
    w.t += dt;
    const k = clamp(w.t / w.dur, 0, 1);
    w.step(w.ease(k), k);
    if (k >= 1) { tweens.splice(i, 1); if (w.done) w.done(); }
  }
}

let fly = null;
function shortAngle(a, b) { let d = (b - a) % TAU; if (d > Math.PI) d -= TAU; if (d < -Math.PI) d += TAU; return a + d; }
function flyTo(to, dur, onDone) {
  const from = { tx: cam.tx, ty: cam.ty, tz: cam.tz, dist: cam.dist, yaw: cam.yaw, pitch: cam.pitch };
  const dst = {
    tx: to.tx, ty: to.ty, tz: to.tz,
    dist: to.dist,
    yaw: to.yaw !== undefined ? shortAngle(cam.yaw, to.yaw) : undefined,
    pitch: to.pitch
  };
  fly = { from: from, to: dst, t: 0, dur: REDUCED ? 0.25 : (dur || 1.5), done: onDone };
}
function stepFly(dt) {
  if (!fly) return;
  fly.t += dt;
  const k = clamp(fly.t / fly.dur, 0, 1), e = easeInOutCubic(k);
  if (fly.to.tx !== undefined) cam.tx = lerp(fly.from.tx, fly.to.tx, e);
  if (fly.to.ty !== undefined) cam.ty = lerp(fly.from.ty, fly.to.ty, e);
  if (fly.to.tz !== undefined) cam.tz = lerp(fly.from.tz, fly.to.tz, e);
  if (fly.to.dist !== undefined) cam.dist = lerp(fly.from.dist, fly.to.dist, e);
  if (fly.to.yaw !== undefined) cam.yaw = lerp(fly.from.yaw, fly.to.yaw, e);
  if (fly.to.pitch !== undefined) cam.pitch = lerp(fly.from.pitch, fly.to.pitch, e);
  if (k >= 1) { const d = fly.done; fly = null; if (d) d(); }
}

function orbitPos(o, ang) {
  const x = Math.cos(ang) * o.r, z = Math.sin(ang) * o.r;
  const ct = Math.cos(o.tilt), st = Math.sin(o.tilt);
  const y2 = -z * st, z2 = z * ct;
  const cn = Math.cos(o.node), sn = Math.sin(o.node);
  return { x: x * cn + z2 * sn, y: y2, z: -x * sn + z2 * cn };
}

function strokeOrbit(o, color, alpha, width, dashed) {
  const N = LOWPOWER ? 60 : 108;
  ctx.save();
  ctx.lineWidth = width || 1;
  if (dashed) ctx.setLineDash([3, 7]);
  let started = false, prev = null;
  ctx.beginPath();
  for (let i = 0; i <= N; i++) {
    const q = orbitPos(o, i / N * TAU);
    const p = project(q.x, q.y, q.z);
    if (!p) { started = false; continue; }
    if (!started) { ctx.moveTo(p.x, p.y); started = true; }
    else ctx.lineTo(p.x, p.y);
    prev = p;
  }
  ctx.strokeStyle = color;
  ctx.globalAlpha = alpha;
  ctx.stroke();
  ctx.restore();
  ctx.globalAlpha = 1;
}

function lightDir(from, to) {
  let dx = to.x - from.x, dy = to.y - from.y, dz = to.z - from.z;
  const L = Math.hypot(dx, dy, dz) || 1; dx /= L; dy /= L; dz /= L;
  return { sx: dx * bR.x + dy * bR.y + dz * bR.z, sy: -(dx * bU.x + dy * bU.y + dz * bU.z) };
}
function shade(hex, k) {
  const n = parseInt(hex.slice(1), 16);
  const r = clamp(Math.round((n >> 16 & 255) * k), 0, 255);
  const g = clamp(Math.round((n >> 8 & 255) * k), 0, 255);
  const b = clamp(Math.round((n & 255) * k), 0, 255);
  return "rgb(" + r + "," + g + "," + b + ")";
}
function rgba(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return "rgba(" + (n >> 16 & 255) + "," + (n >> 8 & 255) + "," + (n & 255) + "," + a + ")";
}

function drawSphere(px, py, rr, color, ld, spin, wire) {
  const gx = px - ld.sx * rr * 0.52, gy = py - ld.sy * rr * 0.52;
  const g = ctx.createRadialGradient(gx, gy, rr * 0.06, gx, gy, rr * 1.55);
  g.addColorStop(0, shade(color, 1.42));
  g.addColorStop(0.34, color);
  g.addColorStop(0.72, shade(color, 0.42));
  g.addColorStop(1, shade(color, 0.10));
  ctx.beginPath(); ctx.arc(px, py, rr, 0, TAU);
  ctx.fillStyle = g; ctx.fill();

  if (wire && rr > 5) {
    ctx.save();
    ctx.beginPath(); ctx.arc(px, py, rr * 0.985, 0, TAU); ctx.clip();
    ctx.strokeStyle = rgba(color, 0.30); ctx.lineWidth = 0.8;
    for (let i = 1; i <= 3; i++) {
      const yy = py + (i - 2) * rr * 0.46;
      const w = rr * Math.sqrt(Math.max(0, 1 - Math.pow((i - 2) * 0.46, 2)));
      ctx.beginPath(); ctx.ellipse(px, yy, w, Math.max(1, w * 0.20), 0, 0, TAU); ctx.stroke();
    }
    for (let i = 0; i < 4; i++) {
      const ph = spin + i * Math.PI / 4;
      const w = Math.abs(Math.cos(ph)) * rr;
      if (w < 0.8) continue;
      ctx.globalAlpha = 0.22 + 0.28 * Math.abs(Math.cos(ph));
      ctx.beginPath(); ctx.ellipse(px, py, w, rr, 0, 0, TAU); ctx.stroke();
    }
    ctx.restore();
  }
  ctx.beginPath();
  ctx.arc(px, py, rr * 0.995, 0, TAU);
  ctx.strokeStyle = rgba(color, 0.55); ctx.lineWidth = Math.max(0.6, rr * 0.045);
  ctx.stroke();
}

function label(px, py, text, color, sub, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha === undefined ? 1 : alpha;
  ctx.font = "9px " + FONT;
  ctx.textAlign = "left"; ctx.textBaseline = "middle";
  const w = ctx.measureText(text.toUpperCase()).width;
  ctx.strokeStyle = rgba(color, 0.5); ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + 11, py - 11); ctx.lineTo(px + 15 + w, py - 11); ctx.stroke();
  ctx.fillStyle = color;
  ctx.letterSpacing = "1.4px";
  ctx.fillText(text.toUpperCase(), px + 13, py - 17);
  if (sub) {
    ctx.font = "8px " + FONT;
    ctx.fillStyle = "rgba(139,123,168,.95)";
    ctx.fillText(sub.toUpperCase(), px + 13, py - 6);
  }
  ctx.letterSpacing = "0px";
  ctx.restore();
}
const FONT = 'ui-monospace,"SF Mono",Menlo,"DejaVu Sans Mono","Liberation Mono",monospace';

"use strict";

const world = { star: null, planets: [], field: null, marker: null, byId: {}, links: [] };
let T = 0;
let hovered = null, focusId = null;
const hits = [];

(function buildWorld() {
  for (const b of BODIES) {
    const o = Object.assign({}, b);
    o.pos = b.pos ? { x: b.pos.x, y: b.pos.y, z: b.pos.z } : { x: 0, y: 0, z: 0 };
    o.spin = 0; o.scr = null; o.glow = 0;
    if (o.orbit) {
      o.ang = o.orbit.phase;
      o.rate = 0.28 * Math.pow(34 / o.orbit.r, 1.5);
    }
    if (o.satellites) {
      o.sats = o.satellites.map(function (s, i) {
        return {
          n: s.n,
          r: o.r * 2.15 + i * (o.r * 0.5),
          tilt: 0.35 + i * 0.46, node: i * 1.9 + 0.6,
          ang: i * 2.3, rate: 1.15 - i * 0.11,
          pos: { x: 0, y: 0, z: 0 }, scr: null
        };
      });
    }
    if (o.kind === "star") world.star = o;
    else if (o.kind === "planet") world.planets.push(o);
    else if (o.kind === "field") world.field = o;
    else if (o.kind === "marker") world.marker = o;
    world.byId[o.id] = o;
  }
  const seen = {};
  function add(a, b) {
    if (a === b) return;
    const key = [a, b].sort().join(">");
    if (seen[key] || !world.byId[a] || !world.byId[b]) return;
    seen[key] = 1;
    world.links.push({ a: a, b: b, ph: world.links.length * 0.73 });
  }
  for (const p of world.planets) (p.uplinks || []).forEach(function (u) { add(p.id, u); });
  EXTRA_LINKS.forEach(function (pair) { add(pair[0], pair[1]); });
})();


const CONST_PTS = [
  [0.00, -1.00], [-0.55, -0.62], [0.55, -0.62], [-0.78, 0.02], [0.78, 0.02],
  [-0.42, 0.62], [0.42, 0.62], [0.00, 0.95], [0.00, 0.05]
];
const CONST_EDGES = [[0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 7], [1, 8], [2, 8], [8, 5], [8, 6]];
const CONST_SCALE = 21;
(function seedField() {
  const f = world.field;
  f.stars = CONST_PTS.map(function (p, i) {
    return {
      lx: p[0] * CONST_SCALE, ly: p[1] * CONST_SCALE, lz: (rnd() - 0.5) * 5,
      pos: { x: 0, y: 0, z: 0 }, scr: null, lit: 0
    };
  });
  f.sway = 0; f.scan = 0; f.scanning = false; f.resolved = false; f.hold = false;

  f.vis = 0; f.shown = false;
  f.probe = { t: 0, pos: { x: 0, y: 0, z: 0 }, scr: null, on: false };
})();


function updateWorld(dt) {
  world.star.spin += dt * 0.2;

  for (const p of world.planets) {
    p.ang += dt * p.rate;
    const q = orbitPos(p.orbit, p.ang);
    p.pos.x = q.x; p.pos.y = q.y; p.pos.z = q.z;
    p.spin += dt * p.orbit.spin * 0.55;
    if (p.sats) for (const st of p.sats) {
      st.ang += dt * st.rate;
      const lq = orbitPos({ r: st.r, tilt: st.tilt, node: st.node }, st.ang);
      st.pos.x = p.pos.x + lq.x; st.pos.y = p.pos.y + lq.y; st.pos.z = p.pos.z + lq.z;
    }
  }

  const m = world.marker;
  if (m) {
    m.ang += dt * 0.05; const q = orbitPos(m.orbit, m.ang);
    m.pos.x = q.x; m.pos.y = q.y; m.pos.z = q.z;
  }

  const f = world.field;

  const vTarget = f.shown ? 1 : 0;
  if (f.vis !== vTarget) {
    const rate = dt * (vTarget ? 1.7 : 2.4);
    f.vis = vTarget > f.vis ? Math.min(vTarget, f.vis + rate) : Math.max(vTarget, f.vis - rate);
    if (!f.shown && f.vis <= 0.0001 && (f.resolved || f.scan > 0 || f.scanning)) {
      f.resolved = false; f.scanning = false; f.scan = 0;
      for (const st of f.stars) st.lit = 0;
    }
  }
  if (!f.hold) f.sway += dt * 0.11;
  const c = Math.cos(f.sway), sn = Math.sin(f.sway);
  for (const st of f.stars) {
    const lx = st.lx * c - st.lz * sn, lz = st.lx * sn + st.lz * c;
    st.pos.x = f.pos.x + lx;
    st.pos.y = f.pos.y - st.ly;
    st.pos.z = f.pos.z + lz;
  }
  if (f.scanning) {
    const ly = lerp(-CONST_SCALE, CONST_SCALE, f.scan);
    for (const st of f.stars) if (st.ly <= ly) st.lit = Math.min(1, st.lit + dt * 5);
    f.probe.t += dt;
    f.probe.on = true;
    f.probe.pos.x = f.pos.x + Math.cos(f.probe.t * 1.7) * CONST_SCALE * 1.6;
    f.probe.pos.y = f.pos.y - ly + CONST_SCALE * 0.55;
    f.probe.pos.z = f.pos.z + Math.sin(f.probe.t * 1.7) * CONST_SCALE * 1.6;
  } else {
    f.probe.on = false;
    if (!f.resolved) for (const st of f.stars) st.lit = Math.max(0, st.lit - dt * 1.4);
  }
}

function drawLinks() {
  for (const L of world.links) {
    const A = world.byId[L.a], B = world.byId[L.b];
    const pa = project(A.pos.x, A.pos.y, A.pos.z), pb = project(B.pos.x, B.pos.y, B.pos.z);
    if (!pa || !pb) continue;
    const hot = focusId === L.a || focusId === L.b ||
      (hovered && (hovered.id === L.a || hovered.id === L.b));
    ctx.save();
    ctx.strokeStyle = hot ? rgba("#D8B4FE", 0.62) : rgba("#A855F7", 0.17);
    ctx.lineWidth = hot ? 1.15 : 0.7;
    ctx.setLineDash(hot ? [] : [2, 6]);
    ctx.beginPath(); ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y); ctx.stroke();
    ctx.restore();

    const k = ((T * 0.22 + L.ph) % 1);
    const px = lerp(pa.x, pb.x, k), py = lerp(pa.y, pb.y, k);
    ctx.globalAlpha = hot ? 0.95 : 0.5;
    ctx.fillStyle = hot ? "#EDE9F4" : "#D8B4FE";
    ctx.fillRect(px - 1.2, py - 1.2, 2.4, 2.4);
    ctx.globalAlpha = 1;
  }
}

function drawStar(p) {
  const s = world.star;
  const rr = Math.max(3, s.r * p.s);
  const beat = 1 + 0.035 * Math.sin(T * 1.6) + 0.02 * Math.sin(T * 4.1);
  const R = rr * beat;

  const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, R * 4.6);
  g.addColorStop(0, "rgba(255,240,214,0.95)");
  g.addColorStop(0.13, "rgba(255,205,140,0.55)");
  g.addColorStop(0.34, "rgba(196,132,252,0.20)");
  g.addColorStop(0.68, "rgba(109,40,217,0.09)");
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(p.x, p.y, R * 4.6, 0, TAU); ctx.fill();

  ctx.fillStyle = "#FFF3DC";
  ctx.beginPath(); ctx.arc(p.x, p.y, R, 0, TAU); ctx.fill();
  const core = ctx.createRadialGradient(p.x - R * 0.2, p.y - R * 0.25, R * 0.05, p.x, p.y, R);
  core.addColorStop(0, "#FFFFFF"); core.addColorStop(0.6, "#FFD9A0"); core.addColorStop(1, "#FF9E3D");
  ctx.fillStyle = core; ctx.beginPath(); ctx.arc(p.x, p.y, R, 0, TAU); ctx.fill();


  ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(s.spin);
  ctx.strokeStyle = "rgba(255,205,140,.30)"; ctx.lineWidth = 1;
  for (let i = 0; i < 18; i++) {
    const a = i / 18 * TAU, len = R * (1.25 + 0.55 * Math.abs(Math.sin(T * 0.9 + i)));
    ctx.beginPath(); ctx.moveTo(Math.cos(a) * R * 1.04, Math.sin(a) * R * 1.04);
    ctx.lineTo(Math.cos(a) * len, Math.sin(a) * len); ctx.stroke();
  }
  ctx.restore();
  queueGlow(p.x, p.y, R * 5.2, "rgba(255,190,120,0.55)", 0.9);

  const near = cam.dist < 70;
  label(p.x + R * 0.75, p.y - R * 0.75, "core", "#FFD9A0",
    near ? "click to enter shell" : "class g · shell host", 0.95);
  hits.push({ o: s, x: p.x, y: p.y, r: Math.max(20, R * 1.25) });
}


function drawPlanet(b, p) {
  const rr = Math.max(1.6, b.r * p.s);
  const ld = lightDir(b.pos, world.star.pos);
  const isHot = focusId === b.id || (hovered && hovered.id === b.id);

  if (b.sats && (rr > 7 || isHot)) {
    for (const st of b.sats) {
      ctx.save(); ctx.globalAlpha = isHot ? 0.30 : 0.14;
      const N = 40; ctx.beginPath(); let go = false;
      for (let i = 0; i <= N; i++) {
        const lq = orbitPos({ r: st.r, tilt: st.tilt, node: st.node }, i / N * TAU);
        const q = project(b.pos.x + lq.x, b.pos.y + lq.y, b.pos.z + lq.z);
        if (!q) { go = false; continue; }
        if (!go) { ctx.moveTo(q.x, q.y); go = true; } else ctx.lineTo(q.x, q.y);
      }
      ctx.strokeStyle = rgba(b.color, 0.8); ctx.lineWidth = 0.7; ctx.stroke(); ctx.restore();
    }
  }

  drawSphere(p.x, p.y, rr, b.color, ld, b.spin, rr > 5);

  if (b.rings) {
    ctx.save(); ctx.globalAlpha = 0.55;
    const N = 56;
    for (const mul of [1.7, 2.0, 2.25]) {
      ctx.beginPath(); let go = false;
      for (let i = 0; i <= N; i++) {
        const lq = orbitPos({ r: b.r * mul, tilt: 1.28, node: b.orbit.node + 0.35 }, i / N * TAU);
        const q = project(b.pos.x + lq.x, b.pos.y + lq.y, b.pos.z + lq.z);
        if (!q) { go = false; continue; }
        if (!go) { ctx.moveTo(q.x, q.y); go = true; } else ctx.lineTo(q.x, q.y);
      }
      ctx.strokeStyle = rgba(b.color, mul === 2.0 ? 0.5 : 0.28);
      ctx.lineWidth = mul === 2.0 ? 1.4 : 0.9; ctx.stroke();
    }
    ctx.restore();
  }

  if (isHot) {
    ctx.save();
    ctx.strokeStyle = rgba("#D8B4FE", 0.9); ctx.lineWidth = 1;
    const R2 = rr + 9 + Math.sin(T * 3) * 1.5;
    ctx.setLineDash([5, 5]); ctx.lineDashOffset = -T * 14;
    ctx.beginPath(); ctx.arc(p.x, p.y, R2, 0, TAU); ctx.stroke();
    ctx.restore();
  }
  queueGlow(p.x, p.y, rr * 3.2, rgba(b.color, isHot ? 0.55 : 0.34), 0.8);

  if (rr > 2.4) label(p.x + rr * 0.8, p.y - rr * 0.8, b.name, isHot ? "#EDE9F4" : "#D8B4FE",
    b.cls, clamp(1.1 - p.z / 460, 0.35, 1));
  hits.push({ o: b, x: p.x, y: p.y, r: Math.max(16, rr * 1.35) });
}

function drawSat(b, st, p) {
  const rr = clamp(1.8 * p.s * 0.55, 0.9, 3.4);
  ctx.globalAlpha = 0.95;
  ctx.fillStyle = "#EDE9F4";
  ctx.beginPath(); ctx.arc(p.x, p.y, rr, 0, TAU); ctx.fill();
  ctx.globalAlpha = 0.35;
  ctx.fillStyle = rgba(b.color, 0.9);
  ctx.beginPath(); ctx.arc(p.x, p.y, rr * 2.4, 0, TAU); ctx.fill();
  ctx.globalAlpha = 1;
  const showName = (focusId === b.id) || (hovered && hovered.id === b.id) || rr > 2.6;
  if (showName) {
    ctx.save();
    ctx.font = "8px " + FONT; ctx.fillStyle = "rgba(216,180,254,.85)";
    ctx.textAlign = "center"; ctx.fillText(st.n, p.x, p.y - rr - 5);
    ctx.restore();
  }
}

function drawMarker(m, p) {
  const rr = clamp(7 * p.s, 3, 12);
  ctx.save();
  ctx.translate(p.x, p.y); ctx.rotate(T * 0.5);
  ctx.strokeStyle = rgba("#8B7BA8", hovered && hovered.id === m.id ? 0.95 : 0.5);
  ctx.lineWidth = 1; ctx.setLineDash([3, 4]);
  ctx.beginPath(); ctx.arc(0, 0, rr, 0, TAU); ctx.stroke();
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(-rr * 0.5, 0); ctx.lineTo(rr * 0.5, 0); ctx.moveTo(0, -rr * 0.5); ctx.lineTo(0, rr * 0.5);
  ctx.stroke(); ctx.restore();
  if (rr > 4) label(p.x + rr, p.y - rr, "orbit 08", "#8B7BA8", "unallocated", 0.6);
  hits.push({ o: m, x: p.x, y: p.y, r: Math.max(14, rr * 1.6) });
}

function drawSystem() {
  hits.length = 0;

  for (const p of world.planets) {
    const hot = focusId === p.id || (hovered && hovered.id === p.id);
    strokeOrbit(p.orbit, rgba(p.color, 1), hot ? 0.46 : 0.17, hot ? 1.1 : 0.8, false);
  }
  if (world.marker) strokeOrbit(world.marker.orbit, "#6D28D9", 0.13, 0.8, true);

  drawLinks();

  const list = [];
  const sp = project(0, 0, 0);
  if (sp) list.push({ k: "star", z: sp.z, p: sp });
  for (const b of world.planets) {
    const p = project(b.pos.x, b.pos.y, b.pos.z);
    if (p) list.push({ k: "planet", z: p.z, p: p, b: b });
    if (b.sats) for (const st of b.sats) {
      const q = project(st.pos.x, st.pos.y, st.pos.z);
      if (q) list.push({ k: "sat", z: q.z, p: q, b: b, st: st });
    }
  }
  if (world.marker) {
    const p = project(world.marker.pos.x, world.marker.pos.y, world.marker.pos.z);
    if (p) list.push({ k: "marker", z: p.z, p: p, b: world.marker });
  }
  if (world.field.vis > 0.004) {
    const fp = project(world.field.pos.x, world.field.pos.y, world.field.pos.z);
    if (fp) list.push({ k: "field", z: fp.z, p: fp });
  }

  list.sort(function (a, b) { return b.z - a.z; });
  for (const it of list) {
    if (it.k === "star") drawStar(it.p);
    else if (it.k === "planet") drawPlanet(it.b, it.p);
    else if (it.k === "sat") drawSat(it.b, it.st, it.p);
    else if (it.k === "marker") drawMarker(it.b, it.p);
    else if (it.k === "field") drawField(it.p);
  }
  flushBloom();
}

"use strict";
const photoImg = new Image();
let photoReady = false;
photoImg.onload = function () { photoReady = true; };
photoImg.src = AVATAR;
$("#idPhoto").src = AVATAR;

function fieldBasis() {
  const f = world.field, c = Math.cos(f.sway), s = Math.sin(f.sway);
  return { u: { x: c, y: 0, z: s }, v: { x: 0, y: -1, z: 0 } };
}
function fieldPoint(lx, ly) {
  const f = world.field, b = fieldBasis();
  return {
    x: f.pos.x + b.u.x * lx + b.v.x * ly,
    y: f.pos.y + b.u.y * lx + b.v.y * ly,
    z: f.pos.z + b.u.z * lx + b.v.z * ly
  };
}

function drawField(fp) {
  const f = world.field, S = CONST_SCALE;
  const V = clamp(f.vis, 0, 1);
  if (V <= 0.004) return;
  for (const st of f.stars) st.scr = project(st.pos.x, st.pos.y, st.pos.z);
  const reveal = f.resolved ? 1 : f.scan;
  if (photoReady && reveal > 0.001) {
    const PW = 0.86 * S, PH = 1.02 * S;
    const a = project3(fieldPoint(-PW, -PH));
    const b = project3(fieldPoint(PW, -PH));
    const c = project3(fieldPoint(-PW, PH));
    if (a && b && c) {
      const iw = photoImg.width, ih = photoImg.height;
      const m11 = (b.x - a.x) / iw, m12 = (b.y - a.y) / iw;
      const m21 = (c.x - a.x) / ih, m22 = (c.y - a.y) / ih;
      ctx.save();
      ctx.transform(m11, m12, m21, m22, a.x, a.y);
      ctx.beginPath(); ctx.rect(0, 0, iw, ih * reveal); ctx.clip();
      ctx.globalAlpha = (f.resolved ? 0.86 : 0.78) * V;
      ctx.drawImage(photoImg, 0, 0);
      ctx.globalCompositeOperation = "overlay";
      ctx.globalAlpha = 0.55 * V; ctx.fillStyle = "#6D28D9";
      ctx.fillRect(0, 0, iw, ih);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.26 * V; ctx.fillStyle = "#C4B5FD";
      for (let y = 0; y < ih; y += 4) ctx.fillRect(0, y, iw, 1);
      ctx.globalAlpha = V;
      ctx.strokeStyle = rgba("#D8B4FE", 0.75 * V); ctx.lineWidth = Math.max(1, iw * 0.006);
      ctx.strokeRect(0, 0, iw, ih * reveal);
      ctx.restore();
      ctx.globalAlpha = 1;
    }
  }

  ctx.save();
  for (const e of CONST_EDGES) {
    const A = f.stars[e[0]], B = f.stars[e[1]];
    if (!A.scr || !B.scr) continue;
    const lit = Math.min(A.lit, B.lit);
    ctx.strokeStyle = lit > 0.05 ? rgba("#D8B4FE", (0.35 + lit * 0.5) * V) : rgba("#8B7BA8", 0.30 * V);
    ctx.lineWidth = lit > 0.05 ? 1.2 : 0.7;
    ctx.beginPath(); ctx.moveTo(A.scr.x, A.scr.y); ctx.lineTo(B.scr.x, B.scr.y); ctx.stroke();
  }
  ctx.restore();

  for (const st of f.stars) {
    const p = st.scr; if (!p) continue;
    const rr = clamp(2.6 * p.s * 0.5, 1.4, 5);
    const tw = 0.75 + 0.25 * Math.sin(T * 2.2 + st.lx);
    ctx.globalAlpha = V;
    ctx.fillStyle = st.lit > 0.4 ? "#F3E8FF" : "#EDE9F4";
    ctx.beginPath(); ctx.arc(p.x, p.y, rr, 0, TAU); ctx.fill();
    ctx.globalAlpha = 0.35 * tw * V;
    ctx.beginPath(); ctx.arc(p.x, p.y, rr * 3.1, 0, TAU); ctx.fill();
    ctx.globalAlpha = 1;
    queueGlow(p.x, p.y, rr * 7, st.lit > 0.4 ? "rgba(233,213,255,.55)" : "rgba(216,180,254,.4)", 0.7 * V);
  }


  if (f.scanning) {
    const ly = lerp(-S, S, f.scan);
    const l = project3(fieldPoint(-S * 1.05, ly)), r = project3(fieldPoint(S * 1.05, ly));
    if (l && r) {
      ctx.save();
      ctx.strokeStyle = rgba("#F3E8FF", 0.95 * V); ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(l.x, l.y); ctx.lineTo(r.x, r.y); ctx.stroke();
      ctx.strokeStyle = rgba("#C4B5FD", 0.22 * V); ctx.lineWidth = 7;
      ctx.beginPath(); ctx.moveTo(l.x, l.y); ctx.lineTo(r.x, r.y); ctx.stroke();
      ctx.restore();
      queueGlow((l.x + r.x) / 2, (l.y + r.y) / 2, Math.hypot(r.x - l.x, r.y - l.y) * 0.6, "rgba(196,181,253,.5)", 0.8 * V);

      const pr = project3(f.probe.pos);
      if (pr) {

        ctx.save();
        ctx.globalAlpha = V;
        ctx.fillStyle = "#EDE9F4";
        ctx.beginPath(); ctx.arc(pr.x, pr.y, 2.6, 0, TAU); ctx.fill();
        ctx.strokeStyle = "rgba(237,233,244,.7)"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(pr.x - 6, pr.y); ctx.lineTo(pr.x + 6, pr.y); ctx.stroke();

        const gr = ctx.createLinearGradient(pr.x, pr.y, (l.x + r.x) / 2, (l.y + r.y) / 2);
        gr.addColorStop(0, rgba("#C4B5FD", 0.35 * V)); gr.addColorStop(1, "rgba(196,181,253,0)");
        ctx.fillStyle = gr;
        ctx.beginPath(); ctx.moveTo(pr.x, pr.y); ctx.lineTo(l.x, l.y); ctx.lineTo(r.x, r.y); ctx.closePath(); ctx.fill();
        ctx.restore();
      }

      ctx.save();
      ctx.font = "9px " + FONT; ctx.fillStyle = rgba("#D8B4FE", V); ctx.textAlign = "left";
      ctx.fillText("DECODING " + Math.round(f.scan * 100) + "%", r.x + 8, r.y);
      ctx.restore();
    }
  }


  const corners = [fieldPoint(-S * 1.15, -S * 1.2), fieldPoint(S * 1.15, -S * 1.2),
  fieldPoint(S * 1.15, S * 1.2), fieldPoint(-S * 1.15, S * 1.2)].map(project3);
  if (corners.every(Boolean)) {
    ctx.save();
    ctx.strokeStyle = rgba("#A855F7", ((hovered && hovered.id === "identity") || focusId === "identity" ? 0.8 : 0.22) * V);
    ctx.lineWidth = 1;
    for (let i = 0; i < 4; i++) {
      const a = corners[i], b = corners[(i + 1) % 4], c2 = corners[(i + 3) % 4];
      ctx.beginPath();
      ctx.moveTo(lerp(a.x, b.x, 0.22), lerp(a.y, b.y, 0.22)); ctx.lineTo(a.x, a.y);
      ctx.lineTo(lerp(a.x, c2.x, 0.22), lerp(a.y, c2.y, 0.22));
      ctx.stroke();
    }
    ctx.restore();
  }
  if (fp) label(fp.x + S * 0.2, fp.y - S * 1.1, "constellation orion-Δ", "#D8B4FE",
    f.resolved ? "identity resolved" : "decoding…", 0.95 * V);
  if (fp && f.shown && V > 0.5) hits.push({ o: f, x: fp.x, y: fp.y, r: Math.max(26, S * fp.s * 0.9) });
}

function project3(q) { return project(q.x, q.y, q.z); }
const FIELD_HOLD = 10;
let fieldTimer = 0;

function armFieldTimer(sec) { fieldTimer = sec > 0 ? sec : 0; }

function stepFieldTimer(dt) {
  if (fieldTimer <= 0) return;
  fieldTimer -= dt;
  if (fieldTimer <= 0) {
    fieldTimer = 0;
    if (typeof cardOff === "function") cardOff();
    hideField();
  }
}

function hideField() {
  const f = world.field;
  fieldTimer = 0;
  f.shown = false;
  f.hold = false;
  f.probe.on = false;
  if (focusId === "identity") focusId = null;
}

function startScan() {
  const f = world.field;
  if (f.scanning) return;
  fieldTimer = 0;
  f.shown = true;                  /* reveal — 05 fades vis up from here */
  f.hold = true;
  f.resolved = false;
  f.scan = 0;
  for (const st of f.stars) st.lit = 0;
  focusId = "identity";
  const yaw = Math.PI - f.sway;
  flyTo({ tx: f.pos.x, ty: f.pos.y, tz: f.pos.z, dist: 76, yaw: yaw, pitch: 0.02 }, 1.7, function () {
    f.scan = 0; f.scanning = true;
    tween(REDUCED ? 0.4 : 3.4, function (e) { f.scan = e; }, function () {
      f.scanning = false; f.resolved = true;
      openIdCard();
      armFieldTimer(FIELD_HOLD);
    }, function (t) { return t; });
  });
}

function resetScan() {
  const f = world.field;
  fieldTimer = 0;
  f.resolved = false; f.scanning = false; f.scan = 0; f.hold = false; f.shown = false;
  f.vis = 0;
  for (const st of f.stars) st.lit = 0;
}

"use strict";
const state = { mode: "boot", t: 0, shake: 0, warp: 0, flash: 0, launched: false };

const BOOT_LINES = [
  "<b>[  0.000000]</b> orbital dossier v3 cold start",
  "<b>[  0.041293]</b> host <u>core</u> · kernel 6.9.4-hardened · arch x86_64",
  "<b>[  0.118740]</b> mounting /dev/dossier … <i>ok</i>",
  "<b>[  0.204551]</b> loading operator profile: <u>akash sil</u> … <i>ok</i>",
  "<b>[  0.377902]</b> domains: web · network pentest · reverse engineering",
  "<b>[  0.512336]</b> indexing bodies … 8 planets, 1 star, 1 lattice",
  "<b>[  0.688105]</b> uplink mesh: 9 edges resolved … <i>ok</i>",
  "<b>[  0.901477]</b> biometric lattice ORION… <i>sealed</i>",
  "<b>[  1.140092]</b> launch vehicle on pad · propellant nominal",
  "<b>[  1.203884]</b> awaiting operator <u>ENTER</u>"
];
function runBoot() {
  const box = $("#bootlog");
  let i = 0;
  (function next() {
    if (i >= BOOT_LINES.length) {
      $("#launchpad").classList.add("on");
      $("#btnLaunch").focus({ preventScroll: true });
      return;
    }
    const d = document.createElement("div");
    d.className = "ln"; d.innerHTML = BOOT_LINES[i];
    d.style.animationDelay = "0ms";
    box.appendChild(d);
    box.scrollTop = box.scrollHeight;
    i++;
    setTimeout(next, REDUCED ? 24 : (i < 3 ? 210 : 108 + Math.random() * 90));
  })();
}

const streaks = [];
(function seedStreaks() {
  const n = LOWPOWER ? 90 : 210;
  for (let i = 0; i < n; i++)
    streaks.push({ x: rnd(), y: rnd(), l: 0.02 + rnd() * 0.10, v: 0.35 + rnd() * 1.5, a: 0.25 + rnd() * 0.6 });
})();

const sparks = [];
function emitSparks(x, y, n, power) {
  for (let i = 0; i < n; i++) {
    sparks.push({
      x: x + (Math.random() - 0.5) * 10, y: y, vx: (Math.random() - 0.5) * 70,
      vy: 120 + Math.random() * 260 * power, life: 0.35 + Math.random() * 0.6, t: 0,
      c: Math.random() > 0.72 ? "#D8B4FE" : Math.random() > 0.4 ? "#FFB55C" : "#FFF0DC"
    });
  }
}
function stepSparks(dt) {
  for (let i = sparks.length - 1; i >= 0; i--) {
    const s = sparks[i]; s.t += dt;
    if (s.t >= s.life) { sparks.splice(i, 1); continue; }
    s.x += s.vx * dt; s.y += s.vy * dt; s.vy *= 0.985;
  }
}
function drawSparks() {
  for (const s of sparks) {
    const k = 1 - s.t / s.life;
    ctx.globalAlpha = k * 0.9;
    ctx.fillStyle = s.c;
    const sz = 1 + k * 2.6;
    ctx.fillRect(s.x - sz / 2, s.y - sz / 2, sz, sz);
  }
  ctx.globalAlpha = 1;
}

function drawRocket(cx, cy, scale, thrust) {
  const s = scale;
  ctx.save();
  ctx.translate(cx, cy);

  if (thrust > 0.01) {
    const len = (52 + Math.sin(T * 40) * 7) * s * thrust;
    const g = ctx.createLinearGradient(0, 22 * s, 0, 22 * s + len);
    g.addColorStop(0, "rgba(255,255,255,.95)");
    g.addColorStop(0.18, "rgba(255,205,140,.85)");
    g.addColorStop(0.55, "rgba(168,85,247,.45)");
    g.addColorStop(1, "rgba(109,40,217,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(-7.5 * s, 22 * s);
    ctx.quadraticCurveTo(-3 * s, 22 * s + len * 0.7, 0, 22 * s + len);
    ctx.quadraticCurveTo(3 * s, 22 * s + len * 0.7, 7.5 * s, 22 * s);
    ctx.closePath(); ctx.fill();
    queueGlow(cx, cy + (30 * s), 60 * s * thrust, "rgba(255,180,110,.65)", 0.9);
  }

  ctx.fillStyle = "#6D28D9";
  ctx.beginPath(); ctx.moveTo(-8 * s, 8 * s); ctx.lineTo(-17 * s, 24 * s); ctx.lineTo(-8 * s, 21 * s); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(8 * s, 8 * s); ctx.lineTo(17 * s, 24 * s); ctx.lineTo(8 * s, 21 * s); ctx.closePath(); ctx.fill();

  const bg = ctx.createLinearGradient(-8 * s, 0, 8 * s, 0);
  bg.addColorStop(0, "#3B2357"); bg.addColorStop(0.35, "#EDE9F4");
  bg.addColorStop(0.62, "#C9BEDA"); bg.addColorStop(1, "#4A2E6B");
  ctx.fillStyle = bg;
  ctx.beginPath();
  ctx.moveTo(-8 * s, 22 * s); ctx.lineTo(-8 * s, -10 * s);
  ctx.quadraticCurveTo(-8 * s, -24 * s, 0, -34 * s);
  ctx.quadraticCurveTo(8 * s, -24 * s, 8 * s, -10 * s);
  ctx.lineTo(8 * s, 22 * s); ctx.closePath(); ctx.fill();

  ctx.fillStyle = "#A855F7";
  ctx.beginPath(); ctx.moveTo(-8 * s, -10 * s); ctx.quadraticCurveTo(-8 * s, -24 * s, 0, -34 * s);
  ctx.quadraticCurveTo(8 * s, -24 * s, 8 * s, -10 * s); ctx.closePath(); ctx.fill();
  ctx.fillStyle = "#0A0416";
  ctx.beginPath(); ctx.arc(0, -2 * s, 4.2 * s, 0, TAU); ctx.fill();
  ctx.strokeStyle = "#39FF88"; ctx.lineWidth = 1.1;
  ctx.beginPath(); ctx.arc(0, -2 * s, 4.2 * s, 0, TAU); ctx.stroke();
  ctx.fillStyle = "rgba(57,255,136,.35)";
  ctx.beginPath(); ctx.arc(-1.2 * s, -3.4 * s, 1.6 * s, 0, TAU); ctx.fill();

  ctx.fillStyle = "rgba(10,4,22,.85)";
  ctx.fillRect(-8 * s, 12 * s, 16 * s, 1.6 * s);
  ctx.fillRect(-8 * s, 16 * s, 16 * s, 0.9 * s);
  ctx.save();
  ctx.font = (4.4 * s) + "px " + FONT; ctx.fillStyle = "#2A1147"; ctx.textAlign = "center";
  ctx.fillText("420", 0, 8 * s);
  ctx.restore();

  ctx.restore();
}

function beginLaunch() {
  if (state.launched) return;
  state.launched = true;
  $("#launchpad").classList.remove("on");
  const cd = $("#countdown");
  if (REDUCED) { enterGalaxy(0.4); $("#boot").classList.add("gone"); return; }
  let n = 3;
  cd.textContent = "T-MINUS 3";
  const iv = setInterval(function () {
    n--;
    if (n > 0) { cd.textContent = "T-MINUS " + n; }
    else {
      clearInterval(iv);
      cd.textContent = "IGNITION";
      $("#boot").classList.add("gone");
      state.mode = "ascent"; state.t = 0;
      cam.dist = 520; cam.yaw = 0.2; cam.pitch = 0.30;
    }
  }, 430);
}

function skipIntro() {
  if (state.mode !== "ascent" && state.mode !== "warp") return false;
  sparks.length = 0;
  $("#boot").classList.add("gone");
  enterGalaxy(0.9);
  return true;
}

function drawAscent(dt) {
  const k = clamp(state.t / 2.7, 0, 1);
  ctx.fillStyle = "#05020C"; ctx.fillRect(0, 0, W, H);
  const neb2 = 0.25 + k * 0.55;
  ctx.globalAlpha = neb2; ctx.drawImage(neb, -W * 0.15, -H * 0.2 - k * H * 0.4, neb.width, neb.height);
  ctx.globalAlpha = 1;

  const sp = 1 + k * 7;
  ctx.strokeStyle = "rgba(216,180,254,.55)";
  for (const st of streaks) {
    st.y += st.v * sp * dt * 0.55;
    if (st.y > 1.2) { st.y = -0.2; st.x = Math.random(); }
    const x = st.x * W, y = st.y * H, l = st.l * H * (1 + k * 3);
    ctx.globalAlpha = st.a * (0.25 + k * 0.75);
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - l); ctx.stroke();
  }
  ctx.globalAlpha = 1;
  const cx = W * 0.5;
  const cy = lerp(H * 1.05, H * 0.42, easeOutCubic(clamp(k * 1.25, 0, 1)));
  const sc = lerp(1.5, 0.55, k) * Math.min(1, H / 760 + 0.35);
  state.shake = (1 - k) * 3.2 + 0.6;
  const ox = (Math.random() - 0.5) * state.shake, oy = (Math.random() - 0.5) * state.shake;
  ctx.save(); ctx.translate(ox, oy);
  drawRocket(cx, cy, sc, 1);
  ctx.restore();
  emitSparks(cx, cy + 24 * sc, LOWPOWER ? 2 : 5, 1);
  stepSparks(dt); drawSparks();
  flushBloom();

  /* flight instruments, typed in the corner */
  const alt = Math.round(easeInQuad(k) * 412000);
  const vel = Math.round(easeOutCubic(k) * 27400);
  ctx.save();
  ctx.font = "10px " + FONT; ctx.fillStyle = "#39FF88"; ctx.textAlign = "left";
  ctx.letterSpacing = "1.6px";
  const rows = [
    "MET      T+" + state.t.toFixed(2) + "s",
    "ALT      " + alt.toLocaleString("en-US") + " m",
    "VEL      " + vel.toLocaleString("en-US") + " km/h",
    "THRUST   " + Math.round(96 + Math.sin(T * 9) * 3) + "%",
    "GUIDANCE nominal"
  ];
  rows.forEach(function (r, i) { ctx.fillText(r, 22, H * 0.5 - 40 + i * 16); });
  ctx.fillStyle = "#D8B4FE"; ctx.textAlign = "right";
  ctx.fillText("STAGE 1 · CORE-420", W - 22, H * 0.5 - 40);
  ctx.letterSpacing = "0px";
  ctx.restore();

  if (k >= 1) { state.mode = "warp"; state.t = 0; }
}

function drawWarp(dt) {
  const k = clamp(state.t / 1.15, 0, 1);
  ctx.fillStyle = "#04010A"; ctx.fillRect(0, 0, W, H);
  const cx = W / 2, cy = H / 2;
  const pull = easeInQuad(k);
  ctx.lineWidth = 1;
  for (const st of streaks) {
    const a = (st.x * TAU * 3 + st.y * 7) % TAU;
    const r0 = 30 + st.y * Math.max(W, H) * 0.55;
    const len = 40 + pull * Math.max(W, H) * 1.5 * st.v * 0.4;
    ctx.globalAlpha = st.a * (0.4 + pull * 0.6);
    ctx.strokeStyle = st.a > 0.6 ? "#EDE9F4" : "#D8B4FE";
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
    ctx.lineTo(cx + Math.cos(a) * (r0 + len), cy + Math.sin(a) * (r0 + len));
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  /* the collapsing white core, then the flash */
  const rr = lerp(2, 46, pull);
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rr * 6);
  g.addColorStop(0, "rgba(255,255,255," + (0.5 + pull * 0.5) + ")");
  g.addColorStop(0.3, "rgba(216,180,254,.5)");
  g.addColorStop(1, "rgba(109,40,217,0)");
  ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, rr * 6, 0, TAU); ctx.fill();

  if (k >= 1) { state.flash = 1; enterGalaxy(2.4); }
}

function enterGalaxy(dur) {
  state.mode = "galaxy"; state.t = 0;
  cam.tx = 0; cam.ty = 0; cam.tz = 0;
  cam.dist = 520; cam.yaw = 0.15; cam.pitch = 0.78;
  $("#hud").classList.add("live");
  flyTo({ dist: 290, yaw: 0.62, pitch: 0.40 }, REDUCED ? 0.3 : (dur || 2.4), function () {
    armAsteroidSystem();
  });
}

"use strict";
let toastTimer = null;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { el.classList.remove("on"); }, 3600);
}

(function renderLegend() {
  const ul = $("#legendList");
  const rows = world.planets.map(function (p) {
    return '<li><span class="swatch" style="background:' + p.color + '"></span>' + p.name + '</li>';
  });
  rows.unshift('<li><span class="swatch" style="background:#FFD9A0"></span>Core &middot; shell</li>');
  rows.push('<li><span class="swatch" style="background:#D8B4FE;border-radius:0"></span>Constellation &middot; identity</li>');
  rows.push('<li><span class="swatch" style="background:#EDE9F4"></span>Uplink traffic</li>');
  ul.innerHTML = rows.join("");
})();

function chipRow(arr) {
  return '<div class="chips">' + arr.map(function (s) {
    const g = PROFILE.toolGloss[s];
    return '<span class="chip"' + (g ? ' title="' + g + '"' : '') + '>' + s + '</span>';
  }).join("") + '</div>';
}
function openPanel(b) {
  focusId = b.id;
  $("#panelClass").textContent = b.cls || b.kind;
  $("#panelTitle").textContent = b.name;
  $("#panelSub").textContent = b.tagline || "";
  const h = [];
  const sec = function (t) { return '<div class="sec">' + t + '</div>'; };
  if (b.plain) h.push('<div class="plain"><span>summary</span>' + b.plain + '</div>');
  if (b.detail && b.detail.length) {
    h.push(sec("technical detail") + "<ul>" + b.detail.map(function (d) { return "<li>" + d + "</li>"; }).join("") + "</ul>");
  }
  if (b.why) h.push(sec("why i work on it") + "<p>" + b.why + "</p>");
  if (b.stack) h.push(sec("stack") + chipRow(b.stack));
  if (b.satellites) h.push(sec("satellites") + chipRow(b.satellites.map(function (s) { return s.n; })));
  const meta = [];
  if (b.status) meta.push("<dt>status</dt><dd>" + b.status + "</dd>");
  if (b.orbit) meta.push("<dt>orbit</dt><dd>" + b.orbit.r.toFixed(0) + " au · incl " + (b.orbit.tilt * 57.3).toFixed(1) + "&deg;</dd>");
  if (b.uplinks && b.uplinks.length) {
    meta.push("<dt>uplinks</dt><dd>" + b.uplinks.map(function (u) {
      return world.byId[u] ? world.byId[u].name : u;
    }).join(", ") + "</dd>");
  }
  if (meta.length) h.push(sec("telemetry") + '<dl class="meta">' + meta.join("") + "</dl>");
  const acts = [];
  if (b.repo) acts.push('<a class="btn" href="' + b.repo + '" target="_blank" rel="noopener">&#8599; open repository</a>');
  if (b.links) {
    b.links.forEach(function (l) {
      acts.push('<a class="btn" href="' + l.href + '" target="_blank" rel="noopener">&#8599; ' + l.text + '</a>');
    });
  }
  if (b.orbit) acts.push('<button class="btn" data-focus="' + b.id + '">&#9678; centre camera</button>');
  if (b.id === "identity") acts.push('<button class="btn" data-scan="1">&#9670; run scan</button>');
  h.push('<div class="acts">' + acts.join("") + "</div>");
  $("#panelBody").innerHTML = h.join("");
  $("#panel").classList.add("open");
  $("#panel").setAttribute("aria-hidden", "false");
  $("#tFocus").textContent = b.name.toLowerCase();

}
function closePanel() {
  $("#panel").classList.remove("open");
  $("#panel").setAttribute("aria-hidden", "true");
  $("#tFocus").textContent = "free orbit";
}

(function fillIdCard() {
  $("#idFacts").innerHTML = [
    ["designation", PROFILE.name],
    ["role", PROFILE.role],
    ["domains", "IoT · network pentest · reverse engineering"],
    ["environment", "Linux · C · Python · shell"],
    ["lattice", "ORION-Δ · 9 nodes · 12 edges"]
  ].map(function (r) { return "<dt>" + r[0] + "</dt><dd>" + r[1] + "</dd>"; }).join("");
  $("#idLinks").innerHTML = PROFILE.links.map(function (l) {
    return '<a class="btn" href="' + l.href + '" target="_blank" rel="noopener">' + l.k + '</a>';
  }).join("");
})();
function openIdCard() {
  $("#idcard").classList.add("open");
  $("#idcard").setAttribute("aria-hidden", "false");

  toast("lattice decoded · identity resolved");
}

function cardOff() {
  $("#idcard").classList.remove("open");
  $("#idcard").setAttribute("aria-hidden", "true");
}
function closeIdCard() {
  cardOff();
  hideField();
}


(function renderResume() {
  const projects = world.planets.map(function (p) {
    return '<div class="card2">'
      + '<div class="k">' + (p.status || p.cls) + '</div>'
      + '<h3>' + p.name + '</h3>'
      + '<p>' + p.plain + '</p>'
      + '<div class="chips">' + p.stack.map(function (s) {
        const g = PROFILE.toolGloss[s];
        return '<span class="chip"' + (g ? ' title="' + g + '"' : '') + '>' + s + '</span>';
      }).join("") + '</div>'
      + (p.repo ? '<p style="margin-top:9px"><a href="' + p.repo + '" target="_blank" rel="noopener">view the code &#8599;</a></p>' : '')
      + '</div>';
  }).join("");

  const skills = PROFILE.strengths.map(function (s) {
    const parts = s.v.split(", ").map(function (tool) {
      const g = PROFILE.toolGloss[tool.toLowerCase()];
      return g ? tool + ' <span style="color:var(--phantom)">(' + g + ')</span>' : tool;
    }).join(", ");
    return '<div class="skillrow"><b>' + s.k + '</b><span>' + parts + '</span></div>';
  }).join("");

  const exp = PROFILE.experience ? PROFILE.experience.map(function (e) {
    return '<h3>' + e.company + ' — ' + e.role + '</h3>'
      + '<div style="margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">' + e.period + '</div>'
      + '<ul style="padding-left:1.2em;margin-bottom:20px;line-height:1.5;">' + e.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>';
  }).join('') : '';

  $("#resumeSheet").innerHTML =
    '<div class="rtop">'
    + '<img src="' + AVATAR + '" alt="Portrait of Akash Sil">'
    + '<div class="who"><h1>' + PROFILE.name + '</h1>'
    + '<div class="role">' + PROFILE.role + ' &middot; ' + PROFILE.focus + '</div>'
    + '<div class="contact">' + PROFILE.links.map(function (l) {
      return '<span>' + l.k + ': <a href="' + l.href + '" target="_blank" rel="noopener">' + l.v + '</a></span>';
    }).join("")
    + '</div></div>'
    + '<button class="btn rclose" id="resumeClose">&#10005; back to the map</button>'
    + '</div>'

    + '<section><h2>what i do</h2><p>' + PROFILE.pitch + '</p>'
    + '<p class="note">Short version: ' + PROFILE.plain + '</p></section>'

    + '<section><h2>skills and what each tool is for</h2>' + skills + '</section>'

    + (exp ? '<section><h2>experience</h2>' + exp + '</section>' : '')

    + '<section><h2>work &amp; projects</h2><div class="grid2">' + projects + '</div></section>'

    + '<section><h2>the interactive experience</h2>'
    + '<p>I’ve built an interactive, spatial mapped portfolio to demonstrate my work in action. Within this environment, major projects act as central nodes linked by their technology stacks, while periodic, automated threat simulations showcase my approach to real time vulnerability mitigation.</p>'
    + '<p>At the center of the architecture lies an interactive command terminal click the core node and type <code>help</code> to drive the experience yourself. I engineered this platform to serve as a live, practical demonstration of how I think, build, and secure modern systems.</p>'
    + '<p class="note">To ensure maximum efficiency, the platform operates entirely without dependencies, complex build steps, or network calls. It was a deliberate choice to avoid external frameworks—meaning the spatial renderer, camera, command shell, and core scanning logic were all custom built from the ground up.</p></section>'
    + '<section><h2>get in touch</h2>'
    + '<p>Email is the fastest route: <a href="mailto:' + PROFILE.email + '">' + PROFILE.email + '</a>. '
    + 'Code lives at <a href="' + PROFILE.github + '" target="_blank" rel="noopener">github.com/' + PROFILE.handle + '</a>.</p>'
    + '</section>'

    + '<div class="foot">Akash Sil &middot; security researcher &middot; press <kbd>Esc</kbd> to return to the star map</div>';

  $("#resumeSheet").addEventListener("click", function (e) {
    if (e.target.closest("#resumeClose")) closeResume();
  });
})();
function openResume() {
  document.body.classList.add("recruiter-view");
  $("#resume").classList.add("open");
  $("#resume").setAttribute("aria-hidden", "false");
  $("#btnResume").setAttribute("aria-pressed", "true");
  $("#resume").scrollTop = 0;
}
function closeResume() {
  document.body.classList.remove("recruiter-view");
  $("#resume").classList.remove("open");
  $("#resume").setAttribute("aria-hidden", "true");
  $("#btnResume").setAttribute("aria-pressed", "false");
}

const out = $("#termout"), inp = $("#terminput");
const hist = []; let histIdx = -1;
const T0 = Date.now();

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function w(html) { const d = document.createElement("div"); d.innerHTML = html; out.appendChild(d); }
function wl() { out.appendChild(document.createElement("br")); }
function scrollTerm() { out.scrollTop = out.scrollHeight; }
function pad(s, n) { s = String(s); return s + " ".repeat(Math.max(0, n - s.length)); }

function typeLines(lines, cb) {
  let i = 0;
  (function step() {
    if (i >= lines.length) { scrollTerm(); if (cb) cb(); return; }
    w(lines[i]); i++; scrollTerm();
    setTimeout(step, REDUCED ? 0 : 26);
  })();
}

const CMDS = {};
function cmd(name, desc, usage, run) { CMDS[name] = { d: desc, u: usage, run: run }; }

cmd("help", "list every command", "help", function () {
  const names = Object.keys(CMDS).filter(function (n) { return !CMDS[n].alias; }).sort();
  const rows = names.map(function (n) {
    return '<span class="g">' + pad(n, 11) + '</span><span class="p">' + CMDS[n].d + '</span>';
  });
  typeLines(['<span class="hd">available commands</span>'].concat(rows)
    .concat(['', '<span class="p">tab completes · &uarr;&darr; walks history · esc closes the shell</span>']));
});

cmd("whoami", "who is flying this thing", "whoami", function () {
  typeLines(['<span class="b">' + PROFILE.name + '</span>',
  '<span class="p">' + PROFILE.role + ' — ' + PROFILE.focus + '</span>',
  '<span class="w">' + PROFILE.handle + '</span>']);
});

cmd("about", "the short version, in plain english", "about", function () {
  typeLines(['<span class="hd">about</span>', '<span class="b">' + PROFILE.plain + '</span>', '',
    '<span class="p">' + PROFILE.pitch + '</span>']);
});

cmd("skills", "skills grouped by what they are for", "skills", function () {
  const rows = PROFILE.strengths.map(function (s) {
    return '<span class="w">' + pad(s.k, 14) + '</span><span class="b">' + s.v + '</span>';
  });
  typeLines(['<span class="hd">skill matrix</span>'].concat(rows));
});

cmd("tools", "every tool, and what it actually does", "tools", function () {
  const rows = Object.keys(PROFILE.toolGloss).map(function (k) {
    return '<span class="g">' + pad(k, 14) + '</span><span class="p">' + PROFILE.toolGloss[k] + '</span>';
  });
  typeLines(['<span class="hd">toolchain</span>'].concat(rows));
});

cmd("projects", "list the bodies in this system", "projects", function () {
  const rows = world.planets.map(function (p) {
    return '<span class="u">' + pad(p.id, 12) + '</span><span class="b">' + pad(p.name, 28) + '</span>'
      + '<span class="p">' + (p.status || p.cls) + '</span>';
  });
  rows.push('<span class="u">' + pad("identity", 12) + '</span><span class="b">' + pad("Constellation ORION-Δ", 28) + '</span><span class="p">biometric lattice</span>');
  typeLines(['<span class="hd">bodies · ' + world.planets.length + ' planets</span>'].concat(rows)
    .concat(['', '<span class="p">`open &lt;id&gt;` for the dossier · `goto &lt;id&gt;` to fly there</span>']));
});

cmd("open", "open a project dossier", "open <id>", function (a) {
  const b = world.byId[a[0]];
  if (!b) return w('<span class="e">no such body: ' + esc(a[0] || "") + '</span>');
  closeTerm(); focusBody(b, true);
});

cmd("goto", "fly the camera to a body", "goto <id|core>", function (a) {
  const b = world.byId[a[0]];
  if (!b) return w('<span class="e">no such body: ' + esc(a[0] || "") + '</span>');
  closeTerm(); focusBody(b, false);
  toast("vector set · " + b.name.toLowerCase());
});

cmd("scan", "reveal the constellation and decode the portrait", "scan", function () {
  closeTerm(); resetScan(); startScan();
});

cmd("resume", "open the plain-english recruiter view", "resume", function () {
  closeTerm(); openResume();
});

cmd("contact", "how to reach me", "contact", function () {
  typeLines(['<span class="hd">contact</span>'].concat(PROFILE.links.map(function (l) {
    return '<span class="w">' + pad(l.k, 11) + '</span><a href="' + l.href + '" target="_blank" rel="noopener">' + l.v + '</a>';
  })));
});

cmd("ls", "list files", "ls [dir]", function (a) {
  const dir = (a[0] || "").replace(/^\.\//, "").replace(/\/$/, "");
  const keys = Object.keys(FILES);
  if (!dir) {
    const top = {};
    keys.forEach(function (k) { top[k.indexOf("/") > -1 ? k.split("/")[0] + "/" : k] = 1; });
    return w(Object.keys(top).map(function (k) {
      return k.endsWith("/") ? '<span class="w">' + k + '</span>' : '<span class="b">' + k + '</span>';
    }).join("  "));
  }
  const inside = keys.filter(function (k) { return k.indexOf(dir + "/") === 0; })
    .map(function (k) { return '<span class="b">' + k.split("/").pop() + '</span>'; });
  if (!inside.length) return w('<span class="e">ls: ' + esc(dir) + ': no such directory</span>');
  w(inside.join("  "));
});

cmd("cat", "print a file", "cat <file>", function (a) {
  const f = a[0];
  if (!f) return w('<span class="e">cat: missing operand</span>');
  if (f === "skills.txt") {
    return w(PROFILE.strengths.map(function (s) { return esc(pad(s.k, 14) + s.v); }).join("\n"));
  }
  if (f === "contact.txt") {
    return w(PROFILE.links.map(function (l) { return esc(pad(l.k, 11) + l.v); }).join("\n"));
  }
  if (FILES[f] == null) return w('<span class="e">cat: ' + esc(f) + ': no such file</span>');
  w('<span class="b">' + esc(FILES[f]) + '</span>');
});

cmd("neofetch", "system summary", "neofetch", function () {
  const art = [
    "        .:'''':.        ",
    "     .''         ''.    ",
    "    /   .-\"\"\"\"-.   \\   ",
    "   ;   /  o    o \\   ;  ",
    "   |   |    ><    |   |  ",
    "   ;   \\  '----'  /   ;  ",
    "    \\   '-.____.-'   /   ",
    "     '..         ..'    ",
    "        ':.....:'       "
  ];
  const info = [
    '<span class="w">' + PROFILE.handle + '</span><span class="p">@core</span>',
    '<span class="p">-------------------</span>',
    '<span class="u">os      </span>arch linux x86_64',
    '<span class="u">shell   </span>dossier-sh 3.0',
    '<span class="u">wm      </span>canvas2d software renderer',
    '<span class="u">langs   </span>c · python · shell',
    '<span class="u">focus   </span>iot · netsec · reversing',
    '<span class="u">bodies  </span>' + world.planets.length + ' planets · ' + world.links.length + ' uplinks',
    '<span class="u">uptime  </span>' + fmtUp(),
    '<span class="u">deps    </span><span class="g">none</span>'
  ];
  const rows = [];
  for (let i = 0; i < Math.max(art.length, info.length); i++) {
    rows.push('<span class="w">' + esc(art[i] || " ".repeat(24)) + '</span>  ' + (info[i] || ""));
  }
  typeLines(rows);
});

function fmtUp() {
  const s = Math.floor((Date.now() - T0) / 1000);
  return Math.floor(s / 60) + "m " + (s % 60) + "s";
}
cmd("uptime", "how long this session has been up", "uptime", function () {
  w('<span class="b">up ' + fmtUp() + '</span><span class="p">  ·  1 operator, load nominal</span>');
});
cmd("uname", "kernel string", "uname [-a]", function () {
  w('<span class="b">Linux core 6.9.4-hardened #1 SMP x86_64 GNU/Linux</span>');
});
cmd("date", "current time on this host", "date", function () { w('<span class="b">' + esc(new Date().toString()) + '</span>'); });
cmd("echo", "print arguments", "echo <text>", function (a) { w('<span class="b">' + esc(a.join(" ")) + '</span>'); });
cmd("history", "commands you have run", "history", function () {
  if (!hist.length) return w('<span class="p">nothing yet</span>');
  w(hist.map(function (h, i) { return '<span class="p">' + pad(i + 1, 5) + '</span><span class="b">' + esc(h) + '</span>'; }).join("\n"));
});
cmd("ps", "what is running in here", "ps", function () {
  typeLines(['<span class="hd">  pid  cmd</span>',
    '<span class="b">    1  /sbin/dossier --mode=orbital</span>',
    '<span class="b">   42  renderer [canvas2d]</span>',
    '<span class="b">  108  orbital-sim --bodies=' + world.planets.length + '</span>',
    '<span class="b">  256  uplink-mesh --edges=' + world.links.length + '</span>',
    '<span class="b">  420  lattice-scan --state=' + (world.field.resolved ? "resolved" : "sealed") + '</span>',
    '<span class="b">  512  dossier-sh (this shell)</span>']);
});
cmd("man", "one-line manual for a command", "man <cmd>", function (a) {
  const c = CMDS[a[0]];
  if (!c) return w('<span class="e">no manual entry for ' + esc(a[0] || "") + '</span>');
  typeLines(['<span class="hd">' + esc(a[0]) + '</span>',
  '<span class="b">' + c.d + '</span>',
  '<span class="p">usage: ' + esc(c.u) + '</span>']);
});
cmd("sudo", "try it", "sudo <cmd>", function (a) {
  if (!a.length) return w('<span class="e">usage: sudo &lt;command&gt;</span>');
  typeLines(['<span class="p">[sudo] password for visitor:</span>',
    '<span class="e">visitor is not in the sudoers file. this incident has been logged.</span>',
    '<span class="p">(it has not. but the habit is the point.)</span>']);
});
cmd("clear", "clear the screen", "clear", function () { out.innerHTML = ""; });
cmd("exit", "close the shell", "exit", function () { closeTerm(); });
CMDS.quit = Object.assign({}, CMDS.exit, { alias: true });
CMDS.logout = Object.assign({}, CMDS.exit, { alias: true });

function runCmd(raw) {
  const line = raw.trim();
  w('<span class="cmdline"><span class="g">akashsil@core</span>:<span class="w">~</span>$ ' + esc(raw) + '</span>');
  if (!line) { scrollTerm(); return; }
  hist.push(line); histIdx = hist.length;
  const parts = line.split(/\s+/);
  const name = parts[0].toLowerCase();
  const args = parts.slice(1);
  const c = CMDS[name];
  if (!c) {
    const near = Object.keys(CMDS).filter(function (k) { return k.indexOf(name[0]) === 0; }).slice(0, 4);
    w('<span class="e">' + esc(name) + ': command not found</span>'
      + (near.length ? '<span class="p">  did you mean: ' + near.join(", ") + '?</span>' : '')
      + '<span class="p">  type `help`</span>');
  } else {
    try { c.run(args); } catch (err) { w('<span class="e">runtime error: ' + esc(err.message) + '</span>'); }
  }
  scrollTerm();
}

const BANNER = [
  '<span class="w">    _    _  __    _    ____  _   _ </span>',
  '<span class="w">   / \\  | |/ /   / \\  / ___|| | | |</span>',
  '<span class="w">  / _ \\ | \' /   / _ \\ \\___\\ | |_| |</span>',
  '<span class="w"> / ___ \\| . \\  / ___ \\ ___) |  _  |</span>',
  '<span class="w">/_/   \\_\\_|\\_\\/_/   \\_\\____/|_| |_|</span>',
  '',
  '<span class="p">dossier-sh 3.0 · you are inside the star. this is a real shell.</span>',
  '<span class="p">no network calls leave this page; every command runs locally.</span>',
  ''
];
function termBanner() {
  out.innerHTML = "";
  typeLines(BANNER.concat([
    '<span class="hd">start here</span>',
    '<span class="g">' + pad("help", 11) + '</span><span class="p">every command</span>',
    '<span class="g">' + pad("whoami", 11) + '</span><span class="p">who i am</span>',
    '<span class="g">' + pad("projects", 11) + '</span><span class="p">what is orbiting out there</span>',
    '<span class="g">' + pad("skills", 11) + '</span><span class="p">what i can do, and with what</span>',
    '<span class="g">' + pad("scan", 11) + '</span><span class="p">reveal the constellation and decode the portrait</span>',
    '<span class="g">' + pad("resume", 11) + '</span><span class="p">plain-english version for non-technical readers</span>',
    ''
  ]));
}
function focusShell() {
  try { inp.focus({ preventScroll: true }); } catch (_) { inp.focus(); }
}
function openTerm() {
  const wrap = $("#termwrap");
  if (!wrap.classList.contains("open")) {
    wrap.classList.add("open");
    wrap.setAttribute("aria-hidden", "false");
  }
  if (!out.childNodes.length) termBanner();
  requestAnimationFrame(function () { requestAnimationFrame(focusShell); });
  setTimeout(focusShell, 130);
  setTimeout(focusShell, 340);
  focusId = "core";

}
function closeTerm() {
  $("#termwrap").classList.remove("open");
  $("#termwrap").setAttribute("aria-hidden", "true");
  inp.blur();
}

inp.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const v = inp.value; inp.value = ""; runCmd(v);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (histIdx > 0) { histIdx--; inp.value = hist[histIdx]; }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (histIdx < hist.length - 1) { histIdx++; inp.value = hist[histIdx]; }
    else { histIdx = hist.length; inp.value = ""; }
  } else if (e.key === "Tab") {
    e.preventDefault();
    const v = inp.value.trim();
    if (v.indexOf(" ") > -1) {
      const seg = v.split(/\s+/);
      const ids = Object.keys(world.byId).filter(function (k) { return k.indexOf(seg[1] || "") === 0; });
      if (ids.length === 1) { inp.value = seg[0] + " " + ids[0]; }
      else if (ids.length > 1) w('<span class="p">' + ids.join("  ") + '</span>');
    } else {
      const m = Object.keys(CMDS).filter(function (k) { return k.indexOf(v) === 0; });
      if (m.length === 1) inp.value = m[0] + " ";
      else if (m.length > 1) { w('<span class="p">' + m.join("  ") + '</span>'); scrollTerm(); }
    }
  } else if (e.key === "Escape") { closeTerm(); }

});

let trackId = null;
function focusBody(b, withPanel) {
  if (b.kind === "star") {
    trackId = null; focusId = "core";
    flyTo({ tx: 0, ty: 0, tz: 0, dist: 62, pitch: 0.22 }, 1.2, openTerm); return;
  }
  if (b.kind === "field") {
    if (b.resolved && b.shown) { openIdCard(); armFieldTimer(FIELD_HOLD); }
    else startScan();
    if (withPanel) openPanel(b);
    return;
  }
  trackId = b.id; focusId = b.id;
  const d = clamp(b.r * 7.5 + 22, 34, 95);
  flyTo({ dist: d, pitch: clamp(cam.pitch, 0.12, 0.6) }, touring ? 2.2 : 1.25);
  if (withPanel !== false) openPanel(b);
}

function resetView() {
  trackId = null; focusId = null; closePanel();
  flyTo({ tx: 0, ty: 0, tz: 0, dist: 290, yaw: 0.62, pitch: 0.40 }, 1.4);
  toast("free orbit restored");
}

let tourTimers = [];
let touring = false;
function stopTour() { touring = false; tourTimers.forEach(clearTimeout); tourTimers = []; }
function startTour() {
  if (touring) { stopTour(); toast("tour cancelled"); return; }
  touring = true;
  const stops = world.planets.slice();
  let d = 0;
  stops.forEach(function (p, i) {
    tourTimers.push(setTimeout(function () {
      if (!touring) return;
      focusBody(p, true);
      toast((i + 1) + "/" + stops.length + " · " + p.name);
    }, d));
    d += 7000;
  });
  tourTimers.push(setTimeout(function () {
    if (!touring) return;
    closePanel(); resetScan(); startScan();
  }, d));
  tourTimers.push(setTimeout(function () { touring = false; }, d + 8000));
  toast("tour engaged · click anywhere to take over");
}

const stage = $("#stage");
const pointers = new Map();
let dragging = false, moved = 0, lastX = 0, lastY = 0, pinch0 = 0;

function pick(mx, my) {
  let best = null, bestD = 1e9;
  for (const h of hits) {
    const d = Math.hypot(h.x - mx, h.y - my);
    if (d < h.r && d < bestD) { bestD = d; best = h.o; }
  }
  return best;
}

stage.addEventListener("pointerdown", function (e) {
  if (e.target !== cv) return;
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pointers.size === 1) {
    dragging = true; moved = 0; lastX = e.clientX; lastY = e.clientY;
    stage.classList.add("grabbing");
  }
  if (pointers.size === 2) {
    const p = Array.from(pointers.values());
    pinch0 = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
  }
  stopTour();
  cv.setPointerCapture && cv.setPointerCapture(e.pointerId);
});

stage.addEventListener("pointermove", function (e) {
  const rect = cv.getBoundingClientRect();
  const mx = e.clientX - rect.left, my = e.clientY - rect.top;

  if (pointers.has(e.pointerId)) pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

  if (pointers.size === 2) {
    const p = Array.from(pointers.values());
    const d = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
    if (pinch0 > 0) { cam.dist = clamp(cam.dist * (pinch0 / d), cam.minDist, cam.maxDist); }
    pinch0 = d; moved = 99; fly = null;
    return;
  }
  if (dragging && pointers.size === 1) {
    const dx = e.clientX - lastX, dy = e.clientY - lastY;
    lastX = e.clientX; lastY = e.clientY;
    moved += Math.abs(dx) + Math.abs(dy);
    if (moved > 4) {
      fly = null;
      cam.yaw -= dx * 0.0052;
      cam.pitch = clamp(cam.pitch + dy * 0.0045, -1.32, 1.32);
    }
    return;
  }
  /* hover */
  if (state.mode !== "galaxy") return;
  const h = pick(mx, my);
  hovered = h;
  const tip = $("#tooltip");
  if (h) {
    stage.classList.add("pointing");
    tip.innerHTML = esc(h.name) + (h.cls ? "<small>" + esc(h.cls) + "</small>" : "");
    tip.style.left = e.clientX + "px";
    tip.style.top = e.clientY + "px";
    tip.classList.add("on");
  } else {
    stage.classList.remove("pointing");
    tip.classList.remove("on");
  }
});

function endPointer(e) {
  const wasSingle = pointers.size === 1;
  pointers.delete(e.pointerId);
  if (pointers.size < 2) pinch0 = 0;
  if (!pointers.size) { dragging = false; stage.classList.remove("grabbing"); }
  if (wasSingle && moved <= 4 && state.mode === "galaxy" && e.target === cv) {
    const rect = cv.getBoundingClientRect();
    const h = pick(e.clientX - rect.left, e.clientY - rect.top);
    if (h) focusBody(h, true);
    else { closePanel(); focusId = null; }
  }
}
stage.addEventListener("pointerup", endPointer);
stage.addEventListener("pointercancel", endPointer);

cv.addEventListener("wheel", function (e) {
  if (state.mode !== "galaxy") return;
  e.preventDefault();
  fly = null;
  cam.dist = clamp(cam.dist * Math.exp(e.deltaY * 0.0011), cam.minDist, cam.maxDist);
}, { passive: false });


$("#btnLaunch").addEventListener("click", beginLaunch);
$("#btnSkip").addEventListener("click", function () {
  $("#boot").classList.add("gone"); state.launched = true; enterGalaxy(1.2);
});
$("#btnResume2").addEventListener("click", function () {
  $("#boot").classList.add("gone"); state.launched = true; enterGalaxy(0.6); openResume();
});
$("#btnResume").addEventListener("click", function () {
  $("#resume").classList.contains("open") ? closeResume() : openResume();
});
$("#btnReset").addEventListener("click", resetView);
$("#btnTour").addEventListener("click", startTour);
$("#btnHelp").addEventListener("click", function () {
  toast("drag orbit · scroll zoom · T shell · R recruiter view · I scan · Esc skip/close · Home reset");
});

$("#panelClose").addEventListener("click", function () { closePanel(); focusId = null; });
$("#termClose").addEventListener("click", closeTerm);
$("#term").addEventListener("pointerdown", function (e) {
  const t = e.target;
  if (t === inp) return;
  if (t.closest && t.closest("button,a,input")) return;
  const sel = (typeof window.getSelection === "function") ? window.getSelection() : null;
  if (sel && String(sel).length > 0) return;
  e.preventDefault();
  focusShell();
});
$("#idClose").addEventListener("click", closeIdCard);
$("#termwrap").addEventListener("pointerdown", function (e) { if (e.target === this) closeTerm(); });
$("#idcard").addEventListener("pointerdown", function (e) { if (e.target === this) closeIdCard(); });
$("#panelBody").addEventListener("click", function (e) {
  const f = e.target.closest("[data-focus]");
  if (f) { const b = world.byId[f.getAttribute("data-focus")]; if (b) focusBody(b, false); return; }
  if (e.target.closest("[data-scan]")) { resetScan(); startScan(); }
});
$$("#dock [data-goto]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const b = world.byId[btn.getAttribute("data-goto")];
    if (b) focusBody(b, b.kind !== "star");
  });
});

document.addEventListener("keydown", function (e) {
  const typing = document.activeElement === inp;
  if (state.mode === "boot" && !state.launched) {
    if (e.key === "Enter") { e.preventDefault(); beginLaunch(); }
    return;
  }
  if (e.key === "Escape") {
    if (state.mode === "ascent" || state.mode === "warp") { e.preventDefault(); skipIntro(); return; }
    if ($("#termwrap").classList.contains("open")) return closeTerm();
    if ($("#idcard").classList.contains("open")) return closeIdCard();
    if ($("#resume").classList.contains("open")) return closeResume();
    if ($("#panel").classList.contains("open")) { closePanel(); focusId = null; return; }
    return;
  }
  if (typing) return;
  const k = e.key.toLowerCase();
  if (k === "t") { openTerm(); }
  else if (k === "r") { $("#resume").classList.contains("open") ? closeResume() : openResume(); }
  else if (k === "i") { resetScan(); startScan(); }
  else if (k === "home") { resetView(); }
  else if (k === "?") { $("#btnHelp").click(); }
  else if (k >= "1" && k <= "9") {
    const b = world.planets[parseInt(k, 10) - 1];
    if (b) focusBody(b, true);
  }
});
window.addEventListener("resize", resize);
window.addEventListener("blur", function () { pointers.clear(); dragging = false; });

"use strict";
const THREATS = {
  low: [
    "Port Scan", "Brute Force", "Phishing Lure",
    "Credential Spray", "Directory Traversal"
  ],
  medium: [
    "SQLi Probe", "XSS Payload", "MITM Intercept",
    "DNS Spoof", "Session Hijack", "CSRF Exploit"
  ],
  high: [
    "RCE Exploit", "Zero-Day", "Ransomware",
    "Buffer Overflow", "DDoS Flood", "Privilege Escalation"
  ]
};

const SEV_COLOR = { low: "#F59E0B", medium: "#FB923C", high: "#FF6B6B" };
const SEV_GLOW = {
  low: "rgba(245,158,11,",
  medium: "rgba(251,146,60,",
  high: "rgba(255,107,107,"
};
const SEV_SIZE = { low: 0.72, medium: 1.0, high: 1.42 };
let asteroidIdCounter = 0;

const defenderFor = {};
(function buildDefenderMap() {
  for (const p of world.planets) {
    if (!defenderFor[p.id]) defenderFor[p.id] = [];
    for (const uid of (p.uplinks || [])) {
      if (!defenderFor[uid]) defenderFor[uid] = [];
      defenderFor[uid].push(p.id);
    }
  }
})();

function pickDefender(targetId) {
  const defenders = (defenderFor[targetId] || []).filter(function (id) {
    return world.byId[id] && world.byId[id].kind === "planet";
  });
  if (defenders.length) {
    return world.byId[defenders[Math.floor(Math.random() * defenders.length)]];
  }
  return world.star;
}

function makeAsteroidShape(seed, n) {
  const pts = [];
  const r32 = mulberry(seed);
  for (let i = 0; i < n; i++) {
    const ang = (i / n) * TAU;
    const radius = 0.55 + r32() * 0.45;
    pts.push({ a: ang, r: radius });
  }
  return pts;
}

function makeParticle(x, y, color) {
  const spd = 60 + Math.random() * 240;
  const ang = Math.random() * TAU;
  return {
    x, y,
    vx: Math.cos(ang) * spd,
    vy: Math.sin(ang) * spd,
    life: 0.4 + Math.random() * 0.7,
    t: 0,
    sz: 1 + Math.random() * 2.5,
    color: color
  };
}


const asteroids = [];
const beams = [];
const explosions = [];
const breaches = [];

let asteroidSpawnTimer = 5 + Math.random() * 5;
let asteroidSystemActive = false;

function spawnAsteroid() {

  const targets = world.planets;
  if (!targets.length) return;
  const target = targets[Math.floor(Math.random() * targets.length)];

  const roll = Math.random();
  const sev = roll < 0.40 ? "low" : roll < 0.72 ? "medium" : "high";
  const list = THREATS[sev];
  const name = list[Math.floor(Math.random() * list.length)];


  const outerR = 160 + Math.random() * 80;
  const spawnAng = Math.random() * TAU;
  const spawnX = Math.cos(spawnAng) * outerR;
  const spawnZ = Math.sin(spawnAng) * outerR;
  const spawnY = (Math.random() - 0.5) * 30;


  const baseSpeed = sev === "high" ? 28 : sev === "medium" ? 20 : 14;
  const speed = baseSpeed + Math.random() * 10;

  let outcome;
  if (sev === "low") {
    outcome = Math.random() < 0.50 ? "pass" : "hit";
  } else {
    outcome = "intercept";
  }

  const ast = {
    id: ++asteroidIdCounter,
    sev, name, target, outcome,
    x: spawnX, y: spawnY, z: spawnZ,
    speed,
    rotation: Math.random() * TAU,
    rotSpeed: (Math.random() - 0.5) * 2.5,
    shape: makeAsteroidShape(asteroidIdCounter * 7 + 13, 9 + Math.floor(Math.random() * 5)),
    trail: [],
    life: 0,
    dead: false,
    interceptAt: null,
    defenderBody: null,
    beamFired: false
  };


  if (outcome === "intercept") {
    ast.defenderBody = pickDefender(target.id);

    const frac = 0.35 + Math.random() * 0.3;
    ast.interceptAt = {
      x: ast.x + (target.pos.x - ast.x) * frac,
      y: ast.y + (target.pos.y - ast.y) * frac,
      z: ast.z + (target.pos.z - ast.z) * frac
    };
  }

  asteroids.push(ast);
}


function updateAsteroids(dt) {
  if (!asteroidSystemActive) return;


  asteroidSpawnTimer -= dt;
  if (asteroidSpawnTimer <= 0) {
    const count = 1 + Math.floor(Math.random() * (LOWPOWER ? 2 : 3));
    for (let i = 0; i < count; i++) {
      setTimeout(function () { spawnAsteroid(); }, i * (800 + Math.random() * 600));
    }
    asteroidSpawnTimer = (LOWPOWER ? 14 : 9) + Math.random() * 12;
  }


  for (let i = asteroids.length - 1; i >= 0; i--) {
    const ast = asteroids[i];
    if (ast.dead) { asteroids.splice(i, 1); continue; }

    ast.life += dt;
    ast.rotation += ast.rotSpeed * dt;

    const target = ast.target;
    const tx = target.pos.x, ty = target.pos.y, tz = target.pos.z;
    const dx = tx - ast.x, dy = ty - ast.y, dz = tz - ast.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;


    ast.x += (dx / dist) * ast.speed * dt;
    ast.y += (dy / dist) * ast.speed * dt;
    ast.z += (dz / dist) * ast.speed * dt;


    const avoidR = 30;
    const sdx2 = ast.x, sdy2 = ast.y, sdz2 = ast.z;
    const sDist2 = Math.sqrt(sdx2 * sdx2 + sdy2 * sdy2 + sdz2 * sdz2) || 0.01;
    if (sDist2 < avoidR) {

      const norm = avoidR / sDist2;
      ast.x = sdx2 * norm;
      ast.y = sdy2 * norm;
      ast.z = sdz2 * norm;

      const tx2 = -sdz2 / sDist2, tz2 = sdx2 / sDist2;
      ast.x += tx2 * ast.speed * dt * 2.5;
      ast.z += tz2 * ast.speed * dt * 2.5;
    } else if (sDist2 < avoidR * 1.8) {

      const strength = (avoidR * 1.8 - sDist2) / (avoidR * 0.8);
      const rx = sdx2 / sDist2, rz = sdz2 / sDist2;
      const tx3 = -rz, tz3 = rx;
      ast.x += (rx * 0.6 + tx3 * 1.2) * strength * ast.speed * dt;
      ast.z += (rz * 0.6 + tz3 * 1.2) * strength * ast.speed * dt;
    }


    ast.trail.push({ x: ast.x, y: ast.y, z: ast.z });
    if (ast.trail.length > (LOWPOWER ? 8 : 16)) ast.trail.shift();


    if (ast.outcome === "intercept" && !ast.beamFired && ast.interceptAt) {
      const ix = ast.interceptAt.x, iy = ast.interceptAt.y, iz = ast.interceptAt.z;
      const ex = ix - ast.x, ey = iy - ast.y, ez = iz - ast.z;
      const edist = Math.sqrt(ex * ex + ey * ey + ez * ez);
      if (edist < 8) {
        ast.beamFired = true;
        fireBeam(ast);
      }
    }


    const hitDist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (hitDist < target.r + 4) {
      if (ast.outcome === "hit") {
        breachPlanet(ast);
      }
      ast.dead = true;
    }

    if (ast.outcome === "pass" && dist < target.r * 4) {

      ast.outcome = "_passing";
      ast.passDir = { x: -dz / dist, y: 0, z: dx / dist };
    }
    if (ast.outcome === "_passing") {
      ast.x += ast.passDir.x * ast.speed * 1.6 * dt;
      ast.z += ast.passDir.z * ast.speed * 1.6 * dt;
      if (dist > 180) ast.dead = true;
    }


    if (ast.life > 40) ast.dead = true;
  }


  for (let i = beams.length - 1; i >= 0; i--) {
    const b = beams[i];
    b.t += dt;
    if (b.t > b.dur) beams.splice(i, 1);
  }


  for (let i = explosions.length - 1; i >= 0; i--) {
    const e = explosions[i];
    e.t += dt;
    e.x += e.vx * dt; e.y += e.vy * dt;
    e.vx *= 0.88; e.vy *= 0.88;
    if (e.t >= e.life) explosions.splice(i, 1);
  }


  for (let i = breaches.length - 1; i >= 0; i--) {
    const b = breaches[i];
    b.t += dt;
    if (b.t > b.dur) breaches.splice(i, 1);
  }
}


function fireBeam(ast) {
  const defender = ast.defenderBody;
  const ip = ast.interceptAt;

  beams.push({
    ax: defender.pos.x, ay: defender.pos.y, az: defender.pos.z,
    bx: ip.x, by: ip.y, bz: ip.z,
    sev: ast.sev,
    t: 0, dur: 0.65
  });


  const sp = project(ip.x, ip.y, ip.z);
  if (sp) {
    const count = ast.sev === "high" ? (LOWPOWER ? 22 : 48) :
      ast.sev === "medium" ? (LOWPOWER ? 12 : 24) : (LOWPOWER ? 6 : 12);
    const col = SEV_COLOR[ast.sev];
    for (let i = 0; i < count; i++) explosions.push(makeParticle(sp.x, sp.y, col));

    if (ast.sev === "high") {
      for (let i = 0; i < (LOWPOWER ? 10 : 20); i++) explosions.push(makeParticle(sp.x, sp.y, "#EDE9F4"));
    }
  }


  queueGlow(
    sp ? sp.x : W / 2, sp ? sp.y : H / 2,
    ast.sev === "high" ? 80 : ast.sev === "medium" ? 50 : 28,
    SEV_GLOW[ast.sev] + "0.9)",
    1.0
  );


  showThreatAlert(ast.sev, ast.name, defender.name || defender.id, "intercepted");

  ast.dead = true;
}


function breachPlanet(ast) {
  const tp = project(ast.target.pos.x, ast.target.pos.y, ast.target.pos.z);
  if (tp) {
    const count = LOWPOWER ? 5 : 10;
    for (let i = 0; i < count; i++) explosions.push(makeParticle(tp.x, tp.y, "#F59E0B"));
  }
  breaches.push({
    body: ast.target,
    t: 0, dur: 2.8
  });
  showThreatAlert(ast.sev, ast.name, ast.target.name, "breached");
}


let alertTimer = null;
function showThreatAlert(sev, name, defenderOrTarget, mode) {
  return;
}


function drawAsteroids() {

  for (const br of breaches) {
    const b = br.body;
    const p = project(b.pos.x, b.pos.y, b.pos.z);
    if (!p) continue;
    const rr = Math.max(1.6, b.r * p.s);
    const phase = br.t / br.dur;
    const alpha = Math.max(0, 1 - phase) * (0.5 + 0.5 * Math.sin(br.t * 18));
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = "#FF6B6B";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(p.x, p.y, rr + 8 + phase * 14, 0, TAU);
    ctx.stroke();
    ctx.restore();
    queueGlow(p.x, p.y, rr * 4, "rgba(255,107,107,0.5)", alpha * 0.7);
  }


  for (const bm of beams) {
    const pa = project(bm.ax, bm.ay, bm.az);
    const pb = project(bm.bx, bm.by, bm.bz);
    if (!pa || !pb) continue;
    const phase = bm.t / bm.dur;
    const alpha = (1 - phase) * (bm.sev === "high" ? 0.95 : 0.78);
    const col = SEV_COLOR[bm.sev];
    ctx.save();
    ctx.globalAlpha = alpha;

    ctx.strokeStyle = col;
    ctx.lineWidth = bm.sev === "high" ? 2.5 : 1.5;
    ctx.beginPath(); ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y); ctx.stroke();

    ctx.globalAlpha = alpha * 0.35;
    ctx.strokeStyle = col;
    ctx.lineWidth = bm.sev === "high" ? 8 : 5;
    ctx.filter = "blur(3px)";
    ctx.beginPath(); ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y); ctx.stroke();
    ctx.filter = "none";
    ctx.restore();
    ctx.globalAlpha = 1;
  }


  for (const p of explosions) {
    const k = 1 - p.t / p.life;
    ctx.globalAlpha = k * 0.92;
    ctx.fillStyle = p.color;
    const sz = p.sz * k;
    ctx.fillRect(p.x - sz / 2, p.y - sz / 2, sz, sz);
  }
  ctx.globalAlpha = 1;

  for (const ast of asteroids) {
    if (ast.dead) continue;
    const p = project(ast.x, ast.y, ast.z);
    if (!p) continue;

    const sizeScale = SEV_SIZE[ast.sev] * Math.max(0.5, p.s * 0.22);
    const rr = sizeScale * 14;
    if (rr < 0.5) continue;

    const col = SEV_COLOR[ast.sev];


    if (ast.trail.length > 1) {
      ctx.save();
      ctx.lineWidth = Math.max(0.8, rr * 0.35);
      for (let i = 1; i < ast.trail.length; i++) {
        const tp0 = project(ast.trail[i - 1].x, ast.trail[i - 1].y, ast.trail[i - 1].z);
        const tp1 = project(ast.trail[i].x, ast.trail[i].y, ast.trail[i].z);
        if (!tp0 || !tp1) continue;
        const alpha = (i / ast.trail.length) * 0.5;
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = col;
        ctx.beginPath(); ctx.moveTo(tp0.x, tp0.y); ctx.lineTo(tp1.x, tp1.y); ctx.stroke();
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    }


    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(ast.rotation);
    ctx.beginPath();
    for (let i = 0; i < ast.shape.length; i++) {
      const pt = ast.shape[i];
      const px2 = Math.cos(pt.a) * pt.r * rr;
      const py2 = Math.sin(pt.a) * pt.r * rr;
      if (i === 0) ctx.moveTo(px2, py2); else ctx.lineTo(px2, py2);
    }
    ctx.closePath();

    const grad = ctx.createRadialGradient(-rr * 0.25, -rr * 0.25, rr * 0.05, 0, 0, rr * 1.1);
    grad.addColorStop(0, "#4A3A2E");
    grad.addColorStop(0.55, "#2A1F18");
    grad.addColorStop(1, col);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = col;
    ctx.lineWidth = 0.8;
    ctx.globalAlpha = 0.7;
    ctx.stroke();
    ctx.restore();
    ctx.globalAlpha = 1;

    /* glow */
    queueGlow(p.x, p.y, rr * 3.5, SEV_GLOW[ast.sev] + "0.45)", 0.85);

    /* threat label — only when close enough or HIGH */
    if (rr > 5 || ast.sev === "high") {
      ctx.save();
      ctx.font = "8px " + FONT;
      ctx.fillStyle = col;
      ctx.globalAlpha = 0.9;
      ctx.textAlign = "left";
      ctx.textBaseline = "bottom";
      ctx.fillText(ast.name.toUpperCase(), p.x + rr + 3, p.y - 2);
      ctx.restore();
      ctx.globalAlpha = 1;
    }
  }
}

function armAsteroidSystem() {
  asteroidSystemActive = true;
}

"use strict";

let last = performance.now(), fpsAcc = 0, fpsN = 0, fpsShown = 60, hudTick = 0;

function updateHud() {
  $("#tBodies").textContent = world.planets.length + " / 8";
  $("#tLinks").textContent = world.links.length;
  $("#tRange").textContent = cam.dist.toFixed(0) + " au";
  $("#tRangeBar").style.width = clamp((cam.dist - cam.minDist) / (cam.maxDist - cam.minDist) * 100, 2, 100) + "%";
  $("#tFps").textContent = fpsShown + " fps";
  const f = world.field;
  $("#tSignal").textContent = f.scanning ? "decoding " + Math.round(f.scan * 100) + "%"
    : f.resolved ? "identity locked · " + Math.ceil(Math.max(0, fieldTimer)) + "s"
      : f.shown ? "lattice open" : "lattice sealed";
  $("#tSignal").style.color = f.resolved ? "var(--venom)" : "var(--orchid)";
  if (!focusId) $("#tFocus").textContent = touring ? "guided tour" : "free orbit";
}

function frame(now) {
  const dt = Math.min(0.05, Math.max(0.0005, (now - last) / 1000));
  last = now;
  T += dt; state.t += dt;

  fpsAcc += dt; fpsN++;
  if (fpsAcc > 0.5) { fpsShown = Math.round(fpsN / fpsAcc); fpsAcc = 0; fpsN = 0; }

  stepTweens(dt);
  stepFly(dt);
  stepFieldTimer(dt);


  if (trackId && world.byId[trackId]) {
    const b = world.byId[trackId];
    const k = 1 - Math.pow(0.0016, dt);
    cam.tx = lerp(cam.tx, b.pos.x, k);
    cam.ty = lerp(cam.ty, b.pos.y, k);
    cam.tz = lerp(cam.tz, b.pos.z, k);
  }
  updateCamera();

  if (state.mode === "ascent") drawAscent(dt);
  else if (state.mode === "warp") drawWarp(dt);
  else {
    updateWorld(dt);
    updateAsteroids(dt);
    drawSky(T);
    drawSystem();
    drawAsteroids();
  }

  if (state.flash > 0.001) {
    ctx.globalAlpha = state.flash;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, W, H);
    ctx.globalAlpha = 1;
    state.flash = Math.max(0, state.flash - dt * 2.2);
  }

  if (++hudTick % 8 === 0 && state.mode === "galaxy") updateHud();
  requestAnimationFrame(frame);
}


(function init() {
  resize();
  cam.dist = 520; cam.yaw = 0.15; cam.pitch = 0.62;
  updateCamera();
  runBoot();
  requestAnimationFrame(function (t) { last = t; frame(t); });

  cv.setAttribute("tabindex", "0");
  cv.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openTerm(); }
  });
  if (TOUCH) $("#hint") && ($("#hint").style.display = "none");
})();