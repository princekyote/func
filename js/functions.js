let provider

let ethWallet

let metamaskProvider

let persistentProvider

let signer

let ipfs

let RPAddress = "0xE6B01387AA8042C13951335982e5Cd3aa1255389"
let rariAddress = "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60"
let dropAddress = "0x07f2c930250F7b448094435Eb291F8E452135274"
let eventsNFT

let network

let selectedID

let ERC721ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "old",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "current",
        "type": "uint256"
      }
    ],
    "name": "BTCETHPriceUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "PresaleAllowedUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "old",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "current",
        "type": "uint256"
      }
    ],
    "name": "SaleStartTimestampUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "MAX_MINTABLE_SUPPLY",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_PURCHASABLE_SUPPLY",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_TOKEN_SUPPLY",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_minted_pizza_count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_purchased_pizza_count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_uriBase",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "bitcoinPriceInWei",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "n",
        "type": "uint256"
      }
    ],
    "name": "curve",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBitcoinPriceInWei",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPriceInWei",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "chainlinkBTCETHFeed",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "toPizzaiolo",
        "type": "address"
      },
      {
        "internalType": "uint8",
        "name": "count",
        "type": "uint8"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "publicSaleStart_timestampInS",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "purchase",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "toPaisano",
        "type": "address"
      }
    ],
    "name": "purchaseTo",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "count",
        "type": "uint8"
      },
      {
        "internalType": "address[]",
        "name": "toPaisanos",
        "type": "address[]"
      }
    ],
    "name": "setPresaleAllowed",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "epochSeconds",
        "type": "uint256"
      }
    ],
    "name": "setSaleStartTimestamp",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "fallbackValue",
        "type": "uint256"
      }
    ],
    "name": "updateBitcoinPriceInWei",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
let dropABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_dropTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "dropit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenID",
				"type": "uint256"
			}
		],
		"name": "getPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_dropper",
				"type": "address"
			}
		],
		"name": "hasRaribleNFT",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_calldata",
				"type": "bytes"
			}
		],
		"name": "onERC721Received",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenDrops",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "dropTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "dropper",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

async function initProvider() {
  network = "rinkeby"
  persistentProvider = await new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/eb76419055e542d5ab80d33bda1ccf74")
}

async function login() {

  await ethereum.enable()
  metamaskProvider = new ethers.providers.Web3Provider(web3.currentProvider)
  let accounts = await metamaskProvider.listAccounts()
  signer = metamaskProvider.getSigner(accounts[0])
  document.getElementById("wallet-address").innerHTML = ethers.utils.getAddress(signer._address)
  document.getElementById("app").classList.add('logged-in');
  await populateImages(RPAddress)
  //await populateImages(rariAddress)
  //ipfs = await Ipfs.create()
}

async function logout(){
  document.getElementById("wallet-address").innerHTML = "CONNECT"
  document.getElementById("func-stage").classList.remove('flip');
  document.getElementById("app").className = ""
  metamaskProvider = ""
  signer = ""
}

async function getBalance(nftAddress){
  let contract = new ethers.Contract(nftAddress,ERC721ABI,persistentProvider)
  let balance = await contract.balanceOf(signer._address)
  return(balance)
}

async function populateImages(nftAddress) {
  console.log("populateImages")
  let ownedIdsArray = await getOwnedIds(nftAddress,signer._address)
  console.log(ownedIdsArray)
  document.getElementById("portfolio").innerHTML = ""

  for (let t = 0;t<ownedIdsArray.length;t++){
    let id = ownedIdsArray[t]
    let metaData = new Object()
    let metaDataJSON = await getMetaData(nftAddress,id)
    console.log(metaDataJSON)
    let name = metaDataJSON.name
    let description = metaDataJSON.description
    let image = metaDataJSON.image
    let mintDate = await getDate(eventsNFT[id].blockNumber)
    let project = await getProject(nftAddress)
    addNFT(metaDataJSON,id,nftAddress,mintDate,project)
  }
}

function addNFT(MetaDataJSON,t,nftAddress,mintDate,project){
  console.log("addNFT")
  //add an nft
  let ulist = document.getElementById("portfolio")

  let list = document.createElement("li")



  list.addEventListener("click", function(){displayMetaData(MetaDataJSON,t,nftAddress,mintDate,project),false});

  let imageElement = document.createElement("img")
  imageElement.src = MetaDataJSON.image


  let nameElement = document.createElement("span")
  nameElement.innerHTML = MetaDataJSON.name

  list.appendChild(imageElement)
  list.appendChild(nameElement)
  ulist.appendChild(list)
}

async function displayMetaData(MetaDataJSON,t,nftAddress,mintDate,project){
  console.log("displayMetaDatas")
  console.log(MetaDataJSON)
  document.getElementById("nftImage").src = MetaDataJSON.image
  //document.getElementById("")
  document.getElementById("dumbImage").src = MetaDataJSON.image
  selectedID = t
  document.getElementById("destroyImage").src = MetaDataJSON.image
  selectedID = t

  let tokenID = t
  let name = MetaDataJSON.name
  let description = MetaDataJSON.description
  let Blockchain = "Ethereum"
  let Platform = "Independent"
  let ContractAddressLink = "https://" + network + ".etherscan.io/address/" + nftAddress

  document.getElementById("meta-tokenID").innerHTML = tokenID
  document.getElementById("meta-name").innerHTML = name
  document.getElementById("meta-description").innerHTML = "&quot;" + description + "&quot;"
  document.getElementById("meta-project").innerHTML = project
  document.getElementById("meta-date").innerHTML = mintDate
  document.getElementById("meta-blockchain").innerHTML = Blockchain
  document.getElementById("meta-platform").innerHTML = Platform
  document.getElementById("meta-contract").innerHTML = nftAddress
  document.getElementById("meta-contract").href = ContractAddressLink

  document.getElementById("inspector-image").src = MetaDataJSON.image


  let logged_in = document.querySelector('.logged-in')
  logged_in.classList.toggle('select-nft')
  logged_in.classList.toggle('nft-selected')
}


