/** @param {NS} ns **/
export async function main(ns) {
	const defaultRam = 5 // 32GB
	let currentRam = defaultRam
	let serverRam = 1

	for (let iteration = 1; iteration <= currentRam; iteration++) {
		serverRam = serverRam * 2
	}

	const serverCost = ns.getPurchasedServerCost(serverRam)
	const serverLimit = ns.getPurchasedServerLimit()
	const hckScript = ["hack.js", "hake.js", "grow.js", "weaken.js"]
	const hckScriptRam = ns.getScriptRam("hack.js")
	const wknScriptRam = ns.getScriptRam("weaken.js")
	const totalHckThread = Math.round(serverRam / 2 / hckScriptRam)
	const totalWknThread = Math.round(serverRam / 2 / wknScriptRam) - 1

	for (let i = 1; i <= serverLimit; i++) {
		const serverName = "p" + i
		if (!ns.serverExists(serverName)) {
			if (ns.getServerMoneyAvailable("home") >= serverCost) {
				ns.purchaseServer(serverName, serverRam)

				if (!ns.fileExists(hckScript, serverName)) {
					await ns.scp(hckScript, "home", serverName)
					ns.exec("hack.js", serverName, totalHckThread, "joesguns")
					ns.exec("weaken.js", serverName, totalWknThread, "joesguns")
				}
			}
		}
	}
}