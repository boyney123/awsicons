import * as AWSAnalytics from "../icons/Arch_Analytics/Arch_32"
import * as AWSAppIntegration from "../icons/Arch_App-Integration/Arch_32"
import * as AWSARVR from "../icons/Arch_AR-VR/Arch_32"
import * as AWSBlockChain from "../icons/Arch_Blockchain/32"
import * as AWSBusinessApplication from "../icons/Arch_Business-Application/32"
import * as AWSCompute from "../icons/Arch_Compute/32"
import * as AWSContainers from "../icons/Arch_Containers/32"
import * as AWSCostManagement from "../icons/Arch_Cost-Management/32"
import * as AWSCustomerEnablement from "../icons/Arch_Customer-Enablement/32"
import * as AWSCustomerEngagement from "../icons/Arch_Customer-Enagagement/32"
import * as AWSDatabase from "../icons/Arch_Database/32"
import * as AWSDevTools from "../icons/Arch_Developer- Tools/32"
import * as AWSEndUserComputing from "../icons/Arch_End-User-Computing/32"
import * as AWSGameTech from "../icons/Arch_Game-Tech/32"
import * as AWSIOT from "../icons/Arch_Internet-of-Things/32"
import * as AWSMachineLearning from "../icons/Arch_Machine-Learning/32"
import * as AWSManagementGovernance from "../icons/Arch_Management-Governance/32"
import * as AWSMediaServices from "../icons/Arch_Media-Services/32"
import * as AWSMigrationTransfer from "../icons/Arch_Migration-Transfer/32"
import * as AWSNetworkingContent from "../icons/Arch_Networking-Content/32"
import * as AWSQuantumTechnlogies from "../icons/Arch_Quantum_Technologies/32"
import * as AWSRobotics from "../icons/Arch_Robotics/32"
import * as AWSSatellite from "../icons/Arch_Satellite/32"
import * as AWSSecurity from "../icons/Arch_Security-Identity-Compliance/32"
import * as AWSStorage from "../icons/Arch_Storage/32"
import tags from "data/tags"

const buildDataSetFromImport = (iconsAsImport, tags = "") => {
	return Object.keys(iconsAsImport).map(item => {

		const name = item
			.replace("Arch", "")
			.replace("Aws", "")
			.replace("Amazon", "")
			.replace("32", "")

		// Clean up name for tokenizing
		const filteredName = name
			.replace('AiA2I', 'AiA2i')
			.replace('Ec2M5N', 'Ec2M5n')
			.replace('Ec2R5N', 'Ec2R5n')
			.replace('IoT', 'Iot')
			.replace('FSx', 'Fsx')
			.replace('VMware', 'Vmware')

		// Tokenize on capitalized words
		const tokens = filteredName
			.match(/([A-Z]?[^A-Z]*)/g)
			.slice(0,-1)
			.map(token => token.toLowerCase())

		// Dedup tags
		const combinedTags = new Set([name.toLowerCase(), ...tokens, ...tags])

		return {
			name,
			tags: Array.from(combinedTags),
			svg: iconsAsImport[item],
			new: false,
		}
	})
}

const dataset = [
	...buildDataSetFromImport(AWSAnalytics, ["analytics"]),
	...buildDataSetFromImport(AWSAppIntegration, ["app", "integration"]),
	...buildDataSetFromImport(AWSARVR, ["ar", "vr"]),
	...buildDataSetFromImport(AWSBlockChain, ["blockchain"]),
	...buildDataSetFromImport(AWSBusinessApplication, ["business"]),
	...buildDataSetFromImport(AWSCompute, ["compute"]),
	...buildDataSetFromImport(AWSContainers, ["container", "containers"]),
	...buildDataSetFromImport(AWSCostManagement, ["cost-management"]),
	...buildDataSetFromImport(AWSCustomerEnablement, ["customer", "enablement"]),
	...buildDataSetFromImport(AWSCustomerEngagement, ["customer", "engagement"]),
	...buildDataSetFromImport(AWSDatabase, ["database", "db"]),
	...buildDataSetFromImport(AWSDevTools, ["dev", "tools"]),
	...buildDataSetFromImport(AWSEndUserComputing, ["enduser", "computing"]),
	...buildDataSetFromImport(AWSGameTech, ["game"]),
	...buildDataSetFromImport(AWSIOT, ["iot", "internet", "things"]),
	...buildDataSetFromImport(AWSMachineLearning, ["ai", "machine", "learning"]),
	...buildDataSetFromImport(AWSManagementGovernance, ["management"]),
	...buildDataSetFromImport(AWSMediaServices, ["media", "services"]),
	...buildDataSetFromImport(AWSMigrationTransfer, ["migration"]),
	...buildDataSetFromImport(AWSNetworkingContent, ["networking"]),
	...buildDataSetFromImport(AWSQuantumTechnlogies, ["quantum"]),
	...buildDataSetFromImport(AWSRobotics, ["robotics", "robots"]),
	...buildDataSetFromImport(AWSSatellite, ["satellite"]),
	...buildDataSetFromImport(AWSSecurity, ["security"]),
	...buildDataSetFromImport(AWSStorage, ["storage"]),
].sort((a, b) => {
	const textA = a.name.toUpperCase()
	const textB = b.name.toUpperCase()
	return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
})

// Auto-generates tags based on a hyphenated name.
//
// "zoom" -> ["zoom"]
// "zoom-out" -> ["zoom-out", "zoomout", "zoom", "out"]
//
function autoTags(name) {
	const tags = name.split("-")
	if (tags.length === 1) {
		return tags
	}
	return [name, tags.join(""), ...tags]
}

;(() => {
	for (const each of dataset) {
		const auto = autoTags(each.name)

		const alt = tags[each.name]
		const altAuto = []
		if (alt !== undefined) {
			for (const each of alt) {
				altAuto.push(...autoTags(each))
			}
		}
		// const deduped = [...new Set([...auto, ...altAuto])]
		// each.tags.push(...deduped)
	}
})()

export default dataset