async function getProject(nftAddress) {
  let contract = new ethers.Contract(nftAddress,ERC721ABI,persistentProvider)
  let project
  try{
    let contractURI = await contract.contractURI()
    let contractMetaData = getIPFSJSON(contractURI)
    project = contractMetaData.name
  } catch {
    project = "unknown"
  }
  return(project)
}

async function displayImage(nftAddress, tokenId,element){
  console.log("displayImage")
  let IPFSJson = await getMetaData(nftAddress,tokenId)
  let imageLink = IPFSJson.image
  document.getElementById(element).src = imageLink
}

async function getOwnedIds(nftAddress,ownerAddress){
  let isOwnedArray = new Array()
  let ownedIdsArray = new Array()

  let eventslog = await getLogs(nftAddress)
  let highestTokenID = 0

  if(eventslog.length==0){
    return(ownedIdsArray)
  }

  for (let o = 0;o<eventslog.length;o++){
    let tokenID = eventslog[o].tokenID
    if(eventslog[o].to == ownerAddress){
      isOwnedArray[tokenID] = true
    } else if(eventslog[o].to != ownerAddress){
      isOwnedArray[tokenID] = false
    }
    if(tokenID>highestTokenID){
      highestTokenID = tokenID
    }
  }

  for (let s = 0;s<=highestTokenID;s++){
    if(isOwnedArray[s]==true){
      ownedIdsArray.push(s)
    }
  }
  return(ownedIdsArray)
}

async function ipfsLink() {

}

async function getLogs(nftAddress) {
	console.log("get Event Logs")
	let TopicT = ethers.utils.id("Transfer(address,address,uint256)");
	let filterT = {
    address: nftAddress ,
    fromBlock: 8000035 ,
    toBlock: 8300035,
    topics: [ TopicT ]
	}

	let resultT = await persistentProvider.getLogs(filterT)

	let events = new Array()

	for (n=0;n<resultT.length;n++){
		let log = new Object()
		let topics = resultT[n].topics
    console.log(resultT[n])

		let from = "0x" + topics[1].substring(26)
		let to = "0x" + topics[2].substring(26)
		let tokenID = ethers.utils.formatUnits(ethers.BigNumber.from(topics[3]),0)

		log.from = ethers.utils.getAddress(from)
		log.to = ethers.utils.getAddress(to)
		log.tokenID = parseInt(tokenID)
    log.blockNumber = resultT[n].blockNumber


    events.push(log)
  }
    console.log(events)
    eventsNFT = new Array()
    eventsNFT = events
    return(events)
}

async function getDate(blockNumber) {
  let block = await persistentProvider.getBlock(blockNumber)
  let timestamp = block.timestamp
  let date = new Date(timestamp*1000)
  let split = date.toString().split(' ')
  date = split[0] + ' ' + split[1] + ' ' +  split[2] + ' ' + split[3];
  return(date)
}

async function getMetaData(nftAddress, tokenId) {
  let contract = new ethers.Contract(nftAddress,ERC721ABI,persistentProvider)
  let IPFSLink = await contract.tokenURI(tokenId)
  let IPFSJson = getIPFSJSON(IPFSLink)
  return(IPFSJson)
}

function getIPFSJSON(IPFSLink) {
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", IPFSLink, false ); // false for synchronous request
    xmlHttp.send( null );
    return (JSON.parse(xmlHttp.responseText));
}

async function destroy(tokenId,nftAddress){
  let contract = new ethers.Contract(nftAddress,ERC721ABI,signer)
  await contract.transferFrom(signer._address,"0x0000000000000000000000000000000000000000",tokenId,{gasLimit:300000})
}

async function approve(nftAddress,operator){
  let contract = new ethers.Contract(nftAddress,ERC721ABI,signer)
  await contract.setApprovalForAll(operator,true)
}

async function drop(tokenId,minutes,Price){
  let drop = new ethers.Contract(dropAddress,dropABI,signer)
  let d = Date.now()
  d = parseInt(d/1000)
  d = d + minutes*60
  dropTime = parseInt(d)
  await drop.dropit(tokenId,dropTime,Price,{gasLimit:500000})
}

async function buy(tokenId){
  let drop = new ethers.Contract(dropAddress,dropABI,signer)
  let price = await drop.getPrice(tokenId)
  await drop.buy(tokenId,{value:price,gasLimit:300000})
}

async function getDropTime(tokenId){
  let drop = new ethers.Contract(dropAddress,dropABI,persistentProvider)
  let tokenDrop = await drop.tokenDrops(11)
  let dropTime = tokenDrop.dropTime
  return(dropTime)
}

async function setCountDownTimer(minutes) {
let element = "countDownTimer"
  // Set the date we're counting down to
  var countDownDate = new Date().getTime() + minutes*60000

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById(element).innerHTML = days + ":" + hours + ":"
  + minutes + ":" + seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById(element).innerHTML = "--:--:--";
  }
}, 1000);
}

async function triggerDrop(){
  let tokenID = selectedID
  let price = document.getElementById("ethPriceInput").value
  price = ethers.utils.parseEther(price)
  let minutes = document.getElementById("dropTimeInput").value
  minutes = parseInt(minutes)
  await approve(RPAddress,dropAddress)
  await drop(tokenID,minutes,price)

  await setCountDownTimer(minutes);

}
