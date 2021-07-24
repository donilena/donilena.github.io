var APP_DATA = {
  "scenes": [
    {
      "id": "0-downstairs",
      "name": "downstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.3257453712495426,
        "pitch": 0.3339611223931591,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.2616236915809829,
          "pitch": 0.2980099078985745,
          "rotation": 0,
          "target": "2-outside"
        },
        {
          "yaw": 2.165114393407027,
          "pitch": 0.06443810800180749,
          "rotation": 0,
          "target": "1-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-upstairs",
      "name": "upstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.9224228324036883,
        "pitch": 0.166867010377727,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.040997914656742296,
          "pitch": 0.24591185055734144,
          "rotation": 0,
          "target": "0-downstairs"
        },
        {
          "yaw": -3.040981027869357,
          "pitch": 0.7068454774301962,
          "rotation": 0,
          "target": "2-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-outside",
      "name": "outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.2996896389409294,
        "pitch": -0.24938058858439582,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 1.4567437584692797,
          "pitch": 0.3807356316265569,
          "rotation": 0,
          "target": "3-street"
        },
        {
          "yaw": -1.321006317419318,
          "pitch": 0.3837842204554587,
          "rotation": 0,
          "target": "0-downstairs"
        },
        {
          "yaw": -1.5385926156604892,
          "pitch": 0.4073938126043437,
          "rotation": 0,
          "target": "1-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-street",
      "name": "street",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 1.5325506980306542,
        "pitch": 0.01902032972950707,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.5200759584461814,
          "pitch": 0.15064157478153106,
          "rotation": 0,
          "target": "4-sea"
        },
        {
          "yaw": 1.298933743198969,
          "pitch": 0.3024149249335544,
          "rotation": 0,
          "target": "2-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sea",
      "name": "sea",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07559375697007198,
          "pitch": 0.18362185394282093,
          "rotation": 0,
          "target": "3-street"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "donilena",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
