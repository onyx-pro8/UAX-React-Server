// main list images
import Server from '@assets/media/main/server.svg';
import Hexagon from '@assets/media/main/hexagon.svg';
import Intel from '@assets/media/main/intel.svg';
import NodeJs from '@assets/media/main/node js.svg';
import Lines from '@assets/media/main/lines.svg';

// device images
import CPU from '@assets/media/main/cpu.svg';
import Memory from '@assets/media/main/memory.svg';
import Storage from '@assets/media/main/storage.svg';
import HTTP from '@assets/media/main/http.svg';
import Issues from '@assets/media/main/issues.svg';
import Restart from '@assets/media/main/restart.svg';
import PortNo from '@assets/media/main/port no.svg';

// txs images
import Power from '@assets/media/main/power.svg';
import Tx from '@assets/media/main/transactions.svg';
import Block from '@assets/media/main/latest block.svg';

// server buttons image
import restartApp from '@assets/media/main/restart app.svg';
import Logs from '@assets/media/main/show logs.svg';
import ErrorLogs from '@assets/media/main/show error logs.svg';
import Apis from '@assets/media/main/apis.svg';

export const datas = {
    PCInfor: [
        {
            icon: Server,
            label: 'tecmint-a89e'
        },
        {
            icon: Hexagon,
            label: 2
        },
        {
            icon: Intel,
            label: '2GiB'
        },
        {
            icon: Intel,
            label: 'Intel Core Processor (Broadwell, no TSX, IBRS) x1'
        },
        {
            icon: NodeJs,
            label: 'v12.18.3'
        },
        {
            icon: Lines,
            label: '4.4.1'
        },
    ],
    device: [
        {
            icon: CPU,
            key: 'CPU',
            value: '0%'
        },
        {
            icon: Memory,
            key: 'Memory',
            value: '62MiB'
        },
        {
            icon: Storage,
            key: 'Storage',
            value: '0.8 ms'
        },
        {
            icon: HTTP,
            key: 'HTTP...',
            value: '11.5 ms'
        },
        {
            icon: Issues,
            key: 'Issues',
            value: '0'
        },
        {
            icon: Restart,
            key: 'Restarts',
            value: '4'
        },
        {
            icon: PortNo,
            key: 'Port No',
            value: '9'
        },
    ],
    txs: [
        {
            icon: Power,
            key: 'Total Power',
            value: '1786'
        },
        {
            icon: Tx,
            key: 'Pending Transactions',
            value: '0'
        },
        {
            icon: Tx,
            key: 'Total Transactions',
            value: '187123'
        },
        {
            icon: Block,
            key: 'Latest Block no.',
            value: '10'
        },
    ],
    table: {
        thead: ['ID', 'Name', 'pid', 'Uptime', 'Status', 'CPU'],
        tbody: [
            [
                {
                    content: '1',
                    style: 'text-[#E22FFF]'
                },
                {
                    content: 'EXPNode'
                },
                {
                    content: '31010'
                },
                {
                    content: '42h',
                    style: 'text-[#E22FFF]'
                },
                {
                    content: 'Online',
                    style: 'text-[#47FF91]'
                },
                {
                    content: '0%'
                }
            ],
            [
                {
                    content: '2',
                    style: 'text-[#E22FFF]'
                },
                {
                    content: 'explorer'
                },
                {
                    content: '31982'
                },
                {
                    content: '42h',
                    style: 'text-[#E22FFF]'
                },
                {
                    content: 'Offline',
                    style: 'text-[#FF697D]'
                },
                {
                    content: '0%'
                }
            ],
        ]
    },
    serverBtns: [
        {
            icon: restartApp,
            content: 'Restart Apps',
            path: '/'
        },
        {
            icon: Logs,
            content: 'Show Logs',
            path: '/terminal'
        },
        {
            icon: ErrorLogs,
            content: 'Show Error Logs',
            path: '/'
        },
        {
            icon: Apis,
            content: 'API’s',
            path: '/apis'
        },
    ],
    server: [
        {
            cpu: 0,
            memory: 62,
            storage: 0.8,
            http: 11.5,
            issues: 0,
            restarts: 4,
            port: 9,
            totalPower: 1786,
            padingTx: 0,
            totalTx: 187123,
            block: 10
        },
        {
            cpu: 0,
            memory: 62,
            storage: 0.8,
            http: 11.5,
            issues: 0,
            restarts: 4,
            port: 9,
            totalPower: 1786,
            padingTx: 0,
            totalTx: 187123,
            block: 10
        },
    ],
    apiList: [
        {
            method: 'POST',
            domain: 'Mint Coin'
        },
        {
            method: 'POST',
            domain: 'Get Pending Txn'
        },
        {
            method: 'POST',
            domain: 'Get Mining Eligibility'
        },
        {
            method: 'POST',
            domain: 'Coin Transaction'
        },
        {
            method: 'POST',
            domain: 'Add Global Power'
        },
        {
            method: 'POST',
            domain: 'Node'
        },
        {
            method: 'POST',
            domain: 'Txn Count'
        },
    ],
    apis: [
        {
            value: 'post',
            label: 'POST'
        },
        {
            value: 'get',
            label: 'Get'
        },
        {
            value: 'put',
            label: 'PUT'
        },
        {
            value: 'delet',
            label: 'DELET'
        },
    ],
    apiResponds: [
        <>
            <code>
                “current_mint_coin” :
                <code className="text-[#47FF91]">
                    true,
                </code>
            </code>
            <code>
                “last_minted_block” :  {'{'}
            </code>
            <code>
                “index” : <code className="text-[#47FF91]">3333</code>,
            </code>
            <code>
                “timestamp” : <code className="text-[#47FF91]">323123535324</code>,
            </code>
            <code>
                “transactions” : {'['}
            </code>
            <code>
                {'{'}
            </code>
            <code>
                “ amount” : 0.9999,
            </code>
            <code>
                “sender” : “<code className="text-[#FF697D]">EfDz4LTNhalh</code>.uaxn”,
            </code>
            <code>
                “remark” “UAXN”
            </code>
            <code>
                {'}'}
            </code>
            <code>
                {'{'}
            </code>
            <code>
                “nonce” : 70039,
            </code>
            <code>
                “hash” : “<code className="text-[#FF697D]">00056cdyt54qjhu7644b3fe4880</code>”,
            </code>
            <code>
                “peerID” : “<code className="text-[#FF697D]">Z_miner</code>”,
            </code>
            <code>
                {'}'}
            </code>
            <code>
                {'}'}
            </code>
        </>,
        <>
            <code>
                “current_mint_coin” :
                <code className="text-[#FF697D]">
                    false,
                </code>
            </code>
            <code>
                “last_minted_block” :  {'{'}
            </code>
            <code>
                “index” : <code className="text-[#47FF91]">4126</code>,
            </code>
            <code>
                “timestamp” : <code className="text-[#47FF91]">1749803550675</code>,
            </code>
            <code>
                “transactions” : {'['}
            </code>
            <code>
                {'{'}
            </code>
            <code>
                “ amount” : 0.528654122,
            </code>
            <code>
                “sender” : “<code className="text-[#FF697D]">EfDz4LTNhalh</code>.uaxn”,
            </code>
            <code>
                “remark” “UAXN”
            </code>
            <code>
                {'}'}
            </code>
            <code>
                {'{'}
            </code>
            <code>
                “nonce” : 70035,
            </code>
            <code>
                “hash” : “<code className="text-[#FF697D]">435we4323323412</code>”,
            </code>
            <code>
                “peerID” : “<code className="text-[#FF697D]">Z_miner</code>”,
            </code>
            <code>
                {'}'}
            </code>
            <code>
                {'}'}
            </code>
        </>,
        <>
            <code>
                “current_mint_coin” :
                <code className="text-[#47FF91]">
                    true,
                </code>
            </code>
            <code>
                “last_minted_block” :  {'{'}
            </code>
            <code>
                “index” : <code className="text-[#47FF91]">6666</code>,
            </code>
            <code>
                “timestamp” : <code className="text-[#47FF91]">3231235332435324</code>,
            </code>
            <code>
                “transactions” : {'['}
            </code>
            <code>
                {'{'}
            </code>
            <code>
                “ amount” : 0.9999,
            </code>
            <code>
                “sender” : “<code className="text-[#FF697D]">EfDz4LTNhalh</code>.uaxn”,
            </code>
            <code>
                “remark” “UAXN”
            </code>
            <code>
                {'}'}
            </code>
            <code>
                {'{'}
            </code>
            <code>
                “nonce” : 70088,
            </code>
            <code>
                “hash” : “<code className="text-[#FF697D]">999f9dse9393f783r23rsdf</code>”,
            </code>
            <code>
                “peerID” : “<code className="text-[#FF697D]">Z_miner</code>”,
            </code>
            <code>
                {'}'}
            </code>
            <code>
                {'}'}
            </code>
        </>
    ]
}