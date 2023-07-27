export const contractABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_oracleContractAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_authoritiesContractAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "_locationName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_locationId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_totalComplaintsPerDifferentUserPerLocation",
          "type": "uint256"
        }
      ],
      "name": "CallTheAthorities",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_locationId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "enum ComplaintService.LocationStatus",
          "name": "_locationStatus",
          "type": "uint8"
        }
      ],
      "name": "ChangeLocationStatus",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_lat",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_long",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_complaintId",
          "type": "uint256"
        }
      ],
      "name": "MakeComplaint",
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
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_locationName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "locationId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_complaintId",
          "type": "uint256"
        }
      ],
      "name": "ValidateComplaint",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "COMPLAINT_LIMIT",
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
          "name": "_locationId",
          "type": "uint256"
        },
        {
          "internalType": "enum ComplaintService.LocationStatus",
          "name": "_locationStatus",
          "type": "uint8"
        }
      ],
      "name": "changeLocationStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "complaintCounter",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "complaints",
      "outputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "validated",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getLocation",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "enum ComplaintService.LocationStatus",
          "name": "",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
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
      "name": "locationCounter",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "locations",
      "outputs": [
        {
          "internalType": "string",
          "name": "locationName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "locationId",
          "type": "uint256"
        },
        {
          "internalType": "enum ComplaintService.LocationStatus",
          "name": "locationStatus",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "totalComplaints",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalComplaintsPerDifferentUser",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_lat",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_long",
          "type": "string"
        }
      ],
      "name": "makeComplaint",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "totalComplaintsPerUser",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userLimit",
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
          "name": "_complaintId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_locationName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_locationId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_complaintLimit",
          "type": "uint256"
        }
      ],
      "name": "validateComplaint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
export const contractAddress = "";
