import { useEffect, useState } from 'react';
import axios from 'axios';
// https://api-mainnet.magiceden.dev/v2/collections/degensweepers/stats
// https://api-mainnet.magiceden.io/rpc/getCollectionEscrowStats/degensweepers

// , {
//   headers: {
//     "Content-Type": "application/json",
//     // "Access-Control-Expose-Headers": "Access-Control-*",
//     // "Access-Control-Allow-Headers": "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept",
//     // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     // 'Access-Control-Allow-Origin' : '*'
//   }
// }
const useFloorPrice = () => {
  const [floorPrice, setFloorPrice] = useState(0)
  useEffect(() => {
    (async () => {
      const response = await axios.get('https://api-mainnet.magiceden.dev/v2/collections/degensweepers/stats', {
        headers: {
          "Content-Type": "application/json",
          // "access-control-allow-credentials": false,
          // "Access-Control-Allow-Methods": 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH',
          // 'Access-Control-Allow-Origin' : '*',
          // "Access-Control-Allow-Headers": "date,content-type,x-ratelimit-limit,x-ratelimit-remaining,x-ratelimit-reset,vary,access-control-allow-credentials,cache-control,cdn-cache-control,etag,cf-cache-status,set-cookie,server,cf-ray,content-encoding,alt-svc",
        }
      })
      console.log(response)
      const floor_price = response.data.floorPrice/Math.pow(10, 9)
      setFloorPrice(floor_price)
    })();
  }, [floorPrice])

  return { floorPrice };
}

export default useFloorPrice;