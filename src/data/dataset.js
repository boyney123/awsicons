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

import * as Res_Analytics from "../icons/Res_Analytics/Res_48_Light"
import * as Res_Applicatiom_Integration from "../icons/Res_Application-Integration/Res_48_Light"
import * as Res_Blockchain from "../icons/Res_Blockchain/Res_48_Light"
import * as Res_Compute from "../icons/Res_Compute/Res_48_Light"
import * as Res_Containers from "../icons/Res_Containers/Res_48_Light"
import * as Res_Customer_Engagement from "../icons/Res_Customer-Engagement/Res_48_Light"
import * as Res_Database from "../icons/Res_Database/Res_48_Light"
import * as Res_Developer_Tools from "../icons/Res_Developer-Tools/Res_48_Light"
import * as Res_General_Icons from "../icons/Res_General-Icons/Res_48_Light"
import * as Res_loT from "../icons/Res_loT/Res_48_Light"
import * as Res_Machine_Learning from "../icons/Res_Machine-Learning/Res_48_Light"
import * as Res_Management_Governance from "../icons/Res_Management-Governance/Res_48_Light"
import * as Res_Migration_And_Transfer from "../icons/Res_Migration-And-Transfer/Res_48_Light"
import * as Res_Mobile from "../icons/Res_Mobile/Res_48_Light"
import * as Res_Networking_and_Content_Delivery from "../icons/Res_Networking-and-Content-Delivery/Res_48_Light"
import * as Res_Robotics from "../icons/Res_Robotics/Res_48_Light"
import * as Res_Security_Identity_and_Compliance from "../icons/Res_Security-Identity-and-Compliance/Res_48_Light"
import * as Res_Storage from "../icons/Res_Storage/Res_48_Light"

import tags from "data/tags"

const buildDataSetFromImport = (iconsAsImport, tags = "") => {
	return Object.keys(iconsAsImport).map(item => {

		const name = item
			.replace("Arch", "")
			.replace("Aws", "")
			.replace("Amazon", "")
			.replace("32", "")
			.replace("48", "")
			.replace("ResEmr", "")
			.replace("Res", "")
			.replace("Light", "")
			.replace("Dark", "")

		return {
			name,
			tags: [name.toLowerCase(), ...tags],
			svg: iconsAsImport[item],
			new: false,
		}
	})
}

const dataset = [
	...buildDataSetFromImport(AWSAnalytics, ["analytics"]),
	...buildDataSetFromImport(Res_Analytics, ["analytics"]),
	...buildDataSetFromImport(AWSAppIntegration, ["app", "integration"]),
	...buildDataSetFromImport(Res_Applicatiom_Integration, ["app", "integration"]),
	...buildDataSetFromImport(AWSARVR, ["ar", "vr"]),
	...buildDataSetFromImport(AWSBlockChain, ["blockchain"]),
	...buildDataSetFromImport(Res_Blockchain, ["blockchain"]),
	...buildDataSetFromImport(AWSBusinessApplication, ["business"]),
	...buildDataSetFromImport(AWSCompute, ["compute"]),
	...buildDataSetFromImport(Res_Compute, ["compute"]),
	...buildDataSetFromImport(AWSContainers, ["container", "containers"]),
	...buildDataSetFromImport(Res_Containers, ["container", "containers"]),
	...buildDataSetFromImport(AWSCostManagement, ["cost-management"]),
	...buildDataSetFromImport(AWSCustomerEnablement, ["customer", "enablement"]),
	...buildDataSetFromImport(AWSCustomerEngagement, ["customer", "engagement"]),
	...buildDataSetFromImport(Res_Customer_Engagement, ["customer", "engagement"]),
	...buildDataSetFromImport(AWSDatabase, ["database", "db"]),
	...buildDataSetFromImport(Res_Database, ["database", "db"]),
	...buildDataSetFromImport(AWSDevTools, ["dev", "developer", "tools"]),
	...buildDataSetFromImport(Res_Developer_Tools, ["dev", "developer", "tools"]),
	...buildDataSetFromImport(AWSEndUserComputing, ["enduser", "computing"]),
	...buildDataSetFromImport(AWSGameTech, ["game"]),
	...buildDataSetFromImport(AWSIOT, ["iot", "internet", "things"]),
	...buildDataSetFromImport(Res_loT, ["iot", "internet", "things"]),
	...buildDataSetFromImport(AWSMachineLearning, ["AI", "machine", "learning"]),
	...buildDataSetFromImport(Res_Machine_Learning, ["AI", "machine", "learning"]),
	...buildDataSetFromImport(AWSManagementGovernance, ["management"]),
	...buildDataSetFromImport(Res_Management_Governance, ["management"]),
	...buildDataSetFromImport(AWSMediaServices, ["media", "services"]),
	...buildDataSetFromImport(AWSMigrationTransfer, ["migration"]),
	...buildDataSetFromImport(Res_Migration_And_Transfer, ["migration"]),
	...buildDataSetFromImport(AWSNetworkingContent, ["networking", "content"]),
	...buildDataSetFromImport(Res_Networking_and_Content_Delivery, ["networking", "content"]),
	...buildDataSetFromImport(AWSQuantumTechnlogies, ["quantum"]),
	...buildDataSetFromImport(AWSRobotics, ["robotics", "robots"]),
	...buildDataSetFromImport(Res_Robotics, ["robotics", "robots"]),
	...buildDataSetFromImport(AWSSatellite, ["satellite"]),
	...buildDataSetFromImport(AWSSecurity, ["security"]),
	...buildDataSetFromImport(Res_Security_Identity_and_Compliance, ["security"]),
	...buildDataSetFromImport(AWSStorage, ["storage"]),
	...buildDataSetFromImport(Res_Storage, ["storage"]),
	...buildDataSetFromImport(Res_General_Icons, ["general"]),
	...buildDataSetFromImport(Res_Mobile, ["mobile"]),

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
