/** @param {NS} ns **/
export async function main(ns) {
	var target = ns.args[0];
	var moneyThresh = ns.getServerMaxMoney(target) * 0.9;
	var securityThresh = ns.getServerMinSecurityLevel(target);

	if (ns.fileExists("BruteSSH.exe", "home")) {
		ns.brutessh(target);
	}

	if (ns.fileExists("FTPCrack.exe", "home")) {
		ns.ftpcrack(target)
	}

	if (ns.fileExists("SQLInject.exe", "home")) {
		ns.sqlinject(target)
	}

	if (ns.fileExists("HTTPWorm.exe", "home")) {
		ns.httpworm(target)
	}

	if (ns.fileExists("relaySMTP.exe", "home")) {
		ns.relaysmtp(target)
	}

	ns.nuke(target);

	while (true) {
		if (ns.getServerSecurityLevel(target) > securityThresh) {
			await ns.weaken(target);
		} else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
			await ns.grow(target);
		} else {
			await ns.hack(target);
		}
	}
}