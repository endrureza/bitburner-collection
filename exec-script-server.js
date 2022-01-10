/** @param {NS} ns **/
export async function main(ns) {
	const target = ns.args[0]
	const injectedScripts = ["hack.js", "weaken.js", "grow.js"]
	const serverLimit = ns.getPurchasedServerLimit()

	for (let i = 1; i <= serverLimit; i++) {
		const serverName = "p" + i
		if (ns.serverExists(serverName)) {
			injectedScripts.forEach((script) => {
				ns.exec(hckScript, serverName, 1366, target)
			})
		}
	}
}