/** @param {NS} ns **/
export async function main(ns) {
	const target = ns.args[0]

	displayServerGrowth(ns, target)
	displayServerSecurityLevel(ns, target)
	displayServerMinSecurityLevel(ns, target)
	displayHackAnalyze(ns, target)
	displayGrowAnalyze(ns, target)
	displayWeakenAnalyze(ns, target)
	displayServerAvailableMoney(ns, target)
	displayServerMaxMoney(ns, target)
	displayServerMaxRam(ns, target)
}

/**@param {NS} ns */
function displayHackAnalyze(ns, target) {
	ns.tprint("Hack Time: " + round(ns.getHackTime(target) / 1000) + " seconds")
	ns.tprint("Hack Stolen Amount: " + round(ns.hackAnalyze(target) * 100) + "%")
	ns.tprint("Hack Success Chance: " + round(ns.hackAnalyzeChance(target) * 100) + "%")
}

/**@param {NS} ns */
function displayGrowAnalyze(ns, target) {
	ns.tprint("Grow Time: " + round(ns.getGrowTime(target) / 1000) + " seconds")
}

/**@param {NS} ns */
function displayWeakenAnalyze(ns, target) {
	ns.tprint("Weaken Time: " + round(ns.getWeakenTime(target) / 1000) + " seconds")
}

/**@param {NS} ns */
function displayServerSecurityLevel(ns, target) {
	ns.tprint("Security Level: " + ns.getServerSecurityLevel(target))
}

/**@param {NS} ns */
function displayServerMinSecurityLevel(ns, target) {
	ns.tprint("Min Security Level: " + ns.getServerMinSecurityLevel(target))
}

/**@param {NS} ns */
function displayServerAvailableMoney(ns, target) {
	ns.tprint("Available Money: " + ns.getServerMoneyAvailable(target))
}

/**@param {NS} ns */
function displayServerMaxMoney(ns, target) {
	ns.tprint("Max Money: " + ns.getServerMaxMoney(target))
}

/**@param {NS} ns */
function displayServerMaxRam(ns, target) {
	ns.tprint("Max Ram: " + ns.getServerMaxRam(target))
}

/**@param {NS} ns */
function displayServerGrowth(ns, target) {
	ns.tprint("Growth: " + ns.getServerGrowth(target))
}

function round(num) {
	var m = Number((Math.abs(num) * 100).toPrecision(15));
	return Math.round(m) / 100 * Math.sign(num);
}