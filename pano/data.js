var APP_DATA = {
  "scenes": [
    {
      "id": "0-outside",
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
      "faceSize": 1533,
      "initialViewParameters": {
        "yaw": -1.2843948193944232,
        "pitch": -0.26167147055625506,
        "fov": 1.547028894726856
      },
      "linkHotspots": [
        {
          "yaw": -1.880401030188283,
          "pitch": -0.038323722886620004,
          "rotation": 7.853981633974483,
          "target": "4-corridor-bottom"
        },
        {
          "yaw": -1.6082832004460492,
          "pitch": -0.13113548097492078,
          "rotation": 0,
          "target": "6-2_2"
        },
        {
          "yaw": -0.8102009394922121,
          "pitch": -0.11021995095332571,
          "rotation": 4.71238898038469,
          "target": "8-4_2"
        },
        {
          "yaw": -1.6154995157537684,
          "pitch": -0.506467778639351,
          "rotation": 3.141592653589793,
          "target": "12-5_2"
        },
        {
          "yaw": -1.1104632579701494,
          "pitch": -0.5821123639548631,
          "rotation": 9.42477796076938,
          "target": "13-6_2"
        },
        {
          "yaw": -0.8709031458273415,
          "pitch": -0.49881860711466786,
          "rotation": 10.210176124166829,
          "target": "16-7_2"
        },
        {
          "yaw": -0.7788592612947234,
          "pitch": -0.4024186793358471,
          "rotation": 10.210176124166829,
          "target": "19-8_2"
        },
        {
          "yaw": -1.5460272129596913,
          "pitch": 0.33162426610088325,
          "rotation": 0,
          "target": "4-corridor-bottom"
        },
        {
          "yaw": 1.494196717969123,
          "pitch": 0.3357016467078644,
          "rotation": 0,
          "target": "1-sea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sea",
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
          "yaw": 0.06843966982669158,
          "pitch": 0.31439052330032524,
          "rotation": 0,
          "target": "0-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corridor-top",
      "name": "Corridor Top",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11820004599986689,
          "pitch": 0.8655241505407538,
          "rotation": 0,
          "target": "18-8_1"
        },
        {
          "yaw": 1.0865196802826294,
          "pitch": 0.9210302152422383,
          "rotation": 13.351768777756625,
          "target": "15-7_1"
        },
        {
          "yaw": 2.287178464470939,
          "pitch": 0.9202540070479799,
          "rotation": 5.497787143782138,
          "target": "14-6_1"
        },
        {
          "yaw": 3.0607983496908435,
          "pitch": 0.5146977028640443,
          "rotation": 0,
          "target": "10-5_1"
        },
        {
          "yaw": -1.387609805713188,
          "pitch": 0.9766078970791341,
          "rotation": 10.995574287564278,
          "target": "3-corridor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corridor-stairs",
      "name": "Corridor Stairs",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6783021587342342,
        "pitch": 0.413244454742129,
        "fov": 1.484516220934426
      },
      "linkHotspots": [
        {
          "yaw": 2.082204553938407,
          "pitch": 0.44517699210644324,
          "rotation": 12.566370614359176,
          "target": "5-2_1"
        },
        {
          "yaw": 1.724105225782865,
          "pitch": 0.8386096981590239,
          "rotation": 20.420352248333668,
          "target": "4-corridor-bottom"
        },
        {
          "yaw": 0.0014144801505437954,
          "pitch": 0.10827056192408158,
          "rotation": 0,
          "target": "2-corridor-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-corridor-bottom",
      "name": "Corridor Bottom",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.494581694118402,
        "pitch": 0.36937373856391886,
        "fov": 1.547028894726856
      },
      "linkHotspots": [
        {
          "yaw": 0.9911599316131579,
          "pitch": 0.7726585950451081,
          "rotation": 0.7853981633974483,
          "target": "5-2_1"
        },
        {
          "yaw": 0.5232356853311977,
          "pitch": 0.22550779014931344,
          "rotation": 0,
          "target": "7-4_1"
        },
        {
          "yaw": 0.1957605409213432,
          "pitch": 0.36244933451500216,
          "rotation": 5.497787143782138,
          "target": "3-corridor-stairs"
        },
        {
          "yaw": -2.8185936795630564,
          "pitch": 0.8138984796303372,
          "rotation": 0,
          "target": "0-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2_1",
      "name": "2_1",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.5707479792985524,
        "pitch": 0.4656456557776085,
        "fov": 1.547028894726856
      },
      "linkHotspots": [
        {
          "yaw": 2.078693152226654,
          "pitch": 0.9369355788493969,
          "rotation": 0,
          "target": "6-2_2"
        },
        {
          "yaw": -1.0710091124651484,
          "pitch": 0.5148748687642222,
          "rotation": 0,
          "target": "4-corridor-bottom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2_2",
      "name": "2_2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.128929220232237,
        "pitch": 0.022238228240183844,
        "fov": 1.547028894726856
      },
      "linkHotspots": [
        {
          "yaw": 0.6467916288857936,
          "pitch": 0.6458432627762338,
          "rotation": 5.497787143782138,
          "target": "5-2_1"
        },
        {
          "yaw": -3.1313149038651886,
          "pitch": 0.029516438990096816,
          "rotation": 0,
          "target": "0-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-4_1",
      "name": "4_1",
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
      "faceSize": 1533,
      "initialViewParameters": {
        "yaw": 3.1197693166001983,
        "pitch": 0.5614129342437018,
        "fov": 1.547028894726856
      },
      "linkHotspots": [
        {
          "yaw": -0.786222380361,
          "pitch": 0.9495163045941073,
          "rotation": 0.7853981633974483,
          "target": "8-4_2"
        },
        {
          "yaw": 1.796051337661865,
          "pitch": 0.6212267202999762,
          "rotation": 7.0685834705770345,
          "target": "9-4_bathroom"
        },
        {
          "yaw": 1.5293950126811096,
          "pitch": 0.19968956431250007,
          "rotation": 0,
          "target": "4-corridor-bottom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-4_2",
      "name": "4_2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.7402854121302092,
        "pitch": 0.2721397705388,
        "fov": 1.547028894726856
      },
      "linkHotspots": [
        {
          "yaw": 0.7114403322350977,
          "pitch": 0.6673420982838465,
          "rotation": 11.780972450961727,
          "target": "7-4_1"
        },
        {
          "yaw": -3.0451207508500584,
          "pitch": 0.007789994233169395,
          "rotation": 0.7853981633974483,
          "target": "0-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-4_bathroom",
      "name": "4_Bathroom",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.33067406239666397,
          "pitch": 0.8238081587960551,
          "rotation": 0,
          "target": "7-4_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-5_1",
      "name": "5_1",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6423926278332033,
          "pitch": 0.5020827675821486,
          "rotation": 0,
          "target": "2-corridor-top"
        },
        {
          "yaw": 0.2743421134342938,
          "pitch": 0.7797919934862527,
          "rotation": 1.5707963267948966,
          "target": "11-5_bathroom"
        },
        {
          "yaw": -0.13423297344658458,
          "pitch": 0.6022391343072364,
          "rotation": 0,
          "target": "12-5_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-5_bathroom",
      "name": "5_Bathroom",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5612507670853466,
          "pitch": 0.8494880248557042,
          "rotation": 4.71238898038469,
          "target": "10-5_1"
        },
        {
          "yaw": 1.8165861774085483,
          "pitch": 0.8746751512809698,
          "rotation": 1.5707963267948966,
          "target": "12-5_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-5_2",
      "name": "5_2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.517984807758083,
          "pitch": 0.6557581002685104,
          "rotation": 5.497787143782138,
          "target": "10-5_1"
        },
        {
          "yaw": -0.019309109509197953,
          "pitch": 0.10872419823829915,
          "rotation": 3.141592653589793,
          "target": "0-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-6_2",
      "name": "6_2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4264981471184175,
          "pitch": 0.5479286979569871,
          "rotation": 5.497787143782138,
          "target": "14-6_1"
        },
        {
          "yaw": 3.0923377914883377,
          "pitch": 0.0494601013885525,
          "rotation": 3.141592653589793,
          "target": "0-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-6_1",
      "name": "6_1",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6608246084857425,
        "pitch": 0.15782661474048965,
        "fov": 1.547028894726856
      },
      "linkHotspots": [
        {
          "yaw": 1.6172090654357554,
          "pitch": 0.5603825847607613,
          "rotation": 0,
          "target": "13-6_2"
        },
        {
          "yaw": -1.5351949244902858,
          "pitch": 0.3017702048478714,
          "rotation": 0,
          "target": "2-corridor-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-7_1",
      "name": "7_1",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6439216364477964,
          "pitch": 0.8110701518923307,
          "rotation": 0,
          "target": "2-corridor-top"
        },
        {
          "yaw": 0.20078915646119633,
          "pitch": 0.5249635940362545,
          "rotation": 0,
          "target": "16-7_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-7_2",
      "name": "7_2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6510728312419296,
        "pitch": 0.6359995581767084,
        "fov": 1.547028894726856
      },
      "linkHotspots": [
        {
          "yaw": -0.2725224655354346,
          "pitch": 0.5525751909272802,
          "rotation": 0,
          "target": "15-7_1"
        },
        {
          "yaw": -0.09458729039583602,
          "pitch": 0.18190145688461357,
          "rotation": 0,
          "target": "2-corridor-top"
        },
        {
          "yaw": -3.0117579690652274,
          "pitch": 0.2612510395256127,
          "rotation": 0,
          "target": "0-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-8_bathroom",
      "name": "8_Bathroom",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8282234407830824,
          "pitch": 0.8249550674164396,
          "rotation": 4.71238898038469,
          "target": "18-8_1"
        },
        {
          "yaw": -0.6069949549419356,
          "pitch": 0.8295468323643451,
          "rotation": 1.5707963267948966,
          "target": "2-corridor-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-8_1",
      "name": "8_1",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04351722245085732,
          "pitch": 0.8346658180410866,
          "rotation": 0,
          "target": "19-8_2"
        },
        {
          "yaw": 1.8411469646051097,
          "pitch": 0.8745469692790877,
          "rotation": 1.5707963267948966,
          "target": "17-8_bathroom"
        },
        {
          "yaw": 1.511464495309223,
          "pitch": 0.6539531892547927,
          "rotation": 0,
          "target": "2-corridor-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-8_2",
      "name": "8_2",
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
      "faceSize": 1533,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.026906129094401265,
          "pitch": 0.5757206800929104,
          "rotation": 0,
          "target": "18-8_1"
        },
        {
          "yaw": -3.0274442239911075,
          "pitch": 0.24673687251727827,
          "rotation": 0,
          "target": "0-outside"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
