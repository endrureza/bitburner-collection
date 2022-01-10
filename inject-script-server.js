/** @param {NS} ns **/
export async function main(ns) {
	const scripts = ["hake.js", "hack.js", "weaken.js", "grow.js"]
	const serverLimit = ns.getPurchasedServerLimit()

	for (let i = 1; i <= serverLimit; i++) {
		const serverName = "p" + i
		if (ns.serverExists(serverName)) {
			await ns.scp(scripts, "home", serverName)
		}
	}
}