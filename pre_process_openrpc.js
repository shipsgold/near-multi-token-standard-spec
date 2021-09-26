const NearMultiTokenOpenRPC = require("./near_multi_token_standard_openrpc.json");
//const NearMultiTokenOpenRPC = require("./tester.json");
const fs = require("fs");
const fetch = require("node-fetch");
const _ = require("lodash");
const ReferenceResolver = require("@json-schema-tools/reference-resolver/build/reference-resolver").default;
const utils = require('@open-rpc/schema-utils-js');
const rr = new ReferenceResolver({
  "files": async (uri)=> {
   // console.log(uri); 
   // return { "$ref" : uri}
}
});



async function blob(){
const doc = await utils.parseOpenRPCDocument(NearMultiTokenOpenRPC)
}
try {
blob();
}catch (e){
  console.error(e)
}