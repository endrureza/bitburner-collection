/** @param {NS} ns **/
export async function main(ns) {
  const state = ns.args[0];
  let servers;

  if (state != "small" && state != "mid" && state != "big") {
    return ns.tprint("Wrong state");
  }

  if (state == "small") {
    servers = [
      "joesguns",
      "nectar-net",
      "hong-fang-tea",
      "harakiri-sushi",
      "neo-net",
      "zer0",
      "max-hardware",
      "iron-gym",
      "phantasy",
      "silver-helix",
      "omega-net",
      "crush-fitness",
      "johnson-ortho",
      "the-hub",
      "comptek",
      "netlink",
      "rothman-uni",
      "catalyst",
      "aevum-police",
      "summit-uni",
      "rho-construction",
      "millenium-fitness",
      "alpha-ent",
      "syscore",
      "lexo-corp",
    ];
  }

  if (state == "mid") {
    servers = [
      "zb-institute",
      "snap-fitness",
      "zb-def",
      "unitalife",
      "nova-med",
      "solaris",
      "applied-energetics",
      "zeus-med",
      "global-pharm",
      "galactic-cyber",
      "microdyne",
      "titan-labs",
      "vitalife",
      "deltaone",
      "univ-energy",
      "helios",
      "aerocorp",
      "icarus",
      "taiyang-digital",
      "infocomm",
      "omnia",
      "defcomm",
      "stormtech",
      "omnitek",
      "powerhouse-fitness",
    ];
  }

  if (state == "big") {
    servers = [
      "fulcrumtech",
      "kuai-gong",
      "4sigma",
      "omnitek",
      "megacorp",
      "ecorp",
      "icarus",
      "nwo",
      "stormtech",
      "global-pharm",
      "galactic-cyber",
      "microdyne",
      "univ-energy",
      "zb-institute",
      "nova-med",
      "blade",
      "unitalife",
      "zeus-med",
      "solaris",
      "taiyang-digital",
      "titan-labs",
      "vitalife",
      "helios",
      "b-and-a",
      "netlink",
    ];
  }

  const hckScript = "hack.js";
  const wknScript = "weaken.js";
  const hckScriptRam = ns.getScriptRam("hack.js");
  const wknScriptRam = ns.getScriptRam("weaken.js");

  for (let i = 1; i <= servers.length; i++) {
    const serverName = "p" + i;
    if (ns.serverExists(serverName)) {
      const target = servers[i - 1];

      const serverRam = ns.getServerMaxRam(serverName);
      const totalHckThread = Math.round(serverRam / 2 / hckScriptRam);
      const totalWknThread = Math.round(serverRam / 2 / wknScriptRam) - 1;

      ns.exec(hckScript, serverName, totalHckThread, target);
      ns.exec(wknScript, serverName, totalWknThread, target);
    }
  }
}
