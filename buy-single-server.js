/** @param {NS} ns **/
export async function main(ns) {
  const defaultRam = 13; // 2 ^ 13 = 8192
  let currentRam = ns.args[0] || defaultRam;
  let target = ns.args[1] || "joesguns";
  let serverRam = 1;

  for (let iteration = 1; iteration <= currentRam; iteration++) {
    serverRam = serverRam * 2;
  }

  const serverCost = ns.getPurchasedServerCost(serverRam);
  const serverLimit = ns.getPurchasedServerLimit();
  const hckScript = ["hack.js", "hake.js", "grow.js", "weaken.js"];
  const hckScriptRam = ns.getScriptRam("hack.js");
  const wknScriptRam = ns.getScriptRam("weaken.js");
  const totalHckThread = Math.round(serverRam / 2 / hckScriptRam);
  const totalWknThread = Math.round(serverRam / 2 / wknScriptRam) - 1;
  let suffix = {
    ram: "GB",
    money: "k",
  };
  let divider = {
    ram: 1,
    money: 1000000,
  };

  if (serverRam >= 1e3 && serverRam < 1e6) {
    suffix.ram = "TB";
    divider.ram = 1e3;
  }

  if (serverRam >= 1e6 && serverRam < 1e9) {
    suffix.ram = "PB";
    divider.ram = 1e6;
  }

  if (serverCost >= 1e6 && serverCost < 1e9) {
    suffix.money = "m";
    divider.money = 1e6;
  }

  if (serverCost >= 1e9 && serverCost < 1e12) {
    suffix.money = "b";
    divider.money = 1e9;
  }

  ns.tprint(`Server Ram: ${serverRam / divider.ram}${suffix.ram}`);
  ns.tprint(`Server Cost: ${serverCost / divider.money}${suffix.money}`);

  let i = 1;

  if (ns.getServerMoneyAvailable("home") < serverCost) {
    ns.tprint("Not Enough Money");

    return;
  }

  ns.tprint("Start Buying");

  if (ns.getServerMoneyAvailable("home") >= serverCost) {
    while (i <= serverLimit) {
      const serverName = "p" + i;
      if (!ns.serverExists(serverName)) {
        ns.purchaseServer(serverName, serverRam);

        await ns.scp(hckScript, "home", serverName);
        ns.exec("hack.js", serverName, totalHckThread, target);
        ns.exec("weaken.js", serverName, totalWknThread, target);

        break;
      }

      i++;
    }
  }

  ns.tprint("Finish Buying");
}
