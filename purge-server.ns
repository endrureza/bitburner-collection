/** @param {NS} ns **/
export async function main(ns) {
	const serverLimit = ns.getPurchasedServerLimit()

	for (let i = 1; i <= serverLimit; i++) {
		const server = "p" + i
		if (ns.serverExists(server)) {
			ns.deleteServer(server)
		}
	}
}