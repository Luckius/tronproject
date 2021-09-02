var contractAddress
var tronWeb
var userAccount1;
var userAccount2;


try {
  contractAddress = metacoinConfig.contractAddress
  tronWeb = new TronWeb(
      metacoinConfig.fullHost,
      metacoinConfig.fullHost,
      metacoinConfig.fullHost,
      metacoinConfig.privateKey
  )
} catch (err) {
  //alert('The app looks not configured. Please run `npm run migrate`')
}

//privateKey: "da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0",

App = {
  tronWebProvider: null,
  contracts: {},
  accounts: [],
  contractAddress: contractAddress,
  privateKey: "0d123819a39401053c236f7a2298b552d1f00786a7bbfea2c4abac22346272e9",
  //privateKey: "da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0",
  feeLimit: 100000000,
  callValue: 0,

  abi2: [
    {
      "constant": true,
      "inputs": [],
      "name": "PERCENTS_DIVIDER",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "referrer",
          "type": "address"
        }
      ],
      "name": "invest",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "getUserAvailable",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "getUserPercentRate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "MAX_CONTRACT_PERCENT",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSiteStats",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "LEADER_BONUS_STEP",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "getUserReferralsStats",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "uint64"
        },
        {
          "name": "",
          "type": "uint24[11]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "COMMUNITY_BONUS_STEP",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "TIME_STEP",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "projectAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getLeaderBonusRate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "ADMIN_FEE",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "MAX_HOLD_PERCENT",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "userAddress",
          "type": "address"
        },
        {
          "name": "last",
          "type": "uint256"
        },
        {
          "name": "first",
          "type": "uint256"
        }
      ],
      "name": "getUserDeposits",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        },
        {
          "name": "",
          "type": "uint256[]"
        },
        {
          "name": "",
          "type": "uint256[]"
        },
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "PROJECT_FEE",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalWithdrawn",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "getUserStats",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalInvested",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "REFERRAL_PERCENTS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "BASE_PERCENT",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "MAX_COMMUNITY_PERCENT",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalRefBonus",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "CONTRACT_BALANCE_STEP",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCommunityBonusRate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getContractBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalDeposits",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "INVEST_MAX_AMOUNT",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "getUserTotalDeposits",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "NETWORK",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "contractPercent",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "getUserLastDeposit",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "isActive",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "marketingAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "getUserAmountOfDeposits",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "DEPOSITS_MAX",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "MARKETING_FEE",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "contractCreationTime",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "networkAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "INVEST_MIN_AMOUNT",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "MAX_LEADER_PERCENT",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCurrentHalfDayTurnover",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCurrentHalfDay",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "getUserTotalWithdrawn",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "adminAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getContractBalanceRate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "marketingAddr",
          "type": "address"
        },
        {
          "name": "projectAddr",
          "type": "address"
        },
        {
          "name": "adminAddr",
          "type": "address"
        },
        {
          "name": "networkAddr",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "user",
          "type": "address"
        }
      ],
      "name": "Newbie",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "NewDeposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "referrer",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "referral",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "level",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "RefBonus",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "referrer",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "referral",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "RefBack",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "totalAmount",
          "type": "uint256"
        }
      ],
      "name": "FeePayed",
      "type": "event"
    }
  ],


  init: async function () {

    this.accounts = [
      tronWeb.address.fromPrivateKey(metacoinConfig.privateKey)
    ]

    const account = await tronWeb.createAccount()
    this.accounts.push(account.address.base58);
    userAccount1 = this.accounts[0];
    userAccount2 = this.accounts[1];
    //$("#contractAddress").text(this.contractAddress)
    this.initData();
    this.bindEvents();
    //console.log(userAccount2);
   
   //TW6kUTt6NjX4xD6ucb8WrdjtLRACXkc57P
   //hex 41f7aaae3679ec0e77c8660fa11251ed2fbe10077d
  //base58 TYYkNXn5hQmTfBM1wrdesHwZzfAZxzq9hg

  },

  initData: function () {

    /*var ContributeBtn =  document.getElementById("demo");
    var ContributeAmt = document.getElementById("demo");

    this.triggerContract('getUserAvailable',[userAccount1], function (data) {
      console.log(data.toNumber());
      $("#userAvailable").text(data.toNumber());
    });


    this.triggerContract('getUserTotalWithdrawn',[userAccount1], function (data) {
      console.log(data.toNumber());
      $("#totalWithdrawn").text(data.toNumber());
    });

    this.triggerContract('getUserAmountOfDeposits',[userAccount1], function (data) {
      console.log(data.toNumber());
      $("#totalNumberOfDeposits").text(data.toNumber());
    });

    this.triggerContract('getUserTotalDeposits',[userAccount1], function (data) {
      console.log(data.toNumber());
      $("#totalInvested").text(data.toNumber());
    });

    this.triggerContract('getUserPercentRate',[userAccount1], function (data) { 
      var percantage = data.toNumber()/100;
      console.log(percantage);
      $("#userPercentRate").text(percantage);
    });

    this.triggerContract('getLeaderBonusRate',[], function (data) {
      console.log(data.toNumber());
      $("#leaderBonusRate").text(data.toNumber());
    });


    this.triggerContract('getCommunityBonusRate',[], function (data) {
      console.log(data.toNumber());
      $("#communityBonusRate").text(data.toNumber());
    });

    //$('#walletAddress').text(userAccount1);
    if(userAccount1 != undefined){
      document.getElementById("walletAddress").value = userAccount1;
    }


    this.triggerContract('getContractBalance',[], function (data) {
      console.log(data.toNumber());
      $("#totalInvested1").text(data.toNumber());
    });*/
    
    
  },


  triggerContract: async function (methodName, args, callback) {

    let myContract = await tronWeb.contract().at(this.contractAddress)

    var callSend = 'send'
    this.abi2.forEach(function (val) {
      if (val.name === methodName) {
        callSend = /payable/.test(val.stateMutability) ? 'send' : 'call'
      }
    })

    if(callSend === 'send'){
      myContract[methodName](...args)[callSend]({
        feeLimit: this.feeLimit,
        callValue: this.callValue || 0,
      }).then(function (res) {
        if (res) {
          callback && callback(res);
          //console.log(res)
        }
      })
    }else{
      myContract[methodName](...args)[callSend]({
        feeLimit: this.feeLimit,
        callValue: 0 || 0,
      }).then(function (res) {
        if (res) {
          callback && callback(res);
          //console.log(res)
        }
      })
    }
  },


  //test
  //hex 41f7aaae3679ec0e77c8660fa11251ed2fbe10077d
  //base58 TYYkNXn5hQmTfBM1wrdesHwZzfAZxzq9hg

  initTronWeb: function () {
    /*
     * Replace me...
     */

    return this.initContract();
  },

  initContract: function () {
    /*
     * Replace me...
     */

    return this.bindEvents();
  },

  bindEvents: function () {
    /*var that = this;
    $(document).on('click', '#commit', function () {
      that.transfer();
      //that.triggerContract1();
    });

    $(document).on('click', '#investButton1' ,function(){
       //swal("Please wait");
       var trxValue = document.getElementById("trxValue1");
       that.callValue = parseInt(trxValue.value);
       console.log(that.callValue);
       console.log(userAccount1);
       that.triggerContract('invest',[userAccount1], function (data) {
          console.log(data);
          swal("Congrants!", "Your depost successed!", "success");
        }).catch(function(err){
           console.log("error occured");
           console.log(err);
        });

    });


    $(document).on('click', '#withdrawbutton' ,function(){
      swal("Please wait");
      that.triggerContract('withdraw',[], function (data) {
      console.log(data);
      swal("Congrants!", "Your withdraw successed!", "success");
      
    });
    });*/

  },

  markAdopted: function (adopters, account) {
    /*
     * Replace me...
     */
  },

  handleAdopt: function (event) {
    event.preventDefault();

    //var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }
};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
